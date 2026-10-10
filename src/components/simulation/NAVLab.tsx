import { useState } from 'react';
import { useT } from '@/context/AppContext';
import { calculateNAV, formatINR } from '@/lib/finance/formulas';
import { RefreshCw, Calculator, Layers } from 'lucide-react';

interface Holding {
  id: string;
  name: string;
  shares: number;
  pricePerShare: number;
}

const INITIAL_HOLDINGS: Holding[] = [
  { id: 'h1', name: 'Tata Motors (Fictional)', shares: 10000, pricePerShare: 400 },
  { id: 'h2', name: 'Infosys (Fictional)', shares: 8000, pricePerShare: 500 },
  { id: 'h3', name: 'HDFC Bank (Fictional)', shares: 5000, pricePerShare: 600 },
  { id: 'h4', name: 'Cash Reserves in Bank', shares: 1, pricePerShare: 1000000 },
];

export function NAVLab() {
  const t = useT();
  const [holdings, setHoldings] = useState<Holding[]>(INITIAL_HOLDINGS);
  const [liabilities, setLiabilities] = useState<number>(200000); // 2 Lakhs
  const [unitsOutstanding, setUnitsOutstanding] = useState<number>(100000); // 1 Lakh units

  const totalAssets = holdings.reduce((sum, h) => sum + h.shares * h.pricePerShare, 0);
  const netAssets = totalAssets - liabilities;
  const nav = calculateNAV(totalAssets, liabilities, unitsOutstanding);

  const handlePriceChange = (id: string, newPrice: number) => {
    setHoldings(prev => prev.map(h => h.id === id ? { ...h, pricePerShare: newPrice } : h));
  };

  const resetAll = () => {
    setHoldings(INITIAL_HOLDINGS);
    setLiabilities(200000);
    setUnitsOutstanding(100000);
  };

  return (
    <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
      <div className="pb-4 border-b border-navy-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <span className="badge badge-teal">{t({ en: 'Interactive Laboratory', te: 'ఇంటరాక్టివ్ ల్యాబ్' })}</span>
          <h3 className="text-2xl font-bold text-navy-600 font-display mt-1">
            {t({ en: 'Mutual Fund NAV Laboratory', te: 'మ్యూచువల్ ఫండ్ NAV ప్రయోగశాల' })}
          </h3>
          <p className="text-sm text-navy-400 mt-0.5">
            {t({
              en: 'Adjust portfolio asset prices and liabilities to see the Net Asset Value per unit recalculate live.',
              te: 'పోర్ట్‌ఫోలియోలోని షేర్ల ధరలను మార్చి చూసి NAV ఎలా మారుతుందో పరిశీలించండి.',
            })}
          </p>
        </div>

        <button onClick={resetAll} className="btn-ghost text-xs text-navy-400 flex items-center gap-1">
          <RefreshCw size={14} />
          {t({ en: 'Reset', te: 'రీసెట్' })}
        </button>
      </div>

      {/* Live NAV Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-6">
        <div className="p-4 rounded-xl bg-navy-50 border border-navy-100">
          <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Total Scheme Assets', te: 'మొత్తం స్కీమ్ ఆస్తులు' })}</span>
          <span className="text-xl font-bold text-navy-600 mt-1 block">{formatINR(totalAssets)}</span>
        </div>

        <div className="p-4 rounded-xl bg-navy-50 border border-navy-100">
          <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Operating Liabilities', te: 'అప్పులు & ఫీజులు' })}</span>
          <span className="text-xl font-bold text-coral-600 mt-1 block">-{formatINR(liabilities)}</span>
        </div>

        <div className="p-4 rounded-xl bg-navy-50 border border-navy-100">
          <span className="text-xs text-navy-400 uppercase font-semibold block">{t({ en: 'Net Assets', te: 'నికర ఆస్తులు' })}</span>
          <span className="text-xl font-bold text-navy-700 mt-1 block">{formatINR(netAssets)}</span>
        </div>

        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200">
          <span className="text-xs text-teal-600 uppercase font-bold block">{t({ en: 'NAV Per Unit', te: 'ఒక్కో యూనిట్ NAV' })}</span>
          <span className="text-3xl font-extrabold text-teal-700 mt-1 block">₹{nav.toFixed(2)}</span>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="overflow-x-auto">
        <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-3">
          {t({ en: 'Fictional Scheme Holdings', te: 'కల్పిత స్కీమ్ హోల్డింగ్స్' })}
        </h4>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-navy-100 text-xs font-semibold text-navy-400 uppercase">
              <th className="py-2.5 px-3">{t({ en: 'Asset / Stock', te: 'ఆస్తి / స్టాక్' })}</th>
              <th className="py-2.5 px-3">{t({ en: 'Quantity Held', te: 'పరిమాణం' })}</th>
              <th className="py-2.5 px-3">{t({ en: 'Market Price / Unit', te: 'మార్కెట్ ధర' })}</th>
              <th className="py-2.5 px-3 text-right">{t({ en: 'Total Value', te: 'మొత్తం విలువ' })}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50">
            {holdings.map(h => (
              <tr key={h.id} className="hover:bg-cream-50/50">
                <td className="py-3 px-3 font-medium text-navy-600">{h.name}</td>
                <td className="py-3 px-3 text-navy-500">{h.shares.toLocaleString('en-IN')}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-navy-400">₹</span>
                    <input
                      type="number"
                      value={h.pricePerShare}
                      onChange={e => handlePriceChange(h.id, Math.max(0, Number(e.target.value)))}
                      className="w-24 p-1.5 border border-navy-200 rounded-lg text-navy-600 font-semibold focus:outline-none focus:border-teal-400 text-sm"
                    />
                  </div>
                </td>
                <td className="py-3 px-3 text-right font-bold text-navy-700">
                  {formatINR(h.shares * h.pricePerShare)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Math Explanation Formula Box */}
      <div className="p-4 rounded-xl bg-cream-50 border border-navy-100 mt-6 text-xs text-navy-600">
        <div className="font-bold text-navy-700 mb-1 flex items-center gap-1.5">
          <Calculator size={15} />
          {t({ en: 'Mathematical Calculation Breakdown:', te: 'గణిత సూత్రం వివరణ:' })}
        </div>
        <p className="font-mono text-xs text-teal-800">
          NAV = (Total Assets [{formatINR(totalAssets)}] − Liabilities [{formatINR(liabilities)}]) / Units [{unitsOutstanding.toLocaleString('en-IN')}] = ₹{nav.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default NAVLab;
