
const inputBox = document.getElementById('input-box');
const toDoList = document.getElementById('to-do-list');

function addTask() {
    if (inputBox.value === '') {
         alert('Поле ввода пустое');

    } else {
       let li = document.createElement('li');
       li.innerHTML = inputBox.value;
       toDoList.appendChild(li);     
       let span = document.createElement ('span');
       span.innerHTML = '\u00d7';
       li.appendChild(span);
       inputBox.value = '';
       saveData();
    }  
} 

inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    document.getElementById('myButton').click();
    }
})

toDoList.addEventListener('click',  function(e){  

(e.target.tagName === 'LI') ? e.target.classList.toggle('checked') : e.target.parentElement.remove();              
saveData();
});

inputBox.addEventListener('keypress', function(a) {

})




function saveData() {
    localStorage.setItem('data', toDoList.innerHTML);
} 

function showTask () {
    toDoList.innerHTML = localStorage.getItem('data');

}

showTask();



