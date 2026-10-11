import type { Pillar, Module } from '@/types/content';

export const PILLARS: Pillar[] = [
  {
    id: 'budget',
    slug: 'plan-and-budget',
    title: {
      en: 'Plan & Budget',
      te: 'ప్రణాళిక & బడ్జెట్',
    },
    description: {
      en: 'Learn to manage your money before you spend it. Understand needs vs wants, opportunity cost, and how to build a plan that works for you.',
      te: 'మీరు ఖర్చు చేయడానికి ముందే మీ డబ్బును నిర్వహించడం నేర్చుకోండి.',
    },
    tagline: {
      en: 'Your money, your plan',
      te: 'మీ డబ్బు, మీ ప్రణాళిక',
    },
    color: 'teal',
    icon: 'Wallet',
    moduleIds: ['money-foundations', 'budget-construction', 'goals-and-choices'],
    contentStatus: 'implemented',
  },
  {
    id: 'save',
    slug: 'save-and-manage',
    title: {
      en: 'Save & Manage',
      te: 'పొదుపు & నిర్వహణ',
    },
    description: {
      en: 'Discover how interest works, why inflation matters, and how saving consistently can help you reach your goals.',
      te: 'వడ్డీ ఎలా పని చేస్తుందో, ద్రవ్యోల్బణం ఎందుకు ముఖ్యమో తెలుసుకోండి.',
    },
    tagline: {
      en: 'Let time work for you',
      te: 'సమయాన్ని మీ పక్షంలో ఉంచుకోండి',
    },
    color: 'navy',
    icon: 'PiggyBank',
    moduleIds: ['saving-foundations', 'interest-and-time', 'inflation-and-purchasing-power', 'banking-products'],
    contentStatus: 'implemented',
  },
  {
    id: 'invest',
    slug: 'understand-investing',
    title: {
      en: 'Understand Investing',
      te: 'పెట్టుబడులు అర్థం చేసుకోండి',
    },
    description: {
      en: 'Explore how businesses raise money, how stock markets work, and what mutual funds do — without any recommendation to buy or sell.',
      te: 'వ్యాపారాలు ఎలా డబ్బు సేకరిస్తాయో, స్టాక్ మార్కెట్లు ఎలా పని చేస్తాయో అర్థం చేసుకోండి.',
    },
    tagline: {
      en: 'Learn before you invest',
      te: 'పెట్టుబడి పెట్టే ముందు నేర్చుకోండి',
    },
    color: 'coral',
    icon: 'TrendingUp',
    moduleIds: ['investment-foundations', 'stock-market-academy', 'mutual-fund-academy'],
    contentStatus: 'implemented',
  },
  {
    id: 'safe',
    slug: 'stay-financially-safe',
    title: {
      en: 'Stay Financially Safe',
      te: 'ఆర్థికంగా సురక్షితంగా ఉండండి',
    },
    description: {
      en: 'Recognise scams, protect your passwords and OTPs, and know what to do if something goes wrong — without fear, with knowledge.',
      te: 'మోసాలను గుర్తించండి, మీ పాస్‌వర్డ్‌లు మరియు OTP లను రక్షించుకోండి.',
    },
    tagline: {
      en: 'Knowledge is your shield',
      te: 'జ్ఞానమే మీ రక్ష',
    },
    color: 'navy',
    icon: 'Shield',
    moduleIds: ['digital-safety', 'investment-fraud', 'incident-response'],
    contentStatus: 'implemented',
  },
];

export const MODULES: Module[] = [
  // Budget Pillar
  {
    id: 'money-foundations',
    slug: 'money-foundations',
    title: { en: 'Money Foundations', te: 'డబ్బు పునాదులు' },
    description: { en: 'What money does, income, expenses and balance', te: 'డబ్బు ఏమి చేస్తుంది, ఆదాయం, ఖర్చులు మరియు నిల్వ' },
    pillarId: 'budget',
    icon: 'Coins',
    lessonIds: ['money-foundations'],
    conceptIds: ['money', 'income', 'expense', 'budget', 'opportunity-cost'],
    level: 'foundation',
    contentStatus: 'implemented',
  },
  {
    id: 'budget-construction',
    slug: 'budget-construction',
    title: { en: 'Building Your Budget', te: 'మీ బడ్జెట్ నిర్మించడం' },
    description: { en: 'How to plan, track and revise a personal budget', te: 'వ్యక్తిగత బడ్జెట్‌ను ఎలా ప్లాన్ చేయాలి' },
    pillarId: 'budget',
    icon: 'Calculator',
    lessonIds: ['budget-lab'],
    conceptIds: ['budget', 'fixed-expense', 'variable-expense'],
    level: 'foundation',
    contentStatus: 'implemented',
  },
  {
    id: 'goals-and-choices',
    slug: 'goals-and-choices',
    title: { en: 'Goals & Smart Choices', te: 'లక్ష్యాలు & స్మార్ట్ ఎంపికలు' },
    description: { en: 'Short/medium/long-term goals and trade-offs', te: 'స్వల్పకాలిక/దీర్ఘకాలిక లక్ష్యాలు' },
    pillarId: 'budget',
    icon: 'Target',
    lessonIds: ['savings-goals'],
    conceptIds: ['saving', 'goal-setting'],
    level: 'core',
    contentStatus: 'implemented',
  },
  // Save Pillar
  {
    id: 'saving-foundations',
    slug: 'saving-foundations',
    title: { en: 'Why Save?', te: 'ఎందుకు పొదుపు చేయాలి?' },
    description: { en: 'Saving vs investing vs spending, liquidity and emergency funds', te: 'పొదుపు vs పెట్టుబడి vs ఖర్చు' },
    pillarId: 'save',
    icon: 'PiggyBank',
    lessonIds: ['saving-basics'],
    conceptIds: ['saving', 'liquidity', 'emergency-fund'],
    level: 'foundation',
    contentStatus: 'implemented',
  },
  {
    id: 'interest-and-time',
    slug: 'interest-and-time',
    title: { en: 'Interest & Compounding', te: 'వడ్డీ & చక్రవడ్డీ' },
    description: { en: 'Simple interest, compound interest and the power of time', te: 'సాధారణ వడ్డీ, చక్రవడ్డీ మరియు సమయం యొక్క శక్తి' },
    pillarId: 'save',
    icon: 'TrendingUp',
    lessonIds: ['simple-vs-compound'],
    conceptIds: ['simple-interest', 'compound-interest', 'principal'],
    level: 'core',
    contentStatus: 'implemented',
  },
  {
    id: 'inflation-and-purchasing-power',
    slug: 'inflation-and-purchasing-power',
    title: { en: 'Inflation & Purchasing Power', te: 'ద్రవ్యోల్బణం & కొనుగోలు శక్తి' },
    description: { en: 'Why ₹100 today buys less tomorrow', te: '₹100 నేడు రేపటి కంటే తక్కువ కొనుగోలు చేస్తుంది' },
    pillarId: 'save',
    icon: 'ShoppingBasket',
    lessonIds: ['inflation-explorer'],
    conceptIds: ['inflation', 'real-return', 'nominal-return'],
    level: 'core',
    contentStatus: 'implemented',
  },
  {
    id: 'banking-products',
    slug: 'banking-products',
    title: { en: 'FDs & Banking Basics', te: 'FD లు & బ్యాంకింగ్ ప్రాథమిక అంశాలు' },
    description: { en: 'Savings accounts, fixed deposits and their trade-offs', te: 'పొదుపు ఖాతాలు, స్థిర డిపాజిట్లు' },
    pillarId: 'save',
    icon: 'Building',
    lessonIds: ['fd-calculator'],
    conceptIds: ['fd', 'rd', 'principal', 'maturity'],
    level: 'core',
    contentStatus: 'implemented',
  },
  // Invest Pillar
  {
    id: 'investment-foundations',
    slug: 'investment-foundations',
    title: { en: 'Why Invest?', te: 'ఎందుకు పెట్టుబడి పెట్టాలి?' },
    description: { en: 'Goals, time horizon, risk and return as concepts — no product advice', te: 'లక్ష్యాలు, సమయ హోరిజాన్, రిస్క్ మరియు రిటర్న్' },
    pillarId: 'invest',
    icon: 'LineChart',
    lessonIds: ['saving-vs-investing'],
    conceptIds: ['saving', 'investing', 'risk', 'return', 'diversification'],
    level: 'foundation',
    contentStatus: 'implemented',
  },
  {
    id: 'stock-market-academy',
    slug: 'stock-market-academy',
    title: { en: 'Stock Market Academy', te: 'స్టాక్ మార్కెట్ అకాడమీ' },
    description: { en: 'From businesses to shares, order books to indices', te: 'వ్యాపారాల నుండి షేర్లు, ఆర్డర్ బుక్స్ వరకు' },
    pillarId: 'invest',
    icon: 'BarChart2',
    lessonIds: ['businesses-and-shares', 'stock-market-mechanics', 'stock-market-ecosystem', 'market-indices', 'company-financials', 'financial-ratios'],
    conceptIds: ['share', 'equity', 'stock-exchange', 'ipo', 'order-book', 'bid-ask', 'index', 'nifty-50', 'sensex', 'eps', 'pe-ratio'],
    level: 'core',
    contentStatus: 'implemented',
  },
  {
    id: 'mutual-fund-academy',
    slug: 'mutual-fund-academy',
    title: { en: 'Mutual Fund Academy', te: 'మ్యూచువల్ ఫండ్ అకాడమీ' },
    description: { en: 'Units, NAV, SIP mechanics, fund types and expense ratios — education only', te: 'యూనిట్లు, NAV, SIP మెకానిక్స్, ఫండ్ రకాలు మరియు వ్యయ నిష్పత్తులు' },
    pillarId: 'invest',
    icon: 'PieChart',
    lessonIds: ['mutual-fund-basics', 'mutual-fund-structure', 'fund-types', 'active-vs-passive', 'sip-lab'],
    conceptIds: ['mutual-fund', 'nav', 'unit', 'sip', 'expense-ratio', 'amc', 'debt-fund', 'liquid-fund'],
    level: 'core',
    contentStatus: 'implemented',
  },
  // Safe Pillar
  {
    id: 'digital-safety',
    slug: 'digital-safety',
    title: { en: 'Digital Safety', te: 'డిజిటల్ భద్రత' },
    description: { en: 'UPI, OTPs, passwords and safe payment behavior', te: 'UPI, OTP లు, పాస్‌వర్డ్‌లు మరియు సురక్షిత చెల్లింపు ప్రవర్తన' },
    pillarId: 'safe',
    icon: 'Smartphone',
    lessonIds: ['digital-safety'],
    conceptIds: ['upi-pin', 'otp', 'phishing'],
    level: 'foundation',
    contentStatus: 'implemented',
  },
  {
    id: 'investment-fraud',
    slug: 'investment-fraud',
    title: { en: 'Spotting Scams', te: 'మోసాలను గుర్తించడం' },
    description: { en: 'Fake schemes, pump-and-dump, social engineering and red flags', te: 'నకిలీ పథకాలు, పంప్-అండ్-డంప్' },
    pillarId: 'safe',
    icon: 'AlertTriangle',
    lessonIds: ['scam-detective'],
    conceptIds: ['ponzi-scheme', 'pump-and-dump', 'phishing'],
    level: 'core',
    contentStatus: 'implemented',
  },
  {
    id: 'incident-response',
    slug: 'incident-response',
    title: { en: 'What to Do If Something Goes Wrong', te: 'ఏదైనా తప్పు జరిగితే ఏమి చేయాలి' },
    description: { en: 'Verified reporting channels and steps to take immediately', te: 'ధృవీకరించబడిన నివేదనా ఛానెల్స్ మరియు తక్షణ చర్యలు' },
    pillarId: 'safe',
    icon: 'PhoneCall',
    lessonIds: ['incident-steps'],
    conceptIds: [],
    level: 'core',
    contentStatus: 'implemented',
  },
];

export function getPillarById(id: string): Pillar | undefined {
  return PILLARS.find(p => p.id === id);
}

export function getModulesByPillar(pillarId: string): Module[] {
  return MODULES.filter(m => m.pillarId === pillarId);
}

export function getModuleById(id: string): Module | undefined {
  return MODULES.find(m => m.id === id);
}
