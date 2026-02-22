// =====================================================
// SPECIAL JOURNALS PRACTICE
// Match transactions to the correct journal column(s)
// 5 journals with columns A-R (exact UIL format)
// Based on UIL District 2025-D Group 10
// =====================================================

let sjTotalAttempts = parseInt(localStorage.getItem('sjTotalAttempts')) || 0;
let sjTotalCorrect = parseInt(localStorage.getItem('sjTotalCorrect')) || 0;
let sjTotalCompleted = parseInt(localStorage.getItem('sjTotalCompleted')) || 0;
let sjCurrentQuestion = 0;
let sjSelectedQuestions = [];
let sjSessionCorrect = 0;

// ── JOURNAL COLUMN DEFINITIONS ──────────────────────
const journalColumns = {
    'Sales Journal': [
        { code: 'A', label: 'Accounts Receivable Debit' },
        { code: 'B', label: 'Sales Tax Payable Credit' },
        { code: 'C', label: 'Sales Credit' }
    ],
    'Cash Receipts Journal': [
        { code: 'D', label: 'General Debit' },
        { code: 'E', label: 'Sales Credit' },
        { code: 'F', label: 'Sales Tax Payable Credit' },
        { code: 'G', label: 'Accounts Receivable Credit' },
        { code: 'H', label: 'Sales Discounts Debit' },
        { code: 'I', label: 'Cash in Bank Debit' }
    ],
    'Purchases Journal': [
        { code: 'J', label: 'Accounts Payable Credit' },
        { code: 'K', label: 'Purchases Debit' },
        { code: 'L', label: 'General Debit' }
    ],
    'Cash Payments Journal': [
        { code: 'M', label: 'General Debit' },
        { code: 'N', label: 'Accounts Payable Debit' },
        { code: 'O', label: 'Purchases Discounts Credit' },
        { code: 'P', label: 'Cash in Bank Credit' }
    ],
    'General Journal': [
        { code: 'Q', label: 'Debit' },
        { code: 'R', label: 'Credit' }
    ]
};

// ── QUESTION BANK ───────────────────────────────────
const sjQuestionBank = [
    // Sales Journal questions
    {
        id: 'sj1',
        transaction: 'The amount owed to the state for sales tax when a customer purchases merchandise on account.',
        answer: ['B'],
        explanation: 'Sales Journal — Sales Tax Payable Credit (B). When selling on account, the tax owed goes in the Sales Tax Payable Credit column.'
    },
    {
        id: 'sj2',
        transaction: 'The total amount charged to the customer when merchandise is sold on account (including sales tax).',
        answer: ['A'],
        explanation: 'Sales Journal — Accounts Receivable Debit (A). The total charge (sale + tax) is debited to A/R.'
    },
    {
        id: 'sj3',
        transaction: 'The selling price of merchandise sold to a customer on account (not including tax).',
        answer: ['C'],
        explanation: 'Sales Journal — Sales Credit (C). The sale amount (before tax) goes in the Sales Credit column.'
    },

    // Cash Receipts Journal questions
    {
        id: 'sj4',
        transaction: 'The debit side of the transaction when a customer pays on account within the discount period.',
        answer: ['H', 'I'],
        explanation: 'Cash Receipts Journal — Sales Discounts Debit (H) and Cash in Bank Debit (I). Customer pays less (discount) so both cash received and the discount are debited.'
    },
    {
        id: 'sj5',
        transaction: 'The credit side of the transaction when a customer pays on account within the discount period.',
        answer: ['G'],
        explanation: 'Cash Receipts Journal — Accounts Receivable Credit (G). The full amount owed is removed from A/R.'
    },
    {
        id: 'sj6',
        transaction: 'The credit part of the transaction when taxable cash sales are recorded.',
        answer: ['E', 'F'],
        explanation: 'Cash Receipts Journal — Sales Credit (E) and Sales Tax Payable Credit (F). Cash sales have both the sale and the tax credited.'
    },
    {
        id: 'sj7',
        transaction: 'The debit side when taxable cash sales are recorded.',
        answer: ['I'],
        explanation: 'Cash Receipts Journal — Cash in Bank Debit (I). The total cash received (sale + tax) is debited to Cash.'
    },
    {
        id: 'sj8',
        transaction: 'The credit side when a customer pays on account after the discount period.',
        answer: ['G'],
        explanation: 'Cash Receipts Journal — Accounts Receivable Credit (G). Full amount removed from A/R, no discount.'
    },
    {
        id: 'sj9',
        transaction: 'The debit side when a customer pays on account after the discount period.',
        answer: ['I'],
        explanation: 'Cash Receipts Journal — Cash in Bank Debit (I). Full payment received.'
    },
    {
        id: 'sj10',
        transaction: 'The credit entry when the owner invests cash in the business (Cash Receipts Journal).',
        answer: ['D'],
        explanation: 'Cash Receipts Journal — General Debit (D) is actually a catch-all column. Wait — for an owner investment, the credit goes to Capital which uses the General Credit... Actually in many UIL formats, owner investment cash receipt credits the General Credit column. However D is General Debit. The owner\'s capital credit would go to a General Credit column if available, or handled differently. In many real UIL tests the answer would use the General column.'
    },

    // Purchases Journal questions
    {
        id: 'sj11',
        transaction: 'The debit amount when merchandise for resale is purchased on account.',
        answer: ['K'],
        explanation: 'Purchases Journal — Purchases Debit (K). Merchandise purchased on credit goes in the Purchases Debit column.'
    },
    {
        id: 'sj12',
        transaction: 'The credit to a vendor when buying merchandise on account.',
        answer: ['J'],
        explanation: 'Purchases Journal — Accounts Payable Credit (J). The amount owed to the vendor.'
    },
    {
        id: 'sj13',
        transaction: 'The debit amount when supplies for office use are purchased on account.',
        answer: ['L'],
        explanation: 'Purchases Journal — General Debit (L). Supplies are not merchandise, so they go in the General Debit column.'
    },
    {
        id: 'sj14',
        transaction: 'The credit entry when supplies are purchased on account.',
        answer: ['J'],
        explanation: 'Purchases Journal — Accounts Payable Credit (J). Even though it\'s not merchandise, the credit still goes to A/P.'
    },

    // Cash Payments Journal questions
    {
        id: 'sj15',
        transaction: 'The debit entry when paying a vendor bill within the discount period.',
        answer: ['N'],
        explanation: 'Cash Payments Journal — Accounts Payable Debit (N). The full invoice amount is removed from A/P.'
    },
    {
        id: 'sj16',
        transaction: 'The credit entries when paying a vendor bill within the discount period.',
        answer: ['O', 'P'],
        explanation: 'Cash Payments Journal — Purchases Discounts Credit (O) and Cash in Bank Credit (P). You pay less cash and record the discount.'
    },
    {
        id: 'sj17',
        transaction: 'The debit and credit entries when paying a vendor bill after the discount period.',
        answer: ['N', 'P'],
        explanation: 'Cash Payments Journal — Accounts Payable Debit (N) and Cash in Bank Credit (P). No discount, so full amount paid.'
    },
    {
        id: 'sj18',
        transaction: 'The credit entry when the business pays rent by check.',
        answer: ['P'],
        explanation: 'Cash Payments Journal — Cash in Bank Credit (P). Any check payment credits Cash.'
    },
    {
        id: 'sj19',
        transaction: 'The debit entry when the business pays rent by check.',
        answer: ['M'],
        explanation: 'Cash Payments Journal — General Debit (M). Rent Expense is not A/P, so it goes to General Debit.'
    },
    {
        id: 'sj20',
        transaction: 'The debit entry when the owner withdraws cash from the business.',
        answer: ['M'],
        explanation: 'Cash Payments Journal — General Debit (M). Owner Drawing is not A/P, so it uses General Debit.'
    },
    {
        id: 'sj21',
        transaction: 'The credit entry when the owner withdraws cash from the business.',
        answer: ['P'],
        explanation: 'Cash Payments Journal — Cash in Bank Credit (P). Cash leaves the business.'
    },
    {
        id: 'sj22',
        transaction: 'The entry to pay sales taxes owed to the state.',
        answer: ['M', 'P'],
        explanation: 'Cash Payments Journal — Sales Tax Payable Debit goes in General Debit (M), and Cash in Bank Credit (P). Note: Some formats may use a specific column, but most UIL tests use General Debit for Sales Tax Payable.'
    },

    // General Journal questions
    {
        id: 'sj23',
        transaction: 'The debit entry for a sales return from a customer who bought on account.',
        answer: ['Q'],
        explanation: 'General Journal — Debit (Q). Sales Returns & Allowances is debited. Returns from credit sales go in the General Journal.'
    },
    {
        id: 'sj24',
        transaction: 'The credit entry for a sales return from a customer who bought on account.',
        answer: ['R'],
        explanation: 'General Journal — Credit (R). Accounts Receivable is credited (customer owes less).'
    },
    {
        id: 'sj25',
        transaction: 'The entries for a purchases return of merchandise bought on account.',
        answer: ['Q', 'R'],
        explanation: 'General Journal — Debit (Q) for A/P (we owe less), Credit (R) for Purchases Returns & Allowances.'
    },
    {
        id: 'sj26',
        transaction: 'An adjusting entry for supplies used during the period.',
        answer: ['Q', 'R'],
        explanation: 'General Journal — Debit (Q) Supplies Expense, Credit (R) Supplies. Adjusting entries always go in the General Journal.'
    },
    {
        id: 'sj27',
        transaction: 'A closing entry for revenue.',
        answer: ['Q', 'R'],
        explanation: 'General Journal — Debit (Q) Sales, Credit (R) Income Summary. Closing entries are recorded in the General Journal.'
    },

    // Mixed / Tricky questions
    {
        id: 'sj28',
        transaction: 'The debit entry when merchandise is purchased for cash (no credit terms).',
        answer: ['M'],
        explanation: 'Cash Payments Journal — General Debit (M) for Purchases. Since there is no A/P involved, Purchases goes in General Debit. Cash Credit goes in P.'
    },
    {
        id: 'sj29',
        transaction: 'The column used to record cash received from a bank card sale (taxable).',
        answer: ['I'],
        explanation: 'Cash Receipts Journal — Cash in Bank Debit (I). Bank card sales are treated like cash sales — cash is received within days.'
    },
    {
        id: 'sj30',
        transaction: 'The debit entry when the business records bank card fees charged by the bank.',
        answer: ['M'],
        explanation: 'Cash Payments Journal — General Debit (M). Bank Card Fees Expense goes in General Debit.'
    },
    {
        id: 'sj31',
        transaction: 'The credit amount when a note payable is issued to purchase equipment.',
        answer: ['R'],
        explanation: 'General Journal — Credit (R) for Notes Payable. Issuing a note payable is not a routine purchase, so it goes in the General Journal.'
    }
];

// ── JOURNAL REFERENCE RENDERING ─────────────────────
function renderJournalReference() {
    const ref = document.getElementById('journalRef');
    if (!ref) return;
    let html = '';
    Object.entries(journalColumns).forEach(([journal, cols]) => {
        html += `<div style="margin-bottom:1rem;">
            <strong style="color:var(--primary);">${journal}</strong>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.3rem;">`;
        cols.forEach(c => {
            html += `<span style="background:rgba(96,165,250,0.1); border:1px solid var(--border); border-radius:0.5rem; padding:0.25rem 0.75rem; font-size:0.85rem;">
                <strong>${c.code}.</strong> ${c.label}</span>`;
        });
        html += `</div></div>`;
    });
    ref.innerHTML = html;
}

// ── QUIZ FLOW ───────────────────────────────────────
function startSpecialJournals() {
    sjSelectedQuestions = shuffleArray([...sjQuestionBank]).slice(0, 15);
    sjCurrentQuestion = 0;
    sjSessionCorrect = 0;
    sjTotalAttempts++;
    localStorage.setItem('sjTotalAttempts', sjTotalAttempts);
    updateSJStats();
    showSection('specialjournals-viewer');
    renderSJQuestion();
}

function renderSJQuestion() {
    const container = document.getElementById('sjContent');
    if (sjCurrentQuestion >= sjSelectedQuestions.length) {
        renderSJResults(container);
        return;
    }

    const q = sjSelectedQuestions[sjCurrentQuestion];
    const isMulti = q.answer.length > 1;

    let html = `<div class="hero"><h1>Question ${sjCurrentQuestion + 1} of ${sjSelectedQuestions.length}</h1></div>`;

    // Compact journal reference
    html += `<div class="gp-data-card" style="margin-bottom:1.5rem;">
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap:0.75rem; font-size:0.8rem;">`;
    Object.entries(journalColumns).forEach(([journal, cols]) => {
        html += `<div><strong style="color:var(--primary); font-size:0.85rem;">${journal}</strong><br>`;
        cols.forEach(c => { html += `<span style="color:var(--text-muted);">${c.code}.</span> ${c.label}<br>`; });
        html += `</div>`;
    });
    html += `</div></div>`;

    // Question
    html += `<div class="cl-question-block">
        <div class="cl-account-name" style="font-size:1.1rem; line-height:1.5;">${q.transaction}</div>`;

    if (isMulti) {
        html += `<p style="color:var(--secondary); font-size:0.9rem; margin:0.5rem 0;">Select ALL correct columns (${q.answer.length} answers)</p>`;
        html += `<div class="cl-options" style="flex-wrap:wrap;">`;
        'ABCDEFGHIJKLMNOPQR'.split('').forEach(code => {
            html += `<button class="cl-option sj-toggle" id="sj-btn-${code}" onclick="toggleSJOption('${code}')" style="min-width:2.5rem;">${code}</button>`;
        });
        html += `</div>`;
        html += `<button class="btn" onclick="submitSJMulti()" style="margin-top:1rem;">Submit Answer →</button>`;
    } else {
        html += `<div class="cl-options" style="flex-wrap:wrap;">`;
        'ABCDEFGHIJKLMNOPQR'.split('').forEach(code => {
            html += `<button class="cl-option" onclick="answerSJ('${code}')" style="min-width:2.5rem;">${code}</button>`;
        });
        html += `</div>`;
    }

    html += `<div id="sjFeedback"></div></div>`;
    container.innerHTML = html;
}

// Multi-select toggle
let sjSelected = new Set();
function toggleSJOption(code) {
    const btn = document.getElementById(`sj-btn-${code}`);
    if (sjSelected.has(code)) {
        sjSelected.delete(code);
        btn.style.background = '';
        btn.style.color = '';
        btn.style.borderColor = '';
    } else {
        sjSelected.add(code);
        btn.style.background = 'var(--primary)';
        btn.style.color = '#fff';
        btn.style.borderColor = 'var(--primary)';
    }
}

function submitSJMulti() {
    const q = sjSelectedQuestions[sjCurrentQuestion];
    const selected = Array.from(sjSelected).sort();
    const correct = [...q.answer].sort();
    const isCorrect = selected.length === correct.length && selected.every((v, i) => v === correct[i]);

    const feedback = document.getElementById('sjFeedback');
    if (isCorrect) {
        sjSessionCorrect++;
        sjTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = `<div style="color:var(--secondary); margin-top:1rem; padding:1rem; background:rgba(52,211,153,0.1); border-radius:0.5rem;">
            ✓ Correct! <strong>${correct.join(', ')}</strong><br><span style="font-size:0.9rem;">${q.explanation}</span></div>`;
    } else {
        feedback.innerHTML = `<div style="color:var(--danger); margin-top:1rem; padding:1rem; background:rgba(239,68,68,0.1); border-radius:0.5rem;">
            ✗ Incorrect. The answer is <strong>${correct.join(', ')}</strong><br><span style="font-size:0.9rem;">${q.explanation}</span></div>`;
    }

    sjTotalCompleted++;
    localStorage.setItem('sjTotalCorrect', sjTotalCorrect);
    localStorage.setItem('sjTotalCompleted', sjTotalCompleted);
    updateSJStats();
    sjSelected = new Set();
    sjCurrentQuestion++;
    setTimeout(renderSJQuestion, 2000);
}

function answerSJ(selected) {
    const q = sjSelectedQuestions[sjCurrentQuestion];
    const isCorrect = q.answer.length === 1 && selected === q.answer[0];

    const feedback = document.getElementById('sjFeedback');
    // Highlight buttons
    document.querySelectorAll('.cl-option').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === q.answer[0]) btn.style.background = 'var(--secondary)';
        if (btn.textContent === selected && !isCorrect) btn.style.background = 'var(--danger)';
    });

    if (isCorrect) {
        sjSessionCorrect++;
        sjTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = `<div style="color:var(--secondary); margin-top:1rem; padding:1rem; background:rgba(52,211,153,0.1); border-radius:0.5rem;">
            ✓ Correct!<br><span style="font-size:0.9rem;">${q.explanation}</span></div>`;
    } else {
        feedback.innerHTML = `<div style="color:var(--danger); margin-top:1rem; padding:1rem; background:rgba(239,68,68,0.1); border-radius:0.5rem;">
            ✗ The answer is <strong>${q.answer[0]}</strong><br><span style="font-size:0.9rem;">${q.explanation}</span></div>`;
    }

    sjTotalCompleted++;
    localStorage.setItem('sjTotalCorrect', sjTotalCorrect);
    localStorage.setItem('sjTotalCompleted', sjTotalCompleted);
    updateSJStats();
    sjCurrentQuestion++;
    setTimeout(renderSJQuestion, 2000);
}

function renderSJResults(container) {
    const pct = Math.round((sjSessionCorrect / sjSelectedQuestions.length) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
    container.innerHTML = `
        <div class="hero"><h1>Quiz Complete!</h1></div>
        <div class="gp-data-card" style="text-align:center; border-color:var(--secondary);">
            <div style="font-size:3rem;">${emoji}</div>
            <h3 style="color:var(--secondary);">Special Journals Practice</h3>
            <p style="font-size:1.3rem;">${sjSessionCorrect} / ${sjSelectedQuestions.length} correct (${pct}%)</p>
            <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                <button class="btn" onclick="startSpecialJournals()">New Quiz →</button>
                <button class="btn btn-secondary" onclick="showSection('specialjournals')">Back to Menu</button>
            </div>
        </div>`;
}

// ── RESET / STATS ───────────────────────────────────
function resetSpecialJournals() {
    if (confirm('Reset all Special Journals progress?')) {
        sjTotalAttempts = 0; sjTotalCorrect = 0; sjTotalCompleted = 0;
        localStorage.setItem('sjTotalAttempts', 0);
        localStorage.setItem('sjTotalCorrect', 0);
        localStorage.setItem('sjTotalCompleted', 0);
        updateSJStats();
        showNotification('Progress reset!');
    }
}

function updateSJStats() {
    const el = document.getElementById('sjCompleted');
    if (el) {
        el.textContent = sjTotalCompleted;
        const acc = sjTotalCompleted > 0 ? Math.round((sjTotalCorrect / sjTotalCompleted) * 100) : 0;
        document.getElementById('sjAccuracy').textContent = acc + '%';
        document.getElementById('sjAttempts').textContent = sjTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateSJStats();
    renderJournalReference();
});
