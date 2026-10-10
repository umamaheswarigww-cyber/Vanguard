import type { Lesson } from '@/types/content';

export const fundTypesLesson: Lesson = {
  id: 'fund-types',
  slug: 'fund-types',
  title: {
    en: 'Types of Mutual Funds: Matching Goals to Assets',
    te: 'మ్యూచువల్ ఫండ్ రకాలు: లక్ష్యాలకు తగిన ఆస్తులు',
  },
  pillarId: 'invest',
  conceptIds: ['mutual-fund', 'debt-fund', 'liquid-fund', 'hybrid-fund', 'elss'],
  level: 'core',
  estimatedMinutes: 20,
  prerequisites: ['mutual-fund-basics', 'mutual-fund-structure'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-ft-1',
      description: {
        en: 'Distinguish equity, debt, and hybrid funds by the broad assets they hold.',
        te: 'ఈక్విటీ, డెట్, హైబ్రిడ్ ఫండ్లు కలిగి ఉండే ప్రధాన ఆస్తుల ఆధారంగా వాటిని వేరు చేయడం.',
      },
      evidenceType: 'classify',
    },
    {
      id: 'obj-ft-2',
      description: {
        en: 'Explain how a scheme category describes its mandate but does not promise an outcome.',
        te: 'పథక వర్గం దాని లక్ష్యాన్ని వివరిస్తుంది కానీ ఫలితానికి హామీ ఇవ్వదని వివరించడం.',
      },
      evidenceType: 'compare',
    },
    {
      id: 'obj-ft-3',
      description: {
        en: 'Compare goal timing, access needs, and risk without treating any fund category as a guaranteed fit.',
        te: 'ఏ ఫండ్ వర్గమూ హామీగా సరిపోతుందని భావించకుండా లక్ష్య సమయం, యాక్సెస్ అవసరాలు, రిస్కును పోల్చడం.',
      },
      evidenceType: 'explain',
    },
  ],
  stages: [
    {
      id: 'stg-ft-hook',
      type: 'hook',
      title: { en: 'Different Vehicles for Different Roads', te: 'వివిధ ప్రయాణాలకు వేర్వేరు వాహనాలు' },
      content: {
        en: 'Two students need money for different goals: one may need a known amount next term, while another is learning about long-term investing. Before comparing fund labels, what should each ask about timing, access, and the possibility that the value could fall?',
        te: 'ఇద్దరు విద్యార్థులకు వేర్వేరు లక్ష్యాల కోసం డబ్బు అవసరం: ఒకరికి వచ్చే టర్మ్‌లో నిర్దిష్ట మొత్తం కావాలి; మరొకరు దీర్ఘకాల పెట్టుబడుల గురించి నేర్చుకుంటున్నారు. ఫండ్ పేర్లను పోల్చే ముందు, సమయం, యాక్సెస్, విలువ తగ్గే అవకాశం గురించి ఏమి అడగాలి?',
      },
    },
    {
      id: 'stg-ft-sebi-groups',
      type: 'discovery',
      title: { en: 'What a Fund Category Tells You', te: 'ఫండ్ వర్గం ఏమి చెబుతుంది?' },
      content: {
        en: 'A scheme label is a short description of its investment mandate, not a performance promise. Three useful broad ideas are:\n\n• **Equity:** Predominantly holds shares or equity-related instruments. Prices can move sharply.\n• **Debt:** Predominantly holds debt instruments such as bonds. Prices and income can still be affected by credit, interest-rate, and liquidity risks.\n• **Hybrid:** Combines more than one asset class; the mix and rules differ by scheme.\n\nOther scheme groups and detailed subcategories exist, and regulatory classifications can change. Check the latest SEBI rules and the scheme’s current documents before relying on a category name.',
        te: 'పథకం పేరు దాని పెట్టుబడి లక్ష్యాన్ని సంక్షిప్తంగా చెబుతుంది; పనితీరుకు హామీ కాదు. మూడు ఉపయోగకరమైన ప్రధాన భావనలు:\n\n• **ఈక్విటీ:** ప్రధానంగా షేర్లు లేదా ఈక్విటీ సంబంధిత సాధనాలను కలిగి ఉంటుంది. ధరలు గణనీయంగా మారవచ్చు.\n• **డెట్:** బాండ్ల వంటి డెట్ సాధనాలను ప్రధానంగా కలిగి ఉంటుంది. క్రెడిట్, వడ్డీ రేటు, లిక్విడిటీ రిస్కుల వల్ల ధరలు, ఆదాయం మారవచ్చు.\n• **హైబ్రిడ్:** ఒకటి కంటే ఎక్కువ ఆస్తి వర్గాలను కలుపుతుంది; మిశ్రమం, నియమాలు పథకాన్ని బట్టి మారతాయి.\n\nఇతర పథక సమూహాలు, వివరమైన ఉపవర్గాలూ ఉన్నాయి; నియంత్రణ వర్గీకరణలు మారవచ్చు. వర్గం పేరుపై ఆధారపడే ముందు తాజా SEBI నియమాలు, ప్రస్తుత పథక పత్రాలను చూడండి.',
      },
    },
    {
      id: 'stg-ft-equity-breakdown',
      type: 'mechanism',
      title: { en: 'Inside Equity Funds', te: 'ఈక్విటీ ఫండ్ల రకాలు' },
      content: {
        en: 'Equity schemes can be described by the size or style of the companies they hold—for example, large-, mid-, small-, or flexi-cap. Those labels refer to a scheme mandate and current classification rules; they do not mean a company is safe, or that a smaller company will grow faster. Concentration and volatility can differ.\n\nTax-linked scheme rules can change and depend on a person’s circumstances. This lesson does not give tax advice; check current official guidance and scheme documents for tax or lock-in details.',
        te: 'ఈక్విటీ పథకాలు కలిగి ఉండే కంపెనీల పరిమాణం లేదా శైలి ఆధారంగా వివరించవచ్చు—ఉదాహరణకు లార్జ్, మిడ్, స్మాల్ లేదా ఫ్లెక్సీ క్యాప్. ఈ పేర్లు పథక లక్ష్యం, ప్రస్తుత వర్గీకరణ నియమాలను సూచిస్తాయి; కంపెనీ సురక్షితమని లేదా చిన్న కంపెనీ వేగంగా పెరుగుతుందని అర్థం కాదు. పెట్టుబడుల ఏకాగ్రత, ధరల మార్పు వేర్వేరుగా ఉండవచ్చు.\n\nపన్ను సంబంధిత పథక నియమాలు మారవచ్చు; వ్యక్తిగత పరిస్థితులపై ఆధారపడతాయి. ఈ పాఠం పన్ను సలహా కాదు; పన్ను లేదా లాక్-ఇన్ వివరాల కోసం తాజా అధికారిక సమాచారం, పథక పత్రాలను చూడండి.',
      },
    },
    {
      id: 'stg-ft-debt-breakdown',
      type: 'formal_concept',
      title: { en: 'Debt & Liquid Funds: Stability & Tenor', te: 'డెట్ మరియు లిక్విడ్ ఫండ్లు: స్థిరత్వం' },
      content: {
        en: 'Debt schemes hold instruments where an issuer borrows money, such as bonds. The issuer’s ability to pay, market interest rates, and the time until repayment can affect a bond’s price. A debt fund is not the same contract as a bank deposit; its value can fall and it is not a guaranteed-return product. Exact risk, liquidity, and protections depend on the instrument and scheme. Check current official documents for details.',
        te: 'డెట్ పథకాలు బాండ్ల వంటి రుణ సాధనాలను కలిగి ఉంటాయి; వీటిలో ఒక సంస్థ డబ్బు అప్పుగా తీసుకుంటుంది. చెల్లింపుదారుడి సామర్థ్యం, మార్కెట్ వడ్డీ రేట్లు, తిరిగి చెల్లించే సమయం బాండ్ ధరను ప్రభావితం చేయవచ్చు. డెట్ ఫండ్ బ్యాంక్ డిపాజిట్ ఒప్పందంతో సమానం కాదు; దాని విలువ తగ్గవచ్చు, రాబడికి హామీ ఉండదు. ఖచ్చితమైన రిస్క్, లిక్విడిటీ, రక్షణలు సాధనం, పథకంపై ఆధారపడతాయి. వివరాల కోసం తాజా అధికారిక పత్రాలను చూడండి.',
      },
    },
    {
      id: 'stg-ft-matching',
      type: 'worked_example',
      title: { en: 'Matching Time Horizons to Categories', te: 'సమయానికి తగిన కేటగిరీని ఎంచుకోవడం' },
      content: {
        en: 'Compare two fictional situations—not as product recommendations, but as questions to investigate:\n\n1. **Kavya needs ₹20,000 in eight months.** She should ask how certain the goal date and amount are, whether the value can fall, when money can be accessed, and what fees or conditions apply.\n2. **Vikram is learning about a goal ten years away.** He has more time, but still needs to understand possible losses, diversification, costs, and whether the chosen approach fits his circumstances.\n\nA longer horizon does not guarantee a gain, and a fund category does not guarantee access to money on a particular date.',
        te: 'రెండు ఊహాత్మక పరిస్థితులను పోల్చండి—ఉత్పత్తి సిఫార్సుగా కాదు; పరిశీలించాల్సిన ప్రశ్నలుగా:\n\n1. **కావ్యకు ఎనిమిది నెలల్లో ₹20,000 అవసరం.** లక్ష్య తేదీ, మొత్తం ఎంత ఖచ్చితమో; విలువ తగ్గవచ్చో; డబ్బు ఎప్పుడు తీసుకోవచ్చో; ఫీజులు, షరతులు ఏమిటో అడగాలి.\n2. **విక్రమ్ పది సంవత్సరాల తర్వాతి లక్ష్యం గురించి నేర్చుకుంటున్నాడు.** సమయం ఎక్కువైనా, సంభావ్య నష్టాలు, వైవిధ్యీకరణ, ఖర్చులు, అతని పరిస్థితులకు విధానం సరిపోతుందో అర్థం చేసుకోవాలి.\n\nఎక్కువ సమయం ఉండటం లాభానికి హామీ కాదు; ఫండ్ వర్గం ఒక నిర్దిష్ట తేదీన డబ్బు అందుబాటులో ఉంటుందని హామీ ఇవ్వదు.',
      },
    },
    {
      id: 'stg-ft-mastery',
      type: 'mastery_check',
      title: { en: 'Fund Types Mastery Quiz', te: 'ఫండ్ రకాల నైపుణ్య క్విజ్' },
      content: {
        en: 'Test your understanding of mutual fund categories.',
        te: 'మ్యూచువల్ ఫండ్ రకాలపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-ft-1',
          question: {
            en: 'Which statement best describes an equity fund category?',
            te: 'ఈక్విటీ ఫండ్ వర్గాన్ని ఏ వాక్యం సరిగ్గా వివరిస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'It describes a scheme that predominantly holds shares or equity-related instruments', te: 'ప్రధానంగా షేర్లు లేదా ఈక్విటీ సంబంధిత సాధనాలను కలిగి ఉండే పథకాన్ని వివరిస్తుంది' },
            { en: 'It guarantees that the value will rise over time', te: 'కాలక్రమంలో విలువ పెరుగుతుందని హామీ ఇస్తుంది' },
            { en: 'It means the investor cannot lose money', te: 'పెట్టుబడిదారుడు డబ్బు కోల్పోలేడని అర్థం' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'An equity category tells you about the scheme’s broad holdings. It does not promise a return or prevent losses.',
            te: 'ఈక్విటీ వర్గం పథకం ప్రధాన హోల్డింగ్స్‌ను చెబుతుంది. ఇది రాబడికి హామీ ఇవ్వదు లేదా నష్టాలను అడ్డుకోదు.',
          },
          objectiveId: 'obj-ft-2',
        },
        {
          id: 'q-ft-2',
          question: {
            en: 'A student may need a fixed amount for fees in three months. What should they compare first?',
            te: 'ఒక విద్యార్థికి మూడు నెలల్లో ఫీజు కోసం నిర్దిష్ట మొత్తం అవసరమవచ్చు. ముందుగా ఏమి పోల్చాలి?',
          },
          type: 'mcq',
          options: [
            { en: 'Access timing, possible loss in value, and the terms of available options', te: 'యాక్సెస్ సమయం, విలువ తగ్గే అవకాశం, అందుబాటులో ఉన్న ఎంపికల నిబంధనలు' },
            { en: 'Which category had the highest return last year', te: 'గత సంవత్సరం ఏ వర్గం ఎక్కువ రాబడి ఇచ్చింది' },
            { en: 'Which fund name sounds safest', te: 'ఏ ఫండ్ పేరు అత్యంత సురక్షితంగా వినిపిస్తుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'For a near-term obligation, timing and access matter alongside risk. A category name or past return cannot promise that the value will be available when needed.',
            te: 'సమీపకాల అవసరానికి రిస్కుతో పాటు సమయం, యాక్సెస్ ముఖ్యం. వర్గం పేరు లేదా గత రాబడి అవసరమైనప్పుడు విలువ అందుబాటులో ఉంటుందని హామీ ఇవ్వదు.',
          },
          objectiveId: 'obj-ft-3',
        },
        {
          id: 'q-ft-3',
          question: {
            en: 'What can a fund category help a learner understand?',
            te: 'ఫండ్ వర్గం విద్యార్థికి ఏమి అర్థం చేసుకోవడంలో సహాయపడుతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'The broad mandate or kinds of assets a scheme is designed to hold', te: 'ఒక పథకం కలిగి ఉండే విస్తృత లక్ష్యం లేదా ఆస్తుల రకాలు' },
            { en: 'That the fund cannot lose value', te: 'ఫండ్ విలువ తగ్గదని' },
            { en: 'That the category will outperform all other categories', te: 'ఆ వర్గం మిగతా అన్ని వర్గాల కంటే మెరుగ్గా రాణిస్తుందని' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'A category describes a broad investment mandate. It does not by itself reveal every holding, guarantee an outcome, or make all schemes in the category identical.',
            te: 'వర్గం విస్తృత పెట్టుబడి లక్ష్యాన్ని వివరిస్తుంది. అది అన్ని హోల్డింగ్స్‌ను చెప్పదు, ఫలితానికి హామీ ఇవ్వదు, ఒకే వర్గంలోని పథకాలన్నీ ఒకటే అని కూడా కాదు.',
          },
          objectiveId: 'obj-ft-1',
        },
      ],
    },
  ],
};

export default fundTypesLesson;
