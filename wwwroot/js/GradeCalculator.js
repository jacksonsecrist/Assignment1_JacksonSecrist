$("#calc").click( function () {
    //get user input
    var assignments = $("#assignments").val();
    var projects = $("#projects").val();
    var quizzes = $("#quizzes").val();
    var exams = $("#exams").val();
    var intex = $("#intex").val();

    //calculate final grade
    var finalGrade = (assignments * 0.5) + (projects * 0.1) + (quizzes * 0.1) + (exams * 0.2) + (intex * 0.1);

    //populate fields with calculated value and unhide
    $("#finalGrade").text(finalGrade);
    $("#finalGradeBox").show();
});