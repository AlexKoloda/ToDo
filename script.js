
const inputBox = document.getElementById('input-box');
const toDoList = document.getElementById('to-do-list');

function addTask() {
    let trimmedText = inputBox.value.trim();

    if (!trimmedText.length) {
        alert('Поле ввода пустое');
        return;
    }

    let li = document.createElement('li');
    let textSpan = document.createElement('span');
    textSpan.classList.add('to-do-text');
    textSpan.innerHTML = trimmedText;
    li.appendChild(textSpan);
    toDoList.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    inputBox.value = '';
    saveData();
}

inputBox.addEventListener('keypress', function (e) {
    if (e.key !== 'Enter') {
        return;
    }
    document.getElementById('myButton').click();
})

toDoList.addEventListener('click', function (e) {

    if (e.target.classList.contains("to-do-text")) {
        e.target.classList.toggle('checked')
    } else {
        e.target.parentElement.remove();
    } return;
    saveData();
});

function saveData() {
    localStorage.setItem('data', toDoList.innerHTML);
}

function showTask() {
    toDoList.innerHTML = localStorage.getItem('data');
}

showTask();



