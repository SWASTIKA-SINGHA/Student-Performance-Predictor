document.getElementById('predictor-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const attendance = parseFloat(document.getElementById('attendance').value);
    const study_hours = parseFloat(document.getElementById('study_hours').value);
    const assignments = parseFloat(document.getElementById('assignments').value);

    if (isNaN(attendance) || isNaN(study_hours) || isNaN(assignments)) {
        document.getElementById('result').innerText = 'Please fill in valid numbers for all fields.';
        return;
    }

    // Improved linear formula with reasonable weights
    const grade = (0.25 * attendance) + (2.5 * study_hours) + (0.5 * assignments);

    const finalGrade = Math.min(grade, 100).toFixed(2);

    document.getElementById('result').innerText = Predicted Final Grade: ${finalGrade}%;
});
