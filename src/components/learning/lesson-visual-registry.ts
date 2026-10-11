export type LocalizedVisualTitle = { en: string; te: string };

export const lessonVisualTitles: Record<string, LocalizedVisualTitle> = {
  'money-foundations': { en: 'Income vs. Expenses Balance', te: 'ఆదాయం vs ఖర్చుల సమతుల్యత' },
  'budget-lab': { en: 'One pool, many choices', te: 'ఒక మొత్తం, ఎన్నో ఎంపికలు' },
  'savings-goals': { en: 'SMART Milestone Timeline', te: 'లక్ష్యాల సమయ ప్రణాళిక' },
  'saving-basics': { en: 'The 3–6 Month Safety Cushion', te: '3-6 నెలల అత్యవసర రక్షణ నిధి' },
  'simple-vs-compound': { en: 'Time changes the curve', te: 'సమయం వృద్ధి రేఖను మారుస్తుంది' },
  'inflation-explorer': { en: 'A rupee buys a basket', te: 'ఒక రూపాయి కొనగల వస్తువులు' },
  'fd-calculator': { en: 'A deposit follows its terms', te: 'డిపాజిట్ నిబంధనల ప్రకారం పెరుగుతుంది' },
  'saving-vs-investing': { en: 'Inflation Gap & Growth Horizon', te: 'ద్రవ్యోల్బణం మరియు వృద్ధి కాలం' },
  'businesses-and-shares': { en: 'A share is a small ownership unit', te: 'ఒక షేర్ చిన్న యాజమాన్య భాగం' },
  'stock-market-mechanics': { en: 'Orders meet at a price', te: 'ఒక ధర వద్ద కొనుగోలు, అమ్మకం ఆర్డర్లు కలుస్తాయి' },
  'stock-market-ecosystem': { en: 'A trade passes through a system', te: 'ఒక లావాదేవీ వ్యవస్థలో ప్రయాణిస్తుంది' },
  'market-indices': { en: 'An index summarizes a group', te: 'సూచీ ఒక సమూహాన్ని సంగ్రహిస్తుంది' },
  'company-financials': { en: 'Revenue is not the same as profit', te: 'ఆదాయం, లాభం ఒకటి కాదు' },
  'financial-ratios': { en: 'A ratio compares two numbers', te: 'నిష్పత్తి రెండు సంఖ్యలను పోలుస్తుంది' },
  'mutual-fund-basics': { en: 'Many contributions, one portfolio', te: 'చాలా పెట్టుబడులు, ఒక పోర్ట్‌ఫోలియో' },
  'mutual-fund-structure': { en: 'Different roles protect the process', te: 'వేర్వేరు బాధ్యతలు ప్రక్రియను నిర్వహిస్తాయి' },
  'fund-types': { en: 'Funds hold different kinds of assets', te: 'ఫండ్లు వేర్వేరు ఆస్తులను కలిగి ఉంటాయి' },
  'active-vs-passive': { en: 'Two ways to manage a portfolio', te: 'పోర్ట్‌ఫోలియో నిర్వహణకు రెండు మార్గాలు' },
  'sip-lab': { en: 'Regular contributions add up', te: 'నియమిత పెట్టుబడులు కలుస్తాయి' },
  'digital-safety': { en: 'UPI PIN Defense Shield', te: 'UPI పిన్ రక్షణ కవచం' },
  'scam-detective': { en: 'Pause when a message pressures you', te: 'ఒత్తిడి చేసే సందేశం వస్తే ఆగి ఆలోచించండి' },
  'incident-steps': { en: 'The 60-Minute Golden Hour Protocol', te: '60 నిమిషాల గోల్డెన్ అవర్ ప్రోటోకాల్' },
};

export const miniLabLessons = new Set([
  'businesses-and-shares',
  'stock-market-mechanics',
  'stock-market-ecosystem',
  'mutual-fund-structure',
  'fund-types',
  'active-vs-passive',
  'money-foundations',
  'savings-goals',
  'saving-basics',
  'saving-vs-investing',
  'digital-safety',
  'incident-steps',
]);

export function hasLessonMiniLab(lessonId: string) {
  return miniLabLessons.has(lessonId);
}

export function hasLessonConceptVisual(lessonId: string) {
  return Object.prototype.hasOwnProperty.call(lessonVisualTitles, lessonId);
}
