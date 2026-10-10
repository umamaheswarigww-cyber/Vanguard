import type { Lesson } from '@/types/content';

export const simpleVsCompoundLesson: Lesson = {
  id: 'simple-vs-compound',
  slug: 'simple-vs-compound',
  title: {
    en: 'Simple vs. Compound Interest: The Superpower of Time',
    te: 'సాధారణ vs చక్రవడ్డీ: సమయం యొక్క అద్భుత శక్తి',
  },
  pillarId: 'save',
  conceptIds: ['simple-interest', 'compound-interest', 'principal', 'interest'],
  level: 'core',
  estimatedMinutes: 12,
  prerequisites: ['budget-lab'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-interest-1',
      description: {
        en: 'Explain why compound interest earns interest on previous interest while simple interest does not.',
        te: 'సాధారణ వడ్డీ కాకుండా చక్రవడ్డీ గతంలో వచ్చిన వడ్డీపై కూడా వడ్డీని ఎలా సంపాదిస్తుందో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-interest-2',
      description: {
        en: 'Calculate simple interest and contrast it with compound growth over 10 and 20 years.',
        te: 'సాధారణ వడ్డీని లెక్కించి, 10 మరియు 20 సంవత్సరాల చక్రవడ్డీతో పోల్చడం.',
      },
      evidenceType: 'calculate',
    },
    {
      id: 'obj-interest-3',
      description: {
        en: 'Identify the crucial role of compounding frequency and tenure.',
        te: 'కాలవ్యవధి మరియు వడ్డీ లెక్కించే ఫ్రీక్వెన్సీ యొక్క ప్రాముఖ్యతను గుర్తించడం.',
      },
      evidenceType: 'identify',
    },
  ],
  stages: [
    {
      id: 'stg-i-hook',
      type: 'hook',
      title: { en: 'The ₹10,000 Mystery: 20 Years Later', te: '₹10,000 రహస్యం: 20 ఏళ్ల తర్వాత' },
      content: {
        en: 'Suppose two friends, Rahul and Sneha, each deposit ₹10,000 with a bank at an assumed 10% annual interest rate for 20 years.\n\nRahul gets **Simple Interest**: he earns ₹1,000 every single year and ends with **₹30,000**.\n\nSneha gets **Annual Compound Interest**: her interest is reinvested. Guess how much she ends up with? Not ₹30,000, not ₹40,000... she receives approximately **₹67,275**! More than DOUBLE Rahul’s final wealth. How did this happen?',
        te: 'రాహుల్ మరియు స్నేహ ఇద్దరూ చెరో ₹10,000ను 10% వార్షిక వడ్డీతో 20 ఏళ్ల పాటు డిపాజిట్ చేశారు.\n\nరాహుల్‌కు **సాధారణ వడ్డీ**: ప్రతి ఏటా ₹1,000 చొప్పున మొత్తం **₹30,000** వచ్చింది.\n\nస్నేహకు **చక్రవడ్డీ**: వచ్చిన వడ్డీ మళ్లీ పెట్టుబడిగా మారింది. ఆమెకు ఎంత వచ్చిందో తెలుసా? దాదాపు **₹67,275**! రాహుల్ కంటే రెట్టింపు కంటే ఎక్కువ! ఇది ఎలా సాధ్యమైంది?',
      },
    },
    {
      id: 'stg-i-intuition',
      type: 'intuition',
      title: { en: 'Interest on Interest — The Snowball Effect', te: 'వడ్డీపై వడ్డీ — మంచుముద్ద ప్రభావం' },
      content: {
        en: 'Imagine rolling a tiny snowball down a snowy mountain slope. At first, it grows slowly. But as it gathers snow, its surface area expands, so every roll picks up more and more snow.\n\n- In **Simple Interest**, only the initial principal earns money. Your interest sits in a separate drawer doing nothing.\n- In **Compound Interest**, each year’s earned interest is added back to your principal. Next year, your money works harder because you have a bigger team of rupees earning for you!',
        te: 'కొండపై నుండి చిన్న మంచుముద్దను కిందకు దొర్లించినట్లు ఊహించండి. మొదట్లో నెమ్మదిగా ఉన్నా, పెరిగేకొద్దీ వేగంగా భారీగా మారుతుంది.\n\n- **సాధారణ వడ్డీ**లో కేవలం అసలు మాత్రమే సంపాదిస్తుంది.\n- **చక్రవడ్డీ**లో వచ్చిన వడ్డీ అసలుతో కలిసి మరింత ఎక్కువ వడ్డీని సంపాదిస్తుంది!',
      },
    },
    {
      id: 'stg-i-mechanism',
      type: 'mechanism',
      title: { en: 'The Mathematical Mechanism', te: 'గణిత సూత్రం' },
      content: {
        en: 'Here are the exact models:\n\n**Simple Interest (SI):**\n$$I = P \\times r \\times t$$\nTotal Amount: $$M = P + I = P(1 + r \\times t)$$\n*For Rahul:* ₹10,000 + (₹10,000 × 0.10 × 20) = ₹10,000 + ₹20,000 = **₹30,000**.\n\n**Compound Interest (CI):**\n$$A = P \\times \\left(1 + \\frac{r}{n}\\right)^{n \\times t}$$\n*For Sneha (annual n=1):*\n$$A = 10,000 \\times (1 + 0.10)^{20} \\approx 10,000 \\times 6.7275 = \\mathbf{₹67,275}$$.\n\nNotice that the rate was the same (10%) and the starting principal was the same (₹10,000). The compounding mechanism created **₹37,275 of extra wealth** simply by leaving the money untouched!',
        te: 'ఖచ్చితమైన గణిత సూత్రాలు:\n\n**సాధారణ వడ్డీ:** $M = P(1 + r \\times t)$\nరాహుల్‌కు: ₹10,000 + ₹20,000 = **₹30,000**.\n\n**చక్రవడ్డీ:** $A = P \\times (1 + r)^t$\nస్నేహకు: $10,000 \\times (1.10)^{20} \\approx$ **₹67,275**.\n\nకేవలం వడ్డీని తిరిగి పెట్టుబడిగా పెట్టడం ద్వారా **₹37,275 అదనపు సంపద** సృష్టించబడింది!',
      },
    },
    {
      id: 'stg-i-experiment',
      type: 'experiment',
      title: { en: 'Interactive Compound Explorer', te: 'ఇంటరాక్టివ్ చక్రవడ్డీ ఎక్స్‌ప్లోరర్' },
      content: {
        en: 'Adjust the principal, interest rate, and years to see the gap between simple and compound growth widen over time!',
        te: 'అసలు, వడ్డీ రేటు, మరియు సంవత్సరాలను మార్చి సాధారణ మరియు చక్రవడ్డీ మధ్య పెరుగుదలను పరిశీలించండి!',
      },
      interactionKey: 'compound-interest-explorer',
    },
    {
      id: 'stg-i-misconception',
      type: 'misconception',
      title: { en: 'Misconception Alert', te: 'అపోహ - హెచ్చరిక' },
      content: {
        en: '❌ **Myth:** "If the interest rate is small (e.g. 7%), compounding won’t make much difference compared to simple interest."\n\n✅ **Truth:** Compounding’s superpower is not just the rate — it is **TIME**! Over 3 years, the difference looks small. Over 15–25 years, the difference becomes massive. Starting to save early in your teens gives you the greatest advantage you will ever have.',
        te: '❌ **అపోహ:** "వడ్డీ రేటు తక్కువగా ఉంటే (ఉదాహరణకు 7%), చక్రవడ్డీ వల్ల పెద్ద తేడా ఉండదు."\n\n✅ **వాస్తవం:** చక్రవడ్డీ యొక్క నిజమైన బలం రేటు మాత్రమే కాదు — **సమయం**! 15–25 ఏళ్ల కాలంలో ఇది విపరీతమైన సంపదను సృష్టిస్తుంది.',
      },
    },
    {
      id: 'stg-i-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Quiz', te: 'నైపుణ్య క్విజ్' },
      content: {
        en: 'Check your mastery of simple and compound interest.',
        te: 'సాధారణ మరియు చక్రవడ్డీపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-i-m-1',
          question: {
            en: 'In year 2 of a compound interest deposit, what earns interest?',
            te: 'చక్రవడ్డీ డిపాజిట్‌లో 2వ సంవత్సరంలో దేనిపై వడ్డీ లభిస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'Only the original starting principal', te: 'కేవలం ప్రారంభ అసలుపై మాత్రమే' },
            { en: 'The starting principal PLUS the interest earned in year 1', te: 'ప్రారంభ అసలు మరియు 1వ సంవత్సరంలో వచ్చిన వడ్డీ రెండింటిపై' },
            { en: 'A random amount chosen by the bank', te: 'బ్యాంకు నిర్ణయించిన యాదృచ్ఛిక మొత్తంపై' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'That is the core definition of compounding: interest earned becomes part of the new principal balance for subsequent periods!',
            te: 'గతంలో వచ్చిన వడ్డీ అసలులో కలవడమే చక్రవడ్డీ యొక్క మూల సూత్రం!',
          },
          objectiveId: 'obj-interest-1',
        },
        {
          id: 'q-i-m-2',
          question: {
            en: 'If you invest ₹5,000 at 8% simple interest for 3 years, what is the total interest earned?',
            te: '₹5,000 ను 8% సాధారణ వడ్డీతో 3 సంవత్సరాలు ఉంచితే వచ్చే మొత్తం వడ్డీ ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '₹400', te: '₹400' },
            { en: '₹1,200 (5,000 × 0.08 × 3)', te: '₹1,200 (5,000 × 0.08 × 3)' },
            { en: '₹6,200', te: '₹6,200' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Simple interest = 5,000 × 0.08 × 3 = ₹1,200. (The total maturity amount would be ₹5,000 + ₹1,200 = ₹6,200).',
            te: 'సాధారణ వడ్డీ = 5,000 × 0.08 × 3 = ₹1,200.',
          },
          objectiveId: 'obj-interest-2',
        },
      ],
    },
  ],
};

export default simpleVsCompoundLesson;
