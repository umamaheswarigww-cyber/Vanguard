import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import {
  Wallet, PiggyBank, TrendingUp, Shield, BookOpen,
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake,
  BarChart3, PieChart, Coins, Lock, Award, Users, FlaskConical
} from 'lucide-react';
import { PILLARS } from '@/content/curriculum/pillars';
import { GLOSSARY } from '@/content/glossary/glossary';
import { formatINR } from '@/lib/finance/formulas';

export function HomePage() {
  const t = useT();

  // Mini interactive preview on the homepage
  const [miniFood, setMiniFood] = useState(1500);
  const [miniTransport, setMiniTransport] = useState(800);
  const [miniFun, setMiniFun] = useState(600);
  const miniIncome = 5000;
  const miniTotal = miniFood + miniTransport + miniFun;
  const miniRemaining = miniIncome - miniTotal;

  // Custom visual metadata for pillars
  const pillarVisuals: Record<string, { image: string; gradient: string }> = {
    budget: {
      image: '/images/hero_students.jpg',
      gradient: 'from-teal-600 to-teal-800',
    },
    save: {
      image: '/images/sip_journey.jpg',
      gradient: 'from-navy-700 to-navy-900',
    },
    invest: {
      image: '/images/stock_market.jpg',
      gradient: 'from-coral-500 to-coral-700',
    },
    safe: {
      image: '/images/cyber_safety.jpg',
      gradient: 'from-blue-700 to-navy-900',
    },
  };

  return (
    <div className="space-y-16 pb-20 bg-cream-50">
      {/* ============================================================ */}
      {/* 1. HERO SECTION WITH COLORFUL ACCENTS & RICH FINTECH VISUAL */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-850 via-navy-800 to-navy-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-navy-700/50">
        {/* Glow ambient background lights */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-coral-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/15 text-teal-300 text-xs font-bold tracking-wider uppercase border border-teal-400/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>{t({ en: 'FINANCIAL CONFIDENCE STARTS HERE', te: 'ఆర్థిక ఆత్మవిశ్వాసం ఇక్కడే ప్రారంభమవుతుంది' })}</span>
            </div>

            {/* Headline with Restrained Colorful Accents */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.12]">
              <span className="block text-white">Your money.</span>
              <span className="block bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                Your choices.
              </span>
              <span className="block bg-gradient-to-r from-coral-300 via-amber-300 to-coral-400 bg-clip-text text-transparent">
                Your future.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-navy-100 max-w-xl leading-relaxed font-normal">
              {t({
                en: 'Learn budgeting, saving, stocks, mutual funds, SIPs and financial safety through interactive experiences designed for young learners in India. Explore with fictional money, experiment freely, and understand the choices behind the numbers.',
                te: 'భారతదేశంలోని యువ అభ్యాసకుల కోసం రూపొందించిన ఇంటరాక్టివ్ అనుభవాల ద్వారా బడ్జెట్, పొదుపు, స్టాక్స్, మ్యూచువల్ ఫండ్స్, SIPలు మరియు ఆర్థిక భద్రతను నేర్చుకోండి. కల్పిత డబ్బుతో అన్వేషించండి, స్వేచ్ఛగా ప్రయోగాలు చేయండి మరియు సంఖ్యల వెనుక ఉన్న ఎంపికలను అర్థం చేసుకోండి.',
              })}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link to="/learn" className="btn-primary text-sm shadow-lg shadow-teal-500/25">
                <span>{t({ en: 'Start Learning', te: 'నేర్చుకోవడం ప్రారంభించండి' })}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/money-lab"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl border border-white/25 text-white bg-white/10 hover:bg-white/20 hover:border-teal-300/50 backdrop-blur-sm font-semibold text-sm transition-all active:scale-[0.98] shadow-xs"
              >
                <FlaskConical size={16} className="text-teal-300" />
                <span>{t({ en: 'Explore Money Lab', te: 'మనీ ల్యాబ్‌ను అన్వేషించండి' })}</span>
              </Link>
            </div>

            {/* Three Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-navy-200">
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                {t({ en: 'Fictional money, real understanding', te: 'కల్పిత డబ్బు, నిజమైన అవగాహన' })}
              </span>
              <span className="flex items-center gap-2 font-medium">
                <Sparkles size={16} className="text-teal-400 shrink-0" />
                {t({ en: 'Learn by exploring', te: 'అన్వేషించడం ద్వారా నేర్చుకోండి' })}
              </span>
              <span className="flex items-center gap-2 font-medium">
                <ShieldCheck size={16} className="text-teal-400 shrink-0" />
                {t({ en: 'Financial education, not investment advice', te: 'ఆర్థిక విద్య మాత్రమే, సలహా కాదు' })}
              </span>
            </div>
          </div>

          {/* Right Column: Purposeful, Rich Interactive Visual Dashboard (No Empty Black Panel) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-navy-900/95 via-navy-850 to-navy-950 p-5 sm:p-6 border border-teal-500/30 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Internal subtle glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-coral-400/10 rounded-full blur-2xl pointer-events-none" />

              {/* Student Classroom Context Bar with Real Photo Thumbnail */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/hero_students.jpg"
                    alt="Hyderabad Students in Financial Literacy Class"
                    className="w-11 h-11 rounded-xl object-cover border border-teal-400/40 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white font-display">Student Sandbox</span>
                      <span className="text-[10px] bg-teal-500/20 text-teal-300 font-semibold px-2 py-0.5 rounded-full border border-teal-400/30">
                        Grade 11–12
                      </span>
                    </div>
                    <p className="text-[11px] text-navy-300">{t({ en: 'Hyderabad Pilot Program', te: 'హైదరాబాద్ పైలట్ ప్రోగ్రామ్' })}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>VIRTUAL LAB</span>
                </div>
              </div>

              {/* Fictional Portfolio Card & Growth Trajectory */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-medium text-navy-300">{t({ en: 'Virtual Portfolio Balance', te: 'వర్చువల్ పోర్ట్‌ఫోలియో బ్యాలెన్స్' })}</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mt-0.5">
                      ₹10,000
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-400/20 text-teal-300 text-xs font-bold border border-teal-400/30">
                      <TrendingUp size={13} />
                      +₹1,240 (+12.4%)
                    </span>
                    <span className="block text-[10px] text-navy-400 mt-1">{t({ en: 'Hypothetical growth', te: 'ఊహాజనిత పెరుగుదల' })}</span>
                  </div>
                </div>

                {/* Smooth SVG Compounding Trajectory Chart */}
                <div className="mt-4 pt-1">
                  <div className="flex justify-between text-[11px] text-navy-300 mb-1">
                    <span>{t({ en: 'Compounding Trajectory', te: 'చక్రవడ్డీ వృద్ధి పథం' })}</span>
                    <span className="text-teal-300 font-semibold">12-Month Horizon</span>
                  </div>
                  <svg className="w-full h-16 overflow-visible" viewBox="0 0 300 60" fill="none">
                    <defs>
                      <linearGradient id="heroChartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#11B7A3" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#11B7A3" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 50 Q 80 46, 150 32 T 300 8 L 300 60 L 0 60 Z"
                      fill="url(#heroChartGlow)"
                    />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#ffffff15" strokeDasharray="3 3" />
                    <path
                      d="M0 50 Q 80 46, 150 32 T 300 8"
                      stroke="#11B7A3"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="0" cy="50" r="3.5" fill="#11B7A3" />
                    <circle cx="150" cy="32" r="3.5" fill="#11B7A3" />
                    <circle cx="300" cy="8" r="4.5" fill="#11B7A3" className="animate-pulse" />
                  </svg>
                </div>
              </div>

              {/* Segmented Asset Allocation Bar */}
              <div className="mt-4 space-y-2 relative z-10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-navy-300 font-medium">{t({ en: 'Diversified Asset Allocation', te: 'వైవిధ్యభరిత పెట్టుబడి కేటాయింపు' })}</span>
                  <span className="text-white text-[11px] font-semibold">{t({ en: '3 Asset Classes', te: '3 ఆస్తి వర్గాలు' })}</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden flex p-0.5 gap-0.5">
                  <div className="h-full bg-teal-400 rounded-l-full transition-all" style={{ width: '40%' }} title="Fixed Deposit: 40%" />
                  <div className="h-full bg-blue-400 transition-all" style={{ width: '40%' }} title="Mutual Funds: 40%" />
                  <div className="h-full bg-coral-400 rounded-r-full transition-all" style={{ width: '20%' }} title="Stocks: 20%" />
                </div>
                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className="flex items-center gap-1.5 text-teal-300">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    <span>40% Safe FD</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>40% Mutual Fund</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-coral-300">
                    <span className="w-2 h-2 rounded-full bg-coral-400" />
                    <span>20% ABC Equity</span>
                  </span>
                </div>
              </div>

              {/* Floating Savings Goal Card with Micro-Motion */}
              <div className="mt-4 p-3.5 rounded-2xl bg-teal-950/70 border border-teal-500/30 flex items-center justify-between animate-float-slow relative z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{t({ en: 'Goal: Intermediate Laptop', te: 'లక్ష్యం: ఇంటర్మీడియట్ ల్యాప్‌టాప్' })}</span>
                    <span className="text-[10px] bg-teal-400/20 text-teal-300 px-2 py-0.2 rounded-full font-bold">
                      81% Funded
                    </span>
                  </div>
                  <div className="text-[11px] text-teal-200">
                    <span>₹28,500 {t({ en: 'saved of', te: 'పొదుపు' })} ₹35,000</span>
                  </div>
                  <div className="w-44 sm:w-52 h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-teal-400 rounded-full" style={{ width: '81%' }} />
                  </div>
                </div>
                <Link
                  to="/investing-made-simple"
                  className="px-3 py-1.5 rounded-lg bg-teal-400 text-navy-950 text-xs font-bold hover:bg-teal-300 transition-colors shrink-0 shadow-xs"
                >
                  {t({ en: 'Try Sandbox', te: 'ప్రయోగించండి' })}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Ribbon */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center relative z-10">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-black text-teal-300 font-display">1,500+</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Students Targeted in Hyderabad', te: 'హైదరాబాద్ విద్యార్థుల లక్ష్యం' })}</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-black text-coral-300 font-display">16</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Interactive Curriculum Lessons', te: 'ఇంటరాక్టివ్ పాఠాలు' })}</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-black text-teal-300 font-display">11</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Live Simulation Sandboxes', te: 'లైవ్ సిమ్యులేటర్లు' })}</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-black text-amber-300 font-display">47+</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Bilingual Glossary Terms (EN/TE)', te: 'ద్విభాషా నిఘంటువు పదాలు' })}</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EDITORIAL INSPIRING MESSAGE (Requirement 6) */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-8 sm:-mt-10 relative z-20">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-navy-100 shadow-xl">
          <span className="text-3xl font-serif text-teal-500 font-bold block mb-1">“</span>
          <blockquote className="text-xl sm:text-2xl font-extrabold font-display text-navy-800 leading-snug tracking-tight max-w-2xl mx-auto">
            {t({
              en: 'Financial confidence begins when you understand the choices in front of you.',
              te: 'మీ ముందున్న ఎంపికలను మీరు అర్థం చేసుకున్నప్పుడే ఆర్థిక ఆత్మవిశ్వాసం ప్రారంభమవుతుంది.',
            })}
          </blockquote>
          <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-coral-400 mx-auto my-3 rounded-full" />
          <p className="text-xs sm:text-sm text-navy-500 font-medium max-w-lg mx-auto">
            {t({
              en: 'Empowering India’s next generation through interactive, risk-free financial education.',
              te: 'ఇంటరాక్టివ్, రిస్క్ లేని ఆర్థిక విద్య ద్వారా భారతదేశ తదుపరి తరాన్ని సాధికారపరుస్తున్నాము.',
            })}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SPECIAL SHOWCASE: INVESTING MADE SIMPLE SECTION */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-navy-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                {t({ en: 'NEW FEATURE: LEARN BEFORE YOU EARN', te: 'కొత్త ఫీచర్: సంపాదించే ముందే నేర్చుకోండి' })}
              </span>

              <h2 className="text-3xl sm:text-4xl font-black font-display leading-tight">
                {t({
                  en: 'Investing Made Simple: FDs, Mutual Funds & Stocks Explained',
                  te: 'పెట్టుబడులు సులభంగా: FDలు, మ్యూచువల్ ఫండ్లు మరియు షేర్లు',
                })}
              </h2>

              <p className="text-teal-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                {t({
                  en: 'A dedicated, student-first learning module with side-by-side comparison tables, a ₹10,000 virtual investment game, the "ABC Bicycle Company" stock case study, and goal matching tools.',
                  te: 'ముఖాముఖి పోలిక పట్టికలు, ₹10,000 వర్చువల్ ఇన్వెస్ట్‌మెంట్ గేమ్, కల్పిత "ABC బైసైకిల్ కంపెనీ" కేస్ స్టడీ మరియు లక్ష్యాల సరిపోలికలతో కూడిన ప్రత్యేక మాడ్యూల్.',
                })}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/investing-made-simple"
                  className="bg-white text-teal-800 hover:bg-cream-100 text-sm font-bold py-3 px-6 rounded-2xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>{t({ en: 'Launch Investing Made Simple', te: 'మాడ్యూల్‌ను ప్రారంభించండి' })}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/investing-made-simple#virtual-sim"
                  className="bg-teal-700/60 hover:bg-teal-700 text-white border border-white/20 text-sm font-semibold py-3 px-5 rounded-2xl transition-all"
                >
                  {t({ en: 'Play Virtual ₹10K Game', te: '₹10K వర్చువల్ గేమ్' })}
                </Link>
              </div>
            </div>

            {/* Visual Thumbnail */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl w-full max-w-sm">
                <img
                  src="/images/mutual_funds.jpg"
                  alt="Mutual Funds Visual"
                  className="w-full h-48 sm:h-56 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FOUR CORE PILLARS SECTION WITH REALISTIC IMAGERY */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge badge-teal">
            {t({ en: 'FOUR CORE PILLARS', te: 'నాలుగు ప్రధాన స్తంభాలు' })}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-600 font-display">
            {t({ en: 'Four Paths to Lifelong Financial Confidence', te: 'ఆర్థిక ఆత్మవిశ్వాసానికి నాలుగు ప్రధాన మార్గాలు' })}
          </h2>
          <p className="text-gray-600 text-sm">
            {t({
              en: 'Mapped directly to the Vanguard youth financial literacy problem statement.',
              te: 'వాన్‌గార్డ్ యువత ఆర్థిక అక్షరాస్యత మార్గదర్శకాలకు అనుగుణంగా రూపొందించబడింది.',
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(pillar => {
            const Icon = pillar.id === 'budget' ? Wallet : pillar.id === 'save' ? PiggyBank : pillar.id === 'invest' ? TrendingUp : Shield;
            const visual = pillarVisuals[pillar.id] || { image: '/images/hero_students.jpg', gradient: 'from-navy-600 to-navy-800' };

            return (
              <div
                key={pillar.id}
                className="bg-white border border-gray-200 rounded-3xl shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={visual.image}
                    alt={pillar.slug}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Icon size={20} />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">
                      {t(pillar.tagline)}
                    </span>
                    <h3 className="text-lg font-bold font-display leading-tight">
                      {t(pillar.title)}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between text-xs text-gray-600">
                  <p className="leading-relaxed">
                    {t(pillar.description)}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <Link
                      to={`/learn/${pillar.slug}`}
                      className="inline-flex items-center gap-1.5 font-bold text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      <span>{t({ en: 'Explore Modules & Lessons', te: 'పాఠాలు చూడండి' })}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. LIVE MINI INTERACTIVE PREVIEW */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-navy-600">
          <div className="max-w-2xl mb-6">
            <span className="badge badge-teal mb-2">
              {t({ en: 'Live Interactive Preview', te: 'లైవ్ ఇంటరాక్టివ్ ప్రివ్యూ' })}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              {t({ en: 'Try Allocating ₹5,000 Right Now', te: 'ఇప్పుడే ₹5,000 బడ్జెట్‌ను కేటాయించి చూడండి' })}
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm mt-1">
              {t({
                en: 'Move the sliders below to see your remaining balance change in real-time.',
                te: 'క్రింది స్లైడర్లను మార్చి మీ మిగిలిన నిల్వ ఎలా మారుతుందో చూడండి.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-navy-800/80 p-5 rounded-2xl border border-white/10 mb-6">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span>{t({ en: 'Textbooks & Study:', te: 'పుస్తకాలు & చదువు:' })}</span>
                <span className="text-teal-300 font-bold">{formatINR(miniFood)}</span>
              </div>
              <input
                type="range"
                min={500}
                max={2500}
                step={100}
                value={miniFood}
                onChange={e => setMiniFood(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span>{t({ en: 'Metro / Bus Pass:', te: 'బస్సు / మెట్రో పాస్:' })}</span>
                <span className="text-teal-300 font-bold">{formatINR(miniTransport)}</span>
              </div>
              <input
                type="range"
                min={300}
                max={1500}
                step={50}
                value={miniTransport}
                onChange={e => setMiniTransport(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span>{t({ en: 'Social Outing / Cafe:', te: 'స్నేహితులతో వినోదం:' })}</span>
                <span className="text-coral-300 font-bold">{formatINR(miniFun)}</span>
              </div>
              <input
                type="range"
                min={200}
                max={1500}
                step={50}
                value={miniFun}
                onChange={e => setMiniFun(Number(e.target.value))}
                className="w-full accent-coral-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Running Totals */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
            <div>
              <span className="text-blue-300 text-xs uppercase block">{t({ en: 'Total Spent', te: 'మొత్తం ఖర్చు' })}</span>
              <span className="text-lg sm:text-xl font-bold">{formatINR(miniTotal)} / {formatINR(miniIncome)}</span>
            </div>

            <div>
              <span className="text-blue-300 text-xs uppercase block">{t({ en: 'Remaining for Savings', te: 'పొదుపుకు మిగిలిన మొత్తం' })}</span>
              <span className="text-xl sm:text-2xl font-black text-teal-300">{formatINR(miniRemaining)}</span>
            </div>

            <Link to="/learn/plan-and-budget/budget-lab" className="btn-primary text-xs py-2.5 px-5">
              {t({ en: 'Launch Full Budget Lab', te: 'పూర్తి బడ్జెట్ ల్యాబ్ తెరవండి' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. GLOSSARY SNEAK PEEK */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
          <div>
            <span className="badge badge-navy">
              {t({ en: 'BILINGUAL KNOWLEDGE GRAPH', te: 'ద్విభాషా నిఘంటువు' })}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-600 font-display mt-1">
              {t({ en: 'Financial Terms Explained Simply', te: 'సరళంగా వివరించబడిన ఆర్థిక పదాలు' })}
            </h2>
          </div>
          <Link to="/explore/glossary" className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1">
            {t({ en: 'View All 47+ Terms →', te: 'అన్ని 47+ పదాలను చూడండి →' })}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GLOSSARY.slice(0, 6).map(g => (
            <Link
              key={g.id}
              to={`/explore/glossary/${g.slug}`}
              className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-400 transition-all block"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-bold text-sm text-navy-600">{t(g.term)}</span>
                <span className="badge badge-teal text-[10px]">{g.pillarId}</span>
              </div>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {t(g.shortDefinition)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FINAL CALL TO ACTION */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 text-center text-white border border-navy-700 shadow-xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {t({ en: 'Start building real financial skills today.', te: 'నేడే మీ ఆర్థిక నైపుణ్యాలను నిర్మించుకోవడం ప్రారంభించండి.' })}
          </h3>
          <p className="text-blue-200 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            {t({
              en: 'No login required, zero financial jargon, and completely safe with fictional rupees.',
              te: 'ఎలాంటి లాగిన్ అవసరం లేదు, కఠినమైన పదజాలం లేదు, కల్పిత డబ్బుతో పూర్తిగా సురక్షితం.',
            })}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link to="/investing-made-simple" className="btn-coral text-sm py-3 px-7 shadow-md font-bold">
              {t({ en: 'Explore Investing Made Simple', te: 'సులభమైన పెట్టుబడులు' })}
              <ArrowRight size={16} />
            </Link>
            <Link to="/learn" className="btn-secondary text-sm py-3 px-6 border-white/20 text-white bg-white/10 hover:bg-white/20">
              {t({ en: 'Browse All 16 Lessons', te: 'అన్ని 16 పాఠాలు' })}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
