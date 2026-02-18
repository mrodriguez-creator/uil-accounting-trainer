// =====================================================
// PETTY CASH PRACTICE
// Based on UIL Invitational-B 2025 & District 2025 formats
// Two types: Petty Cash Fund & Change Fund/Cash Drawer
// =====================================================

let pcTotalAttempts = parseInt(localStorage.getItem('pcTotalAttempts') || '0');
let pcTotalCorrect = parseInt(localStorage.getItem('pcTotalCorrect') || '0');
let pcTotalCompleted = parseInt(localStorage.getItem('pcTotalCompleted') || '0');
let pcScenario = null;
let pcStep = 0;
let pcStepsCorrect = 0;
let pcType = null; // 'pettycash' or 'changefund'

function generatePCScenario() {
    // Randomly pick petty cash fund or change fund
    const type = Math.random() < 0.55 ? 'pettycash' : 'changefund';
    pcType = type;

    if (type === 'pettycash') {
        // Petty Cash Fund scenario (UIL Invitational-B 2025 format)
        const openingBalance = [50, 75, 100, 125, 150, 200, 250][Math.floor(Math.random() * 7)];
        const hasIncrease = Math.random() < 0.35;
        const increase = hasIncrease ? [25, 50, 75, 100][Math.floor(Math.random() * 4)] : 0;
        const fundTotal = openingBalance + increase;

        // Generate 3-6 vouchers
        const numVouchers = 3 + Math.floor(Math.random() * 4);
        const voucherNames = ['Office Supplies', 'Postage', 'Delivery Charges', 'Miscellaneous', 'Travel Expense', 'Coffee/Refreshments', 'Cleaning Supplies', 'Small Equipment Repair'];
        const shuffled = [...voucherNames].sort(() => Math.random() - 0.5);
        const vouchers = [];
        let vouchersTotal = 0;
        for (let i = 0; i < numVouchers; i++) {
            const amt = parseFloat((Math.random() * 30 + 3).toFixed(2));
            vouchers.push({ name: shuffled[i], amount: amt });
            vouchersTotal += amt;
        }
        vouchersTotal = parseFloat(vouchersTotal.toFixed(2));

        // Expected cash = fundTotal - vouchersTotal
        const expectedCash = parseFloat((fundTotal - vouchersTotal).toFixed(2));

        // Cash over/short: random small variance
        const variance = parseFloat(((Math.random() * 6 - 3)).toFixed(2)); // -3.00 to +3.00
        const actualCash = parseFloat((expectedCash + variance).toFixed(2));
        const cashOverShort = parseFloat((actualCash - expectedCash).toFixed(2));

        // Replenishment = fundTotal - actualCash
        const replenishment = parseFloat((fundTotal - actualCash).toFixed(2));

        return {
            type: 'pettycash',
            openingBalance,
            increase,
            fundTotal,
            vouchers,
            vouchersTotal,
            expectedCash,
            actualCash,
            cashOverShort,
            replenishment,
            steps: [
                { label: 'Fund Total (Opening Balance + Increase)', answer: fundTotal, hint: `$${fmt2(openingBalance)} + $${fmt2(increase)} = ?` },
                { label: 'Vouchers Totaling', answer: vouchersTotal, hint: `Add all ${numVouchers} voucher amounts` },
                { label: 'Expected Cash (Fund Total − Vouchers)', answer: expectedCash, hint: `$${fmt2(fundTotal)} − $${fmt2(vouchersTotal)} = ?` },
                { label: 'Cash Over/<Short>', answer: cashOverShort, hint: `Actual ($${fmt2(actualCash)}) − Expected ($${fmt2(expectedCash)}) = ?`, allowNegative: true },
                { label: 'Amount Needed to Replenish', answer: replenishment, hint: `Fund Total ($${fmt2(fundTotal)}) − Actual Cash ($${fmt2(actualCash)}) = ?` }
            ]
        };
    } else {
        // Change Fund / Cash Drawer scenario (UIL District 2025 format)
        const changeFund = [50, 75, 100, 125, 150, 200][Math.floor(Math.random() * 6)];
        const cashSales = parseFloat((Math.random() * 900 + 200).toFixed(2));
        const taxRate = [0.0625, 0.07, 0.075, 0.08, 0.0825][Math.floor(Math.random() * 5)];
        const salesTax = parseFloat((cashSales * taxRate).toFixed(2));
        const hasCollectedOnAccount = Math.random() < 0.5;
        const collectedOnAccount = hasCollectedOnAccount ? parseFloat((Math.random() * 200 + 25).toFixed(2)) : 0;

        const expectedDrawer = parseFloat((cashSales + salesTax + collectedOnAccount + changeFund).toFixed(2));

        // Cash over/short
        const variance = parseFloat(((Math.random() * 5 - 2.5)).toFixed(2));
        const actualDrawer = parseFloat((expectedDrawer + variance).toFixed(2));
        const cashOverShort = parseFloat((actualDrawer - expectedDrawer).toFixed(2));

        return {
            type: 'changefund',
            changeFund,
            cashSales,
            taxRate,
            salesTax,
            collectedOnAccount,
            expectedDrawer,
            actualDrawer,
            cashOverShort,
            steps: [
                { label: 'Sales Tax Collected', answer: salesTax, hint: `$${fmt2(cashSales)} × ${(taxRate * 100).toFixed(2)}% = ?` },
                { label: 'Total Expected Cash in Drawer', answer: expectedDrawer, hint: `Cash Sales + Sales Tax${hasCollectedOnAccount ? ' + Collected on Account' : ''} + Change Fund = ?` },
                { label: 'Cash Over/<Short>', answer: cashOverShort, hint: `Actual ($${fmt2(actualDrawer)}) − Expected ($${fmt2(expectedDrawer)}) = ?`, allowNegative: true }
            ]
        };
    }
}

function startPettyCash() {
    pcScenario = generatePCScenario();
    pcStep = 0;
    pcStepsCorrect = 0;
    pcTotalAttempts++;
    localStorage.setItem('pcTotalAttempts', pcTotalAttempts);
    updatePCStats();
    showSection('pettycash-viewer');
    renderPCProblem();
}

function renderPCProblem() {
    const s = pcScenario;
    const container = document.getElementById('pcContent');
    let html = '';

    if (s.type === 'pettycash') {
        html += `<div class="gp-data-card" style="border-color:rgba(245,158,11,0.3);">
            <h3 style="color:#fbbf24;">🪙 Petty Cash Fund</h3>
            <div class="gp-data-row"><span class="gp-data-label">Opening Balance</span><span class="gp-data-value">$${fmt2(s.openingBalance)}</span></div>`;
        if (s.increase > 0) {
            html += `<div class="gp-data-row"><span class="gp-data-label">Increase in Fund</span><span class="gp-data-value" style="color:#34d399;">+$${fmt2(s.increase)}</span></div>`;
        }
        html += `<div class="gp-data-row" style="border-top:2px solid var(--border); margin-top:0.5rem; padding-top:0.5rem;">
            <span class="gp-data-label" style="font-weight:700;">Vouchers:</span><span class="gp-data-value"></span></div>`;
        s.vouchers.forEach(v => {
            html += `<div class="gp-data-row" style="padding-left:1rem;"><span class="gp-data-label" style="color:#f87171;">${v.name}</span><span class="gp-data-value" style="color:#f87171;">$${fmt2(v.amount)}</span></div>`;
        });
        html += `<div class="gp-data-row" style="border-top:2px solid var(--border); margin-top:0.5rem; padding-top:0.5rem;">
            <span class="gp-data-label">Actual Cash Before Replenishment</span><span class="gp-data-value">$${fmt2(s.actualCash)}</span></div>`;
        html += `</div>`;

        // Steps
        html += `<h3 style="margin:1.5rem 0 1rem;">Calculate Each Value:</h3>`;
        s.steps.forEach((step, i) => {
            const locked = i > pcStep;
            const done = i < pcStep;
            html += `<div class="gp-step" id="pc-step-${i}" style="opacity:${locked ? 0.4 : 1}; border-color:${done ? 'var(--secondary)' : i === pcStep ? 'rgba(245,158,11,0.5)' : 'var(--border)'};">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                    <strong>Step ${i + 1}: ${step.label}</strong>
                    ${done ? '<span style="color:var(--secondary);">✓</span>' : ''}
                </div>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.75rem;">${step.hint}</p>`;
            if (done) {
                const ans = step.answer;
                const display = ans < 0 ? `<$${fmt2(ans)}>` : `$${fmt2(ans)}`;
                html += `<div class="gp-result" style="color:var(--secondary);">${display}</div>`;
            } else if (i === pcStep) {
                html += `<div style="display:flex; gap:0.5rem; align-items:center;">
                    <span style="color:var(--text-muted);">$</span>
                    <input type="text" id="pcInput" class="gp-input" placeholder="Enter amount (use - for negatives)" onkeydown="if(event.key==='Enter')checkPCStep()">
                    <button class="gp-check-btn" onclick="checkPCStep()">Check</button>
                </div>
                <div id="pcFeedback" style="margin-top:0.5rem;"></div>`;
            }
            html += `</div>`;
        });

        // If all done
        if (pcStep >= s.steps.length) {
            html += renderPCComplete();
        }
    } else {
        // Change Fund / Cash Drawer
        html += `<div class="gp-data-card" style="border-color:rgba(139,92,246,0.3);">
            <h3 style="color:#a78bfa;">🏪 Change Fund / Cash Drawer</h3>
            <div class="gp-data-row"><span class="gp-data-label">Cash Sales</span><span class="gp-data-value">$${fmt2(s.cashSales)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Sales Tax Rate</span><span class="gp-data-value">${(s.taxRate * 100).toFixed(2)}%</span></div>`;
        if (s.collectedOnAccount > 0) {
            html += `<div class="gp-data-row"><span class="gp-data-label">Collected on Account</span><span class="gp-data-value">$${fmt2(s.collectedOnAccount)}</span></div>`;
        }
        html += `<div class="gp-data-row"><span class="gp-data-label">Change Fund</span><span class="gp-data-value">$${fmt2(s.changeFund)}</span></div>
            <div class="gp-data-row" style="border-top:2px solid var(--border); margin-top:0.5rem; padding-top:0.5rem;">
                <span class="gp-data-label">Actual Cash in Drawer</span><span class="gp-data-value">$${fmt2(s.actualDrawer)}</span></div>
            </div>`;

        html += `<h3 style="margin:1.5rem 0 1rem;">Calculate Each Value:</h3>`;
        s.steps.forEach((step, i) => {
            const locked = i > pcStep;
            const done = i < pcStep;
            html += `<div class="gp-step" id="pc-step-${i}" style="opacity:${locked ? 0.4 : 1}; border-color:${done ? 'var(--secondary)' : i === pcStep ? 'rgba(139,92,246,0.5)' : 'var(--border)'};">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                    <strong>Step ${i + 1}: ${step.label}</strong>
                    ${done ? '<span style="color:var(--secondary);">✓</span>' : ''}
                </div>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.75rem;">${step.hint}</p>`;
            if (done) {
                const ans = step.answer;
                const display = ans < 0 ? `<$${fmt2(ans)}>` : `$${fmt2(ans)}`;
                html += `<div class="gp-result" style="color:var(--secondary);">${display}</div>`;
            } else if (i === pcStep) {
                html += `<div style="display:flex; gap:0.5rem; align-items:center;">
                    <span style="color:var(--text-muted);">$</span>
                    <input type="text" id="pcInput" class="gp-input" placeholder="Enter amount (use - for negatives)" onkeydown="if(event.key==='Enter')checkPCStep()">
                    <button class="gp-check-btn" onclick="checkPCStep()">Check</button>
                </div>
                <div id="pcFeedback" style="margin-top:0.5rem;"></div>`;
            }
            html += `</div>`;
        });

        if (pcStep >= s.steps.length) {
            html += renderPCComplete();
        }
    }

    container.innerHTML = html;
    const inp = document.getElementById('pcInput');
    if (inp) inp.focus();
}

function renderPCComplete() {
    const totalSteps = pcScenario.steps.length;
    const pct = Math.round((pcStepsCorrect / totalSteps) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
    return `<div class="gp-data-card" style="text-align:center; border-color:var(--secondary); margin-top:1.5rem;">
        <div style="font-size:3rem;">${emoji}</div>
        <h3 style="color:var(--secondary); margin:0.5rem 0;">Problem Complete!</h3>
        <p style="font-size:1.2rem;">${pcStepsCorrect} / ${totalSteps} steps correct (${pct}%)</p>
        <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <button class="btn" onclick="startPettyCash()">New Problem →</button>
            <button class="btn btn-secondary" onclick="showSection('pettycash')">Back to Menu</button>
        </div>
    </div>`;
}

function checkPCStep() {
    const input = document.getElementById('pcInput');
    const feedback = document.getElementById('pcFeedback');
    if (!input || !feedback) return;

    let val = input.value.trim().replace(/[$,<>]/g, '');
    if (val === '') return;
    val = parseFloat(val);
    if (isNaN(val)) {
        feedback.innerHTML = '<span style="color:var(--danger);">Please enter a valid number.</span>';
        return;
    }

    const step = pcScenario.steps[pcStep];
    const correct = step.answer;
    const isCorrect = Math.abs(val - correct) < 0.015;

    if (isCorrect) {
        pcStepsCorrect++;
        pcTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = `<span style="color:var(--secondary); font-weight:600;">✓ Correct!</span>`;
    } else {
        const display = correct < 0 ? `<$${fmt2(correct)}>` : `$${fmt2(correct)}`;
        feedback.innerHTML = `<span style="color:var(--danger); font-weight:600;">✗ Incorrect.</span> The answer is <strong>${display}</strong>`;
    }

    pcStep++;
    pcTotalCompleted++;
    localStorage.setItem('pcTotalCorrect', pcTotalCorrect);
    localStorage.setItem('pcTotalCompleted', pcTotalCompleted);
    updatePCStats();

    setTimeout(() => { renderPCProblem(); }, 1200);
}

function resetPettyCash() {
    if (confirm('Reset all Petty Cash progress?')) {
        pcTotalAttempts = 0; pcTotalCorrect = 0; pcTotalCompleted = 0;
        localStorage.setItem('pcTotalAttempts', 0);
        localStorage.setItem('pcTotalCorrect', 0);
        localStorage.setItem('pcTotalCompleted', 0);
        updatePCStats();
    }
}

function updatePCStats() {
    const el = document.getElementById('pcCompleted');
    if (el) {
        el.textContent = pcTotalCompleted;
        const acc = pcTotalCompleted > 0 ? Math.round((pcTotalCorrect / pcTotalCompleted) * 100) : 0;
        document.getElementById('pcAccuracy').textContent = acc + '%';
        document.getElementById('pcAttempts').textContent = pcTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => { updatePCStats(); });
