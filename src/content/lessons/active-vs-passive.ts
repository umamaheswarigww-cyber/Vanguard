import type { Lesson } from '@/types/content';

export const activeVsPassiveLesson: Lesson = {
  id: 'active-vs-passive',
  slug: 'active-vs-passive',
  title: {
    en: 'Active vs Passive Investing — Who Beats the Market?',
    te: 'యాక్టివ్ vs పాసివ్ పెట్టుబడి — మార్కెట్ కంటే ఎవరు ముందుంటారు?',
  },
  pillarId: 'invest',
  conceptIds: ['active-vs-passive', 'index-fund', 'etf', 'expense-ratio'],
  level: 'deeper',
  estimatedMinutes: 18,
  prerequisites: ['mutual-fund-basics', 'market-indices', 'fund-types'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-avp-1',
      description: {
        en: 'Distinguish between active fund management (seeking Alpha) and passive indexing (minimizing tracking error).',
        te: 'యాక్టివ్ ఫండ్ మేనేజ్‌మెంట్ (ఆల్ఫా లక్ష్యంగా) మరియు పాసివ్ ఇండెక్సింగ్ (ట్రాకింగ్ ఎర్రర్‌ను తగ్గించడం) మధ్య తేడాలను గుర్తించడం.',
      },
      evidenceType: 'compare',
    },
    {
      id: 'obj-avp-2',
      description: {
        en: 'Demonstrate how annual expense ratios compound over 15–20 years to impact net terminal wealth.',
        te: '15-20 సంవత్సరాలలో వార్షిక వ్యయ నిష్పత్తులు (TER) నికర సంపదను ఎలా ప్రభావితం చేస్తాయో ప్రదర్శించడం.',
      },
      evidenceType: 'calculate',
    },
    {
      id: 'obj-avp-3',
      description: {
        en: 'Explain findings from SPIVA India reports regarding active fund manager persistence against benchmarks.',
        te: 'బెంచ్‌మార్క్‌లతో పోలిస్తే యాక్టివ్ ఫండ్ మేనేజర్ల పనితీరుపై SPIVA ఇండియా నివేదికల ఫలితాలను వివరించడం.',
      },
      evidenceType: 'explain',
    },
  ],
  stages: [
    {
      id: 'stg-avp-hook',
      type: 'hook',
      title: { en: 'The Fund Manager Dilemma', te: 'ఫండ్ మేనేజర్ సందిగ్ధత' },
      content: {
        en: 'Imagine you hire a brilliant, MBA-educated chess grandmaster to pick winning stocks for you. They charge a 1.5% fee every single year for their expertise. Another option is a simple computer program that simply buys all 50 stocks in the Nifty 50 in exact proportions, charging only 0.1%. Over 10 years, which one leaves you with more money in your pocket? The answer has revolutionized modern finance.',
        te: 'మీ కోసం అత్యుత్తమ షేర్లను ఎంచుకోవడానికి ఒక నిపుణుడిని నియమించి ఏటా 1.5% రుసుము చెల్లించడం మంచిదా? లేక నిఫ్టీ 50 లోని 50 కంపెనీలను కంప్యూటర్ ద్వారా కేవలం 0.1% రుసుముతో కొనుగోలు చేయడం మంచిదా? ఈ ప్రశ్న ప్రపంచ ఆర్థిక రంగాన్ని మార్చివేసింది.',
      },
    },
    {
      id: 'stg-avp-concepts',
      type: 'discovery',
      title: { en: 'Two Contrasting Philosophies', te: 'రెండు భిన్నమైన సిద్ధాంతాలు' },
      content: {
        en: '### 1. Active Management (The Stock Picker)\n• **Goal:** Beat the market benchmark (generate **Alpha**).\n• **Method:** Fund managers and research analysts meet CEOs, analyse factory output, forecast quarters, and constantly buy/sell stocks.\n• **Cost:** Higher Total Expense Ratio (typically **1.0% to 2.25%** annually in Regular plans, **0.5% to 1.2%** in Direct plans).\n\n### 2. Passive Management (The Index Mirror)\n• **Goal:** Match the index return as closely as possible (minimize **Tracking Error**).\n• **Method:** Holds the exact stocks in the exact weights of the index (e.g. Nifty 50 Index Fund). No research staff or stock picking required.\n• **Cost:** Ultra-low Total Expense Ratio (typically **0.1% to 0.4%** annually).',
        te: '1. యాక్టివ్ మేనేజ్‌మెంట్: మార్కెట్ కంటే ఎక్కువ రాబడి (Alpha) సాధించడమే లక్ష్యం. నిపుణుల పరిశోధన ఉంటుంది. ఖర్చు (TER) ఎక్కువ.\n2. పాసివ్ మేనేజ్‌మెంట్: ఇండెక్స్‌తో సమానమైన రాబడిని సాధించడం. కంప్యూటరైజ్డ్ ఇండెక్స్ ట్రాకింగ్. ఖర్చు (TER) చాలా తక్కువ.',
      },
    },
    {
      id: 'stg-avp-fee-math',
      type: 'mechanism',
      title: { en: 'The Stealth Destroyer: Compounding Fees', te: 'కంటికి కనిపించని నష్టం: ఫీజుల చక్రవడ్డీ' },
      content: {
        en: 'A 1% fee difference sounds tiny — like pocket change. But compounding turns small percentages into massive wealth gaps over time!\n\n**Consider ₹1,00,000 invested for 20 years at a gross market return of 12% p.a.:**\n\n• **Fund A (Passive Index, 0.2% TER):** Net return = 11.8% p.a.\n$$\\text{Value at 20 Years} = ₹1,00,000 \\times (1 + 0.118)^{20} \\approx ₹9,34,000$$\n\n• **Fund B (Active Fund, 1.7% TER):** Net return = 10.3% p.a.\n$$\\text{Value at 20 Years} = ₹1,00,000 \\times (1 + 0.103)^{20} \\approx ₹7,12,000$$\n\n**The Shocking Gap:** Over 20 years, that "tiny" 1.5% fee gap erased **over ₹2,20,000** — more than double your entire starting investment! To justify their fees, active managers must beat the index by *more* than their expense ratio year after year.',
        te: '1% రుసుము తేడా చాలా చిన్నదిగా అనిపించవచ్చు. కానీ 20 ఏళ్ల కాలంలో అది లక్షల రూపాయల సంపదను హరిస్తుంది!\n₹1,00,000 పెట్టుబడిపై 20 ఏళ్లలో 1.5% అదనపు రుసుము దాదాపు ₹2,20,000 సంపదను తగ్గించేస్తుంది. అందుకే తక్కువ రుసుములు ఉన్న ఫండ్లు దీర్ఘకాలంలో అధిక ప్రయోజనాన్ని ఇస్తాయి.',
      },
    },
    {
      id: 'stg-avp-spiva',
      type: 'formal_concept',
      title: { en: 'What Does the Data Say? The SPIVA Report', te: 'వాస్తవ సమాచారం: SPIVA ఇండియా నివేదిక' },
      content: {
        en: 'Do active Indian managers consistently beat the index after their fees?\n\nThe **S&P Indices Versus Active (SPIVA) India Scorecard** tracks this biannually using rigorous methodology:\n\n• **Large-Cap Equity:** Over 5-year and 10-year periods, typically **60% to 80%+ of active large-cap mutual funds fail to beat the BSE 100 or Nifty 50 benchmark!**\n• **Mid & Small Caps:** Active managers historically showed more ability to find hidden gems, but even here, alpha has compressed as markets grow more transparent and digitally efficient.\n• **Survivorship Bias:** Many poorly performing active funds get quietly merged into better funds, hiding their past losses.\n\n*Source: S&P Dow Jones Indices — SPIVA India Mid-Year 2024 Report.*',
        te: 'SPIVA ఇండియా నివేదిక ప్రకారం:\nలార్జ్-క్యాప్ విభాగంలో 5 నుండి 10 సంవత్సరాల కాలంలో దాదాపు 60% నుండి 80% పైగా యాక్టివ్ ఫండ్లు నిఫ్టీ లేదా సెన్సెక్స్ కంటే తక్కువ రాబడిని మాత్రమే ఇవ్వగలిగాయి! మార్కెట్లలో పారదర్శకత పెరిగే కొద్దీ ఇండెక్స్‌ను అధిగమించడం కష్టతరంగా మారుతోంది.',
      },
    },
    {
      id: 'stg-avp-misconception',
      type: 'misconception',
      title: { en: 'Passive Means Settling for "Average"', te: 'అపోహ: పాసివ్ అంటే తక్కువ రాబడి' },
      content: {
        en: '❌ **Misconception:** "Passive investing means I am settling for mediocre average performance because I\'m not trying to win."\n\n✅ **Truth:** Because active managers collectively *are* the market and charge high fees, the average active rupee must deliver less than the index after fees! By owning an index fund with minimal costs, you mathematically beat the majority of market participants over long investment horizons.',
        te: '❌ అపోహ: "పాసివ్ ఇన్వెస్టింగ్ అంటే నాసిరకం సగటు రాబడికి అంగీకరించడం!"\n✅ వాస్తవం: యాక్టివ్ ఫండ్ల ఫీజుల భారం కారణంగా, తక్కువ ఖర్చుతో కూడిన ఇండెక్స్ ఫండ్‌ను ఎంచుకోవడం ద్వారా మీరు దీర్ఘకాలంలో చాలా మంది యాక్టివ్ ఇన్వెస్టర్ల కంటే మెరుగైన రాబడిని సాధిస్తారు.',
      },
    },
    {
      id: 'stg-avp-mastery',
      type: 'mastery_check',
      title: { en: 'Active vs Passive Mastery Quiz', te: 'యాక్టివ్ vs పాసివ్ క్విజ్' },
      content: {
        en: 'Test your understanding of expense ratios, Alpha, and index investing.',
        te: 'వ్యయ నిష్పత్తులు మరియు ఇండెక్స్ ఇన్వెస్టింగ్‌పై మీ అవగాహనను పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-avp-1',
          question: {
            en: 'What is "Alpha" in mutual fund performance?',
            te: 'మ్యూచువల్ ఫండ్ పనితీరులో "ఆల్ఫా (Alpha)" అంటే ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'The excess return generated by an active manager over the benchmark index', te: 'బెంచ్‌మార్క్ ఇండెక్స్ కంటే యాక్టివ్ మేనేజర్ సాధించిన అదనపు రాబడి' },
            { en: 'The name of the mutual fund app', te: 'మ్యూచువల్ ఫండ్ యాప్ పేరు' },
            { en: 'The penalty for withdrawing money early', te: 'డబ్బును త్వరగా ఉపసంహరించుకున్నందుకు జరిమానా' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Alpha represents the value added by active management beyond the benchmark return.',
            te: 'ఆల్ఫా అనేది బెంచ్‌మార్క్ రాబడి కంటే ఎక్కువ సాధించిన అదనపు విలువను సూచిస్తుంది.',
          },
          objectiveId: 'obj-avp-1',
        },
        {
          id: 'q-avp-2',
          question: {
            en: 'Why do index funds have significantly lower expense ratios (TER) than active funds?',
            te: 'ఇండెక్స్ ఫండ్లు యాక్టివ్ ఫండ్ల కంటే చాలా తక్కువ వ్యయ నిష్పత్తిని (TER) ఎందుకు కలిగి ఉంటాయి?',
          },
          type: 'mcq',
          options: [
            { en: 'They mechanically replicate the index basket without expensive research analysts and active trading costs', te: 'ఖరీదైన పరిశోధన మరియు విశ్లేషకులు లేకుండా కంప్యూటరైజ్డ్ పద్ధతిలో ఇండెక్స్‌ను యథాతథంగా అనుసరిస్తాయి' },
            { en: 'They are subsidized by the government', te: 'వాటికి ప్రభుత్వం సబ్సిడీ ఇస్తుంది కాబట్టి' },
            { en: 'They only invest in government savings bonds', te: 'అవి ప్రభుత్వ పొదుపు బాండ్లలో మాత్రమే పెట్టుబడి పెడతాయి కాబట్టి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Index funds simply mirror the index components without active stock selection overhead.',
            te: 'ఇండెక్స్ ఫండ్లు ఎటువంటి పరిశోధన ఖర్చులు లేకుండా స్వయంచాలకంగా ఇండెక్స్ షేర్లను కొనుగోలు చేస్తాయి.',
          },
          objectiveId: 'obj-avp-1',
        },
      ],
    },
  ],
};

export default activeVsPassiveLesson;
