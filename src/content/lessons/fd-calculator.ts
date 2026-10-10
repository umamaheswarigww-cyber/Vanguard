import type { Lesson } from '@/types/content';

export const fdCalculatorLesson: Lesson = {
  id: 'fd-calculator',
  slug: 'fd-calculator',
  title: {
    en: 'Fixed Deposits (FD) & Banking: Mechanics and Boundaries',
    te: 'ఫిక్స్‌డ్ డిపాజిట్లు (FD) & బ్యాంకింగ్: విధానాలు మరియు పరిమితులు',
  },
  pillarId: 'save',
  conceptIds: ['fd', 'rd', 'principal', 'maturity'],
  level: 'core',
  estimatedMinutes: 10,
  prerequisites: ['simple-vs-compound'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-fd-1',
      description: {
        en: 'Explain how bank Fixed Deposits compound quarterly in standard Indian banking.',
        te: 'భారతీయ బ్యాంకింగ్‌లో ఫిక్స్‌డ్ డిపాజిట్లు సాధారణంగా త్రైమాసికంగా ఎలా చక్రవడ్డీ పొందుతాయో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-fd-2',
      description: {
        en: 'Calculate the maturity value of ₹50,000 at 7% p.a. for 3 years with quarterly compounding.',
        te: 'త్రైమాసిక చక్రవడ్డీతో 3 సంవత్సరాలకు 7% వద్ద ₹50,000 మెచ్యూరిటీ విలువను లెక్కించడం.',
      },
      evidenceType: 'calculate',
    },
    {
      id: 'obj-fd-3',
      description: {
        en: 'Identify the DICGC insurance limits and clarify that no bank deposit is completely free of inflation risk.',
        te: 'DICGC బీమా పరిమితులను గుర్తించి, ఏ డిపాజిట్ కూడా ద్రవ్యోల్బణ ప్రమాదం నుండి పూర్తిగా విముక్తి పొందలేదని గ్రహించడం.',
      },
      evidenceType: 'identify',
    },
  ],
  stages: [
    {
      id: 'stg-fd-hook',
      type: 'hook',
      title: { en: 'Grandmother\'s Favourite: The Fixed Deposit', te: 'అమ్మమ్మకి ఎంతో ఇష్టమైనది: ఫిక్స్‌డ్ డిపాజిట్' },
      content: {
        en: 'In almost every Indian family, when a student wins an academic award or turns 18, elders advise: *"Put it in an FD!"*\n\nWhy? Because a Fixed Deposit (FD) locks your principal for a fixed period (tenure) at a predetermined interest rate. It provides predictable returns, unlike stocks which swing up and down daily.',
        te: 'భారతీయ కుటుంబాలలో పిల్లలకు అవార్డు వచ్చినా లేదా 18 ఏళ్లు నిండినా పెద్దలు *"దాన్ని FD లో వేయి!"* అని సలహా ఇస్తారు.\n\nఎందుకంటే FD లో నిర్ణీత కాలానికి ఒక నిర్దిష్ట వడ్డీ రేటు హామీ ఉంటుంది. షేర్ల లాగా రోజూ హెచ్చుతగ్గులు ఉండవు.',
      },
    },
    {
      id: 'stg-fd-mechanism',
      type: 'mechanism',
      title: { en: 'Quarterly Compounding Convention', te: 'త్రైమాసిక చక్రవడ్డీ విధానం' },
      content: {
        en: 'In India, cumulative FDs typically compound **quarterly** ($n = 4$ times a year), using:\n\n$$M = P \\times \\left(1 + \\frac{r}{4}\\right)^{4 \\times t}$$\n\n**Verified Blueprint Calculation:**\nFor a deposit of **₹50,000** at an annual nominal rate of **7%** ($r = 0.07$) for **3 years** ($t = 3$):\n\n$$M = 50,000 \\times \\left(1 + \\frac{0.07}{4}\\right)^{12} = 50,000 \\times (1.0175)^{12} \\approx \\mathbf{₹61,572}$$\n\nTotal interest earned: ₹61,572 − ₹50,000 = **₹11,572**.\n\n*(Note: Exact bank FD terms, payout frequency, and TDS thresholds may differ. Check official bank terms).*',
        te: 'భారతదేశంలో బ్యాంకులు సాధారణంగా త్రైమాసిక ($n=4$) చక్రవడ్డీని వర్తింపజేస్తాయి:\n\n**₹50,000** ను **7%** వద్ద **3 ఏళ్లు** ఉంచితే:\n$$M = 50,000 \\times (1 + 0.07/4)^{12} \\approx \\mathbf{₹61,572}$$\nమొత్తం వచ్చిన వడ్డీ: **₹11,572**.',
      },
    },
    {
      id: 'stg-fd-experiment',
      type: 'experiment',
      title: { en: 'FD Maturity Calculator', te: 'FD మెచ్యూరిటీ కాలిక్యులేటర్' },
      content: {
        en: 'Input your principal, tenure, and rate to see your quarterly compounded maturity and total interest earned.',
        te: 'మీ అసలు, కాలవ్యవధి మరియు వడ్డీ రేటును నమోదు చేసి త్రైమాసిక చక్రవడ్డీతో మెచ్యూరిటీ మొత్తాన్ని చూడండి.',
      },
      interactionKey: 'fd-calculator',
    },
    {
      id: 'stg-fd-misconception',
      type: 'misconception',
      title: { en: 'Misconception: Is an FD completely Risk-Free?', te: 'అపోహ: FD అంటే అసలు ఎలాంటి రిస్క్ లేదా?' },
      content: {
        en: '❌ **Myth:** "Fixed deposits have zero risk whatsoever."\n\n✅ **Truth:** While bank FDs in scheduled banks are backed by DICGC insurance (up to ₹5,00,000 per depositor per bank for principal and interest), they face **Inflation Risk** and **Liquidity Penalties**:\n\n1. If your FD yields 6.5% and inflation is 6%, your real gain is almost zero!\n2. Breaking an FD prematurely usually incurs an interest penalty.\n3. Bank deposits are safe for capital preservation, but may not create substantial wealth over long decades.',
        te: '❌ **అపోహ:** "FD లలో ఎలాంటి ప్రమాదం ఉండదు."\n\n✅ **వాస్తవం:** బ్యాంక్ FD లకు DICGC ద్వారా రూ. 5 లక్షల వరకు బీమా రక్షణ ఉన్నప్పటికీ, వాటికి **ద్రవ్యోల్బణ ప్రమాదం** ఉంటుంది. వడ్డీ 6.5% ఉండి ద్రవ్యోల్బణం 6% ఉంటే నిజమైన లాభం దాదాపు సున్నా!',
      },
    },
    {
      id: 'stg-fd-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Check', te: 'నైపుణ్య పరీక్ష' },
      content: {
        en: 'Test your understanding of Fixed Deposits.',
        te: 'ఫిక్స్‌డ్ డిపాజిట్లపై మీ అవగాహనను పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-fd-m-1',
          question: {
            en: 'Why does quarterly compounding yield slightly more interest than annual compounding on an FD?',
            te: 'వార్షిక చక్రవడ్డీ కంటే త్రైమాసిక చక్రవడ్డీ FD లో ఎక్కువ వడ్డీని ఎందుకు ఇస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'Because the bank adds earned interest to the principal 4 times a year instead of once', te: 'సంవత్సరానికి ఒకసారి కాకుండా 4 సార్లు వడ్డీని అసలుకు కలుపుతారు కాబట్టి' },
            { en: 'Because the government gives a subsidy', te: 'ప్రభుత్వం సబ్సిడీ ఇస్తుంది కాబట్టి' },
            { en: 'Because the interest rate increases every quarter', te: 'ప్రతి త్రైమాసికంలో వడ్డీ రేటు పెరుగుతుంది కాబట్టి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Because interest is added to your balance every 3 months, that added interest begins earning interest sooner!',
            te: 'ప్రతి 3 నెలలకు వడ్డీ అసలులో కలవడం వల్ల ఆ వడ్డీపై తదుపరి త్రైమాసికంలో వడ్డీ లభిస్తుంది!',
          },
          objectiveId: 'obj-fd-1',
        },
      ],
    },
  ],
};

export default fdCalculatorLesson;
