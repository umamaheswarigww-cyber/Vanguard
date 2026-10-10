// ============================================================
// FINQUEST INDIA — MARKET INDICES LAB
// Interactive index weighting simulator
// Educational only — not investment advice
// ============================================================
import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formatIndianNumber } from '@/lib/finance/formulas';

interface CompanyInIndex {
  id: string;
  name: string;
  sector: string;
  shares: number;        // total shares outstanding (crores)
  freefloat: number;     // free-float factor (0–1)
  initialPrice: number;  // ₹ per share
  currentPrice: number;  // ₹ per share (editable)
  color: string;
}

const INDEX_BASE_VALUE = 1000;

const INITIAL_COMPANIES: CompanyInIndex[] = [
  { id: 'alpha', name: 'AlphaTech', sector: 'IT', shares: 100, freefloat: 0.7, initialPrice: 500, currentPrice: 500, color: '#11B7A3' },
  { id: 'beta', name: 'BetaBank', sector: 'Banking', shares: 200, freefloat: 0.5, initialPrice: 200, currentPrice: 200, color: '#14253D' },
  { id: 'gamma', name: 'GammaEnergy', sector: 'Energy', shares: 150, freefloat: 0.4, initialPrice: 300, currentPrice: 300, color: '#FF765E' },
  { id: 'delta', name: 'DeltaPharma', sector: 'Pharma', shares: 80, freefloat: 0.65, initialPrice: 400, currentPrice: 400, color: '#6366f1' },
  { id: 'epsilon', name: 'EpsilonFMCG', sector: 'FMCG', shares: 120, freefloat: 0.55, initialPrice: 250, currentPrice: 250, color: '#f59e0b' },
];

function calcFFMC(company: CompanyInIndex): number {
  return company.currentPrice * company.shares * company.freefloat;
}

function calcInitialFFMC(company: CompanyInIndex): number {
  return company.initialPrice * company.shares * company.freefloat;
}

export function MarketIndicesLab() {
  const [companies, setCompanies] = useState<CompanyInIndex[]>(INITIAL_COMPANIES);

  const { indexValue, weights, totalFFMC } = useMemo(() => {
    const totalInitial = companies.reduce((sum, c) => sum + calcInitialFFMC(c), 0);
    const totalCurrent = companies.reduce((sum, c) => sum + calcFFMC(c), 0);
    const indexVal = totalInitial > 0 ? INDEX_BASE_VALUE * (totalCurrent / totalInitial) : INDEX_BASE_VALUE;
    const ws = companies.map(c => ({
      name: c.name,
      weight: totalCurrent > 0 ? (calcFFMC(c) / totalCurrent) * 100 : 0,
      ffmc: calcFFMC(c),
      priceChange: ((c.currentPrice - c.initialPrice) / c.initialPrice) * 100,
      color: c.color,
    }));
    return { indexValue: indexVal, weights: ws, totalFFMC: totalCurrent };
  }, [companies]);

  const indexChange = ((indexValue - INDEX_BASE_VALUE) / INDEX_BASE_VALUE) * 100;

  function updatePrice(id: string, price: number) {
    setCompanies(prev => prev.map(c => c.id === id ? { ...c, currentPrice: Math.max(1, price) } : c));
  }

  function resetAll() {
    setCompanies(INITIAL_COMPANIES);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-coral-400 to-orange-400 text-white rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-1">📊 Market Index Simulator</h3>
        <p className="text-orange-100 text-sm">
          Change stock prices below and watch how a <strong>free-float market-cap weighted index</strong> moves.
          This is a simplified teaching model. Real index methodologies have their own rules; all company names and prices below are fictional.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <p className="font-bold mb-2">💡 How Free-Float Market-Cap Weighting Works</p>
        <p><strong>Free-float market cap</strong> = Share Price × Shares Outstanding × Free-Float Factor</p>
        <p className="mt-1"><strong>Free-float factor</strong> = illustrative fraction treated as available to public investors under an index method.</p>
        <p className="mt-1"><strong>Index Value</strong> = Base Value × (Current Total FFMC / Base Total FFMC)</p>
      </div>

      {/* Live index display */}
      <div className={`rounded-2xl p-6 text-center shadow-card ${indexChange >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        <p className="text-sm font-semibold text-gray-500 mb-1">FinQuest Index (Base: 1,000)</p>
        <p className={`text-5xl font-extrabold ${indexChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {indexValue.toFixed(2)}
        </p>
        <p className={`text-lg font-bold mt-1 ${indexChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {indexChange >= 0 ? '▲' : '▼'} {Math.abs(indexChange).toFixed(2)}%
        </p>
        <p className="text-xs text-gray-400 mt-1">Total Market Cap: {formatIndianNumber(totalFFMC * 1e7)}</p>
      </div>

      {/* Price sliders */}
      <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-navy-600">Adjust Stock Prices</h4>
          <button
            onClick={resetAll}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition-colors"
          >
            Reset All
          </button>
        </div>

        {companies.map((company, i) => {
          const w = weights[i];
          const change = ((company.currentPrice - company.initialPrice) / company.initialPrice) * 100;
          return (
            <div key={company.id} className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-bold text-sm" style={{ color: company.color }}>{company.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{company.sector}</span>
                  <span className="text-xs text-gray-400 ml-2">Weight: {w.weight.toFixed(1)}%</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-navy-600">₹{company.currentPrice}</p>
                  <p className={`text-xs font-semibold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {change >= 0 ? '+' : ''}{change.toFixed(1)}%
                  </p>
                </div>
              </div>
              <input
                type="range"
                min={Math.round(company.initialPrice * 0.5)}
                max={Math.round(company.initialPrice * 2)}
                step={5}
                value={company.currentPrice}
                onChange={e => updatePrice(company.id, Number(e.target.value))}
                className="w-full"
                style={{ accentColor: company.color }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹{Math.round(company.initialPrice * 0.5)} (−50%)</span>
                <span>₹{company.initialPrice} (base)</span>
                <span>₹{Math.round(company.initialPrice * 2)} (+100%)</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weight chart */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <h4 className="font-bold text-navy-600 mb-4">Index Weight Distribution</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weights} margin={{ top: 5, right: 10, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis tickFormatter={(v: number) => `${v.toFixed(0)}%`} tick={{ fontSize: 11 }} />
            <Tooltip formatter={(v: any) => `${Number(v || 0).toFixed(2)}%`} />
            <Bar dataKey="weight" name="Weight (%)">
              {weights.map((w, index) => (
                <Cell key={`cell-${index}`} fill={companies[index]?.color ?? '#14253D'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-400 mt-2 text-center italic">
          Larger companies (by free-float market cap) have more influence on index movements
        </p>
      </div>

      {/* Key learning */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="font-bold text-amber-800 mb-2">📚 Key Takeaways</p>
        <ul className="text-sm text-amber-700 space-y-1.5">
          <li>• <strong>Large-cap stocks move the index most</strong> — they have the biggest weight</li>
          <li>• <strong>Not all stocks move together</strong> — an index can rise even if some members fall</li>
          <li>• <strong>Free-float matters</strong> — shares held by promoters/government don't affect tradeable supply</li>
          <li>• <strong>Nifty 50:</strong> base 1,000 on Nov 3, 1995. <strong>Sensex:</strong> base 100 on April 1, 1979</li>
        </ul>
      </div>
    </div>
  );
}
