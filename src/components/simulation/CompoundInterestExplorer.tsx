import { useState, useMemo } from 'react';
import { useT } from '@/context/AppContext';
import { compoundInterest, simpleInterest, formatINR } from '@/lib/finance/formulas';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export function CompoundInterestExplorer() {
  const t = useT();
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(10); // percentage
  const [years, setYears] = useState<number>(20);
  const [frequency, setFrequency] = useState<number>(1); // 1 = annual, 4 = quarterly, 12 = monthly

  const rateDecimal = rate / 100;

  const simpleFinal = simpleInterest(principal, rateDecimal, years) + principal;
  const compoundFinal = compoundInterest(principal, rateDecimal, years, frequency);
  const wealthDifference = compoundFinal - simpleFinal;

  // Chart data points for every year
  const chartData = useMemo(() => {
    const data = [];
    const step = Math.max(1, Math.floor(years / 20));
    for (let yr = 0; yr <= years; yr += step) {
      data.push({
        year: `${yr}y`,
        Simple: Math.round(simpleInterest(principal, rateDecimal, yr) + principal),
        Compound: Math.round(compoundInterest(principal, rateDecimal, yr, frequency)),
      });
    }
    return data;
  }, [principal, rateDecimal, years, frequency]);

  return (
    <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
      <div className="pb-4 border-b border-navy-100">
        <span className="badge badge-navy">{t({ en: 'Interactive Laboratory', te: 'ఇంటరాక్టివ్ ల్యాబ్' })}</span>
        <h3 className="text-2xl font-bold text-navy-600 font-display mt-1">
          {t({ en: 'Compound Interest Explorer', te: 'చక్రవడ్డీ ఎక్స్‌ప్లోరర్' })}
        </h3>
        <p className="text-sm text-navy-400 mt-0.5">
          {t({
            en: 'Compare how simple interest stays linear while compound interest snowballs exponentially over time.',
            te: 'సాధారణ వడ్డీ సమాంతరంగా పెరిగితే, చక్రవడ్డీ కాలక్రమేణా ఎంత వేగంగా దూసుకుపోతుందో పరిశీలించండి.',
          })}
        </p>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {/* Principal */}
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Starting Principal', te: 'ప్రారంభ అసలు' })}
          </label>
          <div className="text-lg font-bold text-navy-600 mb-2">{formatINR(principal)}</div>
          <input
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={principal}
            onChange={e => setPrincipal(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>

        {/* Rate */}
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Annual Interest Rate (%)', te: 'వార్షిక వడ్డీ రేటు (%)' })}
          </label>
          <div className="text-lg font-bold text-teal-600 mb-2">{rate}% p.a.</div>
          <input
            type="range"
            min={2}
            max={20}
            step={0.5}
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>

        {/* Years */}
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Time Horizon (Years)', te: 'కాలవ్యవధి (సంవత్సరాలు)' })}
          </label>
          <div className="text-lg font-bold text-coral-500 mb-2">{years} {t({ en: 'Years', te: 'ఏళ్లు' })}</div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={years}
            onChange={e => setYears(Number(e.target.value))}
            className="w-full accent-coral-400 cursor-pointer"
          />
        </div>

        {/* Frequency */}
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Compounding Frequency', te: 'చక్రవడ్డీ ఫ్రీక్వెన్సీ' })}
          </label>
          <select
            value={frequency}
            onChange={e => setFrequency(Number(e.target.value))}
            className="w-full bg-white border border-navy-200 text-sm font-semibold rounded-lg p-2 text-navy-600 focus:outline-none focus:border-teal-400"
          >
            <option value={1}>{t({ en: 'Annually (1x/yr)', te: 'ఏటా (1x/సంవత్సరం)' })}</option>
            <option value={4}>{t({ en: 'Quarterly (4x/yr)', te: 'త్రైమాసికం (4x/సంవత్సరం)' })}</option>
            <option value={12}>{t({ en: 'Monthly (12x/yr)', te: 'నెలవారీ (12x/సంవత్సరం)' })}</option>
          </select>
        </div>
      </div>

      {/* Results Comparison Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-2xl bg-navy-50 border border-navy-100 text-center">
          <span className="text-xs text-navy-400 font-semibold uppercase block">
            {t({ en: 'Simple Interest Maturity', te: 'సాధారణ వడ్డీ మెచ్యూరిటీ' })}
          </span>
          <span className="text-2xl font-bold text-navy-600 mt-1 block">{formatINR(simpleFinal)}</span>
          <span className="text-xs text-navy-400">
            {t({ en: 'Linear: ₹', te: 'వడ్డీ: ₹' })}{((simpleFinal - principal)).toLocaleString('en-IN')} {t({ en: 'interest', te: '' })}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-center">
          <span className="text-xs text-teal-600 font-semibold uppercase block">
            {t({ en: 'Compound Interest Maturity', te: 'చక్రవడ్డీ మెచ్యూరిటీ' })}
          </span>
          <span className="text-2xl font-bold text-teal-700 mt-1 block">{formatINR(compoundFinal)}</span>
          <span className="text-xs text-teal-600 font-semibold">
            {t({ en: 'Snowball: ₹', te: 'మొత్తం వడ్డీ: ₹' })}{Math.round(compoundFinal - principal).toLocaleString('en-IN')}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-coral-50 border border-coral-200 text-center">
          <span className="text-xs text-coral-600 font-semibold uppercase block">
            {t({ en: 'Extra Wealth from Compounding', te: 'చక్రవడ్డీ అదనపు సంపద' })}
          </span>
          <span className="text-2xl font-bold text-coral-600 mt-1 block">+{formatINR(wealthDifference)}</span>
          <span className="text-xs text-coral-600">
            {t({ en: 'Pure interest on interest!', te: 'కేవలం వడ్డీపై వడ్డీ!' })}
          </span>
        </div>
      </div>

      {/* Recharts Visual Comparison */}
      <div className="bg-cream-50/50 p-4 rounded-2xl border border-navy-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-4">
          {t({ en: 'Growth Over Time (₹ vs Years)', te: 'కాలక్రమేణా వృద్ధి (₹ vs సంవత్సరాలు)' })}
        </h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 20, left: 20, bottom: 0 }}>
              <XAxis dataKey="year" stroke="#7591b3" fontSize={11} />
              <YAxis
                stroke="#7591b3"
                fontSize={11}
                tickFormatter={(val: number) => `₹${(val / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value: any) => [formatINR(Number(value)), '']}
                contentStyle={{ backgroundColor: '#14253D', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Legend />
              <Line type="monotone" dataKey="Simple" stroke="#7591b3" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Compound" stroke="#11B7A3" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Educational Disclaimer */}
      <div className="disclaimer mt-6">
        💡 {t({
          en: 'Note: This simulation demonstrates the pure mathematical power of compounding. Real investment products (such as bank deposits, bonds, or mutual funds) carry different compounding rules, taxes, credit risks, and market fluctuations.',
          te: 'గమనిక: ఈ సిమ్యులేషన్ చక్రవడ్డీ గణిత శక్తిని చూపుతుంది. నిజమైన ఉత్పత్తులలో పన్నులు మరియు మార్కెట్ పరిస్థితులు ఉంటాయి.',
        })}
      </div>
    </div>
  );
}

export default CompoundInterestExplorer;
