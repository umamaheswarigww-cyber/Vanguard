import type { Lesson } from '@/types/content';

export const marketIndicesLesson: Lesson = {
  id: 'market-indices',
  slug: 'market-indices',
  title: {
    en: 'Stock Market Indices — Reading the Market\'s Pulse',
    te: 'స్టాక్ మార్కెట్ సూచీలు — మార్కెట్ స్పందన చదవడం',
  },
  pillarId: 'invest',
  conceptIds: ['index', 'nifty-50', 'sensex', 'free-float'],
  level: 'core',
  estimatedMinutes: 16,
  prerequisites: ['businesses-and-shares', 'stock-market-ecosystem'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-idx-1',
      description: {
        en: 'Explain what an index is and why it serves as a representative benchmark.',
        te: 'ఇండెక్స్ అంటే ఏమిటి మరియు అది ప్రామాణిక బెంచ్‌మార్క్‌గా ఎందుకు పనిచేస్తుందో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-idx-2',
      description: {
        en: 'Contrast Nifty 50 and BSE Sensex in terms of basket size, base year, and exchange.',
        te: 'నిఫ్టీ 50 మరియు బాంబే సెన్సెక్స్ మధ్య కంపెనీల సంఖ్య, బేస్ సంవత్సరం మరియు ఎక్స్ఛేంజ్ పరంగా తేడాలను గుర్తించడం.',
      },
      evidenceType: 'compare',
    },
    {
      id: 'obj-idx-3',
      description: {
        en: 'Demonstrate how free-float market-capitalization weighting influences index movements.',
        te: 'ఫ్రీ-ఫ్లోట్ మార్కెట్ క్యాపిటలైజేషన్ ఆధారంగా ఇండెక్స్ ఎలా కదులుతుందో ప్రదర్శించడం.',
      },
      evidenceType: 'predict',
    },
  ],
  stages: [
    {
      id: 'stg-idx-hook',
      type: 'hook',
      title: { en: 'When the News Says "Market Up 600 Points"', te: 'వార్తలలో మార్కెట్ 600 పాయింట్లు పెరిగింది అన్నప్పుడు' },
      content: {
        en: 'Every evening, TV news anchors announce: "The Sensex surged 500 points today while the Nifty closed above 25,000!" But what does that single number mean? Did thousands of companies all rise equally? Can a stock fall on a day the index jumps? Let’s decode the market thermometer.',
        te: 'ప్రతి సాయంత్రం వార్తలలో "సెన్సెక్స్ 500 పాయింట్లు పెరిగింది, నిఫ్టీ సరికొత్త రికార్డు సృష్టించింది" అని వింటుంటాం. ఆ ఒక్క సంఖ్య మొత్తం మార్కెట్‌ను ఎలా సూచిస్తుంది? ఇండెక్స్ పెరిగిన రోజున కొన్ని షేర్లు పడిపోవచ్చా? తెలుసుకుందాం.',
      },
    },
    {
      id: 'stg-idx-discovery',
      type: 'discovery',
      title: { en: 'What is an Index?', te: 'ఇండెక్స్ అంటే ఏమిటి?' },
      content: {
        en: 'There are over 5,000 listed companies on BSE and 2,000+ on NSE. No human could track all of them daily.\n\nAn **Index** is a curated basket of top companies selected to represent the health of the entire economy or a specific industry:\n• **General Barometer:** If the basket rises, it signals economic optimism and capital inflows.\n• **Benchmark for Investors:** If an active fund manager made 10% this year while the Nifty 50 made 14%, the fund manager underperformed the index!\n• **Foundation for Index Funds:** Mutual funds can mirror this exact basket so you can invest in India’s growth with minimal fees.',
        te: 'భారతదేశంలో వేలాది లిస్టెడ్ కంపెనీలు ఉన్నాయి. వాటన్నింటినీ రోజూ గమనించడం అసాధ్యం.\nఇండెక్స్ అంటే దేశ ఆర్థిక వ్యవస్థకు ప్రతిబింబంగా ఉండే అగ్రశ్రేణి కంపెనీల బాస్కెట్. ఇది మార్కెట్ గమనాన్ని తెలియజేసే కొలమానం.',
      },
    },
    {
      id: 'stg-idx-twins',
      type: 'mechanism',
      title: { en: 'India\'s Twin Flagship Indices', te: 'భారతదేశ ప్రధాన సూచీలు' },
      content: {
        en: 'India’s financial landscape is guided by two legendary indices:\n\n### 1. BSE S&P Sensex\n• **Exchange:** Bombay Stock Exchange (BSE)\n• **Basket:** 30 large, established blue-chip companies across key sectors.\n• **Base Date & Base Value:** April 1, 1979 = Base 100.\n• **Trivia:** Coined by stock market analyst Deepak Mohoni from "Sensitive Index".\n\n### 2. Nifty 50\n• **Exchange:** National Stock Exchange (NSE)\n• **Basket:** 50 diversified industry leaders covering over 60% of traded value.\n• **Base Date & Base Value:** November 3, 1995 = Base 1,000.\n• **Managed by:** NSE Indices Ltd.\n\nBoth indices use the **Free-Float Market Capitalization** methodology.',
        te: 'భారతదేశంలో రెండు ప్రముఖ సూచీలు ఉన్నాయి:\n1. సెన్సెక్స్ (Sensex): BSE కి చెందిన 30 అగ్ర కంపెనీల సూచిక. 1979 లో బేస్ విలువ 100 తో ప్రారంభమైంది.\n2. నిఫ్టీ 50 (Nifty 50): NSE కి చెందిన 50 అగ్ర కంపెనీల సూచిక. 1995 లో బేస్ విలువ 1,000 తో ప్రారంభమైంది.\nరెండూ ఫ్రీ-ఫ్లోట్ మార్కెట్ క్యాప్ ఆధారంగా పనిచేస్తాయి.',
      },
    },
    {
      id: 'stg-idx-freefloat',
      type: 'formal_concept',
      title: { en: 'How Free-Float Weighting Works', te: 'ఫ్రీ-ఫ్లోట్ వెయిటేజ్ ఎలా పనిచేస్తుంది' },
      content: {
        en: 'Not all shares in a company are available for the public to trade:\n\n• **Total Market Cap:** Total Shares Issued × Current Share Price.\n• **Locked Shares:** Stakes held by company promoters, founders, governments, or strategic lock-ins.\n• **Free-Float Market Cap:** Only shares actively tradeable on the open public exchange.\n\n$$\\text{Free-Float Market Cap} = \\text{Share Price} \\times \\text{Total Shares} \\times \\text{Free-Float Factor}$$\n\nCompanies with higher free-float capital hold higher "weight" in the index. For example, if HDFC Bank or Reliance moves 3%, it sways the Nifty far more than a smaller company moving 3%!',
        te: 'కంపెనీ షేర్లన్నీ మార్కెట్లో అమ్మకానికి ఉండవు. ప్రమోటర్లు లేదా ప్రభుత్వం వద్ద ఉన్న షేర్లను తీసివేసి, ప్రజలు ట్రేడ్ చేయగల షేర్ల విలువ ఆధారంగా సూచీలో స్థానం నిర్ణయించబడుతుంది. ఎక్కువ ఫ్రీ-ఫ్లోట్ ఉన్న కంపెనీల కదలికలు ఇండెక్స్‌ను ఎక్కువగా ప్రభావితం చేస్తాయి.',
      },
    },
    {
      id: 'stg-idx-sim',
      type: 'experiment',
      title: { en: 'Hands-On: The Market Index Simulator', te: 'మార్కెట్ ఇండెక్స్ సిమ్యులేటర్' },
      content: {
        en: 'Use the interactive simulator below. Drag stock prices up and down to see how market caps affect the total index value in real time!',
        te: 'క్రింది ఇంటరాక్టివ్ సిమ్యులేటర్‌ని ఉపయోగించండి. వివిధ షేర్ల ధరలను మార్చి ఇండెక్స్ ఎలా స్పందిస్తుందో ప్రత్యక్షంగా చూడండి!',
      },
      interactionKey: 'market-indices-lab',
    },
    {
      id: 'stg-idx-misconception',
      type: 'misconception',
      title: { en: 'The Myth of Universal Movement', te: 'అపోహ: అన్నీ కలిసే పెరుగుతాయి' },
      content: {
        en: '❌ **Misconception:** "The Nifty rose 1% today, so my stocks definitely went up!"\n\n✅ **Truth:** The index is a weighted average of just 50 companies. On a day the Nifty is green, 20 of its member stocks might actually have fallen, but 5 mega-cap companies rose strongly enough to pull the whole index upward. Smaller mid-cap and small-cap stocks frequently move in opposite directions to the benchmark.',
        te: '❌ అపోహ: "నిఫ్టీ 1% పెరిగింది కాబట్టి నా షేర్లు అన్నీ ఖచ్చితంగా పెరిగి ఉంటాయి!"\n✅ వాస్తవం: ఇండెక్స్ అనేది కేవలం 50 కంపెనీల సగటు. నిఫ్టీ పెరిగిన రోజు కూడా అందులోని అనేక కంపెనీలు నష్టపోవచ్చు. పెద్ద కంపెనీల భారీ పెరుగుదల మొత్తం ఇండెక్స్‌ను పైకి లాగుతుంది.',
      },
    },
    {
      id: 'stg-idx-mastery',
      type: 'mastery_check',
      title: { en: 'Market Indices Mastery Quiz', te: 'సూచీల నైపుణ్య క్విజ్' },
      content: {
        en: 'Verify your knowledge of stock market indices.',
        te: 'స్టాక్ మార్కెట్ సూచీలపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-idx-1',
          question: {
            en: 'A hypothetical index has three companies. If the largest company falls but the other two rise, can the index still rise?',
            te: 'ఒక ఊహాత్మక సూచీలో మూడు కంపెనీలు ఉన్నాయి. అతిపెద్ద కంపెనీ పడిపోయినా మిగతా రెండు పెరిగితే సూచీ ఇంకా పెరగగలదా?',
          },
          type: 'mcq',
          options: [
            { en: 'Yes; the result depends on constituent weights and price changes', te: 'అవును; ఫలితం కంపెనీల బరువులు, ధర మార్పులపై ఆధారపడుతుంది' },
            { en: 'No; every constituent must rise for an index to rise', te: 'కాదు; సూచీ పెరగాలంటే ప్రతి కంపెనీ పెరగాలి' },
            { en: 'No; a falling company always sets the index value', te: 'కాదు; పడిపోయే కంపెనీ ఎప్పుడూ సూచీ విలువను నిర్ణయిస్తుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'An index combines constituent movements according to its method and weights. Some constituents may fall while the overall index rises.',
            te: 'సూచీ తన విధానం, బరువుల ప్రకారం కంపెనీల మార్పులను కలుపుతుంది. మొత్తం సూచీ పెరిగినా కొన్ని కంపెనీలు పడిపోవచ్చు.',
          },
          objectiveId: 'obj-idx-2',
        },
        {
          id: 'q-idx-2',
          question: {
            en: 'Why do indices use "Free-Float" market capitalization rather than total market capitalization?',
            te: 'సూచీలు మొత్తం మార్కెట్ క్యాప్ కాకుండా ఫ్రీ-ఫ్లోట్ మార్కెట్ క్యాప్‌ను ఎందుకు ఉపయోగిస్తాయి?',
          },
          type: 'mcq',
          options: [
            { en: 'To only reflect shares genuinely available for public trading', te: 'ప్రజల ట్రేడింగ్ కోసం వాస్తవంగా అందుబాటులో ఉన్న షేర్లను మాత్రమే పరిగణనలోకి తీసుకోవడానికి' },
            { en: 'Because promoters do not pay taxes', te: 'ప్రమోటర్లు పన్నులు చెల్లించరు కాబట్టి' },
            { en: 'To make the index number smaller', te: 'ఇండెక్స్ సంఖ్యను చిన్నదిగా చేయడానికి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Free-float excludes locked promoter and government shares so the index reflects public market liquidity.',
            te: 'లాక్ చేయబడిన ప్రమోటర్ వాటాలను మినహాయించి పబ్లిక్ మార్కెట్ లిక్విడిటీని ప్రతిబింబించడానికి ఫ్రీ-ఫ్లోట్ ఉపయోగిస్తారు.',
          },
          objectiveId: 'obj-idx-3',
        },
        {
          id: 'q-idx-3',
          question: {
            en: 'If one company has a larger index weight than another, what does that usually mean in a weighted index model?',
            te: 'ఒక కంపెనీకి మరొకదానికంటే ఎక్కువ సూచీ బరువు ఉంటే, బరువు ఆధారిత సూచీ నమూనాలో దాని అర్థం ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Its movement can have a larger effect on the index calculation', te: 'దాని మార్పు సూచీ లెక్కపై ఎక్కువ ప్రభావం చూపవచ్చు' },
            { en: 'Its share price cannot fall', te: 'దాని షేర్ ధర పడిపోదు' },
            { en: 'Every other constituent must move in the same direction', te: 'మిగతా ప్రతి కంపెనీ అదే దిశలో కదలాలి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'In a weighted index, larger weights contribute more to the combined movement, though the exact method depends on the index rules.',
            te: 'బరువు ఆధారిత సూచీలో పెద్ద బరువులు మొత్తం మార్పుకు ఎక్కువ తోడ్పడతాయి; ఖచ్చితమైన విధానం సూచీ నియమాలపై ఆధారపడుతుంది.',
          },
          objectiveId: 'obj-idx-1',
        },
      ],
    },
  ],
};

export default marketIndicesLesson;
