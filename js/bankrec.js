// =====================================================
// BANK RECONCILIATION PRACTICE
// Generates random scenarios with bank statement balance,
// deposits in transit, outstanding checks, service charges.
// Students compute both sides to reach adjusted balance.
// Based on real UIL test formats (District 2022, 2023)
// =====================================================

let brTotalAttempts = parseInt(localStorage.getItem('brTotalAttempts')) || 0;
let brTotalCorrect = parseInt(localStorage.getItem('brTotalCorrect')) || 0;
let brTotalCompleted = parseInt(localStorage.getItem('brTotalCompleted')) || 0;
let brCurrentScenario = null;
let brStepResults = {};

function generateBRScenario() {
    const names = ['Brazos Tile', 'Summit Supply', 'Alpine Trading', 'Valley Motors', 'Eagle Enterprises', 'Frontier Goods', 'Canyon Creek Co.', 'Ranger Retail'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const name = names[Math.floor(Math.random() * names.length)];
    const month = months[Math.floor(Math.random() * months.length)];

    // Generate deposits in transit (1-3)
    const numDIT = 1 + Math.floor(Math.random() * 3);
    const depositsInTransit = [];
    for (let i = 0; i < numDIT; i++) {
        depositsInTransit.push(Math.round((500 + Math.random() * 4500) * 100) / 100);
    }
    const totalDIT = Math.round(depositsInTransit.reduce((a,b) => a+b, 0) * 100) / 100;

    // Generate outstanding checks (2-4)
    const numOC = 2 + Math.floor(Math.random() * 3);
    const outstandingChecks = [];
    for (let i = 0; i < numOC; i++) {
        outstandingChecks.push(Math.round((50 + Math.random() * 2000) * 100) / 100);
    }
    const totalOC = Math.round(outstandingChecks.reduce((a,b) => a+b, 0) * 100) / 100;

    // Service charge and other charges
    const serviceCharge = Math.round((15 + Math.random() * 40) * 100) / 100;
    const hasOtherCharge = Math.random() > 0.4;
    const otherCharge = hasOtherCharge ? Math.round((25 + Math.random() * 100) * 100) / 100 : 0;
    const otherChargeDesc = hasOtherCharge ? ['check printing', 'NSF check returned', 'wire transfer fee', 'safe deposit box rental'][Math.floor(Math.random() * 4)] : '';

    // Work backwards from a reconciled balance to ensure both sides match
    const reconciledBalance = Math.round((2000 + Math.random() * 15000) * 100) / 100;
    const bankStatementBal = Math.round((reconciledBalance - totalDIT + totalOC) * 100) / 100;
    const totalBookDeductions = Math.round((serviceCharge + otherCharge) * 100) / 100;
    const checkbookBal = Math.round((reconciledBalance + totalBookDeductions) * 100) / 100;

    const steps = [
        { id:'totalDIT', label:'Total Deposits in Transit', formula: depositsInTransit.map(d => '$'+d.toFixed(2)).join(' + '), answer: totalDIT },
        { id:'totalOC', label:'Total Outstanding Checks', formula: outstandingChecks.map(c => '$'+c.toFixed(2)).join(' + '), answer: totalOC },
        { id:'adjBank', label:'Adjusted Bank Balance', formula: `$${bankStatementBal.toFixed(2)} + $${totalDIT.toFixed(2)} − $${totalOC.toFixed(2)}`, answer: reconciledBalance },
        { id:'totalDeductions', label:'Total Book Deductions', formula: `$${serviceCharge.toFixed(2)}` + (otherCharge > 0 ? ` + $${otherCharge.toFixed(2)}` : ''), answer: totalBookDeductions },
        { id:'adjBook', label:'Adjusted Book Balance', formula: `$${checkbookBal.toFixed(2)} − $${totalBookDeductions.toFixed(2)}`, answer: reconciledBalance },
    ];

    return {
        name, month, bankStatementBal, checkbookBal, depositsInTransit,
        outstandingChecks, serviceCharge, otherCharge, otherChargeDesc,
        reconciledBalance, totalDIT, totalOC, totalBookDeductions, steps
    };
}

function startBankRec() {
    brCurrentScenario = generateBRScenario();
    brStepResults = {};
    brTotalAttempts++;
    localStorage.setItem('brTotalAttempts', brTotalAttempts);
    renderBRProblem();
    showSection('bankrec-viewer');
}

function renderBRProblem() {
    const s = brCurrentScenario;
    let html = `
        <div class="hero">
            <h1>${s.name}</h1>
            <p class="hero-subtitle">Bank Reconciliation — ${s.month}</p>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:2rem;">
            <div class="gp-data-card">
                <h3 style="color:#60a5fa;">Bank Statement</h3>
                <div class="gp-data-row"><span class="gp-data-label">Statement Ending Balance</span><span class="gp-data-value">$${s.bankStatementBal.toFixed(2)}</span></div>
                <div style="margin-top:0.75rem;">
                    <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.5rem;">Deposits in Transit:</div>
                    ${s.depositsInTransit.map((d,i) => `<div class="gp-data-row"><span class="gp-data-label">Deposit #${i+1}</span><span class="gp-data-value">$${d.toFixed(2)}</span></div>`).join('')}
                </div>
                <div style="margin-top:0.75rem;">
                    <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.5rem;">Outstanding Checks:</div>
                    ${s.outstandingChecks.map((c,i) => `<div class="gp-data-row"><span class="gp-data-label">Check #${1001+i}</span><span class="gp-data-value">$${c.toFixed(2)}</span></div>`).join('')}
                </div>
            </div>
            <div class="gp-data-card">
                <h3 style="color:#34d399;">Book (Checkbook)</h3>
                <div class="gp-data-row"><span class="gp-data-label">Checkbook Balance</span><span class="gp-data-value">$${s.checkbookBal.toFixed(2)}</span></div>
                <div style="margin-top:0.75rem;">
                    <div style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.5rem;">Bank Charges:</div>
                    <div class="gp-data-row"><span class="gp-data-label">Bank Service Charge</span><span class="gp-data-value">$${s.serviceCharge.toFixed(2)}</span></div>
                    ${s.otherCharge > 0 ? `<div class="gp-data-row"><span class="gp-data-label">Bank charge for ${s.otherChargeDesc}</span><span class="gp-data-value">$${s.otherCharge.toFixed(2)}</span></div>` : ''}
                </div>
            </div>
        </div>
        <div class="gp-steps">
    `;

    s.steps.forEach((step, i) => {
        const result = brStepResults[step.id];
        const completed = result?.correct;
        const isBankSide = i < 3;

        html += `<div class="gp-step${completed ? ' completed' : ''}" style="border-left:3px solid ${isBankSide ? '#60a5fa' : '#34d399'};">
            <div class="gp-step-label">${isBankSide ? 'BANK' : 'BOOK'} — Step ${i+1}: ${step.label}</div>
            <div class="gp-step-formula">${step.formula} = ?</div>
            <div class="gp-input-row">
                <span style="color:var(--text-muted); font-size:1.1rem;">$</span>
                <input type="text" class="gp-input" id="br-input-${step.id}"
                    placeholder="Enter amount"
                    ${result ? 'disabled' : ''}
                    value="${result ? result.value : ''}"
                    onkeydown="if(event.key==='Enter')checkBRStep('${step.id}',${step.answer})">
                ${result ? '' : `<button class="gp-check-btn" onclick="checkBRStep('${step.id}',${step.answer})">Check</button>`}
                ${result ? `<span class="gp-result ${result.correct ? 'correct' : 'incorrect'}">${result.correct ? '✓ Correct!' : '✗ Answer: $' + step.answer.toFixed(2)}</span>` : ''}
            </div>
        </div>`;
    });

    html += `</div>`;

    const allDone = s.steps.every(st => brStepResults[st.id]);
    if (allDone) {
        const correct = s.steps.filter(st => brStepResults[st.id]?.correct).length;
        const balanced = brStepResults['adjBank']?.correct && brStepResults['adjBook']?.correct;
        html += `
            <div class="quiz-results" style="margin-top:2rem;">
                <h2>${balanced ? 'Reconciliation Balanced!' : 'Scenario Complete'}</h2>
                <div class="result-score">${correct}/${s.steps.length}</div>
                <p>steps correct — Reconciled Balance: $${s.reconciledBalance.toFixed(2)}</p>
                <p style="color:var(--text-muted); margin-top:0.5rem;">+${correct * 5} points earned</p>
                <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                    <button class="btn" onclick="startBankRec()">New Scenario</button>
                    <button class="btn btn-secondary" onclick="showSection('bankrec')">Back to Menu</button>
                </div>
            </div>`;
    }

    document.getElementById('brContent').innerHTML = html;
}

function checkBRStep(stepId, correctAnswer) {
    const input = document.getElementById('br-input-' + stepId);
    if (!input) return;
    const raw = input.value.replace(/[$,\s]/g, '');
    const value = parseFloat(raw);
    if (isNaN(value)) { input.style.borderColor = 'var(--danger)'; return; }

    const isCorrect = Math.abs(value - correctAnswer) < 0.015;
    brStepResults[stepId] = { value: raw, correct: isCorrect };

    if (isCorrect) {
        brTotalCorrect++;
        Progress.addPoints(5);
    }
    brTotalCompleted++;
    localStorage.setItem('brTotalCorrect', brTotalCorrect);
    localStorage.setItem('brTotalCompleted', brTotalCompleted);
    updateBRStats();
    renderBRProblem();
}

function resetBankRec() {
    if (confirm('Reset all Bank Reconciliation progress?')) {
        brTotalAttempts = 0; brTotalCorrect = 0; brTotalCompleted = 0;
        localStorage.setItem('brTotalAttempts', 0);
        localStorage.setItem('brTotalCorrect', 0);
        localStorage.setItem('brTotalCompleted', 0);
        updateBRStats();
    }
}

function updateBRStats() {
    const el = document.getElementById('brCompleted');
    if (el) {
        el.textContent = brTotalCompleted;
        const acc = brTotalCompleted > 0 ? Math.round((brTotalCorrect / brTotalCompleted) * 100) : 0;
        document.getElementById('brAccuracy').textContent = acc + '%';
        document.getElementById('brAttempts').textContent = brTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => { updateBRStats(); });
