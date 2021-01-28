$("#calc").click(function () {
    //get user input
    var assignments = $("#assignments").val();
    var projects = $("#projects").val();
    var quizzes = $("#quizzes").val();
    var exams = $("#exams").val();
    var intex = $("#intex").val();

    //calculate final grade
    var finalGrade = (assignments * 0.5) + (projects * 0.1) + (quizzes * 0.1) + (exams * 0.2) + (intex * 0.1);
    var finalLetterGrade = getLetterGrade(finalGrade);


    //populate fields with calculated value and unhide
    $("#finalGrade").val(finalGrade.toFixed(2) + "% = " + finalLetterGrade);
    //alert("Final Grade: " + finalGrade.toFixed(2) + "% = " + finalLetterGrade);
});

function getLetterGrade(percentGrade) {
    var letterGrade;
    if (percentGrade >= 94) {
        letterGrade = "A";
    }
    else if (percentGrade >= 90 && percentGrade < 94) {
        letterGrade = "A-";
    }
    else if (percentGrade >= 87 && percentGrade < 90) {
        letterGrade = "B+";
    }
    else if (percentGrade >= 84 && percentGrade < 87) {
        letterGrade = "B";
    }
    else if (percentGrade >= 80 && percentGrade < 84) {
        letterGrade = "B-";
    }
    else if (percentGrade >= 77 && percentGrade < 80) {
        letterGrade = "C+";
    }
    else if (percentGrade >= 74 && percentGrade < 77) {
        letterGrade = "C";
    }
    else if (percentGrade >= 70 && percentGrade < 74) {
        letterGrade = "C-";
    }
    else if (percentGrade >= 67 && percentGrade < 70) {
        letterGrade = "D+";
    }
    else if (percentGrade >= 64 && percentGrade < 67) {
        letterGrade = "D";
    }
    else if (percentGrade >= 60 && percentGrade < 64) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E"
    }
    return letterGrade;
}