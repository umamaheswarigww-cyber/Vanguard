import type { Lesson } from '@/types/content';

export const mutualFundBasicsLesson: Lesson = {
  id: 'mutual-fund-basics',
  slug: 'mutual-fund-basics',
  title: {
    en: 'Mutual Funds 101: Pooling Capital & How Units Work',
    te: 'మ్యూచువల్ ఫండ్స్ 101: మూలధనాన్ని సమీకరించడం & యూనిట్లు ఎలా పనిచేస్తాయి',
  },
  pillarId: 'invest',
  conceptIds: ['mutual-fund', 'nav', 'unit', 'amc', 'diversification'],
  level: 'core',
  estimatedMinutes: 12,
  prerequisites: ['businesses-and-shares'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-mf-1',
      description: {
        en: 'Explain how pooling funds allows small retail investors to access a diversified basket of assets.',
        te: 'డబ్బును పూల్ చేయడం ద్వారా చిన్న పెట్టుబడిదారులు విభిన్న ఆస్తుల బాస్కెట్‌ను ఎలా పొందవచ్చో వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-mf-2',
      description: {
        en: 'Define NAV (Net Asset Value) and calculate it using total assets, liabilities, and units.',
        te: 'NAV ను నిర్వచించి, ఆస్తులు, అప్పులు, మరియు యూనిట్లను ఉపయోగించి లెక్కించడం.',
      },
      evidenceType: 'calculate',
    },
    {
      id: 'obj-mf-3',
      description: {
        en: 'Debunk the misconception that a lower NAV means a fund is "cheaper" or a better deal.',
        te: 'తక్కువ NAV ఉన్న ఫండ్ "చౌకైనది" లేదా మంచిది అనే అపోహను ఖండించడం.',
      },
      evidenceType: 'identify',
    },
  ],
  stages: [
    {
      id: 'stg-mf-hook',
      type: 'hook',
      title: { en: 'The Hyderabad Mango Crate Dilemma', te: 'మామిడికాయల పెట్టె కథ' },
      content: {
        en: 'Suppose a wholesale fruit merchant at Kothapet fruit market sells delicious Alphonso mangoes, but ONLY in bulk crates of 100 mangoes for ₹5,000. You only have ₹250.\n\nYou cannot buy the crate alone. But what if you and 19 classmates pool your ₹250 each? Together, you have ₹5,000! You buy the crate, and each of you gets 5 delicious mangoes (units).\n\nA **Mutual Fund** works on this exact collective principle: thousands of everyday people pool money together to hire a professional fund manager and buy a diversified portfolio of dozens of stocks or bonds that none of them could easily buy alone.',
        te: 'హైదరాబాద్‌లోని పండ్ల మార్కెట్‌లో 100 మామిడికాయల పెట్టె ₹5,000 మాత్రమే అమ్ముతారు. మీ వద్ద ₹250 మాత్రమే ఉంది. మీరు ఒంటరిగా కొనలేరు.\n\nకానీ మీరు మరియు మరో 19 మంది స్నేహితులు తలా ₹250 కలిపితే మొత్తం ₹5,000 అవుతుంది! పెట్టె కొని ప్రతి ఒక్కరికీ 5 మామిడికాయలు (యూనిట్లు) లభిస్తాయి.\n\n**మ్యూచువల్ ఫండ్** సరిగ్గా ఈ సూత్రంపైనే పనిచేస్తుంది: వేలాది మంది చిన్న మొత్తాలను కలిపి ప్రొఫెషనల్ ఫండ్ మేనేజర్ ద్వారా అనేక షేర్లలో పెట్టుబడి పెడతారు.',
      },
    },
    {
      id: 'stg-mf-intuition',
      type: 'intuition',
      title: { en: 'Units and NAV: What Do You Actually Own?', te: 'యూనిట్లు & NAV: మీరు నిజంగా ఏమి కలిగి ఉంటారు?' },
      content: {
        en: 'When you put money into a mutual fund scheme, you do NOT directly own shares of Tata or Reliance. Instead, you own **Units of the Scheme**.\n\nThe price of one unit on any given day is called the **NAV (Net Asset Value)**:\n\n$$\\text{NAV per Unit} = \\frac{\\text{Total Scheme Assets} - \\text{Total Liabilities}}{\\text{Total Units Outstanding}}$$\n\nAt the end of every trading day, the fund calculates the current market value of all stocks it owns, subtracts operating fees/liabilities, and divides by total units.',
        te: 'మ్యూచువల్ ఫండ్‌లో పెట్టుబడి పెట్టినప్పుడు మీరు నేరుగా కంపెనీ షేర్లను కలిగి ఉండరు. మీరు ఆ స్కీమ్ యొక్క **యూనిట్లు (Units)** కలిగి ఉంటారు.\n\nఒక్కో యూనిట్ ధరను **NAV (Net Asset Value)** అంటారు:\n$$\\text{NAV} = \\frac{\\text{మొత్తం ఆస్తులు} - \\text{అప్పులు}}{\\text{మొత్తం యూనిట్లు}}$$',
      },
    },
    {
      id: 'stg-mf-experiment',
      type: 'experiment',
      title: { en: 'Interactive NAV Laboratory', te: 'ఇంటరాక్టివ్ NAV ప్రయోగశాల' },
      content: {
        en: 'Experiment with a fictional mutual fund holding 4 stocks. Change the market prices of the stocks and observe how the scheme’s Net Assets and NAV per unit calculate automatically.',
        te: '4 స్టాక్స్ ఉన్న కల్పిత మ్యూచువల్ ఫండ్‌లో ధరలను మార్చి చూసి స్కీమ్ NAV ఎలా మారుతుందో గమనించండి.',
      },
      interactionKey: 'nav-lab',
    },
    {
      id: 'stg-mf-misconception',
      type: 'misconception',
      title: { en: 'CRITICAL MISCONCEPTION: Is a Low NAV "Cheaper"?', te: 'కీలక అపోహ: తక్కువ NAV అంటే "చౌక" నా?' },
      content: {
        en: '❌ **The Big Myth:** *"Fund A has an NAV of ₹20, while Fund B has an NAV of ₹200. Fund A is cheaper, so I should buy Fund A to get more units!"*\n\n✅ **The Reality:** A mutual fund unit is NOT like buying vegetables! NAV level does NOT indicate whether a fund is "cheap" or "expensive".\n\n**Proof:**\nSuppose you invest ₹10,000 in both:\n- In Fund A (NAV ₹20), you receive 500 units.\n- In Fund B (NAV ₹200), you receive 50 units.\n\nIf the underlying stocks in both portfolios grow by **10%**:\n- Fund A NAV rises to ₹22. Your 500 units are worth: $500 \\times 22 = \\mathbf{₹11,000}$.\n- Fund B NAV rises to ₹220. Your 50 units are worth: $50 \\times 220 = \\mathbf{₹11,000}$.\n\nYour return is **IDENTICAL (10%)** in both! A lower NAV does not mean higher future growth. It just means the fund started more recently or split its units differently.',
        te: '❌ **అపోహ:** "ఫండ్ A NAV ₹20, ఫండ్ B NAV ₹200. కాబట్టి ఫండ్ A చౌకగా ఉంది!"\n\n✅ **వాస్తవం:** రెండింటిలోనూ ₹10,000 పెట్టి, రెండూ 10% పెరిగితే, మీకు వచ్చే లాభం ఖచ్చితంగా సమానం (₹11,000)! తక్కువ NAV ఉండటం వలన అదనపు లాభం ఉండదు.',
      },
    },
    {
      id: 'stg-mf-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Quiz', te: 'నైపుణ్య క్విజ్' },
      content: {
        en: 'Confirm your mastery of Mutual Funds and NAV calculation.',
        te: 'మ్యూచువల్ ఫండ్స్ మరియు NAV పై మీ అవగాహనను పరీక్షించండి.',
      },
      questions: [
        {
          id: 'q-mf-m-1',
          question: {
            en: 'A mutual fund scheme has ₹1,00,00,000 (1 Crore) in stock assets, ₹2,00,000 in liabilities, and 9,80,000 units outstanding. What is the NAV per unit?',
            te: 'ఒక మ్యూచువల్ ఫండ్‌లో ₹1 కోటి ఆస్తులు, ₹2 లక్షల అప్పులు, మరియు 9,80,000 యూనిట్లు ఉంటే, ఒక్కో యూనిట్ NAV ఎంత?',
          },
          type: 'mcq',
          options: [
            { en: '₹10.00 ((1,00,00,000 - 2,00,000) / 9,80,000 = 98,00,000 / 9,80,000 = 10)', te: '₹10.00 ((1,00,00,000 - 2,00,000) / 9,80,000 = 10)' },
            { en: '₹98.00', te: '₹98.00' },
            { en: '₹1.00', te: '₹1.00' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Net assets = ₹1,00,00,000 - ₹2,00,000 = ₹98,00,000. Divided by 9,80,000 units = ₹10.00 NAV.',
            te: 'నికర ఆస్తులు = ₹98,00,000. యూనిట్లతో భాగిస్తే NAV = ₹10.00.',
          },
          objectiveId: 'obj-mf-2',
        },
        {
          id: 'q-mf-m-2',
          question: {
            en: 'Two funds each have ₹1,00,000 in net assets. Fund A has 10,000 units and Fund B has 20,000. What does the NAV comparison tell you by itself?',
            te: 'రెండు ఫండ్ల నికర ఆస్తులు ₹1,00,000. A ఫండ్‌కు 10,000 యూనిట్లు, B ఫండ్‌కు 20,000 ఉన్నాయి. NAV పోలిక మాత్రమే ఏమి చెబుతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'Fund B has a lower NAV per unit, but that alone does not make it cheaper or better', te: 'B ఫండ్ ఒక్కో యూనిట్ NAV తక్కువ; దానివల్ల అది చౌకైనది లేదా మెరుగైనది అని తేలదు' },
            { en: 'Fund B must have worse assets because its NAV is lower', te: 'B ఫండ్ NAV తక్కువ కాబట్టి దాని ఆస్తులు తప్పనిసరిగా నాసిరకమైనవి' },
            { en: 'Fund A must earn higher returns because its NAV is higher', te: 'A ఫండ్ NAV ఎక్కువ కాబట్టి తప్పనిసరిగా ఎక్కువ రాబడి ఇస్తుంది' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'NAV per unit is net assets divided by units. A lower unit price can simply reflect more units; compare the underlying portfolio and relevant performance and risk measures instead.',
            te: 'ఒక్కో యూనిట్ NAV = నికర ఆస్తులు ÷ యూనిట్లు. యూనిట్ ధర తక్కువగా ఉండటం ఎక్కువ యూనిట్లు ఉన్నందువల్ల కావచ్చు; అంతర్లీన పోర్ట్‌ఫోలియో, సంబంధిత రాబడి, రిస్క్ కొలమానాలను చూడాలి.',
          },
          objectiveId: 'obj-mf-3',
        },
        {
          id: 'q-mf-m-3',
          question: {
            en: 'If you invest ₹2,000 when the illustrative NAV is ₹20 per unit, how many units does the simplified model allocate before any charges?',
            te: 'ఉదాహరణ NAV ఒక్కో యూనిట్‌కు ₹20 ఉన్నప్పుడు ₹2,000 పెట్టుబడి పెడితే, ఛార్జీలకు ముందు సరళ నమూనా ఎన్ని యూనిట్లు కేటాయిస్తుంది?',
          },
          type: 'mcq',
          options: [
            { en: '100 units (₹2,000 ÷ ₹20)', te: '100 యూనిట్లు (₹2,000 ÷ ₹20)' },
            { en: '40 units', te: '40 యూనిట్లు' },
            { en: '2,020 units', te: '2,020 యూనిట్లు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Units = contribution ÷ applicable NAV: ₹2,000 ÷ ₹20 = 100 units in this simplified calculation. Real transaction rules and charges can affect allocations.',
            te: 'యూనిట్లు = పెట్టుబడి మొత్తం ÷ వర్తించే NAV: ఈ సరళ లెక్కలో ₹2,000 ÷ ₹20 = 100 యూనిట్లు. అసలు లావాదేవీ నియమాలు, ఛార్జీలు కేటాయింపును ప్రభావితం చేయవచ్చు.',
          },
          objectiveId: 'obj-mf-2',
        },
      ],
    },
  ],
};

export default mutualFundBasicsLesson;
