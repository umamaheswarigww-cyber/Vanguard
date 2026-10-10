import type { Lesson } from '@/types/content';

export const financialRatiosLesson: Lesson = {
  id: 'financial-ratios',
  slug: 'financial-ratios',
  title: {
    en: 'Financial Ratios — Numbers That Tell a Story',
    te: 'ఆర్థిక నిష్పత్తులు — కథ చెప్పే సంఖ్యలు',
  },
  pillarId: 'invest',
  conceptIds: ['eps', 'pe-ratio', 'pb-ratio', 'roe', 'dividend'],
  level: 'deeper',
  estimatedMinutes: 22,
  prerequisites: ['businesses-and-shares', 'company-financials'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-ratio-1',
      description: {
        en: 'Calculate and interpret EPS (Earnings Per Share) and P/E (Price-to-Earnings) ratio.',
        te: 'EPS మరియు P/E నిష్పత్తులను లెక్కించడం మరియు వాటి ప్రాముఖ్యతను వివరించడం.',
      },
      evidenceType: 'calculate',
    },
    {
      id: 'obj-ratio-2',
      description: {
        en: 'Explain why P/E ratios cannot be compared across different industry sectors.',
        te: 'వివిధ పరిశ్రమల మధ్య P/E నిష్పత్తులను నేరుగా ఎందుకు పోల్చకూడదో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-ratio-3',
      description: {
        en: 'Define P/B (Price-to-Book), ROE (Return on Equity), and Dividend Yield.',
        te: 'P/B, ROE మరియు డివిడెండ్ ఈల్డ్ నిష్పత్తులను నిర్వచించి వివరించడం.',
      },
      evidenceType: 'identify',
    },
  ],
  stages: [
    {
      id: 'stg-ratio-hook',
      type: 'hook',
      title: { en: 'Is a ₹500 Share "Cheaper" Than a ₹2,000 Share?', te: '₹500 షేర్ ₹2,000 షేర్ కంటే చౌకైనదా?' },
      content: {
        en: 'If Company A trades at ₹500 per share and Company B trades at ₹2,000 per share, most beginners mistakenly assume Company A is "cheap" and Company B is "expensive". But share price alone tells you nothing about valuation! What if Company A has 100 Crore shares while Company B has only 1 Crore shares? Financial ratios give us the right lens to compare apples with apples.',
        te: 'చాలా మంది ₹500 షేర్ చౌక అని, ₹2,000 షేర్ ఖరీదైనదని భావిస్తారు. కానీ కేవలం షేర్ ధర ఆధారంగా చౌక లేదా ఖరీదైనదని చెప్పలేము. ఆర్థిక నిష్పత్తులు (Financial Ratios) మాత్రమే సరైన పోలికను అందించగలవు.',
      },
    },
    {
      id: 'stg-ratio-eps-pe',
      type: 'mechanism',
      title: { en: 'The Core Duo: EPS & P/E Ratio', te: 'ముఖ్యమైన నిష్పత్తులు: EPS & P/E' },
      content: {
        en: '### 1. Earnings Per Share (EPS)\n$$\\text{EPS} = \\frac{\\text{Net Profit after Tax}}{\\text{Total Outstanding Shares}}$$\n• Example: If SunTech earns ₹150 Crore profit and has 10 Crore shares, each share earned **₹15** in profit.\n\n### 2. Price-to-Earnings Ratio (P/E)\n$$\\text{P/E} = \\frac{\\text{Current Market Price per Share}}{\\text{EPS}}$$\n• If SunTech’s share trades at ₹300 and EPS is ₹15:\n$$\\text{P/E} = \\frac{300}{15} = 20\\times$$\n**Meaning:** Investors are willing to pay ₹20 for every ₹1 of profit earned by the company. High P/E usually indicates high market growth expectations (or speculative enthusiasm); lower P/E may indicate modest growth or undervaluation.',
        te: '1. EPS: నికర లాభాన్ని మొత్తం షేర్లతో భాగిస్తే వచ్చే విలువ. ఒక్కో షేర్‌పై కంపెనీ ఎంత సంపాదిస్తుందో ఇది తెలుపుతుంది.\n2. P/E నిష్పత్తి: షేర్ ధరను EPS తో భాగిస్తే వచ్చే నిష్పత్తి. ఒక్క రూపాయి లాభం కోసం మార్కెట్ ఎంత చెల్లిస్తుందో ఇది కొలుస్తుంది.',
      },
    },
    {
      id: 'stg-ratio-others',
      type: 'formal_concept',
      title: { en: 'P/B, ROE, and Dividend Yield', te: 'P/B, ROE మరియు డివిడెండ్ ఈల్డ్' },
      content: {
        en: '### 3. Price-to-Book Ratio (P/B)\n$$\\text{P/B} = \\frac{\\text{Market Price per Share}}{\\text{Book Value per Share}}$$\nCompares market value with the company’s net asset value on its balance sheet. Common for valuing banks and capital-heavy manufacturing companies.\n\n### 4. Return on Equity (ROE)\n$$\\text{ROE (\\%)} = \\frac{\\text{Net Profit}}{\\text{Shareholders\' Equity}} \\times 100$$\nMeasures managerial efficiency. An ROE of 20% means management generated ₹20 of profit on every ₹100 of shareholders\' invested capital.\n\n### 5. Dividend Yield (\\%)\n$$\\text{Dividend Yield} = \\frac{\\text{Annual Dividend per Share}}{\\text{Market Price per Share}} \\times 100$$\nMeasures direct annual cash dividend payouts relative to share price.',
        te: '3. P/B: మార్కెట్ ధరను పుస్తక విలువతో పోలుస్తుంది (బ్యాంకులకు బాగా ఉపయోగపడుతుంది).\n4. ROE: వాటాదారుల మూలధనంపై నిర్వహణ ఎంత సమర్థవంతంగా లాభాలను ఆర్జిస్తుందో కొలిచే శాతం.\n5. డివిడెండ్ ఈల్డ్: షేర్ ధరతో పోలిస్తే కంపెనీ ఇచ్చే నగదు డివిడెండ్ రాబడి శాతం.',
      },
    },
    {
      id: 'stg-ratio-sim',
      type: 'experiment',
      title: { en: 'Hands-On: Financial Ratios Lab', te: 'ఆర్థిక నిష్పత్తుల ప్రయోగశాల' },
      content: {
        en: 'Test different company scenarios in the interactive lab below. Change the share price, net profit, and shares outstanding to observe how EPS, P/E, P/B, and ROE respond instantly!',
        te: 'క్రింది ల్యాబ్‌లో షేర్ ధర మరియు లాభాలను మార్చి చూడండి. EPS, P/E, P/B, మరియు ROE ఎలా మారుతాయో గమనించండి!',
      },
      interactionKey: 'financial-ratios-lab',
    },
    {
      id: 'stg-ratio-misconception',
      type: 'misconception',
      title: { en: 'Never Compare Apples to Oranges', te: 'అపోహ: అన్ని P/E నిష్పత్తులు ఒకటే' },
      content: {
        en: '❌ **Misconception:** "Company X has a P/E of 15 and Company Y has a P/E of 40, so Company X is definitely the superior investment!"\n\n✅ **Truth:** You cannot compare P/E across different sectors! Fast-growing software companies in India often command P/E ratios of 30x–45x because their digital sales can expand globally without heavy factories. Meanwhile, steel plants or public sector banks typically trade at 8x–12x P/E due to cyclical earnings and capital costs. **Always compare a company to its own sector peers and historical averages.**',
        te: '❌ అపోహ: "తక్కువ P/E ఉన్న కంపెనీ ఎల్లప్పుడూ మంచి పెట్టుబడి!"\n✅ వాస్తవం: వివిధ రంగాల కంపెనీల P/E నిష్పత్తులను నేరుగా పోల్చలేము. ఐటీ కంపెనీలకు 35x P/E సాధారణం కావచ్చు, కానీ స్టీల్ లేదా బ్యాంకింగ్ రంగానికి 10x P/E సాధారణం. ఎల్లప్పుడూ ఒకే రంగానికి చెందిన కంపెనీలతో మాత్రమే పోల్చాలి.',
      },
    },
    {
      id: 'stg-ratio-mastery',
      type: 'mastery_check',
      title: { en: 'Financial Ratios Mastery Quiz', te: 'ఆర్థిక నిష్పత్తుల క్విజ్' },
      content: {
        en: 'Test your understanding of valuation metrics.',
        te: 'విలువైన నిష్పత్తులపై మీ పరిజ్ఞానాన్ని పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-ratio-1',
          question: {
            en: 'A company reports ₹20 Crore net profit with 4 Crore shares outstanding. What is its EPS?',
            te: 'ఒక కంపెనీ నికర లాభం ₹20 కోట్లు మరియు మొత్తం షేర్లు 4 కోట్లు అయితే దాని EPS ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '₹5.00 per share (₹20 Cr / 4 Cr = ₹5)', te: '₹5.00 ఒక్కో షేరుకు (₹20 Cr / 4 Cr = ₹5)' },
            { en: '₹80.00 per share', te: '₹80.00 ఒక్కో షేరుకు' },
            { en: '₹0.20 per share', te: '₹0.20 ఒక్కో షేరుకు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'EPS = Net Profit ÷ Total Shares = ₹20 Cr ÷ 4 Cr = ₹5 per share.',
            te: 'EPS = ₹20 కోట్లు / 4 కోట్లు = ₹5 ఒక్కో షేరుకు.',
          },
          objectiveId: 'obj-ratio-1',
        },
        {
          id: 'q-ratio-2',
          question: {
            en: 'If a stock’s price is ₹150 and its EPS is ₹10, what is its P/E ratio?',
            te: 'ఒక షేర్ ధర ₹150 మరియు దాని EPS ₹10 అయితే, P/E నిష్పత్తి ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '15x (₹150 / ₹10 = 15)', te: '15x (₹150 / ₹10 = 15)' },
            { en: '1,500x', te: '1,500x' },
            { en: '0.67x', te: '0.67x' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'P/E = Market Price ÷ EPS = 150 ÷ 10 = 15x.',
            te: 'P/E = మార్కెట్ ధర / EPS = 150 / 10 = 15 రెట్లు.',
          },
          objectiveId: 'obj-ratio-1',
        },
        {
          id: 'q-ratio-3',
          question: {
            en: 'A ratio compares two numbers. Why should a learner also inspect the underlying statements and context?',
            te: 'ఒక నిష్పత్తి రెండు సంఖ్యలను పోలుస్తుంది. దాని మూల నివేదికలు, సందర్భాన్ని కూడా ఎందుకు పరిశీలించాలి?',
          },
          type: 'mcq',
          options: [
            { en: 'Accounting choices, business models, timing, and risk can change what the same ratio means', te: 'అకౌంటింగ్ విధానం, వ్యాపార నమూనా, సమయం, రిస్క్ వల్ల ఒకే నిష్పత్తి అర్థం మారవచ్చు' },
            { en: 'A ratio by itself proves whether a share is a good purchase', te: 'నిష్పత్తి ఒక్కటే షేర్ కొనడం మంచిదో నిరూపిస్తుంది' },
            { en: 'All companies use identical accounting assumptions', te: 'అన్ని కంపెనీలు ఒకే అకౌంటింగ్ ఊహలను ఉపయోగిస్తాయి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Ratios summarize selected figures and inherit their limitations. They are clues for comparison, not a complete judgment or investment recommendation.',
            te: 'నిష్పత్తులు కొన్ని సంఖ్యలను సంగ్రహిస్తాయి, వాటి పరిమితులను కూడా కలిగి ఉంటాయి. అవి పోలికకు సూచనలు మాత్రమే; సంపూర్ణ తీర్పు లేదా పెట్టుబడి సిఫార్సు కాదు.',
          },
          objectiveId: 'obj-ratio-3',
        },
      ],
    },
  ],
};

export default financialRatiosLesson;
