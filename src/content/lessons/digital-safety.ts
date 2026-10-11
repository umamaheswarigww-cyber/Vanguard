import type { Lesson } from '@/types/content';

export const digitalSafetyLesson: Lesson = {
  id: 'digital-safety',
  slug: 'digital-safety',
  title: {
    en: 'Digital Safety: UPI PIN Defense, QR Code Scams & OTP Shields',
    te: 'డిజిటల్ భద్రత: UPI పిన్ రక్షణ, QR కోడ్ మోసాలు & OTP కవచం',
  },
  pillarId: 'safe',
  conceptIds: ['upi-pin', 'otp', 'phishing'],
  level: 'foundation',
  estimatedMinutes: 8,
  prerequisites: [],
  contentStatus: 'implemented',
  lastReviewedAt: '2026-10-11',
  learningObjectives: [
    {
      id: 'obj-ds-1',
      description: {
        en: 'Explain the golden rule of UPI: You only enter your PIN to SEND money, NEVER to receive money.',
        te: 'UPI బంగారు సూత్రం: డబ్బు పంపడానికి మాత్రమే పిన్ నమోదు చేయాలి, స్వీకరించడానికి ఎప్పుడూ కాదు.',
      },
      evidenceType: 'explain',
    },
    {
      id: 'obj-ds-2',
      description: {
        en: 'Identify deceptive QR code scans and fake "receive money" payment requests.',
        te: 'నకిలీ QR కోడ్‌లు మరియు మోసపూరిత చెల్లింపు అభ్యర్థనలను గుర్తించడం.',
      },
      evidenceType: 'identify',
    },
    {
      id: 'obj-ds-3',
      description: {
        en: 'Implement strong password and OTP security practices across banking and payment applications.',
        te: 'బ్యాంకింగ్ యాప్‌లలో బలమైన పాస్‌వర్డ్ మరియు OTP భద్రతా పద్ధతులను అమలు చేయడం.',
      },
      evidenceType: 'apply',
    },
  ],
  stages: [
    {
      id: 'stg-ds-hook',
      type: 'hook',
      title: { en: 'The Olx / Marketplace Trap', te: 'ఆన్‌లైన్ అమ్మకాల వల' },
      content: {
        en: 'Neha listed her old school bicycle for ₹3,000 on an online classifieds site. Within 15 minutes, an eager buyer messages: "I want to buy it immediately! I am sending an advance of ₹3,000 to your PhonePe/GooglePay right now. I just sent you a QR code — scan it and enter your UPI PIN to receive the ₹3,000 credit!"\n\nNeha is excited. She opens her app, points her camera at the QR code, and a prompt asks: "Enter 6-digit UPI PIN".\n\nIf Neha enters her PIN, does she receive ₹3,000? NO — ₹3,000 will be instantly deducted from her bank account!',
        te: 'నేహ తన పాత సైకిల్‌ను ₹3,000 కు ఆన్‌లైన్‌లో అమ్మకానికి పెట్టింది. 15 నిమిషాల్లో ఒక కొనుగోలుదారు మెసేజ్ చేశాడు: "నేను ఇప్పుడే ₹3,000 అడ్వాన్స్ పంపుతున్నాను, మీకు ఒక QR కోడ్ పంపాను, దాన్ని స్కాన్ చేసి మీ UPI పిన్ ఎంటర్ చేయండి, డబ్బు మీ ఖాతాలో పడుతుంది!"\n\nనేహ తన యాప్‌లో QR కోడ్ స్కాన్ చేయగానే 6-అంకెల UPI పిన్ అడిగింది.\n\nఆమె పిన్ ఎంటర్ చేస్తే ₹3,000 వస్తుందా? లేదు — ఆమె ఖాతా నుండి ₹3,000 వెంటనే కట్ అవుతుంది!',
      },
    },
    {
      id: 'stg-ds-discovery',
      type: 'discovery',
      title: { en: 'The Golden Rule of UPI', te: 'UPI ప్రాథమిక సూత్రం' },
      content: {
        en: 'Memorize this rule and you will avoid 90% of digital payment scams in India:',
        te: 'ఈ ఒక్క సూత్రం గుర్తుంచుకుంటే భారతదేశంలో 90% డిజిటల్ మోసాల నుండి తప్పించుకోవచ్చు:',
      },
      questions: [
        {
          id: 'q-ds-disc-1',
          question: {
            en: 'When is entering your UPI PIN legally required in the Unified Payments Interface system?',
            te: 'UPI విధానంలో మీ పిన్ ఎప్పుడు నమోదు చేయాల్సి ఉంటుంది?',
          },
          type: 'mcq',
          options: [
            { en: 'ONLY when you are SENDING money or checking your bank balance', te: 'మీరు డబ్బు పంపుతున్నప్పుడు లేదా బ్యాలెన్స్ చూస్తున్నప్పుడు మాత్రమే' },
            { en: 'Whenever someone transfers money into your account', te: 'ఎవరైనా మీ ఖాతాకు డబ్బు పంపుతున్నప్పుడు' },
            { en: 'To confirm government refund payments and lotteries', te: 'ప్రభుత్వ రిఫండ్లు లేదా లాటరీలకు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'ABSOLUTE RULE: Entering your UPI PIN authorizes a DEBIT (money leaving your account). Receiving money is 100% automated — your account is credited automatically without entering any PIN or scanning any QR code!',
            te: 'ఖచ్చితమైన నియమం: UPI పిన్ అంటే డబ్బును వేరొకరికి పంపడానికి అనుమతి ఇవ్వడం. డబ్బు మీ ఖాతాలో జమ కావడానికి ఎటువంటి పిన్ లేదా QR కోడ్ అవసరం లేదు!',
          },
          objectiveId: 'obj-ds-1',
        },
      ],
    },
    {
      id: 'stg-ds-intuition',
      type: 'intuition',
      title: { en: 'Anatomy of Digital Payment Traps', te: 'డిజిటల్ మోసాల తీరు' },
      content: {
        en: 'Here are the most common deceptive tricks used against students:\n\n1. **Fake Collect Requests**: Scammer sends a request in GooglePay/PhonePe labeled "Cashback Refund ₹1,500 - Pay". Clicking "Pay" sends your money to them.\n2. **Deceptive QR Codes**: Scammer claims "Scan QR to receive money". Scanning a QR code only initiates a payment OUT of your account.\n3. **Screen Sharing Apps**: Scammer asks you to install AnyDesk or TeamViewer to "help set up your bank account". They watch your screen as you type your passwords and drain your funds.',
        te: 'విద్యార్థులపై ప్రయోగించే సాధారణ మోసాలు:\n\n1. **కలెక్ట్ రిక్వెస్ట్**: "క్యాష్‌బ్యాక్ ₹1,500" పేరుతో పేమెంట్ రిక్వెస్ట్ పంపి "Pay" నొక్కమని చెప్పడం.\n2. **నకిలీ QR కోడ్‌లు**: డబ్బు తీసుకోవడానికి QR స్కాన్ చేయాలని చెప్పడం. QR స్కాన్ చేయడం అంటే మీరే డబ్బు చెల్లించడం.\n3. **స్క్రీన్ షేరింగ్ యాప్‌లు**: AnyDesk లేదా TeamViewer డౌన్‌లోడ్ చేయించి మీ పాస్‌వర్డ్‌లను దొంగిలించడం.',
      },
    },
    {
      id: 'stg-ds-mechanism',
      type: 'mechanism',
      title: { en: 'The OTP Shield Protocol', te: 'రహస్య OTP రక్షణ' },
      content: {
        en: 'Your **OTP (One-Time Password)** is the digital key to your financial castle.\n\n- Banks, AMCs, police, and customer support representatives NEVER need your OTP.\n- If an OTP message reads: *"₹2,000 debit OTP for transaction at Flipkart is 839201"*, sharing that code approves the debit.\n\n**Always read the full SMS text before typing any OTP!** Check whether the SMS says "credit" or "debit" and verify the rupee amount.',
        te: 'మీ **OTP (వన్-టైమ్ పాస్‌వర్డ్)** మీ బ్యాంక్ ఖాతాకు తాళం చెవి వంటిది.\n\n- బ్యాంకులు, పోలీసులు లేదా కస్టమర్ కేర్ అధికారులు మీ OTP ని ఎప్పుడూ అడగరు.\n- SMS లో "₹2,000 డెబిట్ కోసం OTP..." అని ఉంటే, దాన్ని ఎవరితోనైనా పంచుకుంటే ఆ లావాదేవీని ఆమోదించినట్లే.\n\n**OTP నమోదు చేసే ముందు పూర్తి SMS సందేశాన్ని జాగ్రత్తగా చదవండి!**',
      },
    },
    {
      id: 'stg-ds-worked-example',
      type: 'worked_example',
      title: { en: 'Worked Case: Deconstructing a Fake Call', te: 'ఉదాహరణ: నకిలీ కాల్‌ను గుర్తించడం' },
      content: {
        en: 'You receive a call: *"Hello, I am speaking from SBI Card Head Office. Your ATM card is expiring today. To prevent penalty, tell me the 16-digit card number and the 3-digit CVV on the back."*\n\n**Response Checklist**:\n1. Bank officials already have your card details on record; they never ask you over a random mobile call.\n2. **CVV (Card Verification Value)** is confidential and needed only when you are initiating an online checkout.\n3. Hang up, block the number, and call the official bank toll-free number printed on the back of your physical card.',
        te: 'మీకు ఫోన్ వచ్చింది: *"హలో, మేము బ్యాంక్ హెడ్ ఆఫీస్ నుండి మాట్లాడుతున్నాం. మీ ఏటీఎం కార్డు గడువు ముగిసింది. దాన్ని పునరుద్ధరించడానికి కార్డు నంబర్ మరియు వెనుక ఉన్న 3-అంకెల CVV చెప్పండి."*\n\n**పరిశీలన**:\n1. బ్యాంక్ వద్ద మీ సమాచారం ముందే ఉంటుంది, ఫోన్ చేసి అడగరు.\n2. **CVV నంబర్** అత్యంత రహస్యమైనది, దాన్ని ఎవరికీ చెప్పకూడదు.\n3. వెంటనే ఫోన్ కట్ చేసి, మీ కార్డు వెనుక ఉన్న అధికారిక టోల్-ఫ్రీ నంబర్‌కు మాత్రమే కాల్ చేయండి.',
      },
    },
    {
      id: 'stg-ds-mastery',
      type: 'mastery_check',
      title: { en: 'Mastery Challenge', te: 'నైపుణ్య పరీక్ష' },
      content: {
        en: 'Test your reflexes against common digital financial traps.',
        te: 'డిజిటల్ మోసాల నుండి రక్షణపై మీ నైపుణ్యాన్ని పరీక్షించుకోండి.',
      },
      questions: [
        {
          id: 'q-ds-mc-1',
          question: {
            en: 'Someone on WhatsApp claims you won a ₹10,000 scholarship and sends a QR code to "claim" the money. What must you do?',
            te: 'వాట్సాప్‌లో ₹10,000 స్కాలర్‌షిప్ వచ్చిందని చెప్పి QR కోడ్ స్కాన్ చేయమంటే మీరు ఏమి చేయాలి?',
          },
          type: 'mcq',
          options: [
            { en: 'Scan the QR code and enter your PIN immediately to claim the scholarship', te: 'వెంటనే స్కాన్ చేసి పిన్ ఎంటర్ చేయాలి' },
            { en: 'Refuse to scan, do NOT enter your PIN, and report the fraudster immediately', te: 'స్కాన్ చేయకూడదు, పిన్ ఎంటర్ చేయకూడదు, వెంటనే రిపోర్ట్ చేయాలి' },
            { en: 'Ask them to send ₹5,000 first as a trial', te: 'ముందు ₹5,000 పంపమని అడగాలి' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Scanning any QR code and entering your PIN will TRANSFER your money out to the fraudster. Legitimate scholarships credit money directly into your student bank account via IFSC/NEFT without scanning anything.',
            te: 'QR స్కాన్ చేసి పిన్ ఎంటర్ చేస్తే మీ డబ్బే పోతుంది. నిజమైన స్కాలర్‌షిప్ నేరుగా మీ బ్యాంక్ ఖాతాలో జమ అవుతుంది.',
          },
          objectiveId: 'obj-ds-1',
        },
        {
          id: 'q-ds-mc-2',
          question: {
            en: 'Under what circumstance should you EVER enter your secret UPI PIN into your smartphone?',
            te: 'మీ స్మార్ట్‌ఫోన్‌లో రహస్య UPI పిన్‌ను ఎప్పుడు ఎంటర్ చేయాలి?',
          },
          type: 'mcq',
          options: [
            { en: 'ONLY when YOU are authorizing money to leave your account (paying/sending) or checking your bank balance', te: 'మీరు వేరొకరికి డబ్బు పంపుతున్నప్పుడు లేదా బ్యాలెన్స్ చూస్తున్నప్పుడు మాత్రమే' },
            { en: 'Whenever someone promises to transfer a refund or prize money to you', te: 'ఎవరైనా బహుమతి లేదా రిఫండ్ పంపుతామని చెప్పినప్పుడు' },
            { en: 'Whenever an unknown caller claims to be your bank manager doing urgent KYC', te: 'కేవైసీ కోసం బ్యాంక్ మేనేజర్ అని ఫోన్ చేసినప్పుడు' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'The golden rule of UPI: You NEVER need to enter your PIN to receive money. Typing your PIN always deducts money from your account.',
            te: 'UPI బంగారు నియమం: డబ్బు తీసుకోవడానికి ఎప్పుడూ పిన్ అవసరం లేదు. పిన్ ఎంటర్ చేస్తే మీ ఖాతా నుంచే డబ్బు కట్ అవుతుంది.',
          },
          objectiveId: 'obj-ds-1',
        },
        {
          id: 'q-ds-mc-3',
          question: {
            en: 'A stranger on a call urges you to install "AnyDesk" or "TeamViewer" to fix an educational grant transfer. Why is this catastrophic?',
            te: 'స్కాలర్‌షిప్ సమస్యను పరిష్కరించడానికి AnyDesk లేదా TeamViewer యాప్ ఇన్‌స్టాల్ చేయమని ఒక అపరిచితుడు చెబితే అది ఎందుకు ప్రమాదకరం?',
          },
          type: 'mcq',
          options: [
            { en: 'It will consume too much mobile battery and memory', te: 'బ్యాటరీ ఎక్కువ ఖర్చవుతుంది' },
            { en: 'It grants remote viewing and control of your screen, letting the scammer see your passwords, OTPs, and steal your money', te: 'అది మీ స్క్రీన్‌ను మోసగాడికి కనిపించేలా చేసి, మీ పాస్‌వర్డ్‌లు, OTPలను దొంగిలించడానికి వీలు కల్పిస్తుంది' },
            { en: 'It blocks incoming WhatsApp text messages', te: 'సందేశాలు రాకుండా ఆపుతుంది' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Screen-sharing tools give complete remote viewing access to fraudsters. Never install remote access software on the instruction of any caller.',
            te: 'స్క్రీన్ షేరింగ్ యాప్‌లు మీ మొబైల్ నియంత్రణను మోసగాళ్లకు అందిస్తాయి. ఎవరి మాట వినీ వీటిని ఇన్‌స్టాల్ చేయవద్దు.',
          },
          objectiveId: 'obj-ds-2',
        },
      ],
    },
  ],
};
