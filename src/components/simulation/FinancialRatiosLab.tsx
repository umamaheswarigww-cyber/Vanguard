// ============================================================
// FINQUEST INDIA — FINANCIAL RATIOS LAB
// Interactive EPS, P/E, P/B, ROE, Dividend Yield calculator
// Educational only — not investment advice
// ============================================================
import { useState, useMemo } from 'react';

interface RatioResult {
  name: string;
  value: number | null;
  formula: string;
  interpretation: string;
  unit: string;
  color: string;
}

function safeDiv(a: number, b: number): number | null {
  if (b === 0 || isNaN(b) || isNaN(a)) return null;
  return a / b;
}

function formatRatio(val: number | null, unit: string, decimals = 2): string {
  if (val === null) return 'N/A';
  return `${val.toFixed(decimals)}${unit}`;
}

export function FinancialRatiosLab() {
  const [sharePrice, setSharePrice] = useState(300);
  const [netProfit, setNetProfit] = useState(150); // in crores
  const [sharesOutstanding, setSharesOutstanding] = useState(10); // in crores
  const [bookValuePerShare, setBookValuePerShare] = useState(120);
  const [dividendPerShare, setDividendPerShare] = useState(5);
  const [shareholdersEquity, setShareholdersEquity] = useState(1200); // crores

  const ratios = useMemo<RatioResult[]>(() => {
    const epsValue = safeDiv(netProfit, sharesOutstanding); // ₹ per share
    const peValue = epsValue != null ? safeDiv(sharePrice, epsValue) : null;
    const pbValue = safeDiv(sharePrice, bookValuePerShare);
    const roeValue = safeDiv(netProfit * 100, shareholdersEquity); // %
    const divYield = safeDiv(dividendPerShare * 100, sharePrice); // %

    return [
      {
        name: 'EPS',
        value: epsValue,
        formula: 'Net Profit (₹Cr) ÷ Shares Outstanding (Cr)',
        interpretation: epsValue != null
          ? `For every share, the company earned ${formatRatio(epsValue, '')} in profit this year.`
          : 'Enter valid numbers above.',
        unit: '₹/share',
        color: 'bg-blue-50 border-blue-200 text-blue-700',
      },
      {
        name: 'P/E Ratio',
        value: peValue,
        formula: 'Share Price ÷ EPS',
        interpretation: peValue != null
          ? `You pay ₹${peValue.toFixed(1)} for every ₹1 of annual earnings. Compare to sector peers — a higher P/E can mean higher growth expectations.`
          : 'EPS must be positive.',
        unit: 'x',
        color: 'bg-teal-50 border-teal-200 text-teal-700',
      },
      {
        name: 'P/B Ratio',
        value: pbValue,
        formula: 'Share Price ÷ Book Value Per Share',
        interpretation: pbValue != null
          ? `Market values the company at ${formatRatio(pbValue, 'x')} its accounting book value. P/B < 1 can signal undervaluation — or problems.`
          : 'Enter a valid book value.',
        unit: 'x',
        color: 'bg-purple-50 border-purple-200 text-purple-700',
      },
      {
        name: 'ROE',
        value: roeValue,
        formula: '(Net Profit ÷ Shareholders\' Equity) × 100',
        interpretation: roeValue != null
          ? `The company generates ${formatRatio(roeValue, '%', 1)} return on every ₹100 of equity. Higher ROE generally means more profitable use of shareholder funds.`
          : 'Enter equity.',
        unit: '%',
        color: 'bg-green-50 border-green-200 text-green-700',
      },
      {
        name: 'Dividend Yield',
        value: divYield,
        formula: '(Annual Dividend Per Share ÷ Share Price) × 100',
        interpretation: divYield != null
          ? `Investors earn ${formatRatio(divYield, '%', 2)} annually in dividend income on current share price. Not all companies pay dividends.`
          : 'Enter share price.',
        unit: '%',
        color: 'bg-amber-50 border-amber-200 text-amber-700',
      },
    ];
  }, [sharePrice, netProfit, sharesOutstanding, bookValuePerShare, dividendPerShare, shareholdersEquity]);

  const inputClass = "border border-gray-300 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-600 to-navy-500 text-white rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-1">🔬 Financial Ratios Lab</h3>
        <p className="text-blue-200 text-sm">
          Enter hypothetical company data below — all ratios calculate instantly.
          <br />
          <strong>Educational only — not investment analysis or advice.</strong>
        </p>
      </div>

      {/* Inputs */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h4 className="font-bold text-navy-600 mb-4 text-sm uppercase tracking-wide">Hypothetical Company — Enter Your Numbers</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Share Price (₹)</label>
            <input
              type="number"
              min={1}
              value={sharePrice}
              onChange={e => setSharePrice(Number(e.target.value))}
              className={inputClass}
              placeholder="e.g. 300"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Net Profit (₹ Crores)</label>
            <input
              type="number"
              min={0}
              value={netProfit}
              onChange={e => setNetProfit(Number(e.target.value))}
              className={inputClass}
              placeholder="e.g. 150"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Shares Outstanding (Crores)</label>
            <input
              type="number"
              min={0.01}
              step={0.01}
              value={sharesOutstanding}
              onChange={e => setSharesOutstanding(Number(e.target.value))}
              className={inputClass}
              placeholder="e.g. 10"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Book Value Per Share (₹)</label>
            <input
              type="number"
              min={1}
              value={bookValuePerShare}
              onChange={e => setBookValuePerShare(Number(e.target.value))}
              className={inputClass}
              placeholder="e.g. 120"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Annual Dividend Per Share (₹)</label>
            <input
              type="number"
              min={0}
              value={dividendPerShare}
              onChange={e => setDividendPerShare(Number(e.target.value))}
              className={inputClass}
              placeholder="e.g. 5"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Shareholders' Equity (₹ Crores)</label>
            <input
              type="number"
              min={1}
              value={shareholdersEquity}
              onChange={e => setShareholdersEquity(Number(e.target.value))}
              className={inputClass}
              placeholder="e.g. 1200"
            />
          </div>
        </div>
      </div>

      {/* Ratio results */}
      <div className="space-y-3">
        {ratios.map(ratio => (
          <div key={ratio.name} className={`rounded-xl border p-4 ${ratio.color}`}>
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="font-bold text-sm mb-0.5">{ratio.name}</p>
                <p className="text-xs opacity-75 font-mono">{ratio.formula}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-extrabold leading-tight">
                  {ratio.value !== null ? ratio.value.toFixed(2) : 'N/A'}
                </p>
                <p className="text-xs opacity-75">{ratio.unit}</p>
              </div>
            </div>
            <p className="text-xs mt-2 leading-relaxed opacity-90">{ratio.interpretation}</p>
          </div>
        ))}
      </div>

      {/* Important caveats */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="font-bold text-red-800 mb-2">⚠️ Important Caveats</p>
        <ul className="text-sm text-red-700 space-y-1.5">
          <li>• <strong>Never compare P/E across sectors.</strong> IT companies trade at 30x, banks at 12x — sector norms differ.</li>
          <li>• <strong>One ratio tells one story.</strong> Always use multiple ratios together, not individually.</li>
          <li>• <strong>Past earnings ≠ future earnings.</strong> Ratios are backward-looking; the future is uncertain.</li>
          <li>• <strong>Accounting policies matter.</strong> Two companies can report the same business differently.</li>
          <li>• This lab uses simplified inputs — real financial analysis requires full annual reports.</li>
        </ul>
      </div>

      {/* Quick reference */}
      <div className="bg-white rounded-2xl shadow-card p-4">
        <h4 className="font-bold text-navy-600 mb-3 text-sm">📋 Quick Reference</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-2 text-left">Ratio</th>
                <th className="p-2">What it Measures</th>
                <th className="p-2">High means...</th>
                <th className="p-2">Low means...</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['EPS', 'Profit per share', 'More profit per share', 'Less profit per share'],
                ['P/E', 'Price vs earnings', 'High growth expected (or overvalued)', 'Low growth expected (or undervalued)'],
                ['P/B', 'Price vs book value', 'Market values intangibles highly', 'Could be undervalued or distressed'],
                ['ROE', 'Efficiency of equity use', 'Generates more profit per ₹ of equity', 'Less efficient with shareholder funds'],
                ['Div. Yield', 'Income from dividends', 'High income, mature business', 'Growth company reinvests profits'],
              ].map(([ratio, what, high, low]) => (
                <tr key={ratio}>
                  <td className="p-2 font-semibold text-navy-600">{ratio}</td>
                  <td className="p-2 text-gray-600">{what}</td>
                  <td className="p-2 text-green-700">{high}</td>
                  <td className="p-2 text-amber-700">{low}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
