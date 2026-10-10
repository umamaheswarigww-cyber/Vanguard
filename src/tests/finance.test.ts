import { describe, it, expect } from 'vitest';
import {
  simpleInterest,
  simpleInterestMaturity,
  compoundInterest,
  fdMaturity,
  purchasingPowerEquivalent,
  sipFutureValue,
  calculateNAV,
  marketCap,
  eps,
  peRatio,
  cagr,
  budgetBalance,
  realReturnExact,
  ruleOf72,
} from '../lib/finance/formulas';

describe('Simple Interest', () => {
  it('calculates correctly for normal case', () => {
    // ₹10,000 @ 10% for 2 years = ₹2,000 interest
    expect(simpleInterest(10_000, 0.10, 2)).toBeCloseTo(2_000, 2);
  });

  it('returns 0 for zero rate', () => {
    expect(simpleInterest(10_000, 0, 5)).toBe(0);
  });

  it('returns 0 for zero time', () => {
    expect(simpleInterest(10_000, 0.10, 0)).toBe(0);
  });

  it('returns 0 for negative principal', () => {
    expect(simpleInterest(-1000, 0.10, 2)).toBe(0);
  });

  it('maturity = principal + interest', () => {
    expect(simpleInterestMaturity(10_000, 0.10, 2)).toBeCloseTo(12_000, 2);
  });

  it('20-year simple interest check from blueprint', () => {
    // ₹10,000 @ 10% × 20 years = ₹20,000 interest, ₹30,000 total
    expect(simpleInterest(10_000, 0.10, 20)).toBeCloseTo(20_000, 0);
    expect(simpleInterestMaturity(10_000, 0.10, 20)).toBeCloseTo(30_000, 0);
  });
});

describe('Compound Interest', () => {
  it('calculates compound growth correctly', () => {
    // ₹10,000 at 10% annually for 20 years ≈ ₹67,275 (blueprint verified)
    expect(compoundInterest(10_000, 0.10, 20, 1)).toBeCloseTo(67_275, -1);
  });

  it('zero rate returns principal', () => {
    expect(compoundInterest(10_000, 0, 5)).toBe(10_000);
  });

  it('zero years returns principal', () => {
    expect(compoundInterest(10_000, 0.10, 0)).toBeCloseTo(10_000, 2);
  });

  it('quarterly compounding formula', () => {
    // n=4 compounding should give more than annual
    const annual = compoundInterest(10_000, 0.10, 1, 1);
    const quarterly = compoundInterest(10_000, 0.10, 1, 4);
    expect(quarterly).toBeGreaterThan(annual);
  });
});

describe('FD Maturity (quarterly compounding)', () => {
  it('blueprint verified: ₹50,000 @ 7% quarterly 3 years ≈ ₹61,572', () => {
    // Verified: M = 50000 × (1 + 0.07/4)^(4×3) ≈ 61571.97
    expect(fdMaturity(50_000, 0.07, 3)).toBeCloseTo(61_572, 0);
  });

  it('zero principal returns 0', () => {
    expect(fdMaturity(0, 0.07, 3)).toBe(0);
  });
});

describe('Purchasing Power / Inflation', () => {
  it('blueprint verified: ₹1,00,000 at 6% inflation 10 years ≈ ₹55,839 equivalent today', () => {
    expect(purchasingPowerEquivalent(1_00_000, 0.06, 10)).toBeCloseTo(55_839, 0);
  });

  it('returns same amount for 0 years', () => {
    expect(purchasingPowerEquivalent(1_00_000, 0.06, 0)).toBe(1_00_000);
  });

  it('zero inflation — no change', () => {
    expect(purchasingPowerEquivalent(1_00_000, 0, 10)).toBe(1_00_000);
  });
});

describe('SIP Future Value', () => {
  it('blueprint verified: ₹2000/mo @ 1%/mo × 120 (end-of-period) ≈ ₹4,60,077', () => {
    expect(sipFutureValue(2_000, 0.01, 120, 'end')).toBeCloseTo(4_60_077, 0);
  });

  it('blueprint verified: ₹2000/mo @ 1%/mo × 120 (beginning-of-period) ≈ ₹4,64,678', () => {
    expect(sipFutureValue(2_000, 0.01, 120, 'beginning')).toBeCloseTo(4_64_678, 0);
  });

  it('zero rate = contribution × periods', () => {
    expect(sipFutureValue(1_000, 0, 12, 'end')).toBe(12_000);
  });

  it('zero periods = 0', () => {
    expect(sipFutureValue(1_000, 0.01, 0, 'end')).toBe(0);
  });

  it('beginning-of-period > end-of-period', () => {
    const endFV = sipFutureValue(1_000, 0.01, 12, 'end');
    const begFV = sipFutureValue(1_000, 0.01, 12, 'beginning');
    expect(begFV).toBeGreaterThan(endFV);
  });
});

describe('NAV Calculation', () => {
  it('calculates NAV correctly', () => {
    // Assets: 1,00,000; Liabilities: 5,000; Units: 9,500 → NAV = 10
    expect(calculateNAV(1_00_000, 5_000, 9_500)).toBeCloseTo(10.0, 2);
  });

  it('zero units returns 0', () => {
    expect(calculateNAV(1_00_000, 0, 0)).toBe(0);
  });

  it('liabilities exceeding assets returns 0', () => {
    expect(calculateNAV(1_000, 5_000, 100)).toBe(0);
  });
});

describe('Market Cap', () => {
  it('calculates correctly', () => {
    expect(marketCap(500, 1_000_000)).toBe(500_000_000);
  });
});

describe('EPS and P/E', () => {
  it('eps calculates correctly', () => {
    expect(eps(10_000, 1_000)).toBeCloseTo(10, 2);
  });

  it('pe calculates correctly', () => {
    expect(peRatio(200, 10)).toBeCloseTo(20, 2);
  });

  it('pe with zero or negative eps returns 0', () => {
    expect(peRatio(200, 0)).toBe(0);
    expect(peRatio(200, -5)).toBe(0);
  });
});

describe('CAGR', () => {
  it('calculates correctly', () => {
    // 10,000 → 20,000 in 5 years ≈ 14.87%
    expect(cagr(10_000, 20_000, 5)).toBeCloseTo(0.1487, 3);
  });

  it('zero begin value returns 0', () => {
    expect(cagr(0, 20_000, 5)).toBe(0);
  });
});

describe('Real Return', () => {
  it('exact Fisher equation', () => {
    // (1.10)/(1.06) - 1 ≈ 3.77%
    expect(realReturnExact(0.10, 0.06)).toBeCloseTo(0.0377, 3);
  });
});

describe('Rule of 72', () => {
  it('12% → 6 years doubling', () => {
    expect(ruleOf72(12)).toBeCloseTo(6, 1);
  });
});

describe('Budget Balance', () => {
  it('calculates remaining correctly', () => {
    const result = budgetBalance(5_000, [1_000, 800, 600]);
    expect(result.total).toBe(2_400);
    expect(result.remaining).toBe(2_600);
    expect(result.isOverBudget).toBe(false);
  });

  it('detects over-budget', () => {
    const result = budgetBalance(1_000, [500, 600, 100]);
    expect(result.isOverBudget).toBe(true);
  });
});
