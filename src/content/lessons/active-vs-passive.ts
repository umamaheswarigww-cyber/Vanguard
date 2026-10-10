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
        en: 'Imagine two fictional funds that follow the same broad market. One has a manager who researches and selects investments; the other follows an index using stated rules. Their fees and results can differ. Which details would you compare before deciding what each approach means?',
        te: 'ఒకే విస్తృత మార్కెట్‌ను అనుసరించే రెండు ఊహాత్మక ఫండ్లను ఊహించండి. ఒకదానిలో మేనేజర్ పరిశోధించి పెట్టుబడులను ఎంచుకుంటారు; మరొకటి నియమాల ప్రకారం సూచీని అనుసరిస్తుంది. వాటి ఫీజులు, ఫలితాలు వేరుగా ఉండవచ్చు. ఈ రెండు విధానాలను అర్థం చేసుకోవడానికి ఏ వివరాలను పోల్చాలి?',
      },
    },
    {
      id: 'stg-avp-concepts',
      type: 'discovery',
      title: { en: 'Two Contrasting Philosophies', te: 'రెండు భిన్నమైన సిద్ధాంతాలు' },
      content: {
        en: '### 1. Active management\n• **Goal:** Try to outperform a chosen benchmark after costs; this is uncertain.\n• **Method:** A manager uses a stated process to select or change holdings.\n• **Cost:** Research and trading can affect costs. The actual expense ratio varies by scheme and plan, so check its current documents.\n\n### 2. Passive management\n• **Goal:** Track a named index as closely as practical; results can differ from the index.\n• **Method:** A fund follows rules for holding or sampling index securities.\n• **Cost:** Costs still apply and vary. An index approach does not guarantee a gain or remove market risk.',
        te: '### 1. యాక్టివ్ నిర్వహణ\n• **లక్ష్యం:** ఖర్చుల తర్వాత ఎంచుకున్న బెంచ్‌మార్క్‌ను మించడానికి ప్రయత్నించడం; ఇది ఖాయం కాదు.\n• **విధానం:** మేనేజర్ ఒక నిర్దిష్ట పద్ధతితో పెట్టుబడులను ఎంచుకోవచ్చు లేదా మార్చవచ్చు.\n• **ఖర్చు:** పరిశోధన, కొనుగోలు అమ్మకాలు ఖర్చులపై ప్రభావం చూపుతాయి. ఫండ్ పథకం, ప్లాన్‌ను బట్టి వ్యయ నిష్పత్తి మారుతుంది; తాజా పత్రాలను చూడాలి.\n\n### 2. పాసివ్ నిర్వహణ\n• **లక్ష్యం:** పేర్కొన్న సూచీని సాధ్యమైనంత దగ్గరగా అనుసరించడం; ఫలితాలు సూచీతో భిన్నంగా ఉండవచ్చు.\n• **విధానం:** సూచీ సెక్యూరిటీలను లేదా నమూనా సెక్యూరిటీలను దాని నియమాల ప్రకారం కలిగి ఉంటుంది.\n• **ఖర్చు:** ఖర్చులు ఉంటాయి, మారుతాయి. సూచీ విధానం లాభానికి హామీ ఇవ్వదు లేదా మార్కెట్ రిస్క్‌ను తొలగించదు.',
      },
    },
    {
      id: 'stg-avp-fee-math',
      type: 'mechanism',
      title: { en: 'The Stealth Destroyer: Compounding Fees', te: 'కంటికి కనిపించని నష్టం: ఫీజుల చక్రవడ్డీ' },
      content: {
        en: 'Here is a simplified fee experiment, not a forecast. Start with ₹50,000 for 10 years and assume both examples earn the same 8% gross rate each year before fees. Subtract a hypothetical 0.2% annual fee in one case and 1.2% in the other, then compound the remaining rates.\n\nThe lower-fee illustration ends higher because the two cases assume identical gross growth and differ only by the fee. Real funds do not earn identical returns, fees can change, and market values can fall. A lower fee alone does not tell you which fund is suitable or will perform better.',
        te: 'ఇది ఫీజు ప్రభావాన్ని చూపే సరళీకృత ఉదాహరణ మాత్రమే; భవిష్యత్ అంచనా కాదు. ₹50,000ను 10 సంవత్సరాలు ఉంచి, రెండు ఉదాహరణల్లోనూ ఫీజులకు ముందు ఏడాదికి 8% ఒకే ఊహాత్మక వృద్ధి అనుకుందాం. ఒకదానిలో ఏడాదికి 0.2%, మరొకదానిలో 1.2% ఊహాత్మక ఫీజు తీసి మిగిలిన రేటును చక్రవడ్డీగా లెక్కించండి.\n\nరెండు సందర్భాల్లోనూ ఫీజుకు ముందు వృద్ధి ఒకటే అనుకున్నందున తక్కువ ఫీజు ఉదాహరణలో చివరి విలువ ఎక్కువగా ఉంటుంది. వాస్తవ ఫండ్ల రాబడులు ఒకేలా ఉండవు; ఫీజులు మారవచ్చు, మార్కెట్ విలువ తగ్గవచ్చు. తక్కువ ఫీజు ఒక్కటే ఏ ఫండ్ సరిపోతుందో లేదా మెరుగ్గా పనిచేస్తుందో చెప్పదు.',
      },
    },
    {
      id: 'stg-avp-spiva',
      type: 'formal_concept',
      title: { en: 'How to Read Performance Comparisons', te: 'పనితీరు పోలికలను ఎలా చదవాలి' },
      content: {
        en: 'When someone says “this approach beat the market,” ask: Which benchmark? Which dates? Before or after fees? Were distributions included? How many funds disappeared or merged?\n\nA comparison describes one past period and method. Results can change across time periods, categories, and benchmarks. Survivorship and selection effects can also make a group look stronger than it was. Past performance cannot establish what a fund will do next.',
        te: '“ఈ విధానం మార్కెట్‌ను మించింది” అని ఎవరైనా చెబితే అడగండి: ఏ బెంచ్‌మార్క్? ఏ కాలం? ఫీజులకు ముందు లేదా తర్వాతా? పంపిణీలను లెక్కలోకి తీసుకున్నారా? ఎన్ని ఫండ్లు మూసివేయబడ్డాయి లేదా విలీనం అయ్యాయి?\n\nపోలిక గత కాలం, పద్ధతిని మాత్రమే వివరిస్తుంది. కాలం, వర్గం, బెంచ్‌మార్క్‌ను బట్టి ఫలితాలు మారవచ్చు. కొన్ని ఫండ్లు కనబడకపోవడం లేదా విలీనం కావడం వల్ల సమూహం నిజం కంటే మెరుగ్గా కనిపించవచ్చు. గత పనితీరు భవిష్యత్ ఫలితాలను నిర్ధారించదు.',
      },
    },
    {
      id: 'stg-avp-misconception',
      type: 'misconception',
      title: { en: 'Passive Means Settling for "Average"', te: 'అపోహ: పాసివ్ అంటే తక్కువ రాబడి' },
      content: {
        en: '❌ **Misconception:** “Passive management always earns the market return, and active management always does worse.”\n\n✅ **Better way to think:** Passive funds aim to track a stated index, but costs and tracking differences matter. Active funds make different choices and may outperform or underperform. Neither style guarantees a result. Compare the goal, risks, costs, and evidence for the same period and benchmark.',
        te: '❌ **అపోహ:** “పాసివ్ నిర్వహణ ఎప్పుడూ మార్కెట్ రాబడినే ఇస్తుంది; యాక్టివ్ నిర్వహణ ఎప్పుడూ తక్కువే ఇస్తుంది.”\n\n✅ **సరైన ఆలోచన:** పాసివ్ ఫండ్లు పేర్కొన్న సూచీని అనుసరించడానికి ప్రయత్నిస్తాయి; ఖర్చులు, సూచీతో తేడాలు ముఖ్యం. యాక్టివ్ ఫండ్లు వేర్వేరు ఎంపికలు చేస్తాయి; మెరుగ్గా లేదా తక్కువగా పనిచేయవచ్చు. ఏ విధానమూ ఫలితానికి హామీ ఇవ్వదు. ఒకే కాలం, బెంచ్‌మార్క్‌తో లక్ష్యం, రిస్క్, ఖర్చులు, ఆధారాలను పోల్చండి.',
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
        {
          id: 'q-avp-3',
          question: {
            en: 'Two hypothetical funds earn the same 8% gross annual return before fees. Which statement about fees is supported by this assumption?',
            te: 'ఫీజులకు ముందు రెండు ఊహాత్మక ఫండ్లు 8% వార్షిక రాబడి సాధించాయని అనుకుందాం. ఫీజుల గురించి ఏ వాక్యానికి ఈ ఊహ మద్దతు ఇస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'The lower-fee fund keeps more of the modeled return, all else equal', te: 'మిగతావన్నీ సమానంగా ఉంటే, తక్కువ ఫీజు ఫండ్ నమూనా రాబడిలో ఎక్కువ భాగాన్ని నిలుపుకుంటుంది' },
            { en: 'The lower-fee fund must outperform every year', te: 'తక్కువ ఫీజు ఫండ్ ప్రతి సంవత్సరం తప్పనిసరిగా మెరుగ్గా రాణించాలి' },
            { en: 'Fees do not affect investor outcomes', te: 'ఫీజులు పెట్టుబడిదారుల ఫలితాలను ప్రభావితం చేయవు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'A lower fee reduces the modeled cost when other assumptions are equal. It cannot guarantee future outperformance or a positive return.',
            te: 'ఇతర ఊహలు సమానంగా ఉన్నప్పుడు తక్కువ ఫీజు నమూనా ఖర్చును తగ్గిస్తుంది. ఇది భవిష్యత్ మెరుగైన పనితీరు లేదా సానుకూల రాబడికి హామీ కాదు.',
          },
          objectiveId: 'obj-avp-2',
        },
      ],
    },
  ],
};

export default activeVsPassiveLesson;
