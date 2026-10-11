import type { Lesson } from '@/types/content';

export const moneyFoundationsLesson: Lesson = {
  id: 'money-foundations',
  slug: 'money-foundations',
  title: {
    en: 'Money Foundations: What Money Does, Income, and Balance',
    te: 'డబ్బు పునాదులు: డబ్బు ఏమి చేస్తుంది, ఆదాయం మరియు నిల్వ',
  },
  pillarId: 'budget',
  conceptIds: ['money', 'income', 'expense', 'budget', 'opportunity-cost'],
  level: 'foundation',
  estimatedMinutes: 8,
  prerequisites: [],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-11',
  learningObjectives: [
    {
      id: 'obj-mf-1',
      description: {
        en: 'Explain money as a medium of exchange, store of value, and unit of account.',
        te: 'డబ్బును మార్పిడి సాధనంగా, విలువల నిల్వగా వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-mf-2',
      description: {
        en: 'Categorize student cash flows into active income, essential needs, and discretionary wants.',
        te: 'విద్యార్థి ఆదాయాన్ని అవసరాలు మరియు కోరికలుగా వర్గీకరించడం.',
      },
      evidenceType: 'classify',
    },
    {
      id: 'obj-mf-3',
      description: {
        en: 'Calculate net remaining balance and identify the opportunity cost of spending decisions.',
        te: 'మిగిలిన నిల్వను లెక్కించి, అవకాశ వ్యయాన్ని గుర్తించడం.',
      },
      evidenceType: 'calculate',
    },
  ],
  stages: [
    {
      id: 'stg-mf-hook',
      type: 'hook',
      title: { en: 'The ₹5,000 Starting Line', te: '₹5,000 ఆరంభం' },
      content: {
        en: 'Imagine you just completed your summer holidays in Hyderabad. Through tutoring a neighbor in math and helping design posters for a local school event, you earned ₹5,000 in your hand!\n\nInstantly, ten different ideas hit your mind: new gaming headphones, college entrance books, helping pay your metro commute pass, treat friends to street food, or save for the upcoming year.\n\nMoney is not just paper notes or digital numbers on a screen — it represents your time, energy, and choices. How you allocate this ₹5,000 determines whether you build financial peace or stress.',
        te: 'మీరు హైదరాబాద్‌లో వేసవి సెలవుల్లో పొరుగు పిల్లలకు ట్యూషన్ చెప్పి ₹5,000 సంపాదించారని ఊహించండి.\n\nవెంటనే మీ మనస్సులోకి ఎన్నో ఆలోచనలు వస్తాయి: హెడ్‌ఫోన్లు, పుస్తకాలు, మెట్రో పాస్, స్నేహితులతో సరదాగా గడపడం, లేదా భవిష్యత్తు కోసం దాచుకోవడం.\n\nడబ్బు అనేది కేవలం కాగితం నోట్లు మాత్రమే కాదు — అది మీ సమయం మరియు ఎంపికల ప్రతిబింబం. ఈ ₹5,000ను మీరు ఎలా కేటాయిస్తారనేదే మీ ఆర్థిక ప్రశాంతతను నిర్ణయిస్తుంది.',
      },
    },
    {
      id: 'stg-mf-discovery',
      type: 'discovery',
      title: { en: 'Test Your Intuition', te: 'మీ అంతర్ దృష్టిని పరీక్షించండి' },
      content: {
        en: 'Before diving into definitions, consider this quick puzzle: If you spend ₹1,500 on a pair of designer shoes today, what have you truly spent?',
        te: 'నియమాలు నేర్చుకునే ముందు ఒక ప్రశ్న: ఈరోజు మీరు ₹1,500 పెట్టి డిజైనర్ బూట్లు కొంటే, మీరు నిజంగా ఏమి కోల్పోయినట్లు?',
      },
      questions: [
        {
          id: 'q-mf-disc-1',
          question: {
            en: 'What is the true economic cost of spending ₹1,500 on an impulse want?',
            te: 'ఒక కోరిక కోసం ₹1,500 ఖర్చు చేయడంలో అసలైన ఆర్థిక నష్టం ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Only the ₹1,500 cash that left your wallet', te: 'కేవలం మీ పర్సులోంచి వెళ్లిన ₹1,500 మాత్రమే' },
            { en: 'The ₹1,500 cash PLUS the next-best priority you can no longer buy with that money', te: '₹1,500 నగదుతో పాటు, ఆ డబ్బుతో తీర్చుకోలేకపోయిన మరొక ముఖ్యమైన అవసరం' },
            { en: 'Nothing, because shoes are always an investment', te: 'ఏమీ లేదు, బూట్లు ఎల్లప్పుడూ మంచి పెట్టుబడి' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Correct! This is the concept of Opportunity Cost. Money is scarce: every rupee committed to a Want is a rupee that cannot protect you against emergencies or purchase textbooks.',
            te: 'సరైన సమాధానం! దీనినే అవకాశ వ్యయం (Opportunity Cost) అంటారు. డబ్బు పరిమితం కాబట్టి ఒకదానికి ఖర్చు చేస్తే మరొక ముఖ్యమైన పనిని వదులుకోవాల్సి వస్తుంది.',
          },
          objectiveId: 'obj-mf-3',
        },
      ],
    },
    {
      id: 'stg-mf-intuition',
      type: 'intuition',
      title: { en: 'The Three Roles of Money', te: 'డబ్బు యొక్క 3 ముఖ్య పాత్రలు' },
      content: {
        en: 'Economists understand money by what it does:\n\n1. **Medium of Exchange**: You do not have to barter bags of rice to buy a notebook. Money standardizes transactions.\n2. **Store of Value**: If you save ₹500 today, it retains purchasing ability for next week (though inflation gradually erodes it over years).\n3. **Unit of Account**: It gives everything a common price tag, letting you compare if ₹200 for a meal is worth more to you than ₹200 for a phone recharge.',
        te: 'ఆర్థికవేత్తలు డబ్బును దాని మూడు పాత్రల ద్వారా వివరిస్తారు:\n\n1. **మార్పిడి సాధనం**: పుస్తకం కొనడానికి మీరు బియ్యం బస్తాలు ఇచ్చి మార్పిడి చేయాల్సిన పనిలేదు.\n2. **విలువల నిల్వ**: ఈరోజు దాచిన ₹500 వచ్చే వారం కూడా తన విలువను నిలుపుకుంటుంది.\n3. **ఖాతా యూనిట్**: అన్నింటికీ ఒకే ధరను నిర్ణయించి, వేర్వేరు వస్తువుల విలువను పోల్చుకోవడానికి వీలు కల్పిస్తుంది.',
      },
    },
    {
      id: 'stg-mf-mechanism',
      type: 'mechanism',
      title: { en: 'The Cash Flow Equation', te: 'నగదు ప్రవాహ సమీకరణం' },
      content: {
        en: 'Every person, household, and company operates under one foundational equation:\n\n$$\\text{Net Cash Flow} = \\text{Total Income} - \\text{Total Expenses}$$\n\n- If Income > Expenses: You have a **Surplus** (positive savings to build wealth).\n- If Income = Expenses: You are living paycheck-to-paycheck (zero safety cushion).\n- If Income < Expenses: You have a **Deficit** (forced to borrow or accumulate debt).\n\nSeparating **Needs** (food, basic shelter, study materials, essential commute) from **Wants** (dining out, entertainment, branded fashion) is the secret to controlling expenses.',
        te: 'ప్రతి వ్యక్తి మరియు కుటుంబం ఈ ప్రాథమిక సమీకరణంపైనే ఆధారపడి ఉంటుంది:\n\n$$\\text{నికర నగదు} = \\text{మొత్తం ఆదాయం} - \\text{మొత్తం ఖర్చులు}$$\n\n- ఆదాయం > ఖర్చులు: **మిగులు** (సంపద సృష్టించడానికి పొదుపు).\n- ఆదాయం = ఖర్చులు: సరిసమానం (ఎటువంటి భద్రత లేని స్థితి).\n- ఆదాయం < ఖర్చులు: **లోటు** (అప్పులు చేయవలసి వస్తుంది).\n\nఅవసరాలను కోరికల నుండి వేరు చేయడం ద్వారా ఖర్చులను అదుపులో ఉంచుకోవచ్చు.',
      },
    },
    {
      id: 'stg-mf-worked-example',
      type: 'worked_example',
      title: { en: 'Worked Case: Priya’s First Balance Sheet', te: 'ఉదాహరణ: ప్రియ ఆర్థిక లెక్క' },
      content: {
        en: 'Let’s calculate Priya’s monthly cash flow:\n\n- **Income**: ₹5,000 (Tutoring)\n- **Essential Needs**: Books ₹1,500 + Bus pass ₹800 + Phone recharge ₹300 = **₹2,600**\n- **Discretionary Wants**: Treat friends ₹600 + New backpack ₹1,200 = **₹1,800**\n\n$$\\text{Total Expenses} = ₹2,600 + ₹1,800 = ₹4,400$$\n$$\\text{Surplus (Savings)} = ₹5,000 - ₹4,400 = ₹600$$\n\n**Takeaway**: Priya keeps ₹600 for emergency savings. But if an unexpected college fee of ₹800 arrives, she is ₹200 short unless she reduces her discretionary backpack or dining out spending!',
        te: 'ప్రియ నెలవారీ లెక్కను పరిశీలిద్దాం:\n\n- **ఆదాయం**: ₹5,000\n- **అవసరాలు**: పుస్తకాలు ₹1,500 + బస్ పాస్ ₹800 + రీఛార్జ్ ₹300 = **₹2,600**\n- **కోరికలు**: స్నేహితులతో ఖర్చు ₹600 + బ్యాగ్ ₹1,200 = **₹1,800**\n\n$$\\text{మొత్తం ఖర్చులు} = ₹2,600 + ₹1,800 = ₹4,400$$\n$$\\text{మిగులు (పొదుపు)} = ₹5,000 - ₹4,400 = ₹600$$\n\nముఖ్య అంశం: ప్రియ వద్ద ₹600 మిగులుతుంది. కానీ అనుకోకుండా ₹800 ఖర్చు వస్తే, ఆమె తన కోరికలను తగ్గించుకోకపోతే ₹200 లోటు ఏర్పడుతుంది!',
      },
    },
    {
      id: 'stg-mf-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Challenge', te: 'నైపుణ్య పరీక్ష' },
      content: {
        en: 'Demonstrate your understanding of money foundations and cash flow balance.',
        te: 'డబ్బు పునాదులపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-mf-mc-1',
          question: {
            en: 'Which of the following is classified as a "Need" for a high school student?',
            te: 'క్రింది వాటిలో హైస్కూల్ విద్యార్థికి "అవసరం"గా ఏది పరిగణించబడుతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'Brand new sneakers to look fashionable at school', te: 'ఫ్యాషన్ కోసం కొత్త బ్రాండెడ్ షూస్' },
            { en: 'Prescribed textbooks and basic school transport pass', te: 'పాఠ్యపుస్తకాలు మరియు పాఠశాల బస్ పాస్' },
            { en: 'Premium subscription to a movie streaming service', te: 'సినిమాల స్ట్రీమింగ్ సబ్‌స్క్రిప్షన్' },
            { en: 'Eating fast food at a shopping mall after classes', te: 'షాపింగ్ మాల్‌లో ఫాస్ట్ ఫుడ్ తినడం' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Prescribed textbooks and transport are essential tools required to study and attend class safely. Everything else is a discretionary want.',
            te: 'చదువుకోవడానికి అవసరమైన పుస్తకాలు మరియు ప్రయాణ సాధనం తప్పనిసరి అవసరాలు.',
          },
          objectiveId: 'obj-mf-2',
        },
        {
          id: 'q-mf-mc-2',
          question: {
            en: 'If your monthly income is ₹4,000 and total expenses are ₹4,500, what is your net financial situation?',
            te: 'మీ నెలవారీ ఆదాయం ₹4,000 మరియు ఖర్చులు ₹4,500 అయితే మీ ఆర్థిక పరిస్థితి ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: '₹500 Surplus — ready to invest in mutual funds', te: '₹500 మిగులు' },
            { en: '₹500 Deficit — entering debt unless spending is cut or income increases', te: '₹500 లోటు — ఖర్చులు తగ్గించకపోతే అప్పుల్లో పడే ప్రమాదం' },
            { en: 'Balanced budget with zero debt risk', te: 'సమతుల్య బడ్జెట్' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Income (₹4,000) minus Expenses (₹4,500) equals -₹500. This is a deficit of ₹500 that requires borrowing or drawing down past savings.',
            te: 'ఆదాయం కంటే ఖర్చు ₹500 ఎక్కువ ఉంది, ఇది లోటు. దీనిని పూడ్చడానికి అప్పు చేయాల్సి వస్తుంది.',
          },
          objectiveId: 'obj-mf-3',
        },
        {
          id: 'q-mf-mc-3',
          question: {
            en: 'Why does keeping money in a zero-interest box for 10 years fail to preserve your purchasing power?',
            te: '10 ఏళ్ల పాటు వడ్డీ లేని పెట్టెలో డబ్బు దాచడం వల్ల కొనుగోలు శక్తి ఎందుకు తగ్గిపోతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'Paper notes are confiscated automatically every 3 years', te: 'నోట్లు ఆటోమేటిక్‌గా రద్దు అవుతాయి' },
            { en: 'Inflation steadily increases prices, so the exact same rupees buy far fewer goods in the future', te: 'ద్రవ్యోల్బణం వల్ల ధరలు పెరిగి, అదే డబ్బుతో భవిష్యత్తులో చాలా తక్కువ వస్తువులు వస్తాయి' },
            { en: 'Zero-interest cash violates Reserve Bank of India consumer lending guidelines', te: 'RBI నిబంధనలను ఉల్లంఘిస్తుంది' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'While paper cash holds nominal value, inflation erodes its purchasing power. To protect long-term purchasing power, money must earn returns that match or beat inflation.',
            te: 'ద్రవ్యోల్బణం వల్ల రూపాయి కొనుగోలు శక్తి తగ్గుతుంది. అందుకే దీర్ఘకాలిక భద్రత కోసం ద్రవ్యోల్బణాన్ని మించిన రాబడి అవసరం.',
          },
          objectiveId: 'obj-mf-1',
        },
      ],
    },
  ],
};
