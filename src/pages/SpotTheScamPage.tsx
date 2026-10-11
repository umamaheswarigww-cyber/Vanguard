// ============================================================
// SPOT THE MUTUAL FUND SCAM — INTERACTIVE EDUCATIONAL SUITE
// Theme: Empowering the Next Generation Through Financial Literacy
// Target: Ages 12+ (Grade 11–12 students in India)
// ============================================================

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import {
  RED_FLAGS, SCAM_SCENARIOS, SCAM_QUIZ_QUESTIONS, EMERGENCY_STEPS,
  type RedFlag, type ScamScenario, type ScamQuizQuestion
} from '@/data/scamData';
import {
  ShieldAlert, ShieldCheck, AlertTriangle, TrendingUp, Clock, Key,
  Wallet, MessageSquare, Download, CheckCircle2, XCircle, RotateCcw,
  Award, ArrowRight, PhoneCall, ExternalLink, HelpCircle, Sparkles,
  Lock, ArrowLeft, Shield, Info
} from 'lucide-react';

export function SpotTheScamPage() {
  const t = useT();

  // Tab State: 'red-flags' | 'spot-the-scam' | 'quiz'
  const [activeTab, setActiveTab] = useState<'red-flags' | 'spot-the-scam' | 'quiz'>('red-flags');

  // Persistence State: Badge Unlocked in localStorage
  const [hasBadge, setHasBadge] = useState<boolean>(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  useEffect(() => {
    try {
      const badgeStatus = localStorage.getItem('scam-spotter-badge');
      const savedScore = localStorage.getItem('scam-spotter-score');
      if (badgeStatus === 'unlocked') {
        setHasBadge(true);
      }
      if (savedScore) {
        setBestScore(Number(savedScore));
      }
    } catch {
      // localStorage may fail in restricted sandboxes
    }
  }, []);

  // ------------------------------------------------------------
  // Tab 2 State: "Spot the Scam" Interactive Chat
  // ------------------------------------------------------------
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [userChatChoice, setUserChatChoice] = useState<'scam' | 'safe' | null>(null);
  const [chatScore, setChatScore] = useState(0);
  const [isChatCompleted, setIsChatCompleted] = useState(false);

  const currentScenario: ScamScenario = SCAM_SCENARIOS[currentScenarioIdx];

  const handleChatAnswer = (choice: 'scam' | 'safe') => {
    if (userChatChoice !== null) return; // Prevent double answer
    setUserChatChoice(choice);
    const isCorrect = (choice === 'scam' && currentScenario.isScam) || (choice === 'safe' && !currentScenario.isScam);
    if (isCorrect) {
      setChatScore(prev => prev + 1);
    }
  };

  const handleNextScenario = () => {
    setUserChatChoice(null);
    if (currentScenarioIdx + 1 < SCAM_SCENARIOS.length) {
      setCurrentScenarioIdx(prev => prev + 1);
    } else {
      setIsChatCompleted(true);
    }
  };

  const handleResetChat = () => {
    setCurrentScenarioIdx(0);
    setUserChatChoice(null);
    setChatScore(0);
    setIsChatCompleted(false);
  };

  // ------------------------------------------------------------
  // Tab 3 State: "Quiz" Multiple-Choice Questions
  // ------------------------------------------------------------
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion: ScamQuizQuestion = SCAM_QUIZ_QUESTIONS[currentQuizIdx];

  const handleQuizAnswer = (optionIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIdx);
    if (optionIdx === currentQuestion.correctIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedOption(null);
    if (currentQuizIdx + 1 < SCAM_QUIZ_QUESTIONS.length) {
      setCurrentQuizIdx(prev => prev + 1);
    } else {
      setIsQuizCompleted(true);
      const finalScore = quizScore + (selectedOption === currentQuestion.correctIndex ? 1 : 0);
      if (finalScore >= 4) {
        setHasBadge(true);
        try {
          localStorage.setItem('scam-spotter-badge', 'unlocked');
          localStorage.setItem('scam-spotter-score', finalScore.toString());
        } catch {
          // Ignore storage error
        }
      }
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setQuizScore(0);
    setIsQuizCompleted(false);
  };

  // Icon Helper for Red Flags
  const renderFlagIcon = (iconName: RedFlag['iconName']) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp size={22} className="text-coral-500" />;
      case 'Clock': return <Clock size={22} className="text-amber-500" />;
      case 'Key': return <Key size={22} className="text-rose-500" />;
      case 'Wallet': return <Wallet size={22} className="text-teal-500" />;
      case 'MessageSquare': return <MessageSquare size={22} className="text-purple-500" />;
      case 'Download': return <Download size={22} className="text-red-500" />;
      case 'ShieldAlert': return <ShieldAlert size={22} className="text-blue-500" />;
      default: return <AlertTriangle size={22} className="text-coral-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 pb-20 space-y-10">
      {/* ============================================================ */}
      {/* 1. HEADER & DISCLAIMER BANNER */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-br from-[#091526] via-[#10243E] to-[#070E1A] text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-navy-700/60 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/learn/stay-financially-safe"
              className="inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span>{t({ en: 'Back to Stay Financially Safe Pillar', te: 'ఆర్థిక భద్రత విభాగానికి వెనుకకు' })}</span>
            </Link>

            {/* Mandatory Educational Disclaimer Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-200 text-xs font-semibold">
              <Info size={13} />
              <span>{t({ en: 'Educational only. Not investment advice.', te: 'విద్యా ప్రయోజనాల కోసం మాత్రమే. పెట్టుబడి సలహా కాదు.' })}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-500/20 text-coral-300 text-xs font-bold border border-coral-500/30 uppercase tracking-wider">
              <ShieldAlert size={14} />
              <span>{t({ en: 'MUTUAL FUND FRAUD DEFENSE', te: 'మ్యూచువల్ ఫండ్ మోసాల రక్షణ' })}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Spot the Mutual Fund Scam
            </h1>
            <p className="text-navy-100 max-w-2xl text-sm sm:text-base leading-relaxed">
              {t({
                en: 'Learn to detect fake WhatsApp stock tips, unauthorized UPI collection traps, countdown FOMO, and unverified SEBI claims before spending a single rupee.',
                te: 'నకిలీ వాట్సాప్ చిట్కాలు, అనధికారిక UPI చెల్లింపులు మరియు మోసపూరిత సెబీ దావాలను గుర్తించడం నేర్చుకోండి.',
              })}
            </p>
          </div>

          {/* Achievement Banner If Badge Unlocked */}
          {hasBadge && (
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-900/80 via-teal-900/80 to-navy-900/80 border border-emerald-400/40 flex items-center justify-between gap-4 shadow-lg animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-2xl shadow-inner">
                  🛡️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-white">Scam Spotter Certified</span>
                    <span className="text-[10px] bg-emerald-400/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/30">
                      LEVEL 1 BADGE
                    </span>
                  </div>
                  <p className="text-xs text-emerald-200 mt-0.5">
                    {t({
                      en: 'You have mastered fraud detection and unlocked the Scam Spotter shield in your profile!',
                      te: 'మీరు మోసాలను గుర్తించడంలో నైపుణ్యం సాధించి స్కామ్ స్పాటర్ బ్యాడ్జ్‌ను గెలుచుకున్నారు!',
                    })}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-300 hidden sm:inline-block">
                Score: {bestScore || 5}/5
              </span>
            </div>
          )}

          {/* 3 Interactive Tabs Navigation */}
          <div className="pt-4 flex flex-wrap gap-2 border-t border-white/10">
            <button
              onClick={() => setActiveTab('red-flags')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'red-flags'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <AlertTriangle size={16} />
              <span>{t({ en: '1. Red Flags (7 Warnings)', te: '1. హెచ్చరిక సంకేతాలు (7)' })}</span>
            </button>

            <button
              onClick={() => setActiveTab('spot-the-scam')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'spot-the-scam'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <MessageSquare size={16} />
              <span>{t({ en: '2. Spot the Scam (Live Simulator)', te: '2. స్కామ్‌ను గుర్తించండి (సిమ్యులేటర్)' })}</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'quiz'
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Award size={16} />
              <span>{t({ en: '3. Fraud Quiz (Earn Badge)', te: '3. క్విజ్ (బ్యాడ్జ్ సాధించండి)' })}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TAB CONTENT PANELS */}
      {/* ============================================================ */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ---------------------------------------------------------- */}
        {/* TAB 1: SEVEN WARNING RED FLAGS */}
        {/* ---------------------------------------------------------- */}
        {activeTab === 'red-flags' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="badge badge-coral">
                {t({ en: 'KNOW THE WARNING SIGNS', te: 'హెచ్చరిక సంకేతాలను తెలుసుకోండి' })}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 font-display">
                7 Major Red Flags of Mutual Fund Fraud
              </h2>
              <p className="text-navy-700 text-sm font-medium">
                {t({
                  en: 'Scammers exploit greed, fear of missing out (FOMO), and ignorance. Learn these 7 patterns to stay protected.',
                  te: 'స్కామర్లు ఆశ మరియు భయాన్ని ఆసరాగా చేసుకుంటారు. మిమ్మల్ని మీరు రక్షించుకోవడానికి ఈ 7 సంకేతాలను గుర్తుంచుకోండి.',
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {RED_FLAGS.map((flag, idx) => (
                <div
                  key={flag.id}
                  className="card p-5 bg-white border border-navy-100 rounded-2xl shadow-card hover:shadow-card-hover card-interactive flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cream-100 border border-navy-100 flex items-center justify-center">
                        {renderFlagIcon(flag.iconName)}
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-navy-50 text-navy-600 uppercase border border-navy-100">
                        Flag #{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-coral-600 block uppercase tracking-wide">
                        {flag.category}
                      </span>
                      <h3 className="text-lg font-bold text-navy-900 font-display">
                        {t(flag.title)}
                      </h3>
                    </div>

                    <p className="text-xs text-navy-700 leading-relaxed font-normal">
                      {t(flag.shortExplanation)}
                    </p>
                  </div>

                  {/* Example Pitch Callout */}
                  <div className="mt-4 pt-3 border-t border-navy-100 bg-rose-50/50 p-3 rounded-xl border border-rose-100/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block mb-1">
                      ⚠️ {t({ en: 'What Fraudsters Say:', te: 'స్కామర్లు ఎలా చెబుతారు:' })}
                    </span>
                    <p className="text-xs text-navy-800 italic leading-snug">
                      {t(flag.examplePitch)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Next Tab CTA */}
            <div className="text-center pt-4">
              <button
                onClick={() => setActiveTab('spot-the-scam')}
                className="btn-primary text-sm py-3 px-6 shadow-md shadow-teal-500/25 cursor-pointer inline-flex items-center gap-2"
              >
                <span>{t({ en: 'Practice: Spot the Scam in Real Chats →', te: 'చాట్లలో స్కామ్‌లను గుర్తించండి →' })}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* TAB 2: SPOT THE SCAM (INTERACTIVE SIMULATED CHATS) */}
        {/* ---------------------------------------------------------- */}
        {activeTab === 'spot-the-scam' && (
          <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
            {!isChatCompleted ? (
              <div className="space-y-5">
                {/* Progress bar and counter */}
                <div className="flex items-center justify-between text-xs font-bold text-navy-700">
                  <span>
                    {t({ en: `Scenario ${currentScenarioIdx + 1} of ${SCAM_SCENARIOS.length}`, te: `సందర్భం ${currentScenarioIdx + 1} / ${SCAM_SCENARIOS.length}` })}
                  </span>
                  <span className="text-teal-600">
                    Score: {chatScore} / {SCAM_SCENARIOS.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-navy-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentScenarioIdx + 1) / SCAM_SCENARIOS.length) * 100}%` }}
                  />
                </div>

                {/* Simulated Phone Frame with Mobile Chat Bubble */}
                <div className="rounded-3xl bg-[#0b1626] border-4 border-navy-800 shadow-2xl overflow-hidden p-1">
                  {/* Smartphone Top Notch / Header */}
                  <div className="bg-[#10223b] px-4 py-3 flex items-center justify-between text-white border-b border-navy-700">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${currentScenario.senderAvatarBg} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                        {currentScenario.senderName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{currentScenario.senderName}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-navy-800 text-teal-300 font-medium">
                            {currentScenario.platform}
                          </span>
                        </div>
                        {currentScenario.senderHandle && (
                          <span className="text-[10px] text-blue-200 block">{currentScenario.senderHandle}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] text-navy-300">{currentScenario.timestamp}</span>
                  </div>

                  {/* Chat Screen Interior */}
                  <div className="bg-[#081220] p-5 min-h-[180px] flex flex-col justify-center">
                    <div className="bg-[#132845] border border-navy-600/60 rounded-2xl p-4 text-white shadow-md max-w-xl">
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal text-navy-50">
                        {currentScenario.messageText}
                      </p>
                      <div className="text-right text-[10px] text-teal-300/80 mt-2 font-mono">
                        {currentScenario.timestamp} ✓✓
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question Prompt */}
                <div className="text-center space-y-1">
                  <h3 className="text-base sm:text-lg font-black text-navy-900 font-display">
                    {t({ en: 'What do you think of this message?', te: 'ఈ సందేశం గురించి మీ అభిప్రాయం ఏమిటి?' })}
                  </h3>
                  <p className="text-xs text-navy-600">
                    {t({ en: 'Analyze the text carefully. Is this a fraudulent attempt or a safe communication?', te: 'సందేశాన్ని విశ్లేషించండి. ఇది మోసమా లేక సురక్షితమైనదా?' })}
                  </p>
                </div>

                {/* Action Buttons: Scam vs Safe */}
                {userChatChoice === null ? (
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleChatAnswer('scam')}
                      className="py-3.5 px-4 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <AlertTriangle size={18} />
                      <span>{t({ en: '🚨 THIS IS A SCAM', te: '🚨 ఇది మోసం' })}</span>
                    </button>
                    <button
                      onClick={() => handleChatAnswer('safe')}
                      className="py-3.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={18} />
                      <span>{t({ en: '✅ LOOKS SAFE', te: '✅ సురక్షితమైనది' })}</span>
                    </button>
                  </div>
                ) : (
                  /* Interactive Feedback Card */
                  <div className="space-y-4 animate-fade-in">
                    {((userChatChoice === 'scam' && currentScenario.isScam) || (userChatChoice === 'safe' && !currentScenario.isScam)) ? (
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                        <CheckCircle2 size={24} className="text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-sm text-emerald-800 block">
                            {t({ en: 'Spot On! You identified this correctly.', te: 'శభాష్! మీరు సరిగ్గా గుర్తించారు.' })}
                          </span>
                          <span className="text-xs text-emerald-700">
                            {currentScenario.isScam
                              ? t({ en: 'This is indeed a dangerous fraudulent scheme.', te: 'ఇది నిజంగానే ఒక ప్రమాదకరమైన మోసపూరిత పథకం.' })
                              : t({ en: 'This is a genuine standard communication.', te: 'ఇది నిజమైన మరియు ప్రామాణికమైన సందేశం.' })}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
                        <XCircle size={24} className="text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-sm text-rose-800 block">
                            {t({ en: 'Watch Out! That was a trap.', te: 'జాగ్రత్త! ఇది ఒక వల.' })}
                          </span>
                          <span className="text-xs text-rose-700">
                            {currentScenario.isScam
                              ? t({ en: 'This was actually a scam message with dangerous red flags.', te: 'ఇది నిజానికి ప్రమాదకరమైన మోసపూరిత సందేశం.' })
                              : t({ en: 'This was actually a safe, verified communication from a legitimate AMC.', te: 'ఇది నిజానికి ఒక సురక్షితమైన మరియు ధృవీకరించబడిన అధికారిక సందేశం.' })}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Red Flag Chips */}
                    <div className="card p-5 bg-white border border-navy-100 rounded-2xl space-y-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-navy-500 block mb-1.5">
                          {t({ en: 'Identified Key Markers:', te: 'గుర్తించబడిన ముఖ్య లక్షణాలు:' })}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentScenario.redFlagChips.map((chip, i) => (
                            <span
                              key={i}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                                currentScenario.isScam
                                  ? 'bg-rose-50 text-rose-700 border-rose-200'
                                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              }`}
                            >
                              {t(chip)}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-navy-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-navy-500 block mb-1">
                          {t({ en: 'Detailed Explanation:', te: 'సవివరమైన వివరణ:' })}
                        </span>
                        <p className="text-xs text-navy-800 leading-relaxed font-normal">
                          {t(currentScenario.explanation)}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 font-medium">
                        💡 <b>{t({ en: 'Rule to Remember: ', te: 'గుర్తుంచుకోవలసిన సూత్రం: ' })}</b>
                        {t(currentScenario.learningPoint)}
                      </div>
                    </div>

                    <button
                      onClick={handleNextScenario}
                      className="btn-primary w-full py-3 text-sm justify-center cursor-pointer shadow-md"
                    >
                      <span>
                        {currentScenarioIdx + 1 < SCAM_SCENARIOS.length
                          ? t({ en: 'Next Scenario →', te: 'తదుపరి సందర్భం →' })
                          : t({ en: 'See Final Results →', te: 'తుది ఫలితాలు చూడండి →' })}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Completion Summary Screen */
              <div className="card p-8 bg-white border border-navy-100 rounded-3xl text-center space-y-5 shadow-xl animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto text-3xl shadow-sm">
                  🎯
                </div>
                <div>
                  <h3 className="text-2xl font-black text-navy-900 font-display">
                    {t({ en: 'Practice Simulation Completed!', te: 'అభ్యాస సిమ్యులేషన్ పూర్తయింది!' })}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-600 mt-1 max-w-md mx-auto">
                    {t({
                      en: 'You tested your fraud-detection radar across realistic SMS, Telegram, and WhatsApp scenarios.',
                      te: 'మీరు వాస్తవిక SMS, టెలిగ్రామ్ మరియు వాట్సాప్ సందర్భాలలో మోసాలను గుర్తించే నైపుణ్యాన్ని పరీక్షించారు.',
                    })}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-100 border border-navy-100 max-w-xs mx-auto">
                  <span className="text-xs font-bold text-navy-600 uppercase block">{t({ en: 'Your Score', te: 'మీ స్కోరు' })}</span>
                  <span className="text-3xl font-black text-teal-600 font-display">
                    {chatScore} / {SCAM_SCENARIOS.length}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <button
                    onClick={handleResetChat}
                    className="btn-secondary text-xs py-2.5 px-5 cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw size={14} />
                    <span>{t({ en: 'Practice Again', te: 'మళ్లీ సాధన చేయండి' })}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className="btn-primary text-xs py-2.5 px-6 shadow-md shadow-teal-500/25 cursor-pointer flex items-center gap-1.5"
                  >
                    <Award size={14} />
                    <span>{t({ en: 'Take Quiz to Earn Badge →', te: 'క్విజ్ రాసి బ్యాడ్జ్ గెలవండి →' })}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------------------------------------------------- */}
        {/* TAB 3: QUIZ (5 QUESTIONS FOR SCAM SPOTTER BADGE) */}
        {/* ---------------------------------------------------------- */}
        {activeTab === 'quiz' && (
          <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
            {!isQuizCompleted ? (
              <div className="space-y-5">
                {/* Quiz Header Tracker */}
                <div className="flex items-center justify-between text-xs font-bold text-navy-700">
                  <span className="flex items-center gap-1.5">
                    <Award size={15} className="text-amber-500" />
                    <span>{t({ en: `Question ${currentQuizIdx + 1} of ${SCAM_QUIZ_QUESTIONS.length}`, te: `ప్రశ్న ${currentQuizIdx + 1} / ${SCAM_QUIZ_QUESTIONS.length}` })}</span>
                  </span>
                  <span className="text-teal-600">
                    Current Score: {quizScore} / {SCAM_QUIZ_QUESTIONS.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-navy-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuizIdx + 1) / SCAM_QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                {/* Question Card */}
                <div className="card p-6 bg-white border border-navy-100 rounded-3xl shadow-card space-y-4">
                  <span className="badge badge-navy text-[10px]">
                    {t({ en: 'FRAUD DEFENSE MASTERY', te: 'మోసాల రక్షణ పరీక్ష' })}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 font-display leading-snug">
                    {t(currentQuestion.question)}
                  </h3>

                  {/* Options List */}
                  <div className="space-y-2.5 pt-2">
                    {currentQuestion.options.map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === currentQuestion.correctIndex;
                      let optionStyles = 'border-navy-100 bg-white hover:border-teal-300 hover:bg-teal-50/20 text-navy-800';

                      if (selectedOption !== null) {
                        if (isCorrect) {
                          optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        } else if (isSelected) {
                          optionStyles = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                        } else {
                          optionStyles = 'border-navy-100 opacity-50 bg-white text-navy-500';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={selectedOption !== null}
                          onClick={() => handleQuizAnswer(idx)}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyles}`}
                        >
                          <span>{t(opt)}</span>
                          {selectedOption !== null && (
                            <span>
                              {isCorrect && <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />}
                              {isSelected && !isCorrect && <XCircle size={18} className="text-rose-600 shrink-0" />}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation Box after answering */}
                  {selectedOption !== null && (
                    <div className="mt-4 pt-4 border-t border-navy-100 space-y-3 animate-fade-in">
                      <div className="p-3.5 rounded-xl bg-teal-50/80 border border-teal-200 text-xs text-navy-800 leading-relaxed font-normal">
                        <span className="font-bold text-teal-800 block mb-1">
                          📘 {t({ en: 'Official Regulatory Guidance:', te: 'అధికారిక మార్గదర్శకాలు:' })}
                        </span>
                        {t(currentQuestion.explanation)}
                      </div>

                      <div className="p-2.5 rounded-xl bg-amber-50 text-[11px] text-amber-900 font-semibold border border-amber-200">
                        ⚡ <b>{t({ en: 'Key Takeaway: ', te: 'ముఖ్య అంశం: ' })}</b>
                        {t(currentQuestion.keyTakeaway)}
                      </div>

                      <button
                        onClick={handleNextQuizQuestion}
                        className="btn-primary w-full py-3 text-sm justify-center cursor-pointer shadow-md"
                      >
                        <span>
                          {currentQuizIdx + 1 < SCAM_QUIZ_QUESTIONS.length
                            ? t({ en: 'Next Question →', te: 'తదుపరి ప్రశ్న →' })
                            : t({ en: 'Complete Quiz & View Badge →', te: 'క్విజ్ ముగించి బ్యాడ్జ్ చూడండి →' })}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Quiz Completion & Badge Award Screen */
              <div className="card p-8 bg-white border border-navy-100 rounded-3xl text-center space-y-6 shadow-xl animate-fade-in">
                {quizScore >= 4 ? (
                  <div className="space-y-4">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto text-4xl shadow-xl shadow-teal-500/30 animate-bounce-soft">
                      🛡️
                    </div>
                    <div>
                      <span className="badge badge-teal mb-2">BADGE UNLOCKED!</span>
                      <h3 className="text-2xl sm:text-3xl font-black text-navy-900 font-display">
                        Congratulations, Scam Spotter!
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-600 mt-1 max-w-md mx-auto">
                        {t({
                          en: 'You scored 4 or more out of 5! You are equipped to recognize online mutual fund traps, verify SEBI licenses, and protect your family.',
                          te: 'మీరు 5 కి 4 లేదా అంతకంటే ఎక్కువ మార్కులు సాధించారు! మీరు స్కామ్‌ల నుండి రక్షించుకునే నైపుణ్యాన్ని సాధించారు.',
                        })}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-3xl shadow-sm">
                      📖
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-display">
                        {t({ en: 'Keep Learning!', te: 'మరింత నేర్చుకోండి!' })}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-600 mt-1 max-w-md mx-auto">
                        {t({
                          en: 'You scored below the 4-point mark. Review the 7 Red Flags and try again to unlock your official Scam Spotter badge!',
                          te: 'బ్యాడ్జ్ సాధించడానికి 4 మార్కులు అవసరం. హెచ్చరిక సంకేతాలను మళ్ళీ పరిశీలించి ప్రయత్నించండి!',
                        })}
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-cream-100 border border-navy-100 max-w-xs mx-auto">
                  <span className="text-xs font-bold text-navy-600 uppercase block">{t({ en: 'Final Quiz Score', te: 'తుది స్కోరు' })}</span>
                  <span className="text-3xl font-black text-navy-900 font-display">
                    {quizScore} / {SCAM_QUIZ_QUESTIONS.length}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <button
                    onClick={handleResetQuiz}
                    className="btn-secondary text-xs py-2.5 px-5 cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw size={14} />
                    <span>{t({ en: 'Retry Quiz', te: 'మళ్లీ ప్రయత్నించండి' })}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('red-flags')}
                    className="btn-ghost text-xs py-2.5 px-4 cursor-pointer"
                  >
                    {t({ en: 'Review 7 Red Flags', te: '7 సంకేతాలను సమీక్షించండి' })}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* 3. EMERGENCY PROTOCOL BOX ("What to Do If You Get Scammed") */}
        {/* ============================================================ */}
        <section className="card p-6 sm:p-8 bg-gradient-to-br from-[#0c1a2e] to-[#07101d] text-white border border-teal-500/30 rounded-3xl shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold border border-rose-500/30 uppercase">
                <AlertTriangle size={13} />
                {t({ en: 'CRITICAL EMERGENCY PROTOCOL', te: 'తక్షణ అత్యవసర చర్యలు' })}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white font-display mt-1">
                {t({ en: 'What to Do If You (or Someone You Know) Gets Scammed', te: 'మీరు లేదా మీ స్నేహితులు మోసపోతే ఏమి చేయాలి?' })}
              </h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-400/20 border border-teal-400/40 text-teal-300 font-mono text-xs font-bold">
              <PhoneCall size={14} />
              <span>HELPLINE: 1930</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EMERGENCY_STEPS.map(step => (
              <div
                key={step.stepNumber}
                className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 space-y-2 card-interactive hover:bg-white/[0.10]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-teal-400/20 text-teal-300 font-bold text-xs flex items-center justify-center border border-teal-400/40">
                    #{step.stepNumber}
                  </span>
                  <h3 className="font-bold text-white text-sm">
                    {t(step.title)}
                  </h3>
                </div>
                <p className="text-xs text-navy-100 leading-relaxed font-normal">
                  {t(step.action)}
                </p>
                {step.contactInfo && (
                  <div className="pt-1 text-xs font-bold text-teal-300 flex items-center gap-1.5">
                    <PhoneCall size={13} />
                    <span>{step.contactInfo}</span>
                  </div>
                )}
                {step.portalUrl && (
                  <div className="pt-1">
                    <a
                      href={step.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-300 hover:text-teal-200 underline"
                    >
                      <span>{t({ en: 'Official Reporting Portal →', te: 'అధికారిక ఫిర్యాదు పోర్టల్ →' })}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 text-center text-xs text-navy-300">
            {t({
              en: 'Remember: In financial cyber fraud, time is everything. Dial 1930 within the first hour of sending money to maximize fund retrieval.',
              te: 'గుర్తుంచుకోండి: సైబర్ మోసాలలో సమయం చాలా విలువైనది. డబ్బు పంపిన మొదటి గంటలోనే 1930 కు కాల్ చేయండి.',
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SpotTheScamPage;
