import type { Lesson } from '@/types/content';

export const inflationExplorerLesson: Lesson = {
  id: 'inflation-explorer',
  slug: 'inflation-explorer',
  title: {
    en: 'Inflation & Purchasing Power: The Silent Thief',
    te: 'ద్రవ్యోల్బణం & కొనుగోలు శక్తి: నిశ్శబ్ద దొంగ',
  },
  pillarId: 'save',
  conceptIds: ['inflation', 'real-return', 'nominal-return'],
  level: 'core',
  estimatedMinutes: 10,
  prerequisites: ['simple-vs-compound'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-inflation-1',
      description: {
        en: 'Explain why a static cash balance loses purchasing power over time.',
        te: 'స్థిరంగా ఉన్న నగదు విలువ కాలక్రమేణా కొనుగోలు శక్తిని ఎందుకు కోల్పోతుందో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-inflation-2',
      description: {
        en: 'Calculate the purchasing power equivalent of ₹1,00,000 under a hypothetical 6% annual inflation rate.',
        te: '6% వార్షిక ద్రవ్యోల్బణ ఊహ కింద ₹1,00,000 యొక్క నిజమైన విలువను లెక్కించడం.',
      },
      evidenceType: 'calculate',
    },
    {
      id: 'obj-inflation-3',
      description: {
        en: 'Distinguish between nominal return and real (inflation-adjusted) return.',
        te: 'నామమాత్రపు రాబడి మరియు నిజమైన రాబడి మధ్య వ్యత్యాసాన్ని గుర్తించడం.',
      },
      evidenceType: 'classify',
    },
  ],
  stages: [
    {
      id: 'stg-inf-hook',
      type: 'hook',
      title: { en: 'The ₹50 Masala Dosa in 2010', te: '2010 లో ₹50 మసాలా దోశ' },
      content: {
        en: 'Imagine a fictional breakfast costs ₹50 this year. In a made-up future example, the same breakfast costs ₹100. The rupee amount doubled, but the meal did not. What changed is how many breakfasts a given amount of money can buy. A broad rise in prices is called **inflation**; actual prices vary by item and place.',
        te: 'ఒక ఊహాత్మక అల్పాహారం ఈ సంవత్సరం ₹50 అనుకుందాం. కల్పిత భవిష్యత్ ఉదాహరణలో అదే అల్పాహారం ₹100 అవుతుంది. రూపాయల మొత్తం రెండింతలైంది, కానీ ఆహారం మారలేదు. అదే డబ్బుతో ఎన్ని అల్పాహారాలు కొనగలమో మారింది. ధరలు విస్తృతంగా పెరగడాన్ని **ద్రవ్యోల్బణం** అంటారు; అసలు ధరలు వస్తువు, ప్రాంతాన్ని బట్టి మారుతాయి.',
      },
    },
    {
      id: 'stg-inf-intuition',
      type: 'intuition',
      title: { en: 'Nominal Rupee vs. Real Purchasing Power', te: 'నామమాత్రపు రూపాయి vs నిజమైన కొనుగోలు శక్తి' },
      content: {
        en: 'A ₹500 note still has a **nominal value** of ₹500 later. In a fictional example, suppose a book costs ₹100 now, so ₹500 buys five books. If that same book later costs ₹250, ₹500 buys two. The note did not shrink; its **purchasing power** for this item changed.\n\nThis result depends on the assumed prices. If prices rise over time, holding a fixed amount of cash may buy less of the same basket; actual inflation is not constant and varies across items.',
        te: 'తర్వాత కూడా ₹500 నోటు **నామమాత్రపు విలువ** ₹500గానే ఉంటుంది. ఒక ఊహాత్మక ఉదాహరణలో పుస్తకం ఇప్పుడు ₹100 అనుకుందాం; ₹500తో ఐదు పుస్తకాలు వస్తాయి. తర్వాత అదే పుస్తకం ₹250 అయితే, ₹500తో రెండు మాత్రమే వస్తాయి. నోటు చిన్నది కాలేదు; ఆ వస్తువుకు దాని **కొనుగోలు శక్తి** మారింది.\n\nఈ ఫలితం ఊహించిన ధరలపై ఆధారపడుతుంది. కాలక్రమంలో ధరలు పెరిగితే స్థిర మొత్తం నగదుతో అదే వస్తువులు తక్కువగా కొనగలుగుతాం; అసలు ద్రవ్యోల్బణం స్థిరంగా ఉండదు, వస్తువుల వారీగా మారుతుంది.',
      },
    },
    {
      id: 'stg-inf-mechanism',
      type: 'mechanism',
      title: { en: 'The Purchasing Power Formula', te: 'కొనుగోలు శక్తి గణిత సూత్రం' },
      content: {
        en: 'Assume, only for this model, that prices rise by 6% every year. In the formula, *i* is the assumed annual inflation rate as a decimal and *t* is the number of years. To express a future amount in today’s purchasing-power terms:\n\n$$Today equivalent = Future amount / (1 + i)^t$$\n\nIf the future amount is ₹1,00,000 after 10 years, then ₹1,00,000 ÷ (1.06)^10 ≈ ₹55,839 in today’s price terms. This does not predict inflation or mean ₹44,161 has literally disappeared; it compares what the amount could buy under a constant-rate assumption.',
        te: 'ఈ నమూనా కోసం మాత్రమే ధరలు ప్రతి సంవత్సరం 6% పెరుగుతాయని అనుకుందాం. ఈ సూత్రంలో *i* అంటే దశాంశ రూపంలో ఊహించిన వార్షిక ద్రవ్యోల్బణ రేటు; *t* అంటే సంవత్సరాల సంఖ్య. భవిష్యత్ మొత్తాన్ని నేటి కొనుగోలు శక్తిలో చెప్పడానికి:\n\n$$నేటి సమాన విలువ = భవిష్యత్ మొత్తం / (1 + i)^t$$\n\n10 సంవత్సరాల తర్వాత మొత్తం ₹1,00,000 అయితే, ₹1,00,000 ÷ (1.06)^10 ≈ నేటి ధరల ప్రకారం ₹55,839. ఇది ద్రవ్యోల్బణ అంచనా కాదు; ₹44,161 నిజంగా మాయమైందని కాదు. స్థిర రేటు ఊహలో ఆ మొత్తం ఏమి కొనగలదో పోల్చుతుంది.',
      },
    },
    {
      id: 'stg-inf-experiment',
      type: 'experiment',
      title: { en: 'Interactive Inflation Explorer', te: 'ఇంటరాక్టివ్ ద్రవ్యోల్బణ ఎక్స్‌ప్లోరర్' },
      content: {
        en: 'Change the amount, assumed inflation rate, and years. Compare purchasing power under this simplified assumption; it is not a forecast or a recommendation about where to save.',
        te: 'మొత్తం, ఊహాత్మక ద్రవ్యోల్బణ రేటు, సంవత్సరాలను మార్చండి. ఈ సరళీకృత ఊహలో కొనుగోలు శక్తిని పోల్చండి; ఇది అంచనా లేదా ఎక్కడ పొదుపు చేయాలనే సిఫార్సు కాదు.',
      },
      interactionKey: 'inflation-explorer',
    },
    {
      id: 'stg-inf-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Quiz', te: 'నైపుణ్య క్విజ్' },
      content: {
        en: 'Confirm your understanding of inflation and real returns.',
        te: 'ద్రవ్యోల్బణం మరియు నిజమైన రాబడిపై మీ అవగాహనను పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-inf-m-1',
          question: {
            en: 'If your savings account earns 3% interest per year, but inflation is 6% per year, what happens to your real purchasing power?',
            te: 'మీ సేవింగ్స్ ఖాతా 3% వడ్డీ ఇస్తుంటే, ద్రవ్యోల్బణం 6% ఉంటే, మీ నిజమైన కొనుగోలు శక్తి ఏమవుతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'Your purchasing power grows by 3%', te: 'కొనుగోలు శక్తి 3% పెరుగుతుంది' },
            { en: 'Your purchasing power shrinks by about 3% each year (3% - 6% = -3% approx)', te: 'కొనుగోలు శక్తి ఏటా సుమారు 3% తగ్గుతుంది' },
            { en: 'Nothing happens because the bank guarantees the money', te: 'బ్యాంక్ హామీ ఇచ్చినందున ఏమీ మారదు' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Approximate real return = Nominal return (3%) - Inflation (6%) = -3%. Even though your bank balance displays a larger rupee number, your money buys LESS.',
            te: 'నిజమైన రాబడి = నామమాత్రపు రాబడి (3%) - ద్రవ్యోల్బణం (6%) = -3%. రూపాయి సంఖ్య పెరిగినా కొనుగోలు శక్తి తగ్గుతుంది.',
          },
          objectiveId: 'obj-inflation-3',
        },
        {
          id: 'q-inf-m-2',
          question: {
            en: 'Under a constant 10% inflation assumption, about how much is ₹100 from one year in the future worth in today’s purchasing power?',
            te: 'ఏటా 10% ద్రవ్యోల్బణం అనే స్థిర ఊహలో, ఒక సంవత్సరం తర్వాతి ₹100 నేటి కొనుగోలు శక్తిలో సుమారు ఎంత విలువ చేస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: '₹90.91, because ₹100 ÷ 1.10 ≈ ₹90.91', te: '₹90.91, ఎందుకంటే ₹100 ÷ 1.10 ≈ ₹90.91' },
            { en: '₹110, because inflation adds to the future amount', te: '₹110, ఎందుకంటే ద్రవ్యోల్బణం భవిష్యత్ మొత్తానికి కలుస్తుంది' },
            { en: '₹100, because the rupee amount is unchanged', te: '₹100, ఎందుకంటే రూపాయి మొత్తం మారదు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'To convert a future amount to today’s purchasing-power terms, divide by (1 + inflation rate)^years. This is an assumption-based comparison, not a forecast.',
            te: 'భవిష్యత్ మొత్తాన్ని నేటి కొనుగోలు శక్తిలోకి మార్చడానికి (1 + ద్రవ్యోల్బణ రేటు)^సంవత్సరాలతో భాగించాలి. ఇది ఊహ ఆధారిత పోలిక మాత్రమే, అంచనా కాదు.',
          },
          objectiveId: 'obj-inflation-2',
        },
        {
          id: 'q-inf-m-3',
          question: {
            en: 'A nominal return is 8% and assumed inflation is 5%. What is the approximate real return?',
            te: 'నామమాత్రపు రాబడి 8%, ఊహించిన ద్రవ్యోల్బణం 5% అయితే, సుమారు నిజమైన రాబడి ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: 'About 3% (8% − 5%)', te: 'సుమారు 3% (8% − 5%)' },
            { en: 'About 13% (8% + 5%)', te: 'సుమారు 13% (8% + 5%)' },
            { en: 'Exactly 8% in purchasing-power terms', te: 'కొనుగోలు శక్తి పరంగా ఖచ్చితంగా 8%' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'A quick approximation subtracts inflation from nominal return: 8% − 5% ≈ 3%. The exact Fisher calculation is slightly lower, about 2.86%.',
            te: 'త్వరిత అంచనాలో నామమాత్రపు రాబడి నుంచి ద్రవ్యోల్బణాన్ని తీసేస్తాం: 8% − 5% ≈ 3%. ఖచ్చితమైన ఫిషర్ లెక్క కొద్దిగా తక్కువగా, సుమారు 2.86% ఉంటుంది.',
          },
          objectiveId: 'obj-inflation-3',
        },
      ],
    },
  ],
};

export default inflationExplorerLesson;
