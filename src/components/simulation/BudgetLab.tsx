import { useState } from 'react';
import { useT } from '@/context/AppContext';
import { formatINR, budgetBalance } from '@/lib/finance/formulas';
import { AlertCircle, CheckCircle, RefreshCw, Zap, ShieldAlert, Sparkles } from 'lucide-react';
import clsx from 'clsx';

interface Category {
  id: string;
  name: { en: string; te: string };
  amount: number;
  isEssential: boolean;
  min: number;
  max: number;
  step: number;
}

const INITIAL_CATEGORIES: Category[] = [
  { id: 'study', name: { en: 'Entrance Exam Prep & Books', te: 'ఎంట్రన్స్ పరీక్ష పుస్తకాలు' }, amount: 1500, isEssential: true, min: 0, max: 3000, step: 100 },
  { id: 'travel', name: { en: 'Bus Pass / Metro Commute', te: 'బస్సు పాస్ / మెట్రో ప్రయాణం' }, amount: 800, isEssential: true, min: 0, max: 2000, step: 50 },
  { id: 'mobile', name: { en: 'Phone Recharge & Data', te: 'ఫోన్ రీఛార్జ్ & డేటా' }, amount: 300, isEssential: true, min: 0, max: 1000, step: 50 },
  { id: 'fun', name: { en: 'Cafe Outing with Friends', te: 'స్నేహితులతో బయట తినడం' }, amount: 600, isEssential: false, min: 0, max: 2000, step: 50 },
  { id: 'shopping', name: { en: 'College Backpack / Clothes', te: 'కొత్త బ్యాగ్ / దుస్తులు' }, amount: 1000, isEssential: false, min: 0, max: 2500, step: 100 },
  { id: 'savings', name: { en: 'Emergency Savings Cushion', te: 'ఎమర్జెన్సీ సేవింగ్స్' }, amount: 800, isEssential: true, min: 0, max: 3000, step: 100 },
];

const SURPRISE_EVENTS = [
  {
    id: 'med',
    title: { en: 'Emergency Dental Visit!', te: 'ఆకస్మిక దంత వైద్య ఖర్చు!' },
    desc: { en: 'You got a sudden toothache and needed root-canal consultation. Urgent bill: ₹800!', te: 'తీవ్రమైన పంటి నొప్పి వచ్చింది. డాక్టర్ ఫీజు మరియు మందుల బిల్లు: ₹800!' },
    amount: 800,
  },
  {
    id: 'phone',
    title: { en: 'Broken Phone Display!', te: 'ఫోన్ స్క్రీన్ పగిలింది!' },
    desc: { en: 'Your phone slipped and cracked its screen. Urgent repair needed for online classes: ₹1,200!', te: 'ఆన్‌లైన్ క్లాసులు వినడానికి స్క్రీన్ రిపేర్ తప్పనిసరి: ₹1,200!' },
    amount: 1200,
  },
];

export function BudgetLab() {
  const t = useT();
  const [income, setIncome] = useState<number>(5000);
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [surpriseActive, setSurpriseActive] = useState<boolean>(false);
  const [currentSurprise, setCurrentSurprise] = useState<typeof SURPRISE_EVENTS[0] | null>(null);
  const [resolved, setResolved] = useState<boolean>(false);

  const totalAllocated = categories.reduce((sum, c) => sum + c.amount, 0) + (surpriseActive && !resolved ? (currentSurprise?.amount || 0) : 0);
  const remaining = income - totalAllocated;
  const isDeficit = remaining < 0;

  const handleSliderChange = (id: string, val: number) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, amount: val } : c));
  };

  const triggerSurprise = () => {
    const randomEvent = SURPRISE_EVENTS[Math.floor(Math.random() * SURPRISE_EVENTS.length)];
    setCurrentSurprise(randomEvent);
    setSurpriseActive(true);
    setResolved(false);
  };

  const resolveSurprise = () => {
    if (remaining >= 0) {
      setResolved(true);
    }
  };

  const resetAll = () => {
    setCategories(INITIAL_CATEGORIES);
    setIncome(5000);
    setSurpriseActive(false);
    setCurrentSurprise(null);
    setResolved(false);
  };

  return (
    <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-navy-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="badge badge-teal">{t({ en: 'Interactive Lab', te: 'ఇంటరాక్టివ్ ల్యాబ్' })}</span>
            <span className="text-xs text-navy-400">{t({ en: 'Fictional Rupees', te: 'కల్పిత రూపాయలు' })}</span>
          </div>
          <h3 className="text-2xl font-bold text-navy-600 font-display mt-1">
            {t({ en: 'Priya’s Monthly Budget Lab', te: 'ప్రియ నెలవారీ బడ్జెట్ ల్యాబ్' })}
          </h3>
        </div>

        {/* Total Income Selector */}
        <div className="flex items-center gap-3 bg-navy-50 p-2.5 rounded-xl border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase tracking-wide">
            {t({ en: 'Total Income:', te: 'మొత్తం ఆదాయం:' })}
          </label>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIncome(prev => Math.max(3000, prev - 500))}
              className="w-7 h-7 rounded-lg bg-white border border-navy-200 text-navy-600 hover:bg-teal-50 font-bold"
              aria-label="Decrease income"
            >
              -
            </button>
            <span className="font-bold text-teal-600 px-1">{formatINR(income)}</span>
            <button
              onClick={() => setIncome(prev => Math.min(15000, prev + 500))}
              className="w-7 h-7 rounded-lg bg-white border border-navy-200 text-navy-600 hover:bg-teal-50 font-bold"
              aria-label="Increase income"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Real-time Status Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-navy-50 border border-navy-100">
          <span className="text-xs text-navy-400 block font-medium uppercase tracking-wider">{t({ en: 'Total Income', te: 'మొత్తం ఆదాయం' })}</span>
          <span className="text-2xl font-bold text-navy-600">{formatINR(income)}</span>
        </div>

        <div className="p-4 rounded-xl bg-navy-50 border border-navy-100">
          <span className="text-xs text-navy-400 block font-medium uppercase tracking-wider">{t({ en: 'Allocated Spent', te: 'కేటాయించిన ఖర్చు' })}</span>
          <span className="text-2xl font-bold text-navy-600">{formatINR(totalAllocated)}</span>
        </div>

        <div className={clsx(
          'p-4 rounded-xl border transition-colors',
          isDeficit ? 'bg-coral-50 border-coral-200 text-coral-600' : 'bg-teal-50 border-teal-200 text-teal-600'
        )}>
          <span className="text-xs block font-medium uppercase tracking-wider">
            {isDeficit ? t({ en: 'Budget Deficit (Shortfall)', te: 'బడ్జెట్ లోటు' }) : t({ en: 'Remaining Unallocated', te: 'మిగిలిన మొత్తం' })}
          </span>
          <span className="text-2xl font-bold">{formatINR(Math.abs(remaining))}</span>
        </div>
      </div>

      {/* Surprise Event Alert */}
      {surpriseActive && currentSurprise && (
        <div className={clsx(
          'p-5 rounded-2xl mb-6 border animate-slide-up flex flex-col md:flex-row items-start md:items-center justify-between gap-4',
          resolved ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-coral-50 border-coral-200 text-coral-700'
        )}>
          <div className="flex items-start gap-3">
            <ShieldAlert size={26} className={resolved ? 'text-teal-500' : 'text-coral-500'} />
            <div>
              <h4 className="font-bold text-lg">{t(currentSurprise.title)}</h4>
              <p className="text-sm mt-0.5">{t(currentSurprise.desc)}</p>
              {!resolved && isDeficit && (
                <p className="text-xs font-semibold mt-1 text-coral-600">
                  {t({ en: '👉 Action needed: Adjust your discretionary wants below to cover this expense!', te: '👉 ఈ ఖర్చును సర్దుబాటు చేయడానికి క్రింద మీ కోరికల ఖర్చులను తగ్గించండి!' })}
                </p>
              )}
            </div>
          </div>

          {!resolved && (
            <button
              onClick={resolveSurprise}
              disabled={isDeficit}
              className={clsx(
                'px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all shadow-sm',
                isDeficit
                  ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                  : 'bg-teal-500 text-white hover:bg-teal-600'
              )}
            >
              {isDeficit
                ? t({ en: 'Fix Deficit First', te: 'ముందు లోటు సరిచేయండి' })
                : t({ en: 'Accept & Balance Budget', te: 'బడ్జెట్ సరిచేయండి' })}
            </button>
          )}

          {resolved && (
            <div className="flex items-center gap-1.5 text-sm font-bold text-teal-600">
              <CheckCircle size={18} />
              <span>{t({ en: 'Budget successfully rebalanced without debt!', te: 'అప్పు లేకుండా బడ్జెట్ సమతుల్యమైంది!' })}</span>
            </div>
          )}
        </div>
      )}

      {/* Categories Grid */}
      <div className="space-y-4">
        <h4 className="font-bold text-navy-600 text-sm uppercase tracking-wider flex items-center justify-between">
          <span>{t({ en: 'Category Allocations', te: 'కేటగిరీ కేటాయింపులు' })}</span>
          <span className="text-xs text-navy-400 font-normal">
            {t({ en: 'Slide to adjust spending', te: 'ఖర్చు మార్చడానికి స్లైడర్ జరపండి' })}
          </span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map(cat => (
            <div key={cat.id} className="p-4 rounded-xl border border-navy-100 bg-cream-50/50 hover:border-teal-300 transition-colors">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className={clsx(
                    'w-2 h-2 rounded-full',
                    cat.isEssential ? 'bg-teal-400' : 'bg-coral-400'
                  )} />
                  <span className="text-sm font-semibold text-navy-600">{t(cat.name)}</span>
                </div>
                <span className="text-sm font-bold text-navy-700 bg-white px-2 py-0.5 rounded-md border border-navy-100">
                  {formatINR(cat.amount)}
                </span>
              </div>

              <input
                type="range"
                min={cat.min}
                max={cat.max}
                step={cat.step}
                value={cat.amount}
                onChange={e => handleSliderChange(cat.id, Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
                aria-label={t(cat.name)}
              />

              <div className="flex justify-between items-center text-[10px] text-navy-400 mt-1">
                <span>{cat.isEssential ? t({ en: 'Essential Need', te: 'తప్పనిసరి అవసరం' }) : t({ en: 'Discretionary Want', te: 'కోరిక' })}</span>
                <span>{((cat.amount / income) * 100).toFixed(0)}% of income</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-navy-100">
        <button
          onClick={triggerSurprise}
          disabled={surpriseActive && !resolved}
          className="btn-coral text-sm py-2 px-4 shadow-sm"
        >
          <Zap size={16} />
          {t({ en: 'Simulate Surprise Expense', te: 'ఆకస్మిక ఖర్చు సిమ్యులేట్ చేయండి' })}
        </button>

        <button
          onClick={resetAll}
          className="btn-ghost text-xs text-navy-400 hover:text-navy-600 flex items-center gap-1"
        >
          <RefreshCw size={14} />
          {t({ en: 'Reset to Default', te: 'రీసెట్ చేయండి' })}
        </button>
      </div>
    </div>
  );
}

export default BudgetLab;
