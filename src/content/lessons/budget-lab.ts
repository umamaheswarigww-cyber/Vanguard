import type { Lesson } from '@/types/content';

export const budgetLabLesson: Lesson = {
  id: 'budget-lab',
  slug: 'budget-lab',
  title: {
    en: 'Mastering the Budget: Plan Your Money Before You Spend It',
    te: 'బడ్జెట్ మాస్టరింగ్: ఖర్చు చేయడానికి ముందే మీ డబ్బును ప్లాన్ చేసుకోండి',
  },
  pillarId: 'budget',
  conceptIds: ['budget', 'income', 'expense', 'opportunity-cost'],
  level: 'foundation',
  estimatedMinutes: 10,
  prerequisites: [],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-budget-1',
      description: {
        en: 'Explain why a budget is a proactive plan, not a restrictive judgment.',
        te: 'బడ్జెట్ అనేది పరిమితి కాకుండా ముందుచూపుతో కూడిన ప్రణాళిక అని వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-budget-2',
      description: {
        en: 'Distinguish essential needs from discretionary wants within an Indian student context.',
        te: 'భారతీయ విద్యార్థి సందర్భంలో అవసరాలు మరియు కోరికల మధ్య తేడాను గుర్తించడం.',
      },
      evidenceType: 'classify',
    },
    {
      id: 'obj-budget-3',
      description: {
        en: 'Reallocate a budget in response to an unexpected expense without falling into debt.',
        te: 'ఊహించని ఖర్చు వచ్చినప్పుడు అప్పుల్లో పడకుండా బడ్జెట్‌ను పునఃసర్దుబాటు చేయడం.',
      },
      evidenceType: 'apply',
    },
  ],
  stages: [
    {
      id: 'stg-b-hook',
      type: 'hook',
      title: { en: 'The ₹5,000 Dilemma', te: '₹5,000 డైలమా' },
      content: {
        en: 'Meet Priya, a Grade 11 student in Hyderabad. She just earned ₹5,000 by tutoring neighborhood kids after school. Her college entrance prep books cost ₹1,500, bus pass is ₹800, her phone recharge is ₹300, and friends are going out for Biryani (₹600). Plus, she really wants a new backpack (₹1,200). If she spends without a plan, what happens when an unexpected expense strikes?',
        te: 'హైదరాబాద్‌లో 11వ తరగతి చదువుతున్న ప్రియను కలవండి. ఆమె సాయంత్రం ట్యూషన్లు చెప్పి ₹5,000 సంపాదించింది. కాలేజీ ఎంట్రన్స్ పుస్తకాలు ₹1,500, బస్సు పాస్ ₹800, ఫోన్ రీఛార్జ్ ₹300, స్నేహితులతో బిర్యానీ ₹600, కొత్త బ్యాగ్ ₹1,200. ప్రణాళిక లేకుండా ఖర్చు చేస్తే, ఊహించని ఖర్చు వచ్చినప్పుడు ఏం జరుగుతుంది?',
      },
    },
    {
      id: 'stg-b-discovery',
      type: 'discovery',
      title: { en: 'What is your intuition?', te: 'మీ అభిప్రాయం ఏమిటి?' },
      content: {
        en: 'Before learning any formulas, what do you think is the smartest first move when you receive money?',
        te: 'ఏదైనా ఫార్ములా నేర్చుకునే ముందు, డబ్బు అందిన వెంటనే చేయవలసిన మొదటి ఉత్తమ పని ఏమిటి?',
      },
      questions: [
        {
          id: 'q-b-disc-1',
          question: {
            en: 'What is the most effective way to manage your income?',
            te: 'మీ ఆదాయాన్ని నిర్వహించడానికి అత్యంత ప్రభావవంతమైన మార్గం ఏది?',
          },
          type: 'mcq',
          options: [
            { en: 'Spend on what you feel like, then save whatever remains at the end of the month', te: 'నచ్చినట్లు ఖర్చు చేసి, నెలాఖరులో మిగిలింది దాచుకోవడం' },
            { en: 'Plan allocations for essentials and savings first, before spending discretionary money', te: 'ఖర్చు చేయడానికి ముందే అవసరాలు మరియు పొదుపుకు కేటాయించడం' },
            { en: 'Never spend anything on enjoyment or friends', te: 'స్నేహితులు లేదా ఆనందం కోసం అసలు ఏమీ ఖర్చు చేయకపోవడం' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Planning your savings and essential commitments FIRST ("paying yourself first") guarantees your vital goals are met. Spending first and saving the leftover usually leaves ₹0 saved!',
            te: 'ముందుగా అవసరాలు మరియు పొదుపును కేటాయించడం ("మిమ్మల్ని మీరు మొదట చెల్లించుకోవడం") మీ లక్ష్యాలను కాపాడుతుంది!',
          },
          objectiveId: 'obj-budget-1',
        },
      ],
    },
    {
      id: 'stg-b-intuition',
      type: 'intuition',
      title: { en: 'Needs vs. Wants & Opportunity Cost', te: 'అవసరాలు vs కోరికలు & అవకాశ వ్యయం' },
      content: {
        en: 'A **Need** is something required to survive and study: food, transport to school, medical care, textbook. A **Want** is something nice to have: festival clothes, brand sneakers, eating out. Neither is bad! But because money is limited, every time you choose a Want, you pay an **Opportunity Cost** — the alternative you gave up (like having an emergency safety cushion).',
        te: '**అవసరం** అనేది బతకడానికి, చదువుకోవడానికి తప్పనిసరి: భోజనం, బస్సు పాస్, మందులు, పుస్తకాలు. **కోరిక** అనేది ఉంటే బాగుంటుంది: సినిమా, కొత్త స్నీకర్లు, బయట తినడం. కోరికలు తప్పు కాదు, కానీ డబ్బు పరిమితం కాబట్టి ఒకదాన్ని ఎంచుకుంటే మరొకటి వదులుకోవాల్సి వస్తుంది — దీనినే **అవకాశ వ్యయం (Opportunity Cost)** అంటారు.',
      },
    },
    {
      id: 'stg-b-mechanism',
      type: 'mechanism',
      title: { en: 'The Anatomy of a Working Budget', te: 'సమర్థవంతమైన బడ్జెట్ సూత్రం' },
      content: {
        en: 'A healthy budget balances three streams:\n\n1. **Essential Needs (40-60%):** Living and study costs that cannot be skipped.\n2. **Financial Cushion & Savings (20-30%):** Emergency fund and future goals.\n3. **Flexible Discretionary (10-30%):** Social life, hobbies, and personal enjoyment.\n\n*Rule to remember:* A budget is not meant to be rigid handcuffs. It is a steering wheel that gives YOU control over where your hard-earned money goes!',
        te: 'ఆరోగ్యకరమైన బడ్జెట్ మూడు భాగాలను సమతుల్యం చేస్తుంది:\n\n1. **తప్పనిసరి అవసరాలు (40-60%):** జీవనం మరియు విద్య ఖర్చులు.\n2. **పొదుపు & ఎమర్జెన్సీ ఫండ్ (20-30%):** అత్యవసర పరిస్థితులు, భవిష్యత్ లక్ష్యాలు.\n3. **వ్యక్తిగత కోరికలు (10-30%):** వినోదం, స్నేహితులు.\n\nగుర్తుంచుకోండి: బడ్జెట్ సంకెళ్లు కాదు, మీ ఆర్థిక స్వేచ్ఛకు దిక్సూచి!',
      },
    },
    {
      id: 'stg-b-experiment',
      type: 'experiment',
      title: { en: 'Interactive Budget Lab', te: 'ఇంటరాక్టివ్ బడ్జెట్ ల్యాబ్' },
      content: {
        en: 'Take control of Priya\'s ₹5,000 budget! Allocate funds across categories, watch your balances update live, and then handle a surprise unexpected event.',
        te: 'ప్రియ యొక్క ₹5,000 బడ్జెట్‌ను మీరే కేటాయించండి! లైవ్ లెక్కలను గమనించండి, ఆపై ఊహించని సవాలును ఎదుర్కోండి.',
      },
      interactionKey: 'budget-lab',
    },
    {
      id: 'stg-b-misconception',
      type: 'misconception',
      title: { en: 'Common Misconception Debunked', te: 'సాధారణ అపోహ - వాస్తవం' },
      content: {
        en: '❌ **Myth:** "A budget is only useful if life goes exactly as planned. If an emergency happens, the budget failed."\n\n✅ **Truth:** Real life ALWAYS has surprises! A good budget includes an **Emergency/Contingency cushion** specifically so that when a surprise comes (like a medical bill or broken umbrella), you adjust your discretionary spending rather than borrowing money.',
        te: '❌ **అపోహ:** "జీవితం అనుకున్నట్లు సాగినప్పుడే బడ్జెట్ పనిచేస్తుంది. అత్యవసరం వస్తే బడ్జెట్ విఫలమైనట్లే."\n\n✅ **వాస్తవం:** జీవితంలో ఎప్పుడూ ఊహించనివి జరుగుతాయి! సమర్థవంతమైన బడ్జెట్‌లో **ఎమర్జెన్సీ ఫండ్** ఉంటుంది, తద్వారా ఆకస్మిక ఖర్చు వచ్చినప్పుడు అప్పు చేయకుండా కోరికల ఖర్చు తగ్గించుకోవచ్చు.',
      },
    },
    {
      id: 'stg-b-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Check: Prove Your Understanding', te: 'నైపుణ్య పరీక్ష: మీ అవగాహనను పరీక్షించండి' },
      content: {
        en: 'Answer these questions to demonstrate your mastery of budgeting principles and earn your mastery badge.',
        te: 'బడ్జెట్ సూత్రాలపై మీ పట్టును నిరూపించుకోవడానికి క్రింది ప్రశ్నలకు సమాధానం ఇవ్వండి.',
      },
      questions: [
        {
          id: 'q-b-m-1',
          question: {
            en: 'If your monthly income is ₹4,000 and total planned expenses are ₹4,500, what is your financial state?',
            te: 'మీ నెలవారీ ఆదాయం ₹4,000 మరియు ప్రణాళికాబద్ధమైన ఖర్చులు ₹4,500 అయితే, మీ ఆర్థిక స్థితి ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Surplus of ₹500', te: '₹500 మిగులు' },
            { en: 'Deficit of ₹500 (spending more than earning)', te: '₹500 లోటు (ఆదాయం కంటే ఎక్కువ ఖర్చు)' },
            { en: 'Balanced budget', te: 'సమతుల్య బడ్జెట్' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'When expenses exceed income (₹4,500 > ₹4,000), you are in a deficit of ₹500. This must be funded by debt or past savings.',
            te: 'ఖర్చులు ఆదాయం కంటే ఎక్కువైతే లోటు (Deficit) ఏర్పడుతుంది.',
          },
          objectiveId: 'obj-budget-1',
        },
        {
          id: 'q-b-m-2',
          question: {
            en: 'An unexpected ₹800 hospital visit occurs. Which expense category should you cut first?',
            te: 'ఆకస్మికంగా ₹800 ఆసుపత్రి ఖర్చు వచ్చింది. మీరు మొదట ఏ కేటగిరీని తగ్గించాలి?',
          },
          type: 'mcq',
          options: [
            { en: 'Bus pass to school (Transport need)', te: 'స్కూల్ బస్సు పాస్ (తప్పనిసరి ప్రయాణం)' },
            { en: 'Textbooks required for exams (Education need)', te: 'పరీక్ష పుస్తకాలు (చదువు అవసరం)' },
            { en: 'Weekend cafe outing with friends (Discretionary want)', te: 'స్నేహితులతో వీకెండ్ కేఫ్ ఖర్చు (కోరిక)' },
          ],
          correctIndex: 2,
          explanation: {
            en: 'Discretionary wants (like cafe visits or movies) can be postponed without damaging your health, safety, or education. Always protect essentials first!',
            te: 'కోరికలను వాయిదా వేయవచ్చు, కానీ ఆరోగ్యం లేదా చదువును వాయిదా వేయలేము.',
          },
          objectiveId: 'obj-budget-2',
        },
        {
          id: 'q-b-m-3',
          question: {
            en: 'Why is "Opportunity Cost" crucial when deciding to buy a ₹1,200 branded shirt?',
            te: '₹1,200 బ్రాండెడ్ షర్ట్ కొనేటప్పుడు "అవకాశ వ్యయం" ఎందుకు ముఖ్యం?',
          },
          type: 'mcq',
          options: [
            { en: 'Because the ₹1,200 cannot now be used for coaching notes or emergency savings', te: 'ఎందుకంటే ఆ ₹1,200 ఇకపై కోచింగ్ నోట్స్ లేదా ఎమర్జెన్సీ ఫండ్ కోసం వాడలేము' },
            { en: 'Because branded shirts are always bad', te: 'బ్రాండెడ్ షర్టులు ఎప్పుడూ చెడ్డవి కాబట్టి' },
            { en: 'Because opportunity cost only applies to business owners', te: 'అవకాశ వ్యయం వ్యాపారులకు మాత్రమే వర్తిస్తుంది కాబట్టి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Opportunity cost reminds you that every rupee spent on one item cannot be spent on another goal. Being aware helps you choose consciously!',
            te: 'ఒకదానికి ఖర్చు చేసిన ప్రతి రూపాయి మరొక లక్ష్యానికి అందుబాటులో ఉండదు అనే స్పృహను అవకాశ వ్యయం అందిస్తుంది.',
          },
          objectiveId: 'obj-budget-3',
        },
      ],
    },
    {
      id: 'stg-b-connections',
      type: 'connections',
      title: { en: 'Next Steps & Related Concepts', te: 'తదుపరి అడుగులు & సంబంధిత అంశాలు' },
      content: {
        en: 'Now that you can allocate and balance money, the next step is discovering what to do with the savings you create: putting them to work through **Interest & Compounding**!',
        te: 'మీరు బడ్జెట్ ద్వారా మిగిల్చిన పొదుపును ఎలా వృద్ధి చేయాలో తెలుసుకోవడానికి తదుపరి పాఠం: **వడ్డీ & చక్రవడ్డీ**!',
      },
    },
  ],
};

export default budgetLabLesson;
