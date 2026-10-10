import type { Lesson } from '@/types/content';
import { budgetLabLesson } from './budget-lab';
import { simpleVsCompoundLesson } from './simple-vs-compound';
import { inflationExplorerLesson } from './inflation-explorer';
import { fdCalculatorLesson } from './fd-calculator';
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
import { scamDetectiveLesson } from './scam-detective';

export const LESSONS: Lesson[] = [
  budgetLabLesson,
  simpleVsCompoundLesson,
  inflationExplorerLesson,
  fdCalculatorLesson,
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
  scamDetectiveLesson,
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
