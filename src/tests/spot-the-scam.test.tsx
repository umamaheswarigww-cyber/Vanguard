import { beforeEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';
import { AppProvider } from '@/context/AppContext';

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppProvider>
        <App />
      </AppProvider>
    </MemoryRouter>
  );
}

describe('Spot the Mutual Fund Scam Feature', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the Spot the Scam page at /spot-the-scam with disclaimer banner', () => {
    const view = renderRoute('/spot-the-scam');
    expect(screen.getByRole('heading', { name: /Spot the Mutual Fund Scam/i })).toBeInTheDocument();
    expect(screen.getByText(/Educational only\. Not investment advice\./i)).toBeInTheDocument();
    expect(screen.getAllByText(/1930/i)[0]).toBeInTheDocument();
    view.unmount();
  });

  it('renders the 3 main tabs: Red Flags, Spot the Scam, and Quiz', () => {
    const view = renderRoute('/spot-the-scam');
    expect(screen.getByRole('button', { name: /1\. Red Flags/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /2\. Spot the Scam/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /3\. Fraud Quiz/i })).toBeInTheDocument();
    view.unmount();
  });

  it('shows 7 illustrated warning cards under the Red Flags tab by default', () => {
    const view = renderRoute('/spot-the-scam');
    expect(screen.getByText(/7 Major Red Flags of Mutual Fund Fraud/i)).toBeInTheDocument();
    expect(screen.getByText(/Guaranteed High Returns/i)).toBeInTheDocument();
    expect(screen.getByText(/Fake Urgency & FOMO/i)).toBeInTheDocument();
    expect(screen.getByText(/Personal UPI \/ Account Transfers/i)).toBeInTheDocument();
    view.unmount();
  });

  it('switches to the Spot the Scam simulation tab and evaluates scenario answers', () => {
    const view = renderRoute('/spot-the-scam');
    const simulationTab = screen.getByRole('button', { name: /2\. Spot the Scam/i });
    fireEvent.click(simulationTab);

    expect(screen.getByText(/Scenario 1 of 7/i)).toBeInTheDocument();
    // Verify action buttons exist: "🚨 THIS IS A SCAM" and "✅ LOOKS SAFE"
    const scamButton = screen.getByRole('button', { name: /THIS IS A SCAM/i });
    expect(scamButton).toBeInTheDocument();

    // First scenario in scamData is a scam message from Telegram ("15% MONTHLY FIXED PROFIT")
    fireEvent.click(scamButton);
    expect(screen.getByText(/Spot On! You identified this correctly\./i)).toBeInTheDocument();
    view.unmount();
  });

  it('switches to the Quiz tab, answers questions, and awards the badge', () => {
    const view = renderRoute('/spot-the-scam');
    const quizTab = screen.getByRole('button', { name: /3\. Fraud Quiz/i });
    fireEvent.click(quizTab);

    expect(screen.getByText(/FRAUD DEFENSE MASTERY/i)).toBeInTheDocument();

    // Question 1: Check the official SEBI registered intermediaries portal at sebi.gov.in
    const q1Option = screen.getByText(/Check the official SEBI registered intermediaries portal at sebi\.gov\.in/i);
    fireEvent.click(q1Option);
    const nextBtn1 = screen.getByRole('button', { name: /Next Question →/i });
    fireEvent.click(nextBtn1);

    // Question 2: Refuse to share the OTP, hang up immediately, and report the number
    const q2Option = screen.getByText(/Refuse to share the OTP, hang up immediately, and report the number/i);
    fireEvent.click(q2Option);
    const nextBtn2 = screen.getByRole('button', { name: /Next Question →/i });
    fireEvent.click(nextBtn2);

    // Question 3: “Get 5% guaranteed returns every week with zero risk through our secret AI fund portfolio!”
    const q3Option = screen.getByText(/Get 5% guaranteed returns every week with zero risk through our secret AI fund portfolio/i);
    fireEvent.click(q3Option);
    const nextBtn3 = screen.getByRole('button', { name: /Next Question →/i });
    fireEvent.click(nextBtn3);

    // Question 4: To the official Asset Management Company (AMC) bank account or SEBI clearing platform
    const q4Option = screen.getByText(/To the official Asset Management Company \(AMC\) bank account or SEBI clearing platform/i);
    fireEvent.click(q4Option);
    const nextBtn4 = screen.getByRole('button', { name: /Next Question →/i });
    fireEvent.click(nextBtn4);

    // Question 5: 1930 (National Cybercrime Reporting Helpline)
    const q5Option = screen.getByText(/1930 \(National Cybercrime Reporting Helpline\)/i);
    fireEvent.click(q5Option);
    const completeBtn = screen.getByRole('button', { name: /Complete Quiz & View Badge →/i });
    fireEvent.click(completeBtn);

    // Badge unlocked check!
    expect(screen.getByText(/Congratulations, Scam Spotter!/i)).toBeInTheDocument();
    expect(localStorage.getItem('scam-spotter-badge')).toBe('unlocked');
    view.unmount();
  });
});
