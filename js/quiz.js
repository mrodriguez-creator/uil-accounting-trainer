// =====================================================
// ACCOUNT CLASSIFICATION QUIZ
// 10 multiple-choice questions
// =====================================================

const quizQuestions = [
    {question:'Accounts Payable is what type of account?',answers:['Asset','Liability','Capital','Revenue','Expense'],correct:1,explanation:'Accounts Payable is a Liability. Liabilities are in CORL with CREDIT balances.'},
    {question:'Normal balance for Sales (Revenue)?',answers:['Debit','Credit'],correct:1,explanation:'Revenue = CREDIT (CORL).'},
    {question:'Rent Expense is classified as:',answers:['Asset','Liability','Expense','Revenue'],correct:2,explanation:'Rent Expense is an Expense (DEAD = Debit).'},
    {question:'Supplies has what normal balance?',answers:['Debit','Credit'],correct:0,explanation:'Supplies is an Asset (DEAD = Debit).'},
    {question:'Owner, Drawing normal balance:',answers:['Debit','Credit'],correct:0,explanation:'Drawing = DEBIT (reduces equity).'},
    {question:'Which accounts close at year-end?',answers:['Assets only','Revenue, Expenses, Drawing','Assets & Liabilities','Only Capital'],correct:1,explanation:'Temporary accounts (RED-C) close.'},
    {question:'Cash is classified as:',answers:['Permanent Asset; DR','Temporary Asset; CR','Liability; CR','Revenue; CR'],correct:0,explanation:'Cash is a permanent Asset with DR balance.'},
    {question:'D in DEAD stands for?',answers:['Dividends','Drawing','Deferred','Discounts'],correct:1,explanation:'DEAD = Drawing, Expenses, Assets, Drawing.'},
    {question:'Capital account is:',answers:['Temporary; DR','Permanent; CR','Temporary; CR','Permanent; DR'],correct:1,explanation:'Capital is permanent OE with CR balance.'},
    {question:'Notes Payable normal balance?',answers:['Debit','Credit'],correct:1,explanation:'Notes Payable is a Liability (CR).'}
];

let currentQuizAnswers = [];
let quizSubmitted = false;

function startQuiz() {
    currentQuizAnswers = new Array(quizQuestions.length).fill(null);
    quizSubmitted = false;
    renderQuiz();
}

function renderQuiz() {
    let h = `<div class="hero"><h1>Account Classification Quiz</h1><p class="hero-subtitle">10 questions</p></div>`;
    quizQuestions.forEach((q, qi) => {
        h += `<div class="quiz-question"><div class="question-number">Question ${qi + 1}</div><div class="question-text">${q.question}</div><div class="answer-options">`;
        q.answers.forEach((a, ai) => {
            const sel = currentQuizAnswers[qi] === ai;
            const cor = quizSubmitted && ai === q.correct;
            const inc = quizSubmitted && sel && ai !== q.correct;
            let c = 'answer-option';
            if (sel && !quizSubmitted) c += ' selected';
            if (cor) c += ' correct';
            if (inc) c += ' incorrect';
            h += `<div class="${c}" onclick="${!quizSubmitted ? `selectAnswer(${qi},${ai})` : ''}"><div class="option-letter">${String.fromCharCode(65 + ai)}</div><div>${a}</div>${cor ? '<div style="margin-left:auto;">✓</div>' : ''}${inc ? '<div style="margin-left:auto;">✗</div>' : ''}</div>`;
        });
        h += `</div><div class="quiz-explanation ${quizSubmitted ? 'show' : ''}"><strong>Explanation:</strong> ${q.explanation}</div></div>`;
    });
    if (!quizSubmitted) {
        h += `<button class="btn" onclick="submitQuiz()">Submit</button>`;
    } else {
        const c = currentQuizAnswers.filter((a, i) => a === quizQuestions[i].correct).length;
        const s = Math.round((c / quizQuestions.length) * 100);
        h += `<div class="quiz-results"><h2>Quiz Complete!</h2><div class="result-score">${s}%</div><p>${c} of ${quizQuestions.length} correct!</p><p>+${c * 5} points</p><button class="btn" onclick="startQuiz()">Retake</button></div>`;
    }
    document.getElementById('quizContent').innerHTML = h;
}

function selectAnswer(q, a) {
    if (quizSubmitted) return;
    currentQuizAnswers[q] = a;
    renderQuiz();
}

function submitQuiz() {
    if (currentQuizAnswers.includes(null)) {
        showNotification('Answer all questions!', true);
        return;
    }
    quizSubmitted = true;
    const c = currentQuizAnswers.filter((a, i) => a === quizQuestions[i].correct).length;
    Progress.submitQuiz(c, quizQuestions.length);
    renderQuiz();
    window.scrollTo(0, 0);
}

// Auto-start the quiz on page load
document.addEventListener('DOMContentLoaded', () => { startQuiz(); });
