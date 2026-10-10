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
        en: 'Trace a simplified trade from order placement through matching, clearing, settlement, and record keeping.',
        te: 'ఆర్డర్ నుండి సరిపోలిక, క్లియరింగ్, సెటిల్‌మెంట్, రికార్డు వరకు సరళీకృత ట్రేడ్ ప్రయాణాన్ని వివరించడం.',
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
        en: 'Imagine a student enters a fictional order to buy one share. The app is only the visible starting point: other organisations handle routing, matching, record keeping, and the exchange of money and securities. What has to happen before the trade is complete?',
        te: 'ఒక విద్యార్థి ఒక షేర్ కొనడానికి ఊహాత్మక ఆర్డర్ ఇస్తున్నట్లు ఊహించండి. యాప్ కేవలం కనిపించే ప్రారంభం మాత్రమే: ఆర్డర్ పంపడం, సరిపోల్చడం, రికార్డులు ఉంచడం, నగదు మరియు సెక్యూరిటీల మార్పిడి వంటి పనులను ఇతర సంస్థలు నిర్వహిస్తాయి. ట్రేడ్ పూర్తయ్యే ముందు ఏమి జరగాలి?',
      },
    },
    {
      id: 'stg-eco-discovery',
      type: 'discovery',
      title: { en: 'Meet the Key Players', te: 'ప్రధాన భాగస్వాములు' },
      content: {
        en: 'Think of a market as a team with separate jobs:\n\n1. **Regulator:** SEBI is India’s securities-market regulator. Regulation and investor protections reduce some risks, but they cannot prevent every loss, error, or fraud.\n2. **Exchange:** NSE and BSE operate marketplaces with rules for submitting and matching orders.\n3. **Broker:** Provides a route and account interface for a customer’s orders.\n4. **Depository:** NSDL and CDSL maintain electronic records of securities held in demat accounts.\n5. **Clearing and settlement system:** Processes the obligations created by matched trades and the transfer of securities and funds.\n\nThe phone app is one part of the chain; it is not the exchange or the depository.',
        te: 'మార్కెట్‌ను వేర్వేరు పనులు చేసే బృందంగా చూడండి:\n\n1. **నియంత్రణ సంస్థ:** SEBI భారతదేశ సెక్యూరిటీస్ మార్కెట్ నియంత్రణ సంస్థ. నియమాలు, పెట్టుబడిదారుల రక్షణలు కొన్ని రిస్కులను తగ్గిస్తాయి; కానీ ప్రతి నష్టం, పొరపాటు లేదా మోసాన్ని అడ్డుకోలేవు.\n2. **ఎక్స్చేంజ్:** NSE, BSE ఆర్డర్లు సమర్పించి సరిపోల్చే నియమాలతో మార్కెట్‌లను నిర్వహిస్తాయి.\n3. **బ్రోకర్:** కస్టమర్ ఆర్డర్లకు మార్గం, ఖాతా ఇంటర్‌ఫేస్ అందిస్తారు.\n4. **డిపాజిటరీ:** NSDL, CDSL డీమ్యాట్ ఖాతాల్లోని సెక్యూరిటీల ఎలక్ట్రానిక్ రికార్డులను నిర్వహిస్తాయి.\n5. **క్లియరింగ్, సెటిల్‌మెంట్ వ్యవస్థ:** సరిపోలిన ట్రేడ్ బాధ్యతలను, సెక్యూరిటీలు మరియు నిధుల బదిలీని ప్రాసెస్ చేస్తుంది.\n\nఫోన్ యాప్ ఈ గొలుసులో ఒక భాగం మాత్రమే; అది ఎక్స్చేంజ్ లేదా డిపాజిటరీ కాదు.',
      },
    },
    {
      id: 'stg-eco-regulator',
      type: 'mechanism',
      title: { en: 'The Watchdog: SEBI', te: 'కాపలాదారు: సెబీ (SEBI)' },
      content: {
        en: 'The **Securities and Exchange Board of India (SEBI)** is the statutory regulator for India’s securities markets. It sets and enforces rules for market participants and has investor-protection and market-integrity responsibilities.\n\nRules, complaint routes, account requirements, and reporting schedules can change and may depend on the product or participant. Use current official SEBI and exchange information when you need to take action. Regulation supports fairer markets; it does not guarantee an investment, stop every scam, or remove market risk.',
        te: '**సెక్యూరిటీస్ అండ్ ఎక్స్చేంజ్ బోర్డ్ ఆఫ్ ఇండియా (SEBI)** భారత సెక్యూరిటీస్ మార్కెట్ల చట్టబద్ధ నియంత్రణ సంస్థ. మార్కెట్ భాగస్వాముల కోసం నియమాలు రూపొందించి అమలు చేస్తుంది; పెట్టుబడిదారుల రక్షణ, మార్కెట్ సమగ్రత కూడా దాని బాధ్యతల్లో భాగం.\n\nనియమాలు, ఫిర్యాదు మార్గాలు, ఖాతా అవసరాలు, నివేదికల సమయాలు మారవచ్చు; ఉత్పత్తి లేదా భాగస్వామిని బట్టి కూడా వేరుగా ఉండవచ్చు. చర్య తీసుకోవాల్సినప్పుడు ప్రస్తుత అధికారిక SEBI, ఎక్స్చేంజ్ సమాచారాన్ని చూడండి. నియంత్రణ న్యాయమైన మార్కెట్లకు తోడ్పడుతుంది; పెట్టుబడికి హామీ ఇవ్వదు, ప్రతి మోసాన్ని ఆపదు, మార్కెట్ రిస్క్‌ను తొలగించదు.',
      },
    },
    {
      id: 'stg-eco-exchanges',
      type: 'formal_concept',
      title: { en: 'The Exchanges: NSE vs BSE', te: 'ఎక్స్ఛేంజీలు: NSE vs BSE' },
      content: {
        en: 'The **BSE (BSE Limited)** and **NSE (National Stock Exchange of India)** are two Indian stock exchanges. They provide rule-based marketplaces where eligible securities can be listed and orders can be matched. A company may be listed on one exchange or more than one.\n\nThe **Sensex** and **Nifty 50** are indices associated with BSE and NSE respectively. An index is a measured group; it is not the whole market, and its movement does not mean every included share moved the same way.',
        te: '**BSE (BSE Limited)** మరియు **NSE (నేషనల్ స్టాక్ ఎక్స్చేంజ్ ఆఫ్ ఇండియా)** భారతీయ స్టాక్ ఎక్స్చేంజీలు. అర్హత ఉన్న సెక్యూరిటీలను లిస్ట్ చేయడానికి, ఆర్డర్లను సరిపోల్చడానికి నియమాల ఆధారిత మార్కెట్‌లను అందిస్తాయి. ఒక కంపెనీ ఒక ఎక్స్చేంజ్‌లో లేదా ఒకటి కంటే ఎక్కువ ఎక్స్చేంజ్‌లలో లిస్ట్ కావచ్చు.\n\n**సెన్సెక్స్**, **నిఫ్టీ 50** వరుసగా BSE, NSEకి సంబంధించిన సూచీలు. సూచీ ఒక కొలిచిన సమూహం మాత్రమే; మొత్తం మార్కెట్ కాదు. దాని కదలిక ప్రతి షేర్ ఒకే విధంగా కదిలిందని అర్థం కాదు.',
      },
    },
    {
      id: 'stg-eco-lifecycle',
      type: 'worked_example',
      title: { en: 'A Trade from Order to Settlement', te: 'ఆర్డర్ నుండి సెటిల్‌మెంట్ వరకు' },
      content: {
        en: 'Follow one fictional purchase:\n\n1. **Order:** Meera enters a buy order through her broker.\n2. **Routing and matching:** The broker routes it to an exchange. If it matches a seller’s order under the exchange rules, a trade occurs.\n3. **Clearing:** The clearing system calculates what each side owes.\n4. **Settlement and records:** Securities and funds are transferred and account records updated on the applicable schedule.\n\nSettlement timelines and procedures vary by market, product, and current rules. The diagram is a simplified learning model, not an instruction for a real trade.',
        te: 'ఒక ఊహాత్మక కొనుగోలును అనుసరించండి:\n\n1. **ఆర్డర్:** మీరా బ్రోకర్ ద్వారా కొనుగోలు ఆర్డర్ ఇస్తుంది.\n2. **మార్గం, సరిపోలిక:** బ్రోకర్ దాన్ని ఎక్స్చేంజ్‌కు పంపిస్తారు. ఎక్స్చేంజ్ నియమాల ప్రకారం అమ్మకందారు ఆర్డర్‌తో సరిపోతే ట్రేడ్ జరుగుతుంది.\n3. **క్లియరింగ్:** ప్రతి పక్షం ఏమి చెల్లించాలి లేదా బదిలీ చేయాలో క్లియరింగ్ వ్యవస్థ లెక్కిస్తుంది.\n4. **సెటిల్‌మెంట్, రికార్డులు:** వర్తించే షెడ్యూల్ ప్రకారం సెక్యూరిటీలు, నిధులు బదిలీ చేసి ఖాతా రికార్డులను నవీకరిస్తారు.\n\nసెటిల్‌మెంట్ గడువులు, విధానాలు మార్కెట్, ఉత్పత్తి, ప్రస్తుత నియమాలపై ఆధారపడి మారతాయి. ఈ చిత్రం సరళీకృత అభ్యాస నమూనా మాత్రమే; నిజమైన ట్రేడ్‌కు సూచన కాదు.',
      },
    },
    {
      id: 'stg-eco-misconception',
      type: 'misconception',
      title: { en: 'Busting Market Myths', te: 'అపోహలు - నిజాలు' },
      content: {
        en: '❌ **Misconception:** “My broker app is the same thing as my shareholding record.”\n\n✅ **Better way to think:** A broker provides an interface and services; electronic securities are recorded through the depository and demat-account system. A broker failure can still disrupt access or require administrative steps. Do not assume any financial asset is “100% safe”; for a real account problem, check current official instructions from the broker, depository, exchange, or regulator.',
        te: '❌ **అపోహ:** “నా బ్రోకర్ యాప్‌నే నా షేర్ల రికార్డు.”\n\n✅ **సరైన ఆలోచన:** బ్రోకర్ ఇంటర్‌ఫేస్, సేవలను అందిస్తారు; ఎలక్ట్రానిక్ సెక్యూరిటీల రికార్డులు డిపాజిటరీ, డీమ్యాట్ ఖాతా వ్యవస్థ ద్వారా నిర్వహించబడతాయి. బ్రోకర్ సమస్య వల్ల ఖాతా యాక్సెస్ ఆగిపోవచ్చు లేదా పరిపాలనా చర్యలు అవసరమవచ్చు. ఏ ఆర్థిక ఆస్తినీ “100% సురక్షితం” అని అనుకోకండి; నిజమైన ఖాతా సమస్య వస్తే బ్రోకర్, డిపాజిటరీ, ఎక్స్చేంజ్ లేదా నియంత్రణ సంస్థ తాజా అధికారిక సూచనలు చూడండి.',
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
            en: 'What is the purpose of the clearing and settlement part of a trade?',
            te: 'ట్రేడ్‌లో క్లియరింగ్, సెటిల్‌మెంట్ దశల ప్రయోజనం ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Calculate obligations and process the transfer of funds and securities', te: 'బాధ్యతలను లెక్కించి నిధులు, సెక్యూరిటీల బదిలీని ప్రాసెస్ చేయడం' },
            { en: 'Choose whether the company made a profit', te: 'కంపెనీ లాభం చేసిందో లేదో నిర్ణయించడం' },
            { en: 'Guarantee that the share price will rise', te: 'షేర్ ధర పెరుగుతుందని హామీ ఇవ్వడం' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Clearing calculates what each side owes; settlement processes the exchange of funds and securities. Applicable timelines depend on current market rules.',
            te: 'క్లియరింగ్ ప్రతి పక్షం బాధ్యతలను లెక్కిస్తుంది; సెటిల్‌మెంట్ నిధులు, సెక్యూరిటీల మార్పిడిని ప్రాసెస్ చేస్తుంది. వర్తించే గడువులు ప్రస్తుత మార్కెట్ నియమాలపై ఆధారపడతాయి.',
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
