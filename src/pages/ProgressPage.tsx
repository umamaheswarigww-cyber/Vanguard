import { useState } from 'react';
import { useT, useApp } from '@/context/AppContext';
import { LESSONS } from '@/content/lessons';
import { PILLARS } from '@/content/curriculum/pillars';
import {
  Award, CheckCircle2, Clock, Users,
  BarChart2, ShieldCheck, Info, Sparkles
} from 'lucide-react';
import clsx from 'clsx';

export function ProgressPage() {
  const t = useT();
  const { progress, isLessonCompleted } = useApp();
  const [showNgoDemo, setShowNgoDemo] = useState(false);

  const completedLessons = LESSONS.filter(l => isLessonCompleted(l.id));
  const completionRate = Math.round((completedLessons.length / LESSONS.length) * 100);

  // Collect all demonstrated objectives across all lessons
  const allEvidenced = Object.values(progress.lessonsProgress).flatMap(lp => lp.objectivesEvidenced);

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <section className="bg-hero text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="badge badge-teal mb-2">{t({ en: 'Mastery Tracker', te: 'నైపుణ్య ట్రాకర్' })}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
              {t({ en: 'My Learning & Mastery Progress', te: 'నా అభ్యాస మరియు నైపుణ్య పురోగతి' })}
            </h1>
            <p className="text-navy-100 text-sm mt-2 max-w-xl">
              {t({
                en: 'Transparent proof of genuine understanding: demonstrated learning objectives, not just visited screens.',
                te: 'నిజమైన అవగాహన యొక్క నిరూపణ: కేవలం పేజీలు చూడడం మాత్రమే కాకుండా సాధించిన అభ్యాస లక్ష్యాలు.',
              })}
            </p>
          </div>

          {/* Toggle NGO View */}
          <button
            onClick={() => setShowNgoDemo(!showNgoDemo)}
            className="btn-secondary text-xs border-white/30 text-white bg-white/10 hover:bg-white/20 whitespace-nowrap self-start md:self-center"
          >
            <Users size={15} />
            {showNgoDemo
              ? t({ en: 'View Student Profile', te: 'విద్యార్థి ప్రొఫైల్ చూడండి' })
              : t({ en: 'View NGO / Educator Dashboard (Demo)', te: 'NGO / ఉపాధ్యాయ డ్యాష్‌బోర్డ్ (డెమో)' })}
          </button>
        </div>
      </section>

      {/* Main Student Progress View */}
      {!showNgoDemo ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Top Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card p-6 bg-white border border-navy-100 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Completed Lessons', te: 'పూర్తయిన పాఠాలు' })}</span>
                <span className="text-2xl font-bold text-navy-600">{completedLessons.length} / {LESSONS.length}</span>
              </div>
            </div>

            <div className="card p-6 bg-white border border-navy-100 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-coral-50 text-coral-500 flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Demonstrated Objectives', te: 'సాధించిన లక్ష్యాలు' })}</span>
                <span className="text-2xl font-bold text-coral-500">{allEvidenced.length}</span>
              </div>
            </div>

            <div className="card p-6 bg-white border border-navy-100 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-600 flex items-center justify-center">
                <Sparkles size={24} />
              </div>
              <div>
                <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Mastery Level', te: 'నైపుణ్య స్థాయి' })}</span>
                <span className="text-2xl font-bold text-teal-600">{completionRate}%</span>
              </div>
            </div>
          </div>

          {/* Lessons Status Table */}
          <div className="card p-6 bg-white border border-navy-100 rounded-2xl">
            <h2 className="text-lg font-bold text-navy-600 font-display mb-4">
              {t({ en: 'Curriculum Mastery Breakdown', te: 'పాఠ్యాంశాల నైపుణ్య విశ్లేషణ' })}
            </h2>

            <div className="space-y-3">
              {LESSONS.map(l => {
                const isDone = isLessonCompleted(l.id);
                const lp = progress.lessonsProgress[l.id];
                const demonstratedInLesson = lp?.objectivesEvidenced.length || 0;

                return (
                  <div key={l.id} className="p-4 rounded-xl border border-navy-50 bg-cream-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="badge badge-navy text-[10px] uppercase">{l.pillarId}</span>
                        <h4 className="font-bold text-sm text-navy-700">{t(l.title)}</h4>
                      </div>
                      <p className="text-xs text-navy-400 mt-1">
                        {demonstratedInLesson} of {l.learningObjectives.length} objectives verified
                      </p>
                    </div>

                    <span className={clsx(
                      'badge text-xs self-start sm:self-center',
                      isDone ? 'badge-teal' : 'badge-planned'
                    )}>
                      {isDone ? t({ en: 'Mastered ✓', te: 'సాధించారు ✓' }) : t({ en: 'In Progress / Ready', te: 'సిద్ధంగా ఉంది' })}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="disclaimer flex items-center gap-2">
            <ShieldCheck size={16} className="text-teal-500 shrink-0" />
            <span>
              {t({
                en: 'Privacy Notice: Your learner progress is stored locally in your browser’s localStorage. No tracking cookies or personal student identifiers are transmitted.',
                te: 'గోప్యతా గమనిక: మీ పురోగతి మీ బ్రౌజర్‌లో మాత్రమే స్థానికంగా నిల్వ చేయబడుతుంది. ఎలాంటి వ్యక్తిగత డేటా సేకరించబడదు.',
              })}
            </span>
          </div>
        </section>
      ) : (
        /* NGO / EDUCATOR COHORT DASHBOARD DEMO */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-fade-in">
          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-xs flex items-center gap-2">
            <Info size={16} className="shrink-0" />
            <span>
              <strong>{t({ en: 'DEMO VIEW:', te: 'డెమో వీక్షణ:' })}</strong>{' '}
              {t({
                en: 'This view illustrates the NGO & Educator cohort tracking interface required by the Vanguard India problem statement (targeting 1,500+ students in Hyderabad). All cohort data shown is synthetic demo data.',
                te: 'ఈ వీక్షణ వాన్‌గార్డ్ ఇండియా సమస్య ప్రకటనలో అవసరమైన NGO & అధ్యాపకుల ట్రాకింగ్ ఇంటర్‌ఫేస్‌ను చూపుతుంది. ఇక్కడ చూపిన డేటా అంతా కల్పిత డెమో డేటా.',
              })}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="card p-5 bg-white border border-navy-100 rounded-2xl">
              <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Enrolled Cohort Size', te: 'నమోదైన విద్యార్థులు' })}</span>
              <span className="text-2xl font-bold text-navy-600 mt-1 block">1,500</span>
              <span className="text-[11px] text-teal-600 font-medium">Hyderabad Public Schools</span>
            </div>

            <div className="card p-5 bg-white border border-navy-100 rounded-2xl">
              <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Active Learners', te: 'క్రియాశీల విద్యార్థులు' })}</span>
              <span className="text-2xl font-bold text-teal-600 mt-1 block">1,342 (89.5%)</span>
              <span className="text-[11px] text-navy-400">Past 14 days</span>
            </div>

            <div className="card p-5 bg-white border border-navy-100 rounded-2xl">
              <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Budget Lab Pass Rate', te: 'బడ్జెట్ ల్యాబ్ పాస్ రేటు' })}</span>
              <span className="text-2xl font-bold text-coral-500 mt-1 block">94.2%</span>
              <span className="text-[11px] text-teal-600">+12% post-remediation</span>
            </div>

            <div className="card p-5 bg-white border border-navy-100 rounded-2xl">
              <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Scam Detective Pass Rate', te: 'స్కామ్ డిటెక్టివ్ పాస్ రేటు' })}</span>
              <span className="text-2xl font-bold text-teal-600 mt-1 block">91.8%</span>
              <span className="text-[11px] text-navy-400">Zero false clicks</span>
            </div>
          </div>

          {/* Identified Learning Gaps Table */}
          <div className="card p-6 bg-white border border-navy-100 rounded-2xl">
            <h3 className="font-bold text-navy-600 text-base mb-4 font-display">
              {t({ en: 'Identified Cohort Learning Gaps & Interventions', te: 'గుర్తించబడిన అభ్యాస లోపాలు' })}
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-cream-50 border border-navy-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-navy-700 block">Topic: NAV level vs cheapness</span>
                  <span className="text-navy-400">32% of students initially believed a lower NAV fund is a bargain</span>
                </div>
                <span className="badge badge-coral">Remediation Deployed</span>
              </div>

              <div className="p-3.5 rounded-xl bg-cream-50 border border-navy-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-navy-700 block">Topic: UPI PIN for receiving money</span>
                  <span className="text-navy-400">18% were unclear about QR scanning mechanics</span>
                </div>
                <span className="badge badge-teal">98% Resolved via Scam Lab</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProgressPage;
