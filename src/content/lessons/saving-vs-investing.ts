import type { Lesson } from '@/types/content';

export const savingVsInvestingLesson: Lesson = {
  id: 'saving-vs-investing',
  slug: 'saving-vs-investing',
  title: {
    en: 'Why Invest? Beating Inflation & The Risk-Return Spectrum',
    te: 'ఎందుకు పెట్టుబడి పెట్టాలి? ద్రవ్యోల్బణాన్ని అధిగమించడం & రిస్క్-రిటర్న్ సూత్రం',
  },
  pillarId: 'invest',
  conceptIds: ['saving', 'investing', 'risk', 'return', 'inflation', 'diversification'],
  level: 'foundation',
  estimatedMinutes: 9,
  prerequisites: ['saving-basics'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-11',
  learningObjectives: [
    {
      id: 'obj-svi-1',
      description: {
        en: 'Explain why keeping long-term money solely in cash causes a silent loss of purchasing power to inflation.',
        te: 'దీర్ఘకాలిక డబ్బును నగదు రూపంలోనే ఉంచితే ద్రవ్యోల్బణం వల్ల విలువ ఎలా తగ్గుతుందో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-svi-2',
      description: {
        en: 'Analyze the risk-return spectrum from guaranteed bank FDs to diversified mutual funds and individual equities.',
        te: 'బ్యాంక్ FDల నుండి ఈక్విటీల వరకు రిస్క్-రిటర్న్ శ్రేణిని విశ్లేషించడం.',
      },
      evidenceType: 'compare',
    },
    {
      id: 'obj-svi-3',
      description: {
        en: 'Connect investment horizon (years) to the ability to weather short-term market volatility.',
        te: 'పెట్టుబడి సమయ పరిమితి మరియు మార్కెట్ ఒడుదొడుకుల తట్టుకునే సామర్థ్యాన్ని అనుసంధానించడం.',
      },
      evidenceType: 'apply',
    },
  ],
  stages: [
    {
      id: 'stg-svi-hook',
      type: 'hook',
      title: { en: 'The ₹10,000 Time Capsule', te: '₹10,000 టైమ్ క్యాప్సూల్' },
      content: {
        en: 'Imagine your grandparents put ₹10,000 in a steel trunk in the year 2000. Today, in 2026, you open the trunk: the ₹10,000 is crisp, untouched, and still ₹10,000.\n\nDid they lose money? Mathematically no, but economically YES!\n\nIn 2000, ₹10,000 could buy a month of groceries for an entire joint family or pay several terms of school fees. Today, ₹10,000 buys only a fraction of those same items. That invisible thief is **Inflation**.\n\nSaving protects your cash, but only **Investing** can help your money outgrow inflation over decades.',
        te: '2000వ సంవత్సరంలో మీ తాతయ్య ఒక ట్రంకు పెట్టెలో ₹10,000 దాచి పెట్టారు అనుకుందాం. 2026లో ఆ పెట్టె తెరిస్తే ఆ ₹10,000 అలాగే ఉంది.\n\nడబ్బు పోయిందా? లెక్క ప్రకారం లేదు, కానీ కొనుగోలు శక్తి పరంగా చాలా తగ్గిపోయింది!\n\n2000లో ₹10,000తో నెలంతా కుటుంబానికి సరుకులు వచ్చేవి. నేడు అందులో కొంత భాగం మాత్రమే వస్తుంది. దీనినే **ద్రవ్యోల్బణం (Inflation)** అంటారు.\n\nపొదుపు డబ్బును భద్రపరుస్తుంది, కానీ పెట్టుబడి మాత్రమే ద్రవ్యోల్బణాన్ని అధిగమించడానికి సహాయపడుతుంది.',
      },
    },
    {
      id: 'stg-svi-discovery',
      type: 'discovery',
      title: { en: 'Real vs Nominal Growth', te: 'నిజమైన vs నామమాత్రపు వృద్ధి' },
      content: {
        en: 'Let’s test your understanding of inflation-adjusted returns.',
        te: 'ద్రవ్యోల్బణ ప్రభావంపై మీ అవగాహనను పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-svi-disc-1',
          question: {
            en: 'If your savings account earns 3% interest per year, but inflation is 6% per year, what is your REAL purchasing power return?',
            te: 'సేవింగ్స్ ఖాతా 3% వడ్డీ ఇస్తుంటే, ద్రవ్యోల్బణం 6% ఉంటే, మీ నిజమైన కొనుగోలు శక్తి ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '+3% Gain', te: '+3% లాభం' },
            { en: '0% Break-Even', te: 'సరిసమానం' },
            { en: '-3% Silent Loss of Purchasing Power', te: '-3% కొనుగోలు శక్తి నష్టం' },
          ],
          correctIndex: 2,
          explanation: {
            en: 'Real Return = Nominal Return (3%) minus Inflation (6%) = -3%. Even though the rupee number increased, you can buy 3% FEWER goods next year!',
            te: 'నిజమైన రాబడి = వడ్డీ (3%) - ద్రవ్యోల్బణం (6%) = -3%. ఖాతాలో నంబర్ పెరిగినా, మీరు కొనగలిగే వస్తువుల పరిమాణం తగ్గుతుంది!',
          },
          objectiveId: 'obj-svi-1',
        },
      ],
    },
    {
      id: 'stg-svi-intuition',
      type: 'intuition',
      title: { en: 'The Risk-Return Trade-Off', te: 'రిస్క్-రిటర్న్ సమతుల్యత' },
      content: {
        en: 'In legal finance, there is an iron law: **Risk and Return are inseparable twins**.\n\n1. **Fixed Deposits / Government Bonds**: Very safe, principal protected up to ₹5 lakh by DICGC in banks. Return is fixed (approx 6–7%), just matching or slightly beating inflation.\n2. **Mutual Funds (Debt & Hybrid)**: Moderate risk, combines stability of debt with growth of equities.\n3. **Equity Shares / Index Funds**: Higher short-term fluctuation (stocks can fall 20% in a bad year), but historically provide higher inflation-beating growth (11–13% CAGR) over long 7–10 year horizons.\n\n⚠️ Anyone offering high guaranteed returns with zero risk is a scammer.',
        te: 'ఆర్థిక రంగంలో ఒక ప్రాథమిక సూత్రం ఉంది: **రిస్క్ మరియు రాబడి ఎల్లప్పుడూ కలిసే ఉంటాయి**.\n\n1. **ఫిక్స్‌డ్ డిపాజిట్లు**: చాలా సురక్షితం, స్థిరమైన వడ్డీ (సుమారు 6-7%).\n2. **హైబ్రిడ్ మ్యూచువల్ ఫండ్లు**: మధ్యస్థ రిస్క్, స్థిరత్వం మరియు వృద్ధి కలయిక.\n3. **ఈక్విటీ షేర్లు / ఇండెక్స్ ఫండ్లు**: స్వల్పకాలంలో హెచ్చుతగ్గులు ఎక్కువ, కానీ దీర్ఘకాలంలో (7-10 ఏళ్లు) ద్రవ్యోల్బణాన్ని అధిగమించే అధిక రాబడికి అవకాశం.\n\n⚠️ రిస్క్ లేకుండా అధిక హామీ లాభాలు ఇస్తామనేది మోసం.',
      },
    },
    {
      id: 'stg-svi-mechanism',
      type: 'mechanism',
      title: { en: 'Time as a Shock Absorber', te: 'సమయం ఒక రక్షణ కవచం' },
      content: {
        en: 'Why do adults invest in the stock market if it can crash?\n\nBecause **Time heals short-term volatility**.\n\nOver 1 day or 1 month, market prices swing based on news, politics, and emotion. But over 10 or 15 years, market returns reflect the real growth of productive companies building infrastructure, selling medicines, delivering consumer goods, and expanding the economy.\n\n- Need money in 6 months? Keep it in Savings/FD.\n- Building wealth for 10 years? Disciplined investing allows your capital to compound.',
        te: 'స్టాక్ మార్కెట్ పడిపోయే అవకాశం ఉన్నప్పటికీ ప్రజలు ఎందుకు పెట్టుబడి పెడతారు?\n\nఎందుకంటే **దీర్ఘకాల సమయం స్వల్పకాలిక నష్టాలను పూడుస్తుంది**.\n\nఒక రోజు లేదా ఒక నెలలో మార్కెట్ ఒడుదొడుకులకు లోనవుతుంది. కానీ 10 లేదా 15 సంవత్సరాలలో భారతదేశంలోని మంచి కంపెనీల వ్యాపార వృద్ధితో పాటు మీ సంపద కూడా పెరుగుతుంది.\n\n- 6 నెలల్లో కావాలా? సేవింగ్స్ లేదా FD లో ఉంచండి.\n- 10 ఏళ్ల భవిష్యత్తు కోసమా? క్రమశిక్షణతో కూడిన పెట్టుబడి సంపదను సృష్టిస్తుంది.',
      },
    },
    {
      id: 'stg-svi-worked-example',
      type: 'worked_example',
      title: { en: 'Worked Case: Saving vs Investing ₹1,000/Month', te: 'ఉదాహరణ: నెలకు ₹1,000 ఆదా vs పెట్టుబడి' },
      content: {
        en: 'Consider two friends over 15 years:\n\n- **Aman (Cash Locker)**: Saves ₹1,000 in a cash box every month. After 15 years: Invested = ₹1,80,000. Total = **₹1,80,000**. Inflation has cut its real value in half!\n- **Bhavana (Disciplined Index SIP)**: Invests ₹1,000 every month in an index fund averaging a hypothetical 12% annualized return. After 15 years: Invested = ₹1,80,000. Total Value = **approx ₹5,04,576**!\n\nCompounding + business productivity created over ₹3.24 lakh in extra wealth.',
        te: '15 సంవత్సరాల పాటు ఇద్దరు స్నేహితుల ఉదాహరణ:\n\n- **అమన్ (నగదు పెట్టె)**: నెలకు ₹1,000 నగదు రూపంలో దాచాడు. 15 ఏళ్ల తర్వాత: మొత్తం **₹1,80,000**. ద్రవ్యోల్బణం వల్ల దీని విలువ సగానికి తగ్గింది!\n- **భావన (ఇండెక్స్ ఫండ్ SIP)**: నెలకు ₹1,000 ఇండెక్స్ ఫండ్‌లో 12% ఊహాత్మక సగటు రాబడితో పెట్టుబడి పెట్టింది. 15 ఏళ్ల తర్వాత: మొత్తం **సుమారు ₹5,04,576**!\n\nచక్రవడ్డీ శక్తి వల్ల అదనంగా ₹3.24 లక్షల సంపద చేకూరింది.',
      },
    },
    {
      id: 'stg-svi-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Challenge', te: 'నైపుణ్య పరీక్ష' },
      content: {
        en: 'Assess your grasp of the relationship between inflation, risk, and investment time.',
        te: 'పెట్టుబడి ప్రాథమిక సూత్రాలపై మీ అవగాహనను పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-svi-mc-1',
          question: {
            en: 'What is the primary danger of keeping your life savings entirely in paper cash under a mattress for 20 years?',
            te: '20 ఏళ్ల పాటు మొత్తం పొదుపును కేవలం నగదు రూపంలోనే ఉంచడం వల్ల కలిగే ప్రధాన నష్టం ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Inflation will erode its purchasing power, buying far fewer groceries and services', te: 'ద్రవ్యోల్బణం వల్ల కొనుగోలు శక్తి పడిపోయి చాలా తక్కువ వస్తువులు వస్తాయి' },
            { en: 'The government automatically cancels paper cash every 2 years', te: 'ప్రభుత్వం రద్దు చేస్తుంది' },
            { en: 'Cash earns negative nominal interest rates in bank vaults', te: 'బ్యాంక్ వడ్డీ మైనస్ అవుతుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Cash earns 0% return. If prices double every 10–12 years due to inflation, your cash buys only 25% of what it used to after 20 years.',
            te: 'నగదుపై ఎటువంటి వడ్డీ రాదు. ద్రవ్యోల్బణం వల్ల ధరలు పెరిగినప్పుడు మీ డబ్బు కొనుగోలు శక్తి దారుణంగా పడిపోతుంది.',
          },
          objectiveId: 'obj-svi-1',
        },
        {
          id: 'q-svi-mc-2',
          question: {
            en: 'If average inflation is 6% per year and a bank fixed deposit pays 7% interest, what is your approximate REAL rate of return?',
            te: 'సగటు ద్రవ్యోల్బణం ఏడాదికి 6% మరియు బ్యాంక్ FD వడ్డీ 7% అయితే, మీ అసలైన నికర రాబడి (Real Return) ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '13% annual gain', te: '13% వార్షిక లాభం' },
            { en: 'Approx 1% real gain above inflation', te: 'ద్రవ్యోల్బణం కంటే సుమారు 1% ఎక్కువ' },
            { en: '-1% loss of purchasing power', te: '-1% కొనుగోలు శక్తి నష్టం' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Real Return ≈ Nominal Rate (7%) − Inflation Rate (6%) = +1%. Fixed deposits protect your purchasing power and yield a modest positive real return.',
            te: 'నిజమైన రాబడి ≈ వడ్డీ (7%) - ద్రవ్యోల్బణం (6%) = +1%. స్థిర డిపాజిట్లు మీ కొనుగోలు శక్తిని కాపాడుతాయి.',
          },
          objectiveId: 'obj-svi-1',
        },
        {
          id: 'q-svi-mc-3',
          question: {
            en: 'For a high school student needing money for college admission fees in 4 months, which financial vehicle is most appropriate?',
            te: '4 నెలల్లో కాలేజ్ అడ్మిషన్ ఫీజు చెల్లించాల్సిన విద్యార్థికి అత్యంత అనువైనది ఏది?',
          },
          type: 'mcq',
          options: [
            { en: 'High-risk cryptocurrency or volatile small-cap stocks', te: 'క్రిప్టోకరెన్సీ లేదా స్మాల్-క్యాప్ స్టాక్స్' },
            { en: 'Safe bank savings account or short-term fixed deposit', te: 'సురక్షితమైన సేవింగ్స్ ఖాతా లేదా షార్ట్-టర్మ్ ఫిక్స్‌డ్ డిపాజిట్' },
            { en: 'A 10-year lock-in equity tax-saver fund', te: '10 సంవత్సరాల ఈక్విటీ ఫండ్' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Short-term goals (< 1 year) must prioritize capital certainty and liquidity over return. Equities can swing downward unexpectedly in the short run.',
            te: 'స్వల్పకాలిక లక్ష్యాలకు మూలధన భద్రత మరియు సులభ లభ్యత చాలా ముఖ్యం. స్టాక్స్ లేదా క్రిప్టోలలో స్వల్పకాలంలో నష్టాలు వచ్చే అవకాశం ఉంది.',
          },
          objectiveId: 'obj-svi-2',
        },
      ],
    },
  ],
};
