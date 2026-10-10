import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import {
  Wallet, PiggyBank, TrendingUp, Shield, BookOpen,
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake
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

  return (
    <div className="space-y-16 pb-16">
      {/* HERO SECTION */}
      <section className="bg-hero text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold tracking-wider uppercase border border-teal-400/30">
              <Sparkles size={14} />
              {t({ en: 'FINANCIAL LITERACY, REIMAGINED', te: 'ఆర్థిక అక్షరాస్యత, సరికొత్తగా' })}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] text-white">
              {t({
                en: 'Money makes more sense when you explore it.',
                te: 'డబ్బును అనుభవపూర్వకంగా నేర్చుకున్నప్పుడే సులభంగా అర్థమవుతుంది.',
              })}
            </h1>

            <p className="text-lg sm:text-xl text-navy-100 max-w-xl leading-relaxed font-normal">
              {t({
                en: 'Built specifically for Grade 11–12 students. Master budgeting, compounding, mutual funds, and digital payment safety through real interactive simulations — completely free and zero risk.',
                te: 'గ్రేడ్ 11-12 విద్యార్థుల కోసం ప్రత్యేకంగా రూపొందించబడింది. బడ్జెట్, చక్రవడ్డీ, మ్యూచువల్ ఫండ్స్ మరియు సైబర్ భద్రతను నిజమైన ఇంటరాక్టివ్ సిమ్యులేషన్ల ద్వారా నేర్చుకోండి.',
              })}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/learn" className="btn-coral text-base py-3.5 px-7 shadow-lg hover:shadow-xl transition-all">
                {t({ en: 'Start from Zero', te: 'మొదటి నుండి ప్రారంభించండి' })}
                <ArrowRight size={18} />
              </Link>
              <Link to="/money-lab" className="btn-secondary text-base py-3.5 px-6 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm">
                {t({ en: 'Explore Money Lab', te: 'మనీ ల్యాబ్ చూడండి' })}
              </Link>
            </div>

            {/* Micro proof badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-navy-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-teal-400" />
                {t({ en: '100% Fictional Rupees', te: '100% కల్పిత రూపాయలు' })}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-teal-400" />
                {t({ en: 'Education, Not Advice', te: 'విద్యా ప్రయోజనం మాత్రమే' })}
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake size={16} className="text-teal-400" />
                {t({ en: 'English & Telugu Ready', te: 'తెలుగు & ఇంగ్లీష్ మద్దతు' })}
              </span>
            </div>
          </div>

          {/* Right Hero Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl relative">
              <svg viewBox="0 0 400 320" className="w-full h-auto drop-shadow-md">
                {/* Background Card */}
                <rect x="20" y="20" width="360" height="280" rx="24" fill="#14253D" opacity="0.85" />
                
                {/* Decorative floating symbols */}
                <circle cx="80" cy="70" r="28" fill="#11B7A3" opacity="0.3" />
                <text x="80" y="78" fill="#11B7A3" fontSize="22" fontWeight="bold" textAnchor="middle">₹</text>

                <circle cx="320" cy="80" r="24" fill="#FF765E" opacity="0.3" />
                <text x="320" y="87" fill="#FF765E" fontSize="18" fontWeight="bold" textAnchor="middle">%</text>

                {/* Central Visual: Students Learning with Tablet */}
                <rect x="70" y="120" width="260" height="150" rx="16" fill="#24476A" stroke="#11B7A3" strokeWidth="2" />
                
                {/* Mini Graph on Screen */}
                <path d="M 90 230 Q 150 200 200 210 T 310 150" fill="none" stroke="#11B7A3" strokeWidth="3" />
                <path d="M 90 230 Q 150 220 200 220 T 310 190" fill="none" stroke="#7591b3" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="310" cy="150" r="5" fill="#11B7A3" />

                {/* Floating tags */}
                <rect x="90" y="140" width="90" height="26" rx="6" fill="#14253D" />
                <text x="135" y="157" fill="#FAF8F3" fontSize="11" fontWeight="600" textAnchor="middle">Budget Lab</text>

                <rect x="200" y="140" width="110" height="26" rx="6" fill="#FF765E" />
                <text x="255" y="157" fill="#FAF8F3" fontSize="11" fontWeight="600" textAnchor="middle">Compound +82%</text>

                {/* Friendly Student Avatars */}
                <circle cx="160" cy="80" r="22" fill="#FAF8F3" />
                <circle cx="230" cy="75" r="20" fill="#FAF8F3" />
                <text x="160" y="86" fontSize="14" textAnchor="middle">👩‍🎓</text>
                <text x="230" y="81" fontSize="14" textAnchor="middle">👨‍🎓</text>
              </svg>

              <div className="mt-4 text-center">
                <span className="text-xs font-semibold text-teal-300">
                  {t({ en: 'Hyderabad Student Learning Hub', te: 'హైదరాబాద్ విద్యార్థుల లెర్నింగ్ హబ్' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-eyebrow">
            {t({ en: 'FOUR CORE PILLARS', te: 'నాలుగు ప్రధాన స్తంభాలు' })}
          </span>
          <h2 className="section-title mt-2">
            {t({ en: 'Four Paths to Lifelong Financial Confidence', te: 'ఆర్థిక ఆత్మవిశ్వాసానికి నాలుగు ప్రధాన మార్గాలు' })}
          </h2>
          <p className="section-subtitle mt-3">
            {t({
              en: 'Mapped directly to the Vanguard India youth financial literacy mandate.',
              te: 'వాన్‌గార్డ్ ఇండియా యువత ఆర్థిక అక్షరాస్యత మార్గదర్శకాలకు అనుగుణంగా రూపొందించబడింది.',
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(pillar => {
            const Icon = pillar.id === 'budget' ? Wallet : pillar.id === 'save' ? PiggyBank : pillar.id === 'invest' ? TrendingUp : Shield;
            return (
              <div key={pillar.id} className="card-hover p-6 flex flex-col justify-between bg-white border border-navy-100 rounded-2xl">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-600 font-display">
                    {t(pillar.title)}
                  </h3>
                  <p className="text-xs font-semibold text-teal-600 mt-0.5">
                    {t(pillar.tagline)}
                  </p>
                  <p className="text-sm text-navy-400 mt-3 leading-relaxed">
                    {t(pillar.description)}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-navy-50">
                  <Link
                    to={`/learn/${pillar.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    <span>{t({ en: 'Explore Pillar', te: 'పాఠాలు చూడండి' })}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LIVE MINI INTERACTIVE PREVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-600 to-navy-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="badge badge-teal mb-2">
              {t({ en: 'Live Interactive Preview', te: 'లైవ్ ఇంటరాక్టివ్ ప్రివ్యూ' })}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
              {t({ en: 'Try Allocating ₹5,000 Right Now', te: 'ఇప్పుడే ₹5,000 బడ్జెట్‌ను కేటాయించి చూడండి' })}
            </h3>
            <p className="text-navy-200 text-sm mt-2">
              {t({
                en: 'Move the sliders below to see your remaining balance change in real-time.',
                te: 'క్రింది స్లైడర్లను మార్చి మీ మిగిలిన నిల్వ ఎలా మారుతుందో చూడండి.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-navy-800/60 p-6 rounded-2xl border border-white/10 mb-6">
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
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-sm">
            <div>
              <span className="text-navy-300 text-xs uppercase block">{t({ en: 'Total Spent', te: 'మొత్తం ఖర్చు' })}</span>
              <span className="text-xl font-bold">{formatINR(miniTotal)} / {formatINR(miniIncome)}</span>
            </div>

            <div>
              <span className="text-navy-300 text-xs uppercase block">{t({ en: 'Remaining for Savings', te: 'పొదుపుకు మిగిలిన మొత్తం' })}</span>
              <span className="text-2xl font-extrabold text-teal-300">{formatINR(miniRemaining)}</span>
            </div>

            <Link to="/learn/plan-and-budget/budget-lab" className="btn-primary text-xs py-2.5 px-5">
              {t({ en: 'Launch Full Budget Lab', te: 'పూర్తి బడ్జెట్ ల్యాబ్ తెరవండి' })}
            </Link>
          </div>
        </div>
      </section>

      {/* CONCEPT LIBRARY SNEAK PEEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <span className="section-eyebrow">
              {t({ en: 'KNOWLEDGE GRAPH', te: 'పరిజ్ఞాన నిఘంటువు' })}
            </span>
            <h2 className="section-title mt-1">
              {t({ en: 'Financial Terms Explained Simply', te: 'సరళంగా వివరించబడిన ఆర్థిక పదాలు' })}
            </h2>
          </div>
          <Link to="/explore/glossary" className="btn-ghost text-sm text-teal-600 hover:text-teal-700">
            {t({ en: 'View All Glossary Terms →', te: 'అన్ని పదాలను చూడండి →' })}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOSSARY.slice(0, 6).map(g => (
            <Link
              key={g.id}
              to={`/explore/glossary/${g.slug}`}
              className="card-hover p-5 bg-white border border-navy-100 rounded-2xl block"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-lg text-navy-600">{t(g.term)}</span>
                <span className="badge badge-teal text-[10px]">{g.pillarId}</span>
              </div>
              <p className="text-xs text-navy-400 line-clamp-2 leading-relaxed">
                {t(g.shortDefinition)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-100 rounded-3xl p-8 sm:p-12 text-center border border-navy-100 shadow-sm">
          <h3 className="text-3xl font-bold font-display text-navy-600">
            {t({ en: 'Start building real financial skills today.', te: 'నేడే మీ ఆర్థిక నైపుణ్యాలను నిర్మించుకోవడం ప్రారంభించండి.' })}
          </h3>
          <p className="text-navy-400 text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            {t({
              en: 'No login required, no financial jargon, and completely safe with fictional money.',
              te: 'ఎలాంటి లాగిన్ అవసరం లేదు, కఠినమైన పదజాలం లేదు, కల్పిత డబ్బుతో పూర్తిగా సురక్షితం.',
            })}
          </p>
          <div className="mt-6">
            <Link to="/learn" className="btn-coral text-base py-3.5 px-8 shadow-md">
              {t({ en: 'Start Learning Now', te: 'ఇప్పుడే నేర్చుకోవడం ప్రారంభించండి' })}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
