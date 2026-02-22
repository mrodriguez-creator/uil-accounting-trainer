# UIL Accounting Trainer

A complete, interactive web application for UIL Accounting test preparation. Covers ~95% of actual UIL test content across 16 practice modules with a guided training path.

**Live Site:** [https://mrodriguez-creator.github.io/uil-accounting-trainer/](https://mrodriguez-creator.github.io/uil-accounting-trainer/)

## Features

### Guided Training Path
Sequential progression through all 16 modules — students must score **80% accuracy** on the current module before unlocking the next one. Visual progress tracking with locked/active/completed states and a confetti celebration on full completion.

### 16 Practice Modules

| # | Module | Type | Description |
|---|--------|------|-------------|
| 1 | Flashcards | Study | 21 interactive cards covering DEAD CORL, C-DID, CARPET-W-FACTR, and more |
| 2 | Account Classification Quiz | Multiple Choice | 10-question quiz on account types and normal balances |
| 3 | True/False Quiz | Quiz | 25 questions sourced from real UIL accounting tests with explanations |
| 4 | Debit/Credit Practice | Interactive | Normal balances, increase/decrease rules, and transaction analysis |
| 5 | Worksheet Columns | Quiz | Extend accounts to Income Statement or Balance Sheet columns |
| 6 | GAAP Concepts Matching | Matching | Match descriptions to accounting concepts, principles & assumptions |
| 7 | Closing Codes Quiz | Quiz | Permanent vs temporary accounts, C-DID closing entries with UIL codes |
| 8 | Financial Statement Classification | Quiz | Identify which statement(s) each item appears on (BS/IS/SCOE) |
| 9 | Special Journals | Multi-Select | Match transactions to correct journal columns (A-R format) |
| 10 | Accounting Equation & Capital | Calculation | Multi-year capital account problems and A=L+OE transaction analysis |
| 11 | Gross Profit Calculator | Step-by-Step | Compute Net Sales, COGS, and Gross Profit with full income statement chain |
| 12 | Bank Reconciliation | Step-by-Step | Reconcile bank & book sides — deposits in transit, outstanding checks |
| 13 | Petty Cash | Step-by-Step | Fund management — vouchers, replenishment, cash over/short |
| 14 | Sales Tax Calculations | Step-by-Step | Monthly scenarios tracking cash, A/R, sales & tax payable |
| 15 | Payroll Practice | Step-by-Step | Gross pay calculations, employer payroll taxes, entry classification |
| 16 | Adjusting Entries | Hybrid | Insurance, supplies, inventory & accrued revenue adjustments |

### Additional Features
- **5 Lessons** covering GAAP, Worksheet, Gross Profit, Bank Rec, and Payroll concepts
- **Math Practice** — 45 timed arithmetic problems for speed training
- **Progress Tracking** — Points, accuracy, and completion stats saved in localStorage
- **Mobile Responsive** — Works on all screen sizes with dropdown navigation

## Quick Start

### View Live Site
Visit: [https://mrodriguez-creator.github.io/uil-accounting-trainer/](https://mrodriguez-creator.github.io/uil-accounting-trainer/)

### Run Locally
1. Clone this repository
2. Open `index.html` in any web browser
3. Start studying!

No server, frameworks, or build tools required — pure HTML/CSS/JavaScript.

## Architecture

Multi-page static site with shared CSS/JS:

```
index.html                  # Homepage with stats dashboard
training-path.html          # Guided sequential training
lessons.html                # 5 lesson pages
flashcards.html             # Flashcard study
quiz.html / truefalse.html  # Quizzes
[module].html               # 13 practice module pages
css/shared.css              # All styles
js/shared.js                # Progress tracker, utilities
js/navbar.js                # Dynamic navigation
js/[module].js              # Module-specific logic
```

Progress is stored in `localStorage` with per-module keys (`dcTotalCorrect`, `wsTotalCompleted`, etc.) and a global `uilProgress` object.

## UIL Test Coverage

Based on analysis of actual UIL tests (2022-2026), this trainer covers approximately **95% of test content**:

- Debit/Credit rules & normal balances
- Closing entries (C-DID codes)
- Worksheet column placement
- GAAP concepts & matching
- Gross profit & income statement calculations
- Bank reconciliation
- Petty cash & change fund
- Payroll calculations
- Accounting equation & capital accounts
- Special journal classification
- Financial statement classification
- Sales tax calculations
- Adjusting entries

## For Students

1. **Start with the Training Path** — it guides you through modules in the right order
2. Score **80% accuracy** on each module to unlock the next
3. Use **Flashcards** and **Lessons** to learn concepts before practicing
4. Practice **calculation modules** (Gross Profit, Bank Rec, Sales Tax) repeatedly
5. Track your progress on the homepage dashboard

## Browser Compatibility

- Chrome / Edge
- Firefox
- Safari
- Mobile browsers

## Content Sources

All content based on official UIL Accounting materials:
- UIL Study Packets (2020-2026)
- UIL Accounting Handbook (2025-2026)
- Past competition tests (2022-2026)

## License

Created for educational purposes. All UIL content belongs to the University Interscholastic League.

---

**Built for UIL Accounting Students at Alpine ISD**
