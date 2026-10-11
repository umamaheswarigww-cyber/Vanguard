import { useParams, Link, Navigate } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import { getGlossaryBySlug, GLOSSARY } from '@/content/glossary/glossary';
import {
  ArrowLeft, BookOpen, ExternalLink, ShieldCheck, Sparkles,
  TrendingUp, PieChart, ShieldAlert, CheckCircle2, ArrowRight
} from 'lucide-react';

export function GlossaryTermPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = useT();

  const entry = slug ? getGlossaryBySlug(slug) : undefined;
  if (!entry) {
    return <Navigate to="/explore/glossary" replace />;
  }

  const related = entry.relatedTermIds
    .map(id => GLOSSARY.find(g => g.id === id))
    .filter(Boolean);

  // Map topic to photorealistic educational imagery
  const topicImages: Record<string, { image: string; caption: { en: string; te: string } }> = {
    budget: {
      image: '/images/hero_students.jpg',
      caption: {
        en: 'Students in Hyderabad learning to budget income, prioritize genuine needs, and plan future goals.',
        te: 'హైదరాబాద్ విద్యార్థులు తమ ఆదాయాన్ని బడ్జెట్ చేయడం మరియు లక్ష్యాలను రూపొందించడం నేర్చుకుంటున్నారు.',
      },
    },
    save: {
      image: '/images/sip_journey.jpg',
      caption: {
        en: 'Disciplined regular saving and compound interest: how small, consistent deposits grow steadily over time.',
        te: 'క్రమశిక్షణతో కూడిన పొదుపు మరియు చక్రవడ్డీ కాలక్రమేణా సంపదను ఎలా వృద్ధి చేస్తాయో చూపుతుంది.',
      },
    },
    invest: {
      image: (slug && (slug.includes('stock') || slug.includes('share') || slug.includes('equity') || slug.includes('demat') || slug.includes('dividend')))
        ? '/images/stock_market.jpg'
        : '/images/mutual_funds.jpg',
      caption: {
        en: 'Investment ecosystem: fractional business ownership and diversified pooled mutual fund portfolios.',
        te: 'పెట్టుబడి వ్యవస్థ: వ్యాపారాలలో వాటాలు మరియు వైవిధ్యభరిత మ్యూచువల్ ఫండ్ పోర్ట్‌ఫోలియోలు.',
      },
    },
    safe: {
      image: '/images/cyber_safety.jpg',
      caption: {
        en: 'Digital cyber safety: guarding OTPs, avoiding fraudulent investment schemes, and regulatory SEBI verification.',
        te: 'డిజిటల్ ఆర్థిక భద్రత: OTPలను రక్షించుకోవడం మరియు మోసపూరిత పథకాల నుండి రక్షణ.',
      },
    },
  };

  const visualData = topicImages[entry.pillarId] || topicImages.budget;

  // Render contextual visual infographic diagram based on topic
  const renderConceptInfographic = () => {
    const s = entry.slug.toLowerCase();

    // 1. Compounding & Growth
    if (s.includes('compound') || s.includes('interest') || s.includes('sip') || s.includes('growth')) {
      return (
        <div className="p-5 rounded-2xl bg-[#091526] text-white border border-teal-500/30 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-teal-300 flex items-center gap-1.5">
              <TrendingUp size={15} />
              {t({ en: 'Visual Model: Compounding Curve', te: 'విజువల్ మోడల్: చక్రవడ్డీ వక్రరేఖ' })}
            </span>
            <span className="text-[11px] text-navy-300">Time vs Capital</span>
          </div>
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80" fill="none">
            <defs>
              <linearGradient id="termGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#11B7A3" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#11B7A3" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="70" x2="300" y2="70" stroke="#ffffff20" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="300" y2="40" stroke="#ff765e" strokeWidth="2" strokeDasharray="2 2" />
            <path d="M0 70 Q 120 68, 200 48 T 300 10 L 300 80 L 0 80 Z" fill="url(#termGlow)" />
            <path d="M0 70 Q 120 68, 200 48 T 300 10" stroke="#11B7A3" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="0" cy="70" r="4" fill="#11B7A3" />
            <circle cx="200" cy="48" r="4" fill="#11B7A3" />
            <circle cx="300" cy="10" r="5" fill="#11B7A3" stroke="#fff" strokeWidth="1.5" />
          </svg>
          <div className="flex items-center justify-between text-[11px] text-navy-200 pt-1 font-medium">
            <span>● {t({ en: 'Simple Growth (Linear)', te: 'సాధారణ వృద్ధి (సరళరేఖ)' })}</span>
            <span className="text-teal-300 font-bold">● {t({ en: 'Compound Growth (Exponential Acceleration)', te: 'చక్రవడ్డీ వృద్ధి (వేగవంతమైన పెరుగుదల)' })}</span>
          </div>
        </div>
      );
    }

    // 2. Budgeting & Allocation
    if (s.includes('budget') || s.includes('need') || s.includes('want') || s.includes('expense') || s.includes('income')) {
      return (
        <div className="p-5 rounded-2xl bg-white border border-navy-100 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-navy-900 flex items-center gap-1.5">
              <PieChart size={15} className="text-teal-600" />
              {t({ en: 'Visual Model: Budget Allocation', te: 'విజువల్ మోడల్: బడ్జెట్ కేటాయింపు' })}
            </span>
            <span className="text-xs text-teal-600 font-bold">50-30-20 Rule</span>
          </div>
          <div className="h-4 w-full bg-navy-100 rounded-full overflow-hidden flex p-0.5 gap-1">
            <div className="h-full bg-teal-500 rounded-l-full" style={{ width: '50%' }} title="Needs: 50%" />
            <div className="h-full bg-coral-400" style={{ width: '30%' }} title="Wants: 30%" />
            <div className="h-full bg-blue-500 rounded-r-full" style={{ width: '20%' }} title="Savings: 20%" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
            <div className="p-2 rounded-xl bg-teal-50 border border-teal-100">
              <b className="text-teal-800 block text-sm">50%</b>
              <span className="text-[11px] text-teal-700">{t({ en: 'Essential Needs', te: 'అవసరాలు' })}</span>
            </div>
            <div className="p-2 rounded-xl bg-coral-50 border border-coral-100">
              <b className="text-coral-800 block text-sm">30%</b>
              <span className="text-[11px] text-coral-700">{t({ en: 'Lifestyle Wants', te: 'కోరికలు' })}</span>
            </div>
            <div className="p-2 rounded-xl bg-blue-50 border border-blue-100">
              <b className="text-blue-800 block text-sm">20%</b>
              <span className="text-[11px] text-blue-700">{t({ en: 'Future Savings', te: 'పొదుపు' })}</span>
            </div>
          </div>
        </div>
      );
    }

    // 3. Stock / Share / Equity Ownership
    if (s.includes('stock') || s.includes('share') || s.includes('equity') || s.includes('ownership')) {
      return (
        <div className="p-5 rounded-2xl bg-white border border-navy-100 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-navy-900">
              {t({ en: 'Visual Model: 100-Unit Fractional Ownership', te: 'విజువల్ మోడల్: కంపెనీ వాటాల విభజన' })}
            </span>
            <span className="text-[11px] font-bold text-coral-600">1 Unit = 1 Share</span>
          </div>
          <div className="grid grid-cols-10 gap-1 max-w-[280px] mx-auto py-2">
            {Array.from({ length: 50 }).map((_, i) => (
              <span
                key={i}
                className={`h-4 rounded-xs border ${
                  i === 24
                    ? 'bg-coral-500 border-coral-600 animate-pulse'
                    : 'bg-teal-100 border-teal-200'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-xs text-navy-600">
            {t({
              en: 'Buying a share means owning a small fraction of the entire business (highlighted unit).',
              te: 'ఒక షేర్ కొనడం అంటే మొత్తం కంపెనీలో ఒక చిన్న భాగాన్ని సొంతం చేసుకోవడం.',
            })}
          </p>
        </div>
      );
    }

    // 4. Mutual Fund / Diversification
    if (s.includes('mutual') || s.includes('fund') || s.includes('nav') || s.includes('diversif')) {
      return (
        <div className="p-5 rounded-2xl bg-[#091526] text-white border border-teal-500/30 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-teal-300">
              {t({ en: 'Visual Model: Diversified Mutual Fund Pool', te: 'విజువల్ మోడల్: వైవిధ్యభరిత పోర్ట్‌ఫోలియో' })}
            </span>
            <span className="text-[11px] bg-teal-400/20 text-teal-300 px-2 py-0.5 rounded-full font-bold">
              Low Single-Stock Risk
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 text-center text-xs py-1">
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
              <span className="text-lg block mb-0.5">👥</span>
              <span className="font-bold block text-white">{t({ en: 'Investors', te: 'పెట్టుబడిదారులు' })}</span>
              <span className="text-[10px] text-navy-300">Pool Savings</span>
            </div>
            <div className="p-2.5 rounded-xl bg-teal-500/20 border border-teal-400/30">
              <span className="text-lg block mb-0.5">💼</span>
              <span className="font-bold block text-teal-300">{t({ en: 'AMC Manager', te: 'ఫండ్ మేనేజర్' })}</span>
              <span className="text-[10px] text-teal-200">SEBI Regulated</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
              <span className="text-lg block mb-0.5">📊</span>
              <span className="font-bold block text-white">{t({ en: '50+ Assets', te: '50+ కంపెనీలు' })}</span>
              <span className="text-[10px] text-navy-300">Diversified</span>
            </div>
          </div>
        </div>
      );
    }

    // 5. Fraud / Scam / Safety
    if (entry.pillarId === 'safe' || s.includes('scam') || s.includes('fraud') || s.includes('phishing') || s.includes('otp')) {
      return (
        <div className="p-5 rounded-2xl bg-rose-950/80 text-white border border-rose-500/40 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-rose-300 flex items-center gap-1.5">
              <ShieldAlert size={15} />
              {t({ en: 'Safety Defense Protocol', te: 'రక్షణ ప్రోటోకాల్' })}
            </span>
            <span className="text-[11px] bg-rose-500/30 text-rose-200 px-2 py-0.5 rounded-full font-bold">
              Dial 1930 for Help
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>{t({ en: 'Verify entities at sebi.gov.in', te: 'sebi.gov.in లో ధృవీకరించండి' })}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>{t({ en: 'Never share OTPs or passwords', te: 'OTPలను ఎవరితోనూ పంచుకోవద్దు' })}</span>
            </div>
          </div>
          <div className="pt-1 text-center">
            <Link
              to="/spot-the-scam"
              className="text-xs font-bold text-teal-300 hover:text-teal-200 underline inline-flex items-center gap-1"
            >
              <span>{t({ en: 'Launch Spot the Mutual Fund Scam Simulator →', te: 'స్కామ్ సిమ్యులేటర్‌ను ప్రారంభించండి →' })}</span>
            </Link>
          </div>
        </div>
      );
    }

    // Default Fallback
    return null;
  };

  return (
    <div className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Link
        to="/explore/glossary"
        className="inline-flex items-center gap-1.5 text-xs text-navy-600 hover:text-teal-600 font-bold transition-colors"
      >
        <ArrowLeft size={14} />
        {t({ en: 'Back to Glossary', te: 'పదకోశానికి వెనుకకు' })}
      </Link>

      <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card space-y-6">
        <div className="flex items-center justify-between gap-2">
          <span className="badge badge-teal uppercase text-[10px]">{entry.pillarId}</span>
          <span className="badge badge-navy text-[10px]">{entry.contentStatus}</span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-900 font-display">
            {t(entry.term)}
          </h1>
          <p className="text-base text-teal-800 font-semibold mt-3 bg-teal-50 p-4 rounded-2xl border border-teal-100 leading-relaxed">
            {t(entry.shortDefinition)}
          </p>
        </div>

        {/* ========================================================= */}
        {/* TOPIC-SPECIFIC VISUAL PHOTO EXPLANATION (Requirement) */}
        {/* ========================================================= */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-700 flex items-center gap-1.5">
            <Sparkles size={14} className="text-teal-500" />
            {t({ en: 'Visual Context & Practical Application:', te: 'దృశ్య సందర్భం & ఆచరణాత్మక వివరణ:' })}
          </span>
          <div className="rounded-2xl overflow-hidden border border-navy-100 shadow-md bg-navy-900">
            <img
              src={visualData.image}
              alt={entry.term.en}
              className="w-full h-56 sm:h-64 object-cover object-center"
            />
            <div className="p-3 bg-navy-950 text-navy-100 text-xs border-t border-navy-800 font-medium">
              📷 {t(visualData.caption)}
            </div>
          </div>
        </div>

        {/* Dynamic Concept Infographic Model */}
        {renderConceptInfographic()}

        {/* Detailed Written Explanation */}
        <div className="prose prose-navy max-w-none text-navy-800 leading-relaxed text-sm pt-4 border-t border-navy-100">
          <h3 className="text-sm font-black uppercase tracking-wider text-navy-900 mb-2">
            {t({ en: 'Detailed Educational Explanation', te: 'సవివరమైన విద్యా వివరణ' })}
          </h3>
          <p className="whitespace-pre-line font-normal text-navy-700 leading-relaxed">
            {t(entry.explanation)}
          </p>
        </div>

        {/* Source References */}
        {entry.sourceRefs && entry.sourceRefs.length > 0 && (
          <div className="mt-8 pt-6 border-t border-navy-100 text-xs text-navy-600">
            <span className="font-bold text-navy-800 block mb-2">
              {t({ en: 'Authoritative Sources & Regulatory Disclosures:', te: 'అధికారిక మూలాలు:' })}
            </span>
            <ul className="space-y-1.5">
              {entry.sourceRefs.map(src => (
                <li key={src.id} className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck size={14} className="text-teal-600 shrink-0" />
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 underline text-navy-700">
                    {src.title} ({src.publisher})
                  </a>
                  <span className="text-[10px] text-navy-400">| Reviewed {src.lastReviewedAt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Related Terms */}
      {related.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy-700">
            {t({ en: 'Related Financial Concepts', te: 'సంబంధిత ఆర్థిక భావనలు' })}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map(r => r && (
              <Link
                key={r.id}
                to={`/explore/glossary/${r.slug}`}
                className="card-hover p-4 bg-white border border-navy-100 rounded-2xl block card-interactive"
              >
                <div className="font-bold text-sm text-navy-900">{t(r.term)}</div>
                <div className="text-xs text-navy-600 mt-1 line-clamp-1">{t(r.shortDefinition)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GlossaryTermPage;
