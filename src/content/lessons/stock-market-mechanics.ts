import type { Lesson } from '@/types/content';

export const stockMarketMechanicsLesson: Lesson = {
  id: 'stock-market-mechanics',
  slug: 'stock-market-mechanics',
  title: {
    en: 'Stock Market Mechanics: Order Books & Real Price Discovery',
    te: 'స్టాక్ మార్కెట్ మెకానిక్స్: ఆర్డర్ బుక్స్ & నిజమైన ధర నిర్ణయం',
  },
  pillarId: 'invest',
  conceptIds: ['order-book', 'bid-ask', 'stock-exchange', 'liquidity'],
  level: 'core',
  estimatedMinutes: 14,
  prerequisites: ['businesses-and-shares'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-mkt-1',
      description: {
        en: 'Explain how bids and asks populate an order book and match via price/time priority.',
        te: 'బిడ్ మరియు ఆస్క్ ఆర్డర్‌లు ఆర్డర్ బుక్‌లో ధర/సమయ ప్రాధాన్యత ప్రకారం ఎలా సరిపోలుతాయో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-mkt-2',
      description: {
        en: 'Disprove the common misconception that "more buyers than sellers makes the price go up".',
        te: '"అమ్మేవారికంటే కొనేవారు ఎక్కువ ఉంటే ధర పెరుగుతుంది" అనే అపోహను తిరస్కరించి అసలైన కారణాన్ని వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-mkt-3',
      description: {
        en: 'Distinguish between market orders and limit orders in trade execution.',
        te: 'మార్కెట్ ఆర్డర్లు మరియు లిమిట్ ఆర్డర్ల మధ్య తేడాను స్పష్టంగా గుర్తించడం.',
      },
      evidenceType: 'compare',
    },
  ],
  stages: [
    {
      id: 'stg-mech-hook',
      type: 'hook',
      title: { en: 'Selling a Rare Cricket Card', te: 'అరుదైన క్రికెట్ కార్డ్ అమ్మకం' },
      content: {
        en: 'Imagine you have an exclusive Virat Kohli collectible card. You want to sell it for ₹500.\n\nFive people gather around you:\n- Aamir offers ₹350\n- Bhavna offers ₹400\n- Chetan offers ₹420\n\nNotice: Bhavna and Aamir want to buy, but their prices are too low. Chetan has the **Highest Bid** at ₹420. You have the **Lowest Ask** at ₹500. No trade happens until either you lower your ask to ₹420, or Chetan raises his bid to ₹500!\n\nThis exact bargaining mechanism is how the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) match millions of orders every second.',
        te: 'మీ వద్ద ఒక ప్రత్యేకమైన విరాట్ కోహ్లీ క్రికెట్ కార్డ్ ఉందనుకోండి. మీరు దాన్ని ₹500కి అమ్మాలనుకుంటున్నారు.\n\nకొనేవారు: అమీర్ ₹350, భావన ₹400, చేతన్ ₹420 ఆఫర్ చేశారు. చేతన్ ఆఫర్ అత్యధికం (Highest Bid: ₹420). మీరు అడిగేది (Lowest Ask: ₹500). మీరు తగ్గించే వరకు లేదా చేతన్ పెంచే వరకు లావాదేవీ జరగదు!\n\nఇలాగే నేషనల్ స్టాక్ ఎక్స్ఛేంజ్ (NSE) లో ఆర్డర్లు మ్యాచ్ అవుతాయి.',
      },
    },
    {
      id: 'stg-mech-intuition',
      type: 'intuition',
      title: { en: 'The Order Book & The Spread', te: 'ఆర్డర్ బుక్ & స్ప్రెడ్' },
      content: {
        en: 'The **Order Book** is a live electronic ledger showing all pending buy and sell orders:\n\n- **BID (Buy Orders):** What buyers are willing to pay (sorted highest price first).\n- **ASK (Sell Orders):** What sellers are willing to accept (sorted lowest price first).\n- **SPREAD:** The difference between the highest bid and the lowest ask.\n\nWhen a buyer agrees to meet a seller\'s price (or vice versa), an order matches and a trade executes. That trade price becomes the **Last Traded Price (LTP)**.',
        te: '**ఆర్డర్ బుక్** అనేది పెండింగ్‌లో ఉన్న అన్ని కొనుగోలు మరియు అమ్మకం ఆర్డర్‌ల లైవ్ పుస్తకం.\n\n- **బిడ్ (Bids):** కొనుగోలుదారులు చెల్లించాలనుకుంటున్న ధరలు.\n- **ఆస్క్ (Asks):** అమ్మకందారులు కోరుకుంటున్న ధరలు.\n- **స్ప్రెడ్ (Spread):** అత్యధిక బిడ్ మరియు అత్యల్ప ఆస్క్ మధ్య తేడా.\n\nధరలు కలిసినప్పుడు ట్రేడ్ పూర్తవుతుంది. దాన్నే లాస్ట్ ట్రేడెడ్ ప్రైస్ (LTP) అంటారు.',
      },
    },
    {
      id: 'stg-mech-misconception',
      type: 'misconception',
      title: { en: 'CRITICAL CORRECTION: "More Buyers Than Sellers?"', te: 'కీలకమైన సవరణ: "అమ్మేవారికంటే కొనేవారు ఎక్కువా?"' },
      content: {
        en: '❌ **Oversimplification:** “There are more buyers than sellers, so the price must rise.”\n\n✅ **What is missing:** Every matched quantity has a buyer and a seller, but many orders may be waiting at different prices and quantities. The quoted price can change as orders arrive, cancel, or trade.\n\nIf a buyer accepts the lowest available asking price, that order may trade there; if a seller accepts the highest available bid, it may trade there. Liquidity, order size, timing, and market rules matter. A simple count of people who want to buy or sell cannot by itself tell you the next price.',
        te: '❌ **అతి సరళీకరణ:** “అమ్మేవారికంటే కొనేవారు ఎక్కువ, కాబట్టి ధర తప్పకుండా పెరుగుతుంది.”\n\n✅ **ఇందులో మిగిలినది:** సరిపోలిన ప్రతి పరిమాణానికి కొనుగోలుదారు, అమ్మకందారు ఉంటారు; కానీ వేర్వేరు ధరలు, పరిమాణాల వద్ద అనేక ఆర్డర్లు వేచి ఉండవచ్చు. ఆర్డర్లు రావడం, రద్దవడం లేదా ట్రేడ్ కావడంతో సూచించిన ధర మారవచ్చు.\n\nకొనుగోలుదారు అందుబాటులో ఉన్న అతి తక్కువ అమ్మకపు ధరను అంగీకరిస్తే అక్కడ ట్రేడ్ కావచ్చు; అమ్మకందారు అందుబాటులో ఉన్న అత్యధిక బిడ్‌ను అంగీకరిస్తే అక్కడ కావచ్చు. లిక్విడిటీ, ఆర్డర్ పరిమాణం, సమయం, మార్కెట్ నియమాలు ముఖ్యం. కొనాలనుకునే లేదా అమ్మాలనుకునే వారి సంఖ్య ఒక్కటే తదుపరి ధరను చెప్పదు.',
      },
    },
    {
      id: 'stg-mech-mechanism',
      type: 'mechanism',
      title: { en: 'Market Order vs. Limit Order', te: 'మార్కెట్ ఆర్డర్ vs లిమిట్ ఆర్డర్' },
      content: {
        en: 'In this simplified example, a buyer wants 10 shares at no more than ₹200:\n\n1. **Limit order:** Sets the maximum price the buyer will accept (or minimum price for a seller). It can remain unfilled if no acceptable order matches it.\n2. **Market order:** Requests a trade against available orders, generally prioritizing execution over a chosen price. It can fill at more than one price, be partially filled, or remain unfilled if there is not enough available liquidity.\n\nActual order instructions and outcomes depend on the exchange and broker rules. Neither order type removes price or execution risk.',
        te: 'ఈ సరళ ఉదాహరణలో కొనుగోలుదారు 10 షేర్లకు గరిష్ఠంగా ₹200 చెల్లించాలనుకుంటున్నారు:\n\n1. **లిమిట్ ఆర్డర్:** కొనుగోలుదారు అంగీకరించే గరిష్ఠ ధరను (లేదా విక్రేత అంగీకరించే కనిష్ఠ ధరను) నిర్ణయిస్తుంది. సరిపోయే ఆర్డర్ లేకపోతే ఇది అమలు కాకుండా ఉండవచ్చు.\n2. **మార్కెట్ ఆర్డర్:** అందుబాటులో ఉన్న ఆర్డర్లతో ట్రేడ్ చేయమని కోరుతుంది; సాధారణంగా ఎంచుకున్న ధర కంటే అమలుకు ప్రాధాన్యత ఇస్తుంది. వేర్వేరు ధరల వద్ద కొంత లేదా మొత్తం అమలవచ్చు; లిక్విడిటీ లేకపోతే పూర్తిగా అమలుకాకపోవచ్చు.\n\nఅసలు ఆర్డర్ సూచనలు, ఫలితాలు ఎక్స్చేంజ్ మరియు బ్రోకర్ నియమాలపై ఆధారపడతాయి. ఏ ఆర్డర్ రకమూ ధర లేదా అమలు రిస్క్‌ను తొలగించదు.',
      },
    },
    {
      id: 'stg-mech-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Quiz', te: 'నైపుణ్య క్విజ్' },
      content: {
        en: 'Verify your understanding of market mechanics and order books.',
        te: 'మార్కెట్ మెకానిక్స్ మరియు ఆర్డర్ బుక్స్‌పై మీ అవగాహనను పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-mkt-m-1',
          question: {
            en: 'In every completed stock transaction on the exchange, what is the relationship between shares bought and shares sold?',
            te: 'స్టాక్ ఎక్స్ఛేంజ్‌లో పూర్తయిన ప్రతి లావాదేవీలో, కొనుగోలు చేసిన షేర్లు మరియు అమ్మిన షేర్ల మధ్య సంబంధం ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Shares bought exactly equal shares sold (every trade has a buyer and a seller)', te: 'కొన్న షేర్లు అమ్మిన షేర్లకు సమానం (ప్రతి ట్రేడ్‌లో కొనేవారు, అమ్మేవారు ఉంటారు)' },
            { en: 'There are more shares bought when prices rise', te: 'ధర పెరిగినప్పుడు కొన్న షేర్లు ఎక్కువ ఉంటాయి' },
            { en: 'The exchange creates new shares out of thin air', te: 'ఎక్స్ఛేంజ్ కొత్త షేర్లను గాల్లోంచి సృష్టిస్తుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Every trade is a matched pair: for every buyer who acquired 50 shares, a seller transferred 50 shares. Price changes reflect shifting order book bids and asks!',
            te: 'ప్రతి లావాదేవీ ఒక జంట: 50 షేర్లు కొన్నారంటే మరొకరు 50 షేర్లు అమ్మినట్లే!',
          },
          objectiveId: 'obj-mkt-2',
        },
        {
          id: 'q-mkt-m-2',
          question: {
            en: 'The highest buyer bid is ₹99 and the lowest seller ask is ₹100. What does this simplified order-book snapshot indicate?',
            te: 'అత్యధిక కొనుగోలు బిడ్ ₹99, అత్యల్ప అమ్మకపు ధర ₹100. ఈ సరళ ఆర్డర్ బుక్ దృశ్యం ఏమి సూచిస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'There is a ₹1 spread and those two prices have not matched yet', te: '₹1 స్ప్రెడ్ ఉంది; ఆ రెండు ధరలు ఇంకా సరిపోలలేదు' },
            { en: 'A trade at ₹99 is guaranteed immediately', te: '₹99 వద్ద వెంటనే ట్రేడ్ ఖచ్చితంగా జరుగుతుంది' },
            { en: 'The exchange must raise the price to ₹100', te: 'ఎక్స్చేంజ్ తప్పనిసరిగా ధరను ₹100కి పెంచుతుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'The spread is the lowest ask minus the highest bid. If prices do not cross, these orders may remain pending; other orders or market rules can affect what happens next.',
            te: 'స్ప్రెడ్ = అత్యల్ప అమ్మకపు ధర − అత్యధిక బిడ్. ధరలు కలవకపోతే ఆర్డర్లు వేచి ఉండవచ్చు; ఇతర ఆర్డర్లు, మార్కెట్ నియమాలు తదుపరి ఫలితాన్ని మార్చవచ్చు.',
          },
          objectiveId: 'obj-mkt-1',
        },
        {
          id: 'q-mkt-m-3',
          question: {
            en: 'Which statement best distinguishes a limit order from a market order?',
            te: 'లిమిట్ ఆర్డర్, మార్కెట్ ఆర్డర్ మధ్య తేడాను ఏ వాక్యం సరిగ్గా వివరిస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'A limit order sets a price boundary and may not execute; a market order seeks available execution but price can vary', te: 'లిమిట్ ఆర్డర్ ధర పరిమితి పెడుతుంది, అమలుకాకపోవచ్చు; మార్కెట్ ఆర్డర్ అందుబాటులో అమలును కోరుతుంది, కానీ ధర మారవచ్చు' },
            { en: 'Both guarantee an immediate trade at the displayed price', te: 'రెండూ చూపిన ధర వద్ద తక్షణ ట్రేడ్‌కు హామీ ఇస్తాయి' },
            { en: 'A market order can only be used when there are no sellers', te: 'అమ్మేవారు లేనప్పుడే మార్కెట్ ఆర్డర్ ఉపయోగించవచ్చు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Limit orders control the acceptable price but can remain unfilled. Market orders prioritize execution against available liquidity, while the execution price and completeness are not guaranteed.',
            te: 'లిమిట్ ఆర్డర్ అంగీకరించే ధరను నియంత్రిస్తుంది, కానీ అమలుకాకపోవచ్చు. మార్కెట్ ఆర్డర్ అందుబాటులో ఉన్న లిక్విడిటీతో అమలుకు ప్రాధాన్యత ఇస్తుంది; ధర, పూర్తిస్థాయి అమలుకు హామీ లేదు.',
          },
          objectiveId: 'obj-mkt-3',
        },
      ],
    },
  ],
};

export default stockMarketMechanicsLesson;
