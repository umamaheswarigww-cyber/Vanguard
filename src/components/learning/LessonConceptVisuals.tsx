import { useState } from 'react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { useT } from '@/context/AppContext';
import { calculateNAV, formatINR, netGrowthWithExpenseRatio } from '@/lib/finance/formulas';
import type { LessonStage } from '@/types/content';
import { lessonVisualTitles, miniLabLessons } from '@/components/learning/lesson-visual-registry';

type LocalCopy = { en: string; te: string };

function Flow({ steps }: { steps: LocalCopy[] }) {
  const t = useT();
  return (
    <div className="flex flex-wrap items-center justify-center gap-2" aria-label={steps.map(step => t(step)).join(' → ')}>
      {steps.map((step, index) => (
        <div className="flex items-center gap-2" key={step.en}>
          <span className="lesson-flow-node rounded-xl border border-navy-100 bg-white px-3 py-2 text-center text-xs font-semibold text-navy-600 shadow-sm">
            {t(step)}
          </span>
          {index < steps.length - 1 && <ArrowRight size={15} className="text-teal-500" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

function LessonIllustration({ lessonId }: { lessonId: string }) {
  const t = useT();
  switch (lessonId) {
    case 'budget-lab':
      return <>
        <div className="flex items-center justify-between text-xs font-semibold"><span>{t({ en: 'Income', te: 'ఆదాయం' })}</span><span className="text-teal-700">₹5,000</span></div>
        <div className="mt-2 flex h-8 overflow-hidden rounded-xl" aria-label="₹5,000 divided between needs, wants, savings, and remaining money">
          <div className="w-[24%] bg-teal-400" title="Needs ₹1,200" /><div className="w-[16%] bg-coral-300" title="Wants ₹800" /><div className="w-[20%] bg-sky-300" title="Savings ₹1,000" /><div className="w-[40%] bg-navy-200" title="Remaining ₹2,000" />
        </div>
        <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] text-navy-500 sm:grid-cols-4"><span>● {t({ en: 'Needs ₹1,200', te: 'అవసరాలు ₹1,200' })}</span><span className="text-coral-600">● {t({ en: 'Wants ₹800', te: 'కోరికలు ₹800' })}</span><span className="text-sky-700">● {t({ en: 'Save ₹1,000', te: 'పొదుపు ₹1,000' })}</span><span>● {t({ en: 'Left ₹2,000', te: 'మిగిలింది ₹2,000' })}</span></div>
      </>;
    case 'simple-vs-compound':
      return <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white p-3"><p className="text-[10px] font-semibold text-navy-500">{t({ en: 'Simple interest', te: 'సాధారణ వడ్డీ' })}</p><svg viewBox="0 0 120 54" className="mt-2 h-14 w-full" role="img" aria-label="Straight-line growth illustration"><path d="M5 48H115M8 44L110 12" fill="none" stroke="#11B7A3" strokeWidth="4" strokeLinecap="round"/><circle cx="8" cy="44" r="4" fill="#14253D"/><circle cx="110" cy="12" r="4" fill="#14253D"/></svg><p className="text-[10px] text-navy-400">{t({ en: 'Interest is on the starting amount', te: 'ప్రారంభ మొత్తంపైనే వడ్డీ' })}</p></div>
        <div className="rounded-xl bg-white p-3"><p className="text-[10px] font-semibold text-navy-500">{t({ en: 'Compound interest', te: 'చక్రవడ్డీ' })}</p><svg viewBox="0 0 120 54" className="mt-2 h-14 w-full" role="img" aria-label="Curving growth illustration"><path d="M5 48H115M8 44C42 43 55 37 67 30S91 19 110 7" fill="none" stroke="#FF765E" strokeWidth="4" strokeLinecap="round"/><circle cx="8" cy="44" r="4" fill="#14253D"/><circle cx="110" cy="7" r="4" fill="#14253D"/></svg><p className="text-[10px] text-navy-400">{t({ en: 'Growth can earn more growth', te: 'వృద్ధిపై కూడా వృద్ధి రావచ్చు' })}</p></div>
      </div>;
    case 'inflation-explorer':
      return <div className="grid grid-cols-2 gap-3 text-center">
        {[{ label: { en: 'Example today', te: 'నేటి ఉదాహరణ' }, items: ['🍌', '🍎', '🥛', '🍞', '🍪'] }, { label: { en: 'Example later', te: 'తరువాతి ఉదాహరణ' }, items: ['🍌', '🍎', '🥛', '🍞'] }].map((basket, i) => <div className="rounded-xl bg-white p-3" key={i}><p className="text-xs font-bold text-navy-600">{t(basket.label)} · ₹100</p><div className="mt-2 flex min-h-9 flex-wrap justify-center gap-1 text-xl" aria-label={basket.items.length + ' illustrated items'}>{basket.items.map((item, j) => <span className="lesson-item-pop" key={`${item}-${j}`}>{item}</span>)}</div><p className="mt-1 text-[10px] text-navy-400">{i === 0 ? t({ en: 'Hypothetical prices', te: 'ఊహాత్మక ధరలు' }) : t({ en: 'If the same basket costs more', te: 'అదే బుట్టకు ఎక్కువ ధరైతే' })}</p></div>)}
      </div>;
    case 'fd-calculator':
      return <><Flow steps={[{ en: 'Deposit ₹50,000', te: '₹50,000 డిపాజిట్' }, { en: 'Illustrative terms', te: 'ఉదాహరణ నిబంధనలు' }, { en: 'About ₹61,572', te: 'సుమారు ₹61,572' }]} /><p className="mt-2 text-center text-[10px] text-navy-400">{t({ en: 'Example only: 7% p.a., quarterly compounding, 3 years; before tax and subject to actual product terms.', te: 'ఉదాహరణ మాత్రమే: ఏడాదికి 7%, త్రైమాసిక చక్రవడ్డీ, 3 సంవత్సరాలు; పన్నుకు ముందు, అసలు ఉత్పత్తి నిబంధనలకు లోబడి.' })}</p></>;
    case 'businesses-and-shares':
      return <div className="text-center"><div className="mx-auto grid max-w-[180px] grid-cols-5 gap-1" aria-label="Company divided into 25 equal ownership units">{Array.from({ length: 25 }, (_, i) => <span key={i} className={`h-5 rounded-md border ${i === 12 ? 'border-coral-500 bg-coral-300 lesson-item-pop' : 'border-teal-200 bg-teal-100'}`} />)}</div><p className="mt-2 text-xs font-semibold text-navy-600">{t({ en: 'A share is one unit of ownership', te: 'షేర్ అనేది యాజమాన్యంలోని ఒక భాగం' })}</p><p className="text-[10px] text-navy-400">{t({ en: 'The highlighted unit is not the whole business.', te: 'హైలైట్ చేసిన భాగమే మొత్తం వ్యాపారం కాదు.' })}</p></div>;
    case 'stock-market-mechanics':
      return <div className="grid grid-cols-2 gap-3 text-center text-xs"><div className="rounded-xl border border-teal-200 bg-white p-3"><span className="block text-[10px] uppercase text-teal-700">{t({ en: 'Buyer bid', te: 'కొనుగోలుదారు బిడ్' })}</span><b>₹99</b></div><div className="rounded-xl border border-coral-200 bg-white p-3"><span className="block text-[10px] uppercase text-coral-700">{t({ en: 'Seller ask', te: 'అమ్మకందారు అడిగిన ధర' })}</span><b>₹100</b></div><p className="col-span-2 text-[10px] text-navy-400">{t({ en: 'These example prices do not match yet: the buyer is offering less than the seller asks.', te: 'ఈ ఉదాహరణ ధరలు ఇంకా కలవలేదు: అమ్మకందారు అడిగినదానికంటే కొనుగోలుదారు తక్కువ ఇస్తున్నాడు.' })}</p></div>;
    case 'stock-market-ecosystem':
      return <Flow steps={[{ en: 'Buyer', te: 'కొనుగోలుదారు' }, { en: 'Broker', te: 'బ్రోకర్' }, { en: 'Exchange', te: 'ఎక్స్చేంజ్' }, { en: 'Seller', te: 'అమ్మకందారు' }]} />;
    case 'market-indices':
      return <div className="space-y-2">{[{ n: 'A', w: 50, color: 'bg-teal-400' }, { n: 'B', w: 30, color: 'bg-sky-400' }, { n: 'C', w: 20, color: 'bg-coral-300' }].map(company => <div className="flex items-center gap-2 text-[10px]" key={company.n}><span className="w-4 font-bold">{company.n}</span><div className="h-3 flex-1 rounded-full bg-white"><div className={`h-3 rounded-full ${company.color} lesson-bar-grow`} style={{ width: `${company.w}%` }} /></div><span className="w-16 text-right text-navy-400">{company.w}% {t({ en: 'weight', te: 'బరువు' })}</span></div>)}<p className="text-center text-[10px] text-navy-400">{t({ en: 'Illustrative weights: one index value summarizes several companies.', te: 'ఉదాహరణ బరువులు: ఒక సూచీ విలువ అనేక కంపెనీలను సంగ్రహిస్తుంది.' })}</p></div>;
    case 'company-financials':
      return <div className="grid grid-cols-3 items-end gap-2 text-center"><div className="rounded-xl bg-teal-100 p-3"><b className="text-sm">₹100</b><span className="block text-[10px]">{t({ en: 'Revenue', te: 'ఆదాయం' })}</span></div><span className="pb-4 text-navy-300">−</span><div className="rounded-xl bg-coral-100 p-3"><b className="text-sm">₹75</b><span className="block text-[10px]">{t({ en: 'Costs', te: 'ఖర్చులు' })}</span></div><span className="col-span-3 text-xs text-navy-300">↓</span><div className="col-start-2 rounded-xl bg-sky-100 p-3"><b className="text-sm">₹25</b><span className="block text-[10px]">{t({ en: 'Profit', te: 'లాభం' })}</span></div></div>;
    case 'financial-ratios':
      return <div className="mx-auto max-w-xs rounded-2xl bg-white p-4 text-center"><p className="text-[10px] font-bold uppercase tracking-wide text-navy-400">{t({ en: 'Example earnings per share', te: 'ఉదాహరణ ఒక్కో షేర్ ఆదాయం' })}</p><p className="mt-2 text-lg font-bold text-navy-700">₹20,000 ÷ 2,000 = ₹10</p><div className="mt-2 flex justify-center gap-2 text-[10px] text-navy-500"><span>{t({ en: 'profit', te: 'లాభం' })}</span><span>÷</span><span>{t({ en: 'shares', te: 'షేర్లు' })}</span><span>=</span><span>{t({ en: 'EPS', te: 'EPS' })}</span></div></div>;
    case 'mutual-fund-basics':
      return <><div className="flex justify-center gap-2 text-2xl" aria-hidden="true"><span className="lesson-item-pop">🪙</span><span className="lesson-item-pop">🪙</span><span className="lesson-item-pop">🪙</span></div><div className="mx-auto my-2 h-1 w-40 bg-teal-200"/><div className="mx-auto max-w-xs rounded-xl border border-teal-200 bg-white p-3 text-center"><p className="text-xs font-bold">{t({ en: 'Shared fund pool', te: 'సమిష్టి ఫండ్' })}</p><p className="text-[10px] text-navy-400">{t({ en: 'Many investors own units in a portfolio.', te: 'చాలామంది పెట్టుబడిదారులు పోర్ట్‌ఫోలియోలో యూనిట్లు కలిగి ఉంటారు.' })}</p></div></>;
    case 'mutual-fund-structure':
      return <Flow steps={[{ en: 'Investors', te: 'పెట్టుబడిదారులు' }, { en: 'Fund operations', te: 'ఫండ్ నిర్వహణ' }, { en: 'Portfolio assets', te: 'పోర్ట్‌ఫోలియో ఆస్తులు' }]} />;
    case 'fund-types':
      return <div className="grid grid-cols-3 gap-2 text-center text-[10px]"><div className="rounded-xl bg-coral-50 p-3"><span className="text-xl">📈</span><b className="block">{t({ en: 'Equity', te: 'ఈక్విటీ' })}</b><span>{t({ en: 'Company shares', te: 'కంపెనీ షేర్లు' })}</span></div><div className="rounded-xl bg-sky-50 p-3"><span className="text-xl">🧾</span><b className="block">{t({ en: 'Debt', te: 'డెట్' })}</b><span>{t({ en: 'Debt instruments', te: 'రుణ సాధనాలు' })}</span></div><div className="rounded-xl bg-teal-50 p-3"><span className="text-xl">⚖️</span><b className="block">{t({ en: 'Hybrid', te: 'హైబ్రిడ్' })}</b><span>{t({ en: 'A mix of assets', te: 'ఆస్తుల మిశ్రమం' })}</span></div></div>;
    case 'active-vs-passive':
      return <Flow steps={[{ en: 'Active: manager chooses', te: 'యాక్టివ్: మేనేజర్ ఎంపిక' }, { en: 'Passive: tracks an index', te: 'పాసివ్: సూచీని అనుసరిస్తుంది' }]} />;
    case 'sip-lab':
      return <div className="flex items-end justify-center gap-2 border-b border-l border-navy-200 px-3 pb-1 pt-4">{[1, 2, 3, 4, 5, 6].map((month, index) => <div className="flex flex-col items-center gap-1" key={month}><div className="lesson-bar-grow w-7 rounded-t-md bg-teal-400" style={{ height: `${14 + index * 5}px` }} /><span className="text-[9px] text-navy-400">{t({ en: `M${month}`, te: `${month}వ నెల` })}</span></div>)}<span className="ml-2 self-center text-xs font-bold text-navy-600">₹2,000 × 6 = ₹12,000</span></div>;
    case 'scam-detective':
      return <div className="mx-auto max-w-sm rounded-2xl border border-coral-200 bg-white p-3 shadow-sm"><div className="flex items-center gap-2 text-[10px] font-bold text-navy-500"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-coral-100">!</span>{t({ en: 'Unverified message', te: 'ధృవీకరించని సందేశం' })}</div><p className="mt-2 text-xs font-semibold text-navy-700">{t({ en: '“Guaranteed 4% every week! Pay today. Send your OTP to activate.”', te: '“ప్రతి వారం 4% హామీ! ఈరోజే చెల్లించండి. ప్రారంభించడానికి OTP పంపండి.”' })}</p><div className="mt-2 flex flex-wrap gap-1"><span className="rounded-full bg-coral-50 px-2 py-1 text-[9px] text-coral-700">{t({ en: 'guaranteed return', te: 'హామీ రాబడి' })}</span><span className="rounded-full bg-coral-50 px-2 py-1 text-[9px] text-coral-700">{t({ en: 'urgency', te: 'తొందరపాటు' })}</span><span className="rounded-full bg-coral-50 px-2 py-1 text-[9px] text-coral-700">OTP</span></div></div>;
    case 'money-foundations':
      return <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold"><span>{t({ en: 'Income Pool', te: 'ఆదాయం' })}</span><span className="text-teal-700">₹5,000</span></div>
        <div className="flex h-7 overflow-hidden rounded-xl border border-navy-100">
          <div className="w-[52%] bg-teal-400 flex items-center justify-center text-[10px] font-bold text-white" title="Needs ₹2,600">52% {t({ en: 'Needs', te: 'అవసరాలు' })}</div>
          <div className="w-[36%] bg-coral-400 flex items-center justify-center text-[10px] font-bold text-white" title="Wants ₹1,800">36% {t({ en: 'Wants', te: 'కోరికలు' })}</div>
          <div className="w-[12%] bg-emerald-400 flex items-center justify-center text-[10px] font-bold text-white" title="Surplus ₹600">12% {t({ en: 'Save', te: 'పొదుపు' })}</div>
        </div>
        <p className="text-center text-[10px] text-navy-400">{t({ en: 'Income (₹5,000) − Needs (₹2,600) − Wants (₹1,800) = Surplus ₹600', te: 'ఆదాయం (₹5,000) − అవసరాలు (₹2,600) − కోరికలు (₹1,800) = మిగులు ₹600' })}</p>
      </div>;
    case 'savings-goals':
      return <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-2.5"><span className="text-lg block">⏱️</span><b className="block text-teal-800">{t({ en: '< 1 Year', te: '< 1 సంవత్సరం' })}</b><span className="text-[9px] text-navy-500">{t({ en: 'Exam fee, books', te: 'పరీక్ష ఫీజు, పుస్తకాలు' })}</span></div>
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-2.5"><span className="text-lg block">💻</span><b className="block text-sky-800">{t({ en: '1–3 Years', te: '1–3 సంవత్సరాలు' })}</b><span className="text-[9px] text-navy-500">{t({ en: 'Laptop ₹36,000', te: 'ల్యాప్‌టాప్ ₹36,000' })}</span></div>
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-2.5"><span className="text-lg block">🎓</span><b className="block text-purple-800">{t({ en: '3+ Years', te: '3+ సంవత్సరాలు' })}</b><span className="text-[9px] text-navy-500">{t({ en: 'Higher education', te: 'ఉన్నత చదువులు' })}</span></div>
      </div>;
    case 'saving-basics':
      return <div className="rounded-2xl bg-white border border-navy-100 p-3 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-navy-700">{t({ en: 'Emergency Shield Cushion', te: 'అత్యవసర నిధి రక్షణ' })}</span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">3–6 Months Runway</span>
        </div>
        <div className="grid grid-cols-6 gap-1">
          {[1, 2, 3, 4, 5, 6].map(m => (
            <div key={m} className={`h-6 rounded-md flex items-center justify-center text-[9px] font-bold ${m <= 3 ? 'bg-teal-400 text-white' : 'bg-teal-100 text-teal-800'}`}>
              M{m}
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] text-navy-400">{t({ en: 'Accessible instantly 24/7 without market capital loss', te: 'ఎటువంటి నష్టం లేకుండా 24/7 వెంటనే లభించే రక్షణ నిధి' })}</p>
      </div>;
    case 'saving-vs-investing':
      return <div className="rounded-2xl bg-navy-900 text-white p-3 space-y-2 border border-navy-700">
        <div className="flex justify-between items-center text-xs">
          <span className="text-teal-300 font-bold">{t({ en: 'The Inflation Hurdle', te: 'ద్రవ్యోల్బణం సవాలు' })}</span>
          <span className="text-coral-300 text-[10px]">10-Year Horizon</span>
        </div>
        <div className="space-y-1.5 text-[10px]">
          <div className="flex items-center justify-between"><span className="text-navy-300">Cash in Locker:</span><span className="text-coral-400 font-bold">0% return (−6% real loss)</span></div>
          <div className="flex items-center justify-between"><span className="text-navy-300">Bank Fixed Deposit:</span><span className="text-sky-300 font-bold">6.5% return (preserves capital)</span></div>
          <div className="flex items-center justify-between"><span className="text-navy-300">Equity Index Fund:</span><span className="text-teal-300 font-bold">12% historical CAGR (beats inflation)</span></div>
        </div>
      </div>;
    case 'digital-safety':
      return <div className="grid grid-cols-2 gap-2 text-center text-xs">
        <div className="rounded-xl border border-coral-300 bg-coral-50 p-2.5">
          <span className="text-lg block mb-0.5">📤</span>
          <b className="text-coral-800 block text-[11px]">{t({ en: 'SENDING Money', te: 'డబ్బు పంపుతున్నప్పుడు' })}</b>
          <span className="text-[10px] text-coral-700 font-bold">PIN REQUIRED 🔒</span>
        </div>
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-2.5">
          <span className="text-lg block mb-0.5">📥</span>
          <b className="text-emerald-800 block text-[11px]">{t({ en: 'RECEIVING Money', te: 'డబ్బు స్వీకరిస్తున్నప్పుడు' })}</b>
          <span className="text-[10px] text-emerald-700 font-bold">NO PIN EVER ✅</span>
        </div>
      </div>;
    case 'incident-steps':
      return <><Flow steps={[{ en: '1. Block Scammer', te: '1. బ్లాక్ చేయండి' }, { en: '2. Freeze Cards', te: '2. కార్డులను ఫ్రీజ్ చేయండి' }, { en: '3. Dial 1930 Helpline', te: '3. 1930 కు కాల్ చేయండి' }, { en: '4. cybercrime.gov.in', te: '4. ఆన్‌లైన్ ఫిర్యాదు' }]} /><p className="mt-2 text-center text-[10px] text-navy-400">{t({ en: 'Golden Hour: Report within 60 minutes to freeze fraudster accounts.', te: 'గోల్డెన్ అవర్: 60 నిమిషాల్లో కాల్ చేస్తే మోసగాడి ఖాతాను ఫ్రీజ్ చేయవచ్చు.' })}</p></>;
    default:
      return null;
  }
}

export function LessonConceptVisual({ lessonId, stage }: { lessonId: string; stage: LessonStage }) {
  const t = useT();
  const title = lessonVisualTitles[lessonId];
  if (!title) return null;
  return (
    <section className="lesson-visual-card" aria-label={t(title)}>
      <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-teal-700"><Sparkles size={14} aria-hidden="true" />{t({ en: 'Look closely', te: 'జాగ్రత్తగా చూడండి' })}</div>
      <h3 className="mb-3 text-sm font-bold text-navy-700">{t(title)}</h3>
      <LessonIllustration lessonId={lessonId} />
      {stage.type === 'mastery_check' && <p className="mt-3 border-t border-navy-100 pt-2 text-[10px] text-navy-400">{t({ en: 'Use the model above to explain your answer.', te: 'మీ సమాధానాన్ని వివరించడానికి పై నమూనాను ఉపయోగించండి.' })}</p>}
    </section>
  );
}

function ShareOwnershipLab() {
  const t = useT();
  const [shares, setShares] = useState(1);
  return <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><div><h4 className="text-sm font-bold text-navy-700">{t({ en: 'Explore ownership', te: 'యాజమాన్యాన్ని పరిశీలించండి' })}</h4><p className="text-[10px] text-navy-500">{t({ en: 'Fictional company divided into 100 equal shares.', te: 'ఊహాత్మక కంపెనీని 100 సమాన షేర్లుగా విభజించాం.' })}</p></div><span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-teal-700">{shares}% {t({ en: 'ownership', te: 'యాజమాన్యం' })}</span></div>
    <div className="mx-auto grid max-w-[300px] grid-cols-10 gap-1" aria-label={`${shares} of 100 example shares selected`}>{Array.from({ length: 100 }, (_, index) => <span key={index} className={`aspect-square rounded-sm ${index < shares ? 'bg-coral-400' : 'bg-teal-200'}`} />)}</div>
    <label className="mt-3 block text-xs font-semibold text-navy-600">{t({ en: 'Shares held', te: 'మీ షేర్లు' })}: {shares} / 100<input aria-label={t({ en: 'Shares held', te: 'మీ షేర్లు' })} type="range" min="1" max="20" step="1" value={shares} onChange={event => setShares(Number(event.target.value))} className="mt-2 w-full accent-teal-500" /></label>
    <p className="mt-2 text-[10px] leading-relaxed text-navy-500">{t({ en: 'In this simplified example, 1 of 100 equal shares represents 1% ownership. A share does not give control of every company decision.', te: 'ఈ సరళ ఉదాహరణలో 100 సమాన షేర్లలో 1 షేర్ అంటే 1% యాజమాన్యం. ప్రతి కంపెనీ నిర్ణయంపై నియంత్రణ అని కాదు.' })}</p>
  </div>;
}

function OrderMatchLab() {
  const t = useT();
  const [bid, setBid] = useState(99);
  const ask = 100;
  const matched = bid >= ask;
  return <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4">
    <div className="mb-3"><h4 className="text-sm font-bold text-navy-700">{t({ en: 'Try a buyer limit order', te: 'కొనుగోలుదారు లిమిట్ ఆర్డర్ ప్రయత్నించండి' })}</h4><p className="text-[10px] text-navy-500">{t({ en: 'A fictional seller will accept ₹100 per share.', te: 'ఊహాత్మక అమ్మకందారు ఒక్కో షేర్‌కు ₹100 అంగీకరిస్తారు.' })}</p></div>
    <div className="grid grid-cols-2 gap-2 text-center"><div className="rounded-xl bg-white p-3 text-[10px]">{t({ en: 'Your maximum bid', te: 'మీ గరిష్ఠ బిడ్' })}<b className="mt-1 block text-lg">₹{bid}</b></div><div className="rounded-xl bg-white p-3 text-[10px]">{t({ en: 'Seller asks', te: 'అమ్మకందారు ధర' })}<b className="mt-1 block text-lg">₹{ask}</b></div></div>
    <label className="mt-3 block text-xs font-semibold text-navy-600">{t({ en: 'Change your bid', te: 'మీ బిడ్ మార్చండి' })}<input type="range" min="90" max="110" step="1" value={bid} onChange={event => setBid(Number(event.target.value))} className="mt-2 w-full accent-teal-500" /></label>
    <p aria-live="polite" className={`mt-3 rounded-xl p-3 text-xs font-semibold ${matched ? 'bg-teal-100 text-teal-800' : 'bg-white text-navy-600'}`}>{matched ? t({ en: 'The prices can match. In this example, the trade could execute at the seller’s ₹100 ask.', te: 'ధరలు కలవవచ్చు. ఈ ఉదాహరణలో ₹100 అమ్మకపు ధర వద్ద లావాదేవీ జరగవచ్చు.' }) : t({ en: 'No match yet: your bid is below the seller’s ask, so the order may wait.', te: 'ఇంకా ధరలు కలవలేదు: మీ బిడ్ అమ్మకపు ధర కంటే తక్కువగా ఉంది, కాబట్టి ఆర్డర్ వేచి ఉండవచ్చు.' })}</p>
  </div>;
}

function TradeRouteLab() {
  const t = useT();
  const [step, setStep] = useState(0);
  const steps: LocalCopy[] = [{ en: 'You place an order', te: 'మీరు ఆర్డర్ ఇస్తారు' }, { en: 'Broker routes it', te: 'బ్రోకర్ దాన్ని పంపిస్తారు' }, { en: 'Exchange matches orders', te: 'ఎక్స్చేంజ్ ఆర్డర్లను కలుపుతుంది' }, { en: 'Trade is recorded', te: 'లావాదేవీ నమోదు అవుతుంది' }];
  return <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4"><div className="flex flex-wrap items-center justify-between gap-2"><div><h4 className="text-sm font-bold text-navy-700">{t({ en: 'Follow one example trade', te: 'ఒక ఉదాహరణ లావాదేవీని అనుసరించండి' })}</h4><p className="text-[10px] text-navy-500">{t({ en: 'Tap through the simplified route.', te: 'సరళీకృత మార్గాన్ని దశలవారీగా చూడండి.' })}</p></div><button type="button" className="btn-ghost px-2 py-1 text-[10px]" onClick={() => setStep(0)}><RotateCcw size={12} />{t({ en: 'Replay', te: 'మళ్లీ చూడండి' })}</button></div><ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">{steps.map((item, index) => <li className={`rounded-xl border p-3 text-[10px] font-semibold ${index === step ? 'border-teal-400 bg-white text-teal-800 shadow-sm' : index < step ? 'border-teal-100 bg-teal-50 text-navy-500' : 'border-white bg-white/60 text-navy-400'}`} key={item.en}><span className="mb-1 block text-[9px] uppercase">{t({ en: `Step ${index + 1}`, te: `దశ ${index + 1}` })}</span>{t(item)}</li>)}</ol><p role="status" aria-live="polite" className="mt-2 text-xs font-semibold text-navy-700">{t(steps[step])}</p><button type="button" disabled={step === steps.length - 1} onClick={() => setStep(value => Math.min(value + 1, steps.length - 1))} className="btn-primary mt-3 px-4 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-50">{step === steps.length - 1 ? t({ en: 'Trade path complete', te: 'లావాదేవీ మార్గం పూర్తయింది' }) : t({ en: 'Next step', te: 'తదుపరి దశ' })}<ArrowRight size={14} /></button></div>;
}

function NavLabMini() {
  const t = useT();
  const [assets, setAssets] = useState(1_000_000);
  const [liabilities, setLiabilities] = useState(100_000);
  const [units, setUnits] = useState(90_000);
  const nav = calculateNAV(assets, liabilities, units);
  return <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4"><h4 className="text-sm font-bold text-navy-700">{t({ en: 'Build a simplified NAV', te: 'సరళీకృత NAV లెక్కించండి' })}</h4><p className="mb-3 text-[10px] text-navy-500">{t({ en: 'NAV per unit = (assets − liabilities) ÷ units.', te: 'ఒక్కో యూనిట్ NAV = (ఆస్తులు − బాధ్యతలు) ÷ యూనిట్లు.' })}</p><div className="grid gap-2 sm:grid-cols-3">{[{ name: { en: 'Assets', te: 'ఆస్తులు' }, value: assets, min: 500_000, max: 1_500_000, step: 50_000, set: setAssets }, { name: { en: 'Liabilities', te: 'బాధ్యతలు' }, value: liabilities, min: 0, max: 300_000, step: 10_000, set: setLiabilities }, { name: { en: 'Units', te: 'యూనిట్లు' }, value: units, min: 50_000, max: 150_000, step: 5_000, set: setUnits }].map(control => <label className="rounded-xl bg-white p-2 text-[10px] font-semibold" key={control.name.en}>{t(control.name)}<span className="block text-sm">{control.name.en === 'Units' ? control.value.toLocaleString('en-IN') : formatINR(control.value)}</span><input aria-label={t(control.name)} type="range" min={control.min} max={control.max} step={control.step} value={control.value} onChange={event => control.set(Number(event.target.value))} className="mt-2 w-full accent-teal-500" /></label>)}</div><div aria-live="polite" className="mt-3 rounded-xl bg-navy-700 p-3 text-center text-white"><span className="text-[10px] text-navy-100">{t({ en: 'Illustrative NAV per unit', te: 'ఉదాహరణ ఒక్కో యూనిట్ NAV' })}</span><b className="block text-2xl">{formatINR(nav, 2)}</b><span className="text-[9px] text-navy-200">{formatINR(assets)} − {formatINR(liabilities)} ÷ {units.toLocaleString('en-IN')}</span></div></div>;
}

function FundTypeLab() {
  const t = useT();
  const [selected, setSelected] = useState<'equity' | 'debt' | 'hybrid'>('equity');
  const details: Record<typeof selected, { title: LocalCopy; description: LocalCopy; assets: LocalCopy[]; note: LocalCopy }> = {
    equity: { title: { en: 'Equity fund', te: 'ఈక్విటీ ఫండ్' }, description: { en: 'Primarily holds shares in companies.', te: 'ప్రధానంగా కంపెనీల షేర్లను కలిగి ఉంటుంది.' }, assets: [{ en: 'Company A shares', te: 'కంపెనీ A షేర్లు' }, { en: 'Company B shares', te: 'కంపెనీ B షేర్లు' }, { en: 'Company C shares', te: 'కంపెనీ C షేర్లు' }], note: { en: 'Share prices can rise or fall.', te: 'షేర్ ధరలు పెరగవచ్చు లేదా తగ్గవచ్చు.' } },
    debt: { title: { en: 'Debt fund', te: 'డెట్ ఫండ్' }, description: { en: 'Primarily holds debt instruments.', te: 'ప్రధానంగా డెట్ సాధనాలను కలిగి ఉంటుంది.' }, assets: [{ en: 'Issuer 1 debt', te: 'ఇష్యూయర్ 1 డెట్' }, { en: 'Issuer 2 debt', te: 'ఇష్యూయర్ 2 డెట్' }, { en: 'Issuer 3 debt', te: 'ఇష్యూయర్ 3 డెట్' }], note: { en: 'Debt funds also have risks; value and liquidity can vary.', te: 'డెట్ ఫండ్లకూ రిస్కులు ఉంటాయి; విలువ, లిక్విడిటీ మారవచ్చు.' } },
    hybrid: { title: { en: 'Hybrid fund', te: 'హైబ్రిడ్ ఫండ్' }, description: { en: 'Combines more than one asset type.', te: 'ఒకటి కంటే ఎక్కువ ఆస్తి రకాలను కలుపుతుంది.' }, assets: [{ en: 'Company shares', te: 'కంపెనీ షేర్లు' }, { en: 'Debt instruments', te: 'డెట్ సాధనాలు' }, { en: 'Cash or other holdings', te: 'నగదు లేదా ఇతర హోల్డింగ్స్' }], note: { en: 'The mix differs by fund; it does not remove risk.', te: 'మిశ్రమం ఫండ్‌ను బట్టి మారుతుంది; రిస్క్ పూర్తిగా తొలగదు.' } },
  };
  const active = details[selected];
  return <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4"><h4 className="text-sm font-bold text-navy-700">{t({ en: 'Inspect a fund category', te: 'ఫండ్ వర్గాన్ని పరిశీలించండి' })}</h4><div className="mt-3 flex flex-wrap gap-2">{(['equity', 'debt', 'hybrid'] as const).map(key => <button type="button" key={key} aria-pressed={selected === key} onClick={() => setSelected(key)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${selected === key ? 'bg-navy-700 text-white' : 'bg-white text-navy-600'}`}>{t(details[key].title)}</button>)}</div><div className="mt-3 rounded-xl bg-white p-3"><p className="text-xs text-navy-600">{t(active.description)}</p><div className="mt-2 flex flex-wrap gap-2">{active.assets.map(asset => <span className="lesson-flow-node rounded-lg bg-teal-50 px-2 py-2 text-[10px] font-semibold text-teal-800" key={asset.en}>{t(asset)}</span>)}</div><p className="mt-2 text-[10px] text-coral-700">{t(active.note)}</p></div></div>;
}

function FeeDragLab() {
  const t = useT();
  const [principal, setPrincipal] = useState(50_000);
  const [years, setYears] = useState(10);
  const grossReturn = 0.08;
  const lowFee = netGrowthWithExpenseRatio(principal, grossReturn, 0.002, years);
  const highFee = netGrowthWithExpenseRatio(principal, grossReturn, 0.012, years);
  const max = Math.max(lowFee, highFee);
  return <div className="rounded-2xl border border-violet-200 bg-violet-50/60 p-4"><h4 className="text-sm font-bold text-navy-700">{t({ en: 'See how fees change an illustration', te: 'ఫీజులు ఉదాహరణను ఎలా మారుస్తాయో చూడండి' })}</h4><p className="text-[10px] text-navy-500">{t({ en: 'Both examples assume the same hypothetical 8% gross annual growth before fees.', te: 'రెండు ఉదాహరణలూ ఫీజులకు ముందు ఊహాత్మకంగా ఏడాదికి 8% వృద్ధి అనుకుంటాయి.' })}</p><div className="mt-3 grid gap-3 sm:grid-cols-2"><label className="text-xs font-semibold">{t({ en: 'Starting amount', te: 'ప్రారంభ మొత్తం' })}: {formatINR(principal)}<input type="range" min="10000" max="200000" step="5000" value={principal} onChange={event => setPrincipal(Number(event.target.value))} className="mt-2 w-full accent-teal-500" /></label><label className="text-xs font-semibold">{t({ en: 'Years', te: 'సంవత్సరాలు' })}: {years}<input type="range" min="1" max="25" step="1" value={years} onChange={event => setYears(Number(event.target.value))} className="mt-2 w-full accent-teal-500" /></label></div><div className="mt-3 space-y-2">{[{ name: t({ en: 'Illustrative lower fee (0.2%)', te: 'తక్కువ ఫీజు (0.2%) ఉదాహరణ' }), value: lowFee, color: 'bg-teal-400' }, { name: t({ en: 'Illustrative higher fee (1.2%)', te: 'ఎక్కువ ఫీజు (1.2%) ఉదాహరణ' }), value: highFee, color: 'bg-coral-300' }].map(item => <div key={item.name}><div className="mb-1 flex justify-between gap-2 text-[10px]"><span>{item.name}</span><b>{formatINR(item.value)}</b></div><div className="h-3 overflow-hidden rounded-full bg-white"><div className={`h-full ${item.color} transition-all duration-500`} style={{ width: `${max ? item.value / max * 100 : 0}%` }} /></div></div>)}</div><p className="mt-2 text-[10px] text-navy-500">{t({ en: 'Simplified annual fee deduction model. Real fund costs are reflected in NAV; actual returns are uncertain and can be negative.', te: 'సరళీకృత వార్షిక ఫీజు తగ్గింపు నమూనా. అసలు ఫండ్ ఖర్చులు NAVలో ప్రతిబింబిస్తాయి; వాస్తవ రాబడులు అనిశ్చితం, నష్టమూ రావచ్చు.' })}</p></div>;
}

function CashFlowBalanceLab() {
  const t = useT();
  const [income, setIncome] = useState(5000);
  const [needs, setNeeds] = useState(2600);
  const [wants, setWants] = useState(1800);
  const totalExpenses = needs + wants;
  const netBalance = income - totalExpenses;
  const isSurplus = netBalance >= 0;

  return (
    <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-4">
      <div className="mb-3">
        <h4 className="text-sm font-bold text-navy-700">{t({ en: 'Interactive Cash Flow Lab', te: 'ఇంటరాక్టివ్ నగదు ప్రవాహ ప్రయోగశాల' })}</h4>
        <p className="text-[10px] text-navy-500">{t({ en: 'Adjust Priya’s monthly student cash flow and inspect her net surplus or deficit.', te: 'నెలవారీ ఆదాయం, అవసరాలు, కోరికలను మార్చి మిగులు లేదా లోటును పరిశీలించండి.' })}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="rounded-xl bg-white p-2.5 text-[10px] font-semibold text-navy-600 shadow-sm">
          {t({ en: 'Total Income', te: 'మొత్తం ఆదాయం' })}: <b className="text-teal-700">{formatINR(income)}</b>
          <input type="range" min="3000" max="10000" step="500" value={income} onChange={e => setIncome(Number(e.target.value))} className="mt-2 w-full accent-teal-500" />
        </label>
        <label className="rounded-xl bg-white p-2.5 text-[10px] font-semibold text-navy-600 shadow-sm">
          {t({ en: 'Essential Needs', te: 'అవసరాలు' })}: <b className="text-navy-700">{formatINR(needs)}</b>
          <input type="range" min="1500" max="6000" step="200" value={needs} onChange={e => setNeeds(Number(e.target.value))} className="mt-2 w-full accent-navy-500" />
        </label>
        <label className="rounded-xl bg-white p-2.5 text-[10px] font-semibold text-navy-600 shadow-sm">
          {t({ en: 'Discretionary Wants', te: 'కోరికలు' })}: <b className="text-coral-600">{formatINR(wants)}</b>
          <input type="range" min="500" max="4000" step="100" value={wants} onChange={e => setWants(Number(e.target.value))} className="mt-2 w-full accent-coral-500" />
        </label>
      </div>
      <div className={`mt-3 rounded-xl p-3 text-center ${isSurplus ? 'bg-teal-100 text-teal-900 border border-teal-200' : 'bg-coral-100 text-coral-900 border border-coral-200'}`}>
        <span className="text-[10px] font-bold uppercase tracking-wider">{isSurplus ? t({ en: 'Monthly Surplus (Savings)', te: 'నెలవారీ మిగులు (పొదుపు)' }) : t({ en: 'Monthly Deficit (Debt Risk)', te: 'నెలవారీ లోటు (అప్పు ప్రమాదం)' })}</span>
        <b className="block text-2xl font-black">{formatINR(Math.abs(netBalance))}</b>
        <p className="mt-1 text-[10px]">{isSurplus ? t({ en: `Great! You are retaining ${Math.round((netBalance / income) * 100)}% of your earnings to build emergency cushion and future goals.`, te: `అద్భుతం! మీరు సంపాదనలో ${Math.round((netBalance / income) * 100)}% ను పొదుపు చేస్తున్నారు.` }) : t({ en: 'Expenses exceed earnings! Reduce discretionary wants to avoid borrowing.', te: 'ఖర్చులు ఆదాయాన్ని మించాయి! కోరికలను తగ్గించుకోండి.' })}</p>
      </div>
    </div>
  );
}

function SmartGoalMilestoneLab() {
  const t = useT();
  const [target, setTarget] = useState(36000);
  const [months, setMonths] = useState(12);
  const monthly = Math.ceil(target / months);

  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4">
      <div className="mb-3">
        <h4 className="text-sm font-bold text-navy-700">{t({ en: 'SMART Milestone Target Lab', te: 'లక్ష్యాల మైలురాయి ప్రయోగశాల' })}</h4>
        <p className="text-[10px] text-navy-500">{t({ en: 'Calculate exact monthly savings required for any student goal.', te: 'మీ విద్యార్థి లక్ష్యానికి అవసరమైన ఖచ్చితమైన నెలవారీ పొదుపును లెక్కించండి.' })}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="rounded-xl bg-white p-3 text-[10px] font-semibold text-navy-600 shadow-sm">
          {t({ en: 'Goal Target Amount', te: 'లక్ష్యం మొత్తం' })}: <b className="text-teal-700">{formatINR(target)}</b>
          <input type="range" min="6000" max="60000" step="3000" value={target} onChange={e => setTarget(Number(e.target.value))} className="mt-2 w-full accent-teal-500" />
        </label>
        <label className="rounded-xl bg-white p-3 text-[10px] font-semibold text-navy-600 shadow-sm">
          {t({ en: 'Timeline Deadline', te: 'సమయ గడువు' })}: <b className="text-sky-700">{months} {t({ en: 'Months', te: 'నెలలు' })}</b>
          <input type="range" min="3" max="24" step="1" value={months} onChange={e => setMonths(Number(e.target.value))} className="mt-2 w-full accent-sky-500" />
        </label>
      </div>
      <div className="mt-3 rounded-xl bg-navy-700 p-3 text-center text-white">
        <span className="text-[10px] text-teal-200">{t({ en: 'Required Monthly Allocation', te: 'నెలకు కేటాయించాల్సిన మొత్తం' })}</span>
        <b className="block text-2xl font-black text-white">{formatINR(monthly)} / mo</b>
        <span className="text-[10px] text-navy-200">{formatINR(target)} ÷ {months} {t({ en: 'months', te: 'నెలలు' })} · {t({ en: 'Consistent discipline beats sudden pressure!', te: 'నిరంతర క్రమశిక్షణ ఒత్తిడిని నివారిస్తుంది!' })}</span>
      </div>
    </div>
  );
}

function EmergencyCushionLab() {
  const t = useT();
  const [monthlyExpense, setMonthlyExpense] = useState(15000);
  const [cushionMonths, setCushionMonths] = useState(4);
  const totalReserve = monthlyExpense * cushionMonths;

  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
      <div className="mb-3">
        <h4 className="text-sm font-bold text-navy-700">{t({ en: 'Emergency Runway Simulator', te: 'అత్యవసర రక్షణ రన్‌వే సిమ్యులేటర్' })}</h4>
        <p className="text-[10px] text-navy-500">{t({ en: 'Calculate 3 to 6 months of essential living expenses for safe emergency liquidity.', te: 'కనీస జీవన ఖర్చుల ఆధారంగా 3 నుండి 6 నెలల రక్షణ నిధిని లెక్కించండి.' })}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="rounded-xl bg-white p-3 text-[10px] font-semibold text-navy-600 shadow-sm">
          {t({ en: 'Essential Monthly Expenses', te: 'నెలవారీ కనీస ఖర్చులు' })}: <b className="text-emerald-700">{formatINR(monthlyExpense)}</b>
          <input type="range" min="5000" max="30000" step="1000" value={monthlyExpense} onChange={e => setMonthlyExpense(Number(e.target.value))} className="mt-2 w-full accent-emerald-500" />
        </label>
        <label className="rounded-xl bg-white p-3 text-[10px] font-semibold text-navy-600 shadow-sm">
          {t({ en: 'Runway Cushion Target', te: 'రక్షణ నిధి వ్యవధి' })}: <b className="text-teal-700">{cushionMonths} {t({ en: 'Months', te: 'నెలలు' })}</b>
          <input type="range" min="3" max="6" step="1" value={cushionMonths} onChange={e => setCushionMonths(Number(e.target.value))} className="mt-2 w-full accent-teal-500" />
        </label>
      </div>
      <div className="mt-3 rounded-xl bg-white p-3 border border-emerald-200">
        <div className="flex items-center justify-between text-xs font-bold text-navy-700">
          <span>{t({ en: 'Target Safety Fund', te: 'లక్ష్య రక్షణ నిధి' })}</span>
          <span className="text-lg font-black text-emerald-700">{formatINR(totalReserve)}</span>
        </div>
        <p className="mt-1 text-[10px] text-navy-500">{t({ en: 'Keep this capital in a Savings Bank Account or Liquid Fund with immediate 24/7 ATM/UPI access. Never lock it in volatile stocks or 5-year illiquid schemes.', te: 'ఈ నిధిని సురక్షితమైన సేవింగ్స్ ఖాతా లేదా లిక్విడ్ ఫండ్‌లో ఉంచండి. మార్కెట్ ఒడుదొడుకుల్లో పెట్టవద్దు.' })}</p>
      </div>
    </div>
  );
}

function InflationGrowthLab() {
  const t = useT();
  const [years, setYears] = useState(10);
  const principal = 10000;
  const inflationRate = 0.06;
  const cashRealValue = Math.round(principal / Math.pow(1 + inflationRate, years));
  const fdRealValue = Math.round(principal * Math.pow(1.01, years));
  const equityRealValue = Math.round(principal * Math.pow(1.06, years));
  const maxVal = Math.max(cashRealValue, fdRealValue, equityRealValue);

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
      <div className="mb-3">
        <h4 className="text-sm font-bold text-navy-700">{t({ en: 'Inflation Gap & Real Growth Explorer', te: 'ద్రవ్యోల్బణం మరియు అసలైన వృద్ధి' })}</h4>
        <p className="text-[10px] text-navy-500">{t({ en: 'See how ₹10,000 real purchasing power changes over time across Cash, FD, and Equity (assuming 6% inflation).', te: '6% ద్రవ్యోల్బణం ఉన్నప్పుడు ₹10,000 కొనుగోలు శక్తి ఎలా మారుతుందో చూడండి.' })}</p>
      </div>
      <label className="block text-xs font-semibold text-navy-600">
        {t({ en: 'Time Horizon', te: 'కాల వ్యవధి' })}: <b className="text-amber-700">{years} {t({ en: 'Years', te: 'సంవత్సరాలు' })}</b>
        <input type="range" min="3" max="20" step="1" value={years} onChange={e => setYears(Number(e.target.value))} className="mt-2 w-full accent-amber-500" />
      </label>
      <div className="mt-3 space-y-2">
        <div>
          <div className="flex justify-between text-[10px] font-semibold text-navy-600">
            <span>{t({ en: 'Paper Cash at Home (0% Nominal)', te: 'ఇంట్లో ఉంచిన నగదు' })}</span>
            <b className="text-coral-600">{formatINR(cashRealValue)} {t({ en: 'Real Value', te: 'నిజ విలువ' })}</b>
          </div>
          <div className="mt-1 h-3 rounded-full bg-white overflow-hidden">
            <div className="h-full bg-coral-400 transition-all duration-300" style={{ width: `${(cashRealValue / maxVal) * 100}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-semibold text-navy-600">
            <span>{t({ en: 'Fixed Deposit (7% Nominal)', te: 'ఫిక్స్‌డ్ డిపాజిట్' })}</span>
            <b className="text-sky-700">{formatINR(fdRealValue)} {t({ en: 'Real Value', te: 'నిజ విలువ' })}</b>
          </div>
          <div className="mt-1 h-3 rounded-full bg-white overflow-hidden">
            <div className="h-full bg-sky-400 transition-all duration-300" style={{ width: `${(fdRealValue / maxVal) * 100}%` }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-semibold text-navy-600">
            <span>{t({ en: 'Broad Index Equity (12% Nominal)', te: 'ఇండెక్స్ ఈక్విటీ' })}</span>
            <b className="text-teal-700">{formatINR(equityRealValue)} {t({ en: 'Real Value', te: 'నిజ విలువ' })}</b>
          </div>
          <div className="mt-1 h-3 rounded-full bg-white overflow-hidden">
            <div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${(equityRealValue / maxVal) * 100}%` }} />
          </div>
        </div>
      </div>
      <p className="mt-2 text-[10px] text-navy-500">{t({ en: 'Illustrative real values discounted at 6% inflation. Equity carries short-term volatility risk and does not guarantee fixed returns.', te: 'ద్రవ్యోల్బణం మినహాయించిన ఉదాహరణ విలువలు. ఈక్విటీలో మార్కెట్ రిస్క్ ఉంటుంది.' })}</p>
    </div>
  );
}

function UpiSafetyCheckpointLab() {
  const t = useT();
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [verdict, setVerdict] = useState<string | null>(null);

  const scenarios = [
    {
      prompt: {
        en: 'Buyer on OLX: "I sent you a QR code on WhatsApp. Scan it and enter your PIN to claim the ₹2,000 for your old textbook!"',
        te: 'OLX కొనుగోలుదారు: "వాట్సాప్‌లో QR కోడ్ పంపాను. స్కాన్ చేసి పిన్ నొక్కి ₹2,000 తీసుకోండి!"',
      },
      correctAction: 'reject',
      explanation: {
        en: '🛡️ Correct! NEVER scan a QR code or enter your PIN to receive money. Receiving money is automatic via bank credit.',
        te: '🛡️ సరైన నిర్ణయం! డబ్బు తీసుకోవడానికి ఎప్పుడూ QR స్కాన్ చేయకూడదు లేదా పిన్ ఎంటర్ చేయకూడదు.',
      },
    },
    {
      prompt: {
        en: 'College Canteen: You are paying ₹80 for your lunch meal using Google Pay by scanning the merchant QR at the counter.',
        te: 'కాలేజ్ క్యాంటీన్: భోజనం కోసం ₹80 చెల్లించడానికి కౌంటర్‌లోని QR స్కాన్ చేసి పిన్ ఎంటర్ చేస్తున్నారు.',
      },
      correctAction: 'enter_pin',
      explanation: {
        en: '✅ Correct! Entering your PIN is required when YOU are initiating a payment to send money out.',
        te: '✅ సరైనది! మీరు ఇతరులకు డబ్బు పంపుతున్నప్పుడు మాత్రమే పిన్ ఎంటర్ చేయాలి.',
      },
    },
    {
      prompt: {
        en: 'SMS alert: "You won ₹50,000 reward! Install AnyDesk app and click this link to verify your student account."',
        te: 'SMS: "మీకు ₹50,000 గిఫ్ట్ వచ్చింది! AnyDesk యాప్ ఇన్‌స్టాల్ చేసి వెరిఫై చేసుకోండి."',
      },
      correctAction: 'reject',
      explanation: {
        en: '🛡️ Correct! Installing remote screen apps allows fraudsters to see your screen and steal credentials. Reject and block immediately!',
        te: '🛡️ సరైన నిర్ణయం! స్క్రీన్ షేరింగ్ యాప్‌లను ఎప్పుడూ డౌన్‌లోడ్ చేయవద్దు.',
      },
    },
  ];

  const current = scenarios[scenarioIdx];

  const handleAction = (action: 'enter_pin' | 'reject') => {
    if (action === current.correctAction) {
      setVerdict('correct');
    } else {
      setVerdict('wrong');
    }
  };

  const nextScenario = () => {
    setVerdict(null);
    setScenarioIdx((scenarioIdx + 1) % scenarios.length);
  };

  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4">
      <div className="mb-3">
        <h4 className="text-sm font-bold text-navy-700">{t({ en: 'UPI PIN Defense Checkpoint', te: 'UPI పిన్ రక్షణ చెక్‌పాయింట్' })}</h4>
        <p className="text-[10px] text-navy-500">{t({ en: 'Test your reflexes against real-world payment scenarios.', te: 'నిజజీవిత పేమెంట్ పరిస్థితుల్లో సరైన నిర్ణయం తీసుకోండి.' })}</p>
      </div>
      <div className="rounded-xl bg-white p-3 border border-navy-100 shadow-sm">
        <span className="text-[9px] font-bold uppercase tracking-wider text-navy-400">{t({ en: `Scenario ${scenarioIdx + 1} of ${scenarios.length}`, te: `${scenarios.length}లో పరిస్థితి ${scenarioIdx + 1}` })}</span>
        <p className="mt-1 text-xs font-semibold text-navy-700">{t(current.prompt)}</p>
      </div>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => handleAction('enter_pin')} className="btn-secondary flex-1 py-2 text-xs">{t({ en: 'Enter PIN ⚠️', te: 'పిన్ ఎంటర్ చేయండి' })}</button>
        <button type="button" onClick={() => handleAction('reject')} className="btn-primary flex-1 py-2 text-xs bg-emerald-600 hover:bg-emerald-700">{t({ en: 'Reject & Shield 🛡️', te: 'తిరస్కరించండి & బ్లాక్' })}</button>
      </div>
      {verdict && (
        <div className={`mt-3 rounded-xl p-3 text-xs font-semibold ${verdict === 'correct' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-red-100 text-red-900 border border-red-300'}`}>
          <p>{verdict === 'correct' ? t(current.explanation) : t({ en: '❌ Danger! That action would give the fraudster access or drain your funds. Remember: Never enter PIN to receive money!', te: '❌ ప్రమాదం! డబ్బు తీసుకోవడానికి ఎప్పుడూ పిన్ ఎంటర్ చేయవద్దు!' })}</p>
          <button type="button" onClick={nextScenario} className="btn-ghost mt-2 text-[10px] font-bold text-navy-700">{t({ en: 'Try Next Scenario →', te: 'తదుపరి ప్రశ్న →' })}</button>
        </div>
      )}
    </div>
  );
}

function GoldenHourProtocolLab() {
  const t = useT();
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps: LocalCopy[] = [
    { en: '1. Sever All Contact & Document UTR Reference Number', te: '1. సంభాషణ ఆపి 12-అంకెల UTR నంబర్ భద్రపరచండి' },
    { en: '2. Freeze Cards & Block UPI in Bank App', te: '2. బ్యాంక్ యాప్‌లో కార్డులు మరియు UPI ని బ్లాక్ చేయండి' },
    { en: '3. Dial 1930 National Cyber Helpline (Within 60 Mins)', te: '3. 60 నిమిషాల్లోపు 1930 హెల్ప్‌లైన్‌కు కాల్ చేయండి' },
    { en: '4. File Formal Complaint on cybercrime.gov.in', te: '4. cybercrime.gov.in లో అధికారిక ఫిర్యాదు నమోదు చేయండి' },
  ];

  const toggleStep = (idx: number) => {
    if (completedSteps.includes(idx)) {
      setCompletedSteps(completedSteps.filter(s => s !== idx));
    } else {
      setCompletedSteps([...completedSteps, idx]);
    }
  };

  const allComplete = completedSteps.length === steps.length;

  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-navy-700">{t({ en: 'The 60-Minute Golden Hour Protocol', te: '60 నిమిషాల గోల్డెన్ అవర్ ప్రోటోకాల్' })}</h4>
          <p className="text-[10px] text-navy-500">{t({ en: 'Execute the mandatory 4-step emergency sequence to stop stolen fund withdrawal.', te: 'మోసపూరిత నగదు విత్‌డ్రా కాకుండా 4 అత్యవసర దశలను పూర్తి చేయండి.' })}</p>
        </div>
        <span className="rounded-full bg-navy-700 px-2.5 py-1 text-xs font-bold text-white">{completedSteps.length} / 4</span>
      </div>
      <div className="space-y-2">
        {steps.map((step, idx) => {
          const checked = completedSteps.includes(idx);
          return (
            <button
              type="button"
              key={idx}
              onClick={() => toggleStep(idx)}
              className={`w-full flex items-center justify-between rounded-xl border p-2.5 text-left text-xs font-semibold transition-all ${checked ? 'border-teal-300 bg-teal-50 text-teal-800' : 'border-white bg-white text-navy-600 hover:border-teal-200'}`}
            >
              <span>{t(step)}</span>
              <span className={`h-5 w-5 rounded-md flex items-center justify-center text-xs ${checked ? 'bg-teal-500 text-white' : 'border border-navy-300 bg-white'}`}>{checked ? '✓' : ''}</span>
            </button>
          );
        })}
      </div>
      {allComplete && (
        <div className="mt-3 rounded-xl bg-emerald-100 border border-emerald-300 p-3 text-center text-xs font-bold text-emerald-900">
          {t({ en: '🛡️ Emergency Protocol Complete! Inter-bank lien freeze request dispatched to National Cyber Crime portal.', te: '🛡️ అత్యవసర ప్రోటోకాల్ పూర్తయింది! మోసపూరిత ఖాతాను ఫ్రీజ్ చేయడానికి చర్యలు ప్రారంభమయ్యాయి.' })}
        </div>
      )}
    </div>
  );
}

export function LessonMiniLab({ lessonId }: { lessonId: string }) {
  if (!miniLabLessons.has(lessonId)) return null;
  switch (lessonId) {
    case 'businesses-and-shares': return <ShareOwnershipLab />;
    case 'stock-market-mechanics': return <OrderMatchLab />;
    case 'stock-market-ecosystem': return <TradeRouteLab />;
    case 'mutual-fund-structure': return <NavLabMini />;
    case 'fund-types': return <FundTypeLab />;
    case 'active-vs-passive': return <FeeDragLab />;
    case 'money-foundations': return <CashFlowBalanceLab />;
    case 'savings-goals': return <SmartGoalMilestoneLab />;
    case 'saving-basics': return <EmergencyCushionLab />;
    case 'saving-vs-investing': return <InflationGrowthLab />;
    case 'digital-safety': return <UpiSafetyCheckpointLab />;
    case 'incident-steps': return <GoldenHourProtocolLab />;
    default: return null;
  }
}
