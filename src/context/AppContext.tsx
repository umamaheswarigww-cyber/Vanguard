import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { LearnerProgress, LessonProgress, ObjectiveEvidence } from '@/types/content';

type Language = 'en' | 'te';

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  progress: LearnerProgress;
  updateLessonProgress: (update: Partial<LessonProgress> & { lessonId: string }) => void;
  addObjectiveEvidence: (evidence: ObjectiveEvidence) => void;
  markLessonStarted: (lessonId: string) => void;
  markLessonCompleted: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isLessonStarted: (lessonId: string) => boolean;
  getObjectivesEvidenced: (lessonId: string) => ObjectiveEvidence[];
}

const defaultProgress: LearnerProgress = {
  learnerId: 'local-user',
  language: 'en',
  lessonsProgress: {},
  lastActivityAt: new Date().toISOString(),
  streakDays: 0,
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('finquest-lang') as Language) || 'en';
  });

  const [progress, setProgress] = useState<LearnerProgress>(() => {
    try {
      const stored = localStorage.getItem('finquest-progress');
      return stored ? JSON.parse(stored) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  // Persist progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('finquest-progress', JSON.stringify(progress));
    } catch {
      // localStorage not available — silent fail
    }
  }, [progress]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('finquest-lang', lang);
    setProgress(prev => ({ ...prev, language: lang }));
  }, []);

  const markLessonStarted = useCallback((lessonId: string) => {
    setProgress(prev => {
      const existing = prev.lessonsProgress[lessonId];
      if (existing) return prev;
      const now = new Date().toISOString();
      return {
        ...prev,
        lastActivityAt: now,
        lessonsProgress: {
          ...prev.lessonsProgress,
          [lessonId]: {
            lessonId,
            startedAt: now,
            stagesVisited: [],
            objectivesEvidenced: [],
            attemptsCount: 1,
            lastAttemptAt: now,
          },
        },
      };
    });
  }, []);

  const markLessonCompleted = useCallback((lessonId: string) => {
    const now = new Date().toISOString();
    setProgress(prev => ({
      ...prev,
      lastActivityAt: now,
      lessonsProgress: {
        ...prev.lessonsProgress,
        [lessonId]: {
          ...(prev.lessonsProgress[lessonId] || {
            lessonId,
            startedAt: now,
            stagesVisited: [],
            objectivesEvidenced: [],
            attemptsCount: 1,
            lastAttemptAt: now,
          }),
          completedAt: now,
          lastAttemptAt: now,
        },
      },
    }));
  }, []);

  const updateLessonProgress = useCallback((update: Partial<LessonProgress> & { lessonId: string }) => {
    const now = new Date().toISOString();
    setProgress(prev => ({
      ...prev,
      lastActivityAt: now,
      lessonsProgress: {
        ...prev.lessonsProgress,
        [update.lessonId]: {
          ...(prev.lessonsProgress[update.lessonId] || {
            lessonId: update.lessonId,
            startedAt: now,
            stagesVisited: [],
            objectivesEvidenced: [],
            attemptsCount: 0,
            lastAttemptAt: now,
          }),
          ...update,
          lastAttemptAt: now,
        },
      },
    }));
  }, []);

  const addObjectiveEvidence = useCallback((evidence: ObjectiveEvidence) => {
    setProgress(prev => {
      const lp = prev.lessonsProgress[evidence.lessonId];
      if (!lp) return prev;
      const alreadyHas = lp.objectivesEvidenced.some(e => e.objectiveId === evidence.objectiveId);
      if (alreadyHas) return prev;
      return {
        ...prev,
        lessonsProgress: {
          ...prev.lessonsProgress,
          [evidence.lessonId]: {
            ...lp,
            objectivesEvidenced: [...lp.objectivesEvidenced, evidence],
          },
        },
      };
    });
  }, []);

  const isLessonCompleted = useCallback((lessonId: string) => {
    return !!progress.lessonsProgress[lessonId]?.completedAt;
  }, [progress]);

  const isLessonStarted = useCallback((lessonId: string) => {
    return !!progress.lessonsProgress[lessonId];
  }, [progress]);

  const getObjectivesEvidenced = useCallback((lessonId: string) => {
    return progress.lessonsProgress[lessonId]?.objectivesEvidenced || [];
  }, [progress]);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      progress,
      updateLessonProgress,
      addObjectiveEvidence,
      markLessonStarted,
      markLessonCompleted,
      isLessonCompleted,
      isLessonStarted,
      getObjectivesEvidenced,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export function useLanguage() {
  const { language, setLanguage } = useApp();
  return { language, setLanguage };
}

/** Translate a LocalizedText based on current language */
export function useT() {
  const { language } = useApp();
  return function t(text: { en: string; te: string } | undefined, fallback = ''): string {
    if (!text) return fallback;
    return text[language] || text.en || fallback;
  };
}
