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
        en: '❌ **The Universal Misconception:** Many beginner videos claim: *"When there are more buyers than sellers, the price goes up!"*\n\n✅ **The Reality:** In EVERY executed trade in the real world, there is **EXACTLY ONE BUYER AND EXACTLY ONE SELLER**! The number of shares bought ALWAYS equals the number of shares sold.\n\n**Why does price really move?**\nPrice moves because of **Urgency, Available Liquidity, and Aggressiveness**:\n- If eager buyers are willing to pay whatever sellers ask (hitting higher asks in the order book), the price ticks UP.\n- If nervous sellers are eager to dump shares and accept whatever buyers offer (hitting lower bids in the order book), the price ticks DOWN.\n\nIt is about the *prices at which participants are willing to transact*, not a literal head-count of buyers vs. sellers!',
        te: '❌ **సాధారణ అపోహ:** "అమ్మేవారికంటే కొనేవారు ఎక్కువ ఉంటే ధర పెరుగుతుంది!"\n\n✅ **నిజం:** ప్రతి పూర్తయిన ట్రేడ్‌లోనూ **ఖచ్చితంగా ఒక కొనుగోలుదారు మరియు ఒక అమ్మకందారు** ఉంటారు! కొన్న షేర్ల సంఖ్య అమ్మిన షేర్ల సంఖ్యకు సమానం.\n\nధర పెరగడానికి కారణం కొనుగోలుదారులు ఎక్కువ ధర చెల్లించడానికి కూడా సిద్ధపడటం, అమ్మేవారు అడిగిన ధరకు కొనడం. ఇది ఆత్రుత మరియు లిక్విడిటీకి సంబంధించినది, మనుషుల సంఖ్యకు కాదు!',
      },
    },
    {
      id: 'stg-mech-mechanism',
      type: 'mechanism',
      title: { en: 'Market Order vs. Limit Order', te: 'మార్కెట్ ఆర్డర్ vs లిమిట్ ఆర్డర్' },
      content: {
        en: 'When placing an order with a SEBI-registered broker:\n\n1. **Limit Order:** You state your exact target price. *"Buy 10 shares of Company X, but ONLY if price is ₹200 or lower."* You control the price, but your order might not execute if the market stays above ₹200.\n2. **Market Order:** You demand immediate execution at whatever price is available in the order book right now. You guarantee execution, but risk paying a slightly higher price (slippage) if liquidity is thin.',
        te: 'SEBI రిజిస్టర్డ్ బ్రోకర్ వద్ద ఆర్డర్ ఇచ్చే విధానాలు:\n\n1. **లిమిట్ ఆర్డర్ (Limit Order):** మీరు కోరుకున్న ధరకే ట్రేడ్ చేయాలి (ఉదా: ₹200 లేదా తక్కువ). ధర నియంత్రణ మీ చేతుల్లో ఉంటుంది.\n2. **మార్కెట్ ఆర్డర్ (Market Order):** వెంటనే ప్రస్తుత మార్కెట్ ధరకే ఆర్డర్ ఎగ్జిక్యూట్ అవ్వాలి. తక్షణమే జరుగుతుంది కానీ ధరలో కొద్దిగా హెచ్చుతగ్గులు ఉండవచ్చు.',
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
      ],
    },
  ],
};

export default stockMarketMechanicsLesson;
