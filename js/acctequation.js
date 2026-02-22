// =====================================================
// ACCOUNTING EQUATION & CAPITAL ACCOUNT PRACTICE
// Two problem types:
//   1) Multi-year capital account word problems
//   2) Transaction analysis (identify from A=L+OE changes)
// Based on real UIL test formats (2022-2026)
// =====================================================

let aeTotalAttempts = parseInt(localStorage.getItem('aeTotalAttempts')) || 0;
let aeTotalCorrect = parseInt(localStorage.getItem('aeTotalCorrect')) || 0;
let aeTotalCompleted = parseInt(localStorage.getItem('aeTotalCompleted')) || 0;
let aeCurrentProblem = null;
let aeStep = 0;
let aeStepsCorrect = 0;

// ── TRANSACTION CODES (UIL format) ──────────────────
const txnCodes = {
    A: 'Bought an asset for cash only',
    B: 'Bought an asset on credit only',
    C: 'Bought an asset with cash down and the balance on credit',
    D: 'Owner invests in business',
    E: 'Payment of a liability',
    F: 'Billed a customer for services provided',
    G: 'Took out a loan and deposited the proceeds',
    H: 'Performed a service and received cash',
    I: 'Customer paid on account',
    J: 'Recorded an expense paid with cash',
    K: 'Owner withdrawal of cash'
};

// ── TYPE 1: CAPITAL WORD PROBLEMS ───────────────────
function generateCapitalProblem() {
    const owner = randName();
    const startMonth = ['January', 'March', 'May', 'July'][Math.floor(Math.random() * 4)];
    const startYear = 2021 + Math.floor(Math.random() * 4);

    // Year 1
    const y1Invest = Math.round((20000 + Math.random() * 60000) / 1000) * 1000;
    const y1Revenue = Math.round((15000 + Math.random() * 50000) / 1000) * 1000;
    const y1Expenses = Math.round((8000 + Math.random() * 30000) / 1000) * 1000;
    const y1Withdrawals = Math.random() > 0.4 ? Math.round((2000 + Math.random() * 10000) / 500) * 500 : 0;
    const y1NetIncome = y1Revenue - y1Expenses;
    const y1EndCapital = y1Invest + y1NetIncome - y1Withdrawals;

    // Year 2
    const y2Invest = Math.random() > 0.5 ? Math.round((5000 + Math.random() * 20000) / 1000) * 1000 : 0;
    const y2Revenue = Math.round((30000 + Math.random() * 120000) / 1000) * 1000;
    const y2Expenses = Math.round((15000 + Math.random() * 80000) / 1000) * 1000;
    const y2Withdrawals = Math.round((5000 + Math.random() * 25000) / 500) * 500;
    const y2NetIncome = y2Revenue - y2Expenses;
    const y2EndCapital = y1EndCapital + y2Invest + y2NetIncome - y2Withdrawals;

    // Year 3
    const y3Invest = Math.random() > 0.6 ? Math.round((5000 + Math.random() * 15000) / 1000) * 1000 : 0;
    const y3Revenue = Math.round((50000 + Math.random() * 180000) / 1000) * 1000;
    const y3Expenses = Math.round((25000 + Math.random() * 100000) / 1000) * 1000;
    const y3NetIncome = y3Revenue - y3Expenses;
    // We'll ask them to solve for withdrawals
    const y3EndCapital = Math.round((y2EndCapital + y3Invest + y3NetIncome) * (0.5 + Math.random() * 0.35) / 1000) * 1000;
    const y3Withdrawals = y2EndCapital + y3Invest + y3NetIncome - y3EndCapital;

    const year1 = startYear;
    const year2 = startYear + 1;
    const year3 = startYear + 2;

    return {
        type: 'capital',
        owner, startMonth, year1, year2, year3,
        y1: { invest: y1Invest, revenue: y1Revenue, expenses: y1Expenses, withdrawals: y1Withdrawals, netIncome: y1NetIncome, endCapital: y1EndCapital },
        y2: { invest: y2Invest, revenue: y2Revenue, expenses: y2Expenses, withdrawals: y2Withdrawals, netIncome: y2NetIncome, endCapital: y2EndCapital },
        y3: { invest: y3Invest, revenue: y3Revenue, expenses: y3Expenses, netIncome: y3NetIncome, endCapital: y3EndCapital, withdrawals: y3Withdrawals },
        steps: [
            { label: `Net Income for ${year1}`, hint: `Revenue ${fmt(y1Revenue)} − Expenses ${fmt(y1Expenses)}`, answer: y1NetIncome },
            { label: `Ending Capital on Dec 31, ${year1}`, hint: `Investment + Net Income − Withdrawals`, answer: y1EndCapital },
            { label: `Net Income for ${year2}`, hint: `Revenue ${fmt(y2Revenue)} − Expenses ${fmt(y2Expenses)}`, answer: y2NetIncome },
            { label: `Ending Capital on Dec 31, ${year2}`, hint: `Beginning Capital + Investments + Net Income − Withdrawals`, answer: y2EndCapital },
            { label: `Net Income for ${year3}`, hint: `Revenue ${fmt(y3Revenue)} − Expenses ${fmt(y3Expenses)}`, answer: y3NetIncome },
            { label: `Total Withdrawals in ${year3}`, hint: `Ending Capital given as ${fmt(y3EndCapital)}. Solve: Beg Cap + Invest + NI − Withdrawals = End Cap`, answer: y3Withdrawals }
        ]
    };
}

// ── TYPE 2: TRANSACTION ANALYSIS ────────────────────
function generateTransactionProblem() {
    const owner = randName();
    // Build 7 transactions with equation changes
    const templateTxns = [
        { code: 'D', desc: 'Owner invested cash', cashD: 1, oeD: 1 },
        { code: 'A', desc: 'Purchased equipment for cash', cashD: -1, equipD: 1 },
        { code: 'C', desc: 'Purchased equipment, cash down + credit', cashD: -1, equipD: 1, apD: 1 },
        { code: 'H', desc: 'Received cash for services performed', cashD: 1, revD: 1 },
        { code: 'E', desc: 'Paid a creditor on account', cashD: -1, apD: -1 },
        { code: 'J', desc: 'Paid an expense with cash', cashD: -1, expD: 1 },
        { code: 'F', desc: 'Billed a customer for services', arD: 1, revD: 1 },
        { code: 'I', desc: 'Received cash from a customer on account', cashD: 1, arD: -1 },
        { code: 'K', desc: 'Owner withdrew cash', cashD: -1, oeD: -1 },
        { code: 'B', desc: 'Purchased supplies on credit', suppD: 1, apD: 1 },
        { code: 'G', desc: 'Took out a bank loan', cashD: 1, npD: 1 },
    ];

    // Pick 7-8 transactions, always start with D (owner invests)
    const selected = [templateTxns[0]]; // Always start with owner investment
    const pool = shuffleArray(templateTxns.slice(1));
    for (let i = 0; i < 6 && i < pool.length; i++) selected.push(pool[i]);

    // Build equation state and amounts
    let cash = 0, ar = 0, supp = 0, equip = 0, ap = 0, np = 0, capital = 0, rev = 0, exp = 0;
    const rows = [];

    selected.forEach((t, i) => {
        const amt = (i === 0) ? Math.round((30000 + Math.random() * 50000) / 1000) * 1000
            : Math.round((500 + Math.random() * 15000) / 100) * 100;

        // For C-type: split between cash and credit
        let cashAmt = amt, creditAmt = 0;
        if (t.code === 'C') {
            cashAmt = Math.round(amt * 0.4 / 100) * 100;
            creditAmt = amt - cashAmt;
        }

        // Apply changes
        if (t.cashD) cash += t.cashD * (t.code === 'C' ? cashAmt : amt);
        if (t.arD) ar += t.arD * amt;
        if (t.suppD) supp += t.suppD * amt;
        if (t.equipD) equip += t.equipD * amt;
        if (t.apD) ap += t.apD * (t.code === 'C' ? creditAmt : amt);
        if (t.npD) np += t.npD * amt;
        if (t.oeD) capital += t.oeD * amt;
        if (t.revD) rev += t.revD * amt;
        if (t.expD) exp += t.expD * amt;

        rows.push({
            num: i + 1,
            code: t.code,
            cash, ar, supp, equip, ap, np, capital, rev, exp
        });
    });

    return {
        type: 'transaction',
        owner,
        rows,
        questions: rows.map((r, i) => ({
            label: `Transaction (${r.num})`,
            answer: r.code
        }))
    };
}

// ── START / RENDER ──────────────────────────────────
function startAcctEquation() {
    // Alternate between problem types
    if (Math.random() > 0.5) {
        aeCurrentProblem = generateCapitalProblem();
    } else {
        aeCurrentProblem = generateTransactionProblem();
    }
    aeStep = 0;
    aeStepsCorrect = 0;
    aeTotalAttempts++;
    localStorage.setItem('aeTotalAttempts', aeTotalAttempts);
    updateAEStats();
    showSection('acctequation-viewer');
    renderAEProblem();
}

function renderAEProblem() {
    const p = aeCurrentProblem;
    if (p.type === 'capital') renderCapitalProblem(p);
    else renderTransactionProblem(p);
}

function renderCapitalProblem(p) {
    const container = document.getElementById('aeContent');
    let html = `<div class="hero"><h1>${p.owner}'s Business</h1>
        <p class="hero-subtitle">Capital Account — Multi-Year Scenario</p></div>`;

    // Scenario data
    html += `<div class="gp-data-card"><h3>Scenario</h3>
        <p style="margin-bottom:1rem;">A new business was started by ${p.owner} on ${p.startMonth} 1, ${p.year1}.</p>`;

    // Year 1
    html += `<div class="gp-data-row"><span>Year ${p.year1} — Owner invested</span><span>${fmt(p.y1.invest)}</span></div>`;
    html += `<div class="gp-data-row"><span>Year ${p.year1} — Revenue</span><span>${fmt(p.y1.revenue)}</span></div>`;
    html += `<div class="gp-data-row"><span>Year ${p.year1} — Expenses</span><span>${fmt(p.y1.expenses)}</span></div>`;
    if (p.y1.withdrawals > 0) html += `<div class="gp-data-row"><span>Year ${p.year1} — Withdrawals</span><span>${fmt(p.y1.withdrawals)}</span></div>`;
    else html += `<div class="gp-data-row"><span>Year ${p.year1} — Withdrawals</span><span>None</span></div>`;

    // Year 2
    if (p.y2.invest > 0) html += `<div class="gp-data-row"><span>Year ${p.year2} — Additional investment</span><span>${fmt(p.y2.invest)}</span></div>`;
    else html += `<div class="gp-data-row"><span>Year ${p.year2} — Additional investment</span><span>None</span></div>`;
    html += `<div class="gp-data-row"><span>Year ${p.year2} — Revenue</span><span>${fmt(p.y2.revenue)}</span></div>`;
    html += `<div class="gp-data-row"><span>Year ${p.year2} — Expenses</span><span>${fmt(p.y2.expenses)}</span></div>`;
    html += `<div class="gp-data-row"><span>Year ${p.year2} — Withdrawals</span><span>${fmt(p.y2.withdrawals)}</span></div>`;

    // Year 3
    if (p.y3.invest > 0) html += `<div class="gp-data-row"><span>Year ${p.year3} — Additional investment</span><span>${fmt(p.y3.invest)}</span></div>`;
    else html += `<div class="gp-data-row"><span>Year ${p.year3} — Additional investment</span><span>None</span></div>`;
    html += `<div class="gp-data-row"><span>Year ${p.year3} — Revenue</span><span>${fmt(p.y3.revenue)}</span></div>`;
    html += `<div class="gp-data-row"><span>Year ${p.year3} — Expenses</span><span>${fmt(p.y3.expenses)}</span></div>`;
    html += `<div class="gp-data-row"><span style="color:var(--secondary);"><strong>Year ${p.year3} — Ending Capital (given)</strong></span><span style="color:var(--secondary);"><strong>${fmt(p.y3.endCapital)}</strong></span></div>`;
    html += `</div>`;

    // Steps
    html += `<h3 style="margin:1.5rem 0 1rem;">Solve Step by Step</h3>`;
    p.steps.forEach((step, i) => {
        const locked = i > aeStep;
        const done = i < aeStep;
        html += `<div class="gp-step" style="opacity:${locked ? 0.4 : 1};">
            <strong>Step ${i + 1}: ${step.label}</strong>
            <p style="color:var(--text-muted); font-size:0.9rem;">${step.hint}</p>`;
        if (done) {
            const val = step.answer;
            const display = val < 0 ? `<span style="color:var(--danger);">(${fmt(Math.abs(val))})</span>` : fmt(val);
            html += `<div class="gp-result" style="color:var(--secondary);">✓ ${display}</div>`;
        } else if (i === aeStep) {
            html += `<p style="color:var(--text-muted); font-size:0.85rem;">Use brackets or parentheses for negative amounts. Enter numbers only.</p>
                <input type="text" id="aeInput" class="gp-input" placeholder="Enter amount..."
                    onkeydown="if(event.key==='Enter')checkAECapitalStep()">
                <button class="gp-check-btn" onclick="checkAECapitalStep()">Check →</button>
                <div id="aeFeedback"></div>`;
        }
        html += `</div>`;
    });

    // Completion
    if (aeStep >= p.steps.length) {
        html += renderAEComplete(p.steps.length);
    }

    container.innerHTML = html;
    const inp = document.getElementById('aeInput');
    if (inp) inp.focus();
}

function checkAECapitalStep() {
    const input = document.getElementById('aeInput');
    const feedback = document.getElementById('aeFeedback');
    if (!input || !feedback) return;

    let raw = input.value.trim().replace(/[$,]/g, '');
    // Handle brackets/parentheses as negative
    const isNeg = /^\(.*\)$/.test(raw) || /^<.*>$/.test(raw) || raw.startsWith('-');
    raw = raw.replace(/[()<>\-]/g, '');
    let val = parseFloat(raw);
    if (isNaN(val)) {
        feedback.innerHTML = '<span style="color:var(--danger);">Please enter a valid number.</span>';
        return;
    }
    if (isNeg) val = -val;

    const step = aeCurrentProblem.steps[aeStep];
    const correct = step.answer;
    const isCorrect = Math.abs(val - correct) < 1;

    if (isCorrect) {
        aeStepsCorrect++;
        aeTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = '<span style="color:var(--secondary);">✓ Correct!</span>';
    } else {
        const display = correct < 0 ? `(${fmt(Math.abs(correct))})` : fmt(correct);
        feedback.innerHTML = `<span style="color:var(--danger);">✗ The answer is <strong>${display}</strong></span>`;
    }

    aeStep++;
    aeTotalCompleted++;
    localStorage.setItem('aeTotalCorrect', aeTotalCorrect);
    localStorage.setItem('aeTotalCompleted', aeTotalCompleted);
    updateAEStats();
    setTimeout(renderAEProblem, 1200);
}

// ── TRANSACTION ANALYSIS RENDERING ──────────────────
function renderTransactionProblem(p) {
    const container = document.getElementById('aeContent');
    let html = `<div class="hero"><h1>${p.owner}'s Business</h1>
        <p class="hero-subtitle">Transaction Analysis — Identify Each Transaction</p></div>`;

    // Code reference
    html += `<div class="gp-data-card"><h3>Transaction Codes</h3>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:0.5rem;">`;
    Object.entries(txnCodes).forEach(([code, desc]) => {
        html += `<div style="font-size:0.85rem;"><strong style="color:var(--primary);">${code}.</strong> ${desc}</div>`;
    });
    html += `</div></div>`;

    // Equation table
    html += `<div class="gp-data-card"><h3>Accounting Equation After Each Transaction</h3>
        <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; color:var(--text-light);">
        <thead><tr style="border-bottom:2px solid var(--border);">
            <th style="padding:0.5rem; text-align:center;">Txn</th>
            <th style="padding:0.5rem; text-align:right;">Cash</th>
            <th style="padding:0.5rem; text-align:right;">+ A/R</th>
            <th style="padding:0.5rem; text-align:right;">+ Supp</th>
            <th style="padding:0.5rem; text-align:right;">+ Equip</th>
            <th style="padding:0.5rem; text-align:center;">=</th>
            <th style="padding:0.5rem; text-align:right;">A/P</th>
            <th style="padding:0.5rem; text-align:right;">+ N/P</th>
            <th style="padding:0.5rem; text-align:right;">+ Capital</th>
            <th style="padding:0.5rem; text-align:right;">+ Rev</th>
            <th style="padding:0.5rem; text-align:right;">− Exp</th>
        </tr></thead><tbody>`;

    p.rows.forEach(r => {
        html += `<tr style="border-bottom:1px solid var(--border);">
            <td style="padding:0.4rem; text-align:center; font-weight:bold;">${r.num}</td>
            <td style="padding:0.4rem; text-align:right;">${fmt(r.cash)}</td>
            <td style="padding:0.4rem; text-align:right;">${r.ar ? fmt(r.ar) : ''}</td>
            <td style="padding:0.4rem; text-align:right;">${r.supp ? fmt(r.supp) : ''}</td>
            <td style="padding:0.4rem; text-align:right;">${r.equip ? fmt(r.equip) : ''}</td>
            <td style="padding:0.4rem; text-align:center;">=</td>
            <td style="padding:0.4rem; text-align:right;">${r.ap ? fmt(r.ap) : ''}</td>
            <td style="padding:0.4rem; text-align:right;">${r.np ? fmt(r.np) : ''}</td>
            <td style="padding:0.4rem; text-align:right;">${fmt(r.capital)}</td>
            <td style="padding:0.4rem; text-align:right;">${r.rev ? fmt(r.rev) : ''}</td>
            <td style="padding:0.4rem; text-align:right;">${r.exp ? fmt(r.exp) : ''}</td>
        </tr>`;
    });
    html += `</tbody></table></div></div>`;

    // Questions
    html += `<h3 style="margin:1.5rem 0 1rem;">Identify Each Transaction (${aeStep}/${p.questions.length})</h3>`;

    p.questions.forEach((q, i) => {
        const locked = i > aeStep;
        const done = i < aeStep;
        html += `<div class="gp-step" style="opacity:${locked ? 0.4 : 1};">
            <strong>${q.label}</strong>`;
        if (done) {
            html += `<div class="gp-result" style="color:var(--secondary);">✓ ${q.answer} — ${txnCodes[q.answer]}</div>`;
        } else if (i === aeStep) {
            html += `<div class="cl-options" style="margin-top:0.5rem;">`;
            Object.keys(txnCodes).forEach(code => {
                html += `<button class="cl-option" onclick="answerAETxn('${code}')">${code}</button>`;
            });
            html += `</div><div id="aeFeedback"></div>`;
        }
        html += `</div>`;
    });

    if (aeStep >= p.questions.length) {
        html += renderAEComplete(p.questions.length);
    }

    container.innerHTML = html;
}

function answerAETxn(selected) {
    const q = aeCurrentProblem.questions[aeStep];
    const feedback = document.getElementById('aeFeedback');
    const isCorrect = selected === q.answer;

    if (isCorrect) {
        aeStepsCorrect++;
        aeTotalCorrect++;
        Progress.addPoints(5);
        if (feedback) feedback.innerHTML = `<span style="color:var(--secondary);">✓ Correct! ${q.answer} — ${txnCodes[q.answer]}</span>`;
    } else {
        if (feedback) feedback.innerHTML = `<span style="color:var(--danger);">✗ The answer is <strong>${q.answer}</strong> — ${txnCodes[q.answer]}</span>`;
    }

    aeStep++;
    aeTotalCompleted++;
    localStorage.setItem('aeTotalCorrect', aeTotalCorrect);
    localStorage.setItem('aeTotalCompleted', aeTotalCompleted);
    updateAEStats();
    setTimeout(renderAEProblem, 1200);
}

// ── COMPLETION / RESET / STATS ──────────────────────
function renderAEComplete(total) {
    const pct = Math.round((aeStepsCorrect / total) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
    return `<div class="gp-data-card" style="text-align:center; border-color:var(--secondary);">
        <div style="font-size:3rem;">${emoji}</div>
        <h3 style="color:var(--secondary);">Problem Complete!</h3>
        <p style="font-size:1.2rem;">${aeStepsCorrect} / ${total} correct (${pct}%)</p>
        <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <button class="btn" onclick="startAcctEquation()">New Problem →</button>
            <button class="btn btn-secondary" onclick="showSection('acctequation')">Back to Menu</button>
        </div>
    </div>`;
}

function resetAcctEquation() {
    if (confirm('Reset all Accounting Equation progress?')) {
        aeTotalAttempts = 0; aeTotalCorrect = 0; aeTotalCompleted = 0;
        localStorage.setItem('aeTotalAttempts', 0);
        localStorage.setItem('aeTotalCorrect', 0);
        localStorage.setItem('aeTotalCompleted', 0);
        updateAEStats();
        showNotification('Progress reset!');
    }
}

function updateAEStats() {
    const el = document.getElementById('aeCompleted');
    if (el) {
        el.textContent = aeTotalCompleted;
        const acc = aeTotalCompleted > 0 ? Math.round((aeTotalCorrect / aeTotalCompleted) * 100) : 0;
        document.getElementById('aeAccuracy').textContent = acc + '%';
        document.getElementById('aeAttempts').textContent = aeTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', updateAEStats);
