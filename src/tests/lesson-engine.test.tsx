import { beforeEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import { LessonEngine } from '@/components/learning/LessonEngine';
import type { Lesson } from '@/types/content';

const lesson: Lesson = {
  id: 'test-lesson',
  slug: 'test-lesson',
  title: { en: 'Test lesson', te: 'పరీక్ష పాఠం' },
  pillarId: 'invest',
  conceptIds: [],
  level: 'foundation',
  estimatedMinutes: 2,
  prerequisites: [],
  learningObjectives: [{
    id: 'test-objective',
    description: { en: 'Choose the matching idea', te: 'సరైన భావనను ఎంచుకోండి' },
    evidenceType: 'explain',
  }],
  contentStatus: 'implemented',
  stages: [
    { id: 'start', type: 'hook', title: { en: 'Start here', te: 'ఇక్కడ ప్రారంభించండి' }, content: { en: 'First stage.', te: 'మొదటి దశ.' } },
    {
      id: 'check',
      type: 'mastery_check',
      title: { en: 'Quick check', te: 'చిన్న పరీక్ష' },
      content: { en: 'Choose the right answer.', te: 'సరైన సమాధానాన్ని ఎంచుకోండి.' },
      questions: [{
        id: 'test-question',
        question: { en: 'Which option is correct?', te: 'ఏ ఎంపిక సరైనది?' },
        type: 'mcq',
        options: [{ en: 'Option A', te: 'ఎంపిక A' }, { en: 'Option B', te: 'ఎంపిక B' }],
        correctIndex: 1,
        explanation: { en: 'Option B matches the example.', te: 'ఎంపిక B ఉదాహరణకు సరిపోతుంది.' },
        objectiveId: 'test-objective',
      }],
    },
  ],
};

function renderLesson() {
  return render(<MemoryRouter><AppProvider><LessonEngine lesson={lesson} /></AppProvider></MemoryRouter>);
}

describe('LessonEngine progress and mastery check', () => {
  beforeEach(() => {
    localStorage.removeItem('finquest-progress');
    localStorage.removeItem('finquest-lang');
  });

  it('saves the active stage and resumes there after remounting', async () => {
    const firstView = renderLesson();
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    await waitFor(() => {
      const progress = JSON.parse(localStorage.getItem('finquest-progress') || '{}');
      expect(progress.lessonsProgress['test-lesson']?.currentStageId).toBe('check');
      expect(progress.lessonsProgress['test-lesson']?.stagesVisited).toContain('start');
    });
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
    firstView.unmount();

    renderLesson();
    expect(await screen.findByRole('heading', { name: 'Quick check' })).toBeInTheDocument();
  });

  it('allows retry after a wrong answer and completes only after a correct answer', async () => {
    renderLesson();
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    fireEvent.click(await screen.findByRole('button', { name: 'Option A' }));
    expect(screen.getByRole('status')).toHaveTextContent('The correct answer is Option B');
    expect(screen.getByRole('button', { name: 'Complete lesson' })).toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: 'Option B' }));
    expect(screen.getByRole('button', { name: 'Complete lesson' })).toBeEnabled();
    fireEvent.click(screen.getByRole('button', { name: 'Complete lesson' }));

    expect(await screen.findByRole('heading', { name: 'Test lesson' })).toBeInTheDocument();
    await waitFor(() => {
      const saved = JSON.parse(localStorage.getItem('finquest-progress') || '{}').lessonsProgress['test-lesson'];
      expect(saved?.completedAt).toBeTruthy();
      expect(saved?.objectivesEvidenced).toEqual(expect.arrayContaining([expect.objectContaining({ objectiveId: 'test-objective' })]));
    });
  });
});
