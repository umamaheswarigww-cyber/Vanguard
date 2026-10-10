import type { Lesson } from '@/types/content';

export const sipLabLesson: Lesson = {
  id: 'sip-lab',
  slug: 'sip-lab',
  title: {
    en: 'SIP & Rupee-Cost Averaging: The Discipline of Regular Investing',
    te: 'SIP & రూపాయి-వ్యయ సగటు: క్రమబద్ధమైన పెట్టుబడి క్రమశిక్షణ',
  },
  pillarId: 'invest',
  conceptIds: ['sip', 'mutual-fund', 'nav', 'unit'],
  level: 'core',
  estimatedMinutes: 14,
  prerequisites: ['mutual-fund-basics'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-sip-1',
      description: {
        en: 'Explain that SIP is an automated investment method/facility, not an asset class or return guarantee.',
        te: 'SIP అనేది ఆటోమేటెడ్ పెట్టుబడి పద్ధతి మాత్రమే, హామీ ఇచ్చిన రాబడి కాదు అని వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-sip-2',
      description: {
        en: 'Demonstrate how Rupee-Cost Averaging buys more units when NAV is low and fewer when NAV is high.',
        te: 'రూపాయి-వ్యయ సగటు NAV తగ్గినప్పుడు ఎక్కువ యూనిట్లు, పెరిగినప్పుడు తక్కువ యూనిట్లు ఎలా కొంటుందో ప్రదర్శించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-sip-3',
      description: {
        en: 'Compute illustrative SIP future values under end-of-month and beginning-of-month conventions.',
        te: 'నెలాఖరు మరియు నెల ప్రారంభ కన్వెన్షన్లలో SIP భవిష్యత్ విలువను లెక్కించడం.',
      },
      evidenceType: 'calculate',
    },
  ],
  stages: [
    {
      id: 'stg-sip-hook',
      type: 'hook',
      title: { en: 'Can ₹500 a Month Make a Difference?', te: 'నెలకు ₹500 పెట్టుబడితో ఏదైనా సాధించవచ్చా?' },
      content: {
        en: 'Many students think: *"I don\'t have ₹50,000 or ₹1,00,000, so I cannot invest."*\n\nA **Systematic Investment Plan (SIP)** changes the game. It allows an investor to automatically allocate small sums — like ₹500 or ₹1,000 — every single month into a mutual fund scheme.\n\nYou don’t need to time the market or stare at stock price charts every day. But how does buying units at different prices over months actually work?',
        te: 'చాలామంది విద్యార్థులు *"నా వద్ద ₹50,000 లేదా లక్ష రూపాయలు లేవు, కాబట్టి నేను ఇన్వెస్ట్ చేయలేను"* అనుకుంటారు.\n\n**SIP (Systematic Investment Plan)** ద్వారా ప్రతి నెలా కేవలం ₹500 లేదా ₹1,000 వంటి చిన్న మొత్తాలను కూడా క్రమబద్ధంగా మ్యూచువల్ ఫండ్‌లో పెట్టవచ్చు.',
      },
    },
    {
      id: 'stg-sip-mechanism',
      type: 'mechanism',
      title: { en: 'Rupee-Cost Averaging: The Magic of Price Swings', te: 'రూపాయి-వ్యయ సగటు (Rupee-Cost Averaging)' },
      content: {
        en: 'Suppose you invest ₹1,000 every month:\n\n- **Month 1 (Market High):** NAV is ₹100. Your ₹1,000 buys $\\frac{1,000}{100} = \\mathbf{10\\text{ units}}$.\n- **Month 2 (Market Crash!):** NAV drops to ₹50. Your ₹1,000 buys $\\frac{1,000}{50} = \\mathbf{20\\text{ units}}$!\n- **Month 3 (Market Recovers):** NAV rebounds to ₹80. Your ₹1,000 buys $\\frac{1,000}{80} = \\mathbf{12.5\\text{ units}}$.\n\n**Total Result:**\n- You invested ₹3,000.\n- You accumulated $10 + 20 + 12.5 = \\mathbf{42.5\\text{ units}}$.\n- Your portfolio value today at ₹80: $42.5 \\times 80 = \\mathbf{₹3,400}$ (a gain of ₹400), even though the NAV is STILL below Month 1’s starting price of ₹100!\n\nWhen the market dropped, your fixed ₹1,000 contribution automatically accumulated **double the units on sale**.',
        te: 'మీరు ప్రతి నెలా ₹1,000 ఇన్వెస్ట్ చేస్తున్నారనుకుందాం:\n- 1వ నెల (NAV ₹100): 10 యూనిట్లు వస్తాయి.\n- 2వ నెల (మార్కెట్ పడింది - NAV ₹50): **20 యూనిట్లు** వస్తాయి!\n- 3వ నెల (మార్కెట్ కోలుకుంది - NAV ₹80): 12.5 యూనిట్లు.\n\nమొత్తం 42.5 యూనిట్లు వచ్చాయి. ప్రస్తుత విలువ: 42.5 × 80 = **₹3,400**! మార్కెట్ మొదట్లో ఉన్న ₹100 కంటే తక్కువగా ఉన్నా కూడా మీకు లాభం వచ్చింది!',
      },
    },
    {
      id: 'stg-sip-formula',
      type: 'formal_concept',
      title: { en: 'SIP Future Value Mathematical Model', te: 'SIP భవిష్యత్ విలువ గణిత సూత్రం' },
      content: {
        en: 'For equal contributions of $P$ per month, with monthly rate $r$ and $n$ instalments:\n\n**End-of-Month (Ordinary Annuity):**\n$$FV = P \\times \\left[\\frac{(1 + r)^n - 1}{r}\\right]$$\n\n**Beginning-of-Month (Annuity Due):**\n$$FV = FV_{\\text{ordinary}} \\times (1 + r)$$\n\n**Verified Blueprint Benchmark:**\n- Monthly contribution $P = ₹2,000$\n- Assumed monthly rate $r = 1\\%$ (0.01)\n- 120 instalments (10 years, $n = 120$)\n\nEnd-of-month model gives approximately **₹4,60,077**.\nBeginning-of-month model gives approximately **₹4,64,678**.\nTotal actual money contributed: ₹2,000 × 120 = ₹2,40,000.\n\n*(Guardrail: This is a pure mathematical calculation with a constant rate, not a mutual fund return prediction or promise).*',
        te: 'గణిత నమూనా:\n- నెలకు $P = ₹2,000$\n- ఊహాత్మక నెలవారీ రేటు $r = 1\\%$\n- 120 నెలలు (10 ఏళ్లు)\n\nనెలాఖరు మోడల్‌లో దాదాపు **₹4,60,077** వస్తుంది.\nమొత్తం డిపాజిట్ చేసిన మొత్తం: ₹2,40,000.',
      },
    },
    {
      id: 'stg-sip-experiment',
      type: 'experiment',
      title: { en: 'Interactive SIP Calculator', te: 'ఇంటరాక్టివ్ SIP కాలిక్యులేటర్' },
      content: {
        en: 'Simulate different monthly instalments, assumed annual growth rates, and tenures. Toggle between beginning-of-month and end-of-month timings to see the exact formula results.',
        te: 'వివిధ నెలవారీ పెట్టుబడులు, కాలవ్యవధులను ఎంచుకుని SIP భవిష్యత్ విలువను లెక్కించండి.',
      },
      interactionKey: 'sip-lab',
    },
    {
      id: 'stg-sip-misconception',
      type: 'misconception',
      title: { en: 'CRITICAL GUARDRAIL: Does SIP Guarantee Profit?', te: 'కీలక హెచ్చరిక: SIP లాభానికి హామీ ఇస్తుందా?' },
      content: {
        en: '❌ **Dangerous Myth:** *"A Systematic Investment Plan (SIP) is a special safe type of mutual fund that guarantees you cannot lose money."*\n\n✅ **The Truth:** SIP is **NOT a product and NOT an asset class**! It is simply a payment schedule (like an automatic bank debit) into a mutual fund scheme. If the underlying mutual fund invests in stocks that decline steadily, your SIP portfolio CAN and WILL lose money. Rupee-cost averaging reduces timing risk, but it does NOT eliminate market risk or guarantee returns!',
        te: '❌ **ప్రమాదకరమైన అపోహ:** "SIP లో డబ్బు పెడితే నష్టాలు వచ్చే ప్రసక్తే లేదు, లాభాలు ఖాయం."\n\n✅ **నిజం:** SIP అనేది ఉత్పత్తి కాదు, అది కేవలం క్రమం తప్పకుండా డబ్బు జమ చేసే పద్ధతి మాత్రమే! మార్కెట్లు పడిపోతే SIP లో కూడా నష్టం రావచ్చు.',
      },
    },
    {
      id: 'stg-sip-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Quiz', te: 'నైపుణ్య క్విజ్' },
      content: {
        en: 'Demonstrate your understanding of SIP and Rupee-Cost Averaging.',
        te: 'SIP మరియు రూపాయి-వ్యయ సగటుపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-sip-m-1',
          question: {
            en: 'What happens to the number of mutual fund units you purchase in an SIP when the NAV falls?',
            te: 'NAV పడిపోయినప్పుడు, SIP లో మీరు కొనుగోలు చేసే మ్యూచువల్ ఫండ్ యూనిట్ల సంఖ్య ఏమవుతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'You buy more units with your fixed monthly rupee contribution', te: 'మీ స్థిర నెలవారీ మొత్తంతో ఎక్కువ యూనిట్లు కొనుగోలు చేస్తారు' },
            { en: 'You buy fewer units', te: 'తక్కువ యూనిట్లు కొంటారు' },
            { en: 'The number of units never changes', te: 'యూనిట్ల సంఖ్య ఎప్పుడూ మారదు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Because units = Contribution / NAV, a lower denominator (NAV) means a larger resulting number of units!',
            te: 'యూనిట్లు = మొత్తం / NAV కాబట్టి, NAV తగ్గితే ఎక్కువ యూనిట్లు వస్తాయి!',
          },
          objectiveId: 'obj-sip-2',
        },
      ],
    },
  ],
};

export default sipLabLesson;
