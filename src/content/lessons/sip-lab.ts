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
        en: 'Suppose an illustrative fund has NAVs of ₹100, ₹50, and ₹80 over three contribution dates, and you invest ₹1,000 each date:\n\n- At ₹100, ₹1,000 buys 10 units.\n- At ₹50, ₹1,000 buys 20 units.\n- At ₹80, ₹1,000 buys 12.5 units.\n\nYou contribute ₹3,000 and hold 42.5 units. If the final NAV is ₹80, their illustrative value is 42.5 × ₹80 = ₹3,400. This result comes from this particular price path; another path could leave the value below ₹3,000. A regular schedule buys a changing number of units, but it does not guarantee a gain.',
        te: 'ఒక ఉదాహరణ ఫండ్‌లో మూడు పెట్టుబడి తేదీలకు NAVలు ₹100, ₹50, ₹80 అనుకుందాం. ప్రతిసారి ₹1,000 పెట్టుబడి పెడితే:\n\n- NAV ₹100 వద్ద 10 యూనిట్లు వస్తాయి.\n- NAV ₹50 వద్ద 20 యూనిట్లు వస్తాయి.\n- NAV ₹80 వద్ద 12.5 యూనిట్లు వస్తాయి.\n\nమీరు ₹3,000 పెట్టుబడి పెట్టి 42.5 యూనిట్లు కలిగి ఉంటారు. చివరి NAV ₹80 అయితే వాటి ఉదాహరణ విలువ 42.5 × ₹80 = ₹3,400. ఈ ఫలితం ఈ ప్రత్యేక ధరల మార్గం వల్ల వచ్చింది; వేరే ధరల మార్గంలో విలువ ₹3,000 కంటే తక్కువ కావచ్చు. నియమిత పెట్టుబడితో యూనిట్ల సంఖ్య మారుతుంది, కానీ లాభానికి హామీ లేదు.',
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
        en: '❌ **Misconception:** “A Systematic Investment Plan (SIP) is a special fund that guarantees I cannot lose money.”\n\n✅ **Better way to think:** SIP describes a schedule for making contributions to a fund. It is not an asset class or a return guarantee. The value depends on the underlying investments and can fall. Investing on a schedule changes when contributions enter the market, but it cannot remove market risk.',
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
        {
          id: 'q-sip-m-2',
          question: {
            en: 'A ₹1,500 monthly contribution is invested at an illustrative NAV of ₹30. How many units are bought for that instalment before charges?',
            te: 'ఊహాత్మక NAV ₹30 ఉన్నప్పుడు ₹1,500 నెలవారీ పెట్టుబడి చేస్తే, ఛార్జీలకు ముందు ఆ విడతలో ఎన్ని యూనిట్లు కొంటారు?',
          },
          type: 'mcq',
          options: [
            { en: '50 units (₹1,500 ÷ ₹30)', te: '50 యూనిట్లు (₹1,500 ÷ ₹30)' },
            { en: '30 units', te: '30 యూనిట్లు' },
            { en: '1,530 units', te: '1,530 యూనిట్లు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Units for an instalment = contribution ÷ applicable NAV. A real transaction may use the NAV determined under the applicable rules and can include charges.',
            te: 'ఒక విడత యూనిట్లు = పెట్టుబడి మొత్తం ÷ వర్తించే NAV. అసలు లావాదేవీలో వర్తించే నియమాల ప్రకారం నిర్ణయించిన NAV, ఛార్జీలు ఉండవచ్చు.',
          },
          objectiveId: 'obj-sip-3',
        },
        {
          id: 'q-sip-m-3',
          question: {
            en: 'What does setting up an SIP promise?',
            te: 'SIP ఏర్పాటు చేయడం ఏ విషయానికి హామీ ఇస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'A method for investing contributions regularly; it does not guarantee returns or prevent loss', te: 'నియమిత పెట్టుబడులకు ఒక పద్ధతి; రాబడికి హామీ ఇవ్వదు, నష్టాన్ని నిరోధించదు' },
            { en: 'A guaranteed positive return every month', te: 'ప్రతి నెలా సానుకూల రాబడికి హామీ' },
            { en: 'That the investor owns no market-linked assets', te: 'పెట్టుబడిదారు మార్కెట్‌కు అనుసంధానమైన ఆస్తులు కలిగి ఉండరని' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'An SIP is a contribution schedule or facility. The returns depend on the investment and its market path; losses are possible.',
            te: 'SIP అనేది పెట్టుబడి షెడ్యూల్ లేదా సౌకర్యం. రాబడి పెట్టుబడి, మార్కెట్ మార్గంపై ఆధారపడుతుంది; నష్టం సంభవించవచ్చు.',
          },
          objectiveId: 'obj-sip-1',
        },
      ],
    },
  ],
};

export default sipLabLesson;
