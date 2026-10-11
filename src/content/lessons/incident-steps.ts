import type { Lesson } from '@/types/content';

export const incidentStepsLesson: Lesson = {
  id: 'incident-steps',
  slug: 'incident-steps',
  title: {
    en: 'Emergency Protocol: What to Do If You Get Scammed',
    te: 'అత్యవసర ప్రోటోకాల్: మోసపోయినప్పుడు వెంటనే తీసుకోవాల్సిన చర్యలు',
  },
  pillarId: 'safe',
  conceptIds: ['phishing', 'otp', 'upi-pin'],
  level: 'core',
  estimatedMinutes: 8,
  prerequisites: ['digital-safety'],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-11',
  learningObjectives: [
    {
      id: 'obj-is-1',
      description: {
        en: 'Explain the critical concept of the "Golden Hour" in financial cyber fraud.',
        te: 'ఆర్థిక సైబర్ మోసాలలో "గోల్డెన్ అవర్" యొక్క ప్రాముఖ్యతను వివరించడం.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-is-2',
      description: {
        en: 'List the four mandatory emergency actions following an unauthorized financial transaction.',
        te: 'మోసపూరిత లావాదేవీ జరిగిన తర్వాత చేయాల్సిన 4 అత్యవసర చర్యలను తెలపడం.',
      },
      evidenceType: 'identify',
    },
    {
      id: 'obj-is-3',
      description: {
        en: 'Identify official Indian regulatory portals for lodging formal cyber fraud and investment complaints (1930, cybercrime.gov.in, SEBI SCORES).',
        te: 'అధికారిక ఫిర్యాదు పోర్టల్స్ (1930, cybercrime.gov.in, SEBI SCORES) ను గుర్తించడం.',
      },
      evidenceType: 'classify',
    },
  ],
  stages: [
    {
      id: 'stg-is-hook',
      type: 'hook',
      title: { en: 'The Nightmare Click', te: 'పొరపాటున జరిగిన క్లిక్' },
      content: {
        en: 'A student accidentally clicked a link, panicked, and sent ₹4,000 to an unverified Telegram account claiming to be a "VIP investment manager". Five seconds later, the student realizes they were scammed.\n\nMost victims freeze in panic, feel ashamed, and try to hide it from parents or teachers until hours or days later. By then, the scammer has already withdrawn the money via an ATM or layered it across multiple mule accounts.\n\nIn cyber fraud, **the first 60 minutes is the "Golden Hour"**. If you take immediate action, law enforcement and banks can freeze the funds before they disappear!',
        te: 'ఒక విద్యార్థి పొరపాటున లింక్ క్లిక్ చేసి టెలిగ్రామ్ మోసగాడికి ₹4,000 పంపాడు. మరుసటి క్షణమే తాను మోసపోయానని అర్థమైంది.\n\nచాలామంది భయంతో ఎవరికీ చెప్పకుండా దాచిపెడతారు. కానీ ఆ సమయంలో మోసగాడు డబ్బును విత్‌డ్రా చేసేస్తాడు.\n\nసైబర్ మోసాలలో మొదటి 60 నిమిషాలు **గోల్డెన్ అవర్ (Golden Hour)**. వెంటనే స్పందిస్తే పోలీసులు ఆ ఖాతాను ఫ్రీజ్ చేసి డబ్బును తిరిగి ఇప్పించగలరు!',
      },
    },
    {
      id: 'stg-is-discovery',
      type: 'discovery',
      title: { en: 'The National Emergency Line', te: 'జాతీయ అత్యవసర నంబర్' },
      content: {
        en: 'Which official number should you call immediately if you send money to a fraudster?',
        te: 'మోసగాడికి డబ్బు పంపిన వెంటనే కాల్ చేయాల్సిన అధికారిక నంబర్ ఏది?',
      },
      questions: [
        {
          id: 'q-is-disc-1',
          question: {
            en: 'What is India’s official 24/7 National Financial Cyber Fraud Helpline number?',
            te: 'భారతదేశ జాతీయ ఆర్థిక సైబర్ క్రైమ్ హెల్ప్‌లైన్ నంబర్ ఏది?',
          },
          type: 'mcq',
          options: [
            { en: '100 (General Police)', te: '100 (పోలీస్)' },
            { en: '1930 (Citizen Financial Cyber Fraud Helpline)', te: '1930 (సిటిజన్ సైబర్ ఫ్రాడ్ హెల్ప్‌లైన్)' },
            { en: '1098 (Childline)', te: '1098 (చైల్డ్‌లైన్)' },
          ],
          correctIndex: 1,
          explanation: {
            en: '1930 is India’s dedicated National Helpline. When you report immediately, the portal alerts the receiving bank to freeze the recipient’s bank account within minutes!',
            te: '1930 అనేది భారతదేశ అధికారిక సైబర్ క్రైమ్ నంబర్. వెంటనే సమాచారం అందిస్తే బ్యాంకులు ఆ డబ్బును వేరే ఖాతాలోకి వెళ్లకుండా ఆపగలవు!',
          },
          objectiveId: 'obj-is-3',
        },
      ],
    },
    {
      id: 'stg-is-intuition',
      type: 'intuition',
      title: { en: 'The Golden Hour Protocol', te: 'గోల్డెన్ అవర్ ప్రోటోకాల్' },
      content: {
        en: 'Why do seconds matter? Scammers use "Mule Bank Accounts" — stolen or rented accounts. Once they receive your UPI transfer, their bots attempt to:\n1. Transfer the money to 5 other bank accounts within minutes.\n2. Withdraw cash at a physical ATM.\n3. Convert funds into untraceable gift cards or cryptocurrencies.\n\nWhen you dial **1930**, Indian cyber police use the Citizen Financial Cyber Fraud Reporting System (CFCFRMS) to place an automated hold on the fraudster’s bank account before the money leaves!',
        te: 'సెకన్లు ఎందుకు ముఖ్యం? మోసగాళ్లు నకిలీ మ్యూల్ ఖాతాలను ఉపయోగిస్తారు. మీ డబ్బు పడగానే వారు:\n1. నిమిషాల్లో వేరే 5 ఖాతాలకు మళ్లిస్తారు.\n2. ఏటీఎం ద్వారా నగదు తీసేస్తారు.\n3. గిఫ్ట్ కార్డులుగా మార్చేస్తారు.\n\nమీరు **1930** కు కాల్ చేయగానే పోలీసులు వెంటనే ఆ ఖాతాను ఫ్రీజ్ చేస్తారు!',
      },
    },
    {
      id: 'stg-is-mechanism',
      type: 'mechanism',
      title: { en: 'The 4-Step Incident Response Plan', te: '4-దశల అత్యవసర ప్రణాళిక' },
      content: {
        en: 'Follow this exact 4-step sequence if an incident occurs:\n\n1. **Stop Contact Immediately**: Block the scammer on WhatsApp/Telegram/Instagram. Never pay any "processing fee" or "unfreeze fee" — that is just scam #2!\n2. **Block Credentials & Freeze Cards**: Open your official bank app or call your bank’s toll-free number to freeze your UPI ID and block your debit/credit card.\n3. **Call 1930 & File FIR**: Dial **1930** immediately. Provide the transaction reference number (UTR/RRN), recipient UPI ID, and timestamp. File a complaint at **cybercrime.gov.in**.\n4. **SEBI SCORES / RBI Ombudsman**: If an unverified entity pretended to be a registered broker or mutual fund advisor, file a report on SEBI’s SCORES portal (scores.sebi.gov.in).',
        te: 'మోసం జరిగినప్పుడు ఈ 4 దశలను పాటించండి:\n\n1. **సంభాషణను ఆపండి**: మోసగాడిని బ్లాక్ చేయండి. డబ్బులు తిరిగి ఇస్తామని అడిగే అదనపు ఫీజులను ఎప్పుడూ చెల్లించవద్దు.\n2. **కార్డులను బ్లాక్ చేయండి**: బ్యాంక్ యాప్ ద్వారా లేదా బ్యాంక్ కస్టమర్ కేర్‌కు కాల్ చేసి మీ కార్డు మరియు UPI ని బ్లాక్ చేయండి.\n3. **1930 కు కాల్ చేసి ఫిర్యాదు చేయండి**: ట్రాన్సాక్షన్ నంబర్ (UTR) తో 1930 కు కాల్ చేసి, **cybercrime.gov.in** లో ఫిర్యాదు చేయండి.\n4. **SEBI SCORES లో నివేదించండి**: నకిలీ బ్రోకర్ లేదా ఫండ్ కంపెనీ అయితే సెబీ పోర్టల్‌లో ఫిర్యాదు చేయండి.',
      },
    },
    {
      id: 'stg-is-worked-example',
      type: 'worked_example',
      title: { en: 'Worked Case: Evidence Gathering', te: 'ఉదాహరణ: ఆధారాల సేకరణ' },
      content: {
        en: 'To make your 1930 call and cybercrime.gov.in report successful, note down these 4 key data points from your UPI app receipt:\n\n- **12-digit UPI Transaction ID (UTR)** (e.g., 423891028471)\n- **Receiver UPI ID / Account Number** (e.g., fraudster@ybl)\n- **Exact Date and Timestamp** (e.g., 11-Oct-2026, 04:22 PM)\n- **Screenshots of chat / conversation** where the fraudulent claim was made.\n\nKeep all evidence safe. Never delete chat transcripts before reporting.',
        te: 'ఫిర్యాదు చేయడానికి మీ UPI యాప్ నుండి ఈ 4 వివరాలను సిద్ధంగా ఉంచుకోండి:\n\n- **12-అంకెల UPI లావాదేవీ ID (UTR)**\n- **డబ్బు తీసుకున్న వారి UPI ఐడీ లేదా ఖాతా సంఖ్య**\n- **ఖచ్చితమైన సమయం మరియు తేదీ**\n- **మోసపూరిత చాట్ స్క్రీన్‌షాట్‌లు**\n\nఈ ఆధారాలు పోలీసులకు దర్యాప్తులో చాలా ముఖ్యం.',
      },
    },
    {
      id: 'stg-is-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Challenge', te: 'నైపుణ్య పరీక్ష' },
      content: {
        en: 'Test your readiness to respond under high-pressure financial incidents.',
        te: 'అత్యవసర పరిస్థితుల్లో సరైన నిర్ణయాలు తీసుకునే సామర్థ్యాన్ని పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-is-mc-1',
          question: {
            en: 'After realizing you sent ₹2,000 to an investment scammer, the scammer says: "Pay ₹1,000 recovery charge and I will refund your ₹2,000." What should you do?',
            te: 'మోసగాడు "మరో ₹1,000 చెల్లిస్తే మీ ₹2,000 వాపస్ ఇస్తాం" అని చెబితే మీరు ఏమి చేయాలి?',
          },
          type: 'mcq',
          options: [
            { en: 'Pay the ₹1,000 quickly to recover the original ₹2,000', te: 'డబ్బుల కోసం వెంటనే ₹1,000 పంపాలి' },
            { en: 'Never pay any recovery fee! Cease all contact, call 1930, and notify your bank immediately', te: 'ఎటువంటి ఫీజు చెల్లించవద్దు! సంభాషణ ఆపి, వెంటనే 1930 కు కాల్ చేయాలి' },
            { en: 'Negotiate to pay ₹500 instead', te: '₹500 ఇస్తానని బేరమాడాలి' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'This is the "Recovery Fee Scam" (double-dip). Scammers use false hope to steal more money. Legitimate law enforcement never asks for upfront recovery commissions.',
            te: 'ఇది రెండో రకం మోసం. ఆశ చూపించి మరింత డబ్బు కొల్లగొట్టే ప్రయత్నం. ఎవరికీ అదనపు ఫీజులు చెల్లించవద్దు, 1930 కు మాత్రమే కాల్ చేయండి.',
          },
          objectiveId: 'obj-is-2',
        },
        {
          id: 'q-is-mc-2',
          question: {
            en: 'What is India’s dedicated National Citizen Financial Cyber Fraud Helpline number?',
            te: 'ఆర్థిక సైబర్ మోసాలను వెంటనే నివేదించడానికి భారతదేశ అధికారిక జాతీయ హెల్ప్‌లైన్ నంబర్ ఏది?',
          },
          type: 'mcq',
          options: [
            { en: '100 (General Emergency Police)', te: '100 (జనరల్ పోలీస్)' },
            { en: '1930 (National Cyber Financial Fraud Helpline)', te: '1930 (నేషనల్ సైబర్ ఫ్రాడ్ హెల్ప్‌లైన్)' },
            { en: '1098 (Childline)', te: '1098 (చైల్డ్‌లైన్)' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Dialing 1930 connects you directly with the National Cyber Crime Reporting Portal to trigger immediate inter-bank transaction holds.',
            te: '1930 నంబర్ నేరుగా సైబర్ క్రైమ్ పోర్టల్‌కు కనెక్ట్ చేసి మోసపూరిత లావాదేవీని అడ్డుకోవడానికి తక్షణ చర్యలు తీసుకుంటుంది.',
          },
          objectiveId: 'obj-is-3',
        },
        {
          id: 'q-is-mc-3',
          question: {
            en: 'Why is the first 60 minutes ("Golden Hour") after an unauthorized digital payment so critical?',
            te: 'అనధికారిక డిజిటల్ లావాదేవీ జరిగిన మొదటి 60 నిమిషాలు ("గోల్డెన్ అవర్") ఎందుకు చాలా కీలకం?',
          },
          type: 'mcq',
          options: [
            { en: 'Banks are legally required to double the refund if reported within an hour', te: 'గంటలోపు చెబితే రెట్టింపు ఇస్తారు' },
            { en: 'Prompt reporting allows cyber police to freeze the receiving mule bank account before scammers withdraw cash via ATMs', te: 'మోసగాళ్లు ఏటీఎం ద్వారా నగదు తీసేయకముందే పోలీసులు ఆ ఖాతాను స్తంభింపజేయగలరు' },
            { en: 'Smartphones delete transaction receipts automatically after 60 minutes', te: 'రసీదులు డిలీట్ అవుతాయి' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Speed saves stolen funds. During the Golden Hour, the recipient bank account can be frozen by authorities before money leaves the banking system.',
            te: 'డబ్బు బ్యాంకింగ్ వ్యవస్థ దాటి బయటకు వెళ్లకుండా ఉండాలంటే మొదటి గంటలోపు 1930 కు కాల్ చేయడం అత్యంత ముఖ్యం.',
          },
          objectiveId: 'obj-is-1',
        },
      ],
    },
  ],
};
