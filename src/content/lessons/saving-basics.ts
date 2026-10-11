import type { Lesson } from '@/types/content';

export const savingBasicsLesson: Lesson = {
  id: 'saving-basics',
  slug: 'saving-basics',
  title: {
    en: 'Why Save? Liquidity, Emergency Cushions & Financial Peace',
    te: 'ఎందుకు పొదుపు చేయాలి? లిక్విడిటీ, అత్యవసర నిధి & ఆర్థిక భద్రత',
  },
  pillarId: 'save',
  conceptIds: ['saving', 'liquidity', 'emergency-fund'],
  level: 'foundation',
  estimatedMinutes: 8,
  prerequisites: [],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-11',
  learningObjectives: [
    {
      id: 'obj-sb-1',
      description: {
        en: 'Distinguish between spending, saving, and investing across risk and access dimensions.',
        te: 'ఖర్చు, పొదుపు, పెట్టుబడుల మధ్య తేడాలను గుర్తించడం.',
      },
      evidenceType: 'compare',
    },
    {
      id: 'obj-sb-2',
      description: {
        en: 'Explain liquidity and why emergency savings must be held in low-risk, easily accessible accounts.',
        te: 'లిక్విడిటీ అంటే ఏమిటి మరియు అత్యవసర నిధిని ఎందుకు సురక్షితమైన ఖాతాలలో ఉంచాలో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-sb-3',
      description: {
        en: 'Calculate a target 3-to-6 month emergency fund based on basic monthly living expenses.',
        te: '3 నుండి 6 నెలల అత్యవసర నిధిని లెక్కించడం.',
      },
      evidenceType: 'calculate',
    },
  ],
  stages: [
    {
      id: 'stg-sb-hook',
      type: 'hook',
      title: { en: 'The Midnight Emergency', te: 'అర్థరాత్రి అత్యవసర పరిస్థితి' },
      content: {
        en: 'It is 11 PM on a Sunday in Secunderabad. Karthik’s family two-wheeler breaks down, and his mother urgently needs medicine costing ₹3,500.\n\nIf all his money is locked up in 5-year fixed deposits or invested in volatile stock markets, he cannot withdraw it instantly without severe penalty or loss. If he has zero savings, he is forced to take a high-interest emergency loan.\n\nThis is why every financial journey begins not with chasing stock tips, but with building **Liquidity** and an **Emergency Fund**.',
        te: 'సికింద్రాబాద్‌లో ఒక ఆదివారం రాత్రి 11 గంటలకు కార్తీక్ కుటుంబ ద్విచక్ర వాహనం పాడైపోయింది, మందుల కోసం ₹3,500 అత్యవసరంగా అవసరమయ్యాయి.\n\nఅతని వద్ద ఉన్న డబ్బంతా 5 సంవత్సరాల లాక్-ఇన్ డిపాజిట్లలో ఉంటే వెంటనే తీసుకోలేడు. అసలు పొదుపు లేకపోతే ఎక్కువ వడ్డీకి అప్పు చేయాల్సి వస్తుంది.\n\nఅందుకే స్టాక్స్ కంటే ముందే ప్రతి ఒక్కరూ **లిక్విడిటీ (సులభ లభ్యత)** మరియు **అత్యవసర నిధి**ని నిర్మించుకోవాలి.',
      },
    },
    {
      id: 'stg-sb-discovery',
      type: 'discovery',
      title: { en: 'Defining Liquidity', te: 'లిక్విడిటీ అంటే ఏమిటి?' },
      content: {
        en: 'What makes money "liquid"?',
        te: 'డబ్బుకు "లిక్విడిటీ"ని ఇచ్చే అంశం ఏది?',
      },
      questions: [
        {
          id: 'q-sb-disc-1',
          question: {
            en: 'Which of the following assets is the MOST liquid in an urgent medical emergency?',
            te: 'అత్యవసర సమయంలో క్రింది వాటిలో అత్యధిక లిక్విడిటీ ఉన్నది ఏది?',
          },
          type: 'mcq',
          options: [
            { en: 'Money held in a bank savings account with UPI / ATM debit card access', te: 'UPI / ATM సౌకర్యం ఉన్న బ్యాంక్ పొదుపు ఖాతాలోని డబ్బు' },
            { en: 'A plot of agricultural land in a village', te: 'గ్రామంలోని వ్యవసాయ భూమి' },
            { en: 'Gold jewelry stored in a bank locker', te: 'బ్యాంక్ లాకర్‌లోని బంగారు ఆభరణాలు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Correct! A savings bank account can be converted to cash immediately 24/7 without losing capital value. Selling land can take months or years.',
            te: 'సరైన సమాధానం! బ్యాంక్ సేవింగ్స్ ఖాతా నుండి 24/7 వెంటనే నగదును పొందవచ్చు. భూమిని అమ్మడానికి నెలలు లేదా సంవత్సరాలు పడుతుంది.',
          },
          objectiveId: 'obj-sb-2',
        },
      ],
    },
    {
      id: 'stg-sb-intuition',
      type: 'intuition',
      title: { en: 'Spending vs. Saving vs. Investing', te: 'ఖర్చు vs పొదుపు vs పెట్టుబడి' },
      content: {
        en: 'Keep this golden triangle clear in your mind:\n\n- **Spending**: Money exchanged for goods and services today (depletes balance).\n- **Saving**: Money set aside in safe, highly liquid accounts to handle emergencies and short-term goals. *Primary goal: Capital Protection & Liquidity*.\n- **Investing**: Money put to work in productive assets (equities, index funds, businesses) to beat inflation over 5–10+ years. *Primary goal: Wealth Growth, accepting market volatility*.',
        te: 'ఈ మూడు భావనలను ఎప్పుడూ గుర్తుంచుకోండి:\n\n- **ఖర్చు**: నేటి అవసరాల కోసం వస్తువులు లేదా సేవల కోసం చెల్లించేది.\n- **పొదుపు**: అత్యవసర పరిస్థితులు మరియు స్వల్పకాలిక లక్ష్యాల కోసం భద్రంగా ఉంచేది (ప్రాధాన్యత: భద్రత & లభ్యత).\n- **పెట్టుబడి**: ద్రవ్యోల్బణాన్ని అధిగమించి సంపదను పెంచుకోవడానికి 5-10 ఏళ్ల పాటు వ్యాపారాలలో పెట్టేది (ప్రాధాన్యత: సంపద వృద్ధి).',
      },
    },
    {
      id: 'stg-sb-mechanism',
      type: 'mechanism',
      title: { en: 'How Big Should an Emergency Fund Be?', te: 'అత్యవసర నిధి ఎంత ఉండాలి?' },
      content: {
        en: 'Financial planners recommend maintaining **3 to 6 months of essential living expenses** as an emergency cushion.\n\n$$\\text{Target Emergency Fund} = \\text{Essential Monthly Expenses} \\times (3 \\text{ to } 6)$$\n\nIf your household requires ₹20,000 per month for rent, groceries, medicines, and utilities:\n- Minimum Cushion (3 months): $₹20,000 \\times 3 = ₹60,000$\n- Robust Cushion (6 months): $₹20,000 \\times 6 = ₹1,20,000$\n\nThis money should sit in a regular savings account or liquid mutual fund where it is safe from stock market crashes.',
        te: 'ఆర్థిక నిపుణులు కనీసం **3 నుండి 6 నెలల ప్రాథమిక ఖర్చులను** అత్యవసర నిధిగా ఉంచాలని సూచిస్తారు.\n\nనెలవారీ తప్పనిసరి ఖర్చులు ₹20,000 అయితే:\n- 3 నెలల నిధి: ₹20,000 × 3 = ₹60,000\n- 6 నెలల నిధి: ₹20,000 × 6 = ₹1,20,000\n\nఈ నిధిని మార్కెట్ ఒడుదొడుకులకు గురికాకుండా సురక్షితమైన సేవింగ్స్ ఖాతాలో ఉంచాలి.',
      },
    },
    {
      id: 'stg-sb-worked-example',
      type: 'worked_example',
      title: { en: 'Worked Case: Student Emergency Cushion', te: 'ఉదాహరణ: విద్యార్థి అత్యవసర నిధి' },
      content: {
        en: 'As a high school student, your essential monthly expenses might be:\n- Commute (bus / metro pass): ₹800\n- Study materials and mobile data: ₹500\n- Total monthly baseline: **₹1,300**\n\n- 3-Month Student Cushion: $₹1,300 \\times 3 = ₹3,900$.\n\nIf you save ₹650 a month, you will build your complete peace-of-mind safety cushion in exactly 6 months!',
        te: 'ఒక విద్యార్థి నెలవారీ తప్పనిసరి ఖర్చులు:\n- ప్రయాణం: ₹800\n- చదువు, మొబైల్ డేటా: ₹500\n- మొత్తం: **₹1,300**\n\n- 3 నెలల నిధి: ₹1,300 × 3 = ₹3,900.\n\nనెలకు ₹650 ఆదా చేస్తే 6 నెలల్లో ఈ రక్షణ వలయం సిద్ధమవుతుంది!',
      },
    },
    {
      id: 'stg-sb-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Challenge', te: 'నైపుణ్య పరీక్ష' },
      content: {
        en: 'Test your understanding of emergency reserves and liquidity.',
        te: 'అత్యవసర నిధుల ప్రాముఖ్యతపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-sb-mc-1',
          question: {
            en: 'Why is investing your ENTIRE emergency fund in high-growth equity stocks dangerous?',
            te: 'అత్యవసర నిధి మొత్తాన్ని ఈక్విటీ స్టాక్స్‌లో పెట్టడం ఎందుకు ప్రమాదకరం?',
          },
          type: 'mcq',
          options: [
            { en: 'A market downturn could cut your fund by 25% exactly when an emergency occurs', te: 'అత్యవసర పరిస్థితి వచ్చినప్పుడే మార్కెట్ 25% పడిపోయే అవకాశం ఉంది' },
            { en: 'Stocks can only be sold once every 10 years by law', te: 'స్టాక్స్ 10 ఏళ్ల వరకు అమ్మలేము' },
            { en: 'Banks do not permit stock owners to hold bank accounts', te: 'బ్యాంకులు అనుమతించవు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Emergency funds exist for safety and fast access, not speculation. If stock prices tumble, you would be forced to sell shares at a heavy loss.',
            te: 'అత్యవసర నిధి లక్ష్యం భద్రత మాత్రమే. మార్కెట్ పడిపోయిన సమయంలో నష్టానికి షేర్లు అమ్మాల్సి వస్తుంది.',
          },
          objectiveId: 'obj-sb-2',
        },
        {
          id: 'q-sb-mc-2',
          question: {
            en: 'If a household’s essential monthly expenses are ₹15,000, what is the recommended 3-to-6 month emergency fund target range?',
            te: 'ఒక కుటుంబ నెలవారీ కనీస ఖర్చులు ₹15,000 అయితే, 3 నుండి 6 నెలల అత్యవసర నిధి లక్ష్యం ఎంత ఉండాలి?',
          },
          type: 'mcq',
          options: [
            { en: '₹15,000 to ₹30,000', te: '₹15,000 నుండి ₹30,000' },
            { en: '₹45,000 to ₹90,000', te: '₹45,000 నుండి ₹90,000' },
            { en: '₹1,50,000 to ₹3,00,000', te: '₹1,50,000 నుండి ₹3,00,000' },
          ],
          correctIndex: 1,
          explanation: {
            en: '3 months = 3 × ₹15,000 = ₹45,000. 6 months = 6 × ₹15,000 = ₹90,000. This provides a safe runway during job transitions or health emergencies.',
            te: '3 నెలలు = 3 × ₹15,000 = ₹45,000. 6 నెలలు = 6 × ₹15,000 = ₹90,000. ఇది ఆకస్మిక సమస్యల్లో రక్షణగా ఉంటుంది.',
          },
          objectiveId: 'obj-sb-3',
        },
        {
          id: 'q-sb-mc-3',
          question: {
            en: 'What is the primary characteristic of a liquid asset like a savings bank account or liquid fund?',
            te: 'పొదుపు ఖాతా వంటి లిక్విడ్ ఆస్తి యొక్క ముఖ్య లక్షణం ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Guaranteed 25% annual return with zero tax', te: '25% వార్షిక లాభాల హామీ' },
            { en: 'Fast, penalty-free access to cash within hours or days while preserving principal', te: 'మూలధన భద్రతతో తక్కువ సమయంలో నగదును సులభంగా పొందే సౌలభ్యం' },
            { en: 'Strict mandatory lock-in period of 5 years', te: '5 సంవత్సరాల లాక్-ఇన్ పీరియడ్' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Liquidity means speed and certainty of converting an asset into cash without incurring steep financial penalties or distress discounts.',
            te: 'లిక్విడిటీ అంటే ఎటువంటి నష్టం లేదా జరిమానా లేకుండా వెంటనే నగదుగా మార్చుకోగలగడం.',
          },
          objectiveId: 'obj-sb-1',
        },
      ],
    },
  ],
};
