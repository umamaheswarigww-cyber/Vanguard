import { useState } from 'react';
import { useT } from '@/context/AppContext';
import { fdMaturity, formatINR } from '@/lib/finance/formulas';
import { Building, ShieldCheck, AlertTriangle } from 'lucide-react';

export function FDCalculator() {
  const t = useT();
  const [principal, setPrincipal] = useState<number>(50000);
  const [rate, setRate] = useState<number>(7.0); // 7%
  const [tenureYears, setTenureYears] = useState<number>(3); // 3 years

  const rateDecimal = rate / 100;
  const maturityValue = fdMaturity(principal, rateDecimal, tenureYears);
  const totalInterest = maturityValue - principal;

  return (
    <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
      <div className="pb-4 border-b border-navy-100">
        <span className="badge badge-teal">{t({ en: 'Banking Calculator', te: 'బ్యాంకింగ్ కాలిక్యులేటర్' })}</span>
        <h3 className="text-2xl font-bold text-navy-600 font-display mt-1">
          {t({ en: 'Fixed Deposit (FD) Calculator', te: 'ఫిక్స్‌డ్ డిపాజిట్ (FD) కాలిక్యులేటర్' })}
        </h3>
        <p className="text-sm text-navy-400 mt-0.5">
          {t({
            en: 'Standard Indian banking convention: Quarterly compounding (4 times per year).',
            te: 'ప్రామాణిక భారతీయ బ్యాంకింగ్ విధానం: త్రైమాసిక చక్రవడ్డీ (సంవత్సరానికి 4 సార్లు).',
          })}
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Deposit Principal', te: 'డిపాజిట్ అసలు మొత్తం' })}
          </label>
          <div className="text-xl font-bold text-navy-600 mb-2">{formatINR(principal)}</div>
          <input
            type="range"
            min={5000}
            max={200000}
            step={5000}
            value={principal}
            onChange={e => setPrincipal(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>

        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Annual Interest Rate (%)', te: 'వార్షిక వడ్డీ రేటు (%)' })}
          </label>
          <div className="text-xl font-bold text-teal-600 mb-2">{rate.toFixed(1)}% p.a.</div>
          <input
            type="range"
            min={4}
            max={9}
            step={0.1}
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>

        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Tenure (Years)', te: 'కాలపరిమితి (సంవత్సరాలు)' })}
          </label>
          <div className="text-xl font-bold text-navy-600 mb-2">{tenureYears} {t({ en: 'Years', te: 'ఏళ్లు' })}</div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            value={tenureYears}
            onChange={e => setTenureYears(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Output Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider block">
            {t({ en: 'Maturity Amount (at end of tenure)', te: 'మెచ్యూరిటీ మొత్తం' })}
          </span>
          <span className="text-3xl font-extrabold text-teal-700 mt-2 block">
            {formatINR(maturityValue)}
          </span>
          <span className="text-xs text-teal-600 mt-1 block">
            {t({ en: 'Calculated using quarterly compounding: M = P × (1 + r/4)^(4t)', te: 'త్రైమాసిక చక్రవడ్డీతో లెక్కించబడింది' })}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-navy-50 border border-navy-100">
          <span className="text-xs font-bold text-navy-400 uppercase tracking-wider block">
            {t({ en: 'Total Interest Earned', te: 'మొత్తం వచ్చిన వడ్డీ' })}
          </span>
          <span className="text-3xl font-extrabold text-navy-600 mt-2 block">
            {formatINR(totalInterest)}
          </span>
          <span className="text-xs text-navy-400 mt-1 block">
            {t({ en: 'Net gain over initial principal deposit', te: 'ప్రారంభ డిపాజిట్‌పై అదనపు లాభం' })}
          </span>
        </div>
      </div>

      {/* Safety & DICGC Notice */}
      <div className="p-4 rounded-xl bg-cream-50 border border-navy-100 flex items-start gap-3 text-xs text-navy-600 leading-relaxed">
        <ShieldCheck size={20} className="text-teal-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-navy-700">DICGC Insurance Context: </span>
          {t({
            en: 'Deposits in registered scheduled commercial banks in India are insured by the Deposit Insurance and Credit Guarantee Corporation (DICGC, a subsidiary of the RBI) up to ₹5,00,000 per depositor per bank (covering principal + interest). FDs above this limit rely on the individual bank’s solvency.',
            te: 'భారతదేశంలో షెడ్యూల్డ్ బ్యాంకుల డిపాజిట్లు DICGC ద్వారా ఒక బ్యాంకులో ఒక డిపాజిటర్‌కు రూ. 5 లక్షల వరకు బీమా రక్షణ కలిగి ఉంటాయి.',
          })}
        </div>
      </div>
    </div>
  );
}

export default FDCalculator;
