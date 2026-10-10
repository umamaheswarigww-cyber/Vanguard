import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppProvider } from '@/context/AppContext';
import { LessonMiniLab } from '@/components/learning/LessonConceptVisuals';

function renderLab(lessonId: string) {
  return render(<AppProvider><LessonMiniLab lessonId={lessonId} /></AppProvider>);
}

describe('Concept mini-labs', () => {
  it('updates the ownership percentage when shares change', () => {
    renderLab('businesses-and-shares');
    fireEvent.change(screen.getByRole('slider', { name: 'Shares held' }), { target: { value: '5' } });
    expect(screen.getByText('5% ownership')).toBeInTheDocument();
  });

  it('shows when a buyer bid can meet the example seller ask', () => {
    renderLab('stock-market-mechanics');
    fireEvent.change(screen.getByRole('slider'), { target: { value: '105' } });
    expect(screen.getByText(/The prices can match/)).toBeInTheDocument();
  });

  it('steps through a trade route and can replay it', () => {
    renderLab('stock-market-ecosystem');
    fireEvent.click(screen.getByRole('button', { name: 'Next step' }));
    expect(screen.getByRole('status')).toHaveTextContent('Broker routes it');
    fireEvent.click(screen.getByRole('button', { name: 'Replay' }));
    expect(screen.getByRole('status')).toHaveTextContent('You place an order');
  });

  it('recalculates NAV from the asset controls', () => {
    renderLab('mutual-fund-structure');
    const original = screen.getByText('₹10.00');
    fireEvent.change(screen.getByRole('slider', { name: 'Assets' }), { target: { value: '1500000' } });
    expect(screen.getByText('₹15.56')).toBeInTheDocument();
    expect(original).toBeInTheDocument();
  });

  it('changes the fund description when its category is selected', () => {
    renderLab('fund-types');
    fireEvent.click(screen.getByRole('button', { name: 'Debt fund' }));
    expect(screen.getByText('Primarily holds debt instruments.')).toBeInTheDocument();
  });

  it('recalculates fee illustrations when the duration changes', () => {
    renderLab('active-vs-passive');
    const sliders = screen.getAllByRole('slider');
    const originalValues = screen.getAllByText(/₹[\d,]+/);
    const originalValue = originalValues[originalValues.length - 2]?.textContent;
    fireEvent.change(sliders[1], { target: { value: '20' } });
    const updatedValues = screen.getAllByText(/₹[\d,]+/);
    expect(updatedValues[updatedValues.length - 2]?.textContent).not.toBe(originalValue);
  });
});
