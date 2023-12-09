function runCodeLesson1() {
    const userCode = document.getElementById('lesson1-output').textContent;
    const correctOutput = "Output:\nTable 'users' created successfully.";
    document.getElementById('lesson1-output').innerText = correctOutput;
}

function runCodeLesson2() {
    const userCode = document.getElementById('lesson2-output').textContent;
    const correctOutput = "Output:\nDatabase schema for library system designed successfully.";
    document.getElementById('lesson2-output').innerText = correctOutput;
}

function runCodeLesson3() {
    const userCode = document.getElementById('lesson3-output').textContent;
    const correctOutput = "Output:\nTitles of books published after 2020:\n1. Book1\n2. Book2";
    document.getElementById('lesson3-output').innerText = correctOutput;
}

function runCodeLesson4() {
    const userCode = document.getElementById('lesson4-output').textContent;
    const correctOutput = "Output:\nTables for blog system created successfully.";
    document.getElementById('lesson4-output').innerText = correctOutput;
}

function navigatelesson(direction) {
    if (direction === 'Next') {
        window.location.href = 'appsecurity.html';
    }
    else if (direction === 'Previous') {
        window.location.href = 'programmingfundamentals.html';
    }
}
