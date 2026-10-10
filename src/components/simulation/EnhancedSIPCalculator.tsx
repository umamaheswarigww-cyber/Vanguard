// ============================================================
// FINQUEST INDIA — ENHANCED SIP CALCULATOR
// With Monthly NAV Table, Step-Up SIP, and Lump-Sum Comparison
// Educational only — NOT investment advice or return prediction
// ============================================================
import { useState, useMemo, useCallback } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, AreaChart, Area,
} from 'recharts';
import { formatINR, sipFutureValue, generateSIPTable } from '@/lib/finance/formulas';

type TabKey = 'basic' | 'navtable' | 'stepup' | 'comparison';

// Default NAV sequence: rising trend with dips (realistic volatility for teaching)
const DEFAULT_NAVS_12 = [50, 48, 52, 55, 51, 58, 60, 57, 65, 62, 70, 68];

function generateStepUpSIPFV(
  initialMonthly: number,
  annualStepUpPercent: number,
  annualRateDecimal: number,
  years: number,
): { total: number; rows: { year: number; contribution: number; fvAtEnd: number }[] } {
  const monthlyRate = annualRateDecimal / 12;
  let total = 0;
  const rows: { year: number; contribution: number; fvAtEnd: number }[] = [];

  for (let yr = 1; yr <= years; yr++) {
    const monthlyContrib = initialMonthly * Math.pow(1 + annualStepUpPercent / 100, yr - 1);
    const monthsRemaining = (years - yr + 1) * 12;
    // FV of this year's 12 contributions from the end of this year
    const fvThisYear = sipFutureValue(monthlyContrib, monthlyRate, 12, 'end');
    // Grow to end of full tenure
    const fvAtEnd = fvThisYear * Math.pow(1 + monthlyRate, monthsRemaining - 12);
    total += fvAtEnd;
    rows.push({ year: yr, contribution: monthlyContrib * 12, fvAtEnd });
  }
  return { total, rows };
}

export function EnhancedSIPCalculator() {
  const [activeTab, setActiveTab] = useState<TabKey>('basic');

  // Basic SIP
  const [monthly, setMonthly] = useState(2000);
  const [annualRate, setAnnualRate] = useState(12);
  const [years, setYears] = useState(10);

  // NAV Table
  const [navInputs, setNavInputs] = useState<number[]>(DEFAULT_NAVS_12);
  const [navMonthlyContrib, setNavMonthlyContrib] = useState(1000);

  // Step-Up SIP
  const [stepUpMonthly, setStepUpMonthly] = useState(2000);
  const [stepUpRate, setStepUpRate] = useState(10); // % annual increase
  const [stepUpAnnualReturn, setStepUpAnnualReturn] = useState(12);
  const [stepUpYears, setStepUpYears] = useState(10);

  // Lump sum vs SIP comparison
  const [compAmount, setCompAmount] = useState(100000);
  const [compRate, setCompRate] = useState(12);
  const [compYears, setCompYears] = useState(10);

  // Basic SIP calculations
  const basicResult = useMemo(() => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    const fv = sipFutureValue(monthly, r, n, 'end');
    const invested = monthly * n;
    const gain = fv - invested;

    // Chart data
    const chartData: { year: string; Invested: number; Portfolio: number }[] = [];
    for (let y = 1; y <= years; y++) {
      const months = y * 12;
      chartData.push({
        year: `Yr ${y}`,
        Invested: monthly * months,
        Portfolio: Math.round(sipFutureValue(monthly, r, months, 'end')),
      });
    }
    return { fv, invested, gain, chartData };
  }, [monthly, annualRate, years]);

  // NAV Table
  const sipRows = useMemo(
    () => generateSIPTable(navMonthlyContrib, navInputs),
    [navMonthlyContrib, navInputs],
  );

  const lastRow = sipRows[sipRows.length - 1];
  const navBelow = lastRow && lastRow.portfolioValue < lastRow.cumulativeContribution;

  function setNav(idx: number, val: number) {
    setNavInputs(prev => prev.map((n, i) => (i === idx ? Math.max(1, val) : n)));
  }

  function addNavMonth() {
    const last = navInputs[navInputs.length - 1] ?? 50;
    setNavInputs(prev => [...prev, last]);
  }

  function removeLastNavMonth() {
    if (navInputs.length > 2) setNavInputs(prev => prev.slice(0, -1));
  }

  // Step-up SIP
  const stepUpResult = useMemo(
    () => generateStepUpSIPFV(stepUpMonthly, stepUpRate, stepUpAnnualReturn / 100, stepUpYears),
    [stepUpMonthly, stepUpRate, stepUpAnnualReturn, stepUpYears],
  );

  const flatSIPForComparison = useMemo(
    () => sipFutureValue(stepUpMonthly, stepUpAnnualReturn / 100 / 12, stepUpYears * 12, 'end'),
    [stepUpMonthly, stepUpAnnualReturn, stepUpYears],
  );

  // Lump sum vs SIP comparison
  const compResult = useMemo(() => {
    const r = compRate / 100 / 12;
    const n = compYears * 12;
    const monthly = compAmount / n; // spread lump-sum as monthly SIP equivalent
    const lumpSumFV = compAmount * Math.pow(1 + compRate / 100, compYears);
    const sipFV = sipFutureValue(monthly, r, n, 'end');

    const chartData: { year: string; 'Lump Sum': number; SIP: number }[] = [];
    for (let y = 1; y <= compYears; y++) {
      const months = y * 12;
      const monthlyLocal = compAmount / (compYears * 12);
      chartData.push({
        year: `Yr ${y}`,
        'Lump Sum': Math.round(compAmount * Math.pow(1 + compRate / 100, y)),
        SIP: Math.round(sipFutureValue(monthlyLocal, r, months, 'end')),
      });
    }
    return { lumpSumFV, sipFV, monthly, chartData };
  }, [compAmount, compRate, compYears]);

  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'basic', label: 'Basic SIP', icon: '📈' },
    { key: 'navtable', label: 'NAV Table', icon: '📋' },
    { key: 'stepup', label: 'Step-Up SIP', icon: '⬆️' },
    { key: 'comparison', label: 'SIP vs Lump Sum', icon: '⚖️' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-1">SIP Learning Lab — 4 Modes</h3>
        <p className="text-teal-100 text-sm">
          Hypothetical illustrations only. Mutual fund returns are not guaranteed.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === t.key
                ? 'bg-teal-500 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-teal-50'
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ===== BASIC SIP ===== */}
      {activeTab === 'basic' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
            {[
              { label: 'Monthly Investment', value: monthly, set: setMonthly, min: 500, max: 20000, step: 500, format: (v: number) => formatINR(v) },
              { label: 'Expected Annual Return (% p.a.)', value: annualRate, set: setAnnualRate, min: 6, max: 20, step: 0.5, format: (v: number) => `${v}%` },
              { label: 'Time Period', value: years, set: setYears, min: 1, max: 30, step: 1, format: (v: number) => `${v} years` },
            ].map(({ label, value, set, min, max, step, format }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-navy-600">{label}</label>
                  <span className="text-teal-600 font-bold">{format(value)}</span>
                </div>
                <input type="range" min={min} max={max} step={step} value={value}
                  onChange={e => set(Number(e.target.value))} className="w-full accent-teal-500" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">Total Invested</p>
              <p className="font-bold text-navy-600">{formatINR(basicResult.invested)}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">Hypothetical Gain</p>
              <p className="font-bold text-green-600">{formatINR(basicResult.gain)}</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">Future Value</p>
              <p className="font-extrabold text-teal-600 text-lg">{formatINR(basicResult.fv)}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-6">
            <h4 className="font-bold text-navy-600 mb-4 text-sm">Growth Over Time</h4>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={basicResult.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={(v: number) => `₹${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 10 }} />
                <Tooltip formatter={(v: any) => formatINR(Number(v) || 0)} />
                <Legend />
                <Area type="monotone" dataKey="Invested" stackId="no" stroke="#14253D" fill="#e8edf3" strokeWidth={2} />
                <Area type="monotone" dataKey="Portfolio" stackId="no" stroke="#11B7A3" fill="#d1f5f1" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
            ⚠️ <strong>Hypothetical illustration</strong> assuming constant annual return of {annualRate}%. Actual mutual fund returns vary and past performance does not guarantee future results. This is NOT investment advice.
          </div>
        </div>
      )}

      {/* ===== NAV TABLE ===== */}
      {activeTab === 'navtable' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-card p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <label className="text-sm font-semibold text-navy-600">Monthly Contribution</label>
                <div className="mt-1">
                  <input type="range" min={500} max={5000} step={500} value={navMonthlyContrib}
                    onChange={e => setNavMonthlyContrib(Number(e.target.value))} className="w-full accent-teal-500" />
                  <span className="text-teal-600 font-bold">{formatINR(navMonthlyContrib)}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 mb-4 text-sm text-blue-700">
              <strong>Edit NAV prices below</strong> — see how many units you buy each month and how your portfolio value changes.
              Notice you buy more units when NAV is low and fewer when it's high — this is <strong>Rupee Cost Averaging</strong>!
            </div>

            {/* NAV inputs */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-3">
              {navInputs.map((nav, i) => (
                <div key={i} className="text-center">
                  <label className="text-xs text-gray-500 block mb-1">Month {i + 1}</label>
                  <input
                    type="number"
                    min={1}
                    max={200}
                    value={nav}
                    onChange={e => setNav(i, Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-2 py-1.5 text-center text-sm w-full focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button onClick={addNavMonth}
                className="flex-1 bg-teal-50 hover:bg-teal-100 text-teal-700 py-2 rounded-lg text-sm font-semibold transition-colors">
                + Add Month
              </button>
              <button onClick={removeLastNavMonth}
                className="flex-1 bg-red-50 hover:bg-red-100 text-red-700 py-2 rounded-lg text-sm font-semibold transition-colors">
                − Remove Last
              </button>
            </div>
          </div>

          {/* NAV Table */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-navy-600 text-white">
                    {['Month', 'NAV', 'Units Bought', 'Cum. Units', 'Total Invested', 'Portfolio Value', 'Avg Cost'].map(h => (
                      <th key={h} className="p-2 text-center whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sipRows.map((row, i) => {
                    const isBelow = row.portfolioValue < row.cumulativeContribution;
                    return (
                      <tr key={i} className={`border-b border-gray-100 ${isBelow ? 'bg-red-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-2 text-center font-semibold">{row.period}</td>
                        <td className="p-2 text-center text-blue-700 font-medium">₹{row.navPrice}</td>
                        <td className="p-2 text-center">{row.unitsBought.toFixed(3)}</td>
                        <td className="p-2 text-center font-semibold">{row.cumulativeUnits.toFixed(3)}</td>
                        <td className="p-2 text-center">{formatINR(row.cumulativeContribution)}</td>
                        <td className={`p-2 text-center font-bold ${isBelow ? 'text-red-600' : 'text-green-600'}`}>
                          {formatINR(row.portfolioValue)}
                        </td>
                        <td className="p-2 text-center text-gray-600">₹{row.averageCost.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {navBelow && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-700">
              🔴 <strong>Portfolio value is below invested amount right now</strong> — this is normal and expected in the short term. SIP is designed for long-term investing. The highlighted months show when market prices were lower than your average cost.
            </div>
          )}

          {lastRow && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Your Average Cost Per Unit</p>
                <p className="font-extrabold text-teal-700 text-xl">₹{lastRow.averageCost.toFixed(2)}</p>
                <p className="text-xs text-gray-500 mt-1">vs latest NAV ₹{lastRow.navPrice}</p>
              </div>
              <div className={`rounded-xl p-4 text-center ${lastRow.portfolioValue >= lastRow.cumulativeContribution ? 'bg-green-50' : 'bg-red-50'}`}>
                <p className="text-xs text-gray-500 mb-1">Current Portfolio Value</p>
                <p className={`font-extrabold text-xl ${lastRow.portfolioValue >= lastRow.cumulativeContribution ? 'text-green-600' : 'text-red-600'}`}>
                  {formatINR(lastRow.portfolioValue)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Invested: {formatINR(lastRow.cumulativeContribution)}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===== STEP-UP SIP ===== */}
      {activeTab === 'stepup' && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
            <strong>Step-Up SIP</strong>: You increase your monthly contribution by a fixed percentage every year. This mirrors income growth and dramatically boosts corpus over time.
          </div>

          <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
            {[
              { label: 'Starting Monthly Contribution', value: stepUpMonthly, set: setStepUpMonthly, min: 500, max: 10000, step: 500, format: (v: number) => formatINR(v) },
              { label: 'Annual Step-Up Rate', value: stepUpRate, set: setStepUpRate, min: 0, max: 25, step: 1, format: (v: number) => `${v}% per year` },
              { label: 'Expected Annual Return', value: stepUpAnnualReturn, set: setStepUpAnnualReturn, min: 6, max: 20, step: 0.5, format: (v: number) => `${v}% p.a.` },
              { label: 'Time Period', value: stepUpYears, set: setStepUpYears, min: 3, max: 30, step: 1, format: (v: number) => `${v} years` },
            ].map(({ label, value, set, min, max, step, format }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-navy-600">{label}</label>
                  <span className="text-teal-600 font-bold">{format(value)}</span>
                </div>
                <input type="range" min={min} max={max} step={step} value={value}
                  onChange={e => set(Number(e.target.value))} className="w-full accent-teal-500" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 text-center border">
              <p className="text-xs text-gray-500 mb-1">Flat SIP (no step-up)</p>
              <p className="font-extrabold text-gray-700 text-xl">{formatINR(flatSIPForComparison)}</p>
              <p className="text-xs text-gray-400 mt-1">{formatINR(stepUpMonthly)}/mo for {stepUpYears} yrs</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 text-center border border-teal-200">
              <p className="text-xs text-gray-500 mb-1">Step-Up SIP corpus</p>
              <p className="font-extrabold text-teal-600 text-xl">{formatINR(stepUpResult.total)}</p>
              <p className="text-xs text-gray-400 mt-1">+{stepUpRate}% step-up each year</p>
            </div>
          </div>

          {stepUpResult.total > flatSIPForComparison && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-700">
              📈 Step-up SIP generates <strong>{formatINR(stepUpResult.total - flatSIPForComparison)} more</strong> than flat SIP — that's the power of increasing contributions as your income grows!
            </div>
          )}

          {/* Year-by-year table */}
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="p-2 text-center">Year</th>
                    <th className="p-2 text-center">Monthly Contrib.</th>
                    <th className="p-2 text-center">Annual Total</th>
                  </tr>
                </thead>
                <tbody>
                  {stepUpResult.rows.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-2 text-center font-bold">Year {row.year}</td>
                      <td className="p-2 text-center text-teal-700 font-semibold">{formatINR(row.contribution / 12)}/mo</td>
                      <td className="p-2 text-center">{formatINR(row.contribution)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===== LUMP SUM vs SIP ===== */}
      {activeTab === 'comparison' && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
            <strong>Same total money, different approaches.</strong> We divide your lump-sum amount into equal monthly SIP contributions spread over the same period.
          </div>

          <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
            {[
              { label: 'Total Investment Amount', value: compAmount, set: setCompAmount, min: 10000, max: 500000, step: 10000, format: (v: number) => formatINR(v) },
              { label: 'Annual Return Rate', value: compRate, set: setCompRate, min: 6, max: 20, step: 0.5, format: (v: number) => `${v}% p.a.` },
              { label: 'Investment Period', value: compYears, set: setCompYears, min: 1, max: 30, step: 1, format: (v: number) => `${v} years` },
            ].map(({ label, value, set, min, max, step, format }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-navy-600">{label}</label>
                  <span className="text-teal-600 font-bold">{format(value)}</span>
                </div>
                <input type="range" min={min} max={max} step={step} value={value}
                  onChange={e => set(Number(e.target.value))} className="w-full accent-teal-500" />
              </div>
            ))}
            <p className="text-xs text-gray-400">
              Equivalent monthly SIP: <strong>{formatINR(compResult.monthly)}/month</strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy-600 text-white rounded-xl p-4 text-center">
              <p className="text-xs text-blue-200 mb-1">Lump Sum FV</p>
              <p className="font-extrabold text-2xl">{formatINR(compResult.lumpSumFV)}</p>
              <p className="text-xs text-blue-200 mt-1">{formatINR(compAmount)} invested on Day 1</p>
            </div>
            <div className="bg-teal-500 text-white rounded-xl p-4 text-center">
              <p className="text-xs text-teal-100 mb-1">SIP FV</p>
              <p className="font-extrabold text-2xl">{formatINR(compResult.sipFV)}</p>
              <p className="text-xs text-teal-100 mt-1">{formatINR(compResult.monthly)}/mo × {compYears * 12} months</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-6">
            <h4 className="font-bold text-navy-600 mb-4 text-sm">Growth Comparison</h4>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={compResult.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                <YAxis tickFormatter={(v: number) => `₹${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 10 }} />
                <Tooltip formatter={(v: any) => formatINR(Number(v) || 0)} />
                <Legend />
                <Line type="monotone" dataKey="Lump Sum" stroke="#14253D" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="SIP" stroke="#11B7A3" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
            <p className="font-bold mb-2">📚 Key Insight</p>
            <ul className="space-y-1">
              <li>• Lump sum wins if you invest at the exact right time (market low). But timing the market is very hard.</li>
              <li>• SIP wins through <strong>Rupee Cost Averaging</strong> — you buy more units when markets are low.</li>
              <li>• For most students who earn monthly, SIP is more practical than lump sum.</li>
              <li>• Both assume constant returns — <strong>real markets are volatile.</strong></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
