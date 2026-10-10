import { useState } from 'react';
import type { Lesson, LessonStage } from '@/types/content';
import { useT, useApp } from '@/context/AppContext';
import {
  ChevronLeft, ChevronRight, CheckCircle2, RotateCcw,
  Sparkles, Award, Lightbulb, BookOpen, AlertTriangle
} from 'lucide-react';
import clsx from 'clsx';

// Import simulators
import { BudgetLab } from '@/components/simulation/BudgetLab';
import { CompoundInterestExplorer } from '@/components/simulation/CompoundInterestExplorer';
import { InflationCalculator } from '@/components/simulation/InflationCalculator';
import { FDCalculator } from '@/components/simulation/FDCalculator';
import { RDCalculator } from '@/components/simulation/RDCalculator';
import { SIPCalculator } from '@/components/simulation/SIPCalculator';
import { EnhancedSIPCalculator } from '@/components/simulation/EnhancedSIPCalculator';
import { NAVLab } from '@/components/simulation/NAVLab';
import { ScamDetectiveSim } from '@/components/simulation/ScamDetectiveSim';
import { MarketIndicesLab } from '@/components/simulation/MarketIndicesLab';
import { CompanyFinancialsLab } from '@/components/simulation/CompanyFinancialsLab';
import { FinancialRatiosLab } from '@/components/simulation/FinancialRatiosLab';

interface LessonEngineProps {
  lesson: Lesson;
  onComplete?: () => void;
}

export function LessonEngine({ lesson, onComplete }: LessonEngineProps) {
  const t = useT();
  const { markLessonStarted, markLessonCompleted, addObjectiveEvidence } = useApp();

  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [stageVisited, setStageVisited] = useState<Set<number>>(new Set([0]));
  const [lessonFinished, setLessonFinished] = useState<boolean>(false);

  const stages = lesson.stages;
  const currentStage: LessonStage = stages[currentStageIdx];
  const progressPercent = Math.round(((currentStageIdx + 1) / stages.length) * 100);

  // Auto-mark lesson started
  useState(() => {
    markLessonStarted(lesson.id);
  });

  const handleNext = () => {
    if (currentStageIdx < stages.length - 1) {
      const nextIdx = currentStageIdx + 1;
      setCurrentStageIdx(nextIdx);
      setStageVisited(prev => new Set([...prev, nextIdx]));
    } else {
      setLessonFinished(true);
      markLessonCompleted(lesson.id);
      if (onComplete) onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStageIdx > 0) {
      setCurrentStageIdx(prev => prev - 1);
    }
  };

  const handleSelectAnswer = (qId: string, optIdx: number, objectiveId: string, isCorrect: boolean) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
    if (isCorrect) {
      addObjectiveEvidence({
        objectiveId,
        lessonId: lesson.id,
        demonstratedAt: new Date().toISOString(),
        evidenceType: 'explain',
      });
    }
  };

  const renderInteraction = (key?: string) => {
    switch (key) {
      case 'budget-lab':
        return <BudgetLab />;
      case 'compound-interest-explorer':
        return <CompoundInterestExplorer />;
      case 'inflation-explorer':
        return <InflationCalculator />;
      case 'fd-calculator':
        return <FDCalculator />;
      case 'rd-calculator':
        return <RDCalculator />;
      case 'sip-lab':
        return <EnhancedSIPCalculator />;
      case 'nav-lab':
        return <NAVLab />;
      case 'scam-detective':
        return <ScamDetectiveSim />;
      case 'market-indices-lab':
        return <MarketIndicesLab />;
      case 'company-financials-lab':
        return <CompanyFinancialsLab />;
      case 'financial-ratios-lab':
        return <FinancialRatiosLab />;
      default:
        return (
          <div className="p-6 bg-navy-50 rounded-2xl border border-navy-100 text-center text-sm text-navy-500">
            {t({ en: 'Interactive simulation for this stage is ready.', te: 'ఈ దశకు సంబంధించిన ఇంటరాక్టివ్ సిమ్యులేషన్ సిద్ధంగా ఉంది.' })}
          </div>
        );
    }
  };

  if (lessonFinished) {
    return (
      <div className="card p-8 md:p-12 text-center max-w-2xl mx-auto my-8 border border-teal-200 bg-white shadow-card-hover animate-slide-up">
        <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-200">
          <Award size={36} className="text-teal-500" />
        </div>
        <span className="badge badge-teal mb-2">{t({ en: 'Lesson Completed!', te: 'పాఠం పూర్తయింది!' })}</span>
        <h2 className="text-3xl font-bold text-navy-600 font-display">
          {t({ en: 'Congratulations! You Mastered This Concept.', te: 'అభినందనలు! మీరు ఈ కాన్సెప్ట్‌ను సాధించారు.' })}
        </h2>
        <p className="text-navy-400 text-sm mt-2 max-w-md mx-auto leading-relaxed">
          {t({
            en: `You successfully explored ${t(lesson.title)} and validated key learning objectives.`,
            te: `మీరు ${t(lesson.title)} పాఠాన్ని విజయవంతంగా పూర్తి చేశారు.`,
          })}
        </p>

        <div className="p-4 rounded-xl bg-cream-50 border border-navy-100 my-6 text-left text-xs">
          <span className="font-bold text-navy-600 uppercase tracking-wide block mb-2">
            {t({ en: 'Demonstrated Learning Objectives:', te: 'సాధించిన అభ్యాస లక్ష్యాలు:' })}
          </span>
          <ul className="space-y-1.5 text-navy-600">
            {lesson.learningObjectives.map(obj => (
              <li key={obj.id} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-teal-500 shrink-0" />
                <span>{t(obj.description)}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => {
            setCurrentStageIdx(0);
            setLessonFinished(false);
          }}
          className="btn-secondary text-sm"
        >
          <RotateCcw size={16} />
          {t({ en: 'Review Lesson Again', te: 'మళ్లీ పరిశీలించండి' })}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-6 px-4">
      {/* Progress Bar & Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-navy-400 mb-2">
          <span className="font-semibold text-navy-500">
            {t({ en: 'Stage', te: 'దశ' })} {currentStageIdx + 1} {t({ en: 'of', te: 'లో' })} {stages.length}:{' '}
            <span className="text-teal-500 uppercase tracking-wider font-bold">
              {currentStage.type.replace('_', ' ')}
            </span>
          </span>
          <span className="font-bold text-teal-600">{progressPercent}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Main Stage Card */}
      <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
        {/* Stage Header */}
        {currentStage.title && (
          <h2 className="text-2xl font-bold text-navy-600 font-display mb-4">
            {t(currentStage.title)}
          </h2>
        )}

        {/* Stage Content Markdown / Prose */}
        <div className="prose prose-navy max-w-none text-navy-600 leading-relaxed text-base mb-6">
          <p className="whitespace-pre-line">{t(currentStage.content)}</p>
        </div>

        {/* Optional Interaction Component */}
        {currentStage.interactionKey && (
          <div className="my-6">
            {renderInteraction(currentStage.interactionKey)}
          </div>
        )}

        {/* Optional Stage Questions / Quizzes */}
        {currentStage.questions && currentStage.questions.length > 0 && (
          <div className="space-y-6 my-6 pt-6 border-t border-navy-100">
            {currentStage.questions.map(q => {
              const selectedIdx = selectedAnswers[q.id];
              const isAnswered = selectedIdx !== undefined;

              return (
                <div key={q.id} className="p-5 rounded-2xl bg-cream-50/70 border border-navy-100">
                  <h4 className="font-semibold text-navy-700 text-base mb-3 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-400 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ?
                    </span>
                    <span>{t(q.question)}</span>
                  </h4>

                  {q.options && (
                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isChosen = selectedIdx === oIdx;
                        const isCorrectOpt = q.correctIndex === oIdx;

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectAnswer(q.id, oIdx, q.objectiveId, isCorrectOpt)}
                            className={clsx(
                              'w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between',
                              isAnswered
                                ? isCorrectOpt
                                  ? 'bg-teal-50 border-teal-300 text-teal-800'
                                  : isChosen
                                    ? 'bg-coral-50 border-coral-300 text-coral-800'
                                    : 'bg-white border-navy-100 text-navy-400 opacity-60'
                                : 'bg-white border-navy-100 hover:border-teal-300 text-navy-600'
                            )}
                          >
                            <span>{t(opt)}</span>
                            {isAnswered && isCorrectOpt && (
                              <CheckCircle2 size={16} className="text-teal-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Explanation feedback */}
                  {isAnswered && (
                    <div className={clsx(
                      'mt-4 p-3.5 rounded-xl text-xs leading-relaxed animate-fade-in',
                      selectedIdx === q.correctIndex
                        ? 'bg-teal-100/60 text-teal-800 border border-teal-200'
                        : 'bg-coral-100/60 text-coral-800 border border-coral-200'
                    )}>
                      <strong>{selectedIdx === q.correctIndex ? '✅ Correct! ' : '💡 Notice: '}</strong>
                      {t(q.explanation)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-navy-100 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentStageIdx === 0}
            className={clsx(
              'btn-secondary text-sm py-2 px-4',
              currentStageIdx === 0 && 'opacity-40 cursor-not-allowed'
            )}
          >
            <ChevronLeft size={16} />
            {t({ en: 'Previous', te: 'వెనుకకు' })}
          </button>

          <button
            onClick={handleNext}
            className="btn-primary text-sm py-2.5 px-6"
          >
            {currentStageIdx === stages.length - 1
              ? t({ en: 'Finish & Earn Mastery', te: 'పూర్తి చేసి బ్యాడ్జ్ పొందండి' })
              : t({ en: 'Continue Next Stage', te: 'తర్వాతి దశకు వెళ్లండి' })}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonEngine;
