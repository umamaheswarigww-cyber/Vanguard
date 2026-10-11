import type { Lesson } from '@/types/content';

export const savingsGoalsLesson: Lesson = {
  id: 'savings-goals',
  slug: 'savings-goals',
  title: {
    en: 'Goals & Smart Choices: Target-Based Financial Planning',
    te: 'లక్ష్యాలు & స్మార్ట్ ఎంపికలు: లక్ష్య ఆధారిత ఆర్థిక ప్రణాళిక',
  },
  pillarId: 'budget',
  conceptIds: ['saving', 'goal-setting', 'opportunity-cost'],
  level: 'core',
  estimatedMinutes: 9,
  prerequisites: ['money-foundations'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-11',
  learningObjectives: [
    {
      id: 'obj-sg-1',
      description: {
        en: 'Classify financial goals into short-term (< 1 year), medium-term (1–3 years), and long-term (3+ years).',
        te: 'ఆర్థిక లక్ష్యాలను స్వల్పకాలిక, మధ్యకాలిక, దీర్ఘకాలిక లక్ష్యాలుగా వర్గీకరించడం.',
      },
      evidenceType: 'classify',
    },
    {
      id: 'obj-sg-2',
      description: {
        en: 'Calculate the monthly savings required to reach a specific target date.',
        te: 'లక్ష్యాన్ని చేరుకోవడానికి అవసరమైన నెలవారీ పొదుపును లెక్కించడం.',
      },
      evidenceType: 'calculate',
    },
    {
      id: 'obj-sg-3',
      description: {
        en: 'Evaluate trade-offs between instant gratification and achieving future milestones.',
        te: 'తక్షణ ఆనందం మరియు భవిష్యత్ లక్ష్యాల మధ్య తేడాలను అంచనా వేయడం.',
      },
      evidenceType: 'compare',
    },
  ],
  stages: [
    {
      id: 'stg-sg-hook',
      type: 'hook',
      title: { en: 'The Laptop Dream', te: 'ల్యాప్‌టాప్ కల' },
      content: {
        en: 'Rohan is entering Grade 12 in Hyderabad. He needs a reliable coding laptop costing ₹36,000 for his computer science studies and entrance prep.\n\nHe has 12 months before his college entrance course begins. If Rohan simply tries to "save whatever is left", he usually ends up spending his stipend on snacks and movies with zero saved.\n\nHow can Rohan turn a vague wish of ₹36,000 into a mathematically achievable reality?',
        te: 'హైదరాబాద్‌లో 12వ తరగతి చదువుతున్న రోహన్‌కు కంప్యూటర్ సైన్స్ చదువు కోసం ₹36,000 విలువైన ల్యాప్‌టాప్ కావాలి.\n\nఅతనికి 12 నెలల సమయం ఉంది. మిగిలినది దాచుకుందాం అనుకుంటే ఏమీ మిగలడం లేదు. ఈ కోరికను ఖచ్చితమైన ప్రణాళికగా ఎలా మార్చాలి?',
      },
    },
    {
      id: 'stg-sg-discovery',
      type: 'discovery',
      title: { en: 'Timeline Strategy', te: 'సమయ ప్రణాళిక' },
      content: {
        en: 'How should Rohan divide his goal across time?',
        te: 'రోహన్ తన లక్ష్యాన్ని సమయం ప్రకారం ఎలా విభజించాలి?',
      },
      questions: [
        {
          id: 'q-sg-disc-1',
          question: {
            en: 'What is the required monthly savings rate to save ₹36,000 in exactly 12 months?',
            te: '12 నెలల్లో ₹36,000 ఆదా చేయడానికి నెలకు ఎంత పొదుపు చేయాలి?',
          },
          type: 'mcq',
          options: [
            { en: '₹1,500 per month', te: 'నెలకు ₹1,500' },
            { en: '₹3,000 per month', te: 'నెలకు ₹3,000' },
            { en: '₹6,000 per month', te: 'నెలకు ₹6,000' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Spot on! ₹36,000 ÷ 12 months = ₹3,000 per month. Breaking a big scary goal into a clear monthly target makes it actionable.',
            te: 'సరైన సమాధానం! ₹36,000 ÷ 12 నెలలు = నెలకు ₹3,000. పెద్ద లక్ష్యాన్ని చిన్న నెలవారీ మొత్తాలుగా మార్చడం సులభం చేస్తుంది.',
          },
          objectiveId: 'obj-sg-2',
        },
      ],
    },
    {
      id: 'stg-sg-intuition',
      type: 'intuition',
      title: { en: 'Short vs Medium vs Long-Term Goals', te: 'స్వల్ప vs మధ్య vs దీర్ఘకాలిక లక్ష్యాలు' },
      content: {
        en: 'Financial goals are grouped by **Time Horizon**:\n\n- **Short-Term (< 1 Year)**: School exam registration fee, bicycle repair, festival gift. (Keep in savings account or recurring deposit; zero risk).\n- **Medium-Term (1–3 Years)**: Laptop, vocational certification, college tuition cushion. (Safe fixed deposits or conservative debt instruments).\n- **Long-Term (3–5+ Years)**: Higher education degree, starting a venture. (Can consider diversified equity mutual funds because there is time to ride out market cycles).\n\nAligning the time horizon with the right product protects you from forced losses.',
        te: 'లక్ష్యాలను సమయం ఆధారంగా వర్గీకరిస్తారు:\n\n- **స్వల్పకాలిక (< 1 సంవత్సరం)**: పరీక్ష ఫీజు, సైకిల్ రిపేర్ (బ్యాంక్ ఖాతా లేదా RD లో ఉంచాలి; సున్నా రిస్క్).\n- **మధ్యకాలిక (1-3 సంవత్సరాలు)**: ల్యాప్‌టాప్, కోర్సు ఫీజు (ఫిక్స్‌డ్ డిపాజిట్లలో ఉంచడం మంచిది).\n- **దీర్ఘకాలిక (3-5+ సంవత్సరాలు)**: ఉన్నత చదువులు, సొంత వ్యాపారం (ఈక్విటీ మ్యూచువల్ ఫండ్లలో దీర్ఘకాలిక పెట్టుబడికి సమయం ఉంటుంది).',
      },
    },
    {
      id: 'stg-sg-mechanism',
      type: 'mechanism',
      title: { en: 'The SMART Goal Framework', te: 'SMART లక్ష్యాల సూత్రం' },
      content: {
        en: 'To make any money goal succeed, make it **S.M.A.R.T.**:\n\n- **Specific**: "Buy an Intel i5 laptop for coding", not "Get some electronics".\n- **Measurable**: Exact cost is ₹36,000.\n- **Achievable**: Rohan can earn ₹4,500 from tutoring and allocate ₹3,000.\n- **Relevant**: It directly supports his career and educational ambitions.\n- **Time-Bound**: Deadline is 12 months from today.\n\n$$\\text{Monthly Savings Target} = \\frac{\\text{Target Goal Amount} - \\text{Current Savings}}{\\text{Number of Months}}$$ ',
        te: 'ఏదైనా లక్ష్యం నెరవేరాలంటే అది **SMART** గా ఉండాలి:\n\n- **Specific (నిర్దిష్టమైనది)**: కోడింగ్ కోసం ల్యాప్‌టాప్ కొనడం.\n- **Measurable (కొలవదగినది)**: ఖచ్చితంగా ₹36,000.\n- **Achievable (సాధ్యమయ్యేది)**: నెలకు ₹3,000 దాచడం సాధ్యమే.\n- **Relevant (సంబంధితమైనది)**: చదువుకు ఉపయోగపడుతుంది.\n- **Time-Bound (సమయ పరిమితి)**: 12 నెలల గడువు.',
      },
    },
    {
      id: 'stg-sg-worked-example',
      type: 'worked_example',
      title: { en: 'Worked Case: Trade-Off Analysis', te: 'ఉదాహరణ: ఎంపికల విశ్లేషణ' },
      content: {
        en: 'Suppose in Month 4, Rohan’s friends invite him on a weekend hill-station trip costing ₹3,000.\n\n- **Option A (Instant Gratification)**: Spend the ₹3,000 on the trip. His laptop goal falls behind by 1 whole month, or he must save ₹3,375 every remaining month.\n- **Option B (Negotiated Balance)**: Rohan proposes a local day picnic costing ₹500, saves ₹2,500 for the laptop, and falls behind by only ₹500 rather than ₹3,000!\n\nSmart budgeting is about conscious compromise, not total deprivation.',
        te: '4వ నెలలో రోహన్‌ను స్నేహితులు ₹3,000 ఖర్చుతో కూడిన ట్రిప్‌కు పిలిచారు అనుకుందాం:\n\n- **ఎంపిక A**: ట్రిప్‌కు వెళ్ళడం. ల్యాప్‌టాప్ ఒక నెల ఆలస్యమవుతుంది.\n- **ఎంపిక B**: ₹500 తో చిన్న పిక్నిక్ ఎంచుకుని, మిగిలిన ₹2,500 ల్యాప్‌టాప్ కోసం దాచుకోవడం.\n\nతెలివైన ప్రణాళిక అంటే కోరికలను పూర్తిగా వదిలేయడం కాదు, సమతుల్యతను కాపాడుకోవడం.',
      },
    },
    {
      id: 'stg-sg-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Challenge', te: 'నైపుణ్య పరీక్ష' },
      content: {
        en: 'Prove your ability to calculate targets and evaluate financial trade-offs.',
        te: 'లక్ష్యాల గణనపై మీ పట్టును నిరూపించుకోండి.',
      },
      questions: [
        {
          id: 'q-sg-mc-1',
          question: {
            en: 'Why should money for a short-term goal (< 6 months) NOT be invested in volatile stock markets?',
            te: 'స్వల్పకాలిక లక్ష్యాల (< 6 నెలలు) కోసం స్టాక్ మార్కెట్లలో ఎందుకు పెట్టుబడి పెట్టకూడదు?',
          },
          type: 'mcq',
          options: [
            { en: 'Stocks are illegal for students under 25', te: 'స్టాక్స్ చట్టవిరుద్ధం' },
            { en: 'Short-term market swings could cause a 10–20% temporary drop right when you need the money', te: 'డబ్బు అవసరమైన సమయానికి మార్కెట్ తాత్కాలికంగా పడిపోయే ప్రమాదం ఉంది' },
            { en: 'Banks do not allow moving money from stocks', te: 'బ్యాంకులు అనుమతించవు' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Equity markets fluctuate daily. In 6 months, a market dip could leave you with less money than you started with right when the fee is due.',
            te: 'స్టాక్ మార్కెట్లలో హెచ్చుతగ్గులు ఉంటాయి. స్వల్పకాలంలో మార్కెట్ పడిపోతే అసలుకే మోసం వస్తుంది.',
          },
          objectiveId: 'obj-sg-1',
        },
        {
          id: 'q-sg-mc-2',
          question: {
            en: 'Ananya wants to save ₹12,000 for her annual college exam fee in 6 months. How much must she save each month?',
            te: 'అనన్య 6 నెలల్లో కాలేజ్ ఫీజు ₹12,000 ఆదా చేయాలనుకుంటే నెలకు ఎంత దాచాలి?',
          },
          type: 'mcq',
          options: [
            { en: '₹1,000 per month', te: 'నెలకు ₹1,000' },
            { en: '₹2,000 per month', te: 'నెలకు ₹2,000' },
            { en: '₹3,000 per month', te: 'నెలకు ₹3,000' },
          ],
          correctIndex: 1,
          explanation: {
            en: '₹12,000 ÷ 6 months = ₹2,000 per month.',
            te: '₹12,000 ÷ 6 నెలలు = నెలకు ₹2,000.',
          },
          objectiveId: 'obj-sg-2',
        },
        {
          id: 'q-sg-mc-3',
          question: {
            en: 'Which of the following is an actionable, well-structured S.M.A.R.T. financial goal?',
            te: 'క్రింది వాటిలో సరైన SMART ఆర్థిక లక్ష్యం ఏది?',
          },
          type: 'mcq',
          options: [
            { en: 'Become wealthy as soon as possible without making a budget', te: 'బడ్జెట్ లేకుండా వీలైనంత త్వరగా ధనవంతుడిని కావడం' },
            { en: 'Save ₹18,000 over the next 6 months (₹3,000/month) for competitive exam coaching materials', te: 'రాబోయే 6 నెలల్లో పోటీ పరీక్షల పుస్తకాల కోసం ₹18,000 (నెలకు ₹3,000) ఆదా చేయడం' },
            { en: 'Buy hot stock tips whenever trending on social media', te: 'సోషల్ మీడియాలో ట్రెండ్ అయ్యే స్టాక్స్ కొనడం' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'This goal is Specific (exam materials), Measurable (₹18,000), Achievable (₹3,000/mo), Relevant (student success), and Time-bound (6 months).',
            te: 'ఈ లక్ష్యం నిర్దిష్టమైనది, కొలవదగినది, సాధ్యమయ్యేది, సంబంధితమైనది మరియు 6 నెలల స్పష్టమైన కాలపరిమితి కలిగి ఉంది.',
          },
          objectiveId: 'obj-sg-3',
        },
      ],
    },
  ],
};
