import { useState } from 'react';
import { useT } from '@/context/AppContext';
import { sipFutureValue, formatINR } from '@/lib/finance/formulas';
import { Calendar, HelpCircle, Layers } from 'lucide-react';
import clsx from 'clsx';

export function SIPCalculator() {
  const t = useT();
  const [monthlyContribution, setMonthlyContribution] = useState<number>(2000);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(12); // 12% p.a. = 1% per month
  const [months, setMonths] = useState<number>(120); // 10 years = 120 instalments
  const [timing, setTiming] = useState<'end' | 'beginning'>('end');

  // Periodic monthly rate
  const monthlyRate = annualReturnRate / 100 / 12;
  const fv = sipFutureValue(monthlyContribution, monthlyRate, months, timing);
  const totalInvested = monthlyContribution * months;
  const potentialWealthGain = fv - totalInvested;

  return (
    <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
      <div className="pb-4 border-b border-navy-100">
        <span className="badge badge-coral">{t({ en: 'Investment Simulator', te: 'పెట్టుబడి సిమ్యులేటర్' })}</span>
        <h3 className="text-2xl font-bold text-navy-600 font-display mt-1">
          {t({ en: 'SIP Future Value Calculator', te: 'SIP భవిష్యత్ విలువ కాలిక్యులేటర్' })}
        </h3>
        <p className="text-sm text-navy-400 mt-0.5">
          {t({
            en: 'Simulate regular monthly mutual fund contributions with transparent timing conventions.',
            te: 'నిర్దిష్ట టైమింగ్ కన్వెన్షన్‌లతో నెలవారీ క్రమబద్ధమైన పెట్టుబడి లెక్కలను చూడండి.',
          })}
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Monthly Contribution', te: 'నెలవారీ పెట్టుబడి' })}
          </label>
          <div className="text-xl font-bold text-teal-600 mb-2">{formatINR(monthlyContribution)}</div>
          <input
            type="range"
            min={500}
            max={20000}
            step={500}
            value={monthlyContribution}
            onChange={e => setMonthlyContribution(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>

        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Assumed Annual Return (%)', te: 'ఊహాత్మక వార్షిక రాబడి (%)' })}
          </label>
          <div className="text-xl font-bold text-navy-600 mb-2">{annualReturnRate}% p.a.</div>
          <input
            type="range"
            min={4}
            max={18}
            step={0.5}
            value={annualReturnRate}
            onChange={e => setAnnualReturnRate(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer"
          />
        </div>

        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Tenure (Months)', te: 'కాలవ్యవధి (నెలలు)' })}
          </label>
          <div className="text-xl font-bold text-coral-500 mb-2">{months} {t({ en: 'Instalments', te: 'వాయిదాలు' })}</div>
          <input
            type="range"
            min={12}
            max={240}
            step={12}
            value={months}
            onChange={e => setMonths(Number(e.target.value))}
            className="w-full accent-coral-400 cursor-pointer"
          />
          <div className="text-[10px] text-navy-400 mt-1">({(months / 12).toFixed(0)} years)</div>
        </div>

        {/* Timing Convention */}
        <div className="p-4 rounded-xl bg-navy-50/70 border border-navy-100">
          <label className="text-xs font-semibold text-navy-500 uppercase block mb-1">
            {t({ en: 'Contribution Timing', te: 'చెల్లింపు సమయం' })}
          </label>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setTiming('end')}
              className={clsx(
                'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all',
                timing === 'end' ? 'bg-navy-600 text-white shadow-sm' : 'bg-white text-navy-600 border border-navy-200'
              )}
            >
              {t({ en: 'End of Month', te: 'నెలాఖరు' })}
            </button>
            <button
              onClick={() => setTiming('beginning')}
              className={clsx(
                'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all',
                timing === 'beginning' ? 'bg-navy-600 text-white shadow-sm' : 'bg-white text-navy-600 border border-navy-200'
              )}
            >
              {t({ en: 'Start of Month', te: 'నెల ప్రారంభం' })}
            </button>
          </div>
          <div className="text-[10px] text-navy-400 mt-2">
            {timing === 'beginning' ? t({ en: 'Annuity Due (× 1+r)', te: 'నెల ప్రారంభం (× 1+r)' }) : t({ en: 'Ordinary Annuity', te: 'సాధారణ అన్యూయిటీ' })}
          </div>
        </div>
      </div>

      {/* Outputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-5 rounded-2xl bg-navy-50 border border-navy-100">
          <span className="text-xs text-navy-400 font-semibold uppercase block">
            {t({ en: 'Total Amount Deposited', te: 'మొత్తం జమ చేసిన మొత్తం' })}
          </span>
          <span className="text-2xl font-bold text-navy-600 mt-1 block">{formatINR(totalInvested)}</span>
          <span className="text-xs text-navy-400">
            {monthlyContribution} × {months} {t({ en: 'months', te: 'నెలలు' })}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200">
          <span className="text-xs text-teal-600 font-semibold uppercase block">
            {t({ en: 'Illustrative Future Value', te: 'ఊహాత్మక భవిష్యత్ విలువ' })}
          </span>
          <span className="text-2xl font-bold text-teal-700 mt-1 block">{formatINR(fv)}</span>
          <span className="text-xs text-teal-600 font-semibold">
            {timing === 'end' ? t({ en: 'Verified end-of-period math', te: 'నెలాఖరు లెక్క' }) : t({ en: 'Verified start-of-period math', te: 'నెల ప్రారంభ లెక్క' })}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-coral-50 border border-coral-200">
          <span className="text-xs text-coral-600 font-semibold uppercase block">
            {t({ en: 'Illustrative Compounding Gain', te: 'ఊహాత్మక లాభం' })}
          </span>
          <span className="text-2xl font-bold text-coral-600 mt-1 block">+{formatINR(potentialWealthGain)}</span>
          <span className="text-xs text-coral-600">
            {((potentialWealthGain / totalInvested) * 100).toFixed(0)}% {t({ en: 'gain on deposits', te: 'రాబడి' })}
          </span>
        </div>
      </div>

      {/* Critical Non-Negotiable Guardrail */}
      <div className="disclaimer bg-coral-50/50 border border-coral-200 text-coral-800">
        ⚠️ <strong>{t({ en: 'EDUCATIONAL GUARDRAIL:', te: 'విద్యా హెచ్చరిక:' })}</strong>{' '}
        {t({
          en: 'This calculator is a hypothetical mathematical formula assuming a constant fixed monthly return rate. Mutual fund returns are market-linked, fluctuate continuously, are NOT guaranteed, and can experience severe downturns. This tool is not financial advice or a return guarantee.',
          te: 'ఈ కాలిక్యులేటర్ స్థిరమైన రాబడి రేటును ఊహించే గణిత నమూనా మాత్రమే. మ్యూచువల్ ఫండ్ రాబడులు మార్కెట్ హెచ్చుతగ్గులపై ఆధారపడి ఉంటాయి మరియు ఎటువంటి గ్యారెంటీ ఉండదు.',
        })}
      </div>
    </div>
  );
}

export default SIPCalculator;
