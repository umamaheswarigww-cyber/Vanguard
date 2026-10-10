import type { Lesson } from '@/types/content';

export const businessesAndSharesLesson: Lesson = {
  id: 'businesses-and-shares',
  slug: 'businesses-and-shares',
  title: {
    en: 'Businesses & Shares: Becoming a Fractional Owner',
    te: 'వ్యాపారాలు & షేర్లు: ఒక వ్యాపారంలో భాగస్వామి కావడం',
  },
  pillarId: 'invest',
  conceptIds: ['share', 'equity', 'stock-exchange', 'ipo'],
  level: 'core',
  estimatedMinutes: 12,
  prerequisites: ['budget-lab'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-share-1',
      description: {
        en: 'Explain what a share represents: proportional ownership in a company.',
        te: 'షేర్ అంటే ఏమిటి: కంపెనీలో దామాషా ప్రకారం యాజమాన్య హక్కు అని వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-share-2',
      description: {
        en: 'Contrast equity (ownership stake) with debt (borrowing).',
        te: 'ఈక్విటీ (యాజమాన్యం) మరియు అప్పు (రుణం) మధ్య తేడాను స్పష్టం చేయడం.',
      },
      evidenceType: 'compare',
    },
    {
      id: 'obj-share-3',
      description: {
        en: 'Calculate ownership percentage and understand the concept of market capitalization.',
        te: 'యాజమాన్య శాతాన్ని లెక్కించడం మరియు మార్కెట్ క్యాపిటలైజేషన్ భావనను అర్థం చేసుకోవడం.',
      },
      evidenceType: 'calculate',
    },
  ],
  stages: [
    {
      id: 'stg-sh-hook',
      type: 'hook',
      title: { en: 'The Hyderabad Chai Stall', te: 'హైదరాబాద్ ఇరానీ చాయ్ స్టాల్' },
      content: {
        en: 'Suppose Imran and Karthik want to open a premier Irani Chai stall near Charminar. They need ₹1,00,000 for equipment, stoves, and rent. Neither has that much money alone.\n\nThey have two main options:\n1. **Borrow ₹1,00,000 from a bank (Debt):** They must repay with interest regardless of whether the tea sells.\n2. **Bring in 2 friends to contribute ₹25,000 each (Equity):** They divide the business into 4 equal shares of 25% each. If the stall makes a huge profit, all 4 share the reward. If it struggles, no fixed loan repayment hangs over them.',
        te: 'ఇమ్రాన్ మరియు కార్తీక్ చార్మినార్ వద్ద ఇరానీ చాయ్ స్టాల్ తెరవాలని అనుకుంటున్నారు. పరికరాలు, స్టవ్స్ కోసం ₹1,00,000 అవసరం.\n\nవారికి రెండు మార్గాలు ఉన్నాయి:\n1. **బ్యాంకు నుండి అప్పు (Debt):** లాభం వచ్చినా రాకపోయినా వడ్డీతో కలిపి చెల్లించాలి.\n2. **స్నేహితులను భాగస్వాములుగా చేర్చుకోవడం (Equity/Shares):** వ్యాపారాన్ని 4 సమాన వాటాలుగా విభజించి ఒక్కొక్కరు 25% వాటా తీసుకోవడం. లాభాలు వస్తే అందరూ పంచుకుంటారు!',
      },
    },
    {
      id: 'stg-sh-intuition',
      type: 'intuition',
      title: { en: 'What is a Share?', te: 'షేర్ అంటే ఏమిటి?' },
      content: {
        en: 'A **Share** is literally what the name says: a slice of ownership in a business.\n\nWhen a public company like Tata Motors or Infosys issues shares, they divide the company into millions of identical little pieces. If a company creates 1,00,000 total shares, and you buy 1,000 shares, you literally own **1% of that business**!\n\nAs a shareholder:\n- You participate in its business growth (share price appreciation).\n- You may receive a portion of profits paid out as **Dividends**.\n- You bear the risk if the company performs poorly.',
        te: '**షేర్** అంటే కంపెనీలో ఒక చిన్న యాజమాన్య ముక్క.\n\nఒక కంపెనీ 1,00,000 షేర్లను జారీ చేసి, మీరు 1,000 షేర్లు కొంటే, మీరు ఆ వ్యాపారంలో **1% యజమాని**!\nకంపెనీ లాభపడితే మీ షేర్ విలువ పెరుగుతుంది లేదా డివిడెండ్ లభిస్తుంది.',
      },
    },
    {
      id: 'stg-sh-mechanism',
      type: 'mechanism',
      title: { en: 'Market Capitalization: Sizing a Company', te: 'మార్కెట్ క్యాపిటలైజేషన్: కంపెనీ పరిమాణం' },
      content: {
        en: 'How much is an entire company worth on the stock market?\n\n$$\\text{Market Capitalization} = \\text{Current Share Price} \\times \\text{Total Shares Outstanding}$$\n\n**Example:**\nIf a fictional company *SolarTech India* has **50,00,000 (50 Lakh) shares** trading at **₹200 per share**:\n\n$$\\text{Market Cap} = 50,00,000 \\times ₹200 = \\mathbf{₹1,00,00,00,000}\\text{ (₹100 Crore)}$$\n\n*Important Guardrail:* Market Capitalization is the market price of all shares right now. It reflects investor expectations — it is NOT the same as total assets or cash in the company’s bank account!',
        te: 'మార్కెట్ క్యాపిటలైజేషన్ = ప్రస్తుత షేర్ ధర × మొత్తం షేర్ల సంఖ్య.\n\nఒక కంపెనీకి 50 లక్షల షేర్లు ఉండి, ఒక్కో షేర్ ధర ₹200 ఉంటే:\nమార్కెట్ క్యాప్ = 50,00,000 × ₹200 = **₹100 కోట్లు**.',
      },
    },
    {
      id: 'stg-sh-misconception',
      type: 'misconception',
      title: { en: 'Misconception: Share Price vs. Company Value', te: 'అపోహ: షేర్ ధర vs కంపెనీ విలువ' },
      content: {
        en: '❌ **Myth:** "Company A’s share is ₹50 and Company B’s share is ₹5,000, so Company B is much bigger and better!"\n\n✅ **Truth:** The raw price of one share tells you NOTHING about how big the company is without knowing the total share count! A company with 100 Crore shares at ₹50 is worth ₹5,000 Crore, while a company with only 10,000 shares at ₹5,000 is worth only ₹5 Crore. Never judge a stock\'s size or "cheapness" by raw share price alone.',
        te: '❌ **అపోహ:** "కంపెనీ A షేర్ ₹50, కంపెనీ B షేర్ ₹5,000, కాబట్టి కంపెనీ B చాలా పెద్దది!"\n\n✅ **వాస్తవం:** షేర్ ధర మాత్రమే కంపెనీ పరిమాణాన్ని చెప్పదు. మొత్తం ఎన్ని షేర్లు ఉన్నాయో తెలుసుకోవాలి!',
      },
    },
    {
      id: 'stg-sh-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Quiz', te: 'నైపుణ్య క్విజ్' },
      content: {
        en: 'Test your understanding of businesses, shares, and market cap.',
        te: 'వ్యాపారాలు, షేర్లు మరియు మార్కెట్ క్యాప్‌పై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-sh-m-1',
          question: {
            en: 'What is the fundamental difference between buying a share (equity) and giving a loan (debt) to a company?',
            te: 'కంపెనీ షేర్ కొనడానికి (ఈక్విటీ) మరియు రుణం ఇవ్వడానికి (డెట్) మధ్య ప్రాథమిక తేడా ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'As a shareholder you own part of the business; as a lender you are owed money with interest', te: 'షేర్‌హోల్డర్‌గా మీరు కంపెనీలో భాగస్వామి; రుణదాతగా మీకు వడ్డీతో కూడిన డబ్బు రావాలి' },
            { en: 'There is no difference', te: 'ఎలాంటి తేడా లేదు' },
            { en: 'A share has guaranteed interest payments every month', te: 'షేర్‌కు ప్రతి నెలా హామీతో కూడిన వడ్డీ వస్తుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Equity gives ownership and residual profit rights (with no guaranteed return); debt is an obligation that must be repaid regardless of profit.',
            te: 'ఈక్విటీ యాజమాన్య హక్కులను ఇస్తుంది, కానీ ఎటువంటి గ్యారెంటీ ఉండదు. అప్పు అనేది కంపెనీ తప్పనిసరిగా తిరిగి చెల్లించాల్సిన బాధ్యత.',
          },
          objectiveId: 'obj-share-2',
        },
      ],
    },
  ],
};

export default businessesAndSharesLesson;
