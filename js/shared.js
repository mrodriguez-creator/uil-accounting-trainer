// =====================================================
// SHARED UTILITIES — UIL Accounting Trainer
// Used across all module pages
// =====================================================

// PROGRESS TRACKER (localStorage key: 'uilProgress')
const Progress = {
    init() {
        if (!localStorage.getItem('uilProgress')) {
            localStorage.setItem('uilProgress', JSON.stringify({
                points: 0, lessonsCompleted: [], cardsStudied: 0,
                quizStats: { total: 0, correct: 0 }
            }));
        }
        this.update();
    },
    get() { return JSON.parse(localStorage.getItem('uilProgress')); },
    save(d) { localStorage.setItem('uilProgress', JSON.stringify(d)); this.update(); },
    update() {
        const p = this.get();
        const el = document.getElementById('userPoints');
        if (el) {
            el.textContent = p.points;
            document.getElementById('lessonsCompleted').textContent = p.lessonsCompleted.length + '/3';
            document.getElementById('cardsStudied').textContent = p.cardsStudied;
            const a = p.quizStats.total > 0 ? Math.round((p.quizStats.correct / p.quizStats.total) * 100) : 0;
            document.getElementById('userAccuracy').textContent = a + '%';
        }
    },
    completeLesson(id) {
        const p = this.get();
        if (!p.lessonsCompleted.includes(id)) {
            p.lessonsCompleted.push(id); p.points += 50;
            this.save(p); showNotification('Lesson completed! +50 points');
        }
    },
    studyCard() { const p = this.get(); p.cardsStudied++; p.points += 1; this.save(p); },
    submitQuiz(c, t) {
        const p = this.get();
        p.quizStats.correct += c; p.quizStats.total += t; p.points += c * 5;
        this.save(p);
    },
    addPoints(n) {
        const p = this.get(); p.points += n; this.save(p);
    }
};

// SECTION NAVIGATION (works on multi-section pages)
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
    if (window.innerWidth <= 768) {
        const nav = document.getElementById('navLinks');
        if (nav) nav.classList.remove('active');
    }
}

// MOBILE MENU TOGGLE
function toggleMobileMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('active');
}

// TOAST NOTIFICATIONS
function showNotification(m, e = false) {
    const n = document.createElement('div');
    n.className = 'notification' + (e ? ' error' : '');
    n.textContent = m;
    document.body.appendChild(n);
    setTimeout(() => {
        n.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => n.remove(), 300);
    }, 3000);
}

// ARRAY SHUFFLE (Fisher-Yates)
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// CURRENCY FORMATTERS
function fmt(n) {
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0 });
}

function fmt2(n) {
    return Math.abs(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function roundCents(n) {
    return Math.round(n * 100) / 100;
}

// RANDOM NAME GENERATOR (for payroll scenarios)
const _firstNames = ['Alex','Morgan','Jordan','Taylor','Casey','Riley','Sam','Drew','Pat','Jamie','Quinn','Blake','Avery','Charlie','Dakota','Emery','Finley','Harper','Kendall','Logan'];
const _lastNames = ['Anderson','Baker','Chen','Davis','Evans','Fisher','Gunn','Hayes','Ingram','Jones','Kelly','Lopez','Martinez','Nelson','Ortiz','Parker','Quinn','Reed','Smith','Torres'];

function randName() {
    return _firstNames[Math.floor(Math.random() * _firstNames.length)] + ' ' + _lastNames[Math.floor(Math.random() * _lastNames.length)];
}

// INIT ON EVERY PAGE
document.addEventListener('DOMContentLoaded', () => { Progress.init(); });
