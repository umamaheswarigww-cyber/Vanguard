import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT, useApp } from '@/context/AppContext';
import { PILLARS, getModulesByPillar } from '@/content/curriculum/pillars';
import { LESSONS } from '@/content/lessons';
import {
  Wallet, PiggyBank, TrendingUp, Shield, BookOpen,
  CheckCircle2, Clock, Search, ArrowRight, Sparkles
} from 'lucide-react';
import clsx from 'clsx';

export function LearnPage() {
  const t = useT();
  const { isLessonCompleted, isLessonStarted } = useApp();
  const [search, setSearch] = useState('');

  const completedCount = LESSONS.filter(l => isLessonCompleted(l.id)).length;
  const progressPercent = Math.round((completedCount / LESSONS.length) * 100);

  const filteredPillars = PILLARS.map(p => {
    const modules = getModulesByPillar(p.id);
    const filteredModules = modules.filter(m => {
      const matchTitle = t(m.title).toLowerCase().includes(search.toLowerCase());
      const matchDesc = t(m.description).toLowerCase().includes(search.toLowerCase());
      return matchTitle || matchDesc;
    });
    return { ...p, modules: filteredModules };
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-hero text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="badge badge-teal mb-2">{t({ en: 'Curriculum Roadmap', te: 'పాఠ్యాంశాల రోడ్‌మ్యాప్' })}</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
                {t({ en: 'Your Financial Learning Path', te: 'మీ ఆర్థిక అభ్యాస మార్గం' })}
              </h1>
              <p className="text-navy-100 text-sm mt-2 max-w-xl">
                {t({
                  en: 'Step-by-step interactive lessons designed for Grade 11–12 students. Master one concept at a time.',
                  te: 'గ్రేడ్ 11-12 విద్యార్థుల కోసం దశలవారీగా రూపొందించిన పాఠాలు.',
                })}
              </p>
            </div>

            {/* Quick Progress Summary */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 min-w-[240px]">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-navy-200">{t({ en: 'Your Progress', te: 'మీ పురోగతి' })}</span>
                <span className="font-bold text-teal-300">{completedCount} / {LESSONS.length} {t({ en: 'Done', te: 'పూర్తయ్యాయి' })}</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-teal-400 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
              <span className="text-[11px] text-teal-300 block mt-2 text-right font-semibold">{progressPercent}% {t({ en: 'Lessons completed', te: 'పాఠాలు పూర్తయ్యాయి' })}</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search size={18} className="absolute left-3.5 top-3.5 text-navy-300" />
              <input
                type="text"
                placeholder={t({ en: 'Search modules or topics...', te: 'మాడ్యూల్స్ లేదా అంశాలను వెతకండి...' })}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-navy-600 placeholder-navy-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Masterclass Banner: Investing Made Simple */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-800 via-navy-700 to-teal-800 text-white p-6 sm:p-8 shadow-xl border border-teal-500/30">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-25 overflow-hidden pointer-events-none">
            <img src="/images/mutual_funds.jpg" alt="Investment growth" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 border border-teal-400/40 text-teal-300 text-xs font-semibold">
                <Sparkles size={14} />
                <span>{t({ en: 'NEW INTERACTIVE MODULE', te: 'కొత్త ఇంటరాక్టివ్ మాడ్యూల్' })}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                {t({
                  en: 'Investing Made Simple: Learn Before You Earn',
                  te: 'సులభమైన పెట్టుబడులు: సంపాదించే ముందు నేర్చుకోండి'
                })}
              </h2>
              <p className="text-navy-100 text-sm leading-relaxed">
                {t({
                  en: 'Designed for Grades 11–12: Master Fixed Deposits, Mutual Funds, and Stocks through the ABC Bicycle Company case study, interactive Risk Studio, and a safe ₹10,000 virtual portfolio simulator.',
                  te: 'గ్రేడ్ 11-12 కోసం రూపొందించబడింది: ABC సైకిల్ కంపెనీ ఉదాహరణ, రిస్క్ స్టూడియో మరియు ₹10,000 వర్చువల్ పోర్ట్‌ఫోలియో సిమ్యులేటర్ ద్వారా FDలు, మ్యూచువల్ ఫండ్స్, షేర్లను అర్థం చేసుకోండి.'
                })}
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-teal-200">✨ FD vs MF vs Stocks</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-teal-200">🎯 Match Money to Goals</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-teal-200">💰 ₹10,000 Virtual Simulator</span>
              </div>
            </div>

            <Link
              to="/investing-made-simple"
              className="px-6 py-3.5 rounded-xl bg-teal-400 text-navy-900 font-bold hover:bg-teal-300 transition-all shadow-lg flex items-center gap-2 shrink-0 text-sm"
            >
              {t({ en: 'Explore Investing Masterclass', te: 'మాస్టర్‌క్లాస్ ప్రారంభించండి' })}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Starting Point */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-cream-50 border border-teal-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <span className="badge badge-teal mb-1">{t({ en: 'Recommended Starting Point', te: 'ప్రారంభించడానికి ఉత్తమమైనది' })}</span>
              <h3 className="text-lg font-bold text-navy-600">
                {t({ en: 'Pillar 1: Mastering the Budget Lab', te: 'స్తంభం 1: బడ్జెట్ ల్యాబ్' })}
              </h3>
              <p className="text-xs text-navy-400 mt-1 max-w-xl">
                {t({
                  en: 'Start with the fundamentals: allocate fictional ₹5,000, learn needs vs wants, and handle unexpected financial events.',
                  te: 'ప్రాథమిక అంశాలతో ప్రారంభించండి: ₹5,000 కల్పిత బడ్జెట్‌ను కేటాయించి, అవసరాలు vs కోరికల గురించి తెలుసుకోండి.',
                })}
              </p>
            </div>
          </div>

          <Link to="/learn/plan-and-budget/budget-lab" className="btn-primary text-sm whitespace-nowrap">
            {t({ en: 'Start Budget Mission', te: 'బడ్జెట్ మిషన్ ప్రారంభించండి' })}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Pillars and Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredPillars.map(pillar => {
          const Icon = pillar.id === 'budget' ? Wallet : pillar.id === 'save' ? PiggyBank : pillar.id === 'invest' ? TrendingUp : Shield;

          return (
            <div key={pillar.id} className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-navy-100">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-600 font-display">
                    {t(pillar.title)}
                  </h2>
                  <p className="text-xs text-navy-400">{t(pillar.tagline)}</p>
                </div>
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillar.modules.map(module => {
                  // Find lessons in this module
                  const moduleLessons = LESSONS.filter(l => module.lessonIds.includes(l.id));

                  return (
                    <div key={module.id} className="card p-6 flex flex-col justify-between border border-navy-100 rounded-2xl bg-white hover:border-teal-300 transition-colors">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="badge badge-navy text-[11px] uppercase tracking-wider">
                            {module.level}
                          </span>
                          <span className="badge badge-teal text-[10px]">
                            {module.contentStatus}
                          </span>
                        </div>

                        <h3 className="font-bold text-lg text-navy-600 font-display">
                          {t(module.title)}
                        </h3>
                        <p className="text-xs text-navy-400 mt-2 leading-relaxed">
                          {t(module.description)}
                        </p>
                      </div>

                      {/* Lesson Links */}
                      <div className="mt-6 pt-4 border-t border-navy-50 space-y-2">
                        {moduleLessons.length > 0 ? (
                          moduleLessons.map(les => {
                            const completed = isLessonCompleted(les.id);
                            const started = isLessonStarted(les.id);

                            return (
                              <Link
                                key={les.id}
                                to={`/learn/${pillar.slug}/${les.slug}`}
                                className="flex items-center justify-between p-2.5 rounded-xl bg-cream-50/50 hover:bg-teal-50 text-xs font-semibold text-navy-600 transition-colors group"
                              >
                                <div className="flex items-center gap-2">
                                  {completed ? (
                                    <CheckCircle2 size={15} className="text-teal-500" />
                                  ) : (
                                    <Clock size={15} className="text-navy-300" />
                                  )}
                                  <span className="group-hover:text-teal-600 line-clamp-1">{t(les.title)}</span>
                                </div>
                                <span className="text-[10px] text-navy-400 shrink-0 ml-1">
                                  {les.estimatedMinutes}m
                                </span>
                              </Link>
                            );
                          })
                        ) : (
                          <div className="text-xs text-navy-300 py-1">
                            {t({ en: 'Comprehensive curriculum module', te: 'పాఠ్యాంశాల మాడ్యూల్' })}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default LearnPage;
