// =====================================================
// FINANCIAL STATEMENT CLASSIFICATION PRACTICE
// Identify which financial statement(s) each item appears on
// Codes: A=BS, B=IS, C=SCOE, D=BS+SCOE, E=IS+SCOE, F=IS+BS
// Based on UIL 2025-A Group 5
// =====================================================

let fsTotalAttempts = parseInt(localStorage.getItem('fsTotalAttempts')) || 0;
let fsTotalCorrect = parseInt(localStorage.getItem('fsTotalCorrect')) || 0;
let fsTotalCompleted = parseInt(localStorage.getItem('fsTotalCompleted')) || 0;
let fsCurrentQuestion = 0;
let fsSelectedQuestions = [];
let fsSessionCorrect = 0;

const fsCodes = {
    A: 'Balance Sheet only',
    B: 'Income Statement only',
    C: 'Statement of Changes in OE only',
    D: 'Balance Sheet AND SCOE',
    E: 'Income Statement AND SCOE',
    F: 'Income Statement AND Balance Sheet'
};

const fsQuestionBank = [
    // ── BALANCE SHEET ONLY (A) ──
    { item: 'Cash in Bank', answer: 'A', explanation: 'Cash is an Asset → appears only on the Balance Sheet.' },
    { item: 'Accounts Receivable', answer: 'A', explanation: 'A/R is an Asset → Balance Sheet only.' },
    { item: 'Supplies', answer: 'A', explanation: 'Supplies is an Asset → Balance Sheet only.' },
    { item: 'Prepaid Insurance', answer: 'A', explanation: 'Prepaid Insurance is an Asset → Balance Sheet only.' },
    { item: 'Equipment', answer: 'A', explanation: 'Equipment is an Asset → Balance Sheet only.' },
    { item: 'Accounts Payable', answer: 'A', explanation: 'A/P is a Liability → Balance Sheet only.' },
    { item: 'Notes Payable', answer: 'A', explanation: 'Notes Payable is a Liability → Balance Sheet only.' },
    { item: 'Sales Tax Payable', answer: 'A', explanation: 'Sales Tax Payable is a Liability → Balance Sheet only.' },
    { item: 'Total Assets', answer: 'A', explanation: 'Total Assets is a Balance Sheet total → BS only.' },
    { item: 'Total Liabilities', answer: 'A', explanation: 'Total Liabilities is a Balance Sheet total → BS only.' },
    { item: 'Merchandise Inventory (ending)', answer: 'A', explanation: 'Ending Inventory is an Asset on the Balance Sheet (and used in IS calculations, but reported on BS as an asset). For UIL purposes, the ending inventory line item is on the BS.' },
    { item: 'Accumulated Depreciation', answer: 'A', explanation: 'Accumulated Depreciation is a contra-Asset → Balance Sheet only.' },
    { item: 'Petty Cash', answer: 'A', explanation: 'Petty Cash is an Asset → Balance Sheet only.' },

    // ── INCOME STATEMENT ONLY (B) ──
    { item: 'Supplies Expense', answer: 'B', explanation: 'Expenses appear only on the Income Statement.' },
    { item: 'Rent Expense', answer: 'B', explanation: 'Expenses appear only on the Income Statement.' },
    { item: 'Insurance Expense', answer: 'B', explanation: 'Insurance Expense → Income Statement only.' },
    { item: 'Utilities Expense', answer: 'B', explanation: 'Utilities Expense → Income Statement only.' },
    { item: 'Salary Expense', answer: 'B', explanation: 'Salary Expense → Income Statement only.' },
    { item: 'Advertising Expense', answer: 'B', explanation: 'Advertising Expense → Income Statement only.' },
    { item: 'Depreciation Expense', answer: 'B', explanation: 'Depreciation Expense → Income Statement only.' },
    { item: 'Sales', answer: 'B', explanation: 'Revenue accounts appear only on the Income Statement.' },
    { item: 'Sales Returns & Allowances', answer: 'B', explanation: 'Contra-Revenue → Income Statement only.' },
    { item: 'Sales Discounts', answer: 'B', explanation: 'Contra-Revenue → Income Statement only.' },
    { item: 'Purchases', answer: 'B', explanation: 'Purchases is part of COGS → Income Statement only.' },
    { item: 'Purchases Returns & Allowances', answer: 'B', explanation: 'Contra-COGS → Income Statement only.' },
    { item: 'Purchases Discounts', answer: 'B', explanation: 'Contra-COGS → Income Statement only.' },
    { item: 'Transportation In', answer: 'B', explanation: 'Part of COGS → Income Statement only.' },
    { item: 'Net Sales', answer: 'B', explanation: 'Net Sales is calculated on the Income Statement only.' },
    { item: 'Cost of Merchandise Sold', answer: 'B', explanation: 'COGS is calculated on the Income Statement.' },
    { item: 'Gross Profit', answer: 'B', explanation: 'Gross Profit is an IS subtotal → Income Statement only.' },

    // ── STATEMENT OF CHANGES IN OE ONLY (C) ──
    { item: 'Beginning balance of the capital account', answer: 'C', explanation: 'Beginning capital is the starting point for the SCOE. It does NOT appear on the BS (BS only shows ending capital).' },
    { item: 'Owner\'s withdrawals account', answer: 'C', explanation: 'Withdrawals reduce capital on the SCOE only. (On the worksheet, Drawing goes to BS Debit, but on the actual financial statements, it appears on the SCOE.)' },
    { item: 'Additional owner investment', answer: 'C', explanation: 'Additional investments increase capital on the SCOE only.' },

    // ── BALANCE SHEET AND SCOE (D) ──
    { item: 'Ending balance of the capital account', answer: 'D', explanation: 'Ending Capital is calculated on the SCOE, then reported in the Owner\'s Equity section of the Balance Sheet.' },

    // ── INCOME STATEMENT AND SCOE (E) ──
    { item: 'Net Income', answer: 'E', explanation: 'Net Income is calculated on the IS, then flows to the SCOE (where it increases capital).' },
    { item: 'Net Loss', answer: 'E', explanation: 'Net Loss is calculated on the IS, then flows to the SCOE (where it decreases capital).' },

    // ── INCOME STATEMENT AND BALANCE SHEET (F) ──
    { item: 'Merchandise Inventory (beginning)', answer: 'F', explanation: 'Beginning Inventory appears on the IS (as part of COGS calculation) and was on the prior year\'s BS. Some UIL formats consider this F.' },
];

// ── QUIZ FLOW ───────────────────────────────────────
function startFinStatements() {
    fsSelectedQuestions = shuffleArray([...fsQuestionBank]).slice(0, 15);
    fsCurrentQuestion = 0;
    fsSessionCorrect = 0;
    fsTotalAttempts++;
    localStorage.setItem('fsTotalAttempts', fsTotalAttempts);
    updateFSStats();
    showSection('finstatements-viewer');
    renderFSQuestion();
}

function renderFSQuestion() {
    const container = document.getElementById('fsContent');
    if (fsCurrentQuestion >= fsSelectedQuestions.length) {
        renderFSResults(container);
        return;
    }

    const q = fsSelectedQuestions[fsCurrentQuestion];
    let html = `<div class="hero"><h1>Question ${fsCurrentQuestion + 1} of ${fsSelectedQuestions.length}</h1></div>`;

    html += `<div class="cl-question-block">
        <p style="color:var(--text-muted); margin-bottom:0.5rem;">On which financial statement(s) does this item appear?</p>
        <div class="cl-account-name">${q.item}</div>
        <div class="cl-options">`;

    Object.entries(fsCodes).forEach(([code, label]) => {
        html += `<button class="cl-option" onclick="answerFS('${code}')" style="min-width:auto; text-align:left; padding:0.75rem 1.25rem;">
            <strong>${code}.</strong> ${label}</button>`;
    });

    html += `</div><div id="fsFeedback"></div></div>`;
    container.innerHTML = html;
}

function answerFS(selected) {
    const q = fsSelectedQuestions[fsCurrentQuestion];
    const isCorrect = selected === q.answer;

    // Highlight buttons
    document.querySelectorAll('.cl-option').forEach(btn => {
        btn.disabled = true;
        const btnCode = btn.textContent.trim().charAt(0);
        if (btnCode === q.answer) {
            btn.style.background = 'var(--secondary)';
            btn.style.color = '#fff';
            btn.style.borderColor = 'var(--secondary)';
        }
        if (btnCode === selected && !isCorrect) {
            btn.style.background = 'var(--danger)';
            btn.style.color = '#fff';
            btn.style.borderColor = 'var(--danger)';
        }
    });

    const feedback = document.getElementById('fsFeedback');
    if (isCorrect) {
        fsSessionCorrect++;
        fsTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = `<div style="color:var(--secondary); margin-top:1rem; padding:1rem; background:rgba(52,211,153,0.1); border-radius:0.5rem;">
            ✓ Correct! <strong>${q.answer} — ${fsCodes[q.answer]}</strong><br><span style="font-size:0.9rem;">${q.explanation}</span></div>`;
    } else {
        feedback.innerHTML = `<div style="color:var(--danger); margin-top:1rem; padding:1rem; background:rgba(239,68,68,0.1); border-radius:0.5rem;">
            ✗ The answer is <strong>${q.answer} — ${fsCodes[q.answer]}</strong><br><span style="font-size:0.9rem;">${q.explanation}</span></div>`;
    }

    fsTotalCompleted++;
    localStorage.setItem('fsTotalCorrect', fsTotalCorrect);
    localStorage.setItem('fsTotalCompleted', fsTotalCompleted);
    updateFSStats();
    fsCurrentQuestion++;
    setTimeout(renderFSQuestion, 2000);
}

function renderFSResults(container) {
    const pct = Math.round((fsSessionCorrect / fsSelectedQuestions.length) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
    container.innerHTML = `
        <div class="hero"><h1>Quiz Complete!</h1></div>
        <div class="gp-data-card" style="text-align:center; border-color:var(--secondary);">
            <div style="font-size:3rem;">${emoji}</div>
            <h3 style="color:var(--secondary);">Financial Statement Classification</h3>
            <p style="font-size:1.3rem;">${fsSessionCorrect} / ${fsSelectedQuestions.length} correct (${pct}%)</p>
            <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                <button class="btn" onclick="startFinStatements()">New Quiz →</button>
                <button class="btn btn-secondary" onclick="showSection('finstatements')">Back to Menu</button>
            </div>
        </div>`;
}

function resetFinStatements() {
    if (confirm('Reset all Financial Statement Classification progress?')) {
        fsTotalAttempts = 0; fsTotalCorrect = 0; fsTotalCompleted = 0;
        localStorage.setItem('fsTotalAttempts', 0);
        localStorage.setItem('fsTotalCorrect', 0);
        localStorage.setItem('fsTotalCompleted', 0);
        updateFSStats();
        showNotification('Progress reset!');
    }
}

function updateFSStats() {
    const el = document.getElementById('fsCompleted');
    if (el) {
        el.textContent = fsTotalCompleted;
        const acc = fsTotalCompleted > 0 ? Math.round((fsTotalCorrect / fsTotalCompleted) * 100) : 0;
        document.getElementById('fsAccuracy').textContent = acc + '%';
        document.getElementById('fsAttempts').textContent = fsTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', updateFSStats);
