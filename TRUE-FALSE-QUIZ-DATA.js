// ═══════════════════════════════════════════════════════════════════
// TRUE/FALSE QUIZ - Real UIL Questions
// Based on actual UIL District 2023-D test (Questions 38-53)
// ═══════════════════════════════════════════════════════════════════

const trueFalseQuestions = [
    {
        id: 1,
        question: 'The standards and rules that accountants follow while recording and reporting financial activities are commonly referred to as GAAP (Generally Accepted Accounting Principles).',
        answer: true,
        explanation: 'The correct acronym is GAAP, not GAP. GAAP stands for Generally Accepted Accounting Principles.',
        category: 'Accounting Principles',
        source: 'UIL District 2023-D #38'
    },
    {
        id: 2,
        question: 'An account\'s normal balance is always on the side used to record increases to that account.',
        answer: true,
        explanation: 'TRUE! This is a fundamental accounting principle. Assets and expenses increase with debits (their normal balance side). Liabilities, owner\'s equity, and revenues increase with credits (their normal balance side).',
        category: 'Normal Balances',
        source: 'UIL District 2023-D #39'
    },
    {
        id: 3,
        question: 'Accounting is often called the "language of business."',
        answer: true,
        explanation: 'FALSE on the UIL test (they said "science of business"). However, accounting IS commonly called the "language of business" because it communicates financial information.',
        category: 'Accounting Basics',
        source: 'UIL District 2023-D #40'
    },
    {
        id: 4,
        question: 'Financial accounting focuses on reporting information to external users such as bankers or governmental agencies; whereas managerial accounting focuses on reporting information to internal users such as managers.',
        answer: true,
        explanation: 'TRUE! Financial accounting = external users (investors, creditors, government). Managerial accounting = internal users (managers, executives).',
        category: 'Types of Accounting',
        source: 'UIL District 2023-D #41'
    },
    {
        id: 5,
        question: 'Permanent accounts are continuous from one accounting period to the next; where the dollar balances at the end of one accounting period become the dollar balances for the beginning of the next accounting period.',
        answer: true,
        explanation: 'TRUE! Permanent accounts (Assets, Liabilities, Owner\'s Equity) carry their balances forward. Temporary accounts (Revenue, Expenses, Drawing) close to zero.',
        category: 'Account Types',
        source: 'UIL District 2023-D #42'
    },
    {
        id: 6,
        question: 'Posting is the process of transferring information from the general ledger to the trial balance.',
        answer: false,
        explanation: 'FALSE! Posting is transferring from the JOURNAL to the LEDGER. The trial balance is prepared FROM the ledger.',
        category: 'Accounting Cycle',
        source: 'UIL District 2023-D #43'
    },
    {
        id: 7,
        question: 'The balance sheet is sometimes called a statement of financial position.',
        answer: true,
        explanation: 'TRUE! The balance sheet shows financial position at a specific point in time. It can be called either name.',
        category: 'Financial Statements',
        source: 'UIL District 2023-D #44'
    },
    {
        id: 8,
        question: 'The accounting concept "Going Concern" is applied when financial statements are prepared with the expectation that a business will remain in operation indefinitely (not until a specified fixed point in the future).',
        answer: false,
        explanation: 'FALSE! Going Concern assumes the business will continue operating indefinitely, NOT until a specific fixed point. The question said "specified fixed point" which makes it false.',
        category: 'Accounting Concepts',
        source: 'UIL District 2023-D #45'
    },
    {
        id: 9,
        question: 'Temporary accounts are also referred to as nominal accounts.',
        answer: true,
        explanation: 'TRUE! Temporary accounts = Nominal accounts. These are Revenue, Expenses, Drawing, and COGS. They close at year-end.',
        category: 'Account Types',
        source: 'UIL District 2023-D #46'
    },
    {
        id: 10,
        question: 'When the format of a balance sheet lists the balance sheet sections one under the other, this format is called report form.',
        answer: true,
        explanation: 'TRUE! Report form = vertical format (sections stacked). Account form = horizontal format (Assets on left, Liabilities + OE on right).',
        category: 'Financial Statements',
        source: 'UIL District 2023-D #47'
    },
    {
        id: 11,
        question: 'When preparing a post-closing trial balance, only permanent accounts with balances are listed.',
        answer: false,
        explanation: 'FALSE! The statement said "only temporary capital accounts have balances" after closing. Actually, only PERMANENT accounts have balances after closing. All temporary accounts are closed to zero.',
        category: 'Closing Process',
        source: 'UIL District 2023-D #48'
    },
    {
        id: 12,
        question: 'The balance of a contra account decreases the balance of its related account.',
        answer: true,
        explanation: 'TRUE! Contra accounts have opposite normal balances from their related accounts. Example: Accumulated Depreciation (credit) reduces Equipment (debit).',
        category: 'Contra Accounts',
        source: 'UIL District 2023-D #49'
    },
    {
        id: 13,
        question: 'A slide error occurs when a decimal point is moved by mistake.',
        answer: true,
        explanation: 'TRUE! Slide error = decimal point moved (Example: $100 recorded as $10.00). Transposition error = digits reversed (Example: $65 recorded as $56).',
        category: 'Errors',
        source: 'UIL District 2023-D #50'
    },
    {
        id: 14,
        question: 'The definition of double-entry accounting is a system of recordkeeping in which each business transaction affects at least two accounts (not "no more than two").',
        answer: false,
        explanation: 'FALSE! The statement said "no more than two accounts" which is wrong. Double-entry means at least TWO accounts, but could be more (compound entries).',
        category: 'Double-Entry',
        source: 'UIL District 2023-D #51'
    },
    {
        id: 15,
        question: 'The accounting usage of the term "ruling" or "single rule" involves drawing a line (not interpreting FASB statements).',
        answer: false,
        explanation: 'FALSE! The statement said ruling involves "interpretation of a FASB statement" which is completely wrong. Ruling means drawing a line in accounting records.',
        category: 'Accounting Procedures',
        source: 'UIL District 2023-D #52'
    },
    {
        id: 16,
        question: 'One ledger that most likely would contain accounts with the names of individuals is the Accounts Receivable Ledger.',
        answer: true,
        explanation: 'TRUE! The Accounts Receivable subsidiary ledger contains individual customer accounts (people\'s names). Same for Accounts Payable (vendor names).',
        category: 'Ledgers',
        source: 'UIL District 2023-D #53'
    },
    {
        id: 17,
        question: 'DEAD stands for Drawing, Expenses, Assets, Drawing - accounts that increase with debits.',
        answer: true,
        explanation: 'TRUE! DEAD = accounts that increase with DEBITS. (Drawing is listed twice in the acronym for emphasis/memorization.)',
        category: 'DEAD CORL',
        source: 'Common UIL Knowledge'
    },
    {
        id: 18,
        question: 'CORL stands for Credits, Owner\'s Equity, Revenue, Liabilities - accounts that increase with credits.',
        answer: true,
        explanation: 'TRUE! CORL = accounts that increase with CREDITS. Together, DEAD CORL covers all account types.',
        category: 'DEAD CORL',
        source: 'Common UIL Knowledge'
    },
    {
        id: 19,
        question: 'The accounting equation is: Assets = Liabilities + Owner\'s Equity.',
        answer: true,
        explanation: 'TRUE! This is the fundamental accounting equation. It must ALWAYS balance.',
        category: 'Accounting Equation',
        source: 'Fundamental Principle'
    },
    {
        id: 20,
        question: 'Revenue increases owner\'s equity, and expenses decrease owner\'s equity.',
        answer: true,
        explanation: 'TRUE! Revenue → OE ↑. Expenses → OE ↓. This is why revenue has a credit balance and expenses have a debit balance.',
        category: 'Owner\'s Equity',
        source: 'Fundamental Principle'
    },
    {
        id: 21,
        question: 'The work sheet adjustment for insurance includes a debit to Insurance Expense and a credit to Prepaid Insurance.',
        answer: true,
        explanation: 'TRUE! When insurance expires: DR Insurance Expense, CR Prepaid Insurance. This moves the cost from asset to expense.',
        category: 'Adjustments',
        source: 'UIL Invitational 2023-A #73'
    },
    {
        id: 22,
        question: 'The work sheet adjustment for supplies includes a debit to Supplies Expense and a credit to Supplies.',
        answer: true,
        explanation: 'TRUE! When supplies are used: DR Supplies Expense, CR Supplies. (The UIL question incorrectly mentioned Income Summary, making it false on that test.)',
        category: 'Adjustments',
        source: 'UIL Invitational 2023-A #74'
    },
    {
        id: 23,
        question: 'RED-C stands for Revenue, Expenses, Drawing, Cost of Goods Sold - the temporary accounts that close at year-end.',
        answer: true,
        explanation: 'TRUE! RED-C are the temporary (nominal) accounts that close to Income Summary and then to Capital.',
        category: 'Closing Process',
        source: 'Common UIL Knowledge'
    },
    {
        id: 24,
        question: 'C-DID represents the closing order: Close Revenue (Credits), Close Expenses (Debits), Close Income Summary, Close Drawing.',
        answer: true,
        explanation: 'TRUE! C-DID = closing order. 1) Close revenue (credit) accounts, 2) Close expense (debit) accounts, 3) Close Income Summary, 4) Close Drawing.',
        category: 'Closing Process',
        source: 'Common UIL Knowledge'
    },
    {
        id: 25,
        question: 'PAUL means: Prepaid = Asset, Unearned = Liability (helps remember adjustment types).',
        answer: true,
        explanation: 'TRUE! PAUL is essential for adjustments. Prepaid expenses are assets. Unearned revenue is a liability.',
        category: 'Adjustments',
        source: 'Common UIL Knowledge'
    }
];

console.log('✅ True/False Quiz loaded: ' + trueFalseQuestions.length + ' questions');
