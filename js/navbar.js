// =====================================================
// DYNAMIC NAVBAR — UIL Accounting Trainer
// Generates consistent navigation across all pages
// =====================================================

const NAV_ITEMS = [
    { label: 'Home', href: 'index.html' },
    { label: 'Lessons', href: 'lessons.html' },
    { label: 'Flashcards', href: 'flashcards.html' },
    { label: 'True/False', href: 'truefalse.html' },
    { label: 'Debit/Credit', href: 'debitcredit.html' },
    { label: 'Worksheet', href: 'worksheet.html' },
    { label: 'GAAP', href: 'gaap.html' },
    { label: 'Closing', href: 'closing.html' },
    { label: 'Gross Profit', href: 'grossprofit.html' },
    { label: 'Bank Rec', href: 'bankrec.html' },
    { label: 'Petty Cash', href: 'pettycash.html' },
    { label: 'Payroll', href: 'payroll.html' },
    { label: 'Tests', href: 'tests.html' },
    { label: 'About', href: 'about.html' },
];

function renderNavbar() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const nav = document.getElementById('main-navbar');
    if (!nav) return;

    let html = `
        <div class="nav-brand">
            <span style="font-size: 2rem;">&#127942;</span>
            <a href="index.html" style="color: var(--primary); text-decoration: none;">
                <span>UIL Accounting Trainer</span>
            </a>
        </div>
        <ul class="nav-links" id="navLinks">`;

    NAV_ITEMS.forEach(item => {
        const isActive = currentPage === item.href ? ' active' : '';
        html += `<li><a class="nav-btn${isActive}" href="${item.href}">${item.label}</a></li>`;
    });

    html += `</ul>
        <button class="mobile-toggle" onclick="toggleMobileMenu()">&#9776;</button>`;

    nav.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderNavbar);
