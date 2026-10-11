import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { LearnerProgress, LessonProgress, ObjectiveEvidence } from '@/types/content';

type Language = 'en' | 'te';

export interface LearnerGamification {
  totalXP: number;
  level: number;
  levelTitle: { en: string; te: string };
  nextLevelXP: number;
  progressPercent: number;
  badgesUnlocked: number;
}

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  progress: LearnerProgress;
  gamification: LearnerGamification;
  updateLessonProgress: (update: Partial<LessonProgress> & { lessonId: string }) => void;
  addObjectiveEvidence: (evidence: ObjectiveEvidence) => void;
  markLessonStarted: (lessonId: string) => void;
  markLessonCompleted: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isLessonStarted: (lessonId: string) => boolean;
  getObjectivesEvidenced: (lessonId: string) => ObjectiveEvidence[];
}

export function calculateGamification(progress: LearnerProgress): LearnerGamification {
  let xp = 0;
  let badges = 0;

  // 1. Lessons completed: 100 XP each
  // 2. Objectives evidenced: 25 XP each
  // 3. Visited stages: 10 XP each
  Object.values(progress.lessonsProgress).forEach(lp => {
    if (lp.completedAt) {
      xp += 100;
      badges += 1;
    }
    xp += (lp.objectivesEvidenced?.length || 0) * 25;
    xp += (lp.stagesVisited?.length || 0) * 10;
  });

  // Check spot the scam badge in localStorage
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('scam-spotter-badge') === 'unlocked') {
      xp += 150;
      badges += 1;
    }
  } catch {
    // Ignore storage errors
  }

  // Level thresholds
  let level = 1;
  let levelTitle = { en: 'Novice Saver', te: 'ఆరంభ పొదుపరి' };
  let nextLevelXP = 300;
  let prevLevelXP = 0;

  if (xp >= 2500) {
    level = 5;
    levelTitle = { en: 'Financial Legend', te: 'ఆర్థిక దిగ్గజం' };
    nextLevelXP = 5000;
    prevLevelXP = 2500;
  } else if (xp >= 1500) {
    level = 4;
    levelTitle = { en: 'Wealth Architect', te: 'సంపద రూపశిల్పి' };
    nextLevelXP = 2500;
    prevLevelXP = 1500;
  } else if (xp >= 700) {
    level = 3;
    levelTitle = { en: 'Smart Investor', te: 'తెలివైన పెట్టుబడిదారుడు' };
    nextLevelXP = 1500;
    prevLevelXP = 700;
  } else if (xp >= 300) {
    level = 2;
    levelTitle = { en: 'Budget Master', te: 'బడ్జెట్ మాస్టర్' };
    nextLevelXP = 700;
    prevLevelXP = 300;
  }

  const range = nextLevelXP - prevLevelXP;
  const progressPercent = Math.min(100, Math.round(((xp - prevLevelXP) / range) * 100));

  return {
    totalXP: xp,
    level,
    levelTitle,
    nextLevelXP,
    progressPercent: Math.max(5, progressPercent),
    badgesUnlocked: badges,
  };
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

  const gamification = React.useMemo(() => calculateGamification(progress), [progress]);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      progress,
      gamification,
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
