// =====================================================
// FLASHCARDS MODULE
// 21 Accounting Acronym Cards
// =====================================================

const flashcardData = {
    acronyms: [
        {term:'DEAD',definition:'Debits increase: Drawing, Expenses, Assets, Drawing',category:'DR/CR'},
        {term:'CORL',definition:'Credits increase: Credits, Owner\'s Equity, Revenue, Liabilities',category:'DR/CR'},
        {term:'A=L+OE',definition:'Assets = Liabilities + Owner\'s Equity',category:'Equation'},
        {term:'RICED',definition:'Capital changes: Revenue ↑, Investments ↑, Cost of Goods ↓, Expenses ↓, Drawing ↓',category:'Capital'},
        {term:'RED-C',definition:'Temporary accounts: Revenue, Expense, Drawing, Cost of Goods Sold',category:'Accounts'},
        {term:'C-DID',definition:'Closing order: Credits (Rev), Debits (Exp), Income, Drawing',category:'Closing'},
        {term:'REN',definition:'Revenue - Expenses = Net Income',category:'Income'},
        {term:'BOAP',definition:'Buy On Accounts Payable',category:'Purchases'},
        {term:'SOAR',definition:'Sell On Accounts Receivable',category:'Sales'},
        {term:'CARPET-W-FACTR',definition:'Accounting Cycle: Collect, Analyze, Record, Post, Trial Balance, Worksheet, Financials, Adjusting, Closing, Trial Balance, Reversing',category:'Cycle'},
        {term:'SE-E',definition:'Salary Expense for employeE',category:'Payroll'},
        {term:'PTE-R',definition:'Payroll Tax Expense for employeR',category:'Payroll'},
        {term:'LIFO',definition:'Last In, First Out',category:'Inventory'},
        {term:'FIFO',definition:'First In, First Out',category:'Inventory'},
        {term:'PAUL',definition:'Prepaid = Asset, Unearned = Liability',category:'Adjustments'},
        {term:'COW',definition:'Capital on Worksheet',category:'Abbrev'},
        {term:'SOT',definition:'Supplies on Trial Balance',category:'Abbrev'},
        {term:'POT',definition:'Prepaid insurance on Trial Balance',category:'Abbrev'},
        {term:'SOCIOE',definition:'Statement of Changes in Owner\'s Equity',category:'Financial'},
        {term:'AUA',definition:'Allowance for Uncollectible Accounts',category:'A/R'},
        {term:'PICEPAR',definition:'Paid-In Capital in Excess of Par',category:'Corps'}
    ]
};

let currentFlashcardIndex = 0;
let isFlipped = false;

function showFlashcards(set) {
    currentFlashcardIndex = 0;
    isFlipped = false;
    displayCard();
    showSection('flashcard-viewer');
}

function displayCard() {
    const c = flashcardData.acronyms[currentFlashcardIndex];
    document.getElementById('term').textContent = c.term;
    document.getElementById('definition').textContent = c.definition;
    document.getElementById('frontCategory').textContent = c.category;
    document.getElementById('backCategory').textContent = c.category;
    document.getElementById('currentCard').textContent = currentFlashcardIndex + 1;
    document.getElementById('totalCards').textContent = flashcardData.acronyms.length;
    document.getElementById('prevBtn').disabled = currentFlashcardIndex === 0;
    document.getElementById('nextBtn').textContent = currentFlashcardIndex === flashcardData.acronyms.length - 1 ? 'Finish' : 'Next →';
    if (isFlipped) {
        document.getElementById('flashcard').classList.remove('flipped');
        isFlipped = false;
    }
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
    isFlipped = !isFlipped;
    if (isFlipped) Progress.studyCard();
}

function nextCard() {
    if (currentFlashcardIndex < flashcardData.acronyms.length - 1) {
        currentFlashcardIndex++;
        displayCard();
    } else {
        showNotification('Flashcard set complete!');
        setTimeout(() => showSection('flashcards'), 1500);
    }
}

function previousCard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        displayCard();
    }
}

// Keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', e => {
        const s = document.getElementById('flashcard-viewer');
        if (!s || !s.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') previousCard();
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === ' ') { e.preventDefault(); flipCard(); }
    });
});
