import type { Lesson } from '@/types/content';

export const scamDetectiveLesson: Lesson = {
  id: 'scam-detective',
  slug: 'scam-detective',
  title: {
    en: 'Scam Detective: Spotting Digital Fraud & Phishing',
    te: 'స్కామ్ డిటెక్టివ్: డిజిటల్ మోసాలు మరియు ఫిషింగ్‌ను గుర్తించడం',
  },
  pillarId: 'safe',
  conceptIds: ['phishing', 'otp', 'upi-pin', 'ponzi-scheme'],
  level: 'core',
  estimatedMinutes: 12,
  prerequisites: [],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-10',
  learningObjectives: [
    {
      id: 'obj-scam-1',
      description: {
        en: 'Identify the universal psychological triggers used by financial scammers: urgency, fear, and greed.',
        te: 'ఆర్థిక మోసగాళ్ళు ఉపయోగించే మానసిక ఎత్తుగడలను గుర్తించడం: అత్యవసర భయం మరియు దురాశ.',
      },
      evidenceType: 'identify',
    },
    {
      id: 'obj-scam-2',
      description: {
        en: 'Analyze suspicious SMS, WhatsApp, and Telegram messages to detect phishing signals.',
        te: 'అనుమానాస్పద మెసేజ్‌లను విశ్లేషించి ఫిషింగ్ సంకేతాలను కనిపెట్టడం.',
      },
      evidenceType: 'apply',
    },
    {
      id: 'obj-scam-3',
      description: {
        en: 'Recite immediate incident response steps: National Cyber Crime Portal (1930 / cybercrime.gov.in) and bank blocking.',
        te: 'తక్షణ నివేదనా చర్యలను తెలపడం: జాతీయ సైబర్ క్రైమ్ పోర్టల్ (1930 / cybercrime.gov.in) మరియు బ్యాంక్ ఖాతా బ్లాక్ చేయడం.',
      },
      evidenceType: 'explain',
    },
  ],
  stages: [
    {
      id: 'stg-sc-hook',
      type: 'hook',
      title: { en: 'The Urgent WhatsApp Message at 10 PM', te: 'రాత్రి 10 గంటలకు వచ్చిన అత్యవసర వాట్సాప్ మెసేజ్' },
      content: {
        en: 'Your phone buzzes late at night:\n\n> 🚨 *"DEAR CUSTOMER, YOUR SBI YONO / ELECTRICITY BILL IS UNPAID. YOUR POWER/ACCOUNT WILL BE DISCONNECTED IN 2 HOURS. DOWNLOAD QUICK-SUPPORT APK OR CLICK HTTP://TINYURL.COM/SBI-UPDATE-2026 NOW TO VERIFY PAN."*\n\nYour heart races. You wonder: *Should I tap it just to check?*\n\nSTOP! This is classic social engineering. The scammer creates false panic so your logical brain shuts down before you spot the fake link.',
        te: 'రాత్రి వేళ మీ ఫోన్‌కు ఒక మెసేజ్ వచ్చింది:\n> 🚨 *"ప్రియమైన కస్టమర్, మీ కరెంట్ బిల్లు / బ్యాంక్ ఖాతా అప్‌డేట్ కాలేదు. 2 గంటల్లో మీ కనెక్షన్ కట్ చేయబడుతుంది. వెంటనే ఈ లింక్ క్లిక్ చేయండి."*\n\nభయపడకండి! ఇది సైబర్ మోసగాళ్లు ఆందోళన కలిగించి మీతో తప్పులు చేయించడానికి పన్నే కుట్ర.',
      },
    },
    {
      id: 'stg-sc-intuition',
      type: 'intuition',
      title: { en: 'The 3 Hallmarks of Every Scam', te: 'ప్రతి స్కామ్‌లో ఉండే 3 ప్రధాన లక్షణాలు' },
      content: {
        en: 'Many scams use one or more of these pressure tactics:\n\n1. **Urgency or fear:** “Act now or your account will be blocked.”\n2. **Unrealistic promises:** “Guaranteed high returns” or pay-to-unlock earnings.\n3. **Requests for secrets or device access:** Asking for an OTP, UPI PIN, password, or remote-screen access.\n\nA warning sign is a reason to pause and verify independently. It is not a substitute for checking the sender and transaction details.',
        te: 'చాలా మోసాలు ఈ ఒత్తిడి పద్ధతుల్లో ఒకటి లేదా అంతకంటే ఎక్కువ ఉపయోగిస్తాయి:\n\n1. **తొందర లేదా భయం:** “ఇప్పుడే చేయండి, లేదంటే ఖాతా బ్లాక్ అవుతుంది.”\n2. **అవాస్తవ హామీలు:** “అధిక రాబడికి హామీ” లేదా ఆదాయం పొందడానికి ముందుగా డబ్బు చెల్లించమని అడగడం.\n3. **రహస్యాలు లేదా పరికర యాక్సెస్ అడగడం:** OTP, UPI PIN, పాస్‌వర్డ్ లేదా రిమోట్ స్క్రీన్ యాక్సెస్ కోరడం.\n\nహెచ్చరిక సంకేతం కనిపిస్తే ఆగి స్వతంత్రంగా ధృవీకరించండి. పంపినవారు, లావాదేవీ వివరాలను పరిశీలించడానికి ఇది ప్రత్యామ్నాయం కాదు.',
      },
    },
    {
      id: 'stg-sc-mechanism',
      type: 'mechanism',
      title: { en: 'Pause, Protect, and Verify', te: 'ఆగండి, రక్షించండి, ధృవీకరించండి' },
      content: {
        en: 'Use these checks when a message, call, or QR code involves money:\n\n- **A UPI PIN authorizes a transaction from your account.** Do not reveal it to anyone or enter it just to receive money. Before authorizing, check the payee and amount in the trusted payment app.\n- **Keep OTPs, passwords, and PINs private.** A genuine bank or payment provider should not ask you to disclose these secrets over a call or message.\n- **Do not install remote-access software at a stranger’s request.** Contact the organisation using a number or app you find independently.\n- **If online financial fraud happens, report it promptly.** India’s official portal currently lists helpline **1930** and [online reporting](https://www.cybercrime.gov.in/Accept.aspx). Prompt reporting does not guarantee that funds will be recovered; follow instructions from your bank and the relevant authorities.',
        te: 'డబ్బుకు సంబంధించిన సందేశం, కాల్ లేదా QR కోడ్ వస్తే ఈ తనిఖీలు చేయండి:\n\n- **UPI PIN మీ ఖాతా నుండి జరిగే లావాదేవీని అనుమతిస్తుంది.** దాన్ని ఎవరికీ చెప్పకండి; డబ్బు స్వీకరించడానికి మాత్రమే నమోదు చేయకండి. అనుమతించే ముందు నమ్మకమైన చెల్లింపు యాప్‌లో చెల్లింపుదారు, మొత్తాన్ని చూడండి.\n- **OTPలు, పాస్‌వర్డ్‌లు, PINలు రహస్యంగా ఉంచండి.** నిజమైన బ్యాంక్ లేదా చెల్లింపు సంస్థ ఫోన్ లేదా సందేశంలో ఈ రహస్యాలను చెప్పమని అడగకూడదు.\n- **తెలియని వ్యక్తి మాటకు రిమోట్ యాక్సెస్ యాప్ ఇన్‌స్టాల్ చేయకండి.** సంస్థను మీరు స్వతంత్రంగా కనుగొన్న నంబర్ లేదా యాప్ ద్వారా సంప్రదించండి.\n- **ఆన్‌లైన్ ఆర్థిక మోసం జరిగితే వెంటనే నివేదించండి.** భారత అధికారిక పోర్టల్ ప్రస్తుతం **1930** హెల్ప్‌లైన్, [ఆన్‌లైన్ ఫిర్యాదు](https://www.cybercrime.gov.in/Accept.aspx) సూచిస్తుంది. త్వరగా నివేదించినా డబ్బు తిరిగి వస్తుందని హామీ లేదు; మీ బ్యాంక్, సంబంధిత అధికారుల సూచనలు పాటించండి.',
      },
    },
    {
      id: 'stg-sc-experiment',
      type: 'experiment',
      title: { en: 'Interactive Scam Detective Arena', te: 'ఇంటరాక్టివ్ స్కామ్ డిటెక్టివ్ ఛాలెంజ్' },
      content: {
        en: 'Inspect fictional WhatsApp messages and job offers. Identify the warning signals and choose the safe course of action!',
        te: 'కల్పిత మెసేజ్‌లను పరిశీలించి, మోసపూరిత సంకేతాలను గుర్తించి సురక్షితమైన నిర్ణయం తీసుకోండి!',
      },
      interactionKey: 'scam-detective',
    },
    {
      id: 'stg-sc-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Quiz', te: 'నైపుణ్య క్విజ్' },
      content: {
        en: 'Prove your ability to stay safe in India’s digital economy.',
        te: 'డిజిటల్ చెల్లింపులలో మీ భద్రతా అవగాహనను నిరూపించండి.',
      },
      questions: [
        {
          id: 'q-sc-m-1',
          question: {
            en: 'Someone on OLX agrees to buy your old bicycle for ₹2,500. They send a QR code and say: "Scan this and enter your UPI PIN to receive the ₹2,500 advance." What will happen if you enter your PIN?',
            te: 'ఒక వ్యక్తి మీ పాత సైకిల్‌ను ₹2,500 కి కొంటానని చెప్పి QR కోడ్ పంపాడు: "దీన్ని స్కాన్ చేసి మీ UPI PIN నొక్కితే మీకు ₹2,500 వస్తాయి" అన్నాడు. మీరు PIN నమోదు చేస్తే ఏం జరుగుతుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'You may authorize an outgoing payment from your account', te: 'మీ ఖాతా నుండి బయటకు వెళ్లే చెల్లింపును మీరు అనుమతించవచ్చు' },
            { en: '₹2,500 will be credited to your account', te: 'మీ ఖాతాకు ₹2,500 జమ అవుతాయి' },
            { en: 'Nothing will happen without biometric fingerprint', te: 'ఫింగర్‌ప్రింట్ లేకుండా ఏమీ జరగదు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'A UPI PIN authorizes a transaction from your account. Do not enter it just because someone says it will receive money; inspect the amount and recipient in the trusted app before authorizing.',
            te: 'UPI PIN మీ ఖాతా నుండి జరిగే లావాదేవీని అనుమతిస్తుంది. డబ్బు వస్తుందని ఎవరో చెప్పారని మాత్రమే నమోదు చేయకండి; అనుమతించే ముందు నమ్మకమైన యాప్‌లో మొత్తం, చెల్లింపుదారును పరిశీలించండి.',
          },
          objectiveId: 'obj-scam-2',
        },
        {
          id: 'q-sc-m-2',
          question: {
            en: 'What is the official Government of India emergency helpline number for reporting financial cyber fraud?',
            te: 'ఆర్థిక సైబర్ మోసాలను నివేదించడానికి భారత ప్రభుత్వ అధికారిక అత్యవసర హెల్ప్‌లైన్ నంబర్ ఏది?',
          },
          type: 'mcq',
          options: [
            { en: '1930 (National Cyber Crime Reporting)', te: '1930 (జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్)' },
            { en: '100', te: '100' },
            { en: '911', te: '911' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'The official National Cyber Crime Reporting Portal currently lists 1930 for immediate reporting of cyber financial fraud. Reporting promptly is important, but a recovery or freeze is not guaranteed.',
            te: 'అధికారిక జాతీయ సైబర్ క్రైమ్ రిపోర్టింగ్ పోర్టల్ ప్రస్తుతం ఆర్థిక సైబర్ మోసాలను వెంటనే నివేదించడానికి 1930ను సూచిస్తుంది. త్వరగా నివేదించడం ముఖ్యం; కానీ డబ్బు తిరిగి రావడం లేదా నిలిపివేయబడటం హామీ కాదు.',
          },
          objectiveId: 'obj-scam-3',
        },
        {
          id: 'q-sc-m-3',
          question: {
            en: 'A caller claims to be from your bank and asks you to share an OTP to stop a payment. What is the safest next step?',
            te: 'ఒక కాలర్ బ్యాంకు నుంచి మాట్లాడుతున్నానని చెప్పి చెల్లింపును ఆపడానికి OTP చెప్పమంటున్నారు. సురక్షితమైన తదుపరి చర్య ఏమిటి?',
          },
          type: 'mcq',
          options: [
            { en: 'Do not share it; end the call and contact the bank using a trusted official channel', te: 'OTP చెప్పకండి; కాల్ ముగించి, నమ్మకమైన అధికారిక మార్గం ద్వారా బ్యాంకును సంప్రదించండి' },
            { en: 'Share it if the caller knows your name', te: 'కాలర్‌కు మీ పేరు తెలిస్తే చెప్పండి' },
            { en: 'Read it aloud but change the last digit', te: 'చివరి అంకె మార్చి మిగతాది చెప్పండి' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Never share OTPs or transaction credentials with an incoming caller. Verify the issue independently through a trusted app, card, statement, or official website.',
            te: 'వచ్చిన కాలర్‌తో OTPలు లేదా లావాదేవీ వివరాలు పంచుకోకండి. నమ్మకమైన యాప్, కార్డు, స్టేట్‌మెంట్ లేదా అధికారిక వెబ్‌సైట్ ద్వారా స్వతంత్రంగా నిర్ధారించండి.',
          },
          objectiveId: 'obj-scam-1',
        },
      ],
    },
  ],
};

export default scamDetectiveLesson;
