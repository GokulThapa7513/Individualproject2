function calculateScore() {
    // Retrieve user's answers
    let answer1 = document.querySelector('input[name="q1"]:checked');
    let answer2 = document.querySelector('input[name="q2"]:checked');
    let answer3 = document.querySelector('input[name="q3"]:checked');

    // Check if all questions are answered
    if (answer1 && answer2 && answer3) {
        // Calculate the score
        var score = 0;
        if (answer1.value === "d") score++;
        if (answer2.value === "b") score++;
        if (answer3.value === "c") score++;

        // Display the score
        alert("Your Score: " + score + "/3");
    } else {
        // Notify the user to answer all questions
        alert("Please answer all questions before submitting.");
    }
}
function navigatelesson(direction) {
    if (direction === 'Next') {
        window.location.href = 'design.html';
    }
    else if (direction === 'Previous') {
        window.location.href = 'homepage.html';
    }
}