// =====================================================
// DEBIT/CREDIT QUESTION BANK (80+ questions, 3 types)
// Based on real UIL Invitational tests & study materials
// =====================================================

// TYPE 1: Account Normal Balance - "What is the normal balance?"
const dcAccountQuestions = [
    // --- ASSETS (DR) ---
    {id:'a1', type:'account', account:'Cash in Bank', answer:'debit', explanation:'Cash is an Asset. Assets are in DEAD = Debit normal balance.', category:'Assets'},
    {id:'a2', type:'account', account:'Accounts Receivable', answer:'debit', explanation:'A/R is an Asset (money owed TO us). DEAD = Debit.', category:'Assets'},
    {id:'a3', type:'account', account:'Supplies', answer:'debit', explanation:'Supplies is an Asset. DEAD = Debit normal balance.', category:'Assets'},
    {id:'a4', type:'account', account:'Prepaid Insurance', answer:'debit', explanation:'Prepaid Insurance is an Asset (PAUL: Prepaid = Asset). DEAD = Debit.', category:'Assets'},
    {id:'a5', type:'account', account:'Equipment', answer:'debit', explanation:'Equipment is an Asset. DEAD = Debit normal balance.', category:'Assets'},
    {id:'a6', type:'account', account:'Office Furniture', answer:'debit', explanation:'Office Furniture is an Asset. DEAD = Debit.', category:'Assets'},
    {id:'a7', type:'account', account:'Petty Cash', answer:'debit', explanation:'Petty Cash is an Asset. DEAD = Debit.', category:'Assets'},
    {id:'a8', type:'account', account:'Merchandise Inventory', answer:'debit', explanation:'Merchandise Inventory is an Asset. DEAD = Debit.', category:'Assets'},
    {id:'a9', type:'account', account:'Prepaid Rent', answer:'debit', explanation:'Prepaid Rent is an Asset (paid in advance). DEAD = Debit.', category:'Assets'},
    {id:'a10', type:'account', account:'Change Fund', answer:'debit', explanation:'Change Fund is an Asset (cash kept in register). DEAD = Debit.', category:'Assets'},
    {id:'a11', type:'account', account:'Computer Equipment', answer:'debit', explanation:'Computer Equipment is an Asset. DEAD = Debit.', category:'Assets'},
    // --- LIABILITIES (CR) ---
    {id:'a12', type:'account', account:'Accounts Payable', answer:'credit', explanation:'A/P is a Liability (money WE owe). CORL = Credit.', category:'Liabilities'},
    {id:'a13', type:'account', account:'Notes Payable', answer:'credit', explanation:'Notes Payable is a Liability. CORL = Credit normal balance.', category:'Liabilities'},
    {id:'a14', type:'account', account:'Salaries Payable', answer:'credit', explanation:'Salaries Payable is a Liability (owed to employees). CORL = Credit.', category:'Liabilities'},
    {id:'a15', type:'account', account:'Unearned Revenue', answer:'credit', explanation:'Unearned Revenue is a Liability (PAUL: Unearned = Liability). CORL = Credit.', category:'Liabilities'},
    {id:'a16', type:'account', account:'Sales Tax Payable', answer:'credit', explanation:'Sales Tax Payable is a Liability (owed to the state). CORL = Credit.', category:'Liabilities'},
    {id:'a17', type:'account', account:'Mortgage Payable', answer:'credit', explanation:'Mortgage Payable is a long-term Liability. CORL = Credit.', category:'Liabilities'},
    // --- OWNER'S EQUITY (CR) ---
    {id:'a18', type:'account', account:'Owner, Capital', answer:'credit', explanation:'Capital is Owner\'s Equity. CORL = Credit normal balance.', category:'Owner\'s Equity'},
    {id:'a19', type:'account', account:'Retained Earnings', answer:'credit', explanation:'Retained Earnings is Owner\'s Equity (for corporations). CORL = Credit.', category:'Owner\'s Equity'},
    // --- DRAWING (DR) ---
    {id:'a20', type:'account', account:'Owner, Drawing', answer:'debit', explanation:'Drawing REDUCES equity. It\'s in DEAD = Debit normal balance.', category:'Drawing'},
    // --- REVENUE (CR) ---
    {id:'a21', type:'account', account:'Sales', answer:'credit', explanation:'Sales is Revenue. CORL = Credit normal balance.', category:'Revenue'},
    {id:'a22', type:'account', account:'Fees Earned', answer:'credit', explanation:'Fees Earned is Revenue. CORL = Credit.', category:'Revenue'},
    {id:'a23', type:'account', account:'Service Revenue', answer:'credit', explanation:'Service Revenue is Revenue. CORL = Credit.', category:'Revenue'},
    {id:'a24', type:'account', account:'Interest Income', answer:'credit', explanation:'Interest Income is Revenue. CORL = Credit.', category:'Revenue'},
    // --- EXPENSES (DR) ---
    {id:'a25', type:'account', account:'Rent Expense', answer:'debit', explanation:'Rent Expense is an Expense. DEAD = Debit normal balance.', category:'Expenses'},
    {id:'a26', type:'account', account:'Salary Expense', answer:'debit', explanation:'Salary Expense is an Expense (SE-E = for employeE). DEAD = Debit.', category:'Expenses'},
    {id:'a27', type:'account', account:'Utilities Expense', answer:'debit', explanation:'Utilities Expense is an Expense. DEAD = Debit.', category:'Expenses'},
    {id:'a28', type:'account', account:'Supplies Expense', answer:'debit', explanation:'Supplies Expense is an Expense (used supplies). DEAD = Debit.', category:'Expenses'},
    {id:'a29', type:'account', account:'Insurance Expense', answer:'debit', explanation:'Insurance Expense is an Expense (expired insurance). DEAD = Debit.', category:'Expenses'},
    {id:'a30', type:'account', account:'Depreciation Expense', answer:'debit', explanation:'Depreciation Expense is an Expense. DEAD = Debit.', category:'Expenses'},
    {id:'a31', type:'account', account:'Advertising Expense', answer:'debit', explanation:'Advertising Expense is an Expense. DEAD = Debit.', category:'Expenses'},
    {id:'a32', type:'account', account:'Payroll Tax Expense', answer:'debit', explanation:'Payroll Tax Expense is an Expense (PTE-R = for employeR). DEAD = Debit.', category:'Expenses'},
    {id:'a33', type:'account', account:'Federal Income Tax Expense', answer:'debit', explanation:'Federal Income Tax Expense is an Expense. DEAD = Debit.', category:'Expenses'},
    {id:'a34', type:'account', account:'Bank Card Fees Expense', answer:'debit', explanation:'Bank Card Fees Expense is an Expense. DEAD = Debit.', category:'Expenses'},
    {id:'a35', type:'account', account:'Miscellaneous Expense', answer:'debit', explanation:'Miscellaneous Expense is an Expense. DEAD = Debit.', category:'Expenses'},
    // --- COST OF MERCHANDISE SOLD (DR) ---
    {id:'a36', type:'account', account:'Purchases', answer:'debit', explanation:'Purchases is a Cost of Merchandise Sold account. Debit normal balance (like expenses).', category:'COGS'},
    {id:'a37', type:'account', account:'Transportation In', answer:'debit', explanation:'Transportation In (freight on purchases) is a COGS account. Debit normal balance.', category:'COGS'},
    {id:'a38', type:'account', account:'Purchases Returns & Allowances', answer:'credit', explanation:'Purchases R&A is a contra-Purchases account. Credit normal balance (reduces Purchases).', category:'COGS'},
    {id:'a39', type:'account', account:'Purchases Discounts', answer:'credit', explanation:'Purchases Discounts is a contra-Purchases account. Credit normal balance (reduces Purchases).', category:'COGS'},
    // --- CONTRA-REVENUE (DR) ---
    {id:'a40', type:'account', account:'Sales Discounts', answer:'debit', explanation:'Sales Discounts is a contra-Revenue account. Debit normal balance (reduces Sales).', category:'Contra-Revenue'},
    {id:'a41', type:'account', account:'Sales Returns & Allowances', answer:'debit', explanation:'Sales R&A is a contra-Revenue account. Debit normal balance (reduces Sales).', category:'Contra-Revenue'},
    // --- CONTRA-ASSET (CR) ---
    {id:'a42', type:'account', account:'Accumulated Depreciation', answer:'credit', explanation:'Accum. Depreciation is a contra-Asset. Credit normal balance (opposite of Assets).', category:'Contra-Asset'},
    {id:'a43', type:'account', account:'Allowance for Uncollectible Accounts', answer:'credit', explanation:'AUA is a contra-Asset (reduces A/R). Credit normal balance.', category:'Contra-Asset'},
    // --- INCOME SUMMARY ---
    {id:'a44', type:'account', account:'Income Summary (with net income)', answer:'credit', explanation:'With net income, Income Summary has a Credit balance (revenue > expenses).', category:'Closing'},
    {id:'a45', type:'account', account:'Income Summary (with net loss)', answer:'debit', explanation:'With net loss, Income Summary has a Debit balance (expenses > revenue).', category:'Closing'},
];

// TYPE 2: Increase/Decrease - UIL Group 1 style
// "Would this CHANGE be recorded as a debit or credit?"
const dcChangeQuestions = [
    {id:'c1', type:'change', prompt:'Decrease in Accounts Receivable', answer:'credit', explanation:'A/R is an Asset (DEAD). To DECREASE an asset, you Credit it.', category:'Assets'},
    {id:'c2', type:'change', prompt:'Decrease in Accounts Payable', answer:'debit', explanation:'A/P is a Liability (CORL). To DECREASE a liability, you Debit it.', category:'Liabilities'},
    {id:'c3', type:'change', prompt:'Increase in Sales Discounts', answer:'debit', explanation:'Sales Discounts has a Debit normal balance (contra-Revenue). Increase = Debit.', category:'Contra-Revenue'},
    {id:'c4', type:'change', prompt:'Increase in Purchases', answer:'debit', explanation:'Purchases has a Debit normal balance. Increase = Debit.', category:'COGS'},
    {id:'c5', type:'change', prompt:'Increase in the Capital account', answer:'credit', explanation:'Capital is Owner\'s Equity (CORL). Increase = Credit.', category:'Owner\'s Equity'},
    {id:'c6', type:'change', prompt:'Increase in Transportation In', answer:'debit', explanation:'Transportation In has a Debit normal balance (COGS account). Increase = Debit.', category:'COGS'},
    {id:'c7', type:'change', prompt:'Decrease in Cash in Bank', answer:'credit', explanation:'Cash is an Asset (DEAD). To DECREASE an asset, you Credit it.', category:'Assets'},
    {id:'c8', type:'change', prompt:'Increase in Sales Revenue', answer:'credit', explanation:'Sales is Revenue (CORL). Increase = Credit.', category:'Revenue'},
    {id:'c9', type:'change', prompt:'Increase in Supplies', answer:'debit', explanation:'Supplies is an Asset (DEAD). Increase = Debit.', category:'Assets'},
    {id:'c10', type:'change', prompt:'Decrease in Notes Payable', answer:'debit', explanation:'Notes Payable is a Liability (CORL). To DECREASE, you Debit it.', category:'Liabilities'},
    {id:'c11', type:'change', prompt:'Increase in Owner, Drawing', answer:'debit', explanation:'Drawing is in DEAD. Increase = Debit.', category:'Drawing'},
    {id:'c12', type:'change', prompt:'Decrease in Supplies', answer:'credit', explanation:'Supplies is an Asset (DEAD). To DECREASE, you Credit it.', category:'Assets'},
    {id:'c13', type:'change', prompt:'Increase in Accounts Payable', answer:'credit', explanation:'A/P is a Liability (CORL). Increase = Credit.', category:'Liabilities'},
    {id:'c14', type:'change', prompt:'Increase in Rent Expense', answer:'debit', explanation:'Rent Expense is an Expense (DEAD). Increase = Debit.', category:'Expenses'},
    {id:'c15', type:'change', prompt:'Decrease in Prepaid Insurance', answer:'credit', explanation:'Prepaid Insurance is an Asset (DEAD). To DECREASE, you Credit it.', category:'Assets'},
    {id:'c16', type:'change', prompt:'Increase in Purchases Returns & Allowances', answer:'credit', explanation:'Purchases R&A has a Credit normal balance. Increase = Credit.', category:'COGS'},
    {id:'c17', type:'change', prompt:'Increase in Accumulated Depreciation', answer:'credit', explanation:'Accum. Depreciation is a contra-Asset with Credit balance. Increase = Credit.', category:'Contra-Asset'},
    {id:'c18', type:'change', prompt:'Decrease in Owner, Capital', answer:'debit', explanation:'Capital is OE (CORL). To DECREASE, you Debit it.', category:'Owner\'s Equity'},
    {id:'c19', type:'change', prompt:'Increase in Sales Tax Payable', answer:'credit', explanation:'Sales Tax Payable is a Liability (CORL). Increase = Credit.', category:'Liabilities'},
    {id:'c20', type:'change', prompt:'Increase in Purchases Discounts', answer:'credit', explanation:'Purchases Discounts has a Credit normal balance (contra-Purchases). Increase = Credit.', category:'COGS'},
    {id:'c21', type:'change', prompt:'Increase in Sales Returns & Allowances', answer:'debit', explanation:'Sales R&A has a Debit normal balance (contra-Revenue). Increase = Debit.', category:'Contra-Revenue'},
    {id:'c22', type:'change', prompt:'Decrease in Equipment', answer:'credit', explanation:'Equipment is an Asset (DEAD). To DECREASE, you Credit it.', category:'Assets'},
    {id:'c23', type:'change', prompt:'Increase in Merchandise Inventory', answer:'debit', explanation:'Merchandise Inventory is an Asset (DEAD). Increase = Debit.', category:'Assets'},
    {id:'c24', type:'change', prompt:'Decrease in Sales Tax Payable', answer:'debit', explanation:'Sales Tax Payable is a Liability (CORL). To DECREASE, you Debit it (paying it off).', category:'Liabilities'},
];

// TYPE 3: Transaction-based - "For this transaction, classify each account"
const dcTransactionQuestions = [
    {id:'t1', type:'transaction', description:'Paid cash for office supplies', accounts:[
        {name:'Supplies', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Supplies (Asset) increases = Debit. Cash (Asset) decreases = Credit.', category:'Cash Payments'},
    {id:'t2', type:'transaction', description:'Owner invested cash into the business', accounts:[
        {name:'Cash in Bank', correct:'debit'},
        {name:'Owner, Capital', correct:'credit'}
    ], explanation:'Cash (Asset) increases = Debit. Capital (OE) increases = Credit.', category:'Investments'},
    {id:'t3', type:'transaction', description:'Received cash from a customer for services', accounts:[
        {name:'Cash in Bank', correct:'debit'},
        {name:'Service Revenue', correct:'credit'}
    ], explanation:'Cash (Asset) increases = Debit. Revenue increases = Credit.', category:'Revenue'},
    {id:'t4', type:'transaction', description:'Paid monthly rent', accounts:[
        {name:'Rent Expense', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Rent Expense increases = Debit. Cash (Asset) decreases = Credit.', category:'Cash Payments'},
    {id:'t5', type:'transaction', description:'Purchased supplies on account (BOAP)', accounts:[
        {name:'Supplies', correct:'debit'},
        {name:'Accounts Payable', correct:'credit'}
    ], explanation:'Buy On Accounts Payable! Supplies (Asset) increases = Debit. A/P (Liability) increases = Credit.', category:'On Account'},
    {id:'t6', type:'transaction', description:'Sold services on account (SOAR)', accounts:[
        {name:'Accounts Receivable', correct:'debit'},
        {name:'Fees Earned', correct:'credit'}
    ], explanation:'Sell On Accounts Receivable! A/R (Asset) increases = Debit. Revenue increases = Credit.', category:'On Account'},
    {id:'t7', type:'transaction', description:'Paid cash on account to a creditor', accounts:[
        {name:'Accounts Payable', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'A/P (Liability) decreases = Debit. Cash (Asset) decreases = Credit.', category:'Cash Payments'},
    {id:'t8', type:'transaction', description:'Received cash on account from a customer', accounts:[
        {name:'Cash in Bank', correct:'debit'},
        {name:'Accounts Receivable', correct:'credit'}
    ], explanation:'Cash (Asset) increases = Debit. A/R (Asset) decreases = Credit.', category:'Cash Receipts'},
    {id:'t9', type:'transaction', description:'Owner withdrew cash for personal use', accounts:[
        {name:'Owner, Drawing', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Drawing increases = Debit. Cash (Asset) decreases = Credit.', category:'Withdrawals'},
    {id:'t10', type:'transaction', description:'Paid employee salaries', accounts:[
        {name:'Salary Expense', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Salary Expense (SE-E for employeE) increases = Debit. Cash decreases = Credit.', category:'Payroll'},
    {id:'t11', type:'transaction', description:'Purchased equipment with cash', accounts:[
        {name:'Equipment', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Equipment (Asset) increases = Debit. Cash (Asset) decreases = Credit.', category:'Cash Payments'},
    {id:'t12', type:'transaction', description:'Received a utility bill (not yet paid)', accounts:[
        {name:'Utilities Expense', correct:'debit'},
        {name:'Accounts Payable', correct:'credit'}
    ], explanation:'Utilities Expense increases = Debit. A/P (Liability) increases = Credit.', category:'On Account'},
    {id:'t13', type:'transaction', description:'Paid cash for a one-year insurance policy', accounts:[
        {name:'Prepaid Insurance', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Prepaid Insurance (Asset) increases = Debit. Cash decreases = Credit.', category:'Cash Payments'},
    {id:'t14', type:'transaction', description:'Adjusting entry: Supplies used during the period', accounts:[
        {name:'Supplies Expense', correct:'debit'},
        {name:'Supplies', correct:'credit'}
    ], explanation:'Supplies Expense increases = Debit. Supplies (Asset) decreases = Credit.', category:'Adjustments'},
    {id:'t15', type:'transaction', description:'Adjusting entry: Insurance expired this period', accounts:[
        {name:'Insurance Expense', correct:'debit'},
        {name:'Prepaid Insurance', correct:'credit'}
    ], explanation:'Insurance Expense increases = Debit. Prepaid Insurance (Asset) decreases = Credit.', category:'Adjustments'},
    {id:'t16', type:'transaction', description:'Closing entry: Close Sales to Income Summary', accounts:[
        {name:'Sales', correct:'debit'},
        {name:'Income Summary', correct:'credit'}
    ], explanation:'C-DID Step 1: Debit Sales (to zero it out), Credit Income Summary.', category:'Closing'},
    {id:'t17', type:'transaction', description:'Closing entry: Close Rent Expense to Income Summary', accounts:[
        {name:'Income Summary', correct:'debit'},
        {name:'Rent Expense', correct:'credit'}
    ], explanation:'C-DID Step 2: Debit Income Summary, Credit Expenses (to zero them out).', category:'Closing'},
    {id:'t18', type:'transaction', description:'Closing entry: Close Income Summary (net income) to Capital', accounts:[
        {name:'Income Summary', correct:'debit'},
        {name:'Owner, Capital', correct:'credit'}
    ], explanation:'C-DID Step 3: Debit Income Summary, Credit Capital (transfer net income).', category:'Closing'},
    {id:'t19', type:'transaction', description:'Closing entry: Close Drawing to Capital', accounts:[
        {name:'Owner, Capital', correct:'debit'},
        {name:'Owner, Drawing', correct:'credit'}
    ], explanation:'C-DID Step 4: Debit Capital, Credit Drawing (to zero Drawing out).', category:'Closing'},
    {id:'t20', type:'transaction', description:'Recorded depreciation on equipment', accounts:[
        {name:'Depreciation Expense', correct:'debit'},
        {name:'Accumulated Depreciation', correct:'credit'}
    ], explanation:'Depreciation Expense increases = Debit. Accum. Depreciation (contra-asset) increases = Credit.', category:'Adjustments'},
    {id:'t21', type:'transaction', description:'Purchased merchandise for resale by check', accounts:[
        {name:'Purchases', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Purchases increases = Debit. Cash (Asset) decreases = Credit.', category:'Cash Payments'},
    {id:'t22', type:'transaction', description:'Purchased merchandise on account', accounts:[
        {name:'Purchases', correct:'debit'},
        {name:'Accounts Payable', correct:'credit'}
    ], explanation:'Purchases increases = Debit. A/P (Liability) increases = Credit. (BOAP!)', category:'On Account'},
    {id:'t23', type:'transaction', description:'Sold merchandise on account', accounts:[
        {name:'Accounts Receivable', correct:'debit'},
        {name:'Sales', correct:'credit'}
    ], explanation:'A/R (Asset) increases = Debit. Sales (Revenue) increases = Credit. (SOAR!)', category:'On Account'},
    {id:'t24', type:'transaction', description:'Returned defective merchandise to a supplier for credit', accounts:[
        {name:'Accounts Payable', correct:'debit'},
        {name:'Purchases Returns & Allowances', correct:'credit'}
    ], explanation:'A/P (Liability) decreases = Debit. Purchases R&A (contra) increases = Credit.', category:'Returns'},
    {id:'t25', type:'transaction', description:'A customer returned merchandise they purchased on account', accounts:[
        {name:'Sales Returns & Allowances', correct:'debit'},
        {name:'Accounts Receivable', correct:'credit'}
    ], explanation:'Sales R&A (contra-Revenue) increases = Debit. A/R (Asset) decreases = Credit.', category:'Returns'},
    {id:'t26', type:'transaction', description:'Established a Petty Cash fund', accounts:[
        {name:'Petty Cash', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Petty Cash (Asset) increases = Debit. Cash in Bank (Asset) decreases = Credit.', category:'Petty Cash'},
    {id:'t27', type:'transaction', description:'Closing entry: Close Supplies Expense to Income Summary', accounts:[
        {name:'Income Summary', correct:'debit'},
        {name:'Supplies Expense', correct:'credit'}
    ], explanation:'C-DID Step 2: Debit Income Summary, Credit Supplies Expense (to zero it out).', category:'Closing'},
    {id:'t28', type:'transaction', description:'Paid freight charges on merchandise purchased', accounts:[
        {name:'Transportation In', correct:'debit'},
        {name:'Cash in Bank', correct:'credit'}
    ], explanation:'Transportation In (COGS) increases = Debit. Cash decreases = Credit.', category:'Cash Payments'},
    {id:'t29', type:'transaction', description:'Adjusting entry: Merchandise Inventory decreased from beginning to end of period', accounts:[
        {name:'Income Summary', correct:'debit'},
        {name:'Merchandise Inventory', correct:'credit'}
    ], explanation:'When inventory decreases, Debit Income Summary and Credit Merchandise Inventory.', category:'Adjustments'},
    {id:'t30', type:'transaction', description:'Recorded a bank credit card sale', accounts:[
        {name:'Cash in Bank', correct:'debit'},
        {name:'Sales', correct:'credit'}
    ], explanation:'Bank card sales are treated like cash. Cash increases = Debit. Sales increases = Credit.', category:'Sales'},
];

// Combine all 3 types into full bank
const dcQuestionBank = [...dcAccountQuestions, ...dcChangeQuestions, ...dcTransactionQuestions];

// DEBIT/CREDIT QUIZ STATE
let dcCurrentQuestion = 0;
let dcSelectedQuestions = [];
let dcAnswers = {};
let dcTotalAttempts = parseInt(localStorage.getItem('dcTotalAttempts')) || 0;
let dcTotalCorrect = parseInt(localStorage.getItem('dcTotalCorrect')) || 0;
let dcTotalCompleted = parseInt(localStorage.getItem('dcTotalCompleted')) || 0;
let dcSessionCorrect = 0;

// NOTE: shuffleArray() is in shared.js — do NOT redefine here

function startDebitCredit() {
    dcSelectedQuestions = shuffleArray(dcQuestionBank).slice(0, 20);
    dcCurrentQuestion = 0;
    dcAnswers = {};
    dcSessionCorrect = 0;
    dcTotalAttempts++;
    localStorage.setItem('dcTotalAttempts', dcTotalAttempts);
    renderDCQuestion();
    showSection('debitcredit-viewer');
}

function renderDCQuestion() {
    const q = dcSelectedQuestions[dcCurrentQuestion];
    const answered = dcAnswers[q.id] !== undefined;

    let html = `
        <div class="hero">
            <h1>Question ${dcCurrentQuestion + 1} of ${dcSelectedQuestions.length}</h1>
            <p class="hero-subtitle">Score: ${dcSessionCorrect}/${Object.keys(dcAnswers).length} correct</p>
        </div>
        <div class="quiz-question">
    `;

    if (q.type === 'account') {
        // TYPE 1: Account normal balance
        html += `
            <span class="dc-question-type dc-type-account">Normal Balance</span>
            <div class="question-text">What is the normal balance for this account?</div>
            <div class="dc-account-name">${q.account}</div>
            <div class="dc-buttons">
                <button class="dc-btn dc-btn-debit ${answered ? (dcAnswers[q.id] === 'debit' ? (q.answer === 'debit' ? 'selected-correct' : 'selected-incorrect') : (q.answer === 'debit' ? 'show-correct' : '')) : ''}"
                        onclick="answerDCAccount('${q.id}', 'debit')" ${answered ? 'disabled' : ''}>
                    DEBIT
                </button>
                <button class="dc-btn dc-btn-credit ${answered ? (dcAnswers[q.id] === 'credit' ? (q.answer === 'credit' ? 'selected-correct' : 'selected-incorrect') : (q.answer === 'credit' ? 'show-correct' : '')) : ''}"
                        onclick="answerDCAccount('${q.id}', 'credit')" ${answered ? 'disabled' : ''}>
                    CREDIT
                </button>
            </div>
        `;
    } else if (q.type === 'change') {
        // TYPE 2: Increase/Decrease - UIL Group 1 style
        html += `
            <span class="dc-question-type dc-type-change">Increase / Decrease</span>
            <div class="question-text">How would this change be recorded?</div>
            <div class="dc-account-name">${q.prompt}</div>
            <div class="dc-buttons">
                <button class="dc-btn dc-btn-debit ${answered ? (dcAnswers[q.id] === 'debit' ? (q.answer === 'debit' ? 'selected-correct' : 'selected-incorrect') : (q.answer === 'debit' ? 'show-correct' : '')) : ''}"
                        onclick="answerDCAccount('${q.id}', 'debit')" ${answered ? 'disabled' : ''}>
                    DEBIT
                </button>
                <button class="dc-btn dc-btn-credit ${answered ? (dcAnswers[q.id] === 'credit' ? (q.answer === 'credit' ? 'selected-correct' : 'selected-incorrect') : (q.answer === 'credit' ? 'show-correct' : '')) : ''}"
                        onclick="answerDCAccount('${q.id}', 'credit')" ${answered ? 'disabled' : ''}>
                    CREDIT
                </button>
            </div>
        `;
    } else {
        // TYPE 3: Transaction-based
        const txAnswers = dcAnswers[q.id];
        const txSubmitted = txAnswers && txAnswers.submitted;

        html += `
            <span class="dc-question-type dc-type-transaction">Transaction</span>
            <div class="dc-transaction-text">${q.description}</div>
            <div class="question-text" style="font-size:1rem; color:var(--text-muted);">Select Debit or Credit for each account:</div>
        `;

        q.accounts.forEach((acc, idx) => {
            const userChoice = txAnswers ? txAnswers['acc' + idx] : null;
            const isCorrect = txSubmitted && userChoice === acc.correct;
            const isWrong = txSubmitted && userChoice && userChoice !== acc.correct;

            html += `
                <div class="dc-account-row">
                    <span class="account-label">${acc.name}</span>
                    <div class="dc-toggle-btns">
                        <button class="dc-toggle-btn dr-btn ${userChoice === 'debit' ? 'active-dr' : ''} ${txSubmitted && acc.correct === 'debit' ? 'correct-answer' : ''} ${isWrong && userChoice === 'debit' ? 'wrong-answer' : ''}"
                                onclick="selectDCTransaction('${q.id}', ${idx}, 'debit')" ${txSubmitted ? 'disabled' : ''}>DR</button>
                        <button class="dc-toggle-btn cr-btn ${userChoice === 'credit' ? 'active-cr' : ''} ${txSubmitted && acc.correct === 'credit' ? 'correct-answer' : ''} ${isWrong && userChoice === 'credit' ? 'wrong-answer' : ''}"
                                onclick="selectDCTransaction('${q.id}', ${idx}, 'credit')" ${txSubmitted ? 'disabled' : ''}>CR</button>
                    </div>
                </div>
            `;
        });

        if (!txSubmitted) {
            html += `<button class="btn" style="margin-top:1.5rem;" onclick="submitDCTransaction('${q.id}')">Check Answer</button>`;
        }
    }

    if (answered) {
        const isCorrect = (q.type === 'account' || q.type === 'change') ? dcAnswers[q.id] === q.answer : dcAnswers[q.id].allCorrect;
        html += `
            <div class="quiz-explanation show">
                <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
                ${q.explanation}
            </div>
        `;
    }

    html += `</div>`;

    // Navigation buttons
    html += `<div style="display:flex; gap:1rem; margin-top:2rem;">`;
    if (dcCurrentQuestion > 0) {
        html += `<button class="btn btn-secondary" onclick="prevDC()">← Previous</button>`;
    }
    if (dcCurrentQuestion < dcSelectedQuestions.length - 1) {
        html += `<button class="btn" onclick="nextDC()">Next →</button>`;
    } else {
        html += `<button class="btn" onclick="finishDC()">Finish Quiz</button>`;
    }
    html += `</div>`;

    document.getElementById('dcContent').innerHTML = html;
}

function answerDCAccount(id, answer) {
    if (dcAnswers[id] !== undefined) return;
    const q = dcSelectedQuestions.find(q => q.id === id);
    dcAnswers[id] = answer;

    if (answer === q.answer) {
        dcSessionCorrect++;
        dcTotalCorrect++;
        Progress.addPoints(5);
    }
    dcTotalCompleted++;
    localStorage.setItem('dcTotalCorrect', dcTotalCorrect);
    localStorage.setItem('dcTotalCompleted', dcTotalCompleted);
    updateDCStats();
    renderDCQuestion();
}

function selectDCTransaction(id, accIdx, value) {
    if (!dcAnswers[id]) dcAnswers[id] = {};
    if (dcAnswers[id].submitted) return;
    dcAnswers[id]['acc' + accIdx] = value;
    renderDCQuestion();
}

function submitDCTransaction(id) {
    const q = dcSelectedQuestions.find(q => q.id === id);
    const ans = dcAnswers[id] || {};

    // Check all accounts are selected
    for (let i = 0; i < q.accounts.length; i++) {
        if (!ans['acc' + i]) {
            showNotification('Select DR or CR for all accounts!', true);
            return;
        }
    }

    // Check correctness
    let allCorrect = true;
    q.accounts.forEach((acc, idx) => {
        if (ans['acc' + idx] !== acc.correct) allCorrect = false;
    });

    dcAnswers[id].submitted = true;
    dcAnswers[id].allCorrect = allCorrect;

    if (allCorrect) {
        dcSessionCorrect++;
        dcTotalCorrect++;
        Progress.addPoints(5);
    }
    dcTotalCompleted++;
    localStorage.setItem('dcTotalCorrect', dcTotalCorrect);
    localStorage.setItem('dcTotalCompleted', dcTotalCompleted);
    updateDCStats();
    renderDCQuestion();
}

function nextDC() {
    if (dcCurrentQuestion < dcSelectedQuestions.length - 1) {
        dcCurrentQuestion++;
        renderDCQuestion();
        window.scrollTo(0, 0);
    }
}

function prevDC() {
    if (dcCurrentQuestion > 0) {
        dcCurrentQuestion--;
        renderDCQuestion();
        window.scrollTo(0, 0);
    }
}

function finishDC() {
    const total = dcSelectedQuestions.length;
    const pct = Math.round((dcSessionCorrect / total) * 100);

    let html = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <div class="result-score">${pct}%</div>
            <p>${dcSessionCorrect} of ${total} correct!</p>
            <p style="color:var(--text-muted); margin-top:0.5rem;">+${dcSessionCorrect * 5} points earned</p>
            <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                <button class="btn" onclick="startDebitCredit()">Try Again (New Questions)</button>
                <button class="btn btn-secondary" onclick="showSection('debitcredit')">Back to Menu</button>
            </div>
        </div>
    `;
    document.getElementById('dcContent').innerHTML = html;
    window.scrollTo(0, 0);
}

function resetDebitCredit() {
    if (confirm('Reset all Debit/Credit progress?')) {
        dcTotalAttempts = 0;
        dcTotalCorrect = 0;
        dcTotalCompleted = 0;
        localStorage.setItem('dcTotalAttempts', 0);
        localStorage.setItem('dcTotalCorrect', 0);
        localStorage.setItem('dcTotalCompleted', 0);
        updateDCStats();
    }
}

function updateDCStats() {
    const el = document.getElementById('dcCompleted');
    if (el) {
        el.textContent = dcTotalCompleted;
        const accuracy = dcTotalCompleted > 0
            ? Math.round((dcTotalCorrect / dcTotalCompleted) * 100) : 0;
        document.getElementById('dcAccuracy').textContent = accuracy + '%';
        document.getElementById('dcAttempts').textContent = dcTotalAttempts;
    }
}

// Initialize DC stats on load
document.addEventListener('DOMContentLoaded', () => {
    updateDCStats();
});
