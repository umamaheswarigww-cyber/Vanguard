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
        en: 'No matter how modern a scam looks, almost all rely on the same three emotional weapons:\n\n1. **Artificial Urgency & Fear:** *"Account will be blocked in 30 minutes!"* (Prevents you from calling your parents or visiting your actual bank branch).\n2. **Unrealistic Promises of Easy Wealth:** *"Earn ₹5,000/day working from home by liking YouTube videos!"* or *"Guaranteed 40% returns every month!"*\n3. **Request for Confidential Credentials or Screen-Sharing:** Asking for OTP, UPI PIN, passwords, or downloading AnyDesk/TeamViewer.',
        te: 'మోసాలు ఎంత అధునాతనంగా ఉన్నా, ఇవి ఈ 3 విషయాలపైనే ఆధారపడతాయి:\n\n1. **ఆందోళన మరియు భయం:** "30 నిమిషాల్లో అకౌంట్ బ్లాక్ అవుతుంది!"\n2. **సులభంగా డబ్బు వస్తుందనే అత్యాశ:** "యూట్యూబ్ వీడియోలు లైక్ చేసి రోజుకు ₹5,000 సంపాదించండి!"\n3. **రహస్య వివరాలు కోరడం:** OTP, UPI PIN లేదా స్క్రీన్ షేరింగ్ యాప్‌లు ఇన్‌స్టాల్ చేయమనడం.',
      },
    },
    {
      id: 'stg-sc-mechanism',
      type: 'mechanism',
      title: { en: 'Golden Security Rules for India', te: 'భారతీయ డిజిటల్ భద్రతా నియమాలు' },
      content: {
        en: 'Memorize these rules — they protect you for life:\n\n- **Rule 1 (The UPI Golden Rule):** You enter your **UPI PIN ONLY TO SEND MONEY, NEVER TO RECEIVE MONEY**! If someone says *"Scan this QR code or enter your PIN to receive your ₹2,000 lottery"*, entering your PIN will instantly DEBIT your account!\n- **Rule 2:** Banks, RBI, and Police NEVER ask for your OTP or PIN over phone calls or WhatsApp.\n- **Rule 3:** Never download remote access software (AnyDesk, QuickSupport, TeamViewer) at the request of an unknown caller.\n- **Rule 4:** Official government helpline for financial cyber fraud: **National Cyber Crime Helpline 1930** and [cybercrime.gov.in](https://cybercrime.gov.in).',
        te: 'ఈ బంగారు నియమాలను ఎప్పటికీ మర్చిపోకండి:\n\n- **నియమం 1:** **డబ్బు పంపడానికి మాత్రమే UPI PIN వాడాలి, డబ్బు అందుకోవడానికి ఎప్పుడూ PIN అవసరం లేదు**!\n- **నియమం 2:** బ్యాంకులు లేదా పోలీసులు ఎప్పుడూ మీ OTP లేదా PIN అడగరు.\n- **నియమం 3:** ఎవరి మాటలు విని స్క్రీన్ షేరింగ్ యాప్‌లు డౌన్‌లోడ్ చేయవద్దు.\n- **నియమం 4:** సైబర్ మోసం జరిగితే వెంటనే **1930** నంబర్‌కు కాల్ చేయండి లేదా [cybercrime.gov.in](https://cybercrime.gov.in) లో ఫిర్యాదు చేయండి.',
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
            { en: '₹2,500 will be DEDUCTED from your bank account immediately', te: 'మీ బ్యాంక్ ఖాతా నుండి ₹2,500 తక్షణమే కట్ అవుతాయి' },
            { en: '₹2,500 will be credited to your account', te: 'మీ ఖాతాకు ₹2,500 జమ అవుతాయి' },
            { en: 'Nothing will happen without biometric fingerprint', te: 'ఫింగర్‌ప్రింట్ లేకుండా ఏమీ జరగదు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Entering your UPI PIN authorises an OUTGOING payment. You NEVER enter a PIN to receive money on UPI!',
            te: 'UPI PIN కొట్టడం అంటే డబ్బులు పంపడానికి అనుమతి ఇవ్వడం. డబ్బు స్వీకరించడానికి PIN అసలు అవసరం లేదు!',
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
            en: '1930 is the national financial cyber fraud helpline (operated under Ministry of Home Affairs with cybercrime.gov.in). Call immediately within the "golden hour" to freeze stolen funds!',
            te: '1930 అనేది ఆర్థిక సైబర్ మోసాల అధికారిక హెల్ప్‌లైన్ నంబర్!',
          },
          objectiveId: 'obj-scam-3',
        },
      ],
    },
  ],
};

export default scamDetectiveLesson;
