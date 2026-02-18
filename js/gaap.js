// =====================================================
// GAAP CONCEPTS MATCHING QUESTION BANK (40+ questions)
// Based on real UIL tests: "Write the identifying letter
// of the correct concept that is described."
// Exact format from UIL Invitational A 2023, B 2025, etc.
// =====================================================

const gaapConcepts = {
    A: 'Accounting Period Cycle',
    B: 'Business Entity',
    C: 'Conservatism',
    D: 'Consistent Reporting',
    E: 'Full (Adequate) Disclosure',
    F: 'Going Concern',
    G: 'Historical Cost',
    H: 'Matching Principle',
    I: 'Materiality',
    J: 'Objective Evidence',
    K: 'Realization of Revenue',
    L: 'Relevance',
    M: 'Reliability',
    N: 'Unit of Measure'
};

const gaapQuestionBank = [
    // --- ACCOUNTING PERIOD CYCLE (A) ---
    {id:'g1', description:'This concept is applied when changes in financial information are reported for a specific period of time in the form of financial statements.', answer:'A', explanation:'Accounting Period Cycle — financial statements cover a specific time period (month, quarter, year).', category:'Concept'},
    {id:'g2', description:'A business organizes its financial reporting into months, quarters, or years, preparing statements at regular intervals.', answer:'A', explanation:'Accounting Period Cycle — dividing business life into regular reporting periods.', category:'Concept'},
    {id:'g3', description:'The heading of an income statement includes a date that describes a period of time, such as "For the Year Ended December 31."', answer:'A', explanation:'Accounting Period Cycle — income statements report activity over a period, not a single date.', category:'Concept'},
    // --- BUSINESS ENTITY (B) ---
    {id:'g4', description:'This concept states that the transactions associated with a business must be kept separate from those of its owners.', answer:'B', explanation:'Business Entity — personal and business transactions must be kept separate.', category:'Concept'},
    {id:'g5', description:'A business owner pays for personal groceries using a personal credit card, and does not record this in the business records.', answer:'B', explanation:'Business Entity — personal expenses of the owner are not business transactions.', category:'Concept'},
    {id:'g6', description:'A business exists as a separate entity from its owner, and only business-related transactions are recorded in the company\'s accounting records.', answer:'B', explanation:'Business Entity — the business is an entity separate from the owner.', category:'Concept'},
    // --- CONSERVATISM (C) ---
    {id:'g7', description:'This GAAP principle states that it is best to present amounts that are least likely to result in an overstatement of income or assets.', answer:'C', explanation:'Conservatism — when in doubt, choose the option least likely to overstate assets or income.', category:'Constraint'},
    {id:'g8', description:'When two equally acceptable accounting methods exist, the accountant chooses the one that is least likely to overstate net income or total assets.', answer:'C', explanation:'Conservatism — err on the side of understating rather than overstating.', category:'Constraint'},
    {id:'g9', description:'An accountant values ending inventory at the lower of cost or market value, ensuring assets are not overstated.', answer:'C', explanation:'Conservatism — Lower of Cost or Market (LCM) is a classic example.', category:'Constraint'},
    // --- CONSISTENT REPORTING (D) ---
    {id:'g10', description:'This concept is applied when the same accounting methods are applied in the same way from one period to the next.', answer:'D', explanation:'Consistent Reporting — use the same methods period to period for comparability.', category:'Quality'},
    {id:'g11', description:'A company uses the straight-line depreciation method every year rather than switching between methods, allowing meaningful comparisons.', answer:'D', explanation:'Consistent Reporting — don\'t switch methods. If you do, you must disclose the change.', category:'Quality'},
    {id:'g12', description:'The same accounting procedures are followed in the same way in each accounting period so financial statements can be compared.', answer:'D', explanation:'Consistent Reporting — consistency makes financial data comparable across periods.', category:'Quality'},
    // --- FULL (ADEQUATE) DISCLOSURE (E) ---
    {id:'g13', description:'This concept requires that financial statements include all information necessary for a user to make informed decisions.', answer:'E', explanation:'Full (Adequate) Disclosure — report everything a user needs to know.', category:'Principle'},
    {id:'g14', description:'A company includes footnotes with its financial statements explaining a pending lawsuit that could significantly affect its financial position.', answer:'E', explanation:'Full Disclosure — material information like lawsuits must be disclosed in footnotes.', category:'Principle'},
    {id:'g15', description:'All relevant financial information that might influence a user\'s interpretation of the statements must be reported, even in the form of notes.', answer:'E', explanation:'Full (Adequate) Disclosure — nothing material should be hidden from users.', category:'Principle'},
    // --- GOING CONCERN (F) ---
    {id:'g16', description:'This concept applies to the assumption that a business will continue to operate indefinitely in the future.', answer:'F', explanation:'Going Concern — the business will keep going. (Not to a "fixed point" — that\'s a common UIL trap!)' , category:'Concept'},
    {id:'g17', description:'Financial statements are prepared with the expectation that the business will remain in operation indefinitely, not that it will close.', answer:'F', explanation:'Going Concern — financial statements assume continued operation.', category:'Concept'},
    {id:'g18', description:'Assets are recorded at their original cost rather than liquidation value because the company is expected to continue operations.', answer:'F', explanation:'Going Concern — we don\'t use liquidation values because we assume the business continues.', category:'Concept'},
    // --- HISTORICAL COST (G) ---
    {id:'g19', description:'This concept is applied when the amount paid for an asset is the amount debited to the asset account.', answer:'G', explanation:'Historical Cost — assets are recorded at the price actually paid for them.', category:'Principle'},
    {id:'g20', description:'A business records the purchase of a building for $200,000 even though its current market value is $250,000.', answer:'G', explanation:'Historical Cost — record assets at purchase price, not current market value.', category:'Principle'},
    {id:'g21', description:'The original purchase price is used when recording an asset, regardless of what the asset might be worth today.', answer:'G', explanation:'Historical Cost — the actual amount paid (historical) is recorded, not appraised value.', category:'Principle'},
    // --- MATCHING PRINCIPLE (H) ---
    {id:'g22', description:'This principle requires that revenue earned during an accounting period be matched with the expenses incurred to earn that revenue.', answer:'H', explanation:'Matching Principle — expenses must be reported in the same period as the revenue they helped generate.', category:'Principle'},
    {id:'g23', description:'A company records both its December sales revenue and the cost of goods sold for those sales in December, even though cash may not be collected until January.', answer:'H', explanation:'Matching Principle — record revenue AND related expenses in the same period.', category:'Principle'},
    {id:'g24', description:'Adjusting entries for supplies, insurance, and depreciation are made so that expenses are recognized in the same period as the revenue they helped produce.', answer:'H', explanation:'Matching Principle — adjusting entries ensure proper matching of expenses to revenue periods.', category:'Principle'},
    // --- MATERIALITY (I) ---
    {id:'g25', description:'This concept holds that insignificant amounts need not be reported strictly according to GAAP if doing so would be more costly than the benefit of the information.', answer:'I', explanation:'Materiality — immaterial amounts can use simpler treatment. Only significant items need strict GAAP treatment.', category:'Constraint'},
    {id:'g26', description:'A company expenses a $5 wastebasket immediately rather than depreciating it over its useful life, because the amount is too small to matter.', answer:'I', explanation:'Materiality — the cost of the wastebasket is immaterial, so it\'s expensed immediately.', category:'Constraint'},
    {id:'g27', description:'An error of $2 in a company with millions in revenue would not require restating the financial statements because the amount is insignificant.', answer:'I', explanation:'Materiality — if an amount wouldn\'t change a user\'s decision, it\'s immaterial.', category:'Constraint'},
    // --- OBJECTIVE EVIDENCE (J) ---
    {id:'g28', description:'This concept requires that financial information be supported by original documents such as invoices, receipts, and bank statements.', answer:'J', explanation:'Objective Evidence — source documents provide verifiable proof of transactions.', category:'Constraint'},
    {id:'g29', description:'A bookkeeper records a purchase based on the vendor\'s invoice rather than the owner\'s estimate of the cost.', answer:'J', explanation:'Objective Evidence — use actual documentation, not estimates or opinions.', category:'Constraint'},
    {id:'g30', description:'Every business transaction should be supported by verifiable, factual documentation such as canceled checks, receipts, or invoices.', answer:'J', explanation:'Objective Evidence — transactions must have source documents for verification.', category:'Constraint'},
    // --- REALIZATION OF REVENUE (K) ---
    {id:'g31', description:'This concept is applied when revenue is recorded at the time goods or services are sold.', answer:'K', explanation:'Realization of Revenue — record revenue when it is earned (at point of sale), not when cash is received.', category:'Principle'},
    {id:'g32', description:'A law firm records service revenue when the legal work is completed, not when the client\'s payment is received weeks later.', answer:'K', explanation:'Realization of Revenue — revenue is recognized when earned, regardless of when cash is collected.', category:'Principle'},
    {id:'g33', description:'A retailer records a sale at the time the merchandise is delivered to the customer, even if the customer pays on credit.', answer:'K', explanation:'Realization of Revenue — the sale is recorded at the point goods change hands.', category:'Principle'},
    // --- RELEVANCE (L) ---
    {id:'g34', description:'This quality of accounting information requires that the information be useful and relate to the decision being made.', answer:'L', explanation:'Relevance — information must be useful for the decisions users are making.', category:'Quality'},
    {id:'g35', description:'Financial information that can influence a business decision by helping users predict future outcomes or confirming past expectations is considered to have this quality.', answer:'L', explanation:'Relevance — information has predictive or confirmatory value for decision-makers.', category:'Quality'},
    // --- RELIABILITY (M) ---
    {id:'g36', description:'This concept refers to the confidence users have that the financial information is reasonably free from bias and error.', answer:'M', explanation:'Reliability — information should be accurate, unbiased, and verifiable.', category:'Quality'},
    {id:'g37', description:'An independent CPA audits a company\'s financial records. The resulting statements are considered trustworthy because they are free from bias.', answer:'M', explanation:'Reliability — audited statements are more reliable because they\'ve been verified.', category:'Quality'},
    // --- UNIT OF MEASURE (N) ---
    {id:'g38', description:'This concept states that all business transactions must be recorded using a common unit, such as the U.S. dollar.', answer:'N', explanation:'Unit of Measure — all transactions recorded in a single monetary unit (e.g., US dollars).', category:'Concept'},
    {id:'g39', description:'A U.S. company converts a purchase made in euros to dollars before recording it, because all entries must be in the same monetary unit.', answer:'N', explanation:'Unit of Measure — everything must be expressed in the same currency.', category:'Concept'},
    // --- TRICKY UIL-STYLE VARIATIONS ---
    {id:'g40', description:'When a company that has always used FIFO inventory method continues using FIFO each year, it is applying this concept.', answer:'D', explanation:'Consistent Reporting — using the same inventory method every year maintains consistency.', category:'Quality'},
    {id:'g41', description:'A business records only the transactions of the business. The owner\'s personal car payment is NOT included in the business records.', answer:'B', explanation:'Business Entity — the owner\'s personal transactions are separate from the business.', category:'Concept'},
    {id:'g42', description:'Land purchased in 1990 for $50,000 is still reported on the balance sheet at $50,000 even though it is currently worth $500,000.', answer:'G', explanation:'Historical Cost — assets remain at original purchase price on the books.', category:'Principle'},
    {id:'g43', description:'A company adjusts its prepaid insurance at year-end so that insurance expense is reported in the same period as the revenue it helped earn.', answer:'H', explanation:'Matching Principle — adjusting entries align expenses with the revenue period.', category:'Principle'},
    {id:'g44', description:'Financial statements are prepared under the assumption that the business will not go bankrupt or be liquidated in the near future.', answer:'F', explanation:'Going Concern — assumes the business continues operating normally.', category:'Concept'},
    {id:'g45', description:'A small office supply purchase of $3.50 is immediately expensed instead of being capitalized and depreciated, because the amount is trivial.', answer:'I', explanation:'Materiality — trivial amounts can be expensed immediately without strict GAAP treatment.', category:'Constraint'},
];

// GAAP QUIZ STATE
let gaapCurrentQuestion = 0;
let gaapSelectedQuestions = [];
let gaapAnswers = {};
let gaapTotalAttempts = parseInt(localStorage.getItem('gaapTotalAttempts')) || 0;
let gaapTotalCorrect = parseInt(localStorage.getItem('gaapTotalCorrect')) || 0;
let gaapTotalCompleted = parseInt(localStorage.getItem('gaapTotalCompleted')) || 0;
let gaapSessionCorrect = 0;

function startGAAP() {
    gaapSelectedQuestions = shuffleArray(gaapQuestionBank).slice(0, 15);
    gaapCurrentQuestion = 0;
    gaapAnswers = {};
    gaapSessionCorrect = 0;
    gaapTotalAttempts++;
    localStorage.setItem('gaapTotalAttempts', gaapTotalAttempts);
    renderGAAPQuestion();
    showSection('gaap-viewer');
}

function renderGAAPQuestion() {
    const q = gaapSelectedQuestions[gaapCurrentQuestion];
    const answered = gaapAnswers[q.id] !== undefined;

    let html = `
        <div class="hero">
            <h1>Question ${gaapCurrentQuestion + 1} of ${gaapSelectedQuestions.length}</h1>
            <p class="hero-subtitle">Score: ${gaapSessionCorrect}/${Object.keys(gaapAnswers).length} correct</p>
        </div>
        <div class="gaap-question-block">
            <div class="gaap-description">${q.description}</div>
            <div class="gaap-options">
    `;

    Object.keys(gaapConcepts).forEach(letter => {
        let cls = 'gaap-option';
        if (answered) {
            if (gaapAnswers[q.id] === letter && letter === q.answer) cls += ' selected-correct';
            else if (gaapAnswers[q.id] === letter && letter !== q.answer) cls += ' selected-incorrect';
            else if (letter === q.answer) cls += ' show-correct';
        }
        html += `<button class="${cls}" onclick="answerGAAP('${q.id}','${letter}')" ${answered ? 'disabled' : ''}>
            <span class="gaap-letter">${letter}</span>${gaapConcepts[letter]}
        </button>`;
    });

    html += `</div>`;

    if (answered) {
        const isCorrect = gaapAnswers[q.id] === q.answer;
        html += `
            <div class="quiz-explanation show">
                <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect — Answer: ' + gaapConcepts[q.answer]}</strong><br>
                ${q.explanation}
            </div>
        `;
    }

    html += `</div>`;

    html += `<div style="display:flex; gap:1rem; margin-top:2rem;">`;
    if (gaapCurrentQuestion > 0) html += `<button class="btn btn-secondary" onclick="prevGAAP()">← Previous</button>`;
    if (gaapCurrentQuestion < gaapSelectedQuestions.length - 1) html += `<button class="btn" onclick="nextGAAP()">Next →</button>`;
    else html += `<button class="btn" onclick="finishGAAP()">Finish Quiz</button>`;
    html += `</div>`;

    document.getElementById('gaapContent').innerHTML = html;
}

function answerGAAP(id, answer) {
    if (gaapAnswers[id] !== undefined) return;
    const q = gaapSelectedQuestions.find(q => q.id === id);
    gaapAnswers[id] = answer;
    if (answer === q.answer) {
        gaapSessionCorrect++;
        gaapTotalCorrect++;
        Progress.addPoints(5);
    }
    gaapTotalCompleted++;
    localStorage.setItem('gaapTotalCorrect', gaapTotalCorrect);
    localStorage.setItem('gaapTotalCompleted', gaapTotalCompleted);
    updateGAAPStats();
    renderGAAPQuestion();
}

function nextGAAP() { if (gaapCurrentQuestion < gaapSelectedQuestions.length - 1) { gaapCurrentQuestion++; renderGAAPQuestion(); window.scrollTo(0,0); } }
function prevGAAP() { if (gaapCurrentQuestion > 0) { gaapCurrentQuestion--; renderGAAPQuestion(); window.scrollTo(0,0); } }

function finishGAAP() {
    const pct = Math.round((gaapSessionCorrect / gaapSelectedQuestions.length) * 100);
    document.getElementById('gaapContent').innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete!</h2>
            <div class="result-score">${pct}%</div>
            <p>${gaapSessionCorrect} of ${gaapSelectedQuestions.length} correct!</p>
            <p style="color:var(--text-muted); margin-top:0.5rem;">+${gaapSessionCorrect * 5} points earned</p>
            <div style="display:flex; gap:1rem; justify-content:center; margin-top:2rem;">
                <button class="btn" onclick="startGAAP()">Try Again (New Questions)</button>
                <button class="btn btn-secondary" onclick="showSection('gaap')">Back to Menu</button>
            </div>
        </div>`;
    window.scrollTo(0,0);
}

function resetGAAP() {
    if (confirm('Reset all GAAP Concepts progress?')) {
        gaapTotalAttempts = 0; gaapTotalCorrect = 0; gaapTotalCompleted = 0;
        localStorage.setItem('gaapTotalAttempts', 0);
        localStorage.setItem('gaapTotalCorrect', 0);
        localStorage.setItem('gaapTotalCompleted', 0);
        updateGAAPStats();
    }
}

function updateGAAPStats() {
    const el = document.getElementById('gaapCompleted');
    if (el) {
        el.textContent = gaapTotalCompleted;
        const acc = gaapTotalCompleted > 0 ? Math.round((gaapTotalCorrect / gaapTotalCompleted) * 100) : 0;
        document.getElementById('gaapAccuracy').textContent = acc + '%';
        document.getElementById('gaapAttempts').textContent = gaapTotalAttempts;
    }
}

document.addEventListener('DOMContentLoaded', () => { updateGAAPStats(); });
