function runCode(editorId, outputId) {
    const userCode = document.getElementById(editorId).value;
    document.getElementById(outputId).innerText = "Output:\n" + "This is your result";
}

function navigatelesson(direction) {
    if (direction === 'Next') {
        window.location.href = 'database.html';
    }
    else if (direction === 'Previous') {
        window.location.href = 'design.html';
    }
}