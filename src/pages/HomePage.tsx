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
    <div className="space-y-20 pb-20 bg-cream-50">
      {/* ============================================================ */}
      {/* 1. HERO SECTION WITH REALISTIC GENERATED IMAGE */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b border-navy-600/40">
        {/* Glow ambient circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold tracking-wider uppercase border border-teal-400/30">
              <Sparkles size={14} className="text-teal-300" />
              {t({ en: 'HACKATHON THEME: YOUTH FINANCIAL EMPOWERMENT', te: 'హ్యాకథాన్ థీమ్: యువత ఆర్థిక సాధికారత' })}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display leading-[1.12] text-white tracking-tight">
              {t({
                en: 'Money makes more sense when you explore it.',
                te: 'డబ్బును అనుభవపూర్వకంగా నేర్చుకున్నప్పుడే సులభంగా అర్థమవుతుంది.',
              })}
            </h1>

            <p className="text-base sm:text-lg text-blue-100 max-w-xl leading-relaxed font-normal">
              {t({
                en: 'Built specifically for Grade 11–12 students in Hyderabad and across India. Master budgeting, compounding, mutual funds, and digital safety through real interactive simulations — completely free with zero financial risk.',
                te: 'హైదరాబాద్ మరియు దేశవ్యాప్తంగా ఉన్న గ్రేడ్ 11-12 విద్యార్థుల కోసం రూపొందించబడింది. బడ్జెట్, చక్రవడ్డీ, మ్యూచువల్ ఫండ్స్ మరియు డిజిటల్ భద్రతను నిజమైన ఇంటరాక్టివ్ సిమ్యులేషన్ల ద్వారా సులభంగా నేర్చుకోండి.',
              })}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/investing-made-simple" className="btn-coral text-sm py-3.5 px-7 shadow-lg hover:shadow-xl transition-all font-bold">
                <Sparkles size={16} />
                {t({ en: 'Investing Made Simple', te: 'సులభమైన పెట్టుబడులు' })}
              </Link>
              <Link to="/money-lab" className="btn-secondary text-sm py-3.5 px-6 border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                <FlaskConical size={16} />
                {t({ en: 'Launch Money Lab (11 Sims)', te: 'మనీ ల్యాబ్ (11 సిమ్యులేటర్లు)' })}
              </Link>
            </div>

            {/* Micro proof badges */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-blue-200">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={16} className="text-teal-400" />
                {t({ en: '100% Fictional Rupees', te: '100% కల్పిత రూపాయలు' })}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck size={16} className="text-teal-400" />
                {t({ en: 'Education, Not Advice', te: 'విద్యా ప్రయోజనం మాత్రమే' })}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <HeartHandshake size={16} className="text-teal-400" />
                {t({ en: 'Bilingual (English & Telugu)', te: 'తెలుగు & ఇంగ్లీష్ మద్దతు' })}
              </span>
            </div>
          </div>

          {/* Right Hero Realistic Image Card */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-3xl overflow-hidden border-2 border-teal-400/30 shadow-2xl bg-navy-950">
              <img
                src="/images/hero_students.jpg"
                alt="Indian High School Students in Hyderabad Learning Finance"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              
              {/* Floating Glassmorphism Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-xs font-bold text-teal-300 uppercase tracking-wide">
                      {t({ en: 'Hyderabad Classroom Pilot', te: 'హైదరాబాద్ పైలట్ తరగతి' })}
                    </span>
                  </div>
                  <span className="text-[10px] bg-teal-500/20 text-teal-200 px-2 py-0.5 rounded-full border border-teal-400/30">
                    Grade 11–12
                  </span>
                </div>
                <p className="text-xs text-blue-100 leading-snug">
                  {t({
                    en: 'Empowering first-generation learners to understand compounding, stock markets, and fraud prevention.',
                    te: 'మొదటి తరం విద్యార్థులకు చక్రవడ్డీ, స్టాక్ మార్కెట్ మరియు ఆన్‌లైన్ మోసాల రక్షణపై అవగాహన.',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Ribbon */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-teal-300 font-display">1,500+</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Students Targeted in Hyderabad', te: 'హైదరాబాద్ విద్యార్థుల లక్ష్యం' })}</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-coral-300 font-display">16</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Interactive Curriculum Lessons', te: 'ఇంటరాక్టివ్ పాఠాలు' })}</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-teal-300 font-display">11</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Live Simulation Sandboxes', te: 'లైవ్ సిమ్యులేటర్లు' })}</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-2xl sm:text-3xl font-black text-amber-300 font-display">47+</p>
            <p className="text-xs text-blue-200 mt-0.5">{t({ en: 'Bilingual Glossary Terms (EN/TE)', te: 'ద్విభాషా నిఘంటువు పదాలు' })}</p>
          </div>
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
