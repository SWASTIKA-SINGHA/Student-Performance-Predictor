// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prediction-form');
    const resultDiv = document.getElementById('prediction-result');
    const gradeSpan = document.getElementById('grade');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting and refreshing the page

        const attendance = parseFloat(document.getElementById('attendance').value);
        const studyHours = parseFloat(document.getElementById('study-hours').value);
        const assignmentScore = parseFloat(document.getElementById('assignment-score').value);

        const grade = calculateGrade(attendance, studyHours, assignmentScore);

        gradeSpan.textContent = grade;
        resultDiv.classList.remove('hidden');
    });

    function calculateGrade(attendance, studyHours, assignmentScore) {
        const weightedScore = (attendance * 0.3) + (studyHours * 0.4) + (assignmentScore * 0.3);
        if (weightedScore >= 85) return 'A';
        if (weightedScore >= 70) return 'B';
        if (weightedScore >= 50) return 'C';
        return 'D';
    }
});
