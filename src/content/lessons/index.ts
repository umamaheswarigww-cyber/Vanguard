import type { Lesson } from '@/types/content';
import { moneyFoundationsLesson } from './money-foundations';
import { budgetLabLesson } from './budget-lab';
import { savingsGoalsLesson } from './savings-goals';
import { savingBasicsLesson } from './saving-basics';
import { simpleVsCompoundLesson } from './simple-vs-compound';
import { inflationExplorerLesson } from './inflation-explorer';
import { fdCalculatorLesson } from './fd-calculator';
import { savingVsInvestingLesson } from './saving-vs-investing';
import { businessesAndSharesLesson } from './businesses-and-shares';
import { stockMarketMechanicsLesson } from './stock-market-mechanics';
import { stockMarketEcosystemLesson } from './stock-market-ecosystem';
import { marketIndicesLesson } from './market-indices';
import { companyFinancialsLesson } from './company-financials';
import { financialRatiosLesson } from './financial-ratios';
import { mutualFundBasicsLesson } from './mutual-fund-basics';
import { mutualFundStructureLesson } from './mutual-fund-structure';
import { fundTypesLesson } from './fund-types';
import { activeVsPassiveLesson } from './active-vs-passive';
import { sipLabLesson } from './sip-lab';
import { digitalSafetyLesson } from './digital-safety';
import { scamDetectiveLesson } from './scam-detective';
import { incidentStepsLesson } from './incident-steps';

export const LESSONS: Lesson[] = [
  moneyFoundationsLesson,
  budgetLabLesson,
  savingsGoalsLesson,
  savingBasicsLesson,
  simpleVsCompoundLesson,
  inflationExplorerLesson,
  fdCalculatorLesson,
  savingVsInvestingLesson,
  businessesAndSharesLesson,
  stockMarketMechanicsLesson,
  stockMarketEcosystemLesson,
  marketIndicesLesson,
  companyFinancialsLesson,
  financialRatiosLesson,
  mutualFundBasicsLesson,
  mutualFundStructureLesson,
  fundTypesLesson,
  activeVsPassiveLesson,
  sipLabLesson,
  digitalSafetyLesson,
  scamDetectiveLesson,
  incidentStepsLesson,
];

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find(l => l.id === id);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find(l => l.slug === slug);
}

export function getLessonsByPillar(pillarId: string): Lesson[] {
  return LESSONS.filter(l => l.pillarId === pillarId);
}
