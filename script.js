document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const attendance = parseFloat(document.getElementById('attendance').value);
    const studyHours = parseFloat(document.getElementById('study-hours').value);
    const assignmentScore = parseFloat(document.getElementById('assignment-score').value);

    const predictedGrade = calculateGrade(attendance, studyHours, assignmentScore);

    document.getElementById('grade').textContent = predictedGrade;
    document.getElementById('prediction-result').classList.remove('hidden');
});

function calculateGrade(attendance, studyHours, assignmentScore) {
    const weightedScore = (attendance * 0.3) + (studyHours * 0.4) + (assignmentScore * 0.3);
    if (weightedScore >= 85) return 'A';
    if (weightedScore >= 70) return 'B';
    if (weightedScore >= 50) return 'C';
    return 'D';
}
