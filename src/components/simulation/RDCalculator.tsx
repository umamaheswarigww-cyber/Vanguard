// ============================================================
// FINQUEST INDIA — RECURRING DEPOSIT CALCULATOR
// Educational simulation — actual RD returns vary by bank
// ============================================================
import { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { formatINR } from '@/lib/finance/formulas';

interface RDRow {
  month: number;
  contribution: number;
  cumulativeDeposit: number;
  interestEarned: number;
  maturityValue: number;
}

/**
 * RD Maturity calculation (quarterly compounding, Indian banking convention)
 * M = R × [(1 + r/4)^(4n/3)] × [(1 + r/4)^(4n/3) - 1] / [(1 + r/4)^(4/3) - 1]
 * Simplified approximation used here for teaching purposes.
 *
 * More accurate formula used: each instalment compounds for its remaining tenure.
 * M = sum over months: R × (1 + r/4)^(4 × monthsRemaining/12)
 */
function rdMaturity(monthlyDeposit: number, annualRateDecimal: number, tenureMonths: number): number {
  if (monthlyDeposit <= 0 || annualRateDecimal <= 0 || tenureMonths <= 0) return 0;
  let total = 0;
  for (let m = 1; m <= tenureMonths; m++) {
    const monthsRemaining = tenureMonths - m + 1;
    // Quarterly compounding for this instalment
    total += monthlyDeposit * Math.pow(1 + annualRateDecimal / 4, (4 * monthsRemaining) / 12);
  }
  return total;
}

function generateRDTable(monthlyDeposit: number, annualRateDecimal: number, tenureMonths: number): RDRow[] {
  const rows: RDRow[] = [];
  for (let m = 1; m <= tenureMonths; m++) {
    const cumulativeDeposit = monthlyDeposit * m;
    const maturityValue = rdMaturity(monthlyDeposit, annualRateDecimal, m);
    const interestEarned = maturityValue - cumulativeDeposit;
    rows.push({
      month: m,
      contribution: monthlyDeposit,
      cumulativeDeposit,
      interestEarned: Math.max(0, interestEarned),
      maturityValue,
    });
  }
  return rows;
}

export function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(2000);
  const [annualRate, setAnnualRate] = useState(7.0);
  const [tenureMonths, setTenureMonths] = useState(24);

  const rows = useMemo(
    () => generateRDTable(monthlyDeposit, annualRate / 100, tenureMonths),
    [monthlyDeposit, annualRate, tenureMonths],
  );

  const lastRow = rows[rows.length - 1];
  const maturityValue = lastRow?.maturityValue ?? 0;
  const totalDeposited = lastRow?.cumulativeDeposit ?? 0;
  const totalInterest = lastRow?.interestEarned ?? 0;

  // Chart: every 3rd month for readability
  const chartData = rows.filter((_, i) => (i + 1) % Math.max(1, Math.floor(tenureMonths / 12)) === 0 || i === rows.length - 1).map(r => ({
    month: `M${r.month}`,
    'Deposited': Math.round(r.cumulativeDeposit),
    'Interest Earned': Math.round(r.interestEarned),
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-navy-600 text-white rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-1">Recurring Deposit (RD) Calculator</h3>
        <p className="text-blue-200 text-sm">Hypothetical illustration — actual returns depend on bank and compounding terms</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl shadow-card p-6 space-y-5">
        {/* Monthly deposit */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-navy-600 text-sm">Monthly Deposit</label>
            <span className="text-teal-600 font-bold text-lg">{formatINR(monthlyDeposit)}</span>
          </div>
          <input
            type="range"
            min={500}
            max={20000}
            step={500}
            value={monthlyDeposit}
            onChange={e => setMonthlyDeposit(Number(e.target.value))}
            className="w-full accent-teal-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>₹500</span><span>₹20,000</span>
          </div>
        </div>

        {/* Interest rate */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-navy-600 text-sm">Annual Interest Rate</label>
            <span className="text-teal-600 font-bold text-lg">{annualRate.toFixed(1)}% p.a.</span>
          </div>
          <input
            type="range"
            min={4}
            max={9}
            step={0.25}
            value={annualRate}
            onChange={e => setAnnualRate(Number(e.target.value))}
            className="w-full accent-teal-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>4%</span><span>9%</span>
          </div>
        </div>

        {/* Tenure */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-navy-600 text-sm">Tenure</label>
            <span className="text-teal-600 font-bold text-lg">
              {tenureMonths} months ({(tenureMonths / 12).toFixed(1)} yrs)
            </span>
          </div>
          <input
            type="range"
            min={6}
            max={120}
            step={6}
            value={tenureMonths}
            onChange={e => setTenureMonths(Number(e.target.value))}
            className="w-full accent-teal-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>6 months</span><span>10 years</span>
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Total Deposited</p>
          <p className="text-lg font-bold text-navy-600">{formatINR(totalDeposited)}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Interest Earned</p>
          <p className="text-lg font-bold text-green-600">{formatINR(totalInterest)}</p>
        </div>
        <div className="bg-teal-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-500 mb-1">Maturity Value</p>
          <p className="text-xl font-extrabold text-teal-600">{formatINR(maturityValue)}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h4 className="font-bold text-navy-600 mb-4">Growth Over Time</h4>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v: number) => `₹${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11 }} />
            <Tooltip formatter={(value: any) => formatINR(Number(value) || 0)} />
            <Legend />
            <Area type="monotone" dataKey="Deposited" stackId="1" stroke="#14253D" fill="#e8edf3" />
            <Area type="monotone" dataKey="Interest Earned" stackId="1" stroke="#11B7A3" fill="#d1f5f1" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Key learning */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="font-bold text-amber-800 mb-2">📚 What This Shows</p>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• RD lets you save a <strong>fixed amount every month</strong> at a guaranteed interest rate</li>
          <li>• Each deposit earns interest for <strong>fewer months</strong> than the previous one</li>
          <li>• Your first deposit earns interest for the full tenure; your last deposit earns for just 1 month</li>
          <li>• RDs suit short-term goals (1–5 years) — unlike equity, returns are predictable but modest</li>
        </ul>
        <p className="text-xs text-amber-600 mt-3 italic">
          ⚠️ Hypothetical illustration only. Actual RD rates, compounding, TDS deduction and premature withdrawal penalties vary by bank.
          Deposits up to ₹5 lakh per bank are insured by DICGC.
        </p>
      </div>

      {/* Compare with savings account */}
      <div className="bg-white rounded-2xl shadow-card p-4">
        <h4 className="font-semibold text-navy-600 mb-3 text-sm">📊 RD vs Savings Account Comparison</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-center">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-2 text-left">Feature</th>
                <th className="p-2 text-teal-700">Recurring Deposit</th>
                <th className="p-2 text-blue-700">Savings Account</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Interest Rate', '5–7.5% p.a.', '2.5–4% p.a.'],
                ['Withdrawal', 'At maturity (penalty for early)', 'Any time'],
                ['Discipline', 'Forces monthly saving', 'Optional'],
                ['DICGC Insurance', 'Yes (up to ₹5L)', 'Yes (up to ₹5L)'],
                ['Lock-in', 'Yes — till maturity', 'No'],
              ].map(([feature, rd, sa]) => (
                <tr key={feature}>
                  <td className="p-2 text-left text-gray-600">{feature}</td>
                  <td className="p-2 text-teal-700 font-medium">{rd}</td>
                  <td className="p-2 text-blue-700 font-medium">{sa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2 italic">Rates are indicative ranges as of 2025 — check your bank for current rates.</p>
      </div>
    </div>
  );
}
