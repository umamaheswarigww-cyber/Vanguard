import { useState } from 'react';
import { useT } from '@/context/AppContext';
import {
  Wallet, TrendingUp, ShoppingBag, Building,
  Layers, ShieldAlert, Sparkles, BarChart2, FileText, Percent, RefreshCw
} from 'lucide-react';
import clsx from 'clsx';

// Simulators
import { BudgetLab } from '@/components/simulation/BudgetLab';
import { CompoundInterestExplorer } from '@/components/simulation/CompoundInterestExplorer';
import { InflationCalculator } from '@/components/simulation/InflationCalculator';
import { FDCalculator } from '@/components/simulation/FDCalculator';
import { RDCalculator } from '@/components/simulation/RDCalculator';
import { EnhancedSIPCalculator } from '@/components/simulation/EnhancedSIPCalculator';
import { NAVLab } from '@/components/simulation/NAVLab';
import { ScamDetectiveSim } from '@/components/simulation/ScamDetectiveSim';
import { MarketIndicesLab } from '@/components/simulation/MarketIndicesLab';
import { CompanyFinancialsLab } from '@/components/simulation/CompanyFinancialsLab';
import { FinancialRatiosLab } from '@/components/simulation/FinancialRatiosLab';

const LABS = [
  {
    id: 'budget',
    name: { en: 'Budget Lab', te: 'బడ్జెట్ ల్యాబ్' },
    desc: { en: 'Allocate fictional ₹5,000 across categories and survive surprise expenses.', te: 'కల్పిత ₹5,000 ను కేటాయించండి మరియు ఆకస్మిక ఖర్చులను ఎదుర్కోండి.' },
    icon: Wallet,
    color: 'teal',
  },
  {
    id: 'compound',
    name: { en: 'Compound Interest Explorer', te: 'చక్రవడ్డీ ఎక్స్‌ప్లోరర్' },
    desc: { en: 'Watch ₹10,000 grow exponentially vs simple interest over 20 years.', te: '20 ఏళ్లలో సాధారణ వడ్డీ vs చక్రవడ్డీ పెరుగుదలను పరిశీలించండి.' },
    icon: TrendingUp,
    color: 'navy',
  },
  {
    id: 'inflation',
    name: { en: 'Inflation Visualizer', te: 'ద్రవ్యోల్బణ విజువలైజర్' },
    desc: { en: 'See how ₹1,00,000 shrinks to ₹55,839 in real purchasing power over 10 years.', te: 'నిజమైన కొనుగోలు శక్తి ఎలా తగ్గుతుందో చూడండి.' },
    icon: ShoppingBag,
    color: 'coral',
  },
  {
    id: 'fd',
    name: { en: 'Fixed Deposit (FD)', te: 'FD కాలిక్యులేటర్' },
    desc: { en: 'Quarterly compounding model on bank deposits with DICGC safety context.', te: 'త్రైమాసిక చక్రవడ్డీతో బ్యాంక్ డిపాజిట్ లెక్కలు.' },
    icon: Building,
    color: 'teal',
  },
  {
    id: 'rd',
    name: { en: 'Recurring Deposit (RD)', te: 'RD కాలిక్యులేటర్' },
    desc: { en: 'Monthly instalment compounding for disciplined short-term savings.', te: 'నెలవారీ పొదుపు కోసం రికరింగ్ డిపాజిట్ సిమ్యులేటర్.' },
    icon: RefreshCw,
    color: 'teal',
  },
  {
    id: 'sip',
    name: { en: 'SIP Lab (4 Modes)', te: 'SIP ల్యాబ్ (4 మోడ్స్)' },
    desc: { en: 'Basic SIP, Monthly NAV Table, Step-Up SIP, and Lump-Sum vs SIP comparison.', te: 'నెలవారీ NAV టేబుల్ మరియు స్టెప్-అప్ SIP లతో కూడిన ల్యాబ్.' },
    icon: Layers,
    color: 'coral',
  },
  {
    id: 'nav',
    name: { en: 'NAV Laboratory', te: 'NAV ప్రయోగశాల' },
    desc: { en: 'Change underlying stock prices and recalculate Net Asset Value per unit.', te: 'షేర్ల ధరలు మార్చి NAV లెక్కించండి.' },
    icon: Sparkles,
    color: 'navy',
  },
  {
    id: 'indices',
    name: { en: 'Market Indices Lab', te: 'మార్కెట్ సూచీల ల్యాబ్' },
    desc: { en: 'Simulate free-float market-cap weighted index movements like Nifty & Sensex.', te: 'నిఫ్టీ మరియు సెన్సెక్స్ తరహాలో ఫ్రీ-ఫ్లోట్ వెయిటెడ్ ఇండెక్స్ సిమ్యులేషన్.' },
    icon: BarChart2,
    color: 'coral',
  },
  {
    id: 'financials',
    name: { en: 'Company Financials Lab', te: 'కంపెనీ ఆర్థిక ల్యాబ్' },
    desc: { en: 'Interactive P&L Statement waterfall and Double-Entry Balance Sheet.', te: 'ఇంటరాక్టివ్ లాభనష్టాల నివేదిక మరియు బ్యాలెన్స్ షీట్.' },
    icon: FileText,
    color: 'navy',
  },
  {
    id: 'ratios',
    name: { en: 'Financial Ratios Lab', te: 'ఆర్థిక నిష్పత్తుల ల్యాబ్' },
    desc: { en: 'Live EPS, P/E, P/B, ROE, and Dividend Yield calculators with sector caveats.', te: 'లైవ్ EPS, P/E, P/B, ROE కాలిక్యులేటర్లు.' },
    icon: Percent,
    color: 'teal',
  },
  {
    id: 'scam',
    name: { en: 'Scam Detective Arena', te: 'స్కామ్ డిటెక్టివ్' },
    desc: { en: 'Inspect real-world phishing and investment scam scenarios safely.', te: 'మోసపూరిత మెసేజ్‌లను పరిశీలించి జాగ్రత్తలు తీసుకోండి.' },
    icon: ShieldAlert,
    color: 'coral',
  },
];

export function MoneyLabPage() {
  const t = useT();
  const [activeLabId, setActiveLabId] = useState<string>('budget');

  const activeLab = LABS.find(l => l.id === activeLabId);

  const renderActiveLab = () => {
    switch (activeLabId) {
      case 'budget':
        return <BudgetLab />;
      case 'compound':
        return <CompoundInterestExplorer />;
      case 'inflation':
        return <InflationCalculator />;
      case 'fd':
        return <FDCalculator />;
      case 'rd':
        return <RDCalculator />;
      case 'sip':
        return <EnhancedSIPCalculator />;
      case 'nav':
        return <NAVLab />;
      case 'indices':
        return <MarketIndicesLab />;
      case 'financials':
        return <CompanyFinancialsLab />;
      case 'ratios':
        return <FinancialRatiosLab />;
      case 'scam':
        return <ScamDetectiveSim />;
      default:
        return <BudgetLab />;
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <section className="bg-hero text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="badge badge-teal mb-2">{t({ en: 'Interactive Sandboxes (11 Simulators)', te: '11 ఇంటరాక్టివ్ సిమ్యులేటర్లు' })}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            {t({ en: 'Money Lab — Safe Hands-On Learning', te: 'మనీ ల్యాబ్ — సురక్షిత ప్రయోగాలు' })}
          </h1>
          <p className="text-navy-100 text-sm mt-2 max-w-xl">
            {t({
              en: 'All simulations use fictional rupee amounts and transparent mathematical formulas. Zero real money, zero financial risk — pure education.',
              te: 'అన్ని సిమ్యులేషన్‌లు కల్పిత రూపాయలను మరియు పారదర్శక గణిత నమూనాలను ఉపయోగిస్తాయి. ఎలాంటి ఆర్థిక రిస్క్ లేదు — పూర్తి విద్యా ప్రయోజనం మాత్రమే.',
            })}
          </p>
        </div>
      </section>

      {/* Lab Tabs / Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {LABS.map(lab => {
            const Icon = lab.icon;
            const isActive = lab.id === activeLabId;

            return (
              <button
                key={lab.id}
                onClick={() => setActiveLabId(lab.id)}
                className={clsx(
                  'flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border shrink-0',
                  isActive
                    ? 'bg-navy-600 text-white border-navy-600 shadow-sm'
                    : 'bg-white text-navy-500 border-navy-100 hover:border-teal-300 hover:bg-cream-50'
                )}
              >
                <Icon size={16} className={isActive ? 'text-teal-300' : 'text-teal-500'} />
                <span>{t(lab.name)}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Lab Header Description */}
        {activeLab && (
          <div className="mt-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <h2 className="font-bold text-navy-600 text-base">{t(activeLab.name)}</h2>
              <p className="text-gray-500 text-xs mt-0.5">{t(activeLab.desc)}</p>
            </div>
          </div>
        )}

        {/* Selected Lab Render */}
        <div className="mt-6 animate-fade-in">
          {renderActiveLab()}
        </div>
      </section>
    </div>
  );
}
