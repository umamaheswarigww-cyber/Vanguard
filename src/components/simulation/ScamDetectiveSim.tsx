import { useState } from 'react';
import { useT } from '@/context/AppContext';
import { ShieldAlert, CheckCircle, XCircle, RefreshCw, MessageSquare, PhoneCall } from 'lucide-react';
import clsx from 'clsx';

interface ScamCase {
  id: string;
  sender: string;
  platform: 'WhatsApp' | 'SMS' | 'Telegram';
  message: { en: string; te: string };
  options: { text: { en: string; te: string }; isSafe: boolean; explanation: { en: string; te: string } }[];
  redFlags: { en: string; te: string }[];
}

const SCAM_CASES: ScamCase[] = [
  {
    id: 'c1',
    sender: '+91 98765 43210 (Unknown)',
    platform: 'WhatsApp',
    message: {
      en: '⚡ URGENT: Dear Consumer, your Electricity power will be disconnected tonight at 9:30 PM because your previous month bill was not updated. Immediately call our Electricity Officer at 9876543210 or download QuickSupport APK to verify.',
      te: '⚡ అత్యవసరం: ప్రియమైన వినియోగదారు, మీ గత నెల విద్యుత్ బిల్లు అప్‌డేట్ కానందున ఈ రాత్రి 9:30 గంటలకు విద్యుత్ నిలిపివేయబడుతుంది. వెంటనే ఈ నంబర్‌కు కాల్ చేయండి లేదా QuickSupport APK డౌన్‌లోడ్ చేయండి.',
    },
    redFlags: [
      { en: 'Sent from personal mobile number (+91), not official power department header (e.g. TSSPDCL)', te: 'వ్యక్తిగత నంబర్ నుండి వచ్చింది, అధికారిక హెడర్ నుండి కాదు' },
      { en: 'Fake urgency ("tonight at 9:30 PM") to create panic', te: 'భయం కలిగించడానికి తప్పుడు అత్యవసర గడువు' },
      { en: 'Asking to download QuickSupport APK (screen sharing remote access tool)', te: 'స్క్రీన్ షేరింగ్ టూల్ APK డౌన్‌లోడ్ చేయమనడం' },
    ],
    options: [
      {
        text: { en: 'Click the link and download the APK to avoid power cut', te: 'లింక్ నొక్కి APK డౌన్‌లోడ్ చేయడం' },
        isSafe: false,
        explanation: {
          en: 'DANGEROUS! QuickSupport lets the scammer see your phone screen, read incoming OTPs, and steal your bank balance in seconds.',
          te: 'ప్రమాదకరం! ఈ యాప్ ద్వారా మోసగాడు మీ ఫోన్ స్క్రీన్ మరియు OTP లను చూసి డబ్బులు దొంగిలిస్తాడు.',
        },
      },
      {
        text: { en: 'Ignore the message, block the number, and check bill on the official DISCOM app/website', te: 'మెసేజ్ పట్టించుకోకుండా, నంబర్ బ్లాక్ చేసి అధికారిక వెబ్‌సైట్‌లో బిల్ చెక్ చేసుకోవడం' },
        isSafe: true,
        explanation: {
          en: 'CORRECT! Legitimate government utilities never send threats from personal mobile numbers or ask you to install APKs.',
          te: 'సరైన నిర్ణయం! ప్రభుత్వ శాఖలు ఎప్పుడూ వ్యక్తిగత నంబర్ల నుండి బెదిరింపులు పంపవు.',
        },
      },
    ],
  },
  {
    id: 'c2',
    sender: 'Easy_Earn_PartTime_HQ',
    platform: 'Telegram',
    message: {
      en: '🌟 Work from home for students! Earn ₹3,000 to ₹8,000 daily just by liking 5 YouTube videos and giving 5-star Google Map reviews. First test task: Like 3 videos and get ₹150 instantly transferred to your UPI!',
      te: '🌟 విద్యార్థులకు వర్క్ ఫ్రమ్ హోమ్! యూట్యూబ్ వీడియోలు లైక్ చేసి రోజుకు ₹3,000 నుండి ₹8,000 సంపాదించండి. 3 వీడియోలు లైక్ చేసి వెంటనే ₹150 మీ UPI కి పొందండి!',
    },
    redFlags: [
      { en: 'Unrealistic income (₹8,000/day for casual clicking is economically impossible)', te: 'అవాస్తవమైన భారీ ఆదాయ హామీ' },
      { en: 'Initial "bait" payment of ₹150 to gain trust before demanding "prepaid tasks" of ₹5,000+', te: 'నమ్మకం కలిగించడానికి మొదట ₹150 ఎర వేసి ఆపై వేలల్లో డబ్బులు లాగడం' },
      { en: 'Recruiting via anonymous Telegram channels', te: 'గుర్తుతెలియని టెలిగ్రామ్ ఛానెల్స్ ద్వారా సంప్రదించడం' },
    ],
    options: [
      {
        text: { en: 'Join the group and do the first task to get free ₹150', te: 'గ్రూప్‌లో చేరి ₹150 కోసం టాస్క్ చేయడం' },
        isSafe: false,
        explanation: {
          en: 'TRAP! Once they pay you ₹150 to establish trust, they will ask you to deposit ₹5,000 to unlock "VIP tasks", then block you forever.',
          te: 'ఉచ్చు! మొదట ₹150 ఇచ్చి ఆపై ₹5,000 డిపాజిట్ చేయమంటారు, ఆ తర్వాత మిమ్మల్ని బ్లాక్ చేస్తారు.',
        },
      },
      {
        text: { en: 'Recognize the classic "Prepaid Task" scam, block and report to cybercrime.gov.in', te: 'ఇది టాస్క్ స్కామ్ అని గుర్తించి బ్లాక్ చేసి cybercrime.gov.in లో ఫిర్యాదు చేయడం' },
        isSafe: true,
        explanation: {
          en: 'EXCELLENT! No legitimate business pays thousands of rupees for simply tapping "like" buttons.',
          te: 'చాలా మంచిది! కేవలం లైక్ బటన్ నొక్కినందుకు ఎవరూ రోజుకు వేల రూపాయలు చెల్లించరు.',
        },
      },
    ],
  },
];

export function ScamDetectiveSim() {
  const t = useT();
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const activeCase = SCAM_CASES[currentIdx];

  const handleNext = () => {
    setSelectedOpt(null);
    setCurrentIdx((prev) => (prev + 1) % SCAM_CASES.length);
  };

  return (
    <div className="card p-6 md:p-8 bg-white border border-navy-100 shadow-card">
      <div className="pb-4 border-b border-navy-100 flex items-center justify-between">
        <div>
          <span className="badge badge-coral">{t({ en: 'Interactive Investigation', te: 'ఇంటరాక్టివ్ పరిశోధన' })}</span>
          <h3 className="text-2xl font-bold text-navy-600 font-display mt-1">
            {t({ en: 'Scam Detective: Case File', te: 'స్కామ్ డిటెక్టివ్: కేసు పరిశీలన' })} #{currentIdx + 1}
          </h3>
        </div>
        <button
          onClick={handleNext}
          className="btn-ghost text-xs text-navy-400 hover:text-navy-600 flex items-center gap-1"
        >
          <RefreshCw size={14} />
          {t({ en: 'Next Case', te: 'తర్వాతి కేసు' })}
        </button>
      </div>

      {/* Simulated Message Box */}
      <div className="my-6 max-w-lg mx-auto">
        <div className="bg-navy-700 text-white p-3 rounded-t-2xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-teal-400" />
            <span className="font-semibold">{activeCase.sender}</span>
          </div>
          <span className="bg-navy-600 px-2 py-0.5 rounded text-[10px] text-teal-300">{activeCase.platform}</span>
        </div>

        <div className="bg-cream-100 p-5 rounded-b-2xl border-x border-b border-navy-200 text-navy-700 text-sm leading-relaxed shadow-inner-sm">
          {t(activeCase.message)}
        </div>
      </div>

      {/* Choices */}
      <div className="space-y-3 my-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500">
          {t({ en: 'What is your immediate response?', te: 'మీ తక్షణ నిర్ణయం ఏమిటి?' })}
        </h4>

        {activeCase.options.map((opt, idx) => {
          const isSelected = selectedOpt === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedOpt(idx)}
              className={clsx(
                'w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all flex items-start gap-3',
                isSelected
                  ? opt.isSafe
                    ? 'bg-teal-50 border-teal-300 text-teal-800 ring-2 ring-teal-200'
                    : 'bg-coral-50 border-coral-300 text-coral-800 ring-2 ring-coral-200'
                  : 'bg-white border-navy-100 hover:border-teal-300 text-navy-600 hover:bg-cream-50/50'
              )}
            >
              <div className="mt-0.5">
                {isSelected ? (
                  opt.isSafe ? (
                    <CheckCircle size={18} className="text-teal-600" />
                  ) : (
                    <XCircle size={18} className="text-coral-600" />
                  )
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-navy-300" />
                )}
              </div>
              <div className="flex-1">
                <div>{t(opt.text)}</div>
                {isSelected && (
                  <div className="mt-2 text-xs font-normal leading-relaxed pt-2 border-t border-navy-100/50">
                    {t(opt.explanation)}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Red Flags Revealed When Answered */}
      {selectedOpt !== null && (
        <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 text-xs animate-slide-up">
          <h5 className="font-bold text-navy-700 uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-coral-500" />
            {t({ en: 'Warning Signals in this message:', te: 'ఈ మెసేజ్‌లోని ప్రమాద సంకేతాలు:' })}
          </h5>
          <ul className="space-y-1 text-navy-600 list-disc list-inside">
            {activeCase.redFlags.map((flag, idx) => (
              <li key={idx}>{t(flag)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ScamDetectiveSim;
