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
