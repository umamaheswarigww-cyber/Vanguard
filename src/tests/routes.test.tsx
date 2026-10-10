import { beforeEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';
import { AppProvider } from '@/context/AppContext';
import { LESSONS } from '@/content/lessons';
import { PILLARS } from '@/content/curriculum/pillars';
import { GLOSSARY } from '@/content/glossary/glossary';

function renderRoute(path: string) {
  return render(<MemoryRouter initialEntries={[path]}><AppProvider><App /></AppProvider></MemoryRouter>);
}

describe('Application routes', () => {
  beforeEach(() => {
    localStorage.removeItem('finquest-progress');
    localStorage.removeItem('finquest-lang');
  });

  it('renders every primary route', () => {
    const paths = [
      '/',
      '/learn',
      `/learn/${PILLARS[0].slug}`,
      '/money-lab',
      '/explore',
      '/explore/glossary',
      `/explore/glossary/${GLOSSARY[0].slug}`,
      '/practice',
      '/progress',
    ];

    for (const path of paths) {
      const view = renderRoute(path);
      expect(screen.getByRole('main').textContent?.trim(), `${path} should render content`).toBeTruthy();
      view.unmount();
    }
  });

  it('renders the new hero headline and editorial quote on homepage', () => {
    const view = renderRoute('/');
    expect(screen.getByText('Your money.')).toBeInTheDocument();
    expect(screen.getByText('Your choices.')).toBeInTheDocument();
    expect(screen.getByText('Your future.')).toBeInTheDocument();
    expect(screen.getByText(/Financial confidence begins when you understand the choices in front of you/i)).toBeInTheDocument();
    expect(screen.getByText(/FINANCIAL CONFIDENCE STARTS HERE/i)).toBeInTheDocument();
    view.unmount();
  });

  it('renders the 6 clean primary navigation links in the header', () => {
    const view = renderRoute('/');
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getAllByText('Dashboard')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Learn')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Money Lab')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Explore')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Practice')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Progress')[0]).toBeInTheDocument();
    view.unmount();
  });

  it('resolves each registered lesson to its own lesson screen', async () => {
    for (const lesson of LESSONS) {
      const pillar = PILLARS.find(item => item.id === lesson.pillarId);
      expect(pillar, `${lesson.id} should belong to a registered pillar`).toBeTruthy();
      const view = renderRoute(`/learn/${pillar?.slug}/${lesson.slug}`);
      expect(await screen.findByRole('heading', { name: lesson.title.en })).toBeInTheDocument();
      view.unmount();
    }
  });
});
