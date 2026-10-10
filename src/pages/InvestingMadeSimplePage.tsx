// ============================================================
// FINQUEST INDIA — INVESTING MADE SIMPLE: LEARN BEFORE YOU EARN
// Hackathon Theme: "Empowering the Next Generation Through Financial Literacy"
// Target Audience: Students aged 12–18 (Grade 11–12, Hyderabad context)
// ============================================================

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/context/AppContext';
import {
  Building2, TrendingUp, BarChart3, PieChart, ShieldCheck, AlertTriangle,
  HelpCircle, CheckCircle2, RotateCcw, Target, Sparkles, ArrowRight,
  Info, Award, Clock, Coins, Wallet, Layers, Lock, ShieldAlert
} from 'lucide-react';
import { formatINR } from '@/lib/finance/formulas';

// ---------------------------------------------------------------------------
// Age Learning Path Configurations
// ---------------------------------------------------------------------------
type AgePathKey = '12-14' | '15-16' | '17-18' | 'basics';

interface AgePathInfo {
  title: { en: string; te: string };
  tagline: { en: string; te: string };
  badge: { en: string; te: string };
  badgeColor: string;
  focusTopics: { en: string; te: string }[];
  description: { en: string; te: string };
  relatableStory: { en: string; te: string };
}

const AGE_PATHS: Record<AgePathKey, AgePathInfo> = {
  '12-14': {
    title: { en: 'Ages 12–14: Young Money Explorer', te: 'వయస్సు 12–14: యువ మనీ అన్వేషకుడు' },
    tagline: { en: 'From Pocket Money to Piggy Banks', te: 'పాకెట్ మనీ నుండి పిగ్గీ బ్యాంక్ వరకు' },
    badge: { en: 'Foundation Stage', te: 'పునాది దశ' },
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    focusTopics: [
      { en: 'Managing weekly pocket money and school supplies', te: 'పాకెట్ మనీ మరియు పాఠశాల సామాగ్రి నిర్వహణ' },
      { en: 'Separating Needs (lunch, textbooks) vs Wants (video games, branded shoes)', te: 'అవసరాలు vs కోరికలు గుర్తించడం' },
      { en: 'Safe bank savings accounts vs home piggy banks', te: 'బ్యాంక్ పొదుపు ఖాతాలు vs పిగ్గీ బ్యాంకులు' },
      { en: 'Never sharing OTPs, passwords, or clicking prize links', te: 'OTPలు, పాస్‌వర్డ్‌లను ఎవరితోనూ పంచుకోకపోవడం' },
    ],
    description: {
      en: 'Learn how to take your very first steps in managing money. Discover why saving early gives you super-powers for buying things you love without borrowing.',
      te: 'డబ్బును నిర్వహించడంలో మీ మొదటి అడుగులు వేయడం నేర్చుకోండి. ముందుగానే పొదుపు చేయడం వల్ల అప్పులు చేయకుండా మీకు నచ్చిన వస్తువులను ఎలా కొనుగోలు చేయవచ్చో తెలుసుకోండి.',
    },
    relatableStory: {
      en: 'Ravi gets ₹200 pocket money every week in Hyderabad. If he saves ₹50 each week for 4 months, he can buy his favourite ₹800 cricket bat with his own savings!',
      te: 'రవికి ప్రతి వారం ₹200 పాకెట్ మనీ వస్తుంది. అతను ప్రతి వారం ₹50 చొప్పున 4 నెలలు పొదుపు చేస్తే, తనకు ఇష్టమైన ₹800 క్రికెట్ బ్యాట్‌ను తన సొంత డబ్బుతో కొనుక్కోవచ్చు!',
    },
  },
  '15-16': {
    title: { en: 'Ages 15–16: Teen Finance Builder', te: 'వయస్సు 15–16: టీన్ ఫైనాన్స్ బిల్డర్' },
    tagline: { en: 'Interest, Inflation & Bank Deposits', te: 'వడ్డీ, ద్రవ్యోల్బణం & బ్యాంక్ డిపాజిట్లు' },
    badge: { en: 'Core Learner', te: 'ప్రధాన అభ్యాసకుడు' },
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    focusTopics: [
      { en: 'How bank interest works: Simple vs Compound Interest', te: 'బ్యాంక్ వడ్డీ ఎలా పనిచేస్తుంది: సాధారణ vs చక్రవడ్డీ' },
      { en: 'Why inflation makes things cost more each year', te: 'ద్రవ్యోల్బణం వల్ల ప్రతి సంవత్సరం ధరలు ఎందుకు పెరుగుతాయి' },
      { en: 'Fixed Deposits (FDs) vs Recurring Deposits (RDs)', te: 'ఫిక్స్‌డ్ డిపాజిట్లు (FD) vs రికరింగ్ డిపాజిట్లు (RD)' },
      { en: 'First look at what shares and mutual funds actually are', te: 'షేర్లు మరియు మ్యూచువల్ ఫండ్స్ ప్రాథమిక పరిచయం' },
    ],
    description: {
      en: 'Step into the world of growing your money. Understand how banks reward you with interest for saving, why inflation silently shrinks cash, and what safety means.',
      te: 'డబ్బును పెంచుకునే ప్రపంచంలోకి అడుగు పెట్టండి. పొదుపు చేసినందుకు బ్యాంకులు వడ్డీ ఎలా ఇస్తాయో మరియు ద్రవ్యోల్బణం డబ్బు విలువను ఎలా తగ్గిస్తుందో తెలుసుకోండి.',
    },
    relatableStory: {
      en: 'Ananya saves ₹1,000 from tutoring junior kids. If she locks it in a 1-year Bank FD at 6.5%, she earns ₹65 interest safely while preparing for Class 10 board exams.',
      te: 'అనన్య చిన్న పిల్లలకు ట్యూషన్ చెప్పి ₹1,000 పొదుపు చేసింది. దానిని 6.5% వడ్డీతో 1 సంవత్సరం బ్యాంక్ FDలో ఉంచితే, ₹65 వడ్డీని సురక్షితంగా సంపాదిస్తుంది.',
    },
  },
  '17-18': {
    title: { en: 'Ages 17–18: Young Adult Investor Ready', te: 'వయస్సు 17–18: యువ పెట్టుబడిదారుడు' },
    tagline: { en: 'Diversification, Mutual Funds & Stock Markets', te: 'వైవిధ్యీకరణ, మ్యూచువల్ ఫండ్స్ & స్టాక్ మార్కెట్లు' },
    badge: { en: 'Advanced Mastery', te: 'అధునాతన నైపుణ్యం' },
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    focusTopics: [
      { en: 'Diversification: The science of not putting all eggs in one basket', te: 'వైవిధ్యీకరణ: అన్ని గుడ్లను ఒకే బుట్టలో పెట్టకపోవడం' },
      { en: 'Mutual Funds: NAV, Expense Ratios, Active vs Index Funds', te: 'మ్యూచువల్ ఫండ్స్: NAV, వ్యయ నిష్పత్తి, ఇండెక్స్ ఫండ్స్' },
      { en: 'Stock Market basics: Buying fractional ownership in real companies', te: 'స్టాక్ మార్కెట్: కంపెనీలలో వాటా యాజమాన్యం' },
      { en: 'Matching investments to goals: 1-year bike vs 5-year college degree', te: 'లక్ష్యాలకు తగిన పెట్టుబడులు' },
    ],
    description: {
      en: 'Prepare for independent adult life. Learn how mutual funds pool money, why individual stocks carry higher risks, and how long-term compounding builds real financial independence.',
      te: 'స్వతంత్ర ఆర్థిక జీవితానికి సిద్ధం కండి. మ్యూచువల్ ఫండ్లు డబ్బును ఎలా సమీకరిస్తాయో మరియు దీర్ఘకాలిక చక్రవడ్డీ సంపదను ఎలా నిర్మిస్తుందో నేర్చుకోండి.',
    },
    relatableStory: {
      en: 'Kiran (17) is planning for college tuition in 4 years. He learns that while stocks can fluctuate wildly, a diversified approach helps balance safety and growth.',
      te: 'కిరణ్ (17) నాలుగేళ్ల తర్వాత కాలేజీ ఫీజు కోసం ప్లాన్ చేస్తున్నాడు. షేర్లు ఎక్కువగా ఒడుదొడుకులకు లోనవుతాయని, వైవిధ్యీకరణ ద్వారా సమతుల్యత సాధించవచ్చని నేర్చుకుంటాడు.',
    },
  },
  'basics': {
    title: { en: 'Start from the Basics (Any Age)', te: 'ప్రాథమిక అంశాల నుండి ప్రారంభించండి' },
    tagline: { en: 'Zero Prerequisites Required', te: 'ఎలాంటి ముందస్తు జ్ఞానం అవసరం లేదు' },
    badge: { en: 'Open to Everyone', te: 'అందరికీ అందుబాటులో ఉంది' },
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    focusTopics: [
      { en: 'What is money and how does it move?', te: 'డబ్బు అంటే ఏమిటి మరియు అది ఎలా పనిచేస్తుంది?' },
      { en: 'Why leaving cash under a mattress loses purchasing power', te: 'డబ్బును ఇంట్లోనే ఉంచితే కొనుగోలు శక్తి ఎందుకు తగ్గుతుంది?' },
      { en: 'The three big options: Fixed Deposits, Mutual Funds, and Stocks', te: 'మూడు ప్రధాన మార్గాలు: FDలు, మ్యూచువల్ ఫండ్స్, షేర్లు' },
      { en: 'The golden rule: Higher possible returns always come with higher uncertainty', te: 'బంగారు సూత్రం: ఎక్కువ రాబడితో పాటు ఎక్కువ రిస్క్ కూడా ఉంటుంది' },
    ],
    description: {
      en: 'No prior finance knowledge? Perfect! This beginner-friendly track explains financial concepts step-by-step using everyday analogies like bicycles, tiffin boxes, and cricket.',
      te: 'ముందుగా ఎలాంటి ఆర్థిక పరిజ్ఞానం లేదా? ఫర్వాలేదు! సైకిళ్లు, టిఫిన్ బాక్సులు మరియు క్రికెట్ వంటి సరళమైన ఉదాహరణలతో దశలవారీగా నేర్చుకోండి.',
    },
    relatableStory: {
      en: 'Whether you are 12 or 18, understanding money before you earn your first rupee ensures you never fall for scams or bad financial traps.',
      te: 'మీ వయస్సు 12 అయినా 18 అయినా, మీరు మొదటి రూపాయి సంపాదించడానికి ముందే డబ్బు గురించి తెలుసుకోవడం వల్ల మోసాల బారిన పడకుండా ఉంటారు.',
    },
  },
};

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export function InvestingMadeSimplePage() {
  const t = useT();

  // Selected age learning path
  const [selectedAgePath, setSelectedAgePath] = useState<AgePathKey>('15-16');

  // ABC Bicycle Company simulation toggle
  const [abcScenario, setAbcScenario] = useState<'gain' | 'loss'>('gain');

  // "Match Money to Goals" Tool State
  const [selectedGoal, setSelectedGoal] = useState<'bag' | 'bicycle' | 'laptop' | 'college'>('laptop');
  const [goalTimeframe, setGoalTimeframe] = useState<'months' | '1year' | '2years' | '5years'>('2years');
  const [needEasyAccess, setNeedEasyAccess] = useState<'yes' | 'somewhat' | 'no'>('somewhat');
  const [riskComfort, setRiskComfort] = useState<'none' | 'small' | 'moderate'>('small');

  // Safe Investment Simulation Game State
  const [simFDPercent, setSimFDPercent] = useState<number>(40);
  const [simMFPercent, setSimMFPercent] = useState<number>(40);
  const [simStockPercent, setSimStockPercent] = useState<number>(20);
  const [simScenario, setSimScenario] = useState<'normal' | 'bull' | 'bear' | 'stagflation'>('normal');
  const [simTenure, setSimTenure] = useState<number>(3); // years

  // Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Normalize percentages to total 100%
  const totalAllocated = simFDPercent + simMFPercent + simStockPercent;
  const VIRTUAL_INITIAL = 10000; // ₹10,000 starting virtual balance

  // Simulated Outcome Calculation (Transparent Mathematical Models)
  const simulationResults = useMemo(() => {
    const fdAlloc = (VIRTUAL_INITIAL * simFDPercent) / 100;
    const mfAlloc = (VIRTUAL_INITIAL * simMFPercent) / 100;
    const stockAlloc = (VIRTUAL_INITIAL * simStockPercent) / 100;

    // FD: Always constant 6.5% p.a. quarterly compounded (hypothetical bank rate)
    const fdRate = 0.065;
    const fdFinal = fdAlloc * Math.pow(1 + fdRate / 4, 4 * simTenure);

    // Mutual Fund & Stock annual rates by scenario
    let mfAnnual = 0.09;
    let stockAnnual = 0.12;
    let explanation = '';

    if (simScenario === 'normal') {
      mfAnnual = 0.09; // +9% p.a.
      stockAnnual = 0.11; // +11% p.a.
      explanation = 'In a steady economy, businesses grow moderately. The diversified fund delivers steady returns while ABC Bicycle Company performs in line with industry average.';
    } else if (simScenario === 'bull') {
      mfAnnual = 0.16; // +16% p.a.
      stockAnnual = 0.28; // +28% p.a.
      explanation = 'In a high-growth bull market, strong consumer demand causes ABC Bicycle Company\'s sales to soar. The diversified fund also rises strongly, while the FD continues at its fixed rate.';
    } else if (simScenario === 'bear') {
      mfAnnual = -0.04; // -4% p.a.
      stockAnnual = -0.18; // -18% p.a.
      explanation = 'In a market downturn, ABC Bicycle Company suffers from high raw material costs and lower demand, dropping sharply. The diversified mutual fund also dips, but its varied basket cushions the fall. The FD provides stable positive interest.';
    } else if (simScenario === 'stagflation') {
      mfAnnual = 0.02; // +2% p.a.
      stockAnnual = -0.06; // -6% p.a.
      explanation = 'In slow growth with high inflation, production costs rise. Single company stock declines, while the diversified fund barely keeps pace. The FD gains in nominal rupees but may lag real inflation.';
    }

    const mfFinal = mfAlloc * Math.pow(1 + mfAnnual, simTenure);
    const stockFinal = stockAlloc * Math.pow(1 + stockAnnual, simTenure);
    const finalTotal = fdFinal + mfFinal + stockFinal;
    const totalGainLoss = finalTotal - VIRTUAL_INITIAL;
    const percentGainLoss = (totalGainLoss / VIRTUAL_INITIAL) * 100;

    return {
      fdAlloc,
      fdFinal,
      fdGain: fdFinal - fdAlloc,
      mfAlloc,
      mfFinal,
      mfGain: mfFinal - mfAlloc,
      stockAlloc,
      stockFinal,
      stockGain: stockFinal - stockAlloc,
      finalTotal,
      totalGainLoss,
      percentGainLoss,
      explanation,
    };
  }, [simFDPercent, simMFPercent, simStockPercent, simScenario, simTenure]);

  // Quiz Questions
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      question: {
        en: 'What is the fundamental difference between a Bank Fixed Deposit (FD) and buying a stock?',
        te: 'బ్యాంక్ ఫిక్స్‌డ్ డిపాజిట్ (FD) మరియు స్టాక్ కొనుగోలు మధ్య ప్రాథమిక తేడా ఏమిటి?',
      },
      options: [
        { en: 'An FD pays agreed fixed interest for a set tenure; a stock represents ownership in a company with uncertain, fluctuating returns.', te: 'FD స్థిర వడ్డీని చెల్లిస్తుంది; స్టాక్ అనేది అనిశ్చిత రాబడితో కూడిన కంపెనీ యాజమాన్యాన్ని సూచిస్తుంది.' },
        { en: 'Stocks are guaranteed by the government, while FDs are not.', te: 'స్టాక్‌లకు ప్రభుత్వం గ్యారెంటీ ఇస్తుంది, FDలకు ఇవ్వదు.' },
        { en: 'FDs can never be withdrawn under any circumstances.', te: 'FDలను ఎట్టి పరిస్థితుల్లోనూ వెనక్కి తీసుకోలేరు.' },
        { en: 'There is no difference between them.', te: 'వాటి మధ్య ఎలాంటి తేడా లేదు.' },
      ],
      correctIndex: 0,
      explanation: {
        en: 'Correct! An FD is a bank contract where you earn interest for lending your money, while a stock is fractional ownership where profits depend on business performance.',
        te: 'సరైన సమాధానం! FD అనేది వడ్డీ ఇచ్చే బ్యాంక్ డిపాజిట్, కానీ స్టాక్ అనేది కంపెనీలో యాజమాన్యం.',
      },
    },
    {
      id: 2,
      question: {
        en: 'Why is a mutual fund generally less dependent on the success of one single company than buying that company\'s stock?',
        te: 'ఒకే కంపెనీ షేర్ కొనడం కంటే మ్యూచువల్ ఫండ్ ఎందుకు ఒకే కంపెనీపై ఆధారపడదు?',
      },
      options: [
        { en: 'Mutual funds pool money to invest across a diversified basket of dozens of different companies.', te: 'మ్యూచువల్ ఫండ్లు అనేక కంపెనీల వైవిధ్యభరితమైన బాస్కెట్‌లో పెట్టుబడి పెడతాయి.' },
        { en: 'Mutual funds only invest in government savings bonds.', te: 'మ్యూచువల్ ఫండ్లు ప్రభుత్వ పొదుపు బాండ్లలో మాత్రమే పెట్టుబడి పెడతాయి.' },
        { en: 'Mutual fund managers predict the future with 100% accuracy.', te: 'మ్యూచువల్ ఫండ్ మేనేజర్లు భవిష్యత్తును 100% ఖచ్చితంగా ఊహిస్తారు.' },
        { en: 'Mutual funds are completely free of all risks.', te: 'మ్యూచువల్ ఫండ్లకు ఎటువంటి రిస్క్ ఉండదు.' },
      ],
      correctIndex: 0,
      explanation: {
        en: 'Correct! Through diversification, if one company in a 50-stock mutual fund fails, the remaining 49 companies cushion the impact.',
        te: 'సరైన సమాధానం! వైవిధ్యీకరణ ద్వారా ఒక కంపెనీ నష్టపోయినా మిగిలిన కంపెనీలు ప్రభావాన్ని తగ్గిస్తాయి.',
      },
    },
    {
      id: 3,
      question: {
        en: 'What happens if you withdraw money from a Fixed Deposit before its maturity date?',
        te: 'మెచ్యూరిటీ తేదీకి ముందే ఫిక్స్‌డ్ డిపాజిట్ నుండి డబ్బును ఉపసంహరించుకుంటే ఏమి జరుగుతుంది?',
      },
      options: [
        { en: 'Banks usually charge a premature withdrawal penalty and reduce the interest rate earned.', te: 'బ్యాంకులు సాధారణంగా ముందస్తు ఉపసంహరణ పెనాల్టీని వసూలు చేస్తాయి మరియు వడ్డీ రేటును తగ్గిస్తాయి.' },
        { en: 'The police are called immediately.', te: 'వెంటనే పోలీసులకు ఫిర్యాదు చేస్తారు.' },
        { en: 'The bank doubles your deposit as a reward.', te: 'బ్యాంక్ మీ డిపాజిట్‌ను రెట్టింపు చేస్తుంది.' },
        { en: 'Nothing changes; you get full interest with zero penalty.', te: 'ఎలాంటి పెనాల్టీ లేకుండా పూర్తి వడ్డీ లభిస్తుంది.' },
      ],
      correctIndex: 0,
      explanation: {
        en: 'Correct! FDs are designed to be locked for the chosen tenure. Early withdrawals usually incur a premature penalty fee or lower effective interest rate.',
        te: 'సరైన సమాధానం! ముందస్తు ఉపసంహరణలకు బ్యాంకులు పెనాల్టీ విధిస్తాయి లేదా వడ్డీని తగ్గిస్తాయి.',
      },
    },
    {
      id: 4,
      question: {
        en: 'If you need ₹15,000 for your college entrance examination fee in exactly 2 months, which factor is most crucial?',
        te: 'ఖచ్చితంగా 2 నెలల్లో కాలేజీ ప్రవేశ పరీక్ష ఫీజు కోసం ₹15,000 అవసరమైతే, ఏ అంశం అత్యంత కీలకమైనది?',
      },
      options: [
        { en: 'Capital stability and easy access (liquidity) without exposure to short-term market drops.', te: 'స్వల్పకాలిక మార్కెట్ నష్టాలకు గురికాకుండా మూలధన స్థిరత్వం మరియు సులభమైన లిక్విడిటీ.' },
        { en: 'Putting all of it into high-risk individual stocks hoping it triples in 60 days.', te: '60 రోజుల్లో మూడు రెట్లు పెరుగుతుందనే ఆశతో అధిక రిస్క్ షేర్లలో పెట్టడం.' },
        { en: 'Locking it in a 5-year tax saver fixed deposit.', te: '5 ఏళ్ల లాక్-ఇన్ ఉన్న డిపాజిట్‌లో పెట్టడం.' },
        { en: 'Giving it to an unknown person on WhatsApp promising guaranteed double returns.', te: 'డబ్బు రెట్టింపు చేస్తానని వాట్సాప్‌లో చెప్పే గుర్తుతెలియని వ్యక్తికి ఇవ్వడం.' },
      ],
      correctIndex: 0,
      explanation: {
        en: 'Correct! Money needed for immediate, essential goals should never be exposed to short-term market volatility. High liquidity and safety are paramount.',
        te: 'సరైన సమాధానం! స్వల్పకాలిక అత్యవసర ఫీజులకు మూలధన రక్షణ మరియు లిక్విడిటీ అత్యంత ముఖ్యం.',
      },
    },
    {
      id: 5,
      question: {
        en: 'Can diversification in mutual funds or stocks completely eliminate ALL investment risk?',
        te: 'మ్యూచువల్ ఫండ్స్ లేదా స్టాక్స్‌లో వైవిధ్యీకరణ అన్ని రకాల పెట్టుబడి నష్టాలను పూర్తిగా తొలగించగలదా?',
      },
      options: [
        { en: 'No. Diversification reduces company-specific risk, but market-wide downturns can still cause portfolio values to drop.', te: 'లేదు. వైవిధ్యీకరణ నిర్దిష్ట కంపెనీ రిస్క్‌ను తగ్గిస్తుంది, కానీ మొత్తం మార్కెట్ పడిపోయినప్పుడు నష్టాలు రావచ్చు.' },
        { en: 'Yes, diversification guarantees 100% positive returns in every single year.', te: 'అవును, వైవిధ్యీకరణ ప్రతి సంవత్సరం 100% లాభాలకు హామీ ఇస్తుంది.' },
        { en: 'Yes, because mutual funds are insured by the government like bank deposits.', te: 'అవును, మ్యూచువల్ ఫండ్లకు ప్రభుత్వం నుండి పూర్తి బీమా ఉంటుంది.' },
        { en: 'No, diversification actually increases risk by 100 times.', te: 'లేదు, వైవిధ్యీకరణ రిస్క్‌ను 100 రెట్లు పెంచుతుంది.' },
      ],
      correctIndex: 0,
      explanation: {
        en: 'Correct! While diversification protects against any single company collapsing, macro-economic conditions can cause the overall market to decline.',
        te: 'సరైన సమాధానం! వైవిధ్యీకరణ కంపెనీ రిస్క్‌ను తగ్గిస్తుంది, కానీ మార్కెట్ పతనాల నుండి 100% రక్షించలేదు.',
      },
    },
  ];

  const handleSelectQuizOption = (questionIdx: number, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  }, [quizAnswers]);

  return (
    <div className="space-y-16 pb-20 bg-cream-50 min-h-screen">
      {/* ============================================================ */}
      {/* HERO SECTION WITH REALISTIC GENERATED VISUAL */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-navy-600/50">
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-coral-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold tracking-wider uppercase border border-teal-400/30">
              <Sparkles size={14} className="text-teal-300" />
              {t({ en: 'THEME: EMPOWERING NEXT GENERATION', te: 'థీమ్: తదుపరి తరం సాధికారత' })}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display leading-tight text-white">
              {t({
                en: 'Investing Made Simple: Learn Before You Earn',
                te: 'పెట్టుబడులు సులభంగా: సంపాదించడానికి ముందే నేర్చుకోండి',
              })}
            </h1>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed font-normal">
              {t({
                en: 'Designed specifically for students aged 12–18 in Hyderabad and across India. Demystify Fixed Deposits (FDs), Mutual Funds, and Stocks through relatable stories, zero-risk virtual games, and honest trade-offs.',
                te: 'హైదరాబాద్ మరియు భారతదేశంలోని 12–18 సంవత్సరాల విద్యార్థుల కోసం ప్రత్యేకంగా రూపొందించబడింది. స్థిర డిపాజిట్లు, మ్యూచువల్ ఫండ్లు మరియు షేర్లను రిస్క్ లేని సిమ్యులేషన్ల ద్వారా సులభంగా అర్థం చేసుకోండి.',
              })}
            </p>

            {/* Guardrail Disclaimer Badge */}
            <div className="p-3.5 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-start gap-3 text-amber-200 text-xs leading-relaxed max-w-xl">
              <ShieldAlert size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>{t({ en: 'Strict Educational Guardrail: ', te: 'ముఖ్యమైన విద్యా గమనిక: ' })}</strong>
                {t({
                  en: 'This is an educational platform, NOT financial advice. We do not recommend any specific stocks, mutual funds, or products. All examples are strictly hypothetical.',
                  te: 'ఇది కేవలం అవగాహన కోసం రూపొందించిన వేదిక, పెట్టుబడి సలహా కాదు. మేము ఎటువంటి నిర్దిష్ట షేర్లు లేదా ఫండ్లను సిఫార్సు చేయము.',
                })}
              </span>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#learning-paths" className="btn-teal text-xs py-2.5 px-5">
                {t({ en: 'Choose Age Path', te: 'వయస్సు మార్గాన్ని ఎంచుకోండి' })}
              </a>
              <a href="#four-cards" className="btn-secondary text-xs py-2.5 px-5 border-white/20 text-white bg-white/10 hover:bg-white/20">
                {t({ en: 'Explore The Big 3 Options', te: '3 ప్రధాన పెట్టుబడి సాధనాలు' })}
              </a>
              <a href="#virtual-sim" className="btn-coral text-xs py-2.5 px-5">
                {t({ en: 'Play Virtual ₹10K Game', te: '₹10,000 వర్చువల్ గేమ్ ఆడండి' })}
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-3xl overflow-hidden border-2 border-teal-400/30 shadow-2xl bg-navy-900/80">
              <img
                src="/images/hero_students.jpg"
                alt="Indian Students Learning Finance Together in Hyderabad"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback if image path is adjusting
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wide">
                    {t({ en: 'Classroom to Real Life', te: 'తరగతి గది నుండి నిజ జీవితం' })}
                  </span>
                </div>
                <p className="text-xs text-blue-100 leading-snug">
                  {t({
                    en: 'Grade 11–12 students discovering how ₹500 saved today compounds into financial freedom tomorrow.',
                    te: 'ఈ రోజు పొదుపు చేసిన ₹500 రేపటి ఆర్థిక స్వేచ్ఛగా ఎలా మారుతుందో విద్యార్థులు తెలుసుకుంటున్నారు.',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ============================================================ */}
        {/* SECTION 1: CHOOSE YOUR LEARNING PATH (AGES 12–18) */}
        {/* ============================================================ */}
        <section id="learning-paths" className="space-y-6 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="badge badge-teal">{t({ en: 'Tailored for Every Stage', te: 'ప్రతి దశకు అనుకూలం' })}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-600 font-display">
              {t({ en: 'Choose Your Learning Path', te: 'మీ అభ్యాస మార్గాన్ని ఎంచుకోండి' })}
            </h2>
            <p className="text-gray-600 text-sm">
              {t({
                en: 'Everyone starts from different points. Select your age or start from the absolute basics with friendly, relatable Indian examples.',
                te: 'మీ వయస్సును బట్టి సరైన మార్గాన్ని ఎంచుకోండి లేదా ప్రాథమిక అంశాల నుండి ప్రారంభించండి.',
              })}
            </p>
          </div>

          {/* Age Path Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(Object.keys(AGE_PATHS) as AgePathKey[]).map((key) => {
              const path = AGE_PATHS[key];
              const isSelected = selectedAgePath === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedAgePath(key)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-navy-600 text-white border-navy-600 shadow-md ring-2 ring-teal-400'
                      : 'bg-white text-navy-600 border-gray-200 hover:border-teal-400 hover:bg-cream-100'
                  }`}
                >
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border mb-2 inline-block ${
                    isSelected ? 'bg-teal-400 text-navy-900 border-teal-300' : path.badgeColor
                  }`}>
                    {t(path.badge)}
                  </span>
                  <p className="font-bold text-sm leading-tight mb-1">{t(path.title)}</p>
                  <p className={`text-xs ${isSelected ? 'text-blue-200' : 'text-gray-500'}`}>
                    {t(path.tagline)}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Path Card */}
          {(() => {
            const current = AGE_PATHS[selectedAgePath];
            return (
              <div className="bg-white rounded-3xl border border-gray-200 shadow-card p-6 md:p-8 space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-600">{t(current.title)}</h3>
                    <p className="text-xs text-teal-600 font-semibold mt-0.5">{t(current.tagline)}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-xl">
                    {t({ en: 'Adaptive Difficulty: Active', te: 'అనుకూల కష్టతరం: యాక్టివ్' })}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Focus Topics */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {t({ en: 'What You Will Learn In This Track:', te: 'ఈ మార్గంలో మీరు ఏమి నేర్చుకుంటారు:' })}
                    </h4>
                    <ul className="space-y-2">
                      {current.focusTopics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-navy-600">
                          <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                          <span>{t(topic)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Relatable Hyderabad Story */}
                  <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wide">
                      <Target size={16} className="text-teal-600" />
                      <span>{t({ en: 'Relatable Story Scenario', te: 'వాస్తవిక కథా దృష్టాంతం' })}</span>
                    </div>
                    <p className="text-xs text-teal-900 leading-relaxed font-medium">
                      {t(current.relatableStory)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: THE FOUR MAIN LEARNING CARDS */}
        {/* ============================================================ */}
        <section id="four-cards" className="space-y-10 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="badge badge-coral">{t({ en: 'Core Concepts', te: 'ప్రధాన కాన్సెప్ట్‌లు' })}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-600 font-display">
              {t({ en: 'The Three Big Ways Money Grows (And How They Differ)', te: 'డబ్బు పెరిగే మూడు ప్రధాన మార్గాలు' })}
            </h2>
            <p className="text-gray-600 text-sm">
              {t({
                en: 'Before investing your hard-earned rupee, you must know how each product works, what can go wrong, and what protections exist.',
                te: 'పెట్టుబడి పెట్టే ముందు ప్రతి సాధనం ఎలా పనిచేస్తుందో, అందులోని లాభనష్టాలు మరియు రక్షణల గురించి తెలుసుకోవాలి.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ---------------- CARD A: FIXED DEPOSIT ---------------- */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-card hover:shadow-card-hover transition-all flex flex-col overflow-hidden">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 relative">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-1 rounded-full border border-white/20 inline-block mb-2">
                  {t({ en: 'Lower Relative Risk', te: 'తక్కువ సాపేక్ష రిస్క్' })}
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Building2 size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t({ en: 'Fixed Deposits (FDs)', te: 'స్థిర డిపాజిట్లు (FDలు)' })}</h3>
                    <p className="text-xs text-teal-100">{t({ en: 'Lending to a bank for fixed interest', te: 'స్థిర వడ్డీకి బ్యాంకుకు రుణం ఇవ్వడం' })}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-xs text-gray-600">
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong>{t({ en: 'How it works: ', te: 'ఇది ఎలా పనిచేస్తుంది: ' })}</strong>
                    {t({
                      en: 'You deposit money with a bank for a set timeframe (e.g., 6 months to 5 years). In return, the bank agrees to pay a fixed interest rate.',
                      te: 'మీరు ఒక నిర్ణీత కాలానికి బ్యాంకులో డబ్బు జమ చేస్తారు. అందుకు బదులుగా బ్యాంక్ స్థిర వడ్డీని చెల్లిస్తుంది.',
                    })}
                  </p>

                  <div className="bg-teal-50 p-3.5 rounded-xl border border-teal-200 text-teal-900 space-y-1">
                    <span className="font-bold text-[11px] uppercase tracking-wide block">
                      {t({ en: 'Relatable Student Example:', te: 'విద్యార్థి ఉదాహరణ:' })}
                    </span>
                    <p>
                      {t({
                        en: 'Pooja deposits ₹1,000 for 1 year at 6.5% interest. At maturity, the bank returns her ₹1,000 principal + ₹65 interest = ₹1,065.',
                        te: 'పూజ ₹1,000 ను 1 సంవత్సరం పాటు 6.5% వడ్డీతో డిపాజిట్ చేసింది. మెచ్యూరిటీ సమయానికి ఆమెకు ₹1,065 లభిస్తుంది.',
                      })}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <p><strong>{t({ en: 'FD vs Savings Account: ', te: 'FD vs సేవింగ్స్ ఖాతా: ' })}</strong>
                      {t({
                        en: 'A savings account lets you withdraw money via ATM anytime but pays lower interest. An FD locks money for higher fixed interest.',
                        te: 'సేవింగ్స్ ఖాతాలో ఎప్పుడైనా డబ్బు తీసుకోవచ్చు కానీ తక్కువ వడ్డీ వస్తుంది. FDలో డబ్బు లాక్ అవుతుంది కానీ ఎక్కువ వడ్డీ వస్తుంది.',
                      })}
                    </p>
                    <p><strong>{t({ en: 'Premature Withdrawal: ', te: 'ముందస్తు ఉపసంహరణ: ' })}</strong>
                      {t({
                        en: 'If you break an FD early, banks charge a penalty (usually 0.5%–1% rate cut).',
                        te: 'గడువుకు ముందే FDని రద్దు చేస్తే బ్యాంకులు పెనాల్టీ విధిస్తాయి.',
                      })}
                    </p>
                    <p><strong>{t({ en: 'Safety Context: ', te: 'భద్రతా వివరాలు: ' })}</strong>
                      {t({
                        en: 'In India, deposits in scheduled banks are insured up to ₹5 Lakh per depositor per bank by DICGC (RBI subsidiary). Safety depends on institution compliance.',
                        te: 'భారతదేశంలో షెడ్యూల్డ్ బ్యాంకులలోని డిపాజిట్లకు DICGC ద్వారా ₹5 లక్షల వరకు బీమా ఉంటుంది.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                    {t({ en: 'Best For: Known expenses within 1–3 years', te: 'అనువైనది: 1–3 సంవత్సరాల ఖర్చులు' })}
                  </span>
                </div>
              </div>
            </div>

            {/* ---------------- CARD B: MUTUAL FUNDS ---------------- */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-card hover:shadow-card-hover transition-all flex flex-col overflow-hidden">
              <div className="bg-gradient-to-br from-coral-500 to-coral-600 text-white p-6 relative">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-1 rounded-full border border-white/20 inline-block mb-2">
                  {t({ en: 'Moderate / Varying Risk', te: 'మధ్యస్థ / మారుతున్న రిస్క్' })}
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                    <PieChart size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t({ en: 'Mutual Funds', te: 'మ్యూచువల్ ఫండ్లు' })}</h3>
                    <p className="text-xs text-coral-100">{t({ en: 'Pooled money managed professionally', te: 'పూల్ చేసిన డబ్బును వృత్తిపరంగా నిర్వహించడం' })}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-xs text-gray-600">
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong>{t({ en: 'How it works: ', te: 'ఇది ఎలా పనిచేస్తుంది: ' })}</strong>
                    {t({
                      en: 'Thousands of small savers pool money together. A qualified SEBI-registered Fund Manager invests this pool into a diversified basket of 30–60 companies or bonds.',
                      te: 'వేలాది మంది చిన్న పెట్టుబడిదారులు డబ్బును ఒకచోట చేరుస్తారు. ప్రొఫెషనల్ ఫండ్ మేనేజర్ ఈ డబ్బును 30–60 కంపెనీలలో విస్తరించి పెట్టుబడి పెడతారు.',
                    })}
                  </p>

                  <div className="bg-coral-50 p-3.5 rounded-xl border border-coral-200 text-coral-900 space-y-1">
                    <span className="font-bold text-[11px] uppercase tracking-wide block">
                      {t({ en: 'The Basket Analogy:', te: 'గుడ్ల బుట్ట ఉదాహరణ:' })}
                    </span>
                    <p>
                      {t({
                        en: '"Don\'t put all eggs in one basket." If you hold 1 egg (1 stock) and drop it, it smashes. If you hold a basket of 40 eggs, breaking one won\'t ruin your breakfast.',
                        te: 'అన్ని గుడ్లను ఒకే బుట్టలో పెట్టకండి. 40 కంపెనీల ఫండ్‌లో ఒక కంపెనీ నష్టపోయినా మొత్తం పెట్టుబడి మునిగిపోదు.',
                      })}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <p><strong>{t({ en: 'NAV (Net Asset Value): ', te: 'NAV (నికర ఆస్తి విలువ): ' })}</strong>
                      {t({
                        en: 'The per-unit price of the mutual fund, recalculated every market day after trading ends.',
                        te: 'మ్యూచువల్ ఫండ్ యొక్క ఒక్కో యూనిట్ ధర. ప్రతి ట్రేడింగ్ రోజు సాయంత్రం లెక్కించబడుతుంది.',
                      })}
                    </p>
                    <p><strong>{t({ en: 'Fund Types: ', te: 'ఫండ్ రకాలు: ' })}</strong>
                      {t({
                        en: 'Equity funds (invest in company shares — higher risk/growth), Debt funds (invest in bonds — lower risk/stability), Hybrid (balanced mix of both).',
                        te: 'ఈక్విటీ ఫండ్లు (షేర్లలో), డెట్ ఫండ్లు (బాండ్లలో), హైబ్రిడ్ ఫండ్లు (రెండింటి మిశ్రమం).',
                      })}
                    </p>
                    <p className="text-red-600 font-semibold">
                      ⚠️ {t({
                        en: 'Returns are NOT guaranteed. Mutual fund values can decline during market downturns.',
                        te: 'రాబడులకు ఎటువంటి గ్యారెంటీ ఉండదు. మార్కెట్ పతనాల సమయంలో ఫండ్ విలువ తగ్గవచ్చు.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-coral-700 bg-coral-50 px-2.5 py-1 rounded-lg">
                    {t({ en: 'Best For: Medium to long-term goals (3–7+ years)', te: 'అనువైనది: 3–7+ సంవత్సరాల దీర్ఘకాలిక లక్ష్యాలు' })}
                  </span>
                </div>
              </div>
            </div>

            {/* ---------------- CARD C: STOCKS (ABC BICYCLE CO) ---------------- */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-card hover:shadow-card-hover transition-all flex flex-col overflow-hidden">
              <div className="bg-gradient-to-br from-navy-700 to-navy-900 text-white p-6 relative">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-1 rounded-full border border-white/20 inline-block mb-2">
                  {t({ en: 'Higher Relative Risk', te: 'ఎక్కువ సాపేక్ష రిస్క్' })}
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                    <TrendingUp size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t({ en: 'Stocks or Shares', te: 'స్టాక్స్ లేదా షేర్లు' })}</h3>
                    <p className="text-xs text-blue-200">{t({ en: 'Owning a slice of a single business', te: 'ఒకే వ్యాపారంలో భాగస్వామ్యం పొందడం' })}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-xs text-gray-600">
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong>{t({ en: 'What a share is: ', te: 'షేర్ అంటే ఏమిటి: ' })}</strong>
                    {t({
                      en: 'A share is a tiny ownership certificate. When you buy 1 share of a company, you are a co-owner of that business. If it succeeds, you may gain; if it fails, you can lose money.',
                      te: 'షేర్ అంటే కంపెనీలో ఒక చిన్న యాజమాన్య హక్కు. వ్యాపారం లాభపడితే మీకు లాభం వస్తుంది, నష్టపోతే మీ డబ్బు తగ్గుతుంది.',
                    })}
                  </p>

                  {/* Fictional ABC Bicycle Company Interactive Box */}
                  <div className="bg-blue-50/80 p-3.5 rounded-2xl border border-blue-200 text-navy-800 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[11px] uppercase tracking-wide text-blue-900">
                        {t({ en: 'Fictional Case: ABC Bicycle Co.', te: 'కల్పిత ఉదాహరణ: ABC బైసైకిల్ కంపెనీ' })}
                      </span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setAbcScenario('gain')}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            abcScenario === 'gain' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {t({ en: 'Boom 📈', te: 'లాభం 📈' })}
                        </button>
                        <button
                          onClick={() => setAbcScenario('loss')}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            abcScenario === 'loss' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {t({ en: 'Slump 📉', te: 'నష్టం 📉' })}
                        </button>
                      </div>
                    </div>

                    {abcScenario === 'gain' ? (
                      <div className="text-[11px] text-green-900 bg-green-50 p-2.5 rounded-xl border border-green-200">
                        <p className="font-bold">Scenario A (Gain): Hit E-Bike Launch</p>
                        <p className="mt-0.5">
                          ABC Bicycle invents a ₹15,000 electric bicycle popular across Telangana schools. Sales jump 40%. The share price rises from <strong>₹100 to ₹145</strong> + ₹4 dividend!
                        </p>
                      </div>
                    ) : (
                      <div className="text-[11px] text-red-900 bg-red-50 p-2.5 rounded-xl border border-red-200">
                        <p className="font-bold">Scenario B (Loss): Raw Material Crisis</p>
                        <p className="mt-0.5">
                          Steel prices double and competitor imports flood the market. ABC Bicycle makes zero profit this year. The share price drops from <strong>₹100 to ₹65</strong>!
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <p><strong>{t({ en: 'Why prices change: ', te: 'ధరలు ఎందుకు మారతాయి: ' })}</strong>
                      {t({
                        en: 'Prices move every second on exchanges (NSE/BSE) based on quarterly profits, management decisions, customer demand, and market mood.',
                        te: 'లాభాలు, యాజమాన్య నిర్ణయాలు మరియు మార్కెట్ పరిస్థితుల ఆధారంగా సెకన్ల వ్యవధిలో ధరలు మారతాయి.',
                      })}
                    </p>
                    <p className="text-red-600 font-semibold">
                      ⚠️ {t({
                        en: 'Zero guarantees. Investing in single stocks carries high company-specific risk. Short-term prices cannot be reliably predicted.',
                        te: 'ఎటువంటి గ్యారెంటీ ఉండదు. ఒకే కంపెనీలో పెట్టుబడి పెట్టడం వల్ల అధిక రిస్క్ ఉంటుంది.',
                      })}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-navy-800 bg-navy-100 px-2.5 py-1 rounded-lg">
                    {t({ en: 'Best For: Advanced learners with long horizon (7+ years)', te: 'అనువైనది: 7+ ఏళ్ల దీర్ఘకాలిక అవగాహన ఉన్నవారు' })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- CARD D: DETAILED COMPARISON TABLE ---------------- */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-card p-6 md:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="text-xl font-bold text-navy-600">
                  {t({ en: 'Side-by-Side Comparison: Compare All Three', te: 'మూడు సాధనాల ముఖాముఖి పోలిక' })}
                </h3>
                <p className="text-xs text-gray-500">
                  {t({ en: 'No single option is universally best. Each option serves different goals and timeframes.', te: 'ఏ ఒక్కటీ అందరికీ సరిపోదు; లక్ష్యాన్ని బట్టి సరైనదాన్ని ఎంచుకోవాలి.' })}
                </p>
              </div>
              <span className="badge badge-navy text-[11px]">
                {t({ en: 'Universal Matrix', te: 'ప్రామాణిక పట్టిక' })}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-navy-600 text-white">
                    <th className="p-3 font-bold rounded-tl-xl">{t({ en: 'Feature', te: 'అంశం' })}</th>
                    <th className="p-3 font-bold">{t({ en: 'Fixed Deposit (FD)', te: 'స్థిర డిపాజిట్ (FD)' })}</th>
                    <th className="p-3 font-bold">{t({ en: 'Mutual Funds (MF)', te: 'మ్యూచువల్ ఫండ్లు' })}</th>
                    <th className="p-3 font-bold rounded-tr-xl">{t({ en: 'Individual Stocks', te: 'వ్యక్తిగత షేర్లు' })}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-cream-50">
                    <td className="p-3 font-bold text-navy-600">{t({ en: 'How it works', te: 'ఎలా పనిచేస్తుంది' })}</td>
                    <td className="p-3">{t({ en: 'Contractual deposit with bank at agreed rate', te: 'నిర్ణీత వడ్డీకి బ్యాంక్ వద్ద డిపాజిట్' })}</td>
                    <td className="p-3">{t({ en: 'Pooled fund invested across 30–60 companies/bonds', te: 'అనేక కంపెనీలలో విస్తరించిన ఫండ్' })}</td>
                    <td className="p-3">{t({ en: 'Direct ownership of 1 specific business', te: 'ఒకే కంపెనీలో నేరుగా వాటా' })}</td>
                  </tr>
                  <tr className="hover:bg-cream-50 bg-gray-50/50">
                    <td className="p-3 font-bold text-navy-600">{t({ en: 'Relative Risk', te: 'సాపేక్ష రిస్క్' })}</td>
                    <td className="p-3 text-teal-700 font-bold">{t({ en: 'Lower relative risk', te: 'తక్కువ సాపేక్ష రిస్క్' })}</td>
                    <td className="p-3 text-coral-600 font-bold">{t({ en: 'Moderate or varying (depends on fund type)', te: 'మధ్యస్థ లేదా మారుతూ ఉంటుంది' })}</td>
                    <td className="p-3 text-red-600 font-bold">{t({ en: 'Higher risk (company specific)', te: 'అధిక రిస్క్ (ఒకే కంపెనీ)' })}</td>
                  </tr>
                  <tr className="hover:bg-cream-50">
                    <td className="p-3 font-bold text-navy-600">{t({ en: 'Possible Return', te: 'సంభావ్య రాబడి' })}</td>
                    <td className="p-3">{t({ en: 'Fixed nominal interest (e.g. 5.5%–7.5% p.a.)', te: 'స్థిరమైన నామమాత్రపు వడ్డీ' })}</td>
                    <td className="p-3">{t({ en: 'Market-linked, variable (equity funds higher potential)', te: 'మార్కెట్‌తో ముడిపడి ఉన్న రాబడి' })}</td>
                    <td className="p-3">{t({ en: 'Unlimited upside potential or sharp loss', te: 'భారీ లాభాలు లేదా భారీ నష్టాలు' })}</td>
                  </tr>
                  <tr className="hover:bg-cream-50 bg-gray-50/50">
                    <td className="p-3 font-bold text-navy-600">{t({ en: 'Access to Money (Liquidity)', te: 'డబ్బు లభ్యత' })}</td>
                    <td className="p-3">{t({ en: 'Locked for tenure. Penalty for premature exit.', te: 'నిర్ణీత కాలానికి లాక్. ముందస్తు ఉపసంహరణకు పెనాల్టీ.' })}</td>
                    <td className="p-3">{t({ en: 'Open-ended funds allow redemption in 1–3 business days.', te: '1–3 రోజుల్లో విక్రయించవచ్చు.' })}</td>
                    <td className="p-3">{t({ en: 'Can sell during exchange hours (T+1 settlement).', te: 'మార్కెట్ వేళల్లో అమ్మవచ్చు (T+1).' })}</td>
                  </tr>
                  <tr className="hover:bg-cream-50">
                    <td className="p-3 font-bold text-navy-600">{t({ en: 'Protection & Guarantees', te: 'రక్షణ & గ్యారెంటీలు' })}</td>
                    <td className="p-3">{t({ en: 'DICGC insurance up to ₹5L per depositor per bank.', te: 'DICGC ద్వారా ₹5 లక్షల వరకు బీమా.' })}</td>
                    <td className="p-3">{t({ en: 'NO guarantee. Ring-fenced assets safe from AMC debt.', te: 'గ్యారెంటీ లేదు. ఆస్తులు సురక్షితం.' })}</td>
                    <td className="p-3">{t({ en: 'ZERO guarantee. Shareholder bears business risk.', te: 'ఎటువంటి గ్యారెంటీ ఉండదు.' })}</td>
                  </tr>
                  <tr className="hover:bg-cream-50 bg-gray-50/50">
                    <td className="p-3 font-bold text-navy-600">{t({ en: 'Time Horizon', te: 'సమయ పరిమితి' })}</td>
                    <td className="p-3">{t({ en: 'Short to medium term (7 days to 5 years)', te: 'స్వల్ప నుండి మధ్యస్థ కాలం' })}</td>
                    <td className="p-3">{t({ en: 'Debt: 1–3 yrs; Equity: 5–7+ yrs', te: 'డెట్: 1–3 ఏళ్లు; ఈక్విటీ: 5–7+ ఏళ్లు' })}</td>
                    <td className="p-3">{t({ en: 'Long term (7+ years recommended)', te: 'దీర్ఘకాలం (7+ సంవత్సరాలు)' })}</td>
                  </tr>
                  <tr className="hover:bg-cream-50">
                    <td className="p-3 font-bold text-navy-600">{t({ en: 'Important Things to Check', te: 'తనిఖీ చేయాల్సిన అంశాలు' })}</td>
                    <td className="p-3">{t({ en: 'Interest rate, compounding frequency, premature penalty.', te: 'వడ్డీ రేటు, పెనాల్టీ నిబంధనలు' })}</td>
                    <td className="p-3">{t({ en: 'Expense ratio (TER), fund manager track record, fund category.', te: 'వ్యయ నిష్పత్తి (TER), ఫండ్ కేటగిరీ' })}</td>
                    <td className="p-3">{t({ en: 'Financial statements, company debt levels, valuation (P/E).', te: 'లాభనష్టాలు, రుణాల స్థాయి, P/E' })}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed">
              <strong>💡 {t({ en: 'Crucial Takeaway for Students: ', te: 'విద్యార్థులు గుర్తుంచుకోవాల్సిన విషయం: ' })}</strong>
              {t({
                en: 'Never view any single option as "the best". A smart saver uses an FD for next term\'s school fees and explores mutual funds for goals that are 7 years away.',
                te: 'ఏ ఒక్క ఎంపికను ఉత్తమమైనదిగా భావించవద్దు. సమీప ఫీజులకు FD మరియు దీర్ఘకాలిక లక్ష్యాలకు మ్యూచువల్ ఫండ్లను ఎంచుకోవడం వివేకం.',
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: INTERACTIVE "WHAT DOES RISK MEAN?" STUDIO */}
        {/* ============================================================ */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="badge badge-navy">{t({ en: 'Core Theory Made Visual', te: 'ప్రాథమిక సిద్ధాంతం దృశ్యరూపంలో' })}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-600 font-display">
              {t({ en: 'What Does "Risk" Actually Mean?', te: '"రిస్క్" అంటే వాస్తవానికి ఏమిటి?' })}
            </h2>
            <p className="text-gray-600 text-sm">
              {t({
                en: 'Risk does not just mean losing all your money. In finance, risk is the possibility that the real outcome differs from what you planned.',
                te: 'రిస్క్ అంటే కేవలం డబ్బు పోవడం మాత్రమే కాదు; మనం ఊహించిన ఫలితం కంటే వాస్తవ ఫలితం భిన్నంగా ఉండే అవకాశం.',
              })}
            </p>
          </div>

          {/* 3-Student Analogy Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-3xl bg-teal-50 border border-teal-200 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">A</span>
                <span className="font-bold text-sm text-teal-900">{t({ en: 'Student A (Rahul)', te: 'విద్యార్థి A (రాహుల్)' })}</span>
              </div>
              <p className="text-xs text-teal-800 leading-relaxed">
                {t({
                  en: 'Puts ₹2,000 into a 1-year Bank FD at 6.5%. He knows with near-certainty that he will receive ₹2,130 in 12 months. Low risk, but modest return that barely beats inflation.',
                  te: '₹2,000 ను 1 సంవత్సరం బ్యాంక్ FDలో ఉంచాడు. 12 నెలల తర్వాత ₹2,130 వస్తుందని అతనికి ఖచ్చితంగా తెలుసు. తక్కువ రిస్క్, స్థిరమైన రాబడి.',
                })}
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-coral-50 border border-coral-200 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-coral-500 text-white font-bold flex items-center justify-center text-xs">B</span>
                <span className="font-bold text-sm text-coral-900">{t({ en: 'Student B (Priya)', te: 'విద్యార్థి B (ప్రియ)' })}</span>
              </div>
              <p className="text-xs text-coral-800 leading-relaxed">
                {t({
                  en: 'Puts ₹2,000 into a diversified index fund holding 50 companies. Her value moves between ₹1,800 and ₹2,400 over the year. Moderate risk, higher long-term growth potential.',
                  te: '₹2,000 ను 50 కంపెనీల ఇండెక్స్ ఫండ్‌లో పెట్టింది. ఏడాదిలో ఆమె విలువ ₹1,800 నుండి ₹2,400 మధ్య మారుతుంది. మధ్యస్థ రిస్క్, మెరుగైన వృద్ధి.',
                })}
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-blue-50 border border-blue-200 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-navy-600 text-white font-bold flex items-center justify-center text-xs">C</span>
                <span className="font-bold text-sm text-blue-900">{t({ en: 'Student C (Karthik)', te: 'విద్యార్థి C (కార్తీక్)' })}</span>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                {t({
                  en: 'Puts ₹2,000 entirely into 1 startup stock. It could jump to ₹3,500 if sales take off, or crash to ₹800 if competitors copy them. Highest uncertainty and high risk.',
                  te: '₹2,000 మొత్తాన్ని ఒకే కంపెనీ షేర్‌లో పెట్టాడు. కంపెనీ క్లిక్ అయితే ₹3,500 కావచ్చు, లేదంటే ₹800 కి పడిపోవచ్చు. అత్యధిక అనిశ్చితి.',
                })}
              </p>
            </div>
          </div>

          {/* 6 Essential Financial Vocabulary Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: { en: '1. Risk', te: '1. రిస్క్' },
                desc: { en: 'Possibility that your return will differ from expected, including losing some money.', te: 'ఆశించిన ఫలితం కంటే భిన్నంగా వచ్చే అవకాశం.' },
                icon: AlertTriangle,
                color: 'text-amber-500',
              },
              {
                title: { en: '2. Return', te: '2. రాబడి' },
                desc: { en: 'The money gained or lost on an investment, usually measured as an annual percentage.', te: 'పెట్టుబడిపై వచ్చే లాభం లేదా నష్టం.' },
                icon: TrendingUp,
                color: 'text-green-500',
              },
              {
                title: { en: '3. Liquidity', te: '3. లిక్విడిటీ' },
                desc: { en: 'How quickly and easily you can convert an asset into spendable rupees without heavy penalties.', te: 'ఆస్తిని ఎంత త్వరగా నగదుగా మార్చగలరో తెలిపే గుణం.' },
                icon: Coins,
                color: 'text-blue-500',
              },
              {
                title: { en: '4. Diversification', te: '4. వైవిధ్యీకరణ' },
                desc: { en: 'Spreading money across multiple assets to prevent one single failure from wiping you out.', te: 'అన్ని గుడ్లను ఒకే బుట్టలో పెట్టకుండా రిస్క్ తగ్గించడం.' },
                icon: Layers,
                color: 'text-purple-500',
              },
              {
                title: { en: '5. Inflation', te: '5. ద్రవ్యోల్బణం' },
                desc: { en: 'The ongoing rise in prices over years. ₹100 today buys fewer samosas 5 years from now.', te: 'ధరల పెరుగుదల వల్ల డబ్బు కొనుగోలు శక్తి తగ్గడం.' },
                icon: Clock,
                color: 'text-coral-500',
              },
              {
                title: { en: '6. Compounding', te: '6. చక్రవడ్డీ' },
                desc: { en: 'Earning returns on your previous returns. Einstein famously called it the 8th wonder of the world.', te: 'వడ్డీపై వడ్డీ సంపాదించే అద్భుత శక్తి.' },
                icon: Sparkles,
                color: 'text-teal-500',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Icon size={18} className={item.color} />
                    <h4 className="font-bold text-xs text-navy-600">{t(item.title)}</h4>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{t(item.desc)}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: "MATCH MONEY TO GOALS" INTERACTIVE TOOL */}
        {/* ============================================================ */}
        <section className="bg-white rounded-3xl border border-gray-200 shadow-card p-6 md:p-8 space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="badge badge-teal mb-1">{t({ en: 'Interactive Exercise', te: 'ఇంటరాక్టివ్ అభ్యాసం' })}</span>
            <h2 className="text-2xl font-bold text-navy-600 font-display">
              {t({ en: 'Match Money to Goals: Critical Thinking Activity', te: 'లక్ష్యాలకు తగిన డబ్బును కేటాయించండి' })}
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              {t({
                en: 'Select your dream goal and constraints below to see what trade-offs you should consider before saving or investing.',
                te: 'మీ లక్ష్యాన్ని మరియు కాలపరిమితిని ఎంచుకుని సరైన విద్యా మార్గదర్శకత్వాన్ని పొందండి.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 1. Goal Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy-600">{t({ en: '1. Select Your Goal', te: '1. మీ లక్ష్యం' })}</label>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value as any)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 bg-cream-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                <option value="bag">🎒 School Bag / Uniform (₹800)</option>
                <option value="bicycle">🚲 Geared Bicycle (₹6,000)</option>
                <option value="laptop">💻 Coding Laptop (₹40,000)</option>
                <option value="college">🎓 College Tuition Fee (₹1.5 Lakh)</option>
              </select>
            </div>

            {/* 2. Timeframe Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy-600">{t({ en: '2. Time Horizon', te: '2. సమయ పరిమితి' })}</label>
              <select
                value={goalTimeframe}
                onChange={(e) => setGoalTimeframe(e.target.value as any)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 bg-cream-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                <option value="months">⏳ 2–3 Months (Very Short)</option>
                <option value="1year">🗓️ 1 Year (Short Term)</option>
                <option value="2years">📅 2–3 Years (Medium Term)</option>
                <option value="5years">🚀 5+ Years (Long Term)</option>
              </select>
            </div>

            {/* 3. Need Easy Access? */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy-600">{t({ en: '3. Easy Cash Access?', te: '3. తక్షణ నగదు అవసరమా?' })}</label>
              <select
                value={needEasyAccess}
                onChange={(e) => setNeedEasyAccess(e.target.value as any)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 bg-cream-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                <option value="yes">⚡ Yes, must be liquid anytime</option>
                <option value="somewhat">⚖️ Somewhat, can lock for months</option>
                <option value="no">🔒 No, can lock for years</option>
              </select>
            </div>

            {/* 4. Risk Comfort */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-navy-600">{t({ en: '4. How you feel about dips?', te: '4. నష్టాన్ని భరించగలరా?' })}</label>
              <select
                value={riskComfort}
                onChange={(e) => setRiskComfort(e.target.value as any)}
                className="w-full text-xs p-2.5 rounded-xl border border-gray-300 bg-cream-50 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              >
                <option value="none">🛡️ Cannot tolerate any loss (Safety 1st)</option>
                <option value="small">🌱 Can handle minor short-term dips</option>
                <option value="moderate">📈 Can tolerate volatility for growth</option>
              </select>
            </div>
          </div>

          {/* Dynamic Educational Guidance Result Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 space-y-3">
            <div className="flex items-center gap-2 text-teal-800">
              <Info size={18} className="text-teal-600" />
              <h4 className="font-bold text-sm">{t({ en: 'Educational Trade-Off Guidance:', te: 'విద్యా మార్గదర్శకత్వం:' })}</h4>
            </div>

            <div className="space-y-2 text-xs text-navy-700 leading-relaxed">
              {goalTimeframe === 'months' && (
                <p>
                  • <strong>Short-term Priority:</strong> Because this money is needed in just a few months, <strong>capital stability and immediate access</strong> are far more important than chasing high returns. A basic bank savings account or a liquid deposit prevents being caught short if the market drops 10% next week.
                </p>
              )}
              {goalTimeframe === '1year' && (
                <p>
                  • <strong>1-Year Horizon:</strong> A short-term bank Recurring Deposit (RD) or Fixed Deposit (FD) matches this tenure well because it removes price volatility and provides guaranteed interest on the target date.
                </p>
              )}
              {(goalTimeframe === '2years' || goalTimeframe === '5years') && (
                <p>
                  • <strong>Medium-to-Long Horizon:</strong> A longer time horizon gives you more breathing room to understand market cycles and compounding. However, even a 5-year goal does <em>not</em> guarantee profits in stock markets — risk tolerance and diversification remain essential.
                </p>
              )}
              {riskComfort === 'none' && (
                <p>
                  • <strong>Capital Protection:</strong> If you cannot tolerate losing even ₹1 of your hard-earned savings, market-linked products like stocks and equity funds are unsuitable for this specific goal. Bank deposits backed by DICGC rules provide peace of mind.
                </p>
              )}
            </div>

            <p className="text-[11px] text-gray-500 italic pt-1 border-t border-teal-200/60">
              ⚠️ {t({
                en: 'Disclaimer: This activity teaches financial concepts and critical trade-offs. It does NOT provide personal investment advice.',
                te: 'గమనిక: ఈ అభ్యాసం కేవలం నిర్ణయాలు ఎలా తీసుకోవాలో నేర్పుతుంది, పెట్టుబడి సలహా కాదు.',
              })}
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: SAFE VIRTUAL ₹10,000 INVESTMENT GAME */}
        {/* ============================================================ */}
        <section id="virtual-sim" className="space-y-6 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="badge badge-coral">{t({ en: 'Safe Virtual Game', te: 'సురక్షిత వర్చువల్ గేమ్' })}</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-600 font-display">
              {t({ en: 'Safe Investment Simulator: Virtual ₹10,000 Sandbox', te: 'వర్చువల్ ₹10,000 ఇన్వెస్ట్‌మెంట్ సిమ్యులేటర్' })}
            </h2>
            <p className="text-gray-600 text-sm">
              {t({
                en: 'Test your allocation strategy with ₹10,000 fictional rupees. See how your choices perform in Bull, Bear, and Normal market cycles.',
                te: '₹10,000 కల్పిత రూపాయలతో వివిధ మార్కెట్ పరిస్థితులలో మీ పెట్టుబడి ఎలా స్పందిస్తుందో ప్రత్యక్షంగా పరీక్షించండి.',
              })}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-card p-6 md:p-8 space-y-6">
            {/* Top Banner Notice */}
            <div className="bg-navy-900 text-white p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300">
                  {t({ en: 'STARTING VIRTUAL BALANCE', te: 'ప్రారంభ వర్చువల్ బ్యాలెన్స్' })}
                </span>
                <p className="text-2xl font-black font-display text-white">{formatINR(VIRTUAL_INITIAL)}</p>
              </div>
              <div className="text-right">
                <span className="text-xs bg-coral-500/30 text-coral-300 border border-coral-400/40 px-3 py-1 rounded-full font-bold">
                  {t({ en: 'SIMULATION ONLY — ZERO REAL MONEY', te: 'సిమ్యులేషన్ మాత్రమే — నిజమైన డబ్బు కాదు' })}
                </span>
              </div>
            </div>

            {/* Sliders to distribute money */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-600">
                {t({ en: 'Distribute Your ₹10,000 Virtual Capital (Total: 100%):', te: 'మీ వర్చువల్ ₹10,000 ను కేటాయించండి (మొత్తం: 100%):' })}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* FD Slider */}
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-teal-900">
                    <span>🏦 Bank FD (Fixed 6.5%)</span>
                    <span className="text-teal-700">{simFDPercent}% ({formatINR((VIRTUAL_INITIAL * simFDPercent) / 100)})</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={simFDPercent}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setSimFDPercent(val);
                    }}
                    className="w-full accent-teal-600"
                  />
                </div>

                {/* MF Slider */}
                <div className="p-4 rounded-2xl bg-coral-50/70 border border-coral-200 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-coral-900">
                    <span>📈 Diversified MF Basket</span>
                    <span className="text-coral-700">{simMFPercent}% ({formatINR((VIRTUAL_INITIAL * simMFPercent) / 100)})</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={simMFPercent}
                    onChange={(e) => setSimMFPercent(Number(e.target.value))}
                    className="w-full accent-coral-500"
                  />
                </div>

                {/* Stock Slider */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                    <span>🚲 ABC Bicycle Co. Stock</span>
                    <span className="text-blue-700">{simStockPercent}% ({formatINR((VIRTUAL_INITIAL * simStockPercent) / 100)})</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={simStockPercent}
                    onChange={(e) => setSimStockPercent(Number(e.target.value))}
                    className="w-full accent-navy-600"
                  />
                </div>
              </div>

              {totalAllocated !== 100 && (
                <p className="text-xs text-amber-600 font-semibold">
                  ⚠️ Your allocation totals {totalAllocated}%. Adjust the sliders so they equal 100%!
                </p>
              )}
            </div>

            {/* Scenario & Tenure Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">{t({ en: 'Market Economic Scenario:', te: 'మార్కెట్ ఆర్థిక పరిస్థితి:' })}</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'normal', label: '🌱 Normal Cycle' },
                    { id: 'bull', label: '🚀 Bull Market Boom' },
                    { id: 'bear', label: '📉 Bear Market Crash' },
                    { id: 'stagflation', label: '🛑 High Inflation Slowdown' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSimScenario(s.id as any)}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border text-left transition-all ${
                        simScenario === s.id ? 'bg-navy-600 text-white border-navy-600 shadow' : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">{t({ en: 'Time Period (Tenure):', te: 'సమయ పరిమితి:' })}</label>
                <div className="flex gap-2">
                  {[1, 3, 5].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSimTenure(yr)}
                      className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                        simTenure === yr ? 'bg-teal-500 text-white border-teal-500 shadow' : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {yr} Year{yr > 1 ? 's' : ''}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setSimFDPercent(40);
                      setSimMFPercent(40);
                      setSimStockPercent(20);
                      setSimScenario('normal');
                      setSimTenure(3);
                    }}
                    className="px-3 py-2 text-xs font-bold rounded-xl border border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center gap-1"
                  >
                    <RotateCcw size={14} />
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Outcome Display */}
            <div className="bg-navy-950 text-white p-6 rounded-2xl space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-3">
                <div>
                  <span className="text-xs text-blue-300 font-semibold">{t({ en: 'Simulated Portfolio Value after', te: 'సిమ్యులేటెడ్ పోర్ట్‌ఫోలియో విలువ' })} {simTenure} Year{simTenure > 1 ? 's' : ''}:</span>
                  <p className="text-3xl font-black font-display text-white">
                    {formatINR(simulationResults.finalTotal)}
                  </p>
                </div>
                <div className={`text-right sm:text-right px-3 py-1.5 rounded-xl border ${
                  simulationResults.totalGainLoss >= 0
                    ? 'bg-green-500/20 text-green-300 border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border-red-500/30'
                }`}>
                  <span className="text-sm font-bold block">
                    {simulationResults.totalGainLoss >= 0 ? '+' : ''}{formatINR(simulationResults.totalGainLoss)} ({simulationResults.percentGainLoss.toFixed(1)}%)
                  </span>
                  <span className="text-[10px] opacity-80">
                    {simulationResults.totalGainLoss >= 0 ? 'Hypothetical Gain' : 'Hypothetical Loss'}
                  </span>
                </div>
              </div>

              {/* Asset breakdown cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-teal-300 font-semibold block">Fixed Deposit (FD)</span>
                  <span className="text-white font-bold text-sm">{formatINR(simulationResults.fdFinal)}</span>
                  <span className="text-[11px] text-green-400 block">+{formatINR(simulationResults.fdGain)} (Guaranteed)</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-coral-300 font-semibold block">Mutual Fund (Basket)</span>
                  <span className="text-white font-bold text-sm">{formatINR(simulationResults.mfFinal)}</span>
                  <span className={`text-[11px] block ${simulationResults.mfGain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {simulationResults.mfGain >= 0 ? '+' : ''}{formatINR(simulationResults.mfGain)}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="text-blue-300 font-semibold block">ABC Bicycle Stock</span>
                  <span className="text-white font-bold text-sm">{formatINR(simulationResults.stockFinal)}</span>
                  <span className={`text-[11px] block ${simulationResults.stockGain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {simulationResults.stockGain >= 0 ? '+' : ''}{formatINR(simulationResults.stockGain)}
                  </span>
                </div>
              </div>

              {/* Transparent Explanation Box */}
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-500/30 text-xs text-blue-100 leading-relaxed">
                <strong>💡 Why did this outcome happen?</strong> {simulationResults.explanation}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: QUIZZES, CHALLENGES AND REWARDS */}
        {/* ============================================================ */}
        <section className="bg-white rounded-3xl border border-gray-200 shadow-card p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-4">
            <div>
              <span className="badge badge-coral mb-1">{t({ en: 'Knowledge Verification', te: 'పరిజ్ఞాన పరీక్ష' })}</span>
              <h2 className="text-2xl font-bold text-navy-600 font-display">
                {t({ en: 'Mastery Quiz: Test Your Understanding', te: 'నైపుణ్య క్విజ్: మీ అవగాహనను పరీక్షించుకోండి' })}
              </h2>
              <p className="text-xs text-gray-500">
                {t({ en: '5 multiple-choice questions to confirm your understanding of FDs, Mutual Funds, and Stocks.', te: 'FDలు, మ్యూచువల్ ఫండ్లు మరియు షేర్లపై 5 ప్రశ్నలు.' })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500">
                Question {currentQuizIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
            </div>
          </div>

          {/* Current Question Card */}
          {(() => {
            const currentQ = QUIZ_QUESTIONS[currentQuizIndex];
            const selectedOpt = quizAnswers[currentQuizIndex];
            const isAnswered = selectedOpt !== undefined;

            return (
              <div className="space-y-4">
                <h3 className="text-sm sm:text-base font-bold text-navy-700">
                  {currentQuizIndex + 1}. {t(currentQ.question)}
                </h3>

                <div className="space-y-2">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrect = optIdx === currentQ.correctIndex;
                    let optStyle = 'bg-cream-50 border-gray-200 text-gray-700 hover:border-teal-400 hover:bg-cream-100';

                    if (quizSubmitted) {
                      if (isCorrect) {
                        optStyle = 'bg-green-50 border-green-500 text-green-900 font-bold';
                      } else if (isSelected && !isCorrect) {
                        optStyle = 'bg-red-50 border-red-500 text-red-900';
                      }
                    } else if (isSelected) {
                      optStyle = 'bg-teal-50 border-teal-500 text-teal-900 font-semibold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectQuizOption(currentQuizIndex, optIdx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-start gap-3 ${optStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-bold">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{t(opt)}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on submit */}
                {quizSubmitted && (
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                    <strong>Explanation: </strong> {t(currentQ.explanation)}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button
                    disabled={currentQuizIndex === 0}
                    onClick={() => setCurrentQuizIndex(prev => prev - 1)}
                    className="btn-secondary text-xs py-2 px-4 disabled:opacity-40"
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {currentQuizIndex < QUIZ_QUESTIONS.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuizIndex(prev => prev + 1)}
                        className="btn-teal text-xs py-2 px-5"
                      >
                        Next Question
                      </button>
                    ) : (
                      !quizSubmitted && (
                        <button
                          onClick={() => setQuizSubmitted(true)}
                          className="btn-coral text-xs py-2 px-6"
                        >
                          Submit & Check Score
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Celebration Reward on Quiz Completion */}
                {quizSubmitted && (
                  <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center space-y-2 animate-fade-in shadow-lg">
                    <Award size={36} className="mx-auto text-yellow-300" />
                    <h4 className="text-xl font-bold font-display">
                      Your Score: {quizScore} / {QUIZ_QUESTIONS.length}
                    </h4>
                    <p className="text-xs text-teal-100 max-w-md mx-auto">
                      {quizScore >= 4
                        ? '🎉 Outstanding! You have mastered the fundamentals of Fixed Deposits, Mutual Funds, and Stocks.'
                        : 'Great effort! Review the detailed explanations above to sharpen your understanding of investment trade-offs.'}
                    </p>
                    <button
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                        setCurrentQuizIndex(0);
                      }}
                      className="mt-3 bg-white text-teal-800 text-xs font-bold py-2 px-5 rounded-xl hover:bg-cream-100 transition-colors"
                    >
                      Try Quiz Again
                    </button>
                  </div>
                )}
              </div>
            );
          })()}
        </section>
      </div>
    </div>
  );
}
export default InvestingMadeSimplePage;
