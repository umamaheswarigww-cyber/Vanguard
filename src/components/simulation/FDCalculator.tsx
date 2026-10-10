import { useState } from 'react';
import { useT } from '@/context/AppContext';
import { fdMaturity, formatINR } from '@/lib/finance/formulas';
import { ShieldCheck } from 'lucide-react';

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
            en: 'Illustration assumes quarterly compounding; actual FD rates, compounding, and terms vary by bank and deposit.',
            te: 'ఉదాహరణలో త్రైమాసిక చక్రవడ్డీని ఊహించాం; నిజమైన FD వడ్డీ రేట్లు, చక్రవడ్డీ, నిబంధనలు బ్యాంకు, డిపాజిట్‌ను బట్టి మారతాయి.',
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
            {t({ en: 'Assumed annual rate (%)', te: 'ఊహించిన వార్షిక రేటు (%)' })}
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
          <span className="font-bold text-navy-700">{t({ en: 'DICGC insurance context: ', te: 'DICGC బీమా సమాచారం: ' })}</span>
          {t({
            en: 'DICGC currently states that eligible deposits in an insured bank are covered up to ₹5,00,000 per depositor per bank in the same right and capacity, including principal and interest. Deposits across branches of the same bank are aggregated. Eligibility and claim conditions apply; check the current DICGC guidance and insured-bank list. This limit does not make an FD risk-free.',
            te: 'బీమా పొందిన బ్యాంకులో అర్హమైన డిపాజిట్లకు ప్రస్తుతం ఒక డిపాజిటర్‌కు, ఒక బ్యాంకులో, ఒకే హక్కు మరియు సామర్థ్యంలో అసలు, వడ్డీ కలిపి ₹5,00,000 వరకు DICGC బీమా వర్తిస్తుందని సంస్థ చెబుతోంది. ఒకే బ్యాంకు శాఖలలోని డిపాజిట్లు కలిపి లెక్కిస్తారు. అర్హత, క్లెయిమ్ షరతులు వర్తిస్తాయి; తాజా DICGC సమాచారం, బీమా పొందిన బ్యాంకుల జాబితాను చూడండి. ఈ పరిమితి FDని రిస్క్ లేనిదిగా చేయదు.',
          })}
          <a className="mt-2 inline-block font-semibold text-teal-700 underline" href="https://www.dicgc.org.in/guide-to-deposit-insurance" target="_blank" rel="noreferrer">{t({ en: 'Current DICGC guidance', te: 'ప్రస్తుత DICGC సమాచారం' })}</a>
        </div>
      </div>
    </div>
  );
}

export default FDCalculator;
