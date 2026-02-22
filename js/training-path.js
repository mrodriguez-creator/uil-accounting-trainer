// =====================================================
// GUIDED TRAINING PATH
// Sequential module progression with 80% gating
// Students must achieve 80% accuracy before unlocking
// the next module in the training sequence
// =====================================================

const TRAINING_MODULES = [
    {
        id: 'flashcards',
        name: 'Flashcards',
        icon: '🧠',
        href: 'flashcards.html',
        description: 'Learn key accounting terms and acronyms — click to flip and memorize',
        goalType: 'cards',
        goalTarget: 15,
        getProgress() {
            const p = JSON.parse(localStorage.getItem('uilProgress') || '{}');
            return { completed: p.cardsStudied || 0, total: 21, accuracy: null };
        }
    },
    {
        id: 'quiz',
        name: 'Account Classification Quiz',
        icon: '🎯',
        href: 'quiz.html',
        description: '10-question multiple choice quiz on account types and normal balances',
        goalType: 'accuracy',
        goalTarget: 80,
        getProgress() {
            const p = JSON.parse(localStorage.getItem('uilProgress') || '{}');
            const stats = p.quizStats || { total: 0, correct: 0 };
            const acc = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            return { completed: stats.total, total: 10, accuracy: acc };
        }
    },
    {
        id: 'truefalse',
        name: 'True/False Quiz',
        icon: '✓',
        href: 'truefalse.html',
        description: '25 questions from real UIL accounting tests with explanations',
        goalType: 'accuracy',
        goalTarget: 80,
        getProgress() {
            const raw = localStorage.getItem('tfProgress');
            if (!raw) return { completed: 0, total: 25, accuracy: 0 };
            const tf = JSON.parse(raw);
            const comp = (tf.completed || []).length;
            const corr = (tf.correct || []).length;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 25, accuracy: acc };
        }
    },
    {
        id: 'debitcredit',
        name: 'Debit/Credit Practice',
        icon: '⚖️',
        href: 'debitcredit.html',
        description: 'Normal balances, increase/decrease rules, and transaction analysis',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 20,
        getProgress() {
            const comp = parseInt(localStorage.getItem('dcTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('dcTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 20, accuracy: acc };
        }
    },
    {
        id: 'worksheet',
        name: 'Worksheet Columns',
        icon: '📋',
        href: 'worksheet.html',
        description: 'Extend accounts to Income Statement or Balance Sheet columns',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 20,
        getProgress() {
            const comp = parseInt(localStorage.getItem('wsTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('wsTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 20, accuracy: acc };
        }
    },
    {
        id: 'gaap',
        name: 'GAAP Concepts Matching',
        icon: '📜',
        href: 'gaap.html',
        description: 'Match descriptions to accounting concepts, principles & assumptions',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 15,
        getProgress() {
            const comp = parseInt(localStorage.getItem('gaapTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('gaapTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 15, accuracy: acc };
        }
    },
    {
        id: 'closing',
        name: 'Closing Codes Quiz',
        icon: '🔒',
        href: 'closing.html',
        description: 'Permanent vs temporary accounts, C-DID closing entries with UIL codes',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 15,
        getProgress() {
            const comp = parseInt(localStorage.getItem('clTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('clTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 15, accuracy: acc };
        }
    },
    {
        id: 'finstatements',
        name: 'Financial Statement Classification',
        icon: '📊',
        href: 'finstatements.html',
        description: 'Identify which statement each item appears on (BS/IS/SCOE)',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 15,
        getProgress() {
            const comp = parseInt(localStorage.getItem('fsTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('fsTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 15, accuracy: acc };
        }
    },
    {
        id: 'specialjournals',
        name: 'Special Journals',
        icon: '📓',
        href: 'specialjournals.html',
        description: 'Match transactions to correct journal columns (A-R format)',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 15,
        getProgress() {
            const comp = parseInt(localStorage.getItem('sjTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('sjTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 15, accuracy: acc };
        }
    },
    {
        id: 'acctequation',
        name: 'Accounting Equation & Capital',
        icon: '⚖️',
        href: 'acctequation.html',
        description: 'Multi-year capital calculations and A=L+OE transaction analysis',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 10,
        getProgress() {
            const comp = parseInt(localStorage.getItem('aeTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('aeTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 10, accuracy: acc };
        }
    },
    {
        id: 'grossprofit',
        name: 'Gross Profit Calculator',
        icon: '💰',
        href: 'grossprofit.html',
        description: 'Compute Net Sales, COGS, and Gross Profit — full income statement chain',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 10,
        getProgress() {
            const comp = parseInt(localStorage.getItem('gpTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('gpTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 10, accuracy: acc };
        }
    },
    {
        id: 'bankrec',
        name: 'Bank Reconciliation',
        icon: '🏦',
        href: 'bankrec.html',
        description: 'Reconcile bank & book sides — deposits in transit, outstanding checks',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 10,
        getProgress() {
            const comp = parseInt(localStorage.getItem('brTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('brTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 10, accuracy: acc };
        }
    },
    {
        id: 'pettycash',
        name: 'Petty Cash Practice',
        icon: '🪙',
        href: 'pettycash.html',
        description: 'Petty cash fund management — vouchers, replenishment, cash over/short',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 10,
        getProgress() {
            const comp = parseInt(localStorage.getItem('pcTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('pcTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 10, accuracy: acc };
        }
    },
    {
        id: 'salestax',
        name: 'Sales Tax Calculations',
        icon: '💵',
        href: 'salestax.html',
        description: 'Track cash, A/R, sales & tax payable with monthly scenarios',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 10,
        getProgress() {
            const comp = parseInt(localStorage.getItem('stTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('stTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 10, accuracy: acc };
        }
    },
    {
        id: 'payroll',
        name: 'Payroll Practice',
        icon: '📋',
        href: 'payroll.html',
        description: 'Gross pay calculations, employer payroll taxes, entry classification',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 10,
        getProgress() {
            const comp = parseInt(localStorage.getItem('prTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('prTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 10, accuracy: acc };
        }
    },
    {
        id: 'adjusting',
        name: 'Adjusting Entries',
        icon: '📝',
        href: 'adjusting.html',
        description: 'Insurance, supplies, inventory & accrued revenue adjustments',
        goalType: 'accuracy',
        goalTarget: 80,
        minQuestions: 10,
        getProgress() {
            const comp = parseInt(localStorage.getItem('adjTotalCompleted')) || 0;
            const corr = parseInt(localStorage.getItem('adjTotalCorrect')) || 0;
            const acc = comp > 0 ? Math.round((corr / comp) * 100) : 0;
            return { completed: comp, total: 10, accuracy: acc };
        }
    }
];

// ── DETERMINE MODULE STATUS ────────────────────────────

function getModuleStatus(index) {
    const mod = TRAINING_MODULES[index];
    const progress = mod.getProgress();

    // Check if this module meets its goal
    let meetsGoal = false;
    if (mod.goalType === 'cards') {
        meetsGoal = progress.completed >= mod.goalTarget;
    } else {
        // accuracy-based: need minimum questions AND 80%+ accuracy
        const minQ = mod.minQuestions || mod.getProgress().total || 10;
        meetsGoal = progress.completed >= minQ && progress.accuracy >= mod.goalTarget;
    }

    // First module is always unlocked
    if (index === 0) {
        return meetsGoal ? 'completed' : 'active';
    }

    // Check if previous module is completed
    const prevStatus = getModuleStatus(index - 1);
    if (prevStatus === 'completed') {
        return meetsGoal ? 'completed' : 'active';
    }

    return 'locked';
}

// ── RENDER ──────────────────────────────────────────────

function renderTrainingPath() {
    const pathEl = document.getElementById('tpPath');
    const overallEl = document.getElementById('tpOverall');
    const bannerEl = document.getElementById('tpCompleteBanner');

    let completedCount = 0;
    let html = '';

    TRAINING_MODULES.forEach((mod, i) => {
        const status = getModuleStatus(i);
        const progress = mod.getProgress();

        if (status === 'completed') completedCount++;

        // Node number
        const nodeContent = status === 'completed' ? '✓' : (i + 1);

        // Progress percentage for bar
        let barPct = 0;
        let barLabel = '';
        let goalLabel = '';

        if (mod.goalType === 'cards') {
            barPct = Math.min(100, Math.round((progress.completed / mod.goalTarget) * 100));
            barLabel = `${progress.completed} / ${mod.goalTarget} cards studied`;
            goalLabel = `Goal: Study ${mod.goalTarget}+ cards`;
        } else {
            barPct = progress.accuracy || 0;
            barLabel = `${progress.accuracy}% accuracy (${progress.completed} answered)`;
            const minQ = mod.minQuestions || progress.total || 10;
            goalLabel = `Goal: ${mod.goalTarget}%+ accuracy (min ${minQ} questions)`;
        }

        const atGoal = barPct >= (mod.goalType === 'cards' ? 100 : mod.goalTarget);

        // Button
        let btnHtml = '';
        if (status === 'locked') {
            btnHtml = `<span class="tp-btn locked">🔒 Locked</span>`;
        } else if (status === 'completed') {
            btnHtml = `<a class="tp-btn review" href="${mod.href}">Review →</a>`;
        } else if (progress.completed > 0) {
            btnHtml = `<a class="tp-btn continue" href="${mod.href}">Continue →</a>`;
        } else {
            btnHtml = `<a class="tp-btn start" href="${mod.href}">Start →</a>`;
        }

        // Status badge
        let statusBadge = '';
        if (status === 'locked') {
            statusBadge = `<span class="tp-status locked">🔒 Locked</span>`;
        } else if (status === 'completed') {
            statusBadge = `<span class="tp-status completed">✓ Complete</span>`;
        } else {
            statusBadge = `<span class="tp-status active">▶ Current</span>`;
        }

        html += `
        <div class="tp-module">
            <div class="tp-node ${status}">${nodeContent}</div>
            <div class="tp-card ${status}">
                <div class="tp-card-header">
                    <h3>${mod.icon} ${mod.name}</h3>
                    ${statusBadge}
                </div>
                <p>${mod.description}</p>
                ${status !== 'locked' ? `
                    <div class="tp-progress-text">
                        <span class="current">${barLabel}</span>
                        <span class="goal">${atGoal ? '✓ Goal met!' : goalLabel}</span>
                    </div>
                    <div class="tp-progress-bar">
                        <div class="tp-progress-fill ${atGoal ? 'at-goal' : ''}" style="width: ${barPct}%;"></div>
                    </div>
                ` : `
                    <div class="tp-requirements">
                        Complete <span>Step ${i}</span> with 80%+ accuracy to unlock
                    </div>
                `}
                ${btnHtml}
            </div>
        </div>`;
    });

    pathEl.innerHTML = html;

    // Overall progress
    const totalModules = TRAINING_MODULES.length;
    const overallPct = Math.round((completedCount / totalModules) * 100);

    overallEl.innerHTML = `
    <div class="tp-overall">
        <h2>Overall Progress</h2>
        <div class="tp-overall-stats">
            <div class="tp-overall-stat">
                <div class="value">${completedCount}</div>
                <div class="label">Completed</div>
            </div>
            <div class="tp-overall-stat">
                <div class="value">${totalModules - completedCount}</div>
                <div class="label">Remaining</div>
            </div>
            <div class="tp-overall-stat">
                <div class="value">${overallPct}%</div>
                <div class="label">Progress</div>
            </div>
        </div>
        <div class="tp-overall-bar">
            <div class="tp-overall-fill" style="width: ${overallPct}%;"></div>
        </div>
    </div>`;

    // Completion banner
    if (completedCount === totalModules) {
        bannerEl.classList.add('show');
        // Check if this is the first time completing all modules
        if (!localStorage.getItem('tpCelebrated')) {
            localStorage.setItem('tpCelebrated', 'true');
            launchConfetti();
        }
    } else {
        bannerEl.classList.remove('show');
        localStorage.removeItem('tpCelebrated');
    }
}

// ── CONFETTI CELEBRATION ────────────────────────────────

function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'tp-confetti';
    document.body.appendChild(container);

    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6', '#06b6d4'];

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('div');
        piece.className = 'tp-confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (6 + Math.random() * 8) + 'px';
        container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 5000);
}

// ── RESET ───────────────────────────────────────────────

function resetTrainingPath() {
    if (!confirm('This will reset ALL progress across ALL modules. Are you sure?')) return;

    // Reset global progress
    localStorage.removeItem('uilProgress');

    // Reset True/False
    localStorage.removeItem('tfProgress');

    // Reset all module-specific keys
    const prefixes = ['dc', 'ws', 'gaap', 'cl', 'gp', 'br', 'pc', 'pr', 'ae', 'sj', 'fs', 'st', 'adj'];
    prefixes.forEach(p => {
        localStorage.removeItem(p + 'TotalAttempts');
        localStorage.removeItem(p + 'TotalCorrect');
        localStorage.removeItem(p + 'TotalCompleted');
    });

    // Reset celebration flag
    localStorage.removeItem('tpCelebrated');

    // Re-init global progress
    Progress.init();

    showNotification('All training progress has been reset!');
    renderTrainingPath();
}

// ── INIT ────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', renderTrainingPath);
