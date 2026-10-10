import type { Lesson } from '@/types/content';

export const companyFinancialsLesson: Lesson = {
  id: 'company-financials',
  slug: 'company-financials',
  title: {
    en: 'Reading a Company\'s Financial Story',
    te: 'కంపెనీ ఆర్థిక కథను చదవడం',
  },
  pillarId: 'invest',
  conceptIds: ['equity', 'share'],
  level: 'core',
  estimatedMinutes: 20,
  prerequisites: ['businesses-and-shares'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-fin-1',
      description: {
        en: 'Navigate the structure of an Income Statement (Revenue to Net Profit).',
        te: 'ఆదాయ నివేదిక (ఆదాయం నుండి నికర లాభం వరకు) నిర్మాణాన్ని అర్థం చేసుకోవడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-fin-2',
      description: {
        en: 'Explain the fundamental accounting balance: Assets = Liabilities + Equity.',
        te: 'ప్రాథమిక అకౌంటింగ్ సమీకరణం: ఆస్తులు = అప్పులు + ఈక్విటీ అని వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-fin-3',
      description: {
        en: 'Contrast accounting net profit with actual operating cash flow.',
        te: 'అకౌంటింగ్ నికర లాభం మరియు వాస్తవ నగదు ప్రవాహం మధ్య వ్యత్యాసాన్ని స్పష్టం చేయడం.',
      },
      evidenceType: 'compare',
    },
  ],
  stages: [
    {
      id: 'stg-fin-hook',
      type: 'hook',
      title: { en: 'A Company\'s Report Card', te: 'కంపెనీ ప్రోగ్రెస్ రిపోర్ట్' },
      content: {
        en: 'At school, your report card shows your marks in science and maths. For a company, its financial statements are its quarterly report cards. Before buying shares in a company or depositing money, learning to read these numbers separates knowledgeable students from uninformed speculators.',
        te: 'పాఠశాలలో మీ మార్కుల లిస్ట్ మీ పురోగతిని ఎలా తెలియజేస్తుందో, కంపెనీలకు వాటి ఆర్థిక నివేదికలు కూడా అదే విధమైన ప్రోగ్రెస్ రిపోర్టులు. షేర్లు కొనే ముందు లేదా పెట్టుబడి పెట్టే ముందు కంపెనీ నివేదికలను చదవడం నేర్చుకోవడం ఎంతో ముఖ్యం.',
      },
    },
    {
      id: 'stg-fin-discovery',
      type: 'discovery',
      title: { en: 'The Big Three Financial Statements', te: 'మూడు ముఖ్యమైన ఆర్థిక నివేదికలు' },
      content: {
        en: 'Every listed company in India submits three vital audited statements to SEBI and stock exchanges every quarter:\n\n1. **Statement of Profit & Loss (Income Statement):** *Did the business earn a profit or suffer a loss over the period?*\n2. **Balance Sheet:** *What does the company own (Assets) and what does it owe (Liabilities) at a specific snapshot in time?*\n3. **Cash Flow Statement:** *Where did actual cash enter and exit the bank account?*',
        te: 'ప్రతి లిస్టెడ్ కంపెనీ మూడు కీలక నివేదికలను ప్రచురిస్తుంది:\n1. లాభనష్టాల నివేదిక (P&L) - నిర్దిష్ట కాలంలో లాభం వచ్చిందా లేదా నష్టం వచ్చిందా?\n2. బ్యాలెన్స్ షీట్ - కంపెనీకి ఎంత ఆస్తి ఉంది మరియు ఎన్ని అప్పులు ఉన్నాయి?\n3. నగదు ప్రవాహ నివేదిక (Cash Flow) - బ్యాంకు ఖాతాలోకి నగదు ఎలా వచ్చింది మరియు ఎక్కడికి వెళ్లింది?',
      },
    },
    {
      id: 'stg-fin-pnl',
      type: 'mechanism',
      title: { en: 'The P&L Waterfall: Topline to Bottomline', te: 'లాభనష్టాల నివేదిక (టాప్‌లైన్ నుండి బాటమ్‌లైన్)' },
      content: {
        en: 'Think of the Income Statement as a waterfall starting with gross sales at the top:\n\n• **Revenue (Topline):** Total money collected from selling goods/services.\n• **(−) Cost of Goods Sold (COGS):** Direct cost of raw materials and production.\n• **(=) Gross Profit:** What remains after direct production costs.\n• **(−) Operating Expenses (OPEX):** Office rent, staff salaries, electricity, marketing.\n• **(=) EBITDA:** Earnings Before Interest, Tax, Depreciation & Amortization.\n• **(−) Depreciation:** Accounting wear-and-tear of plant and machines.\n• **(−) Finance Costs / Interest:** Money paid to banks on loans.\n• **(−) Taxes:** Corporate income tax paid to the Government of India.\n• **(=) Net Profit / PAT (Bottomline):** The final reward belonging purely to equity shareholders!',
        te: 'ఆదాయ నివేదిక పైనుండి క్రిందికి ప్రవహించే జలపాతం వంటిది:\n• అమ్మకాల రాబడి (Topline)\n• (−) ముడిసరుకు ఖర్చులు (COGS)\n• (=) స్థూల లాభం (Gross Profit)\n• (−) ఉద్యోగుల జీతాలు, అద్దెలు, మార్కెటింగ్ ఖర్చులు\n• (=) EBITDA\n• (−) యంత్రాల తరుగుదల మరియు రుణాలపై వడ్డీ\n• (−) ప్రభుత్వానికి చెల్లించే పన్నులు\n• (=) నికర లాభం (Bottomline) - ఇది వాటాదారులకు మిగిలే అసలైన లాభం!',
      },
    },
    {
      id: 'stg-fin-sim',
      type: 'experiment',
      title: { en: 'Hands-On: Company Financials Lab', te: 'కంపెనీ ఆర్థిక ప్రయోగశాల' },
      content: {
        en: 'Adjust revenue, operating costs, and loan expenses below. Watch how changing production costs impacts Gross Margin and Net Profit in real time! Switch tabs to see how the Balance Sheet maintains equilibrium.',
        te: 'క్రింది సిమ్యులేటర్‌లో అమ్మకాలు మరియు ఖర్చులను మార్చండి. స్థూల లాభం మరియు నికర లాభం ఎలా మారుతాయో గమనించండి!',
      },
      interactionKey: 'company-financials-lab',
    },
    {
      id: 'stg-fin-balancesheet',
      type: 'formal_concept',
      title: { en: 'The Balance Sheet: Assets = Liabilities + Equity', te: 'బ్యాలెన్స్ షీట్: ఆస్తులు = అప్పులు + ఈక్విటీ' },
      content: {
        en: 'The Golden Rule of Double-Entry Accounting:\n\n$$\\text{Total Assets} = \\text{Liabilities} + \\text{Shareholders\' Equity}$$\n\n• **Assets:** Everything the company owns that has future economic value (Cash in bank, customer dues, inventory in warehouses, factories, computer servers).\n• **Liabilities:** Everything the company owes to outsiders (Vendor payables, bank term loans, bonds).\n• **Shareholders\' Equity (Net Worth):** The residual claim of the founders and shareholders (Initial capital invested + past retained earnings reinvested into the business).\n\nA company that finances all its assets with heavy debt is risky when business slows down.',
        te: 'అకౌంటింగ్ సూత్రం: ఆస్తులు = అప్పులు + ఈక్విటీ.\nకంపెనీ వద్ద ఉన్న ఆస్తులన్నీ బయటి వ్యక్తుల రుణాలు (అప్పులు) లేదా వాటాదారుల మూలధనం (ఈక్విటీ) ద్వారా సమకూర్చబడినవే. అధిక రుణాలతో నడిచే కంపెనీలు మాంద్యం సమయంలో తీవ్ర ఇబ్బందులు ఎదుర్కొంటాయి.',
      },
    },
    {
      id: 'stg-fin-misconception',
      type: 'misconception',
      title: { en: 'Big Sales Do Not Mean Big Profit', te: 'అపోహ: ఎక్కువ అమ్మకాలు అంటే ఎక్కువ లాభం' },
      content: {
        en: '❌ **Misconception:** "Company X has ₹500 Crore in revenue, so it must be a fantastic and safe business!"\n\n✅ **Truth:** High revenue is meaningless if costs exceed sales. If Company X had ₹500 Cr in revenue but spent ₹520 Cr on marketing and costs, it lost ₹20 Crore! Always look at **profit margins** and **debt levels**, not just raw revenue numbers.',
        te: '❌ అపోహ: "కంపెనీకి ₹500 కోట్ల భారీ అమ్మకాలు ఉన్నాయి, కాబట్టి ఇది గొప్ప కంపెనీ!"\n✅ వాస్తవం: అమ్మకాలు ఎంత ఎక్కువగా ఉన్నా, ఖర్చులు అంతకంటే ఎక్కువైతే కంపెనీ నష్టాలలో ఉంటుంది. అమ్మకాలతో పాటు నికర లాభం (Net Profit) మరియు రుణాల స్థాయిలను కూడా తప్పనిసరిగా చూడాలి.',
      },
    },
    {
      id: 'stg-fin-mastery',
      type: 'mastery_check',
      title: { en: 'Financial Statements Mastery Quiz', te: 'ఆర్థిక నివేదికల నైపుణ్య క్విజ్' },
      content: {
        en: 'Check your grasp of P&L statements and the fundamental balance sheet equation.',
        te: 'లాభనష్టాల నివేదిక మరియు బ్యాలెన్స్ షీట్ సూత్రాలపై మీ పరిజ్ఞానాన్ని పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-fin-1',
          question: {
            en: 'What is the fundamental balance sheet formula?',
            te: 'ప్రాథమిక బ్యాలెన్స్ షీట్ సమీకరణం ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Assets = Liabilities + Shareholders\' Equity', te: 'ఆస్తులు = అప్పులు + వాటాదారుల ఈక్విటీ' },
            { en: 'Assets = Revenue − Net Profit', te: 'ఆస్తులు = అమ్మకాలు − నికర లాభం' },
            { en: 'Assets = Cash + Debt', te: 'ఆస్తులు = నగదు + అప్పు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Every asset owned by a firm was purchased either via borrowed money (liabilities) or owners\' funds (equity).',
            te: 'కంపెనీ ఆస్తులన్నీ అప్పులు మరియు యాజమాన్య మూలధనం ద్వారా మాత్రమే సమకూరుతాయి.',
          },
          objectiveId: 'obj-fin-2',
        },
        {
          id: 'q-fin-2',
          question: {
            en: 'A firm has ₹10 Lakh in Revenue and ₹6 Lakh in Cost of Goods Sold. What is its Gross Profit and Gross Margin?',
            te: 'ఒక కంపెనీ అమ్మకాలు ₹10 లక్షలు మరియు ఉత్పత్తి ఖర్చు ₹6 లక్షలు అయితే స్థూల లాభం మరియు స్థూల మార్జిన్ ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '₹4 Lakh (40% Gross Margin)', te: '₹4 లక్షలు (40% స్థూల మార్జిన్)' },
            { en: '₹6 Lakh (60% Gross Margin)', te: '₹6 లక్షలు (60% స్థూల మార్జిన్)' },
            { en: '₹16 Lakh (160% Gross Margin)', te: '₹16 లక్షలు (160% స్థూల మార్జిన్)' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Gross Profit = ₹10L − ₹6L = ₹4L. Gross Margin = (₹4L / ₹10L) × 100 = 40%.',
            te: 'స్థూల లాభం = ₹10L − ₹6L = ₹4 లక్షలు (40% మార్జిన్).',
          },
          objectiveId: 'obj-fin-1',
        },
      ],
    },
  ],
};

export default companyFinancialsLesson;
