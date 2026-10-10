// ============================================================
// FINQUEST INDIA — COMPANY FINANCIALS LAB
// Interactive Income Statement (P&L) and Balance Sheet Simulator
// Educational only — not investment advice
// ============================================================
import { useState, useMemo } from 'react';
import { formatINR } from '@/lib/finance/formulas';

type ViewMode = 'pnl' | 'balancesheet' | 'cashflow';

export function CompanyFinancialsLab() {
  const [viewMode, setViewMode] = useState<ViewMode>('pnl');

  // P&L State (in ₹ Lakhs)
  const [revenue, setRevenue] = useState(50); // ₹50 Lakhs
  const [cogsPercent, setCogsPercent] = useState(40); // 40% of revenue
  const [operatingExpenses, setOperatingExpenses] = useState(12); // ₹12 Lakhs
  const [depreciation, setDepreciation] = useState(3); // ₹3 Lakhs
  const [interestExpense, setInterestExpense] = useState(2); // ₹2 Lakhs
  const [taxRatePercent, setTaxRatePercent] = useState(25); // 25% tax

  // Calculated P&L
  const pnl = useMemo(() => {
    const cogs = (revenue * cogsPercent) / 100;
    const grossProfit = revenue - cogs;
    const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0;

    const ebitda = grossProfit - operatingExpenses;
    const ebitdaMargin = revenue > 0 ? (ebitda / revenue) * 100 : 0;

    const ebit = ebitda - depreciation;
    const ebt = ebit - interestExpense;
    const tax = ebt > 0 ? (ebt * taxRatePercent) / 100 : 0;
    const netProfit = ebt - tax;
    const netMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;

    return {
      cogs,
      grossProfit,
      grossMargin,
      ebitda,
      ebitdaMargin,
      ebit,
      ebt,
      tax,
      netProfit,
      netMargin,
    };
  }, [revenue, cogsPercent, operatingExpenses, depreciation, interestExpense, taxRatePercent]);

  // Balance Sheet Simulation State (in ₹ Lakhs)
  const [cash, setCash] = useState(15);
  const [inventory, setInventory] = useState(10);
  const [receivables, setReceivables] = useState(8);
  const [fixedAssets, setFixedAssets] = useState(40);

  const [payables, setPayables] = useState(7);
  const [bankLoans, setBankLoans] = useState(25);
  const [shareCapital, setShareCapital] = useState(20);
  // Retained earnings balances the sheet: Total Assets - (Payables + BankLoans + ShareCapital)
  const totalAssets = cash + inventory + receivables + fixedAssets;
  const totalLiabilities = payables + bankLoans;
  const retainedEarnings = totalAssets - totalLiabilities - shareCapital;
  const totalEquity = shareCapital + retainedEarnings;

  // Preset scenarios
  const applyScenario = (type: 'retail' | 'software' | 'struggling') => {
    if (type === 'retail') {
      setRevenue(80);
      setCogsPercent(65);
      setOperatingExpenses(15);
      setDepreciation(2);
      setInterestExpense(1.5);
    } else if (type === 'software') {
      setRevenue(60);
      setCogsPercent(15);
      setOperatingExpenses(30);
      setDepreciation(1);
      setInterestExpense(0.5);
    } else if (type === 'struggling') {
      setRevenue(35);
      setCogsPercent(60);
      setOperatingExpenses(15);
      setDepreciation(3);
      setInterestExpense(5);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-700 to-navy-600 text-white rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-1">🏢 Company Financials Lab</h3>
        <p className="text-blue-200 text-sm">
          Explore how a business earns money (Income Statement) and what it owns vs owes (Balance Sheet).
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        <button
          onClick={() => setViewMode('pnl')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            viewMode === 'pnl'
              ? 'bg-navy-600 text-white shadow-sm'
              : 'bg-white text-gray-600 hover:bg-gray-100 border'
          }`}
        >
          📊 Income Statement (P&L)
        </button>
        <button
          onClick={() => setViewMode('balancesheet')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            viewMode === 'balancesheet'
              ? 'bg-navy-600 text-white shadow-sm'
              : 'bg-white text-gray-600 hover:bg-gray-100 border'
          }`}
        >
          ⚖️ Balance Sheet
        </button>
        <button
          onClick={() => setViewMode('cashflow')}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            viewMode === 'cashflow'
              ? 'bg-navy-600 text-white shadow-sm'
              : 'bg-white text-gray-600 hover:bg-gray-100 border'
          }`}
        >
          🌊 Cash Flow Explained
        </button>
      </div>

      {/* ===== INCOME STATEMENT VIEW ===== */}
      {viewMode === 'pnl' && (
        <div className="space-y-6">
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-500">Quick Scenarios:</span>
            <button
              onClick={() => applyScenario('software')}
              className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-lg hover:bg-teal-100 border border-teal-200"
            >
              💻 SaaS Tech Company (High Gross Margin)
            </button>
            <button
              onClick={() => applyScenario('retail')}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100 border border-blue-200"
            >
              🛒 Kirana / Retail Supermarket (High Volume, Low Margin)
            </button>
            <button
              onClick={() => applyScenario('struggling')}
              className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-lg hover:bg-red-100 border border-red-200"
            >
              ⚠️ Heavy Debt / Struggling Firm
            </button>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-2xl shadow-card p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-700">Annual Revenue (Sales)</label>
                <span className="text-sm font-bold text-navy-600">₹{revenue} Lakhs</span>
              </div>
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={revenue}
                onChange={e => setRevenue(Number(e.target.value))}
                className="w-full accent-navy-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-700">Cost of Goods Sold (COGS %)</label>
                <span className="text-sm font-bold text-orange-600">{cogsPercent}% (₹{pnl.cogs.toFixed(1)}L)</span>
              </div>
              <input
                type="range"
                min={5}
                max={85}
                step={5}
                value={cogsPercent}
                onChange={e => setCogsPercent(Number(e.target.value))}
                className="w-full accent-orange-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-700">Operating Expenses (Salaries, Rent, Marketing)</label>
                <span className="text-sm font-bold text-gray-700">₹{operatingExpenses} Lakhs</span>
              </div>
              <input
                type="range"
                min={1}
                max={60}
                step={1}
                value={operatingExpenses}
                onChange={e => setOperatingExpenses(Number(e.target.value))}
                className="w-full accent-gray-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-700">Depreciation & Amortization</label>
                <span className="text-sm font-bold text-gray-700">₹{depreciation} Lakhs</span>
              </div>
              <input
                type="range"
                min={0}
                max={15}
                step={0.5}
                value={depreciation}
                onChange={e => setDepreciation(Number(e.target.value))}
                className="w-full accent-gray-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-700">Interest on Debt / Loans</label>
                <span className="text-sm font-bold text-red-600">₹{interestExpense} Lakhs</span>
              </div>
              <input
                type="range"
                min={0}
                max={20}
                step={0.5}
                value={interestExpense}
                onChange={e => setInterestExpense(Number(e.target.value))}
                className="w-full accent-red-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-700">Corporate Tax Rate</label>
                <span className="text-sm font-bold text-gray-700">{taxRatePercent}%</span>
              </div>
              <input
                type="range"
                min={15}
                max={35}
                step={1}
                value={taxRatePercent}
                onChange={e => setTaxRatePercent(Number(e.target.value))}
                className="w-full accent-gray-500"
              />
            </div>
          </div>

          {/* Interactive P&L Statement Cascade */}
          <div className="bg-white rounded-2xl shadow-card p-6 overflow-hidden">
            <h4 className="font-bold text-navy-600 mb-4 text-base border-b pb-2">
              📜 Statement of Profit and Loss (P&L Waterfall)
            </h4>

            <div className="space-y-2 text-sm">
              {/* Revenue */}
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-blue-50 font-semibold text-blue-900">
                <span>Revenue from Operations (Topline)</span>
                <span>₹{revenue.toFixed(2)} Lakhs</span>
              </div>

              {/* - COGS */}
              <div className="flex justify-between items-center px-4 py-1.5 text-gray-600">
                <span>(−) Cost of Goods Sold (Raw materials, direct labor)</span>
                <span>−₹{pnl.cogs.toFixed(2)} Lakhs</span>
              </div>

              {/* = Gross Profit */}
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-teal-50 border-l-4 border-teal-500 font-bold text-teal-900">
                <div>
                  <span>(=) Gross Profit</span>
                  <span className="ml-2 text-xs font-normal text-teal-700">({pnl.grossMargin.toFixed(1)}% Gross Margin)</span>
                </div>
                <span>₹{pnl.grossProfit.toFixed(2)} Lakhs</span>
              </div>

              {/* - Operating Expenses */}
              <div className="flex justify-between items-center px-4 py-1.5 text-gray-600">
                <span>(−) Operating Expenses (Salaries, Marketing, Rent)</span>
                <span>−₹{operatingExpenses.toFixed(2)} Lakhs</span>
              </div>

              {/* = EBITDA */}
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-amber-50 border-l-4 border-amber-500 font-semibold text-amber-900">
                <div>
                  <span>(=) EBITDA (Operating Cash Earnings)</span>
                  <span className="ml-2 text-xs font-normal text-amber-700">({pnl.ebitdaMargin.toFixed(1)}% EBITDA Margin)</span>
                </div>
                <span>₹{pnl.ebitda.toFixed(2)} Lakhs</span>
              </div>

              {/* - Depreciation */}
              <div className="flex justify-between items-center px-4 py-1.5 text-gray-600">
                <span>(−) Depreciation & Amortization (Wear & tear of assets)</span>
                <span>−₹{depreciation.toFixed(2)} Lakhs</span>
              </div>

              {/* = EBIT */}
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-gray-50 font-semibold text-gray-800">
                <span>(=) EBIT (Operating Profit)</span>
                <span>₹{pnl.ebit.toFixed(2)} Lakhs</span>
              </div>

              {/* - Interest */}
              <div className="flex justify-between items-center px-4 py-1.5 text-gray-600">
                <span>(−) Finance Costs / Interest Expense</span>
                <span>−₹{interestExpense.toFixed(2)} Lakhs</span>
              </div>

              {/* = EBT */}
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-gray-50 font-semibold text-gray-800">
                <span>(=) Profit Before Tax (PBT / EBT)</span>
                <span>₹{pnl.ebt.toFixed(2)} Lakhs</span>
              </div>

              {/* - Tax */}
              <div className="flex justify-between items-center px-4 py-1.5 text-gray-600">
                <span>(−) Current Tax Expense ({taxRatePercent}%)</span>
                <span>−₹{pnl.tax.toFixed(2)} Lakhs</span>
              </div>

              {/* = Net Profit */}
              <div className={`flex justify-between items-center p-3.5 rounded-xl border-2 font-extrabold text-base ${
                pnl.netProfit >= 0
                  ? 'bg-green-50 border-green-500 text-green-900'
                  : 'bg-red-50 border-red-500 text-red-900'
              }`}>
                <div>
                  <span>(=) Net Profit / PAT (Bottomline)</span>
                  <span className="ml-2 text-xs font-semibold">
                    ({pnl.netMargin.toFixed(1)}% Net Margin)
                  </span>
                </div>
                <span className="text-xl">
                  {pnl.netProfit >= 0 ? '+' : ''}₹{pnl.netProfit.toFixed(2)} Lakhs
                </span>
              </div>
            </div>
          </div>

          {/* Educational Insight Card */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 space-y-1">
            <p className="font-bold text-sm text-amber-900">💡 Student Key Concepts:</p>
            <p>• <strong>Topline (Revenue) vs Bottomline (Net Profit):</strong> High revenue does not guarantee profit if expenses or interest are too high.</p>
            <p>• <strong>Gross Margin:</strong> Measures production efficiency. Software typically has 80%+ gross margin; grocery stores often have 15-20%.</p>
            <p>• <strong>Depreciation:</strong> A non-cash expense that accounts for wear-and-tear of machinery over its useful life.</p>
          </div>
        </div>
      )}

      {/* ===== BALANCE SHEET VIEW ===== */}
      {viewMode === 'balancesheet' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
            <p className="font-bold text-base mb-1">⚖️ The Fundamental Accounting Equation:</p>
            <p className="font-mono text-base font-bold text-blue-800">Assets = Liabilities + Shareholders' Equity</p>
            <p className="text-xs text-blue-700 mt-1">
              Everything the company owns (Assets) was paid for either by borrowing money (Liabilities) or by the owners' money + accumulated profits (Equity).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ASSETS SIDE */}
            <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-blue-500 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h4 className="font-bold text-blue-900 text-base">Assets (What the Company Owns)</h4>
                <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded">
                  Total: ₹{totalAssets}L
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Current Assets (Liquid / &lt;1 Year)</p>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Cash & Bank Balances</span>
                    <span className="text-blue-700">₹{cash} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={cash}
                    onChange={e => setCash(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Inventory (Stock of goods to sell)</span>
                    <span className="text-blue-700">₹{inventory} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={40}
                    value={inventory}
                    onChange={e => setInventory(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Accounts Receivable (Customer dues)</span>
                    <span className="text-blue-700">₹{receivables} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={30}
                    value={receivables}
                    onChange={e => setReceivables(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide pt-2">Non-Current Assets (Long-term)</p>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Property, Plant & Equipment (PPE)</span>
                    <span className="text-blue-700">₹{fixedAssets} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={fixedAssets}
                    onChange={e => setFixedAssets(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
              </div>
            </div>

            {/* LIABILITIES & EQUITY SIDE */}
            <div className="bg-white rounded-2xl shadow-card p-6 border-t-4 border-teal-500 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h4 className="font-bold text-teal-900 text-base">Liabilities & Equity (How it was Funded)</h4>
                <span className="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-1 rounded">
                  Total: ₹{totalLiabilities + totalEquity}L
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Liabilities (What it Owes)</p>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Accounts Payable (Dues to suppliers)</span>
                    <span className="text-orange-700">₹{payables} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={25}
                    value={payables}
                    onChange={e => setPayables(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Bank Borrowings & Term Loans</span>
                    <span className="text-red-700">₹{bankLoans} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={60}
                    value={bankLoans}
                    onChange={e => setBankLoans(Number(e.target.value))}
                    className="w-full accent-red-500"
                  />
                </div>

                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide pt-2">Shareholders' Equity (Net Worth)</p>
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Initial Share Capital</span>
                    <span className="text-teal-700">₹{shareCapital} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    value={shareCapital}
                    onChange={e => setShareCapital(Number(e.target.value))}
                    className="w-full accent-teal-600"
                  />
                </div>

                <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="flex justify-between text-xs font-bold text-teal-900 mb-1">
                    <span>Retained Earnings (Accumulated Profits)</span>
                    <span>₹{retainedEarnings} Lakhs</span>
                  </div>
                  <p className="text-xs text-teal-700">
                    Auto-balances the balance sheet. Profits earned by the company that were reinvested rather than paid as dividends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Equal balance verification banner */}
          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 text-center">
            <span className="text-green-800 font-bold text-sm">
              ✅ Total Assets (₹{totalAssets}L) = Total Liabilities (₹{totalLiabilities}L) + Equity (₹{totalEquity}L)
            </span>
          </div>
        </div>
      )}

      {/* ===== CASH FLOW VIEW ===== */}
      {viewMode === 'cashflow' && (
        <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
          <h4 className="font-bold text-navy-600 text-base">🌊 Cash Flow Statement — Why Profit ≠ Cash</h4>
          <p className="text-sm text-gray-600">
            A company can report ₹10 Lakhs in "Net Profit" on paper, yet have <strong>zero cash</strong> in the bank if its customers have not paid their bills yet!
            The Cash Flow Statement tracks actual liquid cash entering and exiting the bank account across three activities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 space-y-2">
              <span className="font-bold text-sm text-blue-900 block">1. Operating Cash Flow (CFO)</span>
              <p className="text-xs text-blue-800">
                Cash generated from day-to-day business activities (selling goods, receiving cash from customers, paying vendor bills and employee salaries).
              </p>
              <span className="text-xs font-semibold text-blue-700 block">Healthy sign: Consistently positive.</span>
            </div>

            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50 space-y-2">
              <span className="font-bold text-sm text-purple-900 block">2. Investing Cash Flow (CFI)</span>
              <p className="text-xs text-purple-800">
                Cash spent on or gained from long-term assets (buying factory machinery, opening new stores, purchasing software licenses).
              </p>
              <span className="text-xs font-semibold text-purple-700 block">Growing companies typically have negative CFI (investing for future).</span>
            </div>

            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 space-y-2">
              <span className="font-bold text-sm text-amber-900 block">3. Financing Cash Flow (CFF)</span>
              <p className="text-xs text-amber-800">
                Cash movement between the business and its funders (taking bank loans, issuing fresh shares, repaying debt, paying dividends).
              </p>
              <span className="text-xs font-semibold text-amber-700 block">Shows how the company finances its operations.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
