// =====================================================
// WORKSHEET COLUMN QUESTION BANK (40+ questions)
// Based on real UIL tests: "To which column is the
// normal balance extended on the work sheet?"
// A=IS Debit, B=IS Credit, C=BS Debit, D=BS Credit, E=Not Extended
// =====================================================

const wsQuestionBank = [
    // --- ASSETS → Balance Sheet Debit (C) ---
    {id:'w1', account:'Cash in Bank', answer:'C', explanation:'Cash is an Asset with a Debit balance → Balance Sheet Debit.', category:'Assets'},
    {id:'w2', account:'Accounts Receivable', answer:'C', explanation:'A/R is an Asset with a Debit balance → Balance Sheet Debit.', category:'Assets'},
    {id:'w3', account:'Supplies', answer:'C', explanation:'Supplies is an Asset with a Debit balance → Balance Sheet Debit.', category:'Assets'},
    {id:'w4', account:'Prepaid Insurance', answer:'C', explanation:'Prepaid Insurance is an Asset → Balance Sheet Debit.', category:'Assets'},
    {id:'w5', account:'Equipment', answer:'C', explanation:'Equipment is an Asset → Balance Sheet Debit.', category:'Assets'},
    {id:'w6', account:'Office Furniture', answer:'C', explanation:'Office Furniture is an Asset → Balance Sheet Debit.', category:'Assets'},
    {id:'w7', account:'Petty Cash', answer:'C', explanation:'Petty Cash is an Asset → Balance Sheet Debit.', category:'Assets'},
    {id:'w8', account:'Change Fund', answer:'C', explanation:'Change Fund is an Asset → Balance Sheet Debit.', category:'Assets'},
    {id:'w9', account:'Office Supplies', answer:'C', explanation:'Office Supplies is an Asset → Balance Sheet Debit.', category:'Assets'},
    // --- LIABILITIES → Balance Sheet Credit (D) ---
    {id:'w10', account:'Accounts Payable', answer:'D', explanation:'A/P is a Liability with a Credit balance → Balance Sheet Credit.', category:'Liabilities'},
    {id:'w11', account:'Sales Tax Payable', answer:'D', explanation:'Sales Tax Payable is a Liability → Balance Sheet Credit.', category:'Liabilities'},
    {id:'w12', account:'Notes Payable', answer:'D', explanation:'Notes Payable is a Liability → Balance Sheet Credit.', category:'Liabilities'},
    {id:'w13', account:'Salaries Payable', answer:'D', explanation:'Salaries Payable is a Liability → Balance Sheet Credit.', category:'Liabilities'},
    // --- OWNER'S EQUITY → Balance Sheet Credit (D) ---
    {id:'w14', account:'Owner, Capital', answer:'D', explanation:'Capital is OE with a Credit balance → Balance Sheet Credit. (COW = Capital On Worksheet goes to BS Credit)', category:'Owner\'s Equity'},
    // --- DRAWING → Balance Sheet Debit (C) ---
    {id:'w15', account:'Owner, Drawing', answer:'C', explanation:'Drawing has a Debit balance and goes to Balance Sheet Debit (it\'s a temporary account but extends to BS).', category:'Drawing'},
    // --- CONTRA-ASSETS → Balance Sheet Credit (D) ---
    {id:'w16', account:'Accumulated Depreciation', answer:'D', explanation:'Contra-Asset with Credit balance → Balance Sheet Credit.', category:'Contra-Asset'},
    {id:'w17', account:'Allowance for Uncollectible Accounts', answer:'D', explanation:'AUA is a contra-Asset with Credit balance → Balance Sheet Credit.', category:'Contra-Asset'},
    // --- REVENUE → Income Statement Credit (B) ---
    {id:'w18', account:'Sales', answer:'B', explanation:'Sales is Revenue with a Credit balance → Income Statement Credit.', category:'Revenue'},
    {id:'w19', account:'Fees Earned', answer:'B', explanation:'Fees Earned is Revenue → Income Statement Credit.', category:'Revenue'},
    {id:'w20', account:'Service Revenue', answer:'B', explanation:'Service Revenue → Income Statement Credit.', category:'Revenue'},
    // --- EXPENSES → Income Statement Debit (A) ---
    {id:'w21', account:'Rent Expense', answer:'A', explanation:'Rent Expense has a Debit balance → Income Statement Debit.', category:'Expenses'},
    {id:'w22', account:'Salary Expense', answer:'A', explanation:'Salary Expense → Income Statement Debit.', category:'Expenses'},
    {id:'w23', account:'Supplies Expense', answer:'A', explanation:'Supplies Expense → Income Statement Debit.', category:'Expenses'},
    {id:'w24', account:'Insurance Expense', answer:'A', explanation:'Insurance Expense → Income Statement Debit.', category:'Expenses'},
    {id:'w25', account:'Utilities Expense', answer:'A', explanation:'Utilities Expense → Income Statement Debit.', category:'Expenses'},
    {id:'w26', account:'Depreciation Expense', answer:'A', explanation:'Depreciation Expense → Income Statement Debit.', category:'Expenses'},
    {id:'w27', account:'Advertising Expense', answer:'A', explanation:'Advertising Expense → Income Statement Debit.', category:'Expenses'},
    {id:'w28', account:'Bank Card Fees Expense', answer:'A', explanation:'Bank Card Fees Expense → Income Statement Debit.', category:'Expenses'},
    {id:'w29', account:'Federal Income Tax Expense', answer:'A', explanation:'Federal Income Tax Expense → Income Statement Debit.', category:'Expenses'},
    // --- COGS ACCOUNTS → Income Statement Debit (A) ---
    {id:'w30', account:'Purchases', answer:'A', explanation:'Purchases is a COGS account with Debit balance → Income Statement Debit.', category:'COGS'},
    {id:'w31', account:'Transportation In', answer:'A', explanation:'Transportation In (freight on purchases) is a COGS account → Income Statement Debit.', category:'COGS'},
    // --- CONTRA-COGS → Income Statement Credit (B) ---
    {id:'w32', account:'Purchases Discounts', answer:'B', explanation:'Purchases Discounts is contra-COGS with Credit balance → Income Statement Credit.', category:'Contra-COGS'},
    {id:'w33', account:'Purchases Returns & Allowances', answer:'B', explanation:'Purchases R&A is contra-COGS → Income Statement Credit.', category:'Contra-COGS'},
    // --- CONTRA-REVENUE → Income Statement Debit (A) ---
    {id:'w34', account:'Sales Discounts', answer:'A', explanation:'Sales Discounts is contra-Revenue with Debit balance → Income Statement Debit.', category:'Contra-Revenue'},
    {id:'w35', account:'Sales Returns & Allowances', answer:'A', explanation:'Sales R&A is contra-Revenue → Income Statement Debit.', category:'Contra-Revenue'},
    // --- SPECIAL: Income Summary → Not Extended (E) ---
    {id:'w36', account:'Income Summary', answer:'E', explanation:'Income Summary is used in the Adjustments columns only. Its total is NOT extended to IS or BS columns.', category:'Special'},
    {id:'w37', account:'Beginning Merchandise Inventory', answer:'E', explanation:'Beginning Inventory is adjusted through Income Summary. The beginning amount is NOT extended — the ending inventory goes to BS Debit.', category:'Special'},
    // --- ENDING INVENTORY → Balance Sheet Debit (C) ---
    {id:'w38', account:'Merchandise Inventory (ending)', answer:'C', explanation:'Ending Merchandise Inventory is an Asset → Balance Sheet Debit.', category:'Assets'},
    // --- MORE ASSETS ---
    {id:'w39', account:'Prepaid Rent', answer:'C', explanation:'Prepaid Rent is an Asset → Balance Sheet Debit.', category:'Assets'},
    {id:'w40', account:'Computer Equipment', answer:'C', explanation:'Computer Equipment is an Asset → Balance Sheet Debit.', category:'Assets'},
    // --- NET INCOME/LOSS placement ---
    {id:'w41', account:'Net Income (on worksheet)', answer:'A', explanation:'Net Income is written on the Income Statement DEBIT side (to balance IS columns) and Balance Sheet CREDIT side.', category:'Special'},
    {id:'w42', account:'Net Loss (on worksheet)', answer:'B', explanation:'Net Loss is written on the Income Statement CREDIT side (to balance IS columns) and Balance Sheet DEBIT side.', category:'Special'},
];

// WORKSHEET QUIZ STATE
let wsCurrentQuestion = 0;
let wsSelectedQuestions = [];
let wsAnswers = {};
let wsTotalAttempts = parseInt(localStorage.getItem('wsTotalAttempts')) || 0;
let wsTotalCorrect = parseInt(localStorage.getItem('wsTotalCorrect')) || 0;
let wsTotalCompleted = parseInt(localStorage.getItem('wsTotalCompleted')) || 0;
let wsSessionCorrect = 0;

const wsLabels = {
    'A': 'A. Income Statement Debit',
    'B': 'B. Income Statement Credit',
    'C': 'C. Balance Sheet Debit',
    'D': 'D. Balance Sheet Credit',
    'E': 'E. Not Extended'
};

function startWorksheet() {
    wsSelectedQuestions = shuffleArray(wsQuestionBank).slice(0, 20);
    wsCurrentQuestion = 0;
    wsAnswers = {};
    wsSessionCorrect = 0;
    wsTotalAttempts++;
    localStorage.setItem('wsTotalAttempts', wsTotalAttempts);
    renderWSQuestion();
    showSection('worksheet-viewer');
}

function renderWSQuestion() {
    const q = wsSelectedQuestions[wsCurrentQuestion];
    const answered = wsAnswers[q.id] !== undefined;

    let html = `
        <div class="hero">
            <h1>Question ${wsCurrentQuestion + 1} of ${wsSelectedQuestions.length}</h1>
            <p class="hero-subtitle">Score: ${wsSessionCorrect}/${Object.keys(wsAnswers).length} correct</p>
        </div>
        <div class="quiz-question">
            <div class="question-text">To which worksheet column is this account's normal balance extended?</div>
            <div class="dc-account-name">${q.account}</div>
            <div class="ws-options">
    `;

    ['A','B','C','D','E'].forEach(letter => {
        let cls = 'ws-option opt-' + letter.toLowerCase();
        if (answered) {
            if (wsAnswers[q.id] === letter && letter === q.answer) cls += ' selected-correct';
            else if (wsAnswers[q.id] === letter && letter !== q.answer) cls += ' selected-incorrect';
            else if (letter === q.answer) cls += ' show-correct';
        }
        html += `<button class="${cls}" onclick="answerWS('${q.id}','${letter}')" ${answered ? 'disabled' : ''}>${wsLabels[letter]}</button>`;
    });

    html += `</div>`;

    if (answered) {
        const isCorrect = wsAnswers[q.id] === q.answer;
        html += `
            <div class="quiz-explanation show">
                <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect — Answer: ' + wsLabels[q.answer]}</strong><br>
                ${q.explanation}
            </div>
        `;
    }

    html += `</div>`;

    html += `<div style="display:flex; gap:1rem; margin-top:2rem;">`;
    if (wsCurrentQuestion > 0) html += `<button class="btn btn-secondary" onclick="prevWS()">← Previous</button>`;
    if (wsCurrentQuestion < wsSelectedQuestions.length - 1) html += `<button class="btn" onclick="nextWS()">Next →</button>`;
    else html += `<button class="btn" onclick="finishWS()">Finish Quiz</button>`;
    html += `</div>`;

    document.getElementById('wsContent').innerHTML = html;
}

function answerWS(id, answer) {
    if (wsAnswers[id] !== undefined) return;
    const q = wsSelectedQuestions.find(q => q.id === id);
    wsAnswers[id] = answer;
    if (answer === q.answer) {
        wsSessionCorrect++;
        wsTotalCorrect++;
        Progress.addPoints(5);
    }
    wsTotalCompleted++;
    localStorage.setItem('wsTotalCorrect', wsTotalCorrect);
    localStorage.setItem('wsTotalCompleted', wsTotalCompleted);
    updateWSStats();
    renderWSQuestion();
}

function nextWS() { if (wsCurrentQuestion < wsSelectedQuestions.length - 1) { wsCurrentQuestion++; renderWSQuestion(); window.scrollTo(0,0); } }
function prevWS() { if (wsCurrentQuestion > 0) { wsCurrentQuestion--; renderWSQuestion(); window.scrollTo(0,0); } }

function finishWS() {
    const pct = Math.round((wsSessionCorrect / wsSelectedQuestions.length) * 100);
    document.getElementById('wsContent').innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <div class="result-score">${pct}%</div>
            <p>${wsSessionCorrect} of ${wsSelectedQuestions.length} correct!</p>
            <p style="color:var(--text-muted); margin-top:0.5rem;">+${wsSessionCorrect * 5} points earned</p>
            <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                <button class="btn" onclick="startWorksheet()">Try Again (New Questions)</button>
                <button class="btn btn-secondary" onclick="showSection('worksheet')">Back to Menu</button>
            </div>
        </div>`;
    window.scrollTo(0,0);
}

function resetWorksheet() {
    if (confirm('Reset all Worksheet Column progress?')) {
        wsTotalAttempts = 0; wsTotalCorrect = 0; wsTotalCompleted = 0;
        localStorage.setItem('wsTotalAttempts', 0);
        localStorage.setItem('wsTotalCorrect', 0);
        localStorage.setItem('wsTotalCompleted', 0);
        updateWSStats();
    }
}

function updateWSStats() {
    const el = document.getElementById('wsCompleted');
    if (el) {
        el.textContent = wsTotalCompleted;
        const acc = wsTotalCompleted > 0 ? Math.round((wsTotalCorrect / wsTotalCompleted) * 100) : 0;
        document.getElementById('wsAccuracy').textContent = acc + '%';
        document.getElementById('wsAttempts').textContent = wsTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => { updateWSStats(); });
