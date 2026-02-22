// =====================================================
// DYNAMIC NAVBAR — UIL Accounting Trainer
// Generates consistent navigation across all pages
// Groups links into dropdown menus to keep nav compact
// =====================================================

const NAV_STRUCTURE = [
    { label: 'Home', href: 'index.html' },
    { label: 'Training Path', href: 'training-path.html' },
    { label: 'Lessons', href: 'lessons.html' },
    { label: 'Study', children: [
        { label: 'Flashcards', href: 'flashcards.html' },
        { label: 'True/False', href: 'truefalse.html' },
        { label: 'Debit/Credit', href: 'debitcredit.html' },
        { label: 'Worksheet', href: 'worksheet.html' },
        { label: 'Special Journals', href: 'specialjournals.html' },
        { label: 'Adjusting Entries', href: 'adjusting.html' },
    ]},
    { label: 'Concepts', children: [
        { label: 'GAAP Matching', href: 'gaap.html' },
        { label: 'Closing Codes', href: 'closing.html' },
        { label: 'Acct. Equation', href: 'acctequation.html' },
        { label: 'Fin. Statements', href: 'finstatements.html' },
    ]},
    { label: 'Calculations', children: [
        { label: 'Gross Profit', href: 'grossprofit.html' },
        { label: 'Bank Rec', href: 'bankrec.html' },
        { label: 'Petty Cash', href: 'pettycash.html' },
        { label: 'Payroll', href: 'payroll.html' },
        { label: 'Sales Tax', href: 'salestax.html' },
        { label: 'Math (45 Problems)', href: 'math-practice-standalone.html' },
    ]},
    { label: 'Quiz', href: 'quiz.html' },
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

    NAV_STRUCTURE.forEach(item => {
        if (item.children) {
            // Dropdown group
            const hasActive = item.children.some(c => c.href === currentPage);
            html += `<li class="nav-dropdown${hasActive ? ' has-active' : ''}">`;
            html += `<button class="nav-dropdown-toggle" onclick="toggleDropdown(this)">${item.label} ▾</button>`;
            html += `<ul class="nav-dropdown-menu">`;
            item.children.forEach(child => {
                const isActive = currentPage === child.href ? ' active' : '';
                html += `<li><a class="nav-btn${isActive}" href="${child.href}">${child.label}</a></li>`;
            });
            html += `</ul></li>`;
        } else {
            // Direct link
            const isActive = currentPage === item.href ? ' active' : '';
            html += `<li><a class="nav-btn${isActive}" href="${item.href}">${item.label}</a></li>`;
        }
    });

    html += `</ul>
        <button class="mobile-toggle" onclick="toggleMobileMenu()">&#9776;</button>`;

    nav.innerHTML = html;
}

// Toggle dropdown on mobile (tap to open)
function toggleDropdown(btn) {
    if (window.innerWidth > 768) return; // desktop uses hover
    const dropdown = btn.closest('.nav-dropdown');
    // Close other open dropdowns
    document.querySelectorAll('.nav-dropdown.open').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
    });
    dropdown.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', renderNavbar);
