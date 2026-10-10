import type { Lesson } from '@/types/content';

export const stockMarketEcosystemLesson: Lesson = {
  id: 'stock-market-ecosystem',
  slug: 'stock-market-ecosystem',
  title: {
    en: 'The Indian Stock Market Ecosystem',
    te: 'భారతీయ స్టాక్ మార్కెట్ పర్యావరణ వ్యవస్థ',
  },
  pillarId: 'invest',
  conceptIds: ['stock-exchange', 'sebi', 'demat-account', 'depository', 'broker'],
  level: 'core',
  estimatedMinutes: 18,
  prerequisites: ['businesses-and-shares'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-eco-1',
      description: {
        en: 'Identify the role of SEBI as market regulator and investor protector.',
        te: 'మార్కెట్ నియంత్రణ సంస్థగా మరియు పెట్టుబడిదారుల రక్షకుడిగా సెబీ పాత్రను గుర్తించడం.',
      },
      evidenceType: 'identify',
    },
    {
      id: 'obj-eco-2',
      description: {
        en: 'Explain the functions of Stock Exchanges (NSE, BSE), Depositories (NSDL, CDSL), and Stock Brokers.',
        te: 'స్టాక్ ఎక్స్ఛేంజీలు (NSE, BSE), డిపాజిటరీలు (NSDL, CDSL) మరియు బ్రోకర్ల విధులను వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-eco-3',
      description: {
        en: 'Trace the lifecycle of a trade from order placement to T+1 settlement.',
        te: 'ఆర్డర్ ఉంచడం నుండి T+1 సెటిల్‌మెంట్ వరకు ట్రేడ్ ప్రయాణాన్ని వివరించడం.',
      },
      evidenceType: 'explain',
    },
  ],
  stages: [
    {
      id: 'stg-eco-hook',
      type: 'hook',
      title: { en: 'A Market on Your Smartphone', te: 'మీ చేతిలోని మార్కెట్' },
      content: {
        en: 'Every weekday morning at 9:15 AM, millions of Indians tap their phone screens to buy or sell pieces of major corporations. But behind that smooth swipe lies an intricate, high-speed ecosystem of institutions built to ensure no one steals your money, trades settle reliably, and transactions are legally binding. Who are the guardians of this digital marketplace?',
        te: 'ప్రతి సోమవారం నుండి శుక్రవారం ఉదయం 9:15 గంటలకు లక్షలాది మంది భారతీయులు తమ ఫోన్‌లలో షేర్లను కొనుగోలు చేస్తారు లేదా విక్రయిస్తారు. అయితే ఈ సులువైన యాప్ వెనుక మీ డబ్బు భద్రంగా ఉండేలా చూడటానికి అనేక ప్రభుత్వ మరియు స్వతంత్ర సంస్థలు పనిచేస్తాయి. అవి ఎలా పనిచేస్తాయి?',
      },
    },
    {
      id: 'stg-eco-discovery',
      type: 'discovery',
      title: { en: 'Meet the Key Players', te: 'ప్రధాన భాగస్వాములు' },
      content: {
        en: 'Think of the stock market as a super-secure international airport:\n\n1. **The Regulator (Air Traffic Control):** **SEBI** (Securities and Exchange Board of India) sets safety rules, inspects brokers, and protects passengers (investors).\n2. **The Terminal (The Runway):** **NSE & BSE** are the exchanges where flights (orders) take off and land.\n3. **The Ticket Booking Agents:** **Stock Brokers** (like Zerodha, Groww, Angel One, ICICI Direct) provide platforms for retail investors to book their tickets.\n4. **The Digital Vault:** **Depositories (NSDL & CDSL)** hold your electronic share certificates.\n5. **The Clearing Corporation:** Ensures that the seller actually delivers shares and the buyer actually delivers cash before the swap is completed.',
        te: 'స్టాక్ మార్కెట్‌ను ఒక ఎయిర్‌పోర్ట్‌తో పోల్చవచ్చు:\n1. సెబీ (SEBI) - నిబంధనలను రూపొందించే ఎయిర్ ట్రాఫిక్ కంట్రోల్.\n2. ఎక్స్ఛేంజీలు (NSE & BSE) - ట్రేడ్‌లు జరిగే రన్‌వేలు.\n3. స్టాక్ బ్రోకర్లు - మీరు టిక్కెట్లు బుక్ చేసుకోవడానికి ఉపయోగించే యాప్‌లు.\n4. డిపాజిటరీలు (NSDL & CDSL) - షేర్లను భద్రపరిచే డిజిటల్ లాకర్లు.\n5. క్లియరింగ్ కార్పొరేషన్ - నగదు మరియు షేర్ల బదిలీని నిర్ధారించే వ్యవస్థ.',
      },
    },
    {
      id: 'stg-eco-regulator',
      type: 'mechanism',
      title: { en: 'The Watchdog: SEBI', te: 'కాపలాదారు: సెబీ (SEBI)' },
      content: {
        en: 'Established by an Act of Parliament in 1992, the **Securities and Exchange Board of India (SEBI)** has a sacred legal mandate: protect retail investors from fraud, manipulate-proof trading, and false corporate claims.\n\nKey investor protections enforced by SEBI:\n• Mandatory **KYC** before opening trading accounts.\n• Strict disclosure requirements: Public companies must publish quarterly audited earnings.\n• Action against illegal insider trading and pump-and-dump cartels.\n• **SCORES (SEBI Complaints Redress System):** An official online portal to resolve investor grievances against listed companies or brokers.\n• Investor Helpline: **1800 266 7575** (Toll-Free).',
        te: '1992 లో స్థాపించబడిన సెబీ (SEBI) ముఖ్య ఉద్దేశ్యం సాధారణ పెట్టుబడిదారులను మోసాల నుండి కాపాడటం.\n• తప్పనిసరి KYC ప్రక్రియ.\n• కంపెనీలు ప్రతి 3 నెలలకు ఒకసారి తమ లాభనష్టాలను ప్రకటించాలి.\n• SCORES పోర్టల్ ద్వారా ఫిర్యాదులను పరిష్కరించడం.\n• సెబీ టోల్-ఫ్రీ హెల్ప్‌లైన్: 1800 266 7575.',
      },
    },
    {
      id: 'stg-eco-exchanges',
      type: 'formal_concept',
      title: { en: 'The Exchanges: NSE vs BSE', te: 'ఎక్స్ఛేంజీలు: NSE vs BSE' },
      content: {
        en: 'India has two dominant nationwide electronic stock exchanges:\n\n• **BSE (Bombay Stock Exchange):** Founded in 1875 by Premchand Roychand on Dalal Street, Mumbai. It is the **oldest stock exchange in Asia**. Its benchmark 30-stock index is the **Sensex**.\n\n• **NSE (National Stock Exchange):** Established in 1992 and began operations in 1994 to bring electronic, transparent trading across the nation. Today, NSE is India’s largest exchange by trading volume and the world’s largest derivatives exchange by contract volume. Its benchmark 50-stock index is the **Nifty 50**.\n\nMost large Indian blue-chip companies are listed on **both** exchanges, allowing investors to choose where to buy or sell.',
        te: 'భారతదేశంలో రెండు ప్రముఖ స్టాక్ ఎక్స్ఛేంజీలు ఉన్నాయి:\n• BSE: 1875 లో ముంబైలో ప్రారంభమైన ఆసియాలోనే పురాతన ఎక్స్ఛేంజ్. దీని ప్రధాన సూచిక సెన్సెక్స్ (Sensex).\n• NSE: 1992 లో స్థాపించబడి 1994 లో ట్రేడింగ్ ప్రారంభించిన ఆధునిక ఎలక్ట్రానిక్ ఎక్స్ఛేంజ్. లావాదేవీల పరిమాణంలో అతిపెద్దది. దీని ప్రధాన సూచిక నిఫ్టీ 50 (Nifty 50).',
      },
    },
    {
      id: 'stg-eco-lifecycle',
      type: 'worked_example',
      title: { en: 'The 24-Hour Journey of a Share (T+1 Settlement)', te: 'షేర్ ప్రయాణం (T+1 సెటిల్‌మెంట్)' },
      content: {
        en: 'Suppose Meera in Hyderabad buys 1 share of Infosys on Monday morning:\n\n1. **9:30 AM (Trade Execution):** Meera clicks "Buy" on her broker app. Her broker routes the order to NSE. The exchange matches Meera\'s buy bid with a seller named Rahul in Pune.\n2. **Immediate Lock:** Meera\'s account funds are blocked; Rahul’s share in his demat is blocked.\n3. **Clearing & Settlement (NSE Clearing):** The clearing corporation guarantees both legs. Even if Rahul’s broker defaults, the clearing house guarantees Meera receives her share.\n4. **Tuesday Afternoon (T+1):** Funds transfer from Meera\'s bank to Rahul\'s bank. The share leaves Rahul\'s depository account and is credited directly to Meera’s Demat account at CDSL/NSDL.\n\nIndia was among the first major financial markets worldwide to transition to the lightning-fast **T+1 (Trade + 1 Day)** cycle!',
        te: 'మీరా సోమవారం ఉదయం ఒక షేర్ కొనుగోలు చేస్తే ఏం జరుగుతుంది:\n1. ఉదయం 9:30: ఆర్డర్ NSE కి వెళ్లి విక్రేతతో సరిపోలుతుంది.\n2. క్లియరింగ్ కార్పొరేషన్ లావాదేవీని గ్యారెంటీ చేస్తుంది.\n3. మంగళవారం మధ్యాహ్నం (T+1): నిధులు విక్రేతకు బదిలీ అవుతాయి మరియు షేర్ మీరా డీమ్యాట్ ఖాతాకు క్రెడిట్ అవుతుంది. భారతదేశంలో T+1 సెటిల్‌మెంట్ అమలవుతోంది.',
      },
    },
    {
      id: 'stg-eco-misconception',
      type: 'misconception',
      title: { en: 'Busting Market Myths', te: 'అపోహలు - నిజాలు' },
      content: {
        en: '❌ **Misconception:** "If my broker company goes bankrupt or shuts down, I will lose all my shares!"\n\n✅ **Truth:** Your shares are **never** held in your broker\'s bank vault. They are safely deposited in your personal name at the central depository (**NSDL or CDSL**). Even if your broker ceases operations tomorrow, your shares remain 100% safe in your Demat account, and SEBI allows you to simply transfer your account to any other registered broker.',
        te: '❌ అపోహ: "నా బ్రోకర్ కంపెనీ మూతపడితే నా షేర్లు పోతాయి!"\n✅ వాస్తవం: షేర్లు బ్రోకర్ వద్ద ఉండవు. అవి NSDL లేదా CDSL డిపాజిటరీ వద్ద మీ వ్యక్తిగత డీమ్యాట్ ఖాతాలో సురక్షితంగా ఉంటాయి. బ్రోకర్ మూతపడినా మీ షేర్లు క్షేమంగా ఉంటాయి.',
      },
    },
    {
      id: 'stg-eco-mastery',
      type: 'mastery_check',
      title: { en: 'Ecosystem Mastery Quiz', te: 'పర్యావరణ వ్యవస్థ క్విజ్' },
      content: {
        en: 'Test your understanding of the Indian stock market structure.',
        te: 'భారతీయ స్టాక్ మార్కెట్ నిర్మాణంపై మీ పరిజ్ఞానాన్ని పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-eco-1',
          question: {
            en: 'Who holds and safekeeps your electronic shares in India?',
            te: 'భారతదేశంలో మీ ఎలక్ట్రానిక్ షేర్లను భద్రపరిచేది ఎవరు?',
          },
          type: 'mcq',
          options: [
            { en: 'Central Depositories (NSDL / CDSL)', te: 'కేంద్ర డిపాజిటరీలు (NSDL / CDSL)' },
            { en: 'Your Stock Broker app', te: 'మీ స్టాక్ బ్రోకర్ యాప్' },
            { en: 'The Reserve Bank of India', te: 'రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Depositories (NSDL and CDSL) are licensed central institutions where digital shares are registered in your name.',
            te: 'డిపాజిటరీలు (NSDL మరియు CDSL) షేర్లను డిజిటల్ రూపంలో మీ పేరు మీద భద్రపరుస్తాయి.',
          },
          objectiveId: 'obj-eco-2',
        },
        {
          id: 'q-eco-2',
          question: {
            en: 'What does T+1 settlement mean when you buy shares on Wednesday in India?',
            te: 'భారతదేశంలో బుధవారం షేర్లు కొనుగోలు చేస్తే T+1 సెటిల్‌మెంట్ అంటే ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Shares arrive in your Demat account on Thursday (next business day)', te: 'షేర్లు గురువారం (తదుపరి పనిదినం) మీ డీమ్యాట్ ఖాతాలోకి వస్తాయి' },
            { en: 'You must pay 1 extra rupee tax', te: 'మీరు 1 రూపాయి అదనపు పన్ను చెల్లించాలి' },
            { en: 'The trade takes 1 month to complete', te: 'ట్రేడ్ పూర్తి కావడానికి 1 నెల పడుతుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'T+1 means Trade date plus 1 working day. A Wednesday trade settles on Thursday.',
            te: 'T+1 అంటే ట్రేడ్ జరిగిన మరుసటి పనిదినం నాటికి సెటిల్‌మెంట్ పూర్తవుతుంది.',
          },
          objectiveId: 'obj-eco-3',
        },
        {
          id: 'q-eco-3',
          question: {
            en: 'What is the primary role of SEBI (Securities and Exchange Board of India)?',
            te: 'సెబీ (SEBI) యొక్క ప్రాథమిక విధి ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Regulate capital markets, protect retail investors, and prevent fraud', te: 'క్యాపిటల్ మార్కెట్లను నియంత్రించడం, పెట్టుబడిదారులను రక్షించడం మరియు మోసాలను అరికట్టడం' },
            { en: 'Lend money to companies to start businesses', te: 'కంపెనీలకు వ్యాపారం కోసం రుణాలు ఇవ్వడం' },
            { en: 'Predict which stock prices will double', te: 'ఏ షేర్ ధర పెరుగుతుందో జోస్యం చెప్పడం' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'SEBI is the statutory market regulator protecting investors and ensuring fair market practices.',
            te: 'సెబీ పెట్టుబడిదారుల రక్షణ కోసం మరియు మార్కెట్లలో పారదర్శకత కోసం పనిచేసే చట్టబద్ధమైన నియంత్రణ సంస్థ.',
          },
          objectiveId: 'obj-eco-1',
        },
      ],
    },
  ],
};

export default stockMarketEcosystemLesson;
