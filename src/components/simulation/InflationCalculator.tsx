import { useState } from 'react';
import { useT } from '@/context/AppContext';
import { purchasingPowerEquivalent, futureNominalPrice, formatINR } from '@/lib/finance/formulas';
import { ShoppingBag, TrendingDown, Info } from 'lucide-react';

export function InflationCalculator() {
  const t = useT();
  const [futureAmount, setFutureAmount] = useState<number>(100000);
  const [inflationRate, setInflationRate] = useState<number>(6); // 6% constant
  const [years, setYears] = useState<number>(10);

  const inflDecimal = inflationRate / 100;
  const purchasingPower = purchasingPowerEquivalent(futureAmount, inflDecimal, years);
  const lossPercentage = ((1 - purchasingPower / futureAmount) * 100).toFixed(1);

  // Example basket item
  const tiffinToday = 50;
  const tiffinFuture = futureNominalPrice(tiffinToday, inflDecimal, years);

  return (
    <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
      <div className="pb-4 border-b border-navy-100">
        <span className="badge badge-coral">{t({ en: 'Purchasing Power Lab', te: 'కొనుగోలు శక్తి ల్యాబ్' })}</span>
        <h3 className="text-2xl font-bold text-navy-600 font-display mt-1">
          {t({ en: 'Inflation & Purchasing Power Visualizer', te: 'ద్రవ్యోల్బణం & కొనుగోలు శక్తి విజువలైజర్' })}
        </h3>
        <p className="text-sm text-navy-400 mt-0.5">
          {t({
            en: 'Discover how rising prices diminish what your cash can actually buy over the years.',
            te: 'ధరల పెరుగుదల మీ నగదుతో కొనుగోలు చేయగల వస్తువుల పరిమాణాన్ని ఎలా తగ్గిస్తుందో చూడండి.',
          })}
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Future Rupee Sum', te: 'భవిష్యత్ నగదు మొత్తం' })}
          </label>
          <div className="text-xl font-bold text-navy-600 mb-2">{formatINR(futureAmount)}</div>
          <input
            type="range"
            min={10000}
            max={500000}
            step={10000}
            value={futureAmount}
            onChange={e => setFutureAmount(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>

        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Assumed Inflation Rate (%)', te: 'ఊహాత్మక ద్రవ్యోల్బణ రేటు (%)' })}
          </label>
          <div className="text-xl font-bold text-coral-500 mb-2">{inflationRate}% p.a.</div>
          <input
            type="range"
            min={2}
            max={12}
            step={0.5}
            value={inflationRate}
            onChange={e => setInflationRate(Number(e.target.value))}
            className="w-full accent-coral-400 cursor-pointer"
          />
        </div>

        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Years into Future', te: 'ఎన్ని సంవత్సరాల తర్వాత' })}
          </label>
          <div className="text-xl font-bold text-navy-600 mb-2">{years} {t({ en: 'Years', te: 'సంవత్సరాలు' })}</div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={years}
            onChange={e => setYears(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Calculation Output Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="p-6 rounded-2xl bg-coral-50 border border-coral-200">
          <div className="flex items-center gap-2 text-coral-600 font-semibold text-xs uppercase tracking-wider mb-1">
            <TrendingDown size={18} />
            <span>{t({ en: 'Real Purchasing Power in Today’s Terms', te: 'నేటి విలువలో నిజమైన కొనుగోలు శక్తి' })}</span>
          </div>
          <div className="text-3xl font-extrabold text-coral-700 mt-2">
            {formatINR(purchasingPower)}
          </div>
          <p className="text-xs text-coral-600 mt-2 leading-relaxed">
            {t({
              en: `In ${years} years, having ${formatINR(futureAmount)} in cash will only buy what ${formatINR(purchasingPower)} buys today (an erosion of ${lossPercentage}%).`,
              te: `${years} సంవత్సరాల తర్వాత ${formatINR(futureAmount)} నగదు కేవలం నేటి ${formatINR(purchasingPower)} విలువ గల వస్తువులను మాత్రమే కొనగలదు (${lossPercentage}% తరుగుదల).`,
            })}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-cream-50 border border-navy-100">
          <div className="flex items-center gap-2 text-navy-600 font-semibold text-xs uppercase tracking-wider mb-1">
            <ShoppingBag size={18} className="text-teal-500" />
            <span>{t({ en: 'Real-Life Dosa / Tiffin Basket', te: 'రోజువారీ టిఫిన్ బాస్కెట్' })}</span>
          </div>
          <div className="text-lg font-bold text-navy-600 mt-2">
            {t({ en: '₹50 Tiffin today', te: 'నేడు ₹50 టిఫిన్' })} → <span className="text-teal-600">{formatINR(tiffinFuture)}</span>
          </div>
          <p className="text-xs text-navy-400 mt-2 leading-relaxed">
            {t({
              en: `To buy the exact same breakfast in ${years} years, you will need approximately ${formatINR(tiffinFuture)} due to compounding inflation!`,
              te: `${years} ఏళ్ల తర్వాత అదే టిఫిన్ తినడానికి మీరు సుమారు ${formatINR(tiffinFuture)} చెల్లించాలి!`,
            })}
          </p>
        </div>
      </div>

      {/* Mandatory Blueprint Guardrail */}
      <div className="disclaimer flex items-start gap-2">
        <Info size={16} className="text-teal-500 shrink-0 mt-0.5" />
        <span>
          {t({
            en: 'Assumption Notice: This model uses a constant hypothetical inflation rate for educational illustration. Actual historical and future inflation in India varies and is tracked by the Consumer Price Index (CPI) published by the Ministry of Statistics and Programme Implementation.',
            te: 'గమనిక: ఈ మోడల్ విద్యా ప్రయోజనాల కోసం స్థిరమైన ఊహాత్మక ద్రవ్యోల్బణ రేటును ఉపయోగిస్తుంది. భారతదేశంలో వాస్తవ ద్రవ్యోల్బణం మారుతూ ఉంటుంది.',
          })}
        </span>
      </div>
    </div>
  );
}

export default InflationCalculator;
