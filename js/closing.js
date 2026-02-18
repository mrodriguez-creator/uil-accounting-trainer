// =====================================================
// CLOSING CODES QUESTION BANK (40+ questions)
// Two types: 1) Permanent vs Temporary classification
//            2) Closing code (UIL format: A=IS, B=Capital, C=Not closed + DR/CR)
// Based on real UIL tests: District 2022, 2023
// =====================================================

const closingCodes = {
    'A DR': 'A DR — Closed into Income Summary with a DEBIT',
    'A CR': 'A CR — Closed into Income Summary with a CREDIT',
    'B DR': 'B DR — Closed into Capital with a DEBIT',
    'B CR': 'B CR — Closed into Capital with a CREDIT',
    'C':    'C — Not Closed (Permanent Account)'
};

const closingQuestionBank = [
    // --- TYPE 1: Permanent vs Temporary (answer: Permanent or Temporary) ---
    {id:'cl1', type:'classify', account:'Cash in Bank', answer:'Permanent', explanation:'Cash is an Asset (A=L+OE). Assets are permanent — they carry forward.', category:'Assets'},
    {id:'cl2', type:'classify', account:'Accounts Receivable', answer:'Permanent', explanation:'A/R is an Asset. All assets are permanent accounts.', category:'Assets'},
    {id:'cl3', type:'classify', account:'Supplies', answer:'Permanent', explanation:'Supplies is an Asset. Permanent accounts carry balances to next period.', category:'Assets'},
    {id:'cl4', type:'classify', account:'Prepaid Insurance', answer:'Permanent', explanation:'Prepaid Insurance is an Asset. Permanent (real) accounts stay open.', category:'Assets'},
    {id:'cl5', type:'classify', account:'Equipment', answer:'Permanent', explanation:'Equipment is an Asset — permanent account.', category:'Assets'},
    {id:'cl6', type:'classify', account:'Merchandise Inventory', answer:'Permanent', explanation:'Merchandise Inventory is an Asset — permanent account. (Though it\'s adjusted through Income Summary.)', category:'Assets'},
    {id:'cl7', type:'classify', account:'Accounts Payable', answer:'Permanent', explanation:'A/P is a Liability. Liabilities are permanent accounts.', category:'Liabilities'},
    {id:'cl8', type:'classify', account:'Notes Payable', answer:'Permanent', explanation:'Notes Payable is a Liability — permanent account.', category:'Liabilities'},
    {id:'cl9', type:'classify', account:'Sales Tax Payable', answer:'Permanent', explanation:'Sales Tax Payable is a Liability — permanent.', category:'Liabilities'},
    {id:'cl10', type:'classify', account:'Medicare Tax Payable', answer:'Permanent', explanation:'Medicare Tax Payable is a Liability — permanent account, not closed.', category:'Liabilities'},
    {id:'cl11', type:'classify', account:'Owner, Capital', answer:'Permanent', explanation:'Capital is Owner\'s Equity — permanent. It\'s adjusted by closing entries but never itself closed.', category:'Owner\'s Equity'},
    {id:'cl12', type:'classify', account:'Sales', answer:'Temporary', explanation:'Sales is Revenue — temporary (nominal). Closed to zero at year-end. RED-C = Revenue, Expenses, Drawing, COGS.', category:'Revenue'},
    {id:'cl13', type:'classify', account:'Fees Earned', answer:'Temporary', explanation:'Fees Earned is Revenue — temporary account. Closes to Income Summary.', category:'Revenue'},
    {id:'cl14', type:'classify', account:'Rent Expense', answer:'Temporary', explanation:'Rent Expense is an Expense — temporary. Expenses close to zero via Income Summary.', category:'Expenses'},
    {id:'cl15', type:'classify', account:'Salary Expense', answer:'Temporary', explanation:'Salary Expense is temporary. All expenses close to Income Summary.', category:'Expenses'},
    {id:'cl16', type:'classify', account:'Supplies Expense', answer:'Temporary', explanation:'Supplies Expense is temporary — closes to Income Summary with a credit.', category:'Expenses'},
    {id:'cl17', type:'classify', account:'Owner, Drawing', answer:'Temporary', explanation:'Drawing is temporary — it closes directly to Capital (not through Income Summary). RED-C!', category:'Drawing'},
    {id:'cl18', type:'classify', account:'Purchases', answer:'Temporary', explanation:'Purchases is a COGS account — temporary. Closes to Income Summary.', category:'COGS'},
    {id:'cl19', type:'classify', account:'Income Summary', answer:'Temporary', explanation:'Income Summary is temporary — it\'s created during closing and itself closes to Capital.', category:'Special'},
    {id:'cl20', type:'classify', account:'Accumulated Depreciation', answer:'Permanent', explanation:'Accumulated Depreciation is a contra-Asset — permanent account. It carries forward.', category:'Contra-Asset'},

    // --- TYPE 2: Closing Code (UIL exact format: A DR, A CR, B DR, B CR, C) ---
    {id:'cl21', type:'code', account:'Sales', answer:'A CR', explanation:'Sales is Revenue → closed INTO Income Summary with a CREDIT. (C-DID step 1: close Credits)', category:'Revenue'},
    {id:'cl22', type:'code', account:'Fees Earned', answer:'A CR', explanation:'Fees Earned is Revenue → closed into Income Summary with a Credit.', category:'Revenue'},
    {id:'cl23', type:'code', account:'Service Revenue', answer:'A CR', explanation:'Service Revenue → closed into Income Summary with a Credit.', category:'Revenue'},
    {id:'cl24', type:'code', account:'Purchases Discounts', answer:'A CR', explanation:'Purchases Discounts is contra-COGS with a Credit balance → closed into Income Summary with a Credit.', category:'Contra-COGS'},
    {id:'cl25', type:'code', account:'Purchases Returns & Allowances', answer:'A CR', explanation:'Purchases R&A is contra-COGS → closed into Income Summary with a Credit.', category:'Contra-COGS'},
    {id:'cl26', type:'code', account:'Rent Expense', answer:'A DR', explanation:'Rent Expense → closed into Income Summary with a Debit. (C-DID step 2: close Debits)', category:'Expenses'},
    {id:'cl27', type:'code', account:'Salary Expense', answer:'A DR', explanation:'Salary Expense → closed into Income Summary with a Debit.', category:'Expenses'},
    {id:'cl28', type:'code', account:'Supplies Expense', answer:'A DR', explanation:'Supplies Expense → closed into Income Summary with a Debit.', category:'Expenses'},
    {id:'cl29', type:'code', account:'Insurance Expense', answer:'A DR', explanation:'Insurance Expense → closed into Income Summary with a Debit.', category:'Expenses'},
    {id:'cl30', type:'code', account:'Advertising Expense', answer:'A DR', explanation:'Advertising Expense → closed into Income Summary with a Debit.', category:'Expenses'},
    {id:'cl31', type:'code', account:'Payroll Tax Expense', answer:'A DR', explanation:'Payroll Tax Expense → closed into Income Summary with a Debit.', category:'Expenses'},
    {id:'cl32', type:'code', account:'Depreciation Expense', answer:'A DR', explanation:'Depreciation Expense → closed into Income Summary with a Debit.', category:'Expenses'},
    {id:'cl33', type:'code', account:'Purchases', answer:'A DR', explanation:'Purchases is a COGS account with Debit balance → closed into Income Summary with a Debit.', category:'COGS'},
    {id:'cl34', type:'code', account:'Transportation In', answer:'A DR', explanation:'Transportation In (freight) is a COGS account → closed into Income Summary with a Debit.', category:'COGS'},
    {id:'cl35', type:'code', account:'Sales Discounts', answer:'A DR', explanation:'Sales Discounts is contra-Revenue with a Debit balance → closed into Income Summary with a Debit.', category:'Contra-Revenue'},
    {id:'cl36', type:'code', account:'Sales Returns & Allowances', answer:'A DR', explanation:'Sales R&A is contra-Revenue → closed into Income Summary with a Debit.', category:'Contra-Revenue'},
    {id:'cl37', type:'code', account:'Owner, Drawing', answer:'B CR', explanation:'Drawing closes directly into Capital with a CREDIT. (C-DID step 4: Drawing → Capital)', category:'Drawing'},
    {id:'cl38', type:'code', account:'Income Summary (Net Income)', answer:'B CR', explanation:'Income Summary with Net Income (credit balance) → closed into Capital with a Credit. (C-DID step 3)', category:'Special'},
    {id:'cl39', type:'code', account:'Income Summary (Net Loss)', answer:'B DR', explanation:'Income Summary with Net Loss (debit balance) → closed into Capital with a Debit. Capital decreases.', category:'Special'},
    {id:'cl40', type:'code', account:'Accounts Receivable', answer:'C', explanation:'A/R is an Asset — permanent account. NOT closed. Carries forward to next period.', category:'Assets'},
    {id:'cl41', type:'code', account:'Cash in Bank', answer:'C', explanation:'Cash is an Asset — permanent. Not closed.', category:'Assets'},
    {id:'cl42', type:'code', account:'Owner, Capital', answer:'C', explanation:'Capital is permanent. It RECEIVES closing entries but is NOT itself closed.', category:'Owner\'s Equity'},
    {id:'cl43', type:'code', account:'Accounts Payable', answer:'C', explanation:'A/P is a Liability — permanent account. Not closed.', category:'Liabilities'},
    {id:'cl44', type:'code', account:'Medicare Tax Payable', answer:'C', explanation:'Medicare Tax Payable is a Liability — permanent. Not closed.', category:'Liabilities'},
    {id:'cl45', type:'code', account:'Accumulated Depreciation', answer:'C', explanation:'Accumulated Depreciation is a contra-Asset — permanent. Not closed.', category:'Contra-Asset'},
    {id:'cl46', type:'code', account:'Miscellaneous Expense', answer:'A DR', explanation:'Miscellaneous Expense → closed into Income Summary with a Debit.', category:'Expenses'},
    {id:'cl47', type:'code', account:'Cost of Merchandise Sold', answer:'A DR', explanation:'COGS → closed into Income Summary with a Debit.', category:'COGS'},
];

// CLOSING QUIZ STATE
let clCurrentQuestion = 0;
let clSelectedQuestions = [];
let clAnswers = {};
let clTotalAttempts = parseInt(localStorage.getItem('clTotalAttempts')) || 0;
let clTotalCorrect = parseInt(localStorage.getItem('clTotalCorrect')) || 0;
let clTotalCompleted = parseInt(localStorage.getItem('clTotalCompleted')) || 0;
let clSessionCorrect = 0;

function startClosing() {
    clSelectedQuestions = shuffleArray(closingQuestionBank).slice(0, 15);
    clCurrentQuestion = 0;
    clAnswers = {};
    clSessionCorrect = 0;
    clTotalAttempts++;
    localStorage.setItem('clTotalAttempts', clTotalAttempts);
    renderCLQuestion();
    showSection('closing-viewer');
}

function renderCLQuestion() {
    const q = clSelectedQuestions[clCurrentQuestion];
    const answered = clAnswers[q.id] !== undefined;
    const isClassify = q.type === 'classify';

    const options = isClassify
        ? { 'Permanent': 'Permanent (Real) — carries forward', 'Temporary': 'Temporary (Nominal) — closes to zero' }
        : closingCodes;

    let html = `
        <div class="hero">
            <h1>Question ${clCurrentQuestion + 1} of ${clSelectedQuestions.length}</h1>
            <p class="hero-subtitle">Score: ${clSessionCorrect}/${Object.keys(clAnswers).length} correct</p>
        </div>
        <div class="cl-question-block">
            <div class="cl-question-type">${isClassify ? 'Is this account Permanent or Temporary?' : 'What is the closing code for this account?'}</div>
            <div class="cl-account-name">${q.account}</div>
            <div class="cl-options">
    `;

    Object.keys(options).forEach(key => {
        let cls = 'cl-option';
        if (answered) {
            if (clAnswers[q.id] === key && key === q.answer) cls += ' selected-correct';
            else if (clAnswers[q.id] === key && key !== q.answer) cls += ' selected-incorrect';
            else if (key === q.answer) cls += ' show-correct';
        }
        html += `<button class="${cls}" onclick="answerCL('${q.id}','${key}')" ${answered ? 'disabled' : ''}>${options[key]}</button>`;
    });

    html += `</div>`;

    if (answered) {
        const isCorrect = clAnswers[q.id] === q.answer;
        html += `
            <div class="quiz-explanation show">
                <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect — Answer: ' + q.answer}</strong><br>
                ${q.explanation}
            </div>
        `;
    }

    html += `</div>`;

    html += `<div style="display:flex; gap:1rem; margin-top:2rem;">`;
    if (clCurrentQuestion > 0) html += `<button class="btn btn-secondary" onclick="prevCL()">← Previous</button>`;
    if (clCurrentQuestion < clSelectedQuestions.length - 1) html += `<button class="btn" onclick="nextCL()">Next →</button>`;
    else html += `<button class="btn" onclick="finishCL()">Finish Quiz</button>`;
    html += `</div>`;

    document.getElementById('clContent').innerHTML = html;
}

function answerCL(id, answer) {
    if (clAnswers[id] !== undefined) return;
    const q = clSelectedQuestions.find(q => q.id === id);
    clAnswers[id] = answer;
    if (answer === q.answer) {
        clSessionCorrect++;
        clTotalCorrect++;
        Progress.addPoints(5);
    }
    clTotalCompleted++;
    localStorage.setItem('clTotalCorrect', clTotalCorrect);
    localStorage.setItem('clTotalCompleted', clTotalCompleted);
    updateCLStats();
    renderCLQuestion();
}

function nextCL() { if (clCurrentQuestion < clSelectedQuestions.length - 1) { clCurrentQuestion++; renderCLQuestion(); window.scrollTo(0,0); } }
function prevCL() { if (clCurrentQuestion > 0) { clCurrentQuestion--; renderCLQuestion(); window.scrollTo(0,0); } }

function finishCL() {
    const pct = Math.round((clSessionCorrect / clSelectedQuestions.length) * 100);
    document.getElementById('clContent').innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <div class="result-score">${pct}%</div>
            <p>${clSessionCorrect} of ${clSelectedQuestions.length} correct!</p>
            <p style="color:var(--text-muted); margin-top:0.5rem;">+${clSessionCorrect * 5} points earned</p>
            <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                <button class="btn" onclick="startClosing()">Try Again (New Questions)</button>
                <button class="btn btn-secondary" onclick="showSection('closing')">Back to Menu</button>
            </div>
        </div>`;
    window.scrollTo(0,0);
}

function resetClosing() {
    if (confirm('Reset all Closing Codes progress?')) {
        clTotalAttempts = 0; clTotalCorrect = 0; clTotalCompleted = 0;
        localStorage.setItem('clTotalAttempts', 0);
        localStorage.setItem('clTotalCorrect', 0);
        localStorage.setItem('clTotalCompleted', 0);
        updateCLStats();
    }
}

function updateCLStats() {
    const el = document.getElementById('clCompleted');
    if (el) {
        el.textContent = clTotalCompleted;
        const acc = clTotalCompleted > 0 ? Math.round((clTotalCorrect / clTotalCompleted) * 100) : 0;
        document.getElementById('clAccuracy').textContent = acc + '%';
        document.getElementById('clAttempts').textContent = clTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => { updateCLStats(); });
