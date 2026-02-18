// =====================================================
// GROSS PROFIT CALCULATOR PRACTICE
// Generates random merchandising scenarios and asks
// students to compute step-by-step: Net Sales →
// Net Purchases → CMAS → COMS → Gross Profit
// Based on real UIL test formats
// =====================================================

let gpTotalAttempts = parseInt(localStorage.getItem('gpTotalAttempts')) || 0;
let gpTotalCorrect = parseInt(localStorage.getItem('gpTotalCorrect')) || 0;
let gpTotalCompleted = parseInt(localStorage.getItem('gpTotalCompleted')) || 0;
let gpCurrentScenario = null;
let gpStepResults = {};

function generateGPScenario() {
    const names = ['Alpine Trading Co.', 'Summit Supply', 'Davis Wholesale', 'Ranger Retail', 'Eagle Enterprises', 'Mountain Merchandise', 'Valley Ventures', 'Sunset Supply Co.', 'Frontier Goods'];
    const name = names[Math.floor(Math.random() * names.length)];
    const sales = Math.round((60000 + Math.random() * 140000) / 50) * 50;
    const salesDisc = Math.round(sales * (0.01 + Math.random() * 0.03) / 5) * 5;
    const salesRA = Math.round(sales * (0.01 + Math.random() * 0.04) / 5) * 5;
    const purchases = Math.round((30000 + Math.random() * 80000) / 50) * 50;
    const transIn = Math.round(purchases * (0.03 + Math.random() * 0.05) / 5) * 5;
    const purchDisc = Math.round(purchases * (0.01 + Math.random() * 0.03) / 5) * 5;
    const purchRA = Math.round(purchases * (0.01 + Math.random() * 0.03) / 5) * 5;
    const beginInv = Math.round((10000 + Math.random() * 40000) / 50) * 50;
    const endInv = Math.round((8000 + Math.random() * 35000) / 50) * 50;

    const netSales = sales - salesDisc - salesRA;
    const netPurchases = purchases + transIn - purchDisc - purchRA;
    const costMAS = beginInv + netPurchases;
    const costMS = costMAS - endInv;
    const grossProfit = netSales - costMS;

    return {
        name, sales, salesDisc, salesRA, purchases, transIn, purchDisc, purchRA,
        beginInv, endInv, netSales, netPurchases, costMAS, costMS, grossProfit,
        steps: [
            { id:'netSales', label:'Net Sales', formula:`${fmt(sales)} − ${fmt(salesDisc)} − ${fmt(salesRA)}`, answer: netSales },
            { id:'netPurch', label:'Net Purchases (Cost of Delivered Merchandise)', formula:`${fmt(purchases)} + ${fmt(transIn)} − ${fmt(purchDisc)} − ${fmt(purchRA)}`, answer: netPurchases },
            { id:'costMAS', label:'Cost of Merchandise Available for Sale', formula:`${fmt(beginInv)} + ${fmt(netPurchases)}`, answer: costMAS },
            { id:'costMS', label:'Cost of Merchandise Sold', formula:`${fmt(costMAS)} − ${fmt(endInv)}`, answer: costMS },
            { id:'grossProfit', label:'Gross Profit', formula:`${fmt(netSales)} − ${fmt(costMS)}`, answer: grossProfit }
        ]
    };
}

function startGrossProfit() {
    gpCurrentScenario = generateGPScenario();
    gpStepResults = {};
    gpTotalAttempts++;
    localStorage.setItem('gpTotalAttempts', gpTotalAttempts);
    renderGPProblem();
    showSection('grossprofit-viewer');
}

function renderGPProblem() {
    const s = gpCurrentScenario;
    let html = `
        <div class="hero">
            <h1>${s.name}</h1>
            <p class="hero-subtitle">Calculate each step of the Income Statement</p>
        </div>
        <div class="gp-data-card">
            <h3>Given Data — Income Statement for the Year</h3>
            <div class="gp-data-row"><span class="gp-data-label">Sales</span><span class="gp-data-value">${fmt(s.sales)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Sales Discounts</span><span class="gp-data-value">${fmt(s.salesDisc)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Sales Returns & Allowances</span><span class="gp-data-value">${fmt(s.salesRA)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Purchases</span><span class="gp-data-value">${fmt(s.purchases)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Transportation In</span><span class="gp-data-value">${fmt(s.transIn)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Purchases Discounts</span><span class="gp-data-value">${fmt(s.purchDisc)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Purchases Returns & Allowances</span><span class="gp-data-value">${fmt(s.purchRA)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Beginning Merchandise Inventory</span><span class="gp-data-value">${fmt(s.beginInv)}</span></div>
            <div class="gp-data-row"><span class="gp-data-label">Ending Merchandise Inventory</span><span class="gp-data-value">${fmt(s.endInv)}</span></div>
        </div>
        <div class="gp-steps">
    `;

    s.steps.forEach((step, i) => {
        const result = gpStepResults[step.id];
        const prevCompleted = i === 0 || gpStepResults[s.steps[i-1].id]?.correct;
        const locked = i > 0 && !prevCompleted;
        const completed = result?.correct;

        html += `<div class="gp-step${locked ? ' locked' : ''}${completed ? ' completed' : ''}">
            <div class="gp-step-label">Step ${i+1}: ${step.label}</div>
            <div class="gp-step-formula">${step.formula} = ?</div>
            <div class="gp-input-row">
                <span style="color:var(--text-muted); font-size:1.1rem;">$</span>
                <input type="text" class="gp-input" id="gp-input-${step.id}"
                    placeholder="Enter amount"
                    ${result ? 'disabled' : ''}
                    value="${result ? result.value : ''}"
                    onkeydown="if(event.key==='Enter')checkGPStep('${step.id}',${step.answer})">
                ${result ? '' : `<button class="gp-check-btn" onclick="checkGPStep('${step.id}',${step.answer})">Check</button>`}
                ${result ? `<span class="gp-result ${result.correct ? 'correct' : 'incorrect'}">${result.correct ? '✓ Correct!' : '✗ Answer: ' + fmt(step.answer)}</span>` : ''}
            </div>
        </div>`;
    });

    html += `</div>`;

    const allDone = s.steps.every(st => gpStepResults[st.id]);
    if (allDone) {
        const correct = s.steps.filter(st => gpStepResults[st.id]?.correct).length;
        html += `
            <div class="quiz-results" style="margin-top:2rem;">
                <h2>Scenario Complete!</h2>
                <div class="result-score">${correct}/${s.steps.length}</div>
                <p>steps correct — +${correct * 5} points earned</p>
                <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                    <button class="btn" onclick="startGrossProfit()">New Scenario</button>
                    <button class="btn btn-secondary" onclick="showSection('grossprofit')">Back to Menu</button>
                </div>
            </div>`;
    }

    document.getElementById('gpContent').innerHTML = html;
}

function checkGPStep(stepId, correctAnswer) {
    const input = document.getElementById('gp-input-' + stepId);
    if (!input) return;
    const raw = input.value.replace(/[$,\s]/g, '');
    const value = parseFloat(raw);
    if (isNaN(value)) { input.style.borderColor = 'var(--danger)'; return; }

    const isCorrect = Math.abs(value - correctAnswer) < 0.01;
    gpStepResults[stepId] = { value: raw, correct: isCorrect };

    if (isCorrect) {
        gpTotalCorrect++;
        Progress.addPoints(5);
    }
    gpTotalCompleted++;
    localStorage.setItem('gpTotalCorrect', gpTotalCorrect);
    localStorage.setItem('gpTotalCompleted', gpTotalCompleted);
    updateGPStats();
    renderGPProblem();
}

function resetGrossProfit() {
    if (confirm('Reset all Gross Profit progress?')) {
        gpTotalAttempts = 0; gpTotalCorrect = 0; gpTotalCompleted = 0;
        localStorage.setItem('gpTotalAttempts', 0);
        localStorage.setItem('gpTotalCorrect', 0);
        localStorage.setItem('gpTotalCompleted', 0);
        updateGPStats();
    }
}

function updateGPStats() {
    const el = document.getElementById('gpCompleted');
    if (el) {
        el.textContent = gpTotalCompleted;
        const acc = gpTotalCompleted > 0 ? Math.round((gpTotalCorrect / gpTotalCompleted) * 100) : 0;
        document.getElementById('gpAccuracy').textContent = acc + '%';
        document.getElementById('gpAttempts').textContent = gpTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => { updateGPStats(); });
