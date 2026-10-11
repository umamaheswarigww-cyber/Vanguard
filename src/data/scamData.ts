// ============================================================
// SPOT THE MUTUAL FUND SCAM — INTERACTIVE EDUCATIONAL DATA
// Target Audience: Young learners aged 12+ (India context)
// Focus: Identifying fraud, unregulated groups, fake OTP requests & SEBI verification
// ============================================================

export interface RedFlag {
  id: string;
  iconName: 'TrendingUp' | 'Clock' | 'Key' | 'Wallet' | 'MessageSquare' | 'Download' | 'ShieldAlert';
  title: { en: string; te: string };
  shortExplanation: { en: string; te: string };
  examplePitch: { en: string; te: string };
  category: string;
}

export interface ScamScenario {
  id: string;
  platform: 'WhatsApp' | 'Telegram' | 'SMS';
  senderName: string;
  senderHandle?: string;
  senderAvatarBg?: string;
  timestamp: string;
  messageText: string;
  isScam: boolean;
  redFlagChips: { en: string; te: string }[];
  explanation: { en: string; te: string };
  learningPoint: { en: string; te: string };
}

export interface ScamQuizQuestion {
  id: number;
  question: { en: string; te: string };
  options: { en: string; te: string }[];
  correctIndex: number;
  explanation: { en: string; te: string };
  keyTakeaway: { en: string; te: string };
}

export interface EmergencyStep {
  stepNumber: number;
  title: { en: string; te: string };
  action: { en: string; te: string };
  contactInfo?: string;
  portalUrl?: string;
  icon: 'ShieldOff' | 'Lock' | 'PhoneCall' | 'CheckCheck';
}

// ------------------------------------------------------------
// 1. SEVEN ILLUSTRATED WARNING RED FLAGS
// ------------------------------------------------------------
export const RED_FLAGS: RedFlag[] = [
  {
    id: 'guaranteed-returns',
    iconName: 'TrendingUp',
    category: 'Unrealistic Promise',
    title: {
      en: 'Guaranteed High Returns',
      te: 'హామీ ఇవ్వబడిన అధిక రాబడులు',
    },
    shortExplanation: {
      en: 'Mutual funds are market-linked instruments. Nobody can legally guarantee fixed high returns or risk-free double-digit profits.',
      te: 'మ్యూచువల్ ఫండ్లు మార్కెట్ ఒడుదొడుకులకు లోబడి ఉంటాయి. ఎవరూ చట్టబద్ధంగా స్థిరమైన అధిక లాభాలకు హామీ ఇవ్వలేరు.',
    },
    examplePitch: {
      en: '“Invest ₹10,000 today and get exactly ₹2,000 every single week guaranteed with zero risk by our VIP fund manager!”',
      te: '“ఈరోజే ₹10,000 పెట్టుబడి పెట్టండి, ప్రతి వారం ₹2,000 ఖచ్చితమైన లాభం జీరో రిస్క్‌తో పొందండి!”',
    },
  },
  {
    id: 'fake-urgency',
    iconName: 'Clock',
    category: 'Psychological Pressure',
    title: {
      en: 'Fake Urgency & FOMO',
      te: 'నకిలీ తొందరపాటు & FOMO ఒత్తిడి',
    },
    shortExplanation: {
      en: 'Scammers use countdown timers and "slots running out" alerts to make you rush into sending money without thinking or doing research.',
      te: 'మీరు ఆలోచించకుండా లేదా పరిశోధించకుండా త్వరపడి డబ్బు పంపేలా చేయడానికి స్కామర్లు టైమర్లు మరియు పరిమిత సీట్ల భయాన్ని సృష్టిస్తారు.',
    },
    examplePitch: {
      en: '“Only 2 slots left in this exclusive pre-IPO mutual fund batch! Offer expires in 12 minutes—transfer money now or regret forever!”',
      te: '“ఈ ప్రత్యేక మ్యూచువల్ ఫండ్ బ్యాచ్‌లో కేవలం 2 స్లాట్‌లు మాత్రమే మిగిలాయి! 12 నిమిషాల్లో ఆఫర్ ముగుస్తుంది—ఇప్పుడే డబ్బు పంపండి!”',
    },
  },
  {
    id: 'demanding-otps',
    iconName: 'Key',
    category: 'Credential Theft',
    title: {
      en: 'Demanding Passwords / OTPs',
      te: 'పాస్‌వర్డ్‌లు / OTPలను అడగడం',
    },
    shortExplanation: {
      en: 'Legitimate Asset Management Companies (AMCs) and banks never ask for your confidential OTPs, PINs, or account passwords.',
      te: 'అధికారిక ఫండ్ సంస్థలు (AMCs) మరియు బ్యాంకులు మీ రహస్య OTPలు, UPI పిన్‌లు లేదా పాస్‌వర్డ్‌లను ఎప్పుడూ అడగవు.',
    },
    examplePitch: {
      en: '“We are updating your mandatory mutual fund KYC to prevent account freezing. Kindly share the 6-digit OTP sent to your SMS immediately.”',
      te: '“మీ మ్యూచువల్ ఫండ్ ఖాతా బ్లాక్ కాకుండా ఉండటానికి KYC అప్‌డేట్ చేస్తున్నాం. మీ ఫోన్‌కు వచ్చిన 6-అంకెల OTPని వెంటనే చెప్పండి.”',
    },
  },
  {
    id: 'personal-upi',
    iconName: 'Wallet',
    category: 'Direct Money Diversion',
    title: {
      en: 'Personal UPI / Account Transfers',
      te: 'వ్యక్తిగత UPI / ప్రైవేట్ ఖాతా బదిలీలు',
    },
    shortExplanation: {
      en: 'Mutual fund payments must only go directly to registered AMC / SEBI-cleared clearing houses—never to personal GooglePay/PhonePe IDs.',
      te: 'మ్యూచువల్ ఫండ్ చెల్లింపులు కేవలం అధికారిక AMC ఖాతాలకు మాత్రమే వెళ్ళాలి—వ్యక్తిగత GooglePay లేదా ఫోన్‌పే నంబర్లకు ఎప్పుడూ పంపకూడదు.',
    },
    examplePitch: {
      en: '“To purchase mutual fund units at wholesale discounted rates, send ₹5,000 via UPI to suresh.kumar987@okaxis right now.”',
      te: '“తక్కువ ధరకు యూనిట్లు పొందడానికి suresh.kumar987@okaxis అనే వ్యక్తిగత UPI ఐడీకి ₹5,000 పంపండి.”',
    },
  },
  {
    id: 'secret-groups',
    iconName: 'MessageSquare',
    category: 'Unregulated Traps',
    title: {
      en: 'Secret WhatsApp / Telegram Groups',
      te: 'రహస్య WhatsApp / టెలిగ్రామ్ గ్రూపులు',
    },
    shortExplanation: {
      en: 'Unregulated groups sharing "insider leak tips" or "exclusive secret stock calls" are classic pump-and-dump traps to steal student money.',
      te: 'రహస్య సమాచారం లేదా ఖచ్చితమైన చిట్కాలు ఇస్తామని చెప్పుకునే అనుమతి లేని సోషల్ మీడియా గ్రూపులు మోసపూరిత వలలు.',
    },
    examplePitch: {
      en: '“Join our Super VIP Telegram channel where our insider experts tell you which mutual funds will jump 300% before the news hits the public!”',
      te: '“వార్తల్లో రాకముందే 300% పెరిగే ఫండ్ల సమాచారం ఇచ్చే మా VIP టెలిగ్రామ్ గ్రూప్‌లో చేరండి!”',
    },
  },
  {
    id: 'unknown-apk',
    iconName: 'Download',
    category: 'Malware Risk',
    title: {
      en: 'Unknown App / APK Downloads',
      te: 'తెలియని యాప్ / APK డౌన్‌లోడ్లు',
    },
    shortExplanation: {
      en: 'Downloading apps via unofficial APK links or third-party links can install spyware that intercepts your bank messages and steals money.',
      te: 'అనధికారిక లింకుల నుండి నేరుగా APKలను డౌన్‌లోడ్ చేయడం వల్ల మీ మొబైల్ బ్యాంకింగ్ వివరాలు దొంగిలించే ప్రమాదం ఉంది.',
    },
    examplePitch: {
      en: '“Download our specialized Zero-Commission Mutual Fund Pro app using this direct .apk link because the Play Store charges extra government fees.”',
      te: '“ప్లే స్టోర్‌లో పన్నులు ఉంటాయని చెబుతూ, మా ప్రైవేట్ లింక్ ద్వారా Zero-Commission .apk ఫైల్‌ను డౌన్‌లోడ్ చేయండి.”',
    },
  },
  {
    id: 'unverified-sebi',
    iconName: 'ShieldAlert',
    category: 'Fake Credentials',
    title: {
      en: 'Unverified SEBI Claims',
      te: 'ధృవీకరించని సెబీ (SEBI) దావాలు',
    },
    shortExplanation: {
      en: 'Fraudsters routinely create fake digital certificates using the SEBI logo. Real intermediaries must be verified directly on sebi.gov.in.',
      te: 'మోసగాళ్లు సెబీ లోగోతో నకిలీ సర్టిఫికెట్లను తయారుచేస్తారు. అసలైన సంస్థలను కేవలం sebi.gov.in అధికారిక పోర్టల్‌లోనే సరిచూడాలి.',
    },
    examplePitch: {
      en: '“Look at our attached SEBI Certificate of Registration! (Fake Canva image with misspelled words and no valid SEBI registration number).”',
      te: '“మా కంపెనీ సెబీ రిజిస్టర్డ్ అని చూపించే నకిలీ సర్టిఫికెట్ ఫోటోలు పంపి నమ్మించడం.”',
    },
  },
];

// ------------------------------------------------------------
// 2. SIMULATED CHAT MESSAGES ACROSS PLATFORMS
// ------------------------------------------------------------
export const SCAM_SCENARIOS: ScamScenario[] = [
  {
    id: 'scenario-1',
    platform: 'Telegram',
    senderName: 'Apex Wealth VIP Signals',
    senderHandle: '@ApexMutualFundTips',
    senderAvatarBg: 'bg-indigo-600',
    timestamp: 'Today, 2:14 PM',
    messageText: '🚨 EXCLUSIVE OFFER FOR STUDENTS! Join our Elite Mutual Fund Pool. Invest just ₹2,000 today and receive GUARANTEED ₹10,000 after 14 days! Zero market risk. Send screenshot of payment to @AdminApex to claim your slot before 5 PM! 🚀💰',
    isScam: true,
    redFlagChips: [
      { en: 'Guaranteed 500% Return', te: '500% హామీ రాబడి' },
      { en: 'Fake Urgency (Before 5 PM)', te: 'నకిలీ తొందరపాటు' },
      { en: 'Secret Telegram Admin', te: 'టెలిగ్రామ్ అడ్మిన్' },
    ],
    explanation: {
      en: 'This is a textbook Ponzi scheme scam! Mutual funds are legally market-linked and can NEVER promise guaranteed 500% returns in 14 days. Legitimate fund houses do not solicit money via Telegram direct messages.',
      te: 'ఇది ఒక మోసపూరిత పోంజీ స్కీమ్! మ్యూచువల్ ఫండ్లు చట్టబద్ధంగా మార్కెట్ ఆధారితమైనవి మరియు 14 రోజుల్లో 500% లాభాలకు ఎప్పుడూ హామీ ఇవ్వలేవు.',
    },
    learningPoint: {
      en: 'Rule #1: Any investment promising guaranteed double or triple money in weeks is always 100% fraud.',
      te: 'సూత్రం 1: వారాల్లో డబ్బు రెట్టింపు లేదా మూడు రెట్లు అవుతుందని హామీ ఇచ్చే ఏదైనా పథకం ఖచ్చితంగా మోసమే.',
    },
  },
  {
    id: 'scenario-2',
    platform: 'SMS',
    senderName: 'VK-KFINTE',
    senderAvatarBg: 'bg-slate-600',
    timestamp: 'Yesterday, 11:30 AM',
    messageText: 'Your monthly SIP of Rs 1,000 for Nifty 50 Index Fund has been successfully processed on 10-Oct-2026. NAV allotted: 245.12. Check your mutual fund portfolio on your registered official AMC app or mfcentral.com.',
    isScam: false,
    redFlagChips: [
      { en: 'Legitimate AMC Confirmation', te: 'అధికారిక AMC రశీదు' },
      { en: 'No Links or OTP Demands', te: 'లింకులు లేదా OTPలు లేవు' },
    ],
    explanation: {
      en: 'This is a genuine, standard confirmation message! It reports a scheduled transaction, provides allotment details (NAV), asks for zero credentials, has no urgent threats, and references official platforms (MFCentral).',
      te: 'ఇది నిజమైన మరియు ప్రామాణికమైన రశీదు సందేశం! ఇది మీ నుండి ఎటువంటి పాస్‌వర్డ్‌లను అడగలేదు మరియు అధికారిక వేదికను పేర్కొంది.',
    },
    learningPoint: {
      en: 'Legitimate mutual fund confirmations only state completed facts and never demand immediate fund transfers or confidential codes.',
      te: 'నిజమైన సందేశాలు కేవలం లావాదేవీల సమాచారాన్ని తెలియజేస్తాయి, రహస్య కోడ్‌లను అడగవు.',
    },
  },
  {
    id: 'scenario-3',
    platform: 'WhatsApp',
    senderName: 'Ramesh Sharma (Fund Executive)',
    senderHandle: '+91 98201 XXXXX',
    senderAvatarBg: 'bg-emerald-600',
    timestamp: 'Today, 10:05 AM',
    messageText: 'Hello student, your Mutual Fund KYC is expiring today. Your invested money will be frozen by the government. Please transfer ₹500 verification fee via Google Pay to ramesh.kyc@okicici and reply with the OTP sent to your mobile to verify immediately.',
    isScam: true,
    redFlagChips: [
      { en: 'Demanding OTP', te: 'OTP అడగడం' },
      { en: 'Personal UPI ID', te: 'వ్యక్తిగత UPI ఐడీ' },
      { en: 'Threat of Account Freeze', te: 'ఖాతా బ్లాక్ చేస్తామని బెదిరింపు' },
    ],
    explanation: {
      en: 'DANGEROUS SCAM! KYC verification is always 100% FREE by law. Legitimate KYC agencies never ask you to pay a fee to a personal UPI ID, and no bank or AMC executive will EVER ask for your private OTP over WhatsApp.',
      te: 'ప్రమాదకరమైన మోసం! చట్ట ప్రకారం KYC ధృవీకరణ ఎల్లప్పుడూ 100% ఉచితం. ఎవరూ వ్యక్తిగత UPIకి డబ్బులు లేదా మీ OTPని అడగరు.',
    },
    learningPoint: {
      en: 'Never share any OTP received on your mobile. OTP stands for One-Time Password—sharing it gives scammers access to your bank account.',
      te: 'మీ మొబైల్‌కు వచ్చిన OTPని ఎవరితోనూ పంచుకోవద్దు. OTPని పంచుకుంటే మీ బ్యాంక్ ఖాతా ఖాళీ అవుతుంది.',
    },
  },
  {
    id: 'scenario-4',
    platform: 'Telegram',
    senderName: 'Global Crypto & Equity Club',
    senderHandle: '@GlobalEquityRobo',
    senderAvatarBg: 'bg-purple-600',
    timestamp: 'Today, 4:45 PM',
    messageText: 'Install our revolutionary automated Mutual Fund Trading Bot APK! Download here: http://bit.ly/fund-bot-apk. Our AI bot uses secret algorithmic arbitrage to beat the market 100% of the time. Don’t trust Google Play, they charge commission!',
    isScam: true,
    redFlagChips: [
      { en: 'Direct Unknown APK Link', te: 'అనధికారిక APK లింక్' },
      { en: 'Shady bit.ly URL', te: 'అనుమానాస్పద లింక్' },
      { en: 'Discrediting Official App Stores', te: 'అధికారిక యాప్ స్టోర్‌లను దూషించడం' },
    ],
    explanation: {
      en: 'High-risk malware trap! Downloading unknown APK files via shortened links allows hackers to install trojans on your smartphone, enabling them to read keystrokes, SMS OTPs, and steal UPI credentials.',
      te: 'ఇది ఒక మాల్వేర్ వల! తెలియని లింకుల నుండి APK ఫైళ్లను డౌన్‌లోడ్ చేస్తే మీ ఫోన్‌లోని బ్యాంకింగ్ సమాచారం మరియు OTPలు హ్యాకర్ల చేతికి చిక్కుతాయి.',
    },
    learningPoint: {
      en: 'Only download financial apps directly from verified app stores (Google Play Store / Apple App Store) and check the developer name carefully.',
      te: 'ఆర్థిక యాప్‌లను కేవలం అధికారిక ప్లే స్టోర్ లేదా యాప్ స్టోర్ నుండి మాత్రమే డౌన్‌లోడ్ చేయండి.',
    },
  },
  {
    id: 'scenario-5',
    platform: 'WhatsApp',
    senderName: 'GrowTogether AMC Support',
    senderHandle: 'Official Verified Account ✓',
    senderAvatarBg: 'bg-teal-600',
    timestamp: 'Monday, 3:15 PM',
    messageText: 'Dear Investor, your Mutual Fund statement for Q3 is ready for download on our official portal at https://www.growtogetheramc.com/statements using your registered login credentials. Never share your password or OTP with anyone. For queries, email service@growtogetheramc.com.',
    isScam: false,
    redFlagChips: [
      { en: 'Official Domain Website', te: 'అధికారిక వెబ్‌సైట్ డొమైన్' },
      { en: 'Explicit Anti-Phishing Warning', te: 'పాస్‌వర్డ్‌లు చెప్పవద్దని హెచ్చరిక' },
      { en: 'No Urgent Transfer Demands', te: 'డబ్బు పంపాలని తొందరపెట్టలేదు' },
    ],
    explanation: {
      en: 'This is a genuine, safe communication. It directs the user to their own registered account on the official AMC domain, does not request any sensitive personal info, and actively reminds the user never to share passwords or OTPs.',
      te: 'ఇది సురక్షితమైన మరియు నిజమైన సందేశం. ఇది అధికారిక వెబ్‌సైట్‌కు దారి చూపుతుంది మరియు మీ పాస్‌వర్డ్‌లను ఎవరితోనూ పంచుకోవద్దని స్పష్టంగా హెచ్చరిస్తుంది.',
    },
    learningPoint: {
      en: 'Safe services teach safety: Genuine financial institutions will remind you to protect your credentials rather than asking you for them.',
      te: 'అసలైన ఆర్థిక సంస్థలు మీ భద్రతకు ప్రాధాన్యతనిస్తాయి మరియు రహస్య కోడ్‌లను ఎప్పుడూ డిమాండ్ చేయవు.',
    },
  },
  {
    id: 'scenario-6',
    platform: 'WhatsApp',
    senderName: 'SEBI Approved Officer Anjali',
    senderHandle: '+91 70412 XXXXX',
    senderAvatarBg: 'bg-rose-600',
    timestamp: 'Today, 1:20 PM',
    messageText: 'I am Anjali Verma, SEBI Chief Inspector. We caught an illegal mutual fund syndicate and recovered ₹50,000 in your name. To release your payout, deposit ₹2,500 clearance tax to UPI: sebi.release.fund@paytm within 30 minutes or funds will be forfeited.',
    isScam: true,
    redFlagChips: [
      { en: 'Impersonating Regulatory Authority', te: 'సెబీ అధికారుల పేరుతో నకిలీ' },
      { en: 'Advance Fee Fraud', te: 'ముందస్తు ఫీజు అడగడం' },
      { en: 'Fake 30-Minute Deadline', te: '30 నిమిషాల గడువు' },
    ],
    explanation: {
      en: 'Severe impersonation fraud! Regulatory bodies like SEBI or RBI NEVER contact individuals on WhatsApp to release "recovered funds", nor do they ever accept fines or fees via private Paytm/UPI accounts.',
      te: 'ప్రభుత్వ అధికారుల పేరుతో చేసే మోసం! సెబీ లేదా ఆర్బీఐ ఎప్పుడూ WhatsApp ద్వారా ప్రజలను సంప్రదించవు లేదా ప్రైవేట్ పేటీఎం నంబర్లకు రుసుములను తీసుకోవు.',
    },
    learningPoint: {
      en: 'Government regulators never collect fees via consumer UPI handles. Always verify officer identities independently through official portals.',
      te: 'ప్రభుత్వ నియంత్రణ సంస్థలు సాధారణ UPI ద్వారా ఎప్పుడూ డబ్బులు వసూలు చేయవు.',
    },
  },
  {
    id: 'scenario-7',
    platform: 'SMS',
    senderName: 'AD-INSTAPRIZE',
    senderAvatarBg: 'bg-slate-600',
    timestamp: 'Today, 9:02 AM',
    messageText: 'CONGRATULATIONS! You have won ₹25,000 units in Vanguard High-Growth Tech Fund! Click http://win-vanguard-units.xyz/claim to enter your ATM card number and PIN to claim your free reward units today!',
    isScam: true,
    redFlagChips: [
      { en: 'Unsolicited Lottery / Prize', te: 'అనవసరమైన బహుమతి / లాటరీ' },
      { en: 'Demanding ATM Card & PIN', te: 'ఏటీఎం కార్డ్ & పిన్ అడగడం' },
      { en: 'Suspicious .xyz Domain', te: 'అనుమానాస్పద డొమైన్' },
    ],
    explanation: {
      en: 'Phishing scam! Mutual fund units cannot be won in random SMS lotteries. The link is designed to steal your debit card number and secret ATM PIN to drain your bank balance.',
      te: 'ఇది ఒక ఫిషింగ్ మోసం! మ్యూచువల్ ఫండ్ యూనిట్లు లాటరీల ద్వారా రావు. మీ కార్డు వివరాలు మరియు ఏటీఎం పిన్ దొంగిలించడానికి పంపిన నకిలీ లింక్ ఇది.',
    },
    learningPoint: {
      en: 'Never enter your ATM PIN or CVV on any website link received via SMS. ATM PINs are only for physical ATMs or verified bank POS machines.',
      te: 'SMS ద్వారా వచ్చిన లింకులలో మీ ఏటీఎం పిన్ లేదా CVV నంబర్‌ను ఎప్పుడూ నమోదు చేయవద్దు.',
    },
  },
];

// ------------------------------------------------------------
// 3. FIVE FRAUD DETECTION QUIZ QUESTIONS
// ------------------------------------------------------------
export const SCAM_QUIZ_QUESTIONS: ScamQuizQuestion[] = [
  {
    id: 1,
    question: {
      en: 'Where is the official, legal place in India to verify if a Mutual Fund or investment advisor is registered and authorized?',
      te: 'భారతదేశంలో ఒక మ్యూచువల్ ఫండ్ లేదా సలహాదారు చట్టబద్ధంగా రిజిస్టర్ అయ్యారో లేదో సరిచూడటానికి అధికారిక పోర్టల్ ఏది?',
    },
    options: [
      { en: 'Search for their follower count on Instagram & Telegram', te: 'ఇన్‌స్టాగ్రామ్ మరియు టెలిగ్రామ్‌లో వారి ఫాలోవర్ల సంఖ్య చూడటం' },
      { en: 'Check the official SEBI registered intermediaries portal at sebi.gov.in', te: 'sebi.gov.in లోని అధికారిక సెబీ రిజిస్టర్డ్ ఇంటర్‌మీడియరీస్ పోర్టల్ ద్వారా' },
      { en: 'Ask the group admin to send a photo of their certificate on WhatsApp', te: 'గ్రూప్ అడ్మిన్‌ను వాట్సాప్‌లో సర్టిఫికెట్ ఫోటో పంపమని అడగడం' },
      { en: 'If the app is available on Google Play, it is automatically government guaranteed', te: 'ప్లే స్టోర్‌లో ఉంటే అది స్వయంచాలకంగా ప్రభుత్వ హామీ ఉన్నట్లే' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'SEBI (Securities and Exchange Board of India) maintains a public, searchable directory of all registered Mutual Funds, Asset Management Companies, and Registered Investment Advisors (RIAs) at sebi.gov.in. Social media followers or Canva images prove nothing.',
      te: 'అన్ని రిజిస్టర్డ్ మ్యూచువల్ ఫండ్లు మరియు సలహాదారుల జాబితాను సెబీ తన అధికారిక వెబ్‌సైట్ sebi.gov.in లో ఉంచుతుంది. సోషల్ మీడియా ఫాలోవర్లు లేదా ఫోటోలు చట్టబద్ధతను నిరూపించలేవు.',
    },
    keyTakeaway: {
      en: 'Always verify before you invest: verify directly at sebi.gov.in.',
      te: 'పెట్టుబడి పెట్టే ముందు ఎల్లప్పుడూ sebi.gov.in లో ధృవీకరించండి.',
    },
  },
  {
    id: 2,
    question: {
      en: 'A caller claiming to be from your mutual fund company says: "Your dividend payout of ₹1,200 is approved. Share the 6-digit OTP sent to your phone to credit the money." What should you do?',
      te: 'మీ ఫండ్ కంపెనీ నుండి మాట్లాడుతున్నానని చెప్పి ఒకరు: "మీ ₹1,200 డివిడెండ్ విడుదలైంది. మీ ఫోన్‌కు వచ్చిన 6 అంకెల OTP చెబితే ఖాతాలో వేస్తాం" అని అడిగితే మీరు ఏమి చేయాలి?',
    },
    options: [
      { en: 'Quickly share the OTP because ₹1,200 is arriving in your account', te: 'డబ్బులు వస్తున్నాయని సంతోషంతో వెంటనే OTP చెప్పేయాలి' },
      { en: 'Share only the first 3 digits to be safe', te: 'భద్రత కోసం మొదటి 3 అంకెలు మాత్రమే చెప్పాలి' },
      { en: 'Refuse to share the OTP, hang up immediately, and report the number', te: 'OTP చెప్పడానికి నిరాకరించి, ఫోన్ కట్ చేసి, ఆ నంబర్‌ను నివేదించాలి' },
      { en: 'Ask them to call your friend instead', te: 'మీ స్నేహితుడికి ఫోన్ చేయమని చెప్పాలి' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'NEVER share an OTP with anyone! Dividends are credited directly to your verified bank account via automated ECS/NEFT without needing an OTP. OTPs are only used to authorize outgoing payments or account changes.',
      te: 'OTPని ఎవరితోనూ పంచుకోవద్దు! డివిడెండ్లు ఎటువంటి OTP అవసరం లేకుండా నేరుగా మీ బ్యాంక్ ఖాతాలో జమ అవుతాయి. OTP ని ఎవరికైనా చెబితే మీ ఖాతాలోని డబ్బే పోతుంది.',
    },
    keyTakeaway: {
      en: 'OTPs are for your eyes only. No genuine bank or fund official will ever request an OTP to send you money.',
      te: 'డబ్బులు పంపడానికి ఎవరూ OTP అడగరు. OTP మీ కోసం మాత్రమే.',
    },
  },
  {
    id: 3,
    question: {
      en: 'Which of the following investment pitches is a guaranteed red flag for mutual fund fraud?',
      te: 'క్రింది వాటిలో ఏ వాగ్దానం మ్యూచువల్ ఫండ్ మోసానికి ఖచ్చితమైన సంకేతం?',
    },
    options: [
      { en: '“Mutual fund investments are subject to market risks; read all scheme related documents carefully.”', te: '“మ్యూచువల్ ఫండ్ పెట్టుబడులు మార్కెట్ రిస్కులకు లోబడి ఉంటాయి; పత్రాలను జాగ్రత్తగా చదవండి.”' },
      { en: '“This fund has historically delivered diverse returns across market cycles, though past performance is not a guarantee.”', te: '“ఈ ఫండ్ గతంలో మంచి ఫలితాలు ఇచ్చింది, అయితే గతం భవిష్యత్తుకు హామీ కాదు.”' },
      { en: '“Get 5% guaranteed returns every week with zero risk through our secret AI fund portfolio!”', te: '“మా రహస్య AI ఫండ్ ద్వారా ఎలాంటి రిస్క్ లేకుండా ప్రతి వారం 5% స్థిరమైన లాభం పొందండి!”' },
      { en: '“Index funds passively replicate the benchmark index with low expense ratios.”', te: '“ఇండెక్స్ ఫండ్లు తక్కువ ఖర్చుతో మార్కెట్ సూచీని అనుసరిస్తాయి.”' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'Promising "guaranteed weekly returns with zero risk" is illegal and biologically impossible in equity or hybrid mutual funds. High returns always carry corresponding risk; any claim of zero-risk high return is fraud.',
      te: 'ఎలాంటి రిస్క్ లేకుండా ప్రతి వారం 5% హామీ లాభం అనడం 100% మోసం. అధిక లాభాలతో పాటు రిస్క్ కూడా ఉంటుంది.',
    },
    keyTakeaway: {
      en: 'High reward with zero risk does not exist in legal financial markets.',
      te: 'రిస్క్ లేకుండా అధిక లాభం ఇచ్చే చట్టబద్ధమైన పెట్టుబడులు ప్రపంచంలో ఎక్కడా లేవు.',
    },
  },
  {
    id: 4,
    question: {
      en: 'When investing your money in an authorized Mutual Fund scheme in India, to whom should the payment be made?',
      te: 'భారతదేశంలో అధీకృత మ్యూచువల్ ఫండ్ పథకంలో పెట్టుబడి పెట్టేటప్పుడు చెల్లింపు ఎవరికి చేయాలి?',
    },
    options: [
      { en: 'To the official Asset Management Company (AMC) bank account or SEBI clearing platform (e.g., BSE StAR MF / NSE NMF)', te: 'అధికారిక AMC బ్యాంక్ ఖాతా లేదా సెబీ క్లియరింగ్ ప్లాట్‌ఫారమ్‌కు (ఉదా: BSE StAR MF)' },
      { en: 'To the personal Google Pay handle of your mutual fund agent', te: 'మీ ఏజెంట్ యొక్క వ్యక్తిగత Google Pay నంబర్‌కు' },
      { en: 'To a Telegram group administrator via cryptocurrency', te: 'టెలిగ్రామ్ గ్రూప్ అడ్మిన్‌కు క్రిప్టోకరెన్సీ ద్వారా' },
      { en: 'Cash handed in an envelope to an unverified friend', te: 'కవరులో నగదు పెట్టి ఇవ్వడం' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Legitimate mutual fund payments must only be routed directly to the registered mutual fund AMC (e.g., Vanguard Mutual Fund / SBI Mutual Fund) or through recognized stock exchange clearing houses (BSE/NSE/MFCentral). Never pay to personal accounts.',
      te: 'మ్యూచువల్ ఫండ్ చెల్లింపులు కేవలం రిజిస్టర్డ్ AMC ఖాతాలకు లేదా గుర్తింపు పొందిన స్టాక్ ఎక్స్ఛేంజ్ ప్లాట్‌ఫామ్‌ల ద్వారా మాత్రమే జరగాలి.',
    },
    keyTakeaway: {
      en: 'Never send investment money to any individual’s personal UPI or savings account.',
      te: 'ఏ వ్యక్తి యొక్క వ్యక్తిగత UPI లేదా పొదుపు ఖాతాకు పెట్టుబడి డబ్బును ఎప్పుడూ పంపవద్దు.',
    },
  },
  {
    id: 5,
    question: {
      en: 'If a student realizes they have been scammed and transferred money to a fraudulent account, what is the official national emergency cyber fraud helpline number in India?',
      te: 'ఒక విద్యార్థి మోసపోయి నకిలీ ఖాతాకు డబ్బు పంపినట్లు గుర్తిస్తే, భారతదేశంలో తక్షణ సహాయం కోసం జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్ నంబర్ ఏది?',
    },
    options: [
      { en: '100', te: '100' },
      { en: '1930 (National Cybercrime Reporting Helpline)', te: '1930 (జాతీయ సైబర్ క్రైమ్ రిపోర్టింగ్ హెల్ప్‌లైన్)' },
      { en: '139', te: '139' },
      { en: '1098', te: '1098' },
    ],
    correctIndex: 1,
    explanation: {
      en: '1930 is India’s dedicated National Cybercrime Helpline (Citizen Financial Cyber Fraud Reporting and Management System). Calling 1930 within the "golden hour" can freeze the fraudulent transaction and recover stolen funds!',
      te: '1930 అనేది భారతదేశ జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్ నంబర్. మోసం జరిగిన వెంటనే 1930 కు కాల్ చేస్తే, మోసగాడి ఖాతాలోని డబ్బును ఫ్రీజ్ చేసి తిరిగి పొందే అవకాశం ఉంటుంది!',
    },
    keyTakeaway: {
      en: 'Memorize 1930 and report financial cyber fraud immediately at cybercrime.gov.in.',
      te: '1930 నంబర్‌ను గుర్తుంచుకోండి మరియు cybercrime.gov.in లో వెంటనే ఫిర్యాదు చేయండి.',
    },
  },
];

// ------------------------------------------------------------
// 4. EMERGENCY PROTOCOL STEPS ("What to Do If You Get Scammed")
// ------------------------------------------------------------
export const EMERGENCY_STEPS: EmergencyStep[] = [
  {
    stepNumber: 1,
    icon: 'ShieldOff',
    title: {
      en: 'Stop Contact Immediately',
      te: 'తక్షణమే సంభాషణను నిలిపివేయండి',
    },
    action: {
      en: 'Sever all communication with the fraudster immediately. Never send additional money as a "cancellation fee" or "recovery charge"—scammers will keep asking for more.',
      te: 'స్కామర్‌తో అన్ని సంబంధాలను వెంటనే తెంచుకోండి. "రద్దు రుసుము" లేదా "డబ్బు వాపస్" పేరుతో అదనంగా మరో రూపాయి కూడా పంపవద్దు.',
    },
  },
  {
    stepNumber: 2,
    icon: 'Lock',
    title: {
      en: 'Protect Your Credentials & Freeze',
      te: 'మీ ఖాతాలు & కార్డులను బ్లాక్ చేయండి',
    },
    action: {
      en: 'If you disclosed an OTP or password, immediately change your bank/UPI PIN and net banking password. Call your bank’s toll-free number to freeze compromised accounts and debit cards.',
      te: 'మీరు పొరపాటున OTP లేదా పిన్ చెప్పినట్లయితే, వెంటనే బ్యాంక్/UPI పిన్ మార్చండి మరియు మీ కార్డులను బ్లాక్ చేయమని మీ బ్యాంక్‌ను కోరండి.',
    },
  },
  {
    stepNumber: 3,
    icon: 'PhoneCall',
    title: {
      en: 'Call 1930 & Report Online',
      te: '1930 కు కాల్ చేయండి & ఆన్‌లైన్‌లో ఫిర్యాదు చేయండి',
    },
    contactInfo: 'National Helpline: 1930 (Toll Free, 24/7)',
    portalUrl: 'https://cybercrime.gov.in',
    action: {
      en: 'Dial 1930 immediately! Reporting within the "golden hour" enables law enforcement and banks to freeze the fraudster’s bank account before the money is withdrawn. Also lodge an official FIR at cybercrime.gov.in.',
      te: 'వెంటనే 1930 కు కాల్ చేయండి! మొదటి గంటలోనే ఫిర్యాదు చేయడం ద్వారా అధికారులు ఆ మోసపూరిత ఖాతాను స్తంభింపజేసి మీ డబ్బును కాపాడగలరు.',
    },
  },
  {
    stepNumber: 4,
    icon: 'CheckCheck',
    title: {
      en: 'Verify & Lodge at SEBI SCORES',
      te: 'సెబీ స్కోర్స్ (SCORES) లో ఫిర్యాదు చేయండి',
    },
    portalUrl: 'https://scores.sebi.gov.in',
    action: {
      en: 'If an entity falsely claimed SEBI registration or used forged fund documentation, file a complaint on the SEBI SCORES portal (scores.sebi.gov.in) to trigger regulatory investigation.',
      te: 'నకిలీ సెబీ పత్రాలు లేదా సెబీ రిజిస్టర్డ్ పేరును దుర్వినియోగం చేసినట్లయితే, సెబీ స్కోర్స్ (SCORES) పోర్టల్ ద్వారా ఫిర్యాదు నమోదు చేయండి.',
    },
  },
];
