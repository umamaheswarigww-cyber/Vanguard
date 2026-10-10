// ============================================================
// FINQUEST INDIA — CORE CONTENT TYPES
// Phase 1: Curriculum Architecture
// ============================================================

/** Localized text supporting English and Telugu */
export interface LocalizedText {
  en: string;
  te: string;
}

/** Source reference for financial facts */
export interface SourceRef {
  id: string;
  title: string;
  url: string;
  publisher: string;
  applicableDate?: string;   // e.g. "2026-02-26" for a specific circular
  lastReviewedAt: string;    // ISO date when content was verified
  notes?: string;
}

/** Learning objective for a concept/lesson */
export interface LearningObjective {
  id: string;
  description: LocalizedText;
  evidenceType: 'explain' | 'calculate' | 'predict' | 'identify' | 'compare' | 'classify' | 'apply';
}

/** Content completion status */
export type ContentStatus =
  | 'planned'
  | 'draft'
  | 'reviewed'
  | 'implemented'
  | 'verified';

/** Difficulty level */
export type ContentLevel = 'foundation' | 'core' | 'deeper' | 'advanced';

/** The four pillars from the Vanguard PS */
export type PillarId = 'budget' | 'save' | 'invest' | 'safe';

/** A concept entry in the knowledge graph */
export interface Concept {
  id: string;
  slug: string;
  title: LocalizedText;
  pillarId: PillarId;
  categoryId: string;
  level: ContentLevel;
  prerequisites: string[];         // concept IDs
  learningObjectives: LearningObjective[];
  summary: LocalizedText;
  fullExplanation: LocalizedText;
  misconceptions: Misconception[];
  lessonIds: string[];
  relatedConceptIds: string[];
  glossaryTerms: string[];
  sourceRefs: SourceRef[];
  contentStatus: ContentStatus;
  lastReviewedAt?: string;
}

/** A common misconception with correction */
export interface Misconception {
  id: string;
  wrongBelief: LocalizedText;
  correction: LocalizedText;
  explanation: LocalizedText;
}

// ============================================================
// LESSON ENGINE TYPES
// ============================================================

export type LessonStageType =
  | 'hook'
  | 'discovery'
  | 'intuition'
  | 'mechanism'
  | 'formal_concept'
  | 'worked_example'
  | 'experiment'
  | 'variation'
  | 'misconception'
  | 'applied_task'
  | 'mastery_check'
  | 'remediation'
  | 'connections'
  | 'sources';

/** A single stage within a lesson */
export interface LessonStage {
  id: string;
  type: LessonStageType;
  title?: LocalizedText;
  content: LocalizedText;
  /** Interactive component key — mapped to a component in the lesson engine */
  interactionKey?: string;
  interactionConfig?: Record<string, unknown>;
  /** Quiz questions for mastery/discovery stages */
  questions?: QuizQuestion[];
}

/** Quiz question for assessment */
export interface QuizQuestion {
  id: string;
  question: LocalizedText;
  type: 'mcq' | 'true_false' | 'fill_blank' | 'slider_predict';
  options?: LocalizedText[];
  correctIndex?: number;   // for mcq, true_false
  correctAnswer?: string;  // for fill_blank
  explanation: LocalizedText;
  objectiveId: string;
}

/** A complete lesson */
export interface Lesson {
  id: string;
  slug: string;
  title: LocalizedText;
  pillarId: PillarId;
  conceptIds: string[];
  level: ContentLevel;
  estimatedMinutes: number;
  stages: LessonStage[];
  prerequisites: string[];  // lesson IDs
  learningObjectives: LearningObjective[];
  contentStatus: ContentStatus;
  lastReviewedAt?: string;
}

// ============================================================
// CURRICULUM STRUCTURE
// ============================================================

export interface Module {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  pillarId: PillarId;
  icon: string;  // lucide icon name
  lessonIds: string[];
  conceptIds: string[];
  level: ContentLevel;
  contentStatus: ContentStatus;
}

export interface Pillar {
  id: PillarId;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  tagline: LocalizedText;
  color: string;    // CSS color token key
  icon: string;     // lucide icon name
  moduleIds: string[];
  contentStatus: ContentStatus;
}

// ============================================================
// PROGRESS TYPES
// ============================================================

export interface ObjectiveEvidence {
  objectiveId: string;
  lessonId: string;
  demonstratedAt: string;  // ISO timestamp
  evidenceType: LearningObjective['evidenceType'];
  score?: number;
}

export interface LessonProgress {
  lessonId: string;
  startedAt: string;
  completedAt?: string;
  /** Stage the learner last opened, so a lesson can resume after reload. */
  currentStageId?: string;
  stagesVisited: string[];
  objectivesEvidenced: ObjectiveEvidence[];
  attemptsCount: number;
  lastAttemptAt: string;
}

export interface LearnerProgress {
  learnerId: string;
  name?: string;
  language: 'en' | 'te';
  lessonsProgress: Record<string, LessonProgress>;
  currentPillar?: PillarId;
  lastActivityAt: string;
  streakDays: number;
  lastStreakDate?: string;
}

// ============================================================
// GLOSSARY
// ============================================================

export interface GlossaryEntry {
  id: string;
  slug: string;
  term: LocalizedText;
  shortDefinition: LocalizedText;
  explanation: LocalizedText;
  pillarId: PillarId;
  relatedTermIds: string[];
  relatedConceptId?: string;
  lessonId?: string;
  sourceRefs: SourceRef[];
  contentStatus: ContentStatus;
}

// ============================================================
// SIMULATION / INTERACTION TYPES
// ============================================================

/** Budget Lab state */
export interface BudgetAllocation {
  categoryId: string;
  label: LocalizedText;
  amount: number;
  isEssential: boolean;
  icon: string;
}

export interface BudgetScenario {
  id: string;
  title: LocalizedText;
  totalIncome: number;
  savingsGoal: number;
  categories: BudgetAllocation[];
  unexpectedEvent?: {
    id: string;
    description: LocalizedText;
    amount: number;
    triggerAt: 'start' | 'after_initial' | 'manual';
  };
}

/** SIP simulation row */
export interface SIPRow {
  period: number;          // 1-indexed month
  contribution: number;    // ₹ contribution this period
  navPrice: number;        // NAV at this period
  unitsBought: number;     // contribution / nav
  cumulativeUnits: number;
  cumulativeContribution: number;
  portfolioValue: number;  // cumulativeUnits × navPrice
  averageCost: number;     // cumulativeContribution / cumulativeUnits
}
