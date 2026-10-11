import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Lesson, LessonStage, QuizQuestion } from '@/types/content';
import { useT, useApp } from '@/context/AppContext';
import {
  ChevronLeft, ChevronRight, CheckCircle2, RotateCcw, Award,
  Lightbulb, LockKeyhole, Circle, Eye, FlaskConical, Compass,
} from 'lucide-react';
import clsx from 'clsx';
import { BudgetLab } from '@/components/simulation/BudgetLab';
import { CompoundInterestExplorer } from '@/components/simulation/CompoundInterestExplorer';
import { InflationCalculator } from '@/components/simulation/InflationCalculator';
import { FDCalculator } from '@/components/simulation/FDCalculator';
import { RDCalculator } from '@/components/simulation/RDCalculator';
import { EnhancedSIPCalculator } from '@/components/simulation/EnhancedSIPCalculator';
import { NAVLab } from '@/components/simulation/NAVLab';
import { ScamDetectiveSim } from '@/components/simulation/ScamDetectiveSim';
import { MarketIndicesLab } from '@/components/simulation/MarketIndicesLab';
import { CompanyFinancialsLab } from '@/components/simulation/CompanyFinancialsLab';
import { FinancialRatiosLab } from '@/components/simulation/FinancialRatiosLab';
import { LessonConceptVisual, LessonMiniLab } from '@/components/learning/LessonConceptVisuals';
import { hasLessonMiniLab } from '@/components/learning/lesson-visual-registry';
import { LESSONS } from '@/content/lessons';
import { PILLARS } from '@/content/curriculum/pillars';

interface LessonEngineProps {
  lesson: Lesson;
  onComplete?: () => void;
}

const stageLabels: Record<LessonStage['type'], { en: string; te: string }> = {
  hook: { en: 'Hook', te: 'ఆసక్తి' },
  discovery: { en: 'Discover', te: 'కనుగొనండి' },
  intuition: { en: 'Build intuition', te: 'అవగాహన పెంచండి' },
  mechanism: { en: 'How it works', te: 'ఇది ఎలా పనిచేస్తుంది' },
  formal_concept: { en: 'Key idea', te: 'ముఖ్య భావన' },
  worked_example: { en: 'Worked example', te: 'పరిష్కరించిన ఉదాహరణ' },
  experiment: { en: 'Explore', te: 'ప్రయోగించండి' },
  variation: { en: 'Try a variation', te: 'మరో విధంగా ప్రయత్నించండి' },
  misconception: { en: 'Common mix-up', te: 'సాధారణ అపోహ' },
  applied_task: { en: 'Decision lab', te: 'నిర్ణయ ప్రయోగశాల' },
  mastery_check: { en: 'Check understanding', te: 'అవగాహనను పరీక్షించండి' },
  remediation: { en: 'Review', te: 'మళ్లీ చూడండి' },
  connections: { en: 'Connect the ideas', te: 'భావనలను కలపండి' },
  sources: { en: 'Sources', te: 'మూలాలు' },
};

function currentTimestamp() {
  return new Date().toISOString();
}

function isAnswerCorrect(question: QuizQuestion, answer: number | string | undefined) {
  if (question.type === 'fill_blank') {
    return typeof answer === 'string' && typeof question.correctAnswer === 'string'
      && answer.trim().toLocaleLowerCase() === question.correctAnswer.trim().toLocaleLowerCase();
  }
  return typeof answer === 'number' && question.correctIndex === answer;
}

function correctAnswerLabel(question: QuizQuestion, t: ReturnType<typeof useT>) {
  if (question.type === 'fill_blank') return question.correctAnswer ?? '';
  if (question.correctIndex !== undefined && question.options?.[question.correctIndex]) {
    return t(question.options[question.correctIndex]);
  }
  return '';
}

function renderInline(text: string) {
  return text.split(/(\[[^\]]+\]\(https:\/\/[^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\$[^$]+\$)/g).filter(Boolean).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    if (link) return <a key={index} className="font-semibold text-teal-700 underline" href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    if (part.startsWith('$') && part.endsWith('$')) return <code key={index} className="rounded bg-cream-50 px-1 font-mono text-[0.92em] text-navy-700">{formatMath(part.slice(1, -1))}</code>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index} className="rounded bg-navy-50 px-1 py-0.5 text-[0.92em]">{part.slice(1, -1)}</code>;
    return part;
  });
}

function formatMath(source: string) {
  return source
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 ÷ $2)')
    .replace(/\\text\{([^{}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^{}]+)\}/g, '$1')
    .replace(/\\times/g, '×')
    .replace(/\\approx/g, '≈')
    .replace(/\\div/g, '÷')
    .replace(/\\left|\\right/g, '')
    .replace(/[{}]/g, '');
}

function LessonContent({ content }: { content: string }) {
  const lines = content.split(/\r?\n/);
  const blocks: Array<{ type: 'paragraph' | 'list' | 'ordered' | 'quote' | 'heading' | 'formula'; value: string | string[]; level?: number }> = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let ordered: string[] = [];
  let quote: string[] = [];
  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: 'paragraph', value: paragraph.join(' ') });
    paragraph = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: 'list', value: list });
    list = [];
  };
  const flushOrdered = () => {
    if (ordered.length) blocks.push({ type: 'ordered', value: ordered });
    ordered = [];
  };
  const flushQuote = () => {
    if (quote.length) blocks.push({ type: 'quote', value: quote.join(' ') });
    quote = [];
  };

  for (const originalLine of lines) {
    const line = originalLine.trim();
    if (!line) { flushParagraph(); flushList(); flushOrdered(); flushQuote(); continue; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph(); flushList(); flushOrdered(); flushQuote();
      blocks.push({ type: 'heading', value: heading[2], level: heading[1].length });
      continue;
    }
    if (line.startsWith('$$') && line.endsWith('$$')) {
      flushParagraph(); flushList(); flushOrdered(); flushQuote();
      blocks.push({ type: 'formula', value: line.slice(2, -2) });
      continue;
    }
    const bullet = line.match(/^(?:[-*•])\s+(.+)$/);
    if (bullet) { flushParagraph(); list.push(bullet[1]); continue; }
    const numbered = line.match(/^\d+[.)]\s+(.+)$/);
    if (numbered) { flushParagraph(); flushList(); flushQuote(); ordered.push(numbered[1]); continue; }
    if (line.startsWith('> ')) { flushParagraph(); flushList(); flushOrdered(); quote.push(line.slice(2)); continue; }
    flushList(); flushOrdered(); flushQuote();
    paragraph.push(line);
  }
  flushParagraph(); flushList(); flushOrdered(); flushQuote();

  return <div className="space-y-3">{blocks.map((block, index) => {
    if (block.type === 'heading') {
      const Heading = block.level === 1 ? 'h3' : 'h4';
      return <Heading className="font-bold text-navy-700" key={index}>{renderInline(block.value as string)}</Heading>;
    }
    if (block.type === 'list') return <ul className="list-disc space-y-1 pl-5 marker:text-teal-500" key={index}>{(block.value as string[]).map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}</ul>;
    if (block.type === 'ordered') return <ol className="list-decimal space-y-1 pl-5 marker:font-semibold marker:text-teal-700" key={index}>{(block.value as string[]).map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}</ol>;
    if (block.type === 'quote') return <blockquote className="border-l-2 border-teal-300 pl-3 text-navy-500" key={index}>{renderInline(block.value as string)}</blockquote>;
    if (block.type === 'formula') {
      const formula = formatMath(block.value as string);
      return <div className="overflow-x-auto rounded-xl border border-teal-100 bg-teal-50/70 px-3 py-2 text-center font-mono text-sm text-navy-700" key={index}>{formula}</div>;
    }
    return <p className="leading-7" key={index}>{renderInline(block.value as string)}</p>;
  })}</div>;
}

function renderInteraction(key: string | undefined) {
  switch (key) {
    case 'budget-lab': return <BudgetLab />;
    case 'compound-interest-explorer': return <CompoundInterestExplorer />;
    case 'inflation-explorer': return <InflationCalculator />;
    case 'fd-calculator': return <FDCalculator />;
    case 'rd-calculator': return <RDCalculator />;
    case 'sip-lab': return <EnhancedSIPCalculator />;
    case 'nav-lab': return <NAVLab />;
    case 'scam-detective': return <ScamDetectiveSim />;
    case 'market-indices-lab': return <MarketIndicesLab />;
    case 'company-financials-lab': return <CompanyFinancialsLab />;
    case 'financial-ratios-lab': return <FinancialRatiosLab />;
    default: return null;
  }
}

function QuizCard({
  question,
  answer,
  onAnswer,
}: {
  question: QuizQuestion;
  answer: number | string | undefined;
  onAnswer: (answer: number | string) => void;
}) {
  const t = useT();
  const answered = answer !== undefined;
  const correct = isAnswerCorrect(question, answer);
  const locked = correct;
  const answerText = correctAnswerLabel(question, t);

  return (
    <section className="rounded-2xl border border-navy-100 bg-cream-50/80 p-4 sm:p-5" aria-labelledby={`question-${question.id}`}>
      <h3 id={`question-${question.id}`} className="mb-3 flex items-start gap-2 text-sm font-semibold leading-relaxed text-navy-700 sm:text-base">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400 text-xs text-white">?</span>
        <span>{t(question.question)}</span>
      </h3>

      {question.type === 'fill_blank' ? (
        <label className="block text-xs font-medium text-navy-500">
          {t({ en: 'Type your answer', te: 'మీ సమాధానం రాయండి' })}
          <input
            className="input-base mt-1 text-sm"
            value={typeof answer === 'string' ? answer : ''}
            disabled={locked}
            onChange={event => onAnswer(event.target.value)}
            aria-label={t({ en: 'Your answer', te: 'మీ సమాధానం' })}
          />
        </label>
      ) : question.options ? (
        <div className="space-y-2">
          {question.options.map((option, index) => {
            const chosen = answer === index;
            const isCorrectOption = question.correctIndex === index;
            return (
              <button
                type="button"
                key={index}
                aria-pressed={chosen}
                disabled={locked}
                onClick={() => onAnswer(index)}
                className={clsx(
                  'flex w-full items-center justify-between gap-2 rounded-xl border bg-white p-3 text-left text-sm font-medium transition-all',
                  !answered && 'border-navy-100 text-navy-600 hover:border-teal-300',
                  answered && isCorrectOption && 'border-teal-300 bg-teal-50 text-teal-800',
                  answered && chosen && !correct && 'border-coral-300 bg-coral-50 text-coral-800',
                  answered && !isCorrectOption && !chosen && 'border-navy-100 text-navy-400 opacity-70',
                  locked && 'cursor-default',
                )}
              >
                <span>{t(option)}</span>
                {answered && isCorrectOption && <CheckCircle2 size={17} className="shrink-0 text-teal-600" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      ) : null}

      {answered && (
        <div role="status" className={clsx('mt-3 rounded-xl border p-3 text-xs leading-relaxed', correct ? 'border-teal-200 bg-teal-50 text-teal-900' : 'border-coral-200 bg-coral-50 text-coral-900')}>
          <strong>{correct ? t({ en: 'That is right. ', te: 'సరైన సమాధానం. ' }) : t({ en: 'Take another look. ', te: 'మరోసారి ఆలోచించండి. ' })}</strong>
          {!correct && answerText && <span>{t({ en: 'The correct answer is ', te: 'సరైన సమాధానం ' })}<b>{answerText}</b>. </span>}
          {t(question.explanation)}
          {!correct && <span> {t({ en: 'Try again when you are ready.', te: 'సిద్ధమైనప్పుడు మళ్లీ ప్రయత్నించండి.' })}</span>}
        </div>
      )}
    </section>
  );
}

export function LessonEngine({ lesson, onComplete }: LessonEngineProps) {
  const t = useT();
  const { progress, markLessonStarted, markLessonCompleted, updateLessonProgress, addObjectiveEvidence } = useApp();
  const savedProgress = progress.lessonsProgress[lesson.id];
  const [currentStageIdx, setCurrentStageIdx] = useState(() => {
    const savedIndex = lesson.stages.findIndex(stage => stage.id === savedProgress?.currentStageId);
    return savedIndex >= 0 ? savedIndex : 0;
  });
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | string>>({});
  const [lessonFinished, setLessonFinished] = useState(false);

  const stages = lesson.stages;
  const currentStage = stages[currentStageIdx];
  const completedStages = useMemo(() => new Set(savedProgress?.stagesVisited ?? []), [savedProgress?.stagesVisited]);
  const completedCount = completedStages.size;
  const progressPercent = Math.round((completedCount / Math.max(stages.length, 1)) * 100);
  const stageQuestions = currentStage?.questions ?? [];
  const assessmentComplete = stageQuestions.length === 0 || stageQuestions.every(question => isAnswerCorrect(question, selectedAnswers[question.id]));
  const evidenceIds = new Set((savedProgress?.objectivesEvidenced ?? []).map(evidence => evidence.objectiveId));
  const nextLessons = LESSONS.filter(candidate => candidate.prerequisites.includes(lesson.id));
  const suggestedLessons = nextLessons.length > 0
    ? nextLessons
    : LESSONS.filter(candidate => candidate.pillarId === lesson.pillarId && candidate.id !== lesson.id).slice(0, 2);

  useEffect(() => {
    markLessonStarted(lesson.id);
    updateLessonProgress({
      lessonId: lesson.id,
      currentStageId: stages[currentStageIdx]?.id,
      stagesVisited: savedProgress?.stagesVisited ?? [],
    });
  }, [lesson.id, markLessonStarted, stages, currentStageIdx, updateLessonProgress, savedProgress?.stagesVisited]);

  const saveStage = (stageIndex: number, completedStageIndex?: number) => {
    const visited = new Set(progress.lessonsProgress[lesson.id]?.stagesVisited ?? []);
    if (completedStageIndex !== undefined && stages[completedStageIndex]) visited.add(stages[completedStageIndex].id);
    updateLessonProgress({
      lessonId: lesson.id,
      currentStageId: stages[stageIndex]?.id,
      stagesVisited: Array.from(visited),
    });
  };

  const handleAnswer = (question: QuizQuestion, answer: number | string) => {
    setSelectedAnswers(previous => ({ ...previous, [question.id]: answer }));
    if (isAnswerCorrect(question, answer)) {
      const objective = lesson.learningObjectives.find(item => item.id === question.objectiveId);
      addObjectiveEvidence({
        objectiveId: question.objectiveId,
        lessonId: lesson.id,
        demonstratedAt: currentTimestamp(),
        evidenceType: objective?.evidenceType ?? (question.type === 'slider_predict' ? 'predict' : question.type === 'fill_blank' ? 'calculate' : 'explain'),
      });
    }
  };

  const handleStageSelect = (stageIndex: number) => {
    const stage = stages[stageIndex];
    const canOpen = stageIndex <= currentStageIdx || completedStages.has(stage?.id);
    if (!canOpen) return;
    setCurrentStageIdx(stageIndex);
    saveStage(stageIndex);
  };

  const handlePrevious = () => {
    const previousIndex = Math.max(0, currentStageIdx - 1);
    setCurrentStageIdx(previousIndex);
    saveStage(previousIndex);
  };

  const handleContinue = () => {
    if (!assessmentComplete) return;
    if (currentStageIdx < stages.length - 1) {
      const nextIndex = currentStageIdx + 1;
      setCurrentStageIdx(nextIndex);
      saveStage(nextIndex, currentStageIdx);
      return;
    }
    const visited = new Set(progress.lessonsProgress[lesson.id]?.stagesVisited ?? []);
    visited.add(currentStage.id);
    updateLessonProgress({ lessonId: lesson.id, currentStageId: currentStage.id, stagesVisited: Array.from(visited) });
    markLessonCompleted(lesson.id);
    setLessonFinished(true);
    onComplete?.();
  };

  if (lessonFinished) {
    const pillar = PILLARS.find(item => item.id === lesson.pillarId);
    return (
      <section className="mx-auto my-8 max-w-3xl rounded-3xl border border-teal-200 bg-white p-6 shadow-card-hover sm:p-10" aria-labelledby="lesson-finished-title">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-teal-200 bg-teal-50"><Award size={30} className="text-teal-600" /></div>
          <div><span className="badge badge-teal">{t({ en: 'Lesson complete', te: 'పాఠం పూర్తయింది' })}</span><h2 id="lesson-finished-title" className="mt-1 text-2xl font-bold text-navy-700">{t(lesson.title)}</h2></div>
        </div>

        {/* Gamified XP Reward Banner */}
        <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-teal-500/15 via-emerald-500/15 to-navy-500/10 border border-teal-300 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <div>
              <span className="font-extrabold text-sm text-navy-900 block">{t({ en: 'Quest Mastered!', te: 'క్వెస్ట్ విజయవంతం!' })}</span>
              <span className="text-xs text-teal-800">{t({ en: 'You earned +100 XP towards your Financial Mastery Rank.', te: 'మీరు +100 XP సంపాదించారు.' })}</span>
            </div>
          </div>
          <span className="badge badge-teal text-xs font-black px-3 py-1">+100 XP ⚡</span>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-navy-500">{t({ en: 'You reached the end of this lesson. The objectives below show which ideas you demonstrated in the knowledge check.', te: 'మీరు ఈ పాఠాన్ని పూర్తి చేశారు. క్రింది లక్ష్యాలు జ్ఞాన పరీక్షలో మీరు చూపిన అవగాహనను సూచిస్తాయి.' })}</p>
        <div className="mt-5 rounded-2xl bg-cream-50 p-4">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-navy-500">{t({ en: 'Learning objectives', te: 'అభ్యాస లక్ష్యాలు' })}</h3>
          <ul className="space-y-2">{lesson.learningObjectives.map(objective => {
            const evidenced = evidenceIds.has(objective.id);
            return <li key={objective.id} className="flex items-start gap-2 text-sm text-navy-600"><CheckCircle2 size={16} className={clsx('mt-0.5 shrink-0', evidenced ? 'text-teal-600' : 'text-navy-300')} /><span>{t(objective.description)}{!evidenced && <span className="ml-1 text-xs text-navy-400">· {t({ en: 'not yet evidenced', te: 'ఇంకా నిరూపించలేదు' })}</span>}</span></li>;
          })}</ul>
        </div>
        {suggestedLessons.length > 0 && <div className="mt-5"><h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-navy-500">{t({ en: 'Continue learning', te: 'తదుపరి అభ్యాసం' })}</h3><div className="flex flex-wrap gap-2">{suggestedLessons.map(next => <Link key={next.id} to={`/learn/${pillar?.slug ?? 'invest'}/${next.slug}`} className="btn-secondary px-3 py-2 text-xs">{t(next.title)}<ChevronRight size={14} /></Link>)}</div></div>}
        <button type="button" onClick={() => { setCurrentStageIdx(0); setLessonFinished(false); setSelectedAnswers({}); }} className="btn-ghost mt-5 px-2 text-xs"><RotateCcw size={14} />{t({ en: 'Review this lesson', te: 'ఈ పాఠాన్ని మళ్లీ చూడండి' })}</button>
      </section>
    );
  }

  if (!currentStage) return null;
  const currentTitle = currentStage.title ? t(currentStage.title) : t(stageLabels[currentStage.type]);
  const activeInteraction = renderInteraction(currentStage.interactionKey);
  const showMiniLab = !activeInteraction && currentStage.type === 'mechanism' && hasLessonMiniLab(lesson.id);

  return (
    <div className="mx-auto my-5 max-w-7xl px-3 sm:px-5 lg:px-8">
      <header className="mb-4 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700">{t({ en: 'Vanguard learning lab', te: 'వాన్‌గార్డ్ అభ్యాస ప్రయోగశాల' })}</p><h1 className="truncate text-lg font-bold text-navy-700">{t(lesson.title)}</h1></div>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-navy-500 sm:mt-0"><span className="rounded-full bg-cream-50 px-2.5 py-1">{lesson.estimatedMinutes} {t({ en: 'min', te: 'నిమి' })}</span><span className="rounded-full bg-cream-50 px-2.5 py-1 capitalize">{lesson.level}</span><span className="rounded-full bg-teal-50 px-2.5 py-1 font-semibold text-teal-800">{t({ en: `${lesson.learningObjectives.length} learning goals`, te: `${lesson.learningObjectives.length} అభ్యాస లక్ష్యాలు` })}</span></div>
      </header>

      <nav className="mb-4 rounded-2xl border border-navy-100 bg-white p-3 shadow-sm" aria-label={t({ en: 'Lesson stages', te: 'పాఠ్య దశలు' })}>
        <div className="mb-2 flex items-center justify-between gap-3 text-[10px] text-navy-500"><span className="font-semibold">{t({ en: `Stage ${currentStageIdx + 1} of ${stages.length}`, te: `${stages.length}లో ${currentStageIdx + 1}వ దశ` })} · {currentTitle}</span><span className="font-bold text-teal-700">{completedCount} / {stages.length} {t({ en: 'complete', te: 'పూర్తి' })} · {progressPercent}%</span></div>
        <div className="progress-bar" role="progressbar" aria-label={t({ en: 'Completed lesson stages', te: 'పూర్తయిన పాఠ్య దశలు' })} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}><div className="progress-fill" style={{ width: `${progressPercent}%` }} /></div>
        <ol className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">{stages.map((stage, index) => {
          const complete = completedStages.has(stage.id);
          const active = index === currentStageIdx;
          const locked = index > currentStageIdx && !complete;
          return <li key={stage.id} className="shrink-0"><button type="button" onClick={() => handleStageSelect(index)} disabled={locked} aria-current={active ? 'step' : undefined} aria-label={`${index + 1}. ${stage.title ? t(stage.title) : t(stageLabels[stage.type])}${complete ? `, ${t({ en: 'complete', te: 'పూర్తి' })}` : locked ? `, ${t({ en: 'locked', te: 'లాక్ చేయబడింది' })}` : ''}`} className={clsx('flex min-h-9 items-center gap-1.5 rounded-full border px-3 text-[10px] font-semibold transition-colors', active && 'border-navy-700 bg-navy-700 text-white', complete && !active && 'border-teal-200 bg-teal-50 text-teal-800', !active && !complete && !locked && 'border-navy-100 bg-white text-navy-500 hover:border-teal-300', locked && 'cursor-not-allowed border-navy-50 bg-navy-50 text-navy-300')}>
            {complete ? <CheckCircle2 size={13} /> : locked ? <LockKeyhole size={12} /> : active ? <Eye size={13} /> : <Circle size={12} />}{index + 1}. {stage.title ? t(stage.title) : t(stageLabels[stage.type])}</button></li>;
        })}</ol>
      </nav>

      <main className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.58fr)]">
        <article key={currentStage.id} className="lesson-stage-enter min-w-0 rounded-3xl border border-navy-100 bg-white p-4 shadow-card sm:p-6 lg:p-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-teal-700"><Compass size={14} aria-hidden="true" />{t(stageLabels[currentStage.type])}</div>
          <h2 className="text-xl font-bold leading-tight text-navy-700 sm:text-2xl">{currentTitle}</h2>
          <div className="mt-3 text-sm leading-7 text-navy-600 sm:text-base"><LessonContent content={t(currentStage.content)} /></div>

          {activeInteraction && <section className="mt-5" aria-label={t({ en: 'Interactive simulation', te: 'ఇంటరాక్టివ్ అనుకరణ' })}><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-teal-700"><FlaskConical size={15} />{t({ en: 'Experiment', te: 'ప్రయోగం' })}</div>{activeInteraction}</section>}
          {showMiniLab && <section className="mt-5" aria-label={t({ en: 'Interactive concept model', te: 'ఇంటరాక్టివ్ భావన నమూనా' })}><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-teal-700"><FlaskConical size={15} />{t({ en: 'Try the model', te: 'నమూనాను ప్రయత్నించండి' })}</div><LessonMiniLab lessonId={lesson.id} /></section>}

          {stageQuestions.length > 0 && <section className="mt-6 space-y-3 border-t border-navy-100 pt-5" aria-label={t({ en: 'Knowledge check', te: 'జ్ఞాన పరీక్ష' })}><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-navy-600"><Lightbulb size={15} className="text-coral-500" />{t({ en: 'Think it through', te: 'ఆలోచించి సమాధానం ఇవ్వండి' })}</div>{stageQuestions.map(question => <QuizCard key={question.id} question={question} answer={selectedAnswers[question.id]} onAnswer={answer => handleAnswer(question, answer)} />)}{!assessmentComplete && <p className="text-xs font-medium text-coral-700">{t({ en: 'Answer each question correctly to complete this check. You can retry and learn from the feedback.', te: 'ఈ పరీక్షను పూర్తి చేయడానికి ప్రతి ప్రశ్నకు సరైన సమాధానం ఇవ్వండి. సూచనలతో మళ్లీ ప్రయత్నించవచ్చు.' })}</p>}</section>}

          <footer className="mt-7 flex items-center justify-between gap-3 border-t border-navy-100 pt-4">
            <button type="button" onClick={handlePrevious} disabled={currentStageIdx === 0} className="btn-secondary px-3 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"><ChevronLeft size={15} />{t({ en: 'Previous', te: 'వెనుకకు' })}</button>
            <span className="hidden text-center text-[10px] text-navy-400 sm:block">{t({ en: 'Your stage and check progress save as you go.', te: 'మీ దశ, పరీక్ష పురోగతి స్వయంచాలకంగా సేవ్ అవుతుంది.' })}</span>
            <button type="button" onClick={handleContinue} disabled={!assessmentComplete} className="btn-primary max-w-[65%] justify-center px-3 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-50 sm:max-w-none sm:px-5">{currentStageIdx === stages.length - 1 ? t({ en: 'Complete lesson', te: 'పాఠం పూర్తి చేయండి' }) : t({ en: 'Continue', te: 'కొనసాగించండి' })}<ChevronRight size={15} /></button>
          </footer>
        </article>

        <aside className="space-y-3 lg:sticky lg:top-4">
          <LessonConceptVisual lessonId={lesson.id} stage={currentStage} />
          {currentStage.questions?.length ? <div className="rounded-2xl border border-coral-100 bg-coral-50/70 p-4 text-xs leading-relaxed text-navy-600"><p className="mb-1 flex items-center gap-2 font-bold text-coral-700"><Lightbulb size={14} />{t({ en: 'Learning from a miss is part of the lesson', te: 'తప్పు నుంచి నేర్చుకోవడం కూడా పాఠమే' })}</p>{t({ en: 'A first guess is just a starting point. Read the explanation, then try again.', te: 'మొదటి అంచనా ఒక ప్రారంభం మాత్రమే. వివరణ చదివి మళ్లీ ప్రయత్నించండి.' })}</div> : <div className="rounded-2xl border border-navy-100 bg-white p-4 text-xs leading-relaxed text-navy-500"><p className="mb-1 font-bold text-navy-700">{t({ en: 'One idea at a time', te: 'ఒక్కసారి ఒక భావన' })}</p>{t({ en: 'Change a control, watch what moves, then explain why. The numbers in examples are illustrative.', te: 'ఒక నియంత్రణను మార్చి, ఏమి మారిందో గమనించి, ఎందుకో వివరించండి. ఉదాహరణల్లోని సంఖ్యలు వివరణ కోసం మాత్రమే.' })}</div>}
        </aside>
      </main>
    </div>
  );
}

export default LessonEngine;
