var button = document.getElementById("calc");

button.addEventListener("click", function () {
    //get user input
    var assignments = document.getElementById("assignments").value;
    var projects = document.getElementById("projects").value;
    var quizzes = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    //calculate final grade
    var finalGrade = (assignments * 0.5) + (projects * 0.1) + (quizzes * 0.1) + (exams * 0.2) + (intex * 0.1);

    //populate fields with calculated value and unhide
    document.getElementById("finalGrade").innerHTML = finalGrade;
    document.getElementById("finalGradeBox").hidden = false;
});