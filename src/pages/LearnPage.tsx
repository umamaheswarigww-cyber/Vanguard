import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT, useApp } from '@/context/AppContext';
import { PILLARS, getModulesByPillar } from '@/content/curriculum/pillars';
import { LESSONS } from '@/content/lessons';
import type { Module, Pillar } from '@/types/content';
import {
  Wallet, PiggyBank, TrendingUp, Shield, BookOpen,
  CheckCircle2, Clock, Search, ArrowRight, Sparkles,
  Coins, Calculator, Target, ShoppingBasket, Building,
  LineChart, BarChart2, PieChart, Smartphone, AlertTriangle,
  PhoneCall, Award, Zap, Flame, Lock
} from 'lucide-react';

export function LearnPage() {
  const t = useT();
  const { isLessonCompleted, isLessonStarted, gamification } = useApp();
  const [search, setSearch] = useState('');
  const [activePillarFilter, setActivePillarFilter] = useState<string>('all');

  const completedCount = LESSONS.filter(l => isLessonCompleted(l.id)).length;
  const progressPercent = Math.round((completedCount / LESSONS.length) * 100);

  const filteredPillars = PILLARS.filter(p => activePillarFilter === 'all' || p.id === activePillarFilter).map(p => {
    const modules = getModulesByPillar(p.id);
    const filteredModules = modules.filter(m => {
      const matchTitle = t(m.title).toLowerCase().includes(search.toLowerCase());
      const matchDesc = t(m.description).toLowerCase().includes(search.toLowerCase());
      return matchTitle || matchDesc;
    });
    return { ...p, modules: filteredModules };
  });

  // Icon Helper for Modules
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins': return <Coins size={22} className="text-teal-600" />;
      case 'Calculator': return <Calculator size={22} className="text-teal-600" />;
      case 'Target': return <Target size={22} className="text-teal-600" />;
      case 'PiggyBank': return <PiggyBank size={22} className="text-blue-600" />;
      case 'TrendingUp': return <TrendingUp size={22} className="text-blue-600" />;
      case 'ShoppingBasket': return <ShoppingBasket size={22} className="text-blue-600" />;
      case 'Building': return <Building size={22} className="text-blue-600" />;
      case 'LineChart': return <LineChart size={22} className="text-amber-600" />;
      case 'BarChart2': return <BarChart2 size={22} className="text-amber-600" />;
      case 'PieChart': return <PieChart size={22} className="text-amber-600" />;
      case 'Smartphone': return <Smartphone size={22} className="text-emerald-600" />;
      case 'AlertTriangle': return <AlertTriangle size={22} className="text-rose-600" />;
      case 'PhoneCall': return <PhoneCall size={22} className="text-rose-600" />;
      default: return <BookOpen size={22} className="text-teal-600" />;
    }
  };

  // Dedicated Visual Model Previews for each Module
  const renderModulePreview = (moduleId: string) => {
    switch (moduleId) {
      case 'money-foundations':
        return (
          <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-teal-900">
              <span>{t({ en: 'Visual Model: Cash Flow', te: 'నగదు ప్రవాహం' })}</span>
              <span className="text-teal-700">₹5,000 Pool</span>
            </div>
            <div className="h-4 rounded-full overflow-hidden flex bg-teal-100 p-0.5 gap-0.5">
              <div className="bg-teal-500 rounded-l-full" style={{ width: '52%' }} title="Needs: 52%" />
              <div className="bg-coral-400" style={{ width: '36%' }} title="Wants: 36%" />
              <div className="bg-emerald-500 rounded-r-full" style={{ width: '12%' }} title="Save: 12%" />
            </div>
            <div className="flex justify-between text-[9px] text-navy-600 font-medium pt-0.5">
              <span>● Needs (52%)</span>
              <span className="text-coral-600">● Wants (36%)</span>
              <span className="text-emerald-700 font-bold">● Save (12%)</span>
            </div>
          </div>
        );

      case 'budget-construction':
        return (
          <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-teal-900">
              <span>{t({ en: 'Interactive Budget Lab', te: 'బడ్జెట్ ప్రయోగశాల' })}</span>
              <span className="bg-teal-200/60 text-teal-800 px-1.5 py-0.5 rounded text-[9px] font-mono">₹5,000 Cap</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
              <div className="bg-white p-1 rounded-lg border border-teal-100">
                <span className="text-[9px] text-navy-400 block">Books</span>
                <b className="text-teal-800">₹1,500</b>
              </div>
              <div className="bg-white p-1 rounded-lg border border-teal-100">
                <span className="text-[9px] text-navy-400 block">Commute</span>
                <b className="text-teal-800">₹800</b>
              </div>
              <div className="bg-white p-1 rounded-lg border border-teal-100">
                <span className="text-[9px] text-emerald-600 block">Surplus</span>
                <b className="text-emerald-700">₹600</b>
              </div>
            </div>
          </div>
        );

      case 'goals-and-choices':
        return (
          <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-teal-900">
              <span>{t({ en: 'SMART Milestone Horizon', te: 'లక్ష్యాల కాలవ్యవధి' })}</span>
              <span className="text-teal-700 text-[9px]">Target vs Time</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center text-[9px]">
              <span className="bg-white py-1 px-1 rounded border border-teal-100 text-teal-800 font-semibold">Short &lt; 1y</span>
              <span className="bg-white py-1 px-1 rounded border border-teal-100 text-sky-800 font-semibold">Med 1–3y</span>
              <span className="bg-white py-1 px-1 rounded border border-teal-100 text-purple-800 font-semibold">Long 3y+</span>
            </div>
          </div>
        );

      case 'saving-foundations':
        return (
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-blue-900">
              <span>{t({ en: 'Safety Runway Shield', te: 'రక్షణ కవచం' })}</span>
              <span className="text-blue-700 font-bold">3–6 Months</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6].map(m => (
                <div key={m} className={`flex-1 h-3.5 rounded text-[8px] font-bold flex items-center justify-center ${m <= 3 ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-800'}`}>
                  M{m}
                </div>
              ))}
            </div>
            <p className="text-[9px] text-navy-500 text-center">Liquidity: 24/7 access with zero capital risk</p>
          </div>
        );

      case 'interest-and-time':
        return (
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 space-y-1">
            <div className="flex justify-between items-center text-[10px] font-bold text-blue-900">
              <span>{t({ en: 'Compounding Curve Model', te: 'చక్రవడ్డీ రేఖ' })}</span>
              <span className="text-coral-600 font-bold">Exponential</span>
            </div>
            <svg viewBox="0 0 200 42" className="w-full h-8 overflow-visible" fill="none">
              <line x1="0" y1="38" x2="200" y2="38" stroke="#cbd5e1" strokeDasharray="2 2" />
              <line x1="0" y1="38" x2="200" y2="22" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M0 38 Q 90 37, 140 24 T 200 5" stroke="#ff765e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="flex justify-between text-[9px] text-navy-500 font-medium">
              <span>Linear (Simple)</span>
              <span className="text-coral-600 font-bold">Accelerating (Compound)</span>
            </div>
          </div>
        );

      case 'inflation-and-purchasing-power':
        return (
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-blue-900">
              <span>{t({ en: '₹100 Shopping Basket', te: 'కొనుగోలు శక్తి' })}</span>
              <span className="text-coral-600 font-bold">Silent Inflation</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
              <div className="bg-white p-1 rounded-lg border border-blue-100">
                <span className="text-[9px] text-navy-400 block">Today (₹100)</span>
                <span className="text-sm">🍌🍎🥛🍞</span>
              </div>
              <div className="bg-white p-1 rounded-lg border border-blue-100">
                <span className="text-[9px] text-navy-400 block">Later (₹100)</span>
                <span className="text-sm">🍌🍎🥛</span>
              </div>
            </div>
          </div>
        );

      case 'banking-products':
        return (
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-blue-900">
              <span>{t({ en: 'Bank FD Term Growth', te: 'ఫిక్స్‌డ్ డిపాజిట్' })}</span>
              <span className="text-blue-700 font-bold">DICGC Protected</span>
            </div>
            <div className="flex items-center justify-between text-[10px] bg-white p-1.5 rounded-lg border border-blue-100">
              <span className="text-navy-600">Deposit ₹50k @ 7%</span>
              <span className="text-blue-700 font-bold">→ ₹61,572 (3y)</span>
            </div>
          </div>
        );

      case 'investment-foundations':
        return (
          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-amber-900">
              <span>{t({ en: 'Beat Inflation Hurdle', te: 'ద్రవ్యోల్బణం అధిగమించడం' })}</span>
              <span className="text-amber-700 font-bold">6% Inflation</span>
            </div>
            <div className="space-y-1 text-[9px]">
              <div className="flex justify-between text-navy-600"><span>Cash: 0%</span><span className="text-coral-600 font-bold">−6% Real Loss</span></div>
              <div className="flex justify-between text-navy-600"><span>Index SIP: 12%</span><span className="text-teal-700 font-bold">+6% Real Wealth</span></div>
            </div>
          </div>
        );

      case 'stock-market-academy':
        return (
          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-amber-900">
              <span>{t({ en: 'Fractional Share Ownership', te: 'కంపెనీ వాటాలు' })}</span>
              <span className="text-amber-700 font-bold">1 Unit = 1 Share</span>
            </div>
            <div className="grid grid-cols-10 gap-0.5 max-w-[190px] mx-auto py-1">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className={`h-2.5 rounded-xs ${i === 14 ? 'bg-coral-500 animate-pulse' : 'bg-teal-200'}`} />
              ))}
            </div>
            <p className="text-[9px] text-navy-500 text-center">Owning a slice of productive businesses</p>
          </div>
        );

      case 'mutual-fund-academy':
        return (
          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-amber-900">
              <span>{t({ en: 'Diversified Pooled Portfolio', te: 'సమిష్టి పోర్ట్‌ఫోలియో' })}</span>
              <span className="text-teal-700 font-bold">50+ Stocks</span>
            </div>
            <div className="flex justify-around text-center text-[9px] bg-white p-1 rounded-lg border border-amber-100">
              <span>👥 Investors</span>
              <span>💼 Manager</span>
              <span>📊 Low Risk</span>
            </div>
          </div>
        );

      case 'digital-safety':
        return (
          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-emerald-900">
              <span>{t({ en: 'UPI PIN Defense Shield', te: 'UPI పిన్ రక్షణ' })}</span>
              <span className="text-emerald-700 font-bold">Golden Rule</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[9px] text-center">
              <span className="bg-coral-100 text-coral-800 p-1 rounded font-bold">SEND = PIN 🔒</span>
              <span className="bg-emerald-100 text-emerald-800 p-1 rounded font-bold">RECEIVE = NO PIN ✅</span>
            </div>
          </div>
        );

      case 'investment-fraud':
        return (
          <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-rose-900">
              <span>{t({ en: 'Spotting Mutual Fund Fraud', te: 'మోసాలను గుర్తించడం' })}</span>
              <span className="text-rose-700 font-bold">7 Red Flags</span>
            </div>
            <div className="flex flex-wrap gap-1 text-[8px]">
              <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">🚩 Guaranteed 500%</span>
              <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">🚩 Telegram Tips</span>
              <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">🚩 Asking OTP</span>
            </div>
          </div>
        );

      case 'incident-response':
        return (
          <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100/80 space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-rose-900">
              <span>{t({ en: 'Emergency 1930 Protocol', te: 'అత్యవసర ప్రోటోకాల్' })}</span>
              <span className="text-rose-700 font-bold">Golden Hour</span>
            </div>
            <div className="text-[9px] bg-white p-1 rounded-lg border border-rose-100 flex items-center justify-between text-navy-700">
              <span>Dial 1930 Helpline</span>
              <span className="font-bold text-emerald-600">Freeze Mule Account</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* ============================================================ */}
      {/* 1. GAMIFIED HERO BANNER WITH LEARNER HUD */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-br from-[#091526] via-[#10243E] to-[#070E1A] text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-navy-700/60 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold border border-teal-400/30">
                <Sparkles size={14} />
                <span>{t({ en: 'FINANCIAL MASTERY QUEST', te: 'ఆర్థిక నైపుణ్య ప్రయాణం' })}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                {t({ en: 'Your Financial Learning Path', te: 'మీ ఆర్థిక అభ్యాస మార్గం' })}
              </h1>
              <p className="text-navy-100 text-sm sm:text-base leading-relaxed">
                {t({
                  en: 'Step into interactive laboratories and real Indian financial scenarios. Master money management, investment mechanics, and fraud defense from zero.',
                  te: 'ఇంటరాక్టివ్ ప్రయోగశాలలు మరియు వాస్తవిక సందర్భాలతో బడ్జెట్, పెట్టుబడులు మరియు ఆర్థిక భద్రతను నేర్చుకోండి.',
                })}
              </p>
            </div>

            {/* GAMIFIED LEARNER HUD (Level, XP, Streak, Badges) */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl min-w-[300px] sm:min-w-[340px] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                    ⚡
                  </div>
                  <div>
                    <span className="text-[10px] text-navy-200 uppercase tracking-wider block font-bold">
                      {t({ en: 'PLAYER RANK', te: 'మీ స్థాయి' })}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-white font-display">
                      Level {gamification.level} · {t(gamification.levelTitle)}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-teal-300 flex items-center justify-end gap-1">
                    <Sparkles size={13} />
                    {gamification.totalXP} XP
                  </span>
                  <span className="text-[10px] text-navy-300">Total Earned</span>
                </div>
              </div>

              {/* XP Progress Bar to Next Level */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-navy-200">
                  <span>{t({ en: 'Next Level Progress', te: 'తదుపరి స్థాయి పురోగతి' })}</span>
                  <span className="text-teal-300 font-bold">{gamification.nextLevelXP} XP target</span>
                </div>
                <div className="h-2.5 bg-navy-950/80 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${gamification.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* HUD Counters */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-black/20">
                  <span className="text-[10px] text-navy-300 block">{t({ en: 'Quests Mastered', te: 'పూర్తయిన పాఠాలు' })}</span>
                  <span className="text-sm font-bold text-teal-300">
                    {completedCount} / {LESSONS.length}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-black/20">
                  <span className="text-[10px] text-navy-300 block">{t({ en: 'Achievement Badges', te: 'సాధించిన బ్యాడ్జ్‌లు' })}</span>
                  <span className="text-sm font-bold text-amber-300">
                    🛡️ {gamification.badgesUnlocked} Unlocked
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Pillar Quick-Filter Tabs */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative max-w-md w-full">
                <Search size={18} className="absolute left-3.5 top-3.5 text-navy-400" />
                <input
                  type="text"
                  placeholder={t({ en: 'Search quests, topics, or formulas...', te: 'పాఠాలు లేదా అంశాలను వెతకండి...' })}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/95 text-navy-800 placeholder-navy-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  { id: 'all', label: { en: 'All 4 Pillars', te: 'అన్ని 4 స్తంభాలు' } },
                  { id: 'budget', label: { en: 'Plan & Budget', te: 'బడ్జెట్' } },
                  { id: 'save', label: { en: 'Save & Manage', te: 'పొదుపు' } },
                  { id: 'invest', label: { en: 'Understand Investing', te: 'పెట్టుబడులు' } },
                  { id: 'safe', label: { en: 'Stay Safe', te: 'రక్షణ' } },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePillarFilter(tab.id)}
                    className={`px-3 py-2 rounded-xl font-bold cursor-pointer transition-all ${
                      activePillarFilter === tab.id
                        ? 'bg-teal-400 text-navy-950 shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {t(tab.label)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FEATURED MASTERCLASSES SPOTLIGHTS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Spotlight 1: Investing Made Simple */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-teal-950 text-white p-6 shadow-xl border border-teal-500/30 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold border border-teal-400/30 uppercase">
              <Sparkles size={12} />
              <span>MASTERCLASS + SIMULATOR</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-white">
              Investing Made Simple: Learn Before You Earn
            </h2>
            <p className="text-navy-100 text-xs sm:text-sm leading-relaxed">
              {t({
                en: 'Fixed Deposits vs Mutual Funds vs Stocks through the ABC Bicycle Company case study and ₹10,000 virtual portfolio.',
                te: 'ABC సైకిల్ కంపెనీ ఉదాహరణ మరియు ₹10,000 వర్చువల్ పోర్ట్‌ఫోలియో ద్వారా FDలు, మ్యూచువల్ ఫండ్స్, షేర్లను అర్థం చేసుకోండి.',
              })}
            </p>
          </div>
          <Link
            to="/investing-made-simple"
            className="btn-primary text-xs py-2.5 px-5 shadow-md shadow-teal-500/25 self-start inline-flex items-center gap-2"
          >
            <span>{t({ en: 'Explore Investing Masterclass →', te: 'మాస్టర్‌క్లాస్ ప్రారంభించండి →' })}</span>
          </Link>
        </div>

        {/* Spotlight 2: Spot the Mutual Fund Scam */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-rose-950 text-white p-6 shadow-xl border border-rose-500/30 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30 uppercase">
              <Shield size={12} />
              <span>INTERACTIVE FRAUD LAB</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-white">
              Spot the Mutual Fund Scam
            </h2>
            <p className="text-navy-100 text-xs sm:text-sm leading-relaxed">
              {t({
                en: 'Step into realistic WhatsApp & Telegram scam simulators. Unmask fake SEBI certificates, countdown FOMO, and earn your Scam Spotter 🛡️ badge.',
                te: 'వాస్తవిక టెలిగ్రామ్ మరియు వాట్సాప్ మోసాలను గుర్తించండి మరియు స్కామ్ స్పాటర్ బ్యాడ్జ్‌ను గెలుచుకోండి.',
              })}
            </p>
          </div>
          <Link
            to="/spot-the-scam"
            className="btn-coral text-xs py-2.5 px-5 shadow-md shadow-coral-500/25 self-start inline-flex items-center gap-2"
          >
            <span>{t({ en: 'Launch Scam Simulator & Quiz →', te: 'స్కామ్ సిమ్యులేటర్ ప్రారంభించండి →' })}</span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. GAMIFIED PILLARS & QUEST MODULES GRID */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredPillars.map(pillar => {
          const PillarIcon = pillar.id === 'budget' ? Wallet : pillar.id === 'save' ? PiggyBank : pillar.id === 'invest' ? TrendingUp : Shield;

          return (
            <div key={pillar.id} className="space-y-6">
              {/* Pillar Header with Badge & Tagline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy-100 gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-navy-700 text-white flex items-center justify-center shadow-md">
                    <PillarIcon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-black text-navy-900 font-display">
                        {t(pillar.title)}
                      </h2>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 font-bold border border-teal-200">
                        {pillar.modules.length} Quests
                      </span>
                    </div>
                    <p className="text-xs text-navy-500 font-medium mt-0.5">{t(pillar.tagline)}</p>
                  </div>
                </div>

                <Link
                  to={`/learn/${pillar.slug}`}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 self-start sm:self-center transition-colors"
                >
                  <span>{t({ en: 'View Pillar Deep Dive', te: 'పూర్తి వివరాలు చూడండి' })}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Decorative Quest Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillar.modules.map(module => {
                  const moduleLessons = LESSONS.filter(l => module.lessonIds.includes(l.id));
                  const isModuleCompleted = moduleLessons.length > 0 && moduleLessons.every(l => isLessonCompleted(l.id));
                  const isModuleStarted = moduleLessons.some(l => isLessonStarted(l.id));
                  const totalMinutes = moduleLessons.reduce((acc, l) => acc + (l.estimatedMinutes || 8), 0) || 10;
                  const firstLesson = moduleLessons[0];
                  const targetUrl = firstLesson ? `/learn/${pillar.slug}/${firstLesson.slug}` : `/learn/${pillar.slug}`;

                  return (
                    <div
                      key={module.id}
                      className="card-hover bg-white border border-navy-100 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all duration-200 group"
                    >
                      {/* Top Decorative Banner */}
                      <div className="p-5 bg-gradient-to-r from-cream-100/80 via-white to-cream-50 border-b border-navy-100/70 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="w-10 h-10 rounded-xl bg-white border border-navy-100 shadow-sm flex items-center justify-center">
                            {getModuleIcon(module.icon)}
                          </div>

                          {/* Gamified Real Status Pill */}
                          <div className="flex items-center gap-1.5">
                            {isModuleCompleted ? (
                              <span className="badge badge-teal text-[10px] flex items-center gap-1 font-bold shadow-xs">
                                <CheckCircle2 size={12} />
                                <span>MASTERED 🏆</span>
                              </span>
                            ) : isModuleStarted ? (
                              <span className="badge badge-navy text-[10px] flex items-center gap-1 font-bold">
                                <Zap size={11} className="text-amber-400" />
                                <span>IN PROGRESS ⚡</span>
                              </span>
                            ) : (
                              <span className="badge bg-cream-100 text-navy-700 text-[10px] font-bold border border-navy-200">
                                <span>READY 🚀 (+100 XP)</span>
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                              {module.level} QUEST
                            </span>
                            <span className="text-[10px] text-navy-400">· {totalMinutes}m</span>
                          </div>
                          <h3 className="font-extrabold text-lg text-navy-900 font-display group-hover:text-teal-700 transition-colors leading-snug">
                            {t(module.title)}
                          </h3>
                          <p className="text-xs text-navy-600 mt-1 line-clamp-2 leading-relaxed">
                            {t(module.description)}
                          </p>
                        </div>
                      </div>

                      {/* Middle: Embedded Visual Model Preview */}
                      <div className="p-5 space-y-4">
                        {renderModulePreview(module.id)}

                        {/* Lessons List inside this Module */}
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-navy-400 block">
                            {t({ en: 'Interactive Lessons in Quest:', te: 'మాడ్యూల్ పాఠాలు:' })}
                          </span>

                          {moduleLessons.map(les => {
                            const done = isLessonCompleted(les.id);
                            return (
                              <Link
                                key={les.id}
                                to={`/learn/${pillar.slug}/${les.slug}`}
                                className="flex items-center justify-between p-2 rounded-xl bg-cream-50/70 hover:bg-teal-50 text-xs font-semibold text-navy-800 transition-colors"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  {done ? (
                                    <CheckCircle2 size={14} className="text-teal-600 shrink-0" />
                                  ) : (
                                    <Clock size={14} className="text-navy-300 shrink-0" />
                                  )}
                                  <span className="truncate">{t(les.title)}</span>
                                </div>
                                <span className="text-[10px] text-navy-400 shrink-0 ml-1 font-mono">
                                  {les.estimatedMinutes}m
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="p-4 bg-cream-50/50 border-t border-navy-100 flex items-center justify-between gap-3">
                        <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                          +{totalMinutes * 10} XP REWARD
                        </span>

                        <Link
                          to={targetUrl}
                          className={`text-xs py-2 px-4 rounded-xl font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                            isModuleCompleted
                              ? 'bg-navy-100 text-navy-800 hover:bg-navy-200'
                              : 'bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/20'
                          }`}
                        >
                          <span>
                            {isModuleCompleted
                              ? t({ en: 'Review 🏅', te: 'సమీక్షించండి 🏅' })
                              : isModuleStarted
                              ? t({ en: 'Continue ⚡', te: 'కొనసాగించండి ⚡' })
                              : t({ en: 'Start Mission →', te: 'మిషన్ ప్రారంభించండి →' })}
                          </span>
                        </Link>
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
