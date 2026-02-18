// =====================================================
// TRUE/FALSE QUIZ — 25 questions from real UIL tests
// =====================================================

const trueFalseQuestions = [
    {id:1, question:'The standards and rules that accountants follow are called GAAP (Generally Accepted Accounting Principles).', answer:true, explanation:'TRUE! GAAP = Generally Accepted Accounting Principles (not GAP).', category:'Principles'},
    {id:2, question:'An account\'s normal balance is always on the side used to record increases.', answer:true, explanation:'TRUE! Assets/Expenses increase with debits. Liabilities/OE/Revenue increase with credits.', category:'Normal Balances'},
    {id:3, question:'Accounting is called the "language of business."', answer:true, explanation:'TRUE! Accounting communicates financial information.', category:'Basics'},
    {id:4, question:'Financial accounting is for external users; managerial accounting is for internal users.', answer:true, explanation:'TRUE! Financial = external (investors, banks). Managerial = internal (managers).', category:'Types'},
    {id:5, question:'Permanent accounts carry balances forward to the next period.', answer:true, explanation:'TRUE! Permanent accounts (A, L, OE) continue. Temporary close to zero.', category:'Account Types'},
    {id:6, question:'Posting transfers information from the general ledger to the trial balance.', answer:false, explanation:'FALSE! Posting is from JOURNAL to LEDGER. Trial balance is prepared FROM ledger.', category:'Cycle'},
    {id:7, question:'The balance sheet is sometimes called a statement of financial position.', answer:true, explanation:'TRUE! Both names refer to the same financial statement.', category:'Financial Statements'},
    {id:8, question:'Going Concern assumes a business will operate indefinitely.', answer:true, explanation:'TRUE! Going Concern means business continues indefinitely (not to a fixed date).', category:'Concepts'},
    {id:9, question:'Temporary accounts are also called nominal accounts.', answer:true, explanation:'TRUE! Temporary = Nominal = Revenue, Expenses, Drawing, COGS.', category:'Account Types'},
    {id:10, question:'Report form balance sheet lists sections one under the other (vertical).', answer:true, explanation:'TRUE! Report form = vertical. Account form = horizontal.', category:'Financial Statements'},
    {id:11, question:'After closing, only permanent accounts have balances.', answer:true, explanation:'TRUE! Permanent accounts remain. All temporary accounts close to zero.', category:'Closing'},
    {id:12, question:'A contra account decreases its related account balance.', answer:true, explanation:'TRUE! Example: Accumulated Depreciation (contra) reduces Equipment.', category:'Contra Accounts'},
    {id:13, question:'A slide error occurs when a decimal point is moved by mistake.', answer:true, explanation:'TRUE! Slide = decimal moved. Transposition = digits reversed.', category:'Errors'},
    {id:14, question:'Double-entry accounting means each transaction affects at least two accounts.', answer:true, explanation:'TRUE! At least two accounts (could be more in compound entries).', category:'Double-Entry'},
    {id:15, question:'In accounting, "ruling" means drawing a line in records.', answer:true, explanation:'TRUE! Ruling = drawing lines. (Not FASB interpretations!)', category:'Procedures'},
    {id:16, question:'Accounts Receivable Ledger contains individual customer names.', answer:true, explanation:'TRUE! Subsidiary ledgers contain individual account details.', category:'Ledgers'},
    {id:17, question:'DEAD = Drawing, Expenses, Assets (accounts increasing with debits).', answer:true, explanation:'TRUE! DEAD accounts increase with debits.', category:'DEAD CORL'},
    {id:18, question:'CORL = Credits, Owner\'s Equity, Revenue, Liabilities (accounts increasing with credits).', answer:true, explanation:'TRUE! CORL accounts increase with credits.', category:'DEAD CORL'},
    {id:19, question:'The accounting equation is: Assets = Liabilities + Owner\'s Equity.', answer:true, explanation:'TRUE! This equation must always balance.', category:'Equation'},
    {id:20, question:'Revenue increases owner\'s equity; expenses decrease it.', answer:true, explanation:'TRUE! Revenue → OE ↑. Expenses → OE ↓.', category:'Owner\'s Equity'},
    {id:21, question:'Insurance adjustment: DR Insurance Expense, CR Prepaid Insurance.', answer:true, explanation:'TRUE! Expired insurance moves from asset to expense.', category:'Adjustments'},
    {id:22, question:'Supplies adjustment: DR Supplies Expense, CR Supplies.', answer:true, explanation:'TRUE! Used supplies move from asset to expense.', category:'Adjustments'},
    {id:23, question:'RED-C = Revenue, Expenses, Drawing, COGS (temporary accounts).', answer:true, explanation:'TRUE! RED-C accounts close at year-end.', category:'Closing'},
    {id:24, question:'C-DID = Closing order: Credits, Debits, Income, Drawing.', answer:true, explanation:'TRUE! Close revenue, then expenses, then Income Summary, then Drawing.', category:'Closing'},
    {id:25, question:'PAUL = Prepaid = Asset, Unearned = Liability.', answer:true, explanation:'TRUE! Essential for remembering adjustment types.', category:'Adjustments'}
];

let currentTFQuestion = 0;
let tfProgress = JSON.parse(localStorage.getItem('tfProgress')) || {
    completed: [], correct: [], answers: {}
};

function startTrueFalse() {
    currentTFQuestion = 0;
    renderTFQuestion();
    showSection('truefalse-viewer');
}

function renderTFQuestion() {
    const q = trueFalseQuestions[currentTFQuestion];
    const userAnswer = tfProgress.answers[q.id];
    const isAnswered = userAnswer !== undefined;

    let html = `
        <div class="hero">
            <h1>Question ${currentTFQuestion + 1} of ${trueFalseQuestions.length}</h1>
            <p class="hero-subtitle">${q.category}</p>
        </div>

        <div class="quiz-question">
            <div class="question-text">${q.question}</div>

            <div class="answer-options">
                <div class="answer-option ${isAnswered && userAnswer === true ? 'selected' : ''}"
                     onclick="answerTF(${q.id}, true)">
                    <div class="option-letter">T</div>
                    <div>TRUE</div>
                </div>
                <div class="answer-option ${isAnswered && userAnswer === false ? 'selected' : ''}"
                     onclick="answerTF(${q.id}, false)">
                    <div class="option-letter">F</div>
                    <div>FALSE</div>
                </div>
            </div>

            ${isAnswered ? `
                <div class="quiz-explanation show">
                    <strong>${userAnswer === q.answer ? '✓ Correct!' : '✗ Incorrect'}</strong><br>
                    ${q.explanation}
                </div>
            ` : ''}
        </div>

        <div style="display:flex; gap:1rem; margin-top:2rem;">
            ${currentTFQuestion > 0 ? '<button class="btn btn-secondary" onclick="prevTF()">← Previous</button>' : ''}
            ${currentTFQuestion < trueFalseQuestions.length - 1 ?
                '<button class="btn" onclick="nextTF()">Next →</button>' :
                '<button class="btn" onclick="finishTF()">Finish Quiz</button>'}
        </div>
    `;

    document.getElementById('tfContent').innerHTML = html;
}

function answerTF(id, answer) {
    const q = trueFalseQuestions.find(q => q.id === id);
    tfProgress.answers[id] = answer;

    if (!tfProgress.completed.includes(id)) {
        tfProgress.completed.push(id);
    }

    if (answer === q.answer && !tfProgress.correct.includes(id)) {
        tfProgress.correct.push(id);
        Progress.addPoints(5);
    }

    localStorage.setItem('tfProgress', JSON.stringify(tfProgress));
    updateTFStats();
    renderTFQuestion();
}

function nextTF() {
    if (currentTFQuestion < trueFalseQuestions.length - 1) {
        currentTFQuestion++;
        renderTFQuestion();
    }
}

function prevTF() {
    if (currentTFQuestion > 0) {
        currentTFQuestion--;
        renderTFQuestion();
    }
}

function finishTF() {
    const score = Math.round((tfProgress.correct.length / trueFalseQuestions.length) * 100);
    alert(`Quiz Complete!\n\nScore: ${tfProgress.correct.length}/${trueFalseQuestions.length} (${score}%)`);
    showSection('truefalse');
}

function resetTrueFalse() {
    if (confirm('Reset all True/False progress?')) {
        tfProgress = {completed: [], correct: [], answers: {}};
        localStorage.setItem('tfProgress', JSON.stringify(tfProgress));
        updateTFStats();
        showSection('truefalse');
    }
}

function updateTFStats() {
    const el1 = document.getElementById('tfCompleted');
    const el2 = document.getElementById('tfAccuracy');
    if (el1) el1.textContent = tfProgress.completed.length;
    if (el2) {
        const accuracy = tfProgress.completed.length > 0
            ? Math.round((tfProgress.correct.length / tfProgress.completed.length) * 100)
            : 0;
        el2.textContent = accuracy + '%';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', updateTFStats);
