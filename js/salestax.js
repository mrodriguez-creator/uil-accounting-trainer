// =====================================================
// SALES TAX CALCULATIONS PRACTICE
// Generate monthly scenarios with multiple transactions
// Track Cash, A/R, Sales, Sales Tax Payable
// Based on UIL 2025-A Group 12, 2022-D Group 4
// =====================================================

let stTotalAttempts = parseInt(localStorage.getItem('stTotalAttempts')) || 0;
let stTotalCorrect = parseInt(localStorage.getItem('stTotalCorrect')) || 0;
let stTotalCompleted = parseInt(localStorage.getItem('stTotalCompleted')) || 0;
let stScenario = null;
let stStep = 0;
let stStepsCorrect = 0;

const stMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
const stTaxRates = [0.06, 0.065, 0.07, 0.075, 0.08, 0.0825];
const stBusinessNames = ['Alpine Trading Co.', 'Summit Supply', 'Davis Wholesale', 'Ranger Retail', 'Mountain Goods', 'Valley Electronics', 'Eagle Enterprises'];

function generateSalesTaxScenario() {
    const bizName = stBusinessNames[Math.floor(Math.random() * stBusinessNames.length)];
    const taxRate = stTaxRates[Math.floor(Math.random() * stTaxRates.length)];
    const month = stMonths[Math.floor(Math.random() * stMonths.length)];
    const year = 2024 + Math.floor(Math.random() * 2);

    // Starting balances
    const beginCash = Math.round((3000 + Math.random() * 8000) / 10) * 10;
    const beginAR = Math.round((500 + Math.random() * 3000) / 10) * 10;
    const priorMonthTax = roundCents(Math.round((100 + Math.random() * 400) / 5) * 5);

    // Generate 5 transactions
    const txnTypes = ['bank_card', 'on_account', 'cash', 'on_account', 'cash'];
    shuffleArray(txnTypes);
    // Always include at least one of each main type
    if (!txnTypes.includes('bank_card')) txnTypes[0] = 'bank_card';
    if (!txnTypes.includes('on_account')) txnTypes[1] = 'on_account';

    const transactions = [];
    const customers = shuffleArray(['Katie Williams', 'Jessica Sampson', 'Adrian Mesa', 'Susie Bellows', 'Sadie Thompson', 'Mark Rivera', 'Dana Chen']);

    // Also add a "paid on account" transaction and "pay prior month tax" transaction
    let totalSales = 0;
    let totalTax = 0;
    let cashChanges = 0;
    let arChanges = 0;

    for (let i = 0; i < 5; i++) {
        const type = txnTypes[i];
        const saleAmt = Math.round((150 + Math.random() * 1200) / 5) * 5;
        const taxAmt = roundCents(saleAmt * taxRate);
        const total = roundCents(saleAmt + taxAmt);
        const customer = customers[i];

        const day = (i + 1) * 3 + Math.floor(Math.random() * 3);

        transactions.push({ day, type, customer, saleAmt, taxAmt, total });
        totalSales += saleAmt;
        totalTax = roundCents(totalTax + taxAmt);

        if (type === 'bank_card' || type === 'cash') {
            cashChanges = roundCents(cashChanges + total);
        } else {
            arChanges = roundCents(arChanges + total);
        }
    }

    // Add: Received cash on account from a prior customer
    const receivedOnAcct = Math.round((100 + Math.random() * 300) / 5) * 5;
    cashChanges = roundCents(cashChanges + receivedOnAcct);

    // Add: Paid prior month's tax to state
    cashChanges = roundCents(cashChanges - priorMonthTax);

    const endCash = roundCents(beginCash + cashChanges);
    const endAR = roundCents(beginAR + arChanges - 0); // No collections from new A/R this month for simplicity
    const currentMonthTaxOwed = totalTax;

    totalSales = roundCents(totalSales);

    return {
        bizName, taxRate, month, year,
        beginCash, beginAR, priorMonthTax,
        transactions, receivedOnAcct,
        totalSales, totalTax: currentMonthTaxOwed,
        totalAR: roundCents(arChanges),
        endCash, endAR,
        steps: [
            { label: `Total sales for ${month} (before tax)`, hint: 'Add up all sale amounts (not including tax)', answer: totalSales },
            { label: `Total sales tax collected in ${month}`, hint: `Total sales × ${(taxRate * 100).toFixed(2)}% (or add individual tax amounts)`, answer: currentMonthTaxOwed },
            { label: `Total debits to Accounts Receivable in ${month}`, hint: 'Only sales on account create A/R debits (include tax)', answer: roundCents(arChanges) },
            { label: `Amount owed to state on ${month} 30`, hint: `Tax collected this month (prior month tax was already paid)`, answer: currentMonthTaxOwed },
            { label: `Cash balance at end of ${month}`, hint: `Beginning cash + cash sales/bank card + received on account − paid prior tax`, answer: endCash }
        ]
    };
}

function startSalesTax() {
    stScenario = generateSalesTaxScenario();
    stStep = 0;
    stStepsCorrect = 0;
    stTotalAttempts++;
    localStorage.setItem('stTotalAttempts', stTotalAttempts);
    updateSTStats();
    showSection('salestax-viewer');
    renderSTProblem();
}

function renderSTProblem() {
    const s = stScenario;
    const container = document.getElementById('stContent');
    let html = `<div class="hero"><h1>${s.bizName}</h1>
        <p class="hero-subtitle">Sales Tax — ${s.month} ${s.year}</p></div>`;

    // Scenario data
    html += `<div class="gp-data-card"><h3>Given Information</h3>
        <div class="gp-data-row"><span>Sales tax rate</span><span>${(s.taxRate * 100).toFixed(2)}%</span></div>
        <div class="gp-data-row"><span>Beginning Cash balance</span><span>${fmt(s.beginCash)}</span></div>
        <div class="gp-data-row"><span>Beginning Accounts Receivable</span><span>${fmt(s.beginAR)}</span></div>
        <div class="gp-data-row"><span>Sales Tax Payable from prior month</span><span>${fmt2(s.priorMonthTax)}</span></div>
    </div>`;

    // Transactions
    html += `<div class="gp-data-card"><h3>Transactions for ${s.month}</h3>`;
    s.transactions.forEach((t, i) => {
        const typeLabel = t.type === 'bank_card' ? 'Bank card sale' : t.type === 'on_account' ? 'Sale on account' : 'Cash sale';
        html += `<div class="gp-data-row"><span>${s.month} ${t.day} — ${typeLabel} to ${t.customer}</span><span>$${fmt2(t.saleAmt)}</span></div>`;
    });
    html += `<div class="gp-data-row" style="border-top:1px solid var(--border); padding-top:0.5rem;">
        <span>${s.month} 12 — Paid prior month's sales tax to state</span><span>${fmt2(s.priorMonthTax)}</span></div>`;
    html += `<div class="gp-data-row"><span>${s.month} 15 — Received on account from prior customer</span><span>${fmt2(s.receivedOnAcct)}</span></div>`;
    html += `<p style="color:var(--text-muted); font-size:0.85rem; margin-top:0.75rem;">Add ${(s.taxRate * 100).toFixed(2)}% sales tax to each sale. Amounts shown are selling price only.</p>`;
    html += `</div>`;

    // Steps
    html += `<h3 style="margin:1.5rem 0 1rem;">Calculate Step by Step</h3>`;
    s.steps.forEach((step, i) => {
        const locked = i > stStep;
        const done = i < stStep;
        html += `<div class="gp-step" style="opacity:${locked ? 0.4 : 1};">
            <strong>Step ${i + 1}: ${step.label}</strong>
            <p style="color:var(--text-muted); font-size:0.9rem;">${step.hint}</p>`;
        if (done) {
            html += `<div class="gp-result" style="color:var(--secondary);">✓ $${fmt2(step.answer)}</div>`;
        } else if (i === stStep) {
            html += `<input type="text" id="stInput" class="gp-input" placeholder="Enter amount..."
                onkeydown="if(event.key==='Enter')checkSTStep()">
                <button class="gp-check-btn" onclick="checkSTStep()">Check →</button>
                <div id="stFeedback"></div>`;
        }
        html += `</div>`;
    });

    if (stStep >= s.steps.length) {
        html += renderSTComplete();
    }

    container.innerHTML = html;
    const inp = document.getElementById('stInput');
    if (inp) inp.focus();
}

function checkSTStep() {
    const input = document.getElementById('stInput');
    const feedback = document.getElementById('stFeedback');
    if (!input || !feedback) return;

    let val = parseFloat(input.value.trim().replace(/[$,]/g, ''));
    if (isNaN(val)) {
        feedback.innerHTML = '<span style="color:var(--danger);">Please enter a valid number.</span>';
        return;
    }

    const step = stScenario.steps[stStep];
    const correct = step.answer;
    const isCorrect = Math.abs(val - correct) < 0.015;

    if (isCorrect) {
        stStepsCorrect++;
        stTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = '<span style="color:var(--secondary);">✓ Correct!</span>';
    } else {
        feedback.innerHTML = `<span style="color:var(--danger);">✗ The answer is <strong>$${fmt2(correct)}</strong></span>`;
    }

    stStep++;
    stTotalCompleted++;
    localStorage.setItem('stTotalCorrect', stTotalCorrect);
    localStorage.setItem('stTotalCompleted', stTotalCompleted);
    updateSTStats();
    setTimeout(renderSTProblem, 1200);
}

function renderSTComplete() {
    const total = stScenario.steps.length;
    const pct = Math.round((stStepsCorrect / total) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
    return `<div class="gp-data-card" style="text-align:center; border-color:var(--secondary);">
        <div style="font-size:3rem;">${emoji}</div>
        <h3 style="color:var(--secondary);">Problem Complete!</h3>
        <p style="font-size:1.2rem;">${stStepsCorrect} / ${total} correct (${pct}%)</p>
        <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <button class="btn" onclick="startSalesTax()">New Problem →</button>
            <button class="btn btn-secondary" onclick="showSection('salestax')">Back to Menu</button>
        </div>
    </div>`;
}

function resetSalesTax() {
    if (confirm('Reset all Sales Tax progress?')) {
        stTotalAttempts = 0; stTotalCorrect = 0; stTotalCompleted = 0;
        localStorage.setItem('stTotalAttempts', 0);
        localStorage.setItem('stTotalCorrect', 0);
        localStorage.setItem('stTotalCompleted', 0);
        updateSTStats();
        showNotification('Progress reset!');
    }
}

function updateSTStats() {
    const el = document.getElementById('stCompleted');
    if (el) {
        el.textContent = stTotalCompleted;
        const acc = stTotalCompleted > 0 ? Math.round((stTotalCorrect / stTotalCompleted) * 100) : 0;
        document.getElementById('stAccuracy').textContent = acc + '%';
        document.getElementById('stAttempts').textContent = stTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', updateSTStats);
