// ============================================================
// FINQUEST INDIA — PURE FINANCIAL MATH FUNCTIONS
// Phase 6/10: All formulas tested and convention-labeled
// ============================================================

/**
 * Simple Interest
 * interest = principal × annualRate × years
 * Convention: annualRate as decimal (e.g. 0.07 for 7%)
 */
export function simpleInterest(principal: number, annualRateDecimal: number, years: number): number {
  if (principal < 0 || annualRateDecimal < 0 || years < 0) return 0;
  return principal * annualRateDecimal * years;
}

export function simpleInterestMaturity(principal: number, annualRateDecimal: number, years: number): number {
  return principal + simpleInterest(principal, annualRateDecimal, years);
}

/**
 * Compound Interest
 * A = P × (1 + r/n)^(n×t)
 * Convention: r = annual nominal rate (decimal), n = compounding frequency/year, t = years
 * Returns maturity amount
 */
export function compoundInterest(
  principal: number,
  annualRateDecimal: number,
  years: number,
  compoundingPerYear: number = 1,
): number {
  if (principal < 0 || annualRateDecimal < 0 || years < 0 || compoundingPerYear <= 0) return 0;
  if (annualRateDecimal === 0) return principal;
  return principal * Math.pow(1 + annualRateDecimal / compoundingPerYear, compoundingPerYear * years);
}

export function compoundInterestEarned(
  principal: number,
  annualRateDecimal: number,
  years: number,
  compoundingPerYear: number = 1,
): number {
  return compoundInterest(principal, annualRateDecimal, years, compoundingPerYear) - principal;
}

/**
 * FD Maturity (quarterly compounding by default, as common in Indian FDs)
 * M = P × (1 + r/4)^(4t)
 * Assumption: nominal annual rate, quarterly compounding, no TDS, no premature withdrawal
 * ACTUAL FD terms vary by bank — this is illustrative only.
 *
 * Verified: ₹50,000 @ 7% p.a. quarterly, 3 years ≈ ₹61,572
 */
export function fdMaturity(
  principal: number,
  annualRateDecimal: number,
  years: number,
): number {
  return compoundInterest(principal, annualRateDecimal, years, 4);
}

/**
 * Purchasing Power of money under constant inflation assumption
 * presentEquivalent = futureAmount / (1 + inflationRate)^years
 * This is a constant-rate assumption — NOT a forecast of actual inflation.
 *
 * Verified: ₹1,00,000 / (1.06)^10 ≈ ₹55,839
 */
export function purchasingPowerEquivalent(
  futureAmount: number,
  annualInflationDecimal: number,
  years: number,
): number {
  if (annualInflationDecimal <= -1) return 0;
  if (years === 0) return futureAmount;
  return futureAmount / Math.pow(1 + annualInflationDecimal, years);
}

/**
 * What ₹amount grows to under constant inflation (future nominal price)
 * futureNominalPrice = presentAmount × (1 + inflation)^years
 */
export function futureNominalPrice(
  presentAmount: number,
  annualInflationDecimal: number,
  years: number,
): number {
  return presentAmount * Math.pow(1 + annualInflationDecimal, years);
}

/**
 * Nominal vs Real Return
 * Approximation (used in quick explanations): realReturn ≈ nominalReturn - inflation
 * Exact (Fisher equation): realReturn = (1 + nominalReturn) / (1 + inflation) - 1
 */
export function realReturnApprox(nominalDecimal: number, inflationDecimal: number): number {
  return nominalDecimal - inflationDecimal;
}

export function realReturnExact(nominalDecimal: number, inflationDecimal: number): number {
  if (inflationDecimal <= -1) return 0;
  return (1 + nominalDecimal) / (1 + inflationDecimal) - 1;
}

/**
 * SIP Future Value
 * For EQUAL END-OF-PERIOD contributions (ordinary annuity):
 *   FV = P × (((1+r)^n − 1) / r)  when r ≠ 0
 *   FV = P × n                      when r = 0
 *
 * For BEGINNING-OF-PERIOD contributions (annuity due):
 *   FV_due = FV_ordinary × (1 + r)
 *
 * r = periodic rate (e.g. monthly rate = annual/12 if monthly)
 * n = number of periods
 * P = contribution per period
 *
 * This is a MATHEMATICAL ILLUSTRATION — NOT a prediction of mutual-fund returns.
 *
 * Verified:
 *   P=2000, r=0.01 (1% monthly), n=120 → end-of-period ≈ ₹4,60,077
 *   P=2000, r=0.01,          n=120 → beginning-of-period ≈ ₹4,64,678
 */
export function sipFutureValue(
  contributionPerPeriod: number,
  periodicRateDecimal: number,
  numberOfPeriods: number,
  timing: 'end' | 'beginning' = 'end',
): number {
  if (contributionPerPeriod < 0 || numberOfPeriods < 0) return 0;
  if (periodicRateDecimal === 0) {
    return contributionPerPeriod * numberOfPeriods;
  }
  const fvOrdinary =
    contributionPerPeriod *
    ((Math.pow(1 + periodicRateDecimal, numberOfPeriods) - 1) / periodicRateDecimal);
  return timing === 'beginning' ? fvOrdinary * (1 + periodicRateDecimal) : fvOrdinary;
}

/**
 * Generate SIP monthly table rows
 */
export function generateSIPTable(
  contributionPerPeriod: number,
  navPrices: number[],
): import('@/types/content').SIPRow[] {
  let cumulativeUnits = 0;
  let cumulativeContribution = 0;

  return navPrices.map((nav, idx) => {
    const period = idx + 1;
    const units = nav > 0 ? contributionPerPeriod / nav : 0;
    cumulativeUnits += units;
    cumulativeContribution += contributionPerPeriod;
    const portfolioValue = cumulativeUnits * nav;
    const averageCost = cumulativeUnits > 0 ? cumulativeContribution / cumulativeUnits : 0;

    return {
      period,
      contribution: contributionPerPeriod,
      navPrice: nav,
      unitsBought: units,
      cumulativeUnits,
      cumulativeContribution,
      portfolioValue,
      averageCost,
    };
  });
}

/**
 * NAV Calculation
 * NAV per unit = (scheme assets − liabilities) / units outstanding
 * Simplified teaching model — actual NAV has regulatory valuation rules.
 */
export function calculateNAV(
  totalAssets: number,
  totalLiabilities: number,
  unitsOutstanding: number,
): number {
  if (unitsOutstanding <= 0) return 0;
  const netAssets = totalAssets - totalLiabilities;
  if (netAssets < 0) return 0;
  return netAssets / unitsOutstanding;
}

/**
 * Units purchased in SIP instalment
 * units = contribution / applicable NAV
 * Teaching model — real transaction rules differ.
 */
export function unitsBought(contribution: number, nav: number): number {
  if (nav <= 0) return 0;
  return contribution / nav;
}

/**
 * Market Capitalization
 * marketCap = sharePrice × sharesOutstanding
 * This is NOT enterprise value and NOT an intrinsic valuation.
 */
export function marketCap(sharePrice: number, sharesOutstanding: number): number {
  return sharePrice * sharesOutstanding;
}

/**
 * EPS (Earnings Per Share)
 * EPS = netProfit / weightedAverageSharesOutstanding
 */
export function eps(netProfit: number, sharesOutstanding: number): number {
  if (sharesOutstanding <= 0) return 0;
  return netProfit / sharesOutstanding;
}

/**
 * P/E Ratio
 * P/E = sharePrice / EPS
 * Context-dependent — sector, growth, accounting policies all matter.
 * A low or high P/E alone does not indicate good or bad investment.
 */
export function peRatio(sharePrice: number, epsValue: number): number {
  if (epsValue <= 0) return 0;
  return sharePrice / epsValue;
}

/**
 * CAGR (Compound Annual Growth Rate)
 * CAGR = (endValue / beginValue)^(1/years) − 1
 * For positive beginValue and the stated start/end-value context.
 * Hides interim volatility. NOT appropriate for arbitrary periodic cash flows.
 */
export function cagr(beginValue: number, endValue: number, years: number): number {
  if (beginValue <= 0 || endValue < 0 || years <= 0) return 0;
  return Math.pow(endValue / beginValue, 1 / years) - 1;
}

/**
 * Rule of 72 (approximation)
 * Approximate doubling time = 72 / annual_rate_percent
 * Limitation: approximate; less accurate for very high or very low rates.
 */
export function ruleOf72(annualRatePercent: number): number {
  if (annualRatePercent <= 0) return Infinity;
  return 72 / annualRatePercent;
}

/**
 * Expense ratio impact on growth
 * Simplified annual model: net return = gross return - expense ratio
 * Actual scheme fees are reflected continuously in NAV — this is a simplified model.
 */
export function netGrowthWithExpenseRatio(
  principal: number,
  grossAnnualReturnDecimal: number,
  expenseRatioDecimal: number,
  years: number,
): number {
  const netRate = grossAnnualReturnDecimal - expenseRatioDecimal;
  return compoundInterest(principal, netRate, years);
}

/**
 * Budget balance check
 */
export function budgetBalance(
  income: number,
  allocations: number[],
): { total: number; remaining: number; isOverBudget: boolean } {
  const total = allocations.reduce((sum, a) => sum + Math.max(0, a), 0);
  return {
    total,
    remaining: income - total,
    isOverBudget: total > income,
  };
}

// ============================================================
// FORMAT HELPERS
// ============================================================

/** Format a number as Indian rupees */
export function formatINR(amount: number, decimals = 0): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

/** Format percentage */
export function formatPercent(decimal: number, decimals = 2): string {
  return `${(decimal * 100).toFixed(decimals)}%`;
}

/** Format number in Indian lakhs/crores */
export function formatIndianNumber(num: number): string {
  if (num >= 10_000_000) return `₹${(num / 10_000_000).toFixed(2)} Cr`;
  if (num >= 100_000) return `₹${(num / 100_000).toFixed(2)} L`;
  if (num >= 1_000) return `₹${(num / 1_000).toFixed(1)}K`;
  return `₹${num.toFixed(0)}`;
}
