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
        en: 'Ask your parents: in 2010, a hearty plate of Idli-Vada or Masala Dosa in Hyderabad cost around ₹40 to ₹50. Today, that exact same breakfast at the same eatery costs ₹100 to ₹140!\n\nThe dosa didn’t get bigger or tastier. What changed? The **purchasing power** of the Indian Rupee decreased because prices of rice, oil, gas, and rent rose. This broad rise in prices across the economy is called **Inflation**.',
        te: 'మీ తల్లిదండ్రులను అడగండి: 2010లో హైదరాబాద్‌లో మసాలా దోశ లేదా ఇడ్లీ-వడ ప్లేట్ సుమారు ₹40 నుండి ₹50 ఉండేది. ఈరోజు అదే టిఫిన్ ₹100 నుండి ₹140 వరకు ఉంది!\n\nదోశ పెద్దగా కాలేదు, కానీ రూపాయి కొనుగోలు శక్తి తగ్గింది. ఇలా ధరలు పెరగడాన్నే **ద్రవ్యోల్బణం (Inflation)** అంటారు.',
      },
    },
    {
      id: 'stg-inf-intuition',
      type: 'intuition',
      title: { en: 'Nominal Rupee vs. Real Purchasing Power', te: 'నామమాత్రపు రూపాయి vs నిజమైన కొనుగోలు శక్తి' },
      content: {
        en: 'If you keep a ₹500 note inside a drawer for 10 years, when you open the drawer, you still have a ₹500 note. That is its **nominal value**.\n\nHowever, in year 1, that ₹500 bought 5 books. In year 10, that ₹500 might only buy 2 books. Even though your cash number stayed unchanged, your **real wealth** dropped by more than half!\n\n> *Key Lesson:* Doing "nothing" with your money by holding pure cash in a cupboard is not safe from risk — it guarantees a loss of purchasing power to inflation.',
        te: 'మీరు బీరువాలో ₹500 నోటు పెట్టి 10 ఏళ్ల తర్వాత తీస్తే అది ఇప్పటికీ ₹500 నోటే (నామమాత్రపు విలువ).\n\nకానీ మొదటి ఏడాది ఆ ₹500తో 5 పుస్తకాలు వస్తే, 10వ ఏడాది 2 పుస్తకాలు మాత్రమే వస్తాయి. కాబట్టి నగదును అలాగే ఉంచడం వల్ల ద్రవ్యోల్బణం వలన దాని కొనుగోలు శక్తి పడిపోతుంది.',
      },
    },
    {
      id: 'stg-inf-mechanism',
      type: 'mechanism',
      title: { en: 'The Purchasing Power Formula', te: 'కొనుగోలు శక్తి గణిత సూత్రం' },
      content: {
        en: 'Under a constant hypothetical inflation rate $i$, the purchasing power of a future sum is:\n\n$$\\text{Today\'s Purchasing Equivalent} = \\frac{\\text{Future Amount}}{(1 + i)^t}$$\n\n**Verified Blueprint Example:**\nSuppose you keep ₹1,00,000 for 10 years at a hypothetical 6% constant inflation ($i = 0.06$):\n\n$$\\text{Value} = \\frac{1,00,000}{(1.06)^{10}} = \\frac{1,00,000}{1.790847} \\approx \\mathbf{₹55,839}$$\n\nYour ₹1 Lakh in 10 years will only buy what ₹55,839 buys today! (Note: 6% is an educational assumption for modeling, not an official RBI forecast).',
        te: 'నిరంతర 6% ద్రవ్యోల్బణాన్ని ఊహిస్తే, 10 ఏళ్ల తర్వాత ₹1,00,000 విలువ నేటి **₹55,839**తో సమానం!\n\n$$\\text{విలువ} = \\frac{1,00,000}{(1.06)^{10}} \\approx \\mathbf{₹55,839}$$',
      },
    },
    {
      id: 'stg-inf-experiment',
      type: 'experiment',
      title: { en: 'Interactive Inflation Explorer', te: 'ఇంటరాక్టివ్ ద్రవ్యోల్బణ ఎక్స్‌ప్లోరర్' },
      content: {
        en: 'Test different amounts, inflation rates, and time horizons to see how purchasing power erodes, and why your savings need to beat inflation.',
        te: 'వివిధ మొత్తాలు, ద్రవ్యోల్బణ రేట్లను పరీక్షించి మీ పొదుపు ద్రవ్యోల్బణాన్ని ఎందుకు అధిగమించాలో అర్థం చేసుకోండి.',
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
      ],
    },
  ],
};

export default inflationExplorerLesson;
