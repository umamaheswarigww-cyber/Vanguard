import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import { ShieldAlert, Dumbbell, Award, CheckCircle, RefreshCw, Sparkles, ArrowRight } from 'lucide-react';
import { ScamDetectiveSim } from '@/components/simulation/ScamDetectiveSim';

const GENERAL_QUIZ = [
  {
    id: 'gq1',
    question: {
      en: 'What is the "Opportunity Cost" of spending ₹1,000 on new shoes right now?',
      te: 'ఇప్పుడే కొత్త బూట్లపై ₹1,000 ఖర్చు చేయడం వల్ల కలిగే "అవకాశ వ్యయం" ఏమిటి?',
    },
    options: [
      { en: 'The next-best alternative you gave up (like saving for a course or emergency)', te: 'మీరు వదులుకున్న ప్రత్యామ్నాయం (కోర్సు లేదా ఎమర్జెన్సీ ఫండ్ కోసం పొదుపు)' },
      { en: 'The ₹1,000 price itself', te: 'ఆ ₹1,000 ధర మాత్రమే' },
      { en: 'The GST tax on shoes', te: 'బూట్లపై పన్ను' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Opportunity cost is whatever valuable option you sacrificed to make this purchase.',
      te: 'అవకాశ వ్యయం అంటే ఈ కొనుగోలు కోసం మీరు త్యాగం చేసిన మరొక విలువైన అవకాశం.',
    },
  },
  {
    id: 'gq2',
    question: {
      en: 'If an investment claims to offer "Guaranteed 50% returns in 30 days", what is it almost certainly?',
      te: '"30 రోజుల్లో 50% గ్యారెంటీ లాభం" అని చెప్పే పథకం ఖచ్చితంగా ఏమిటి?',
    },
    options: [
      { en: 'A secret high-yield government bond', te: 'రహస్య ప్రభుత్వ బాండ్' },
      { en: 'A fraudulent Ponzi or phishing scheme designed to steal your money', te: 'మీ డబ్బును కాజేసే మోసపూరిత పోంజీ లేదా సైబర్ స్కామ్' },
      { en: 'A guaranteed mutual fund', te: 'గ్యారెంటీ మ్యూచువల్ ఫండ్' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Unrealistically high guaranteed returns with no risk is the #1 signature of financial scams.',
      te: 'రిస్క్ లేకుండా విపరీతమైన లాభాల హామీ అనేది మోసాల యొక్క ప్రధాన లక్షణం.',
    },
  },
];

export function PracticePage() {
  const t = useT();
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <section className="bg-hero text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="badge badge-teal mb-2">{t({ en: 'Interactive Arena', te: 'ఇంటరాక్టివ్ అరేనా' })}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
            {t({ en: 'Practice & Skill Challenges', te: 'అభ్యాసం & నైపుణ్య సవాళ్లు' })}
          </h1>
          <p className="text-navy-100 text-sm mt-2 max-w-xl">
            {t({
              en: 'Put your financial decision-making to the test against realistic student scenarios.',
              te: 'వాస్తవిక విద్యార్థి పరిస్థితుల్లో మీ ఆర్థిక నిర్ణయాలను పరీక్షించండి.',
            })}
          </p>
        </div>
      </section>

      {/* Scam Detective Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-navy-600 font-display flex items-center gap-2">
            <ShieldAlert className="text-coral-500" />
            {t({ en: 'Challenge 1: Scam Detective Arena', te: 'సవాలు 1: స్కామ్ డిటెక్టివ్ ఛాలెంజ్' })}
          </h2>
          <p className="text-xs text-navy-400 mt-1">
            {t({
              en: 'Evaluate suspicious digital requests and learn to identify warning signals before clicking.',
              te: 'అనుమానాస్పద మెసేజ్‌లను పరిశీలించి మోసాలను క్లిక్ చేయడానికి ముందే గుర్తించండి.',
            })}
          </p>
        </div>

        <ScamDetectiveSim />
      </section>

      {/* General Financial Challenge Quiz */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mt-12">
        <div>
          <h2 className="text-2xl font-bold text-navy-600 font-display flex items-center gap-2">
            <Dumbbell className="text-teal-500" />
            {t({ en: 'Challenge 2: Multi-Pillar Diagnostic Quiz', te: 'సవాలు 2: సాధారణ నైపుణ్య క్విజ్' })}
          </h2>
        </div>

        <div className="space-y-4">
          {GENERAL_QUIZ.map(q => {
            const selected = quizAnswers[q.id];
            const isAnswered = selected !== undefined;

            return (
              <div key={q.id} className="card p-6 bg-white border border-navy-100 rounded-2xl">
                <h4 className="font-semibold text-navy-700 text-base mb-3">{t(q.question)}</h4>

                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    const isCorrect = q.correctIndex === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: oIdx }))}
                        className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all ${
                          isAnswered
                            ? isCorrect
                              ? 'bg-teal-50 border-teal-300 text-teal-800'
                              : selected === oIdx
                                ? 'bg-coral-50 border-coral-300 text-coral-800'
                                : 'bg-white border-navy-100 text-navy-400'
                            : 'bg-white border-navy-100 hover:border-teal-300 text-navy-600'
                        }`}
                      >
                        {t(opt)}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className="mt-4 p-3 rounded-xl bg-cream-50 border border-navy-100 text-xs text-navy-600">
                    💡 <strong>{selected === q.correctIndex ? 'Correct! ' : 'Explanation: '}</strong>
                    {t(q.explanation)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Challenge 3: Investing Made Simple Masterclass */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-teal-900 text-white p-6 sm:p-8 border border-teal-500/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold">
              <Award size={14} />
              <span>{t({ en: 'Challenge 3: Investing Mastery', te: 'సవాలు 3: పెట్టుబడుల నైపుణ్యం' })}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              {t({ en: 'Investing Made Simple: 5-Question Certification & Sandbox', te: 'సులభమైన పెట్టుబడులు: 5-ప్రశ్నల క్విజ్ & వర్చువల్ సిమ్యులేటర్' })}
            </h3>
            <p className="text-xs sm:text-sm text-navy-200 leading-relaxed">
              {t({
                en: 'Test your understanding of FD, Mutual Funds, and Stocks with real student scenarios, the ABC Bicycle Company case study, and interactive asset allocation.',
                te: 'వాస్తవిక దృశ్యాలు, ABC సైకిల్ కంపెనీ కేస్ స్టడీ మరియు ₹10,000 వర్చువల్ పోర్ట్‌ఫోలియో సిమ్యులేటర్‌తో మీ జ్ఞానాన్ని పరీక్షించుకోండి.'
              })}
            </p>
          </div>
          <Link
            to="/investing-made-simple#quiz"
            className="px-5 py-3 rounded-xl bg-teal-400 text-navy-900 font-bold hover:bg-teal-300 transition text-sm flex items-center gap-2 shrink-0 shadow-lg"
          >
            <span>{t({ en: 'Take Challenge', te: 'సవాలు ప్రారంభించండి' })}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PracticePage;
