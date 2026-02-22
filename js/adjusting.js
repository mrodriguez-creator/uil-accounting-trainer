// =====================================================
// ADJUSTING ENTRIES PRACTICE
// 4 adjustment types: Insurance, Supplies, Inventory, Accrued Revenue
// Based on UIL 2022-D Group 6, 2026-A Group 2, 2025-A Group 11
// =====================================================

let adjTotalAttempts = parseInt(localStorage.getItem('adjTotalAttempts')) || 0;
let adjTotalCorrect = parseInt(localStorage.getItem('adjTotalCorrect')) || 0;
let adjTotalCompleted = parseInt(localStorage.getItem('adjTotalCompleted')) || 0;
let adjScenario = null;
let adjStep = 0;
let adjStepsCorrect = 0;

const adjMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const adjMonthNums = { January:1, February:2, March:3, April:4, May:5, June:6, July:7, August:8, September:9, October:10, November:11, December:12 };

// ── SCENARIO GENERATORS ─────────────────────────────

function generateInsuranceScenario() {
    const purchaseMonthIdx = Math.floor(Math.random() * 10); // Jan-Oct
    const purchaseMonth = adjMonths[purchaseMonthIdx];
    const purchaseDay = 1;
    const coverageMonths = [12, 24, 6][Math.floor(Math.random() * 3)];
    const year = 2023 + Math.floor(Math.random() * 3);
    // Make premium divisible by coverage months
    const monthlyRate = Math.round((80 + Math.random() * 250) / 10) * 10;
    const totalPremium = monthlyRate * coverageMonths;
    const fiscalYearEnd = 'December 31';

    // Months expired from purchase month through December
    const monthsExpired = 12 - purchaseMonthIdx; // purchase month through December
    const actualMonthsExpired = Math.min(monthsExpired, coverageMonths);
    const expiredAmount = monthlyRate * actualMonthsExpired;
    const remainingAmount = totalPremium - expiredAmount;

    // Next year expense
    const monthsLeftInPolicy = coverageMonths - actualMonthsExpired;
    const nextYearMonths = Math.min(monthsLeftInPolicy, 12);
    const nextYearExpense = monthlyRate * nextYearMonths;

    return {
        type: 'insurance',
        label: 'Prepaid Insurance Adjustment',
        purchaseMonth, purchaseDay, coverageMonths, year, totalPremium, monthlyRate,
        description: `On ${purchaseMonth} ${purchaseDay}, ${year}, the business paid $${fmt2(totalPremium)} for a ${coverageMonths}-month insurance policy. The company records insurance payments to the Prepaid Insurance account. Fiscal year ends ${fiscalYearEnd}, ${year}.`,
        steps: [
            { label: `How many months of coverage have expired by Dec 31, ${year}?`, hint: `Count from ${purchaseMonth} through December`, answer: actualMonthsExpired, format: 'number' },
            { label: 'What is the monthly insurance cost?', hint: `$${fmt2(totalPremium)} ÷ ${coverageMonths} months`, answer: monthlyRate, format: 'dollar' },
            { label: `Insurance Expense for ${year}`, hint: `Monthly cost × months expired`, answer: expiredAmount, format: 'dollar' },
            { label: `Prepaid Insurance on the Balance Sheet (Dec 31, ${year})`, hint: `Total premium − expired amount`, answer: remainingAmount, format: 'dollar' },
            { label: `If no new insurance is paid, Insurance Expense for ${year + 1}`, hint: `Remaining months in policy × monthly rate`, answer: nextYearExpense, format: 'dollar' }
        ]
    };
}

function generateSuppliesScenario() {
    const year = 2023 + Math.floor(Math.random() * 3);
    const beginBalance = Math.round((500 + Math.random() * 2000) / 10) * 10;
    const purchased = Math.round((300 + Math.random() * 1500) / 10) * 10;
    const trialBalance = beginBalance + purchased;
    const physicalCount = Math.round((200 + Math.random() * (trialBalance * 0.4)) / 10) * 10;
    const usedAmount = trialBalance - physicalCount;

    return {
        type: 'supplies',
        label: 'Supplies Adjustment',
        year, trialBalance, physicalCount, usedAmount, beginBalance, purchased,
        description: `The Supplies account has a Trial Balance debit of $${fmt2(trialBalance)} on December 31, ${year}. A physical inventory of supplies on December 31 shows $${fmt2(physicalCount)} of supplies on hand.`,
        steps: [
            { label: 'What is the amount of Supplies used during the period?', hint: `Trial Balance amount − physical count on hand`, answer: usedAmount, format: 'dollar' },
            { label: 'What account is DEBITED in the adjusting entry?', hint: 'The expense account for supplies consumed', answer: 'Supplies Expense', format: 'choice', options: ['Supplies', 'Supplies Expense', 'Income Summary', 'Purchases'] },
            { label: 'What account is CREDITED in the adjusting entry?', hint: 'The asset account being reduced', answer: 'Supplies', format: 'choice', options: ['Supplies', 'Supplies Expense', 'Cash', 'Income Summary'] },
            { label: `Supplies on the Balance Sheet (Dec 31, ${year})`, hint: 'Amount remaining on hand', answer: physicalCount, format: 'dollar' },
            { label: `Supplies Expense on the Income Statement`, hint: 'Amount consumed during the period', answer: usedAmount, format: 'dollar' }
        ]
    };
}

function generateInventoryScenario() {
    const year = 2023 + Math.floor(Math.random() * 3);
    const beginInv = Math.round((8000 + Math.random() * 35000) / 100) * 100;
    const endInv = Math.round((6000 + Math.random() * 30000) / 100) * 100;
    const isIncrease = endInv > beginInv;
    const adjustment = Math.abs(endInv - beginInv);

    const debitAcct = isIncrease ? 'Merchandise Inventory' : 'Income Summary';
    const creditAcct = isIncrease ? 'Income Summary' : 'Merchandise Inventory';

    return {
        type: 'inventory',
        label: 'Merchandise Inventory Adjustment',
        year, beginInv, endInv, isIncrease, adjustment, debitAcct, creditAcct,
        description: `The Trial Balance shows Merchandise Inventory of $${fmt2(beginInv)} (beginning inventory). A physical count on December 31, ${year}, shows $${fmt2(endInv)} of inventory on hand.`,
        steps: [
            { label: 'Did inventory INCREASE or DECREASE?', hint: `Beginning: $${fmt2(beginInv)} → Ending: $${fmt2(endInv)}`, answer: isIncrease ? 'Increase' : 'Decrease', format: 'choice', options: ['Increase', 'Decrease'] },
            { label: 'What is the adjustment amount?', hint: 'Difference between ending and beginning inventory', answer: adjustment, format: 'dollar' },
            { label: 'What account is DEBITED?', hint: isIncrease ? 'Inventory went up → debit the asset' : 'Inventory went down → debit Income Summary', answer: debitAcct, format: 'choice', options: ['Merchandise Inventory', 'Income Summary', 'Purchases', 'Cost of Merchandise Sold'] },
            { label: 'What account is CREDITED?', hint: isIncrease ? 'Credit Income Summary (inventory increase reduces COGS)' : 'Credit the asset being reduced', answer: creditAcct, format: 'choice', options: ['Merchandise Inventory', 'Income Summary', 'Sales', 'Cost of Merchandise Sold'] },
            { label: 'What is the Income Summary balance from this adjustment?', hint: isIncrease ? `Credit of $${fmt2(adjustment)} (reduces COGS)` : `Debit of $${fmt2(adjustment)} (increases COGS)`, answer: adjustment, format: 'dollar' }
        ]
    };
}

function generateAccruedRevenueScenario() {
    const year = 2023 + Math.floor(Math.random() * 3);
    const owner = randName();
    const serviceAmt = Math.round((500 + Math.random() * 3000) / 10) * 10;
    const invoiceNum = 'A-' + (700 + Math.floor(Math.random() * 100));

    return {
        type: 'accrued',
        label: 'Unrecorded Revenue Adjustment',
        year, owner, serviceAmt, invoiceNum,
        description: `While preparing the worksheet for ${owner}'s business on December 31, ${year}, the bookkeeper discovered that Invoice #${invoiceNum} for $${fmt2(serviceAmt)} (services performed for a customer on Dec 31) had not been recorded anywhere in the accounting records.`,
        steps: [
            { label: 'What account is DEBITED in the adjusting entry?', hint: 'The customer now owes the business', answer: 'Accounts Receivable', format: 'choice', options: ['Cash', 'Accounts Receivable', 'Service Revenue', 'Income Summary'] },
            { label: 'What account is CREDITED in the adjusting entry?', hint: 'Revenue was earned but not yet recorded', answer: 'Service Revenue', format: 'choice', options: ['Cash', 'Accounts Receivable', 'Service Revenue', 'Unearned Revenue'] },
            { label: 'What is the adjustment amount?', hint: 'The full invoice amount', answer: serviceAmt, format: 'dollar' },
            { label: `Does this adjusting entry affect Accounts Receivable on the Balance Sheet?`, hint: 'Will A/R go up or stay the same?', answer: 'Yes', format: 'choice', options: ['Yes', 'No'] }
        ]
    };
}

// ── START / RENDER ──────────────────────────────────
function startAdjusting() {
    const generators = [generateInsuranceScenario, generateSuppliesScenario, generateInventoryScenario, generateAccruedRevenueScenario];
    const gen = generators[Math.floor(Math.random() * generators.length)];
    adjScenario = gen();
    adjStep = 0;
    adjStepsCorrect = 0;
    adjTotalAttempts++;
    localStorage.setItem('adjTotalAttempts', adjTotalAttempts);
    updateAdjStats();
    showSection('adjusting-viewer');
    renderAdjProblem();
}

function renderAdjProblem() {
    const s = adjScenario;
    const container = document.getElementById('adjContent');

    let html = `<div class="hero"><h1>${s.label}</h1>
        <p class="hero-subtitle">Adjusting Entry Practice</p></div>`;

    // Scenario description
    html += `<div class="gp-data-card"><h3>Scenario</h3>
        <p style="line-height:1.7;">${s.description}</p></div>`;

    // Steps
    html += `<h3 style="margin:1.5rem 0 1rem;">Answer Each Step</h3>`;
    s.steps.forEach((step, i) => {
        const locked = i > adjStep;
        const done = i < adjStep;
        html += `<div class="gp-step" style="opacity:${locked ? 0.4 : 1};">
            <strong>Step ${i + 1}: ${step.label}</strong>
            <p style="color:var(--text-muted); font-size:0.9rem;">${step.hint}</p>`;

        if (done) {
            const display = step.format === 'dollar' ? `$${fmt2(step.answer)}` : step.answer;
            html += `<div class="gp-result" style="color:var(--secondary);">✓ ${display}</div>`;
        } else if (i === adjStep) {
            if (step.format === 'choice') {
                html += `<div class="cl-options" style="margin-top:0.5rem;">`;
                step.options.forEach(opt => {
                    html += `<button class="cl-option" onclick="checkAdjChoice(${i}, '${opt.replace(/'/g, "\\'")}')">${opt}</button>`;
                });
                html += `</div>`;
            } else {
                const placeholder = step.format === 'number' ? 'Enter number...' : 'Enter amount...';
                html += `<input type="text" id="adjInput" class="gp-input" placeholder="${placeholder}"
                    onkeydown="if(event.key==='Enter')checkAdjNumeric()">
                    <button class="gp-check-btn" onclick="checkAdjNumeric()">Check →</button>`;
            }
            html += `<div id="adjFeedback"></div>`;
        }
        html += `</div>`;
    });

    // Completion
    if (adjStep >= s.steps.length) {
        html += renderAdjComplete();
    }

    container.innerHTML = html;
    const inp = document.getElementById('adjInput');
    if (inp) inp.focus();
}

function checkAdjChoice(stepIdx, selected) {
    const step = adjScenario.steps[stepIdx];
    const feedback = document.getElementById('adjFeedback');
    const isCorrect = selected === step.answer;

    // Disable all buttons and highlight
    document.querySelectorAll('.cl-option').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === step.answer) {
            btn.style.background = 'var(--secondary)';
            btn.style.color = '#fff';
        }
        if (btn.textContent === selected && !isCorrect) {
            btn.style.background = 'var(--danger)';
            btn.style.color = '#fff';
        }
    });

    if (isCorrect) {
        adjStepsCorrect++;
        adjTotalCorrect++;
        Progress.addPoints(5);
        if (feedback) feedback.innerHTML = '<span style="color:var(--secondary);">✓ Correct!</span>';
    } else {
        if (feedback) feedback.innerHTML = `<span style="color:var(--danger);">✗ The answer is <strong>${step.answer}</strong></span>`;
    }

    adjStep++;
    adjTotalCompleted++;
    localStorage.setItem('adjTotalCorrect', adjTotalCorrect);
    localStorage.setItem('adjTotalCompleted', adjTotalCompleted);
    updateAdjStats();
    setTimeout(renderAdjProblem, 1200);
}

function checkAdjNumeric() {
    const input = document.getElementById('adjInput');
    const feedback = document.getElementById('adjFeedback');
    if (!input || !feedback) return;

    let val = parseFloat(input.value.trim().replace(/[$,]/g, ''));
    if (isNaN(val)) {
        feedback.innerHTML = '<span style="color:var(--danger);">Please enter a valid number.</span>';
        return;
    }

    const step = adjScenario.steps[adjStep];
    const correct = step.answer;
    const isCorrect = Math.abs(val - correct) < (step.format === 'number' ? 0.5 : 0.015);

    if (isCorrect) {
        adjStepsCorrect++;
        adjTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = '<span style="color:var(--secondary);">✓ Correct!</span>';
    } else {
        const display = step.format === 'dollar' ? `$${fmt2(correct)}` : correct;
        feedback.innerHTML = `<span style="color:var(--danger);">✗ The answer is <strong>${display}</strong></span>`;
    }

    adjStep++;
    adjTotalCompleted++;
    localStorage.setItem('adjTotalCorrect', adjTotalCorrect);
    localStorage.setItem('adjTotalCompleted', adjTotalCompleted);
    updateAdjStats();
    setTimeout(renderAdjProblem, 1200);
}

function renderAdjComplete() {
    const total = adjScenario.steps.length;
    const pct = Math.round((adjStepsCorrect / total) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
    return `<div class="gp-data-card" style="text-align:center; border-color:var(--secondary);">
        <div style="font-size:3rem;">${emoji}</div>
        <h3 style="color:var(--secondary);">Problem Complete!</h3>
        <p style="font-size:1.2rem;">${adjStepsCorrect} / ${total} correct (${pct}%)</p>
        <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <button class="btn" onclick="startAdjusting()">New Problem →</button>
            <button class="btn btn-secondary" onclick="showSection('adjusting')">Back to Menu</button>
        </div>
    </div>`;
}

function resetAdjusting() {
    if (confirm('Reset all Adjusting Entries progress?')) {
        adjTotalAttempts = 0; adjTotalCorrect = 0; adjTotalCompleted = 0;
        localStorage.setItem('adjTotalAttempts', 0);
        localStorage.setItem('adjTotalCorrect', 0);
        localStorage.setItem('adjTotalCompleted', 0);
        updateAdjStats();
        showNotification('Progress reset!');
    }
}

function updateAdjStats() {
    const el = document.getElementById('adjCompleted');
    if (el) {
        el.textContent = adjTotalCompleted;
        const acc = adjTotalCompleted > 0 ? Math.round((adjTotalCorrect / adjTotalCompleted) * 100) : 0;
        document.getElementById('adjAccuracy').textContent = acc + '%';
        document.getElementById('adjAttempts').textContent = adjTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', updateAdjStats);
