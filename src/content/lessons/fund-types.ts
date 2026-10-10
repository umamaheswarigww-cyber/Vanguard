import type { Lesson } from '@/types/content';

export const fundTypesLesson: Lesson = {
  id: 'fund-types',
  slug: 'fund-types',
  title: {
    en: 'Types of Mutual Funds: Matching Goals to Assets',
    te: 'మ్యూచువల్ ఫండ్ రకాలు: లక్ష్యాలకు తగిన ఆస్తులు',
  },
  pillarId: 'invest',
  conceptIds: ['mutual-fund', 'debt-fund', 'liquid-fund', 'hybrid-fund', 'elss'],
  level: 'core',
  estimatedMinutes: 20,
  prerequisites: ['mutual-fund-basics', 'mutual-fund-structure'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-ft-1',
      description: {
        en: 'Classify mutual funds under SEBI\'s categorization: Equity, Debt, Hybrid, Solution-Oriented, and Other.',
        te: 'సెబీ వర్గీకరణ ప్రకారం మ్యూచువల్ ఫండ్లను ఈక్విటీ, డెట్, హైబ్రిడ్ మరియు ఇతర కేటగిరీలుగా వర్గీకరించడం.',
      },
      evidenceType: 'classify',
    },
    {
      id: 'obj-ft-2',
      description: {
        en: 'Differentiate between Large-Cap, Mid-Cap, Small-Cap, and Flexi-Cap equity funds.',
        te: 'లార్జ్-క్యాప్, మిడ్-క్యాప్, స్మాల్-క్యాప్ మరియు ఫ్లెక్సీ-క్యాప్ ఈక్విటీ ఫండ్ల మధ్య తేడాలను గుర్తించడం.',
      },
      evidenceType: 'compare',
    },
    {
      id: 'obj-ft-3',
      description: {
        en: 'Explain why Liquid and Debt funds suit short-term goals, while Equity suits 7+ year horizons.',
        te: 'స్వల్పకాలిక లక్ష్యాలకు లిక్విడ్/డెట్ ఫండ్లు, మరియు 7+ సంవత్సరాల లక్ష్యాలకు ఈక్విటీ ఫండ్లు ఎందుకు సరిపోతాయో వివరించడం.',
      },
      evidenceType: 'explain',
    },
  ],
  stages: [
    {
      id: 'stg-ft-hook',
      type: 'hook',
      title: { en: 'Different Vehicles for Different Roads', te: 'వివిధ ప్రయాణాలకు వేర్వేరు వాహనాలు' },
      content: {
        en: 'If you need to cross the street to buy milk, you walk or take a bicycle. If you are travelling 500 km across the country, you board an express train or an airplane. In personal finance, using an equity fund for a 3-month goal is like booking a flight to cross the street — dangerous and unsuitable! Let’s explore SEBI’s official taxonomy of mutual funds.',
        te: 'పక్క వీధికి వెళ్ళడానికి సైకిల్ ఎలా వాడతామో, సుదూర ప్రయాణానికి రైలు ఎలా వాడతామో, ఆర్థిక లక్ష్యాలకు కూడా సరైన ఫండ్‌ను ఎంచుకోవాలి. 3 నెలల అత్యవసర డబ్బును రిస్క్ ఉన్న ఈక్విటీ ఫండ్లలో పెట్టడం ప్రమాదకరం. సెబీ వర్గీకరించిన ఫండ్ రకాలను తెలుసుకుందాం.',
      },
    },
    {
      id: 'stg-ft-sebi-groups',
      type: 'discovery',
      title: { en: 'SEBI\'s Official 5 Broad Categories', te: 'సెబీ నిర్దేశించిన 5 ప్రధాన వర్గాలు' },
      content: {
        en: 'In October 2017, SEBI issued a landmark circular standardizing all mutual fund schemes into 5 clear categories so investors are never misled:\n\n1. **Equity Schemes:** Invest predominantly (at least 65%+) in shares of listed companies.\n2. **Debt Schemes:** Invest in fixed-income debt securities (bonds, treasury bills, commercial papers).\n3. **Hybrid Schemes:** Invest in a calibrated mix of both equities and debt.\n4. **Solution Oriented Schemes:** Dedicated lock-in schemes for Retirement or Children’s Education.\n5. **Other Schemes:** Index Funds, ETFs, and Fund of Funds (FoF).',
        te: 'సెబీ 2017 మార్గదర్శకాల ప్రకారం 5 ప్రధాన వర్గాలు:\n1. ఈక్విటీ ఫండ్లు: కనీసం 65% షేర్లలో పెట్టుబడి పెడతాయి.\n2. డెట్ ఫండ్లు: స్థిర ఆదాయ బాండ్లు మరియు ప్రభుత్వ సెక్యూరిటీలలో పెట్టుబడి పెడతాయి.\n3. హైబ్రిడ్ ఫండ్లు: ఈక్విటీ మరియు డెట్ రెండింటి మిశ్రమం.\n4. సొల్యూషన్ ఓరియెంటెడ్: పిల్లల చదువు లేదా రిటైర్మెంట్ కోసం లాక్-ఇన్ ఉన్న ఫండ్లు.\n5. ఇండెక్స్ & ETF ఫండ్లు: మార్కెట్ సూచీలను యథాతథంగా ట్రాక్ చేసే ఫండ్లు.',
      },
    },
    {
      id: 'stg-ft-equity-breakdown',
      type: 'mechanism',
      title: { en: 'Inside Equity Funds', te: 'ఈక్విటీ ఫండ్ల రకాలు' },
      content: {
        en: 'SEBI strictly defines where equity schemes may invest:\n\n• **Large-Cap Fund:** Minimum 80% investment in the top 100 companies. Highest stability among equities.\n• **Mid-Cap Fund:** Minimum 65% in 101st to 250th companies. Higher growth potential, higher volatility.\n• **Small-Cap Fund:** Minimum 65% in 251st company onwards. Highest risk and volatility.\n• **Flexi-Cap Fund:** Free to dynamically allocate across large, mid, and small caps as the fund manager sees fit (min 65% in equity).\n• **ELSS (Tax Saver):** Minimum 80% in equity. Mandatory **3-year lock-in**; qualifies for 80C tax deduction.',
        te: 'ఈక్విటీ ఫండ్ల వివరాలు:\n• లార్జ్-క్యాప్: టాప్ 100 పెద్ద కంపెనీలలో కనీసం 80% పెట్టుబడి.\n• మిడ్-క్యాప్: 101 నుండి 250 వ ర్యాంక్ కంపెనీలలో కనీసం 65%.\n• స్మాల్-క్యాప్: 251 మరియు ఆపై కంపెనీలలో కనీసం 65%.\n• ఫ్లెక్సీ-క్యాప్: అన్ని రకాల క్యాప్‌లలో స్వేచ్ఛగా పెట్టుబడి పెట్టగలదు.\n• ELSS: 3 సంవత్సరాల లాక్-ఇన్ పీరియడ్ ఉన్న పన్ను ఆదా ఫండ్.',
      },
    },
    {
      id: 'stg-ft-debt-breakdown',
      type: 'formal_concept',
      title: { en: 'Debt & Liquid Funds: Stability & Tenor', te: 'డెట్ మరియు లిక్విడ్ ఫండ్లు: స్థిరత్వం' },
      content: {
        en: 'Debt funds lend money to corporations and governments in exchange for interest:\n\n• **Overnight Funds:** Invest in 1-day securities. Lowest possible credit and interest rate risk.\n• **Liquid Funds:** Invest in debt instruments with maturity up to **91 days**. Ideal for emergency funds and parking money for a few weeks to 6 months.\n• **Short Duration Funds:** Invest in 1–3 year debt securities.\n• **Gilt Funds:** Invest minimum 80% in Government of India securities (Zero default risk, but price changes when RBI adjusts repo interest rates).\n\n⚠️ **Important:** Debt funds are **NOT** bank FDs. They are subject to interest rate fluctuations and credit risk, and are NOT covered by DICGC insurance.',
        te: 'డెట్ ఫండ్లు ప్రభుత్వానికి మరియు కంపెనీలకు రుణాలు ఇస్తాయి:\n• లిక్విడ్ ఫండ్లు: 91 రోజుల వరకు మెచ్యూరిటీ ఉండే సెక్యూరిటీలు. అత్యవసర నిధికి ఉత్తమం.\n• గిల్ట్ ఫండ్లు: కేంద్ర/రాష్ట్ర ప్రభుత్వ బాండ్లలో పెట్టుబడి. డిఫాల్ట్ రిస్క్ ఉండదు.\n⚠️ గమనిక: డెట్ ఫండ్లు బ్యాంక్ FD లు కావు. వీటికి DICGC బీమా వర్తించదు.',
      },
    },
    {
      id: 'stg-ft-matching',
      type: 'worked_example',
      title: { en: 'Matching Time Horizons to Categories', te: 'సమయానికి తగిన కేటగిరీని ఎంచుకోవడం' },
      content: {
        en: 'Consider two students in Hyderabad:\n\n1. **Kavya (17):** Saving ₹2,000/month for college admission fees due in **8 months**.\n• *Best match concept:* **Liquid Fund or Bank Recurring Deposit.** Equities can drop 20% right before her fees are due!\n\n2. **Vikram (18):** Planning to save ₹1,000/month for his dream of starting a business in **10 years**.\n• *Best match concept:* **Diversified Equity Index Fund (e.g. Nifty 50).** Over a decade, equities have historically beaten inflation, and he has ample time to weather short-term market crashes.',
        te: 'రెండు ఉదాహరణలు:\n1. కావ్య (17): 8 నెలల్లో కాలేజీ ఫీజు చెల్లించాలి. ఈమెకు లిక్విడ్ ఫండ్ లేదా బ్యాంక్ RD సరైనది (రిస్క్ లేకుండా).\n2. విక్రమ్ (18): 10 సంవత్సరాల తర్వాత వ్యాపారం ప్రారంభించడానికి పొదుపు చేస్తున్నాడు. ఈ కాలానికి ఈక్విటీ ఇండెక్స్ ఫండ్ అనువైనది.',
      },
    },
    {
      id: 'stg-ft-mastery',
      type: 'mastery_check',
      title: { en: 'Fund Types Mastery Quiz', te: 'ఫండ్ రకాల నైపుణ్య క్విజ్' },
      content: {
        en: 'Test your understanding of mutual fund categories.',
        te: 'మ్యూచువల్ ఫండ్ రకాలపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-ft-1',
          question: {
            en: 'What is the mandatory lock-in period for an ELSS (Equity Linked Savings Scheme) mutual fund?',
            te: 'ELSS పన్ను ఆదా మ్యూచువల్ ఫండ్ కోసం తప్పనిసరి లాక్-ఇన్ కాలపరిమితి ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '3 Years', te: '3 సంవత్సరాలు' },
            { en: '1 Year', te: '1 సంవత్సరం' },
            { en: '5 Years', te: '5 సంవత్సరాలు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'ELSS has a statutory 3-year lock-in period from the date of each instalment allotment.',
            te: 'ELSS ఫండ్‌కు ప్రతి వాయిదా కేటాయింపు తేదీ నుండి 3 సంవత్సరాల లాక్-ఇన్ ఉంటుంది.',
          },
          objectiveId: 'obj-ft-2',
        },
        {
          id: 'q-ft-2',
          question: {
            en: 'Which fund category is most suitable for parking emergency money needed within 3 months?',
            te: 'రాబోయే 3 నెలల్లో అవసరమయ్యే అత్యవసర డబ్బును ఉంచడానికి ఏ ఫండ్ కేటగిరీ అత్యంత అనుకూలమైనది?',
          },
          type: 'mcq',
          options: [
            { en: 'Liquid Fund or Bank Savings Account', te: 'లిక్విడ్ ఫండ్ లేదా బ్యాంక్ పొదుపు ఖాతా' },
            { en: 'Small-Cap Equity Fund', te: 'స్మాల్-క్యాప్ ఈక్విటీ ఫండ్' },
            { en: 'Sectoral IT Technology Fund', te: 'సెక్టోరల్ ఐటీ ఫండ్' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Liquid funds invest in low-risk short-term debt up to 91 days with minimal volatility, protecting short-term capital.',
            te: 'లిక్విడ్ ఫండ్లు స్వల్పకాలిక సెక్యూరిటీలలో పెట్టుబడి పెడతాయి, కాబట్టి మూలధన నష్టం లేకుండా లిక్విడిటీని అందిస్తాయి.',
          },
          objectiveId: 'obj-ft-3',
        },
      ],
    },
  ],
};

export default fundTypesLesson;
