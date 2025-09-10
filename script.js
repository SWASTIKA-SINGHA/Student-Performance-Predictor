document.getElementById('predictor-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const attendance = parseFloat(document.getElementById('attendance').value);
    const study_hours = parseFloat(document.getElementById('study_hours').value);
    const assignments = parseFloat(document.getElementById('assignments').value);

    // Example simple linear regression model (coefficients can be improved after real model training)
    const grade = (0.3 * attendance) + (2 * study_hours) + (0.5 * assignments);

    const finalGrade = Math.min(grade, 100).toFixed(2);

    document.getElementById('result').innerText = Predicted Final Grade: ${finalGrade}%;
});
