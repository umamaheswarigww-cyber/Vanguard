# FinQuest India 🇮🇳
> **Interactive Financial Literacy for Grade 11–12 Students**  
> *Addressing the Vanguard India "Community Stewardship — Empowering the Next Generation Through Financial Literacy" Challenge*

[![React 18](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Tests-39%20Passing-brightgreen.svg)](https://vitest.dev)
[![Bilingual](https://img.shields.io/badge/Languages-English%20%7C%20Telugu-teal.svg)](#bilingual-support)

---

## 🌟 Executive Summary & Product Mission

**FinQuest India** transforms financial education for Grade 11–12 students, specifically addressing underserved communities across Hyderabad. Instead of treating financial literacy as passive memorization or raw mathematical tools, FinQuest creates **an active learning laboratory**:
- **Educate, Never Recommend:** Neutral simulations with 100% fictional rupees. Zero product endorsements, zero stock tips.
- **Mechanism Over Jargon:** Demystifies why markets move, how compounding snowballs, how inflation erodes purchasing power, and how mutual fund NAV is calculated.
- **Safe Experimentation:** Fully interactive sandboxes (Budget Lab, Compound Explorer, Inflation Visualizer, FD Calculator, SIP Calculator, NAV Lab, and Scam Detective).
- **Deep Bilingual Inclusivity:** Native English and Telugu (తెలుగు) support throughout all lessons, activity instructions, questions, and feedback.
- **NGO & Educator Integration:** Cohort reporting and learning gap tracking designed for community facilitators targeting 1,500+ students.

---

## 🏛️ Traceability to the 4 Vanguard Problem Statement Pillars

| Problem Statement Pillar | Product Response & Lessons | Interactive Simulator / Lab | Verification & Tests |
|---|---|---|---|
| **1. Plan and Budget** | • Needs vs. Wants<br>• Opportunity Cost<br>• Balancing income vs. expenses | **Budget Lab:** Allocate fictional ₹5,000, trigger emergency medical/phone repairs, rebalance dynamically without debt. | `budgetBalance()` unit tests; boundary checks; deficit state detection. |
| **2. Save and Manage** | • Simple vs. Compound Interest<br>• Inflation & Purchasing Power<br>• Fixed Deposits & Banking | **Compound Explorer:** 20-year snowball chart.<br>**Inflation Visualizer:** Real vs nominal value.<br>**FD Calculator:** Quarterly compounding. | Verified blueprint math: ₹10k @ 10% 20y = ₹67,275; ₹1L @ 6% 10y = ₹55,839; ₹50k @ 7% 3y = ₹61,572. |
| **3. Understand Investing** | • Businesses & Capital<br>• Order Books & Price Discovery<br>• Mutual Funds & Units<br>• SIP & Rupee-Cost Averaging | **NAV Lab:** Recalculate scheme NAV from stock prices.<br>**SIP Lab:** Toggle end-of-month and start-of-month timing. | Verified blueprint math: ₹2k/mo @ 1%/mo × 120 = ₹4,60,077 (end) / ₹4,64,678 (beginning). Debunked "more buyers than sellers" & "low NAV = cheap" myths. |
| **4. Stay Financially Safe** | • Phishing & Social Engineering<br>• UPI PIN & QR Misconceptions<br>• Official Incident Response | **Scam Detective Arena:** Real-life WhatsApp, SMS, and Telegram phishing cases; red-flag breakdowns; 1930 Helpline. | Scenario path unit verification; guidance cross-referenced with cybercrime.gov.in. |

---

## 🧮 Verified Financial Mathematics & Conventions

All financial calculations in FinQuest India are implemented as pure TypeScript functions in `src/lib/finance/formulas.ts` and independently verified via unit tests (`src/tests/finance.test.ts`):

1. **Simple Interest:**  
   $$I = P \times r \times t \quad \implies \quad M = P + I$$
   *Blueprint Benchmark:* ₹10,000 at 10% for 20 years = ₹20,000 interest, ₹30,000 total.

2. **Compound Interest (Annual & Periodic):**  
   $$A = P \times \left(1 + \frac{r}{n}\right)^{n \times t}$$
   *Blueprint Benchmark:* ₹10,000 at 10% annually for 20 years $\approx$ **₹67,275** (more than double simple interest!).

3. **Bank Fixed Deposit (Quarterly Compounding):**  
   $$M = P \times \left(1 + \frac{r}{4}\right)^{4t}$$
   *Blueprint Benchmark:* ₹50,000 at 7% p.a. for 3 years $\approx$ **₹61,572**.

4. **Inflation & Constant Purchasing Power:**  
   $$\text{Present Equivalent} = \frac{\text{Future Nominal Amount}}{(1 + i)^t}$$
   *Blueprint Benchmark:* ₹1,00,000 kept in cash at 6% constant inflation for 10 years $\approx$ **₹55,839** in today's purchasing power.

5. **SIP Future Value (Both Conventions Tested):**  
   - *End-of-Month (Ordinary Annuity):* $FV = P \times \frac{(1+r)^n - 1}{r} \approx$ **₹4,60,077** (for ₹2,000/mo, 1%/mo, 120 periods).  
   - *Beginning-of-Month (Annuity Due):* $FV_{\text{due}} = FV \times (1+r) \approx$ **₹4,64,678**.

6. **Net Asset Value (NAV):**  
   $$\text{NAV} = \frac{\text{Scheme Assets} - \text{Liabilities}}{\text{Units Outstanding}}$$

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React 18, TypeScript 5, Vite 5
- **Styling & Design System:** TailwindCSS 3.4 (custom navy `#14253D`, teal `#11B7A3`, coral `#FF765E`, cream `#FAF8F3`)
- **Routing:** React Router v6
- **Icons & Visuals:** Lucide React + custom inline SVG hero illustration
- **Charts:** Recharts
- **Testing:** Vitest 5 + JSDOM + @testing-library/react (39 tests)
- **State & Persistence:** React Context + `localStorage` (truthfully labeled as local device storage)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24.14.0)
- npm 9+ (tested on npm 11.9.0)

### Quick Run Commands

```bash
# 1. Navigate to project directory
cd finquest-india

# 2. Install dependencies (if not already installed)
npm install

# 3. Run all unit tests
npm test

# 4. Start local development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## ⏱️ 3-Minute Hackathon Demonstration Script

1. **0:00–0:25 — The Learner Dilemma:**  
   Introduce Priya, a Grade 11 student in Hyderabad. Highlight that students use UPI every day but have never been taught budgeting, interest mechanics, or digital scam tricks.
2. **0:25–1:15 — The Budget Mission (Pillar 1):**  
   Demonstrate the **Budget Lab**. Show Priya allocating her ₹5,000 income. Trigger the surprise ₹800 dental bill. Show live deficit alert, rebalance discretionary wants to survive without debt, and earn the mastery check.
3. **1:15–1:55 — The Compounding & SIP Labs (Pillars 2 & 3):**  
   Open the **Compound Interest Explorer** (show how ₹10,000 grows to ₹67,275 vs ₹30,000). Switch to **NAV Lab** and **SIP Calculator**; explain Rupee-Cost Averaging and emphasize that SIP does NOT guarantee profits.
4. **1:55–2:30 — Scam Detective (Pillar 4):**  
   Inspect a real-world phishing scenario on WhatsApp. Demonstrate why entering a UPI PIN to "receive money" is a trap, and highlight the national 1930 cyber helpline.
5. **2:30–3:00 — Proof of Understanding & NGO View:**  
   Show the **Progress Page** with objective evidence tracking, toggle the **NGO Facilitator Dashboard** (tracking 1,500 students in Hyderabad), switch language to Telugu (తెలుగు), and review regulatory citations.

---

## 🛡️ Authoritative Source Register

All date-sensitive financial facts and regulatory references cite official primary sources:
1. **SEBI Investor Education Material:** https://investor.sebi.gov.in/iematerial.html
2. **SEBI Mutual Fund Categorization Circular (Feb 2026):** https://www.sebi.gov.in
3. **AMFI Investor Knowledge Center & TER:** https://www.amfiindia.com
4. **DICGC Deposit Insurance FAQs:** https://www.dicgc.org.in/FAQs
5. **National Cyber Crime Reporting Portal (Helpline 1930):** https://cybercrime.gov.in
6. **Income Tax Department Capital Gains Provisions:** https://www.incometaxindia.gov.in

---

## 🤖 AI Use Disclosure

This project was developed by pairing with an AI assistant in strict compliance with the hackathon blueprint:
- **Architecture & Financial Math:** Architected according to the Vanguard India Problem Statement and verified via pure formula test suites.
- **Educational Content:** Curated, structured, and checked against official SEBI/AMFI/RBI/DICGC regulations.
- **Code:** Production TypeScript, React, and Tailwind CSS.
