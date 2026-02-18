// =====================================================
// HOME STATS — Aggregates stats on the dashboard
// Reads uilProgress + module-specific localStorage keys
// =====================================================

function updateHomeStats() {
    // Main progress (from shared.js Progress object)
    const p = Progress.get();
    document.getElementById('userPoints').textContent = p.points;
    document.getElementById('lessonsCompleted').textContent = p.lessonsCompleted.length + '/8';
    document.getElementById('cardsStudied').textContent = p.cardsStudied;

    const a = p.quizStats.total > 0
        ? Math.round((p.quizStats.correct / p.quizStats.total) * 100) : 0;
    document.getElementById('userAccuracy').textContent = a + '%';
}

document.addEventListener('DOMContentLoaded', updateHomeStats);
