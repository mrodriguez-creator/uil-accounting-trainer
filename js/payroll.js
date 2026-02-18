// =====================================================
// PAYROLL PRACTICE
// 3 Types: Gross Pay, Employer Tax Expense, Entry Classification
// Based on UIL District/Regional/State/Invitational tests 2022-2025
// =====================================================

let prTotalAttempts = parseInt(localStorage.getItem('prTotalAttempts') || '0');
let prTotalCorrect = parseInt(localStorage.getItem('prTotalCorrect') || '0');
let prTotalCompleted = parseInt(localStorage.getItem('prTotalCompleted') || '0');
let prScenario = null;
let prStep = 0;
let prStepsCorrect = 0;
let prType = null;

// NOTE: firstNames, lastNames, randName(), and roundCents() are in shared.js

// ---- GROSS PAY SCENARIO GENERATOR ----
function generateGrossPayScenario() {
    const numEmployees = 3 + Math.floor(Math.random() * 3); // 3-5 employees
    const employees = [];
    const usedNames = new Set();

    for (let i = 0; i < numEmployees; i++) {
        let name;
        do { name = randName(); } while (usedNames.has(name));
        usedNames.add(name);

        const hourlyRate = roundCents(10 + Math.random() * 15); // $10-$25
        const days = [];
        let totalHours = 0;
        for (let d = 0; d < 5; d++) {
            const h = roundCents(Math.floor(Math.random() * 5) + 6 + Math.random()); // 6-10.x hours
            days.push(parseFloat(h.toFixed(1)));
            totalHours += days[d];
        }
        totalHours = roundCents(totalHours);

        const regularHours = Math.min(totalHours, 40);
        const overtimeHours = roundCents(Math.max(0, totalHours - 40));
        const regularPay = roundCents(regularHours * hourlyRate);
        const overtimeRate = roundCents(hourlyRate * 1.5);
        const overtimePay = roundCents(overtimeHours * overtimeRate);
        const grossPay = roundCents(regularPay + overtimePay);

        employees.push({ name, hourlyRate, days, totalHours, regularHours, overtimeHours, regularPay, overtimeRate, overtimePay, grossPay });
    }

    const totalOTHours = roundCents(employees.reduce((s, e) => s + e.overtimeHours, 0));
    const totalGross = roundCents(employees.reduce((s, e) => s + e.grossPay, 0));

    // Generate steps - ask about specific employees + totals
    const steps = [];
    // Step 1: Total overtime hours for all employees
    steps.push({ label: `Total overtime hours for ALL employees`, answer: totalOTHours, hint: 'Sum hours over 40 for each employee', format: 'hours' });
    // Steps 2-N: Gross pay for each employee
    employees.forEach(e => {
        steps.push({ label: `Gross pay for ${e.name}`, answer: e.grossPay, hint: `Rate: $${e.hourlyRate.toFixed(2)}/hr, Total hrs: ${e.totalHours}${e.overtimeHours > 0 ? ', OT: ' + e.overtimeHours + ' hrs @ $' + e.overtimeRate.toFixed(2) : ' (no OT)'}`, format: 'dollar' });
    });
    // Final step: Total gross pay
    steps.push({ label: 'Total gross pay for ALL employees', answer: totalGross, hint: 'Sum all individual gross pay amounts', format: 'dollar' });

    return { type: 'grosspay', employees, totalOTHours, totalGross, steps };
}

// ---- EMPLOYER TAX SCENARIO GENERATOR ----
function generateEmployerTaxScenario() {
    const numEmployees = 3 + Math.floor(Math.random() * 2); // 3-4 employees
    const ssRate = 0.062;
    const medRate = 0.0145;
    const ssCaps = [142800, 147000, 160200, 168600];
    const ssCap = ssCaps[Math.floor(Math.random() * ssCaps.length)];
    const futaRate = Math.random() < 0.5 ? 0.006 : 0.008;
    const futaCap = 7000;
    const sutaRates = [0.011, 0.012, 0.014, 0.018, 0.025, 0.026, 0.027];
    const sutaRate = sutaRates[Math.floor(Math.random() * sutaRates.length)];
    const sutaCap = 9000;

    const employees = [];
    const usedNames = new Set();

    // Create employees with varied cumulative earnings to test cap logic
    const earningsRanges = [
        () => roundCents(Math.random() * 6000 + 1000),          // well under all caps
        () => roundCents(Math.random() * 2000 + 6000),          // near FUTA cap
        () => roundCents(Math.random() * 2000 + 8000),          // near SUTA cap
        () => roundCents(Math.random() * 40000 + 40000),        // mid-range
        () => roundCents(ssCap - Math.random() * 5000),         // near SS cap
        () => roundCents(ssCap + Math.random() * 30000),        // over SS cap
    ];

    for (let i = 0; i < numEmployees; i++) {
        let name;
        do { name = randName(); } while (usedNames.has(name));
        usedNames.add(name);

        const rangeIdx = Math.min(i, earningsRanges.length - 1);
        const cumulativeEarnings = earningsRanges[rangeIdx]();
        const currentPay = roundCents(Math.random() * 3000 + 1500); // $1500-$4500 this period

        // Calculate taxable amounts for THIS period's pay
        const newCumulative = roundCents(cumulativeEarnings + currentPay);

        // SS: taxable only on earnings up to ssCap
        let ssTaxable = 0;
        if (cumulativeEarnings < ssCap) {
            ssTaxable = roundCents(Math.min(currentPay, ssCap - cumulativeEarnings));
        }
        const ssTax = roundCents(ssTaxable * ssRate);

        // Medicare: all earnings taxable (no cap)
        const medTax = roundCents(currentPay * medRate);

        // FUTA: taxable only on first $7000
        let futaTaxable = 0;
        if (cumulativeEarnings < futaCap) {
            futaTaxable = roundCents(Math.min(currentPay, futaCap - cumulativeEarnings));
        }
        const futaTax = roundCents(futaTaxable * futaRate);

        // SUTA: taxable only on first $9000
        let sutaTaxable = 0;
        if (cumulativeEarnings < sutaCap) {
            sutaTaxable = roundCents(Math.min(currentPay, sutaCap - cumulativeEarnings));
        }
        const sutaTax = roundCents(sutaTaxable * sutaRate);

        const totalEmployerTax = roundCents(ssTax + medTax + futaTax + sutaTax);

        employees.push({
            name, cumulativeEarnings, currentPay, newCumulative,
            ssTaxable, ssTax, medTax, futaTaxable, futaTax,
            sutaTaxable, sutaTax, totalEmployerTax
        });
    }

    const totalSS = roundCents(employees.reduce((s, e) => s + e.ssTax, 0));
    const totalMed = roundCents(employees.reduce((s, e) => s + e.medTax, 0));
    const totalFUTA = roundCents(employees.reduce((s, e) => s + e.futaTax, 0));
    const totalSUTA = roundCents(employees.reduce((s, e) => s + e.sutaTax, 0));
    const totalEmployerTax = roundCents(totalSS + totalMed + totalFUTA + totalSUTA);

    const steps = [
        { label: 'Total Employer Social Security Tax', answer: totalSS, hint: `6.2% on earnings up to $${ssCap.toLocaleString()} cap`, format: 'dollar' },
        { label: 'Total Employer Medicare Tax', answer: totalMed, hint: '1.45% on ALL earnings (no cap)', format: 'dollar' },
        { label: 'Total Employer FUTA Tax', answer: totalFUTA, hint: `${(futaRate*100).toFixed(1)}% on first $${futaCap.toLocaleString()}`, format: 'dollar' },
        { label: 'Total Employer SUTA Tax', answer: totalSUTA, hint: `${(sutaRate*100).toFixed(1)}% on first $${sutaCap.toLocaleString()}`, format: 'dollar' },
        { label: 'Total Employer Payroll Tax Expense', answer: totalEmployerTax, hint: 'SS + Medicare + FUTA + SUTA', format: 'dollar' }
    ];

    return { type: 'employertax', employees, ssCap, ssRate, medRate, futaRate, futaCap, sutaRate, sutaCap, totalSS, totalMed, totalFUTA, totalSUTA, totalEmployerTax, steps };
}

// ---- ENTRY CLASSIFICATION GENERATOR ----
function generateEntryClassScenario() {
    const allItems = [
        { item: "Employees' federal income taxes withheld", answer: 'A', explanation: 'FIT is deducted FROM the employee in the Salary Expense entry.' },
        { item: "Net pay for the period", answer: 'A', explanation: 'Net pay (cash paid to employees) is recorded in the Salary Expense entry.' },
        { item: "State unemployment taxes (SUTA)", answer: 'B', explanation: 'SUTA is paid only by the employer — Payroll Tax Expense entry.' },
        { item: "Social Security taxes (FICA — SS portion)", answer: 'C', explanation: 'SS is withheld from employees AND matched by employer — appears in both entries.' },
        { item: "Medicare taxes (FICA — Medicare portion)", answer: 'C', explanation: 'Medicare is withheld from employees AND matched by employer — appears in both entries.' },
        { item: "Hospital/health insurance premiums paid by employees", answer: 'A', explanation: 'Employee insurance deductions are recorded in the Salary Expense entry.' },
        { item: "Federal unemployment taxes (FUTA)", answer: 'B', explanation: 'FUTA is paid only by the employer — Payroll Tax Expense entry.' },
        { item: "Employees' state income taxes withheld", answer: 'A', explanation: 'SIT is deducted FROM the employee in the Salary Expense entry.' },
        { item: "Salary Expense (debit)", answer: 'A', explanation: 'The debit to Salary Expense is the first entry in the salary journal entry.' },
        { item: "Payroll Tax Expense (debit)", answer: 'B', explanation: 'The debit to Payroll Tax Expense is recorded in the employer tax entry.' },
        { item: "Cash (credit for net pay)", answer: 'A', explanation: 'Cash credited for employee net pay is in the Salary Expense entry.' },
        { item: "U.S. Savings Bonds deductions from employees", answer: 'A', explanation: 'Voluntary employee deductions appear in the Salary Expense entry.' },
        { item: "Union dues deducted from employees", answer: 'A', explanation: 'Union dues are employee payroll deductions — Salary Expense entry.' },
        { item: "Charitable contributions deducted from employees", answer: 'A', explanation: 'Employee charitable deductions appear in the Salary Expense entry.' },
        { item: "Retirement/401(k) deductions from employees", answer: 'A', explanation: 'Employee retirement contributions are deducted in the Salary Expense entry.' },
        { item: "Employer matching of retirement contributions", answer: 'B', explanation: 'Employer match is an employer cost — recorded in a separate benefits entry (similar to PTE).' },
        { item: "Workers' compensation insurance", answer: 'B', explanation: "Workers' comp is an employer-only expense — Payroll Tax Expense entry." },
        { item: "Total FICA taxes", answer: 'C', explanation: 'Total FICA (SS + Medicare) appears in BOTH the employee and employer entries.' },
        { item: "Social Security Payable (credit)", answer: 'C', explanation: 'SS Payable is credited in both entries: employee withholding + employer match.' },
        { item: "Medicare Payable (credit)", answer: 'C', explanation: 'Medicare Payable is credited in both entries: employee withholding + employer match.' },
    ];

    // Shuffle and pick 10 questions
    const shuffled = [...allItems].sort(() => Math.random() - 0.5);
    const questions = shuffled.slice(0, 10);

    return { type: 'entryclass', questions, currentQ: 0, correct: 0 };
}

function startPayroll(mode) {
    prType = mode;
    prStep = 0;
    prStepsCorrect = 0;
    prTotalAttempts++;
    localStorage.setItem('prTotalAttempts', prTotalAttempts);

    if (mode === 'random') {
        const types = ['grosspay', 'employertax', 'entryclass'];
        prType = types[Math.floor(Math.random() * types.length)];
    }

    if (prType === 'grosspay') {
        prScenario = generateGrossPayScenario();
    } else if (prType === 'employertax') {
        prScenario = generateEmployerTaxScenario();
    } else {
        prScenario = generateEntryClassScenario();
    }

    updatePRStats();
    showSection('payroll-viewer');
    renderPRProblem();
}

function renderPRProblem() {
    const s = prScenario;
    const container = document.getElementById('prContent');

    if (s.type === 'grosspay') {
        renderGrossPayProblem(s, container);
    } else if (s.type === 'employertax') {
        renderEmployerTaxProblem(s, container);
    } else {
        renderEntryClassProblem(s, container);
    }
}

function renderGrossPayProblem(s, container) {
    let html = `<div class="gp-data-card" style="border-color:rgba(59,130,246,0.3);">
        <h3 style="color:#60a5fa;">💰 Gross Pay Calculation</h3>
        <p style="color:var(--text-muted); margin-bottom:1rem;">Employees are paid hourly with overtime at 1.5× for hours over 40/week.</p>
        <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.95rem;">
            <thead>
                <tr style="border-bottom:2px solid var(--border);">
                    <th style="text-align:left; padding:0.5rem; color:var(--primary);">Employee</th>
                    <th style="text-align:right; padding:0.5rem; color:var(--primary);">Rate/Hr</th>
                    <th style="text-align:center; padding:0.5rem; color:var(--text-muted);">Mon</th>
                    <th style="text-align:center; padding:0.5rem; color:var(--text-muted);">Tue</th>
                    <th style="text-align:center; padding:0.5rem; color:var(--text-muted);">Wed</th>
                    <th style="text-align:center; padding:0.5rem; color:var(--text-muted);">Thu</th>
                    <th style="text-align:center; padding:0.5rem; color:var(--text-muted);">Fri</th>
                    <th style="text-align:right; padding:0.5rem; color:var(--accent);">Total Hrs</th>
                </tr>
            </thead>
            <tbody>`;
    s.employees.forEach(e => {
        html += `<tr style="border-bottom:1px solid rgba(148,163,184,0.1);">
            <td style="padding:0.5rem; font-weight:600;">${e.name}</td>
            <td style="text-align:right; padding:0.5rem; font-family:monospace;">$${e.hourlyRate.toFixed(2)}</td>`;
        e.days.forEach(d => {
            html += `<td style="text-align:center; padding:0.5rem; font-family:monospace;">${d}</td>`;
        });
        html += `<td style="text-align:right; padding:0.5rem; font-family:monospace; font-weight:600; color:${e.totalHours > 40 ? 'var(--accent)' : 'var(--text-light)'};">${e.totalHours}</td></tr>`;
    });
    html += `</tbody></table></div></div>`;

    // Steps
    html += `<h3 style="margin:1.5rem 0 1rem;">Calculate Each Value:</h3>`;
    s.steps.forEach((step, i) => {
        const locked = i > prStep;
        const done = i < prStep;
        html += `<div class="gp-step" style="opacity:${locked ? 0.4 : 1}; border-color:${done ? 'var(--secondary)' : i === prStep ? 'rgba(59,130,246,0.5)' : 'var(--border)'};">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <strong>Step ${i + 1}: ${step.label}</strong>
                ${done ? '<span style="color:var(--secondary);">✓</span>' : ''}
            </div>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.75rem;">${step.hint}</p>`;
        if (done) {
            const display = step.format === 'hours' ? step.answer : '$' + step.answer.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            html += `<div class="gp-result" style="color:var(--secondary);">${display}</div>`;
        } else if (i === prStep) {
            html += `<div style="display:flex; gap:0.5rem; align-items:center;">
                <span style="color:var(--text-muted);">${step.format === 'dollar' ? '$' : ''}</span>
                <input type="text" id="prInput" class="gp-input" placeholder="${step.format === 'hours' ? 'Enter hours' : 'Enter amount'}" onkeydown="if(event.key==='Enter')checkPRStep()">
                <button class="gp-check-btn" onclick="checkPRStep()">Check</button>
            </div>
            <div id="prFeedback" style="margin-top:0.5rem;"></div>`;
        }
        html += `</div>`;
    });

    if (prStep >= s.steps.length) {
        html += renderPRComplete();
    }

    container.innerHTML = html;
    const inp = document.getElementById('prInput');
    if (inp) inp.focus();
}

function renderEmployerTaxProblem(s, container) {
    let html = `<div class="gp-data-card" style="border-color:rgba(16,185,129,0.3);">
        <h3 style="color:#34d399;">🏛️ Employer Payroll Tax Expense</h3>
        <p style="color:var(--text-muted); margin-bottom:0.5rem;">Calculate the employer's payroll tax expense for this pay period.</p>
        <div style="display:flex; flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem; font-size:0.85rem;">
            <span style="background:rgba(59,130,246,0.15); padding:0.3rem 0.7rem; border-radius:0.5rem;">SS: 6.2% (cap $${s.ssCap.toLocaleString()})</span>
            <span style="background:rgba(16,185,129,0.15); padding:0.3rem 0.7rem; border-radius:0.5rem;">Medicare: 1.45% (no cap)</span>
            <span style="background:rgba(245,158,11,0.15); padding:0.3rem 0.7rem; border-radius:0.5rem;">FUTA: ${(s.futaRate*100).toFixed(1)}% (cap $${s.futaCap.toLocaleString()})</span>
            <span style="background:rgba(139,92,246,0.15); padding:0.3rem 0.7rem; border-radius:0.5rem;">SUTA: ${(s.sutaRate*100).toFixed(1)}% (cap $${s.sutaCap.toLocaleString()})</span>
            <span style="background:rgba(148,163,184,0.15); padding:0.3rem 0.7rem; border-radius:0.5rem;">FIT: Disregard</span>
        </div>
        <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.95rem;">
            <thead>
                <tr style="border-bottom:2px solid var(--border);">
                    <th style="text-align:left; padding:0.5rem; color:var(--secondary);">Employee</th>
                    <th style="text-align:right; padding:0.5rem; color:var(--text-muted);">Cumulative Earnings (Before)</th>
                    <th style="text-align:right; padding:0.5rem; color:var(--primary);">Current Period Pay</th>
                </tr>
            </thead>
            <tbody>`;
    s.employees.forEach(e => {
        html += `<tr style="border-bottom:1px solid rgba(148,163,184,0.1);">
            <td style="padding:0.5rem; font-weight:600;">${e.name}</td>
            <td style="text-align:right; padding:0.5rem; font-family:monospace;">$${e.cumulativeEarnings.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
            <td style="text-align:right; padding:0.5rem; font-family:monospace; font-weight:600; color:var(--primary);">$${e.currentPay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
        </tr>`;
    });
    html += `</tbody></table></div></div>`;

    html += `<h3 style="margin:1.5rem 0 1rem;">Calculate Employer Taxes:</h3>`;
    s.steps.forEach((step, i) => {
        const locked = i > prStep;
        const done = i < prStep;
        const borderColors = ['rgba(59,130,246,0.5)', 'rgba(16,185,129,0.5)', 'rgba(245,158,11,0.5)', 'rgba(139,92,246,0.5)', 'rgba(251,191,36,0.5)'];
        html += `<div class="gp-step" style="opacity:${locked ? 0.4 : 1}; border-color:${done ? 'var(--secondary)' : i === prStep ? borderColors[i] || 'var(--primary)' : 'var(--border)'};">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <strong>Step ${i + 1}: ${step.label}</strong>
                ${done ? '<span style="color:var(--secondary);">✓</span>' : ''}
            </div>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:0.75rem;">${step.hint}</p>`;
        if (done) {
            html += `<div class="gp-result" style="color:var(--secondary);">$${step.answer.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>`;
        } else if (i === prStep) {
            html += `<div style="display:flex; gap:0.5rem; align-items:center;">
                <span style="color:var(--text-muted);">$</span>
                <input type="text" id="prInput" class="gp-input" placeholder="Enter amount" onkeydown="if(event.key==='Enter')checkPRStep()">
                <button class="gp-check-btn" onclick="checkPRStep()">Check</button>
            </div>
            <div id="prFeedback" style="margin-top:0.5rem;"></div>`;
        }
        html += `</div>`;
    });

    if (prStep >= s.steps.length) {
        html += renderPRComplete();
    }

    container.innerHTML = html;
    const inp = document.getElementById('prInput');
    if (inp) inp.focus();
}

function renderEntryClassProblem(s, container) {
    const q = s.questions[s.currentQ];
    if (!q) {
        // All questions answered
        const pct = Math.round((s.correct / s.questions.length) * 100);
        const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
        container.innerHTML = `<div class="gp-data-card" style="text-align:center; border-color:var(--secondary); margin-top:1rem;">
            <div style="font-size:3rem;">${emoji}</div>
            <h3 style="color:var(--secondary); margin:0.5rem 0;">Entry Classification Complete!</h3>
            <p style="font-size:1.2rem;">${s.correct} / ${s.questions.length} correct (${pct}%)</p>
            <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                <button class="btn" onclick="startPayroll('entryclass')">New Set →</button>
                <button class="btn" onclick="startPayroll('random')">🎲 Random Type →</button>
                <button class="btn btn-secondary" onclick="showSection('payroll')">Back to Menu</button>
            </div>
        </div>`;
        return;
    }

    let html = `<div class="gp-data-card" style="border-color:rgba(245,158,11,0.3);">
        <h3 style="color:#fbbf24;">📝 Entry Classification</h3>
        <p style="color:var(--text-muted); margin-bottom:0.5rem;">Question ${s.currentQ + 1} of ${s.questions.length}</p>
        <div style="width:100%; background:rgba(148,163,184,0.2); border-radius:0.5rem; height:6px; margin-bottom:1rem;">
            <div style="width:${((s.currentQ) / s.questions.length) * 100}%; background:var(--primary); height:100%; border-radius:0.5rem; transition:width 0.3s;"></div>
        </div>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.5rem;">
            <strong>A</strong> = Salary Expense entry &nbsp;|&nbsp; <strong>B</strong> = Payroll Tax Expense entry &nbsp;|&nbsp; <strong>C</strong> = Both entries
        </p>
        <h2 style="text-align:center; padding:1.5rem 0; font-size:1.3rem; color:var(--text-light);">${q.item}</h2>
    </div>`;

    html += `<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; margin-top:1.5rem;">
        <button class="cl-option" id="prOptA" onclick="answerEntryClass('A')" style="padding:1.25rem; font-size:1.1rem; border-color:rgba(59,130,246,0.3);">
            <div style="font-size:1.5rem; font-weight:700; color:#60a5fa;">A</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Salary Expense</div>
        </button>
        <button class="cl-option" id="prOptB" onclick="answerEntryClass('B')" style="padding:1.25rem; font-size:1.1rem; border-color:rgba(16,185,129,0.3);">
            <div style="font-size:1.5rem; font-weight:700; color:#34d399;">B</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Payroll Tax Exp</div>
        </button>
        <button class="cl-option" id="prOptC" onclick="answerEntryClass('C')" style="padding:1.25rem; font-size:1.1rem; border-color:rgba(245,158,11,0.3);">
            <div style="font-size:1.5rem; font-weight:700; color:#fbbf24;">C</div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem;">Both</div>
        </button>
    </div>`;
    html += `<div id="prECFeedback" style="margin-top:1rem;"></div>`;

    container.innerHTML = html;
}

function answerEntryClass(choice) {
    const s = prScenario;
    const q = s.questions[s.currentQ];
    const isCorrect = choice === q.answer;

    // Disable buttons
    ['A','B','C'].forEach(letter => {
        const btn = document.getElementById('prOpt' + letter);
        if (btn) {
            btn.disabled = true;
            if (letter === q.answer) btn.classList.add('selected-correct');
            if (letter === choice && !isCorrect) btn.classList.add('selected-incorrect');
        }
    });

    const feedback = document.getElementById('prECFeedback');
    if (isCorrect) {
        s.correct++;
        prTotalCorrect++;
        Progress.addPoints(3);
        feedback.innerHTML = `<div style="background:rgba(16,185,129,0.15); border:1px solid var(--secondary); border-radius:0.75rem; padding:1rem; color:var(--secondary); font-weight:600;">✓ Correct! ${q.explanation}</div>`;
    } else {
        feedback.innerHTML = `<div style="background:rgba(239,68,68,0.15); border:1px solid var(--danger); border-radius:0.75rem; padding:1rem; color:var(--danger); font-weight:600;">✗ Incorrect — Answer is ${q.answer}. ${q.explanation}</div>`;
    }

    prTotalCompleted++;
    localStorage.setItem('prTotalCorrect', prTotalCorrect);
    localStorage.setItem('prTotalCompleted', prTotalCompleted);
    updatePRStats();

    s.currentQ++;
    setTimeout(() => { renderPRProblem(); }, 1500);
}

function checkPRStep() {
    const input = document.getElementById('prInput');
    const feedback = document.getElementById('prFeedback');
    if (!input || !feedback) return;

    let val = input.value.trim().replace(/[$,]/g, '');
    if (val === '') return;
    val = parseFloat(val);
    if (isNaN(val)) {
        feedback.innerHTML = '<span style="color:var(--danger);">Please enter a valid number.</span>';
        return;
    }

    const step = prScenario.steps[prStep];
    const correct = step.answer;
    const tolerance = step.format === 'hours' ? 0.05 : 0.015;
    const isCorrect = Math.abs(val - correct) < tolerance;

    if (isCorrect) {
        prStepsCorrect++;
        prTotalCorrect++;
        Progress.addPoints(5);
        feedback.innerHTML = '<span style="color:var(--secondary); font-weight:600;">✓ Correct!</span>';
    } else {
        const display = step.format === 'hours' ? correct.toString() : '$' + correct.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        feedback.innerHTML = `<span style="color:var(--danger); font-weight:600;">✗ Incorrect.</span> The answer is <strong>${display}</strong>`;
    }

    prStep++;
    prTotalCompleted++;
    localStorage.setItem('prTotalCorrect', prTotalCorrect);
    localStorage.setItem('prTotalCompleted', prTotalCompleted);
    updatePRStats();

    setTimeout(() => { renderPRProblem(); }, 1200);
}

function renderPRComplete() {
    const totalSteps = prScenario.steps.length;
    const pct = Math.round((prStepsCorrect / totalSteps) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📚';
    const typeLabel = prScenario.type === 'grosspay' ? 'Gross Pay' : 'Employer Tax';
    return `<div class="gp-data-card" style="text-align:center; border-color:var(--secondary); margin-top:1.5rem;">
        <div style="font-size:3rem;">${emoji}</div>
        <h3 style="color:var(--secondary); margin:0.5rem 0;">${typeLabel} Problem Complete!</h3>
        <p style="font-size:1.2rem;">${prStepsCorrect} / ${totalSteps} steps correct (${pct}%)</p>
        <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <button class="btn" onclick="startPayroll('${prScenario.type}')">Same Type →</button>
            <button class="btn" onclick="startPayroll('random')">🎲 Random Type →</button>
            <button class="btn btn-secondary" onclick="showSection('payroll')">Back to Menu</button>
        </div>
    </div>`;
}

function resetPayroll() {
    if (confirm('Reset all Payroll progress?')) {
        prTotalAttempts = 0; prTotalCorrect = 0; prTotalCompleted = 0;
        localStorage.setItem('prTotalAttempts', 0);
        localStorage.setItem('prTotalCorrect', 0);
        localStorage.setItem('prTotalCompleted', 0);
        updatePRStats();
    }
}

function updatePRStats() {
    const el = document.getElementById('prCompleted');
    if (el) {
        el.textContent = prTotalCompleted;
        const acc = prTotalCompleted > 0 ? Math.round((prTotalCorrect / prTotalCompleted) * 100) : 0;
        document.getElementById('prAccuracy').textContent = acc + '%';
        document.getElementById('prAttempts').textContent = prTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => { updatePRStats(); });
