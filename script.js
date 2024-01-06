const date = new Date;
const topHeader = document.getElementById('header');
const opcoesDeFormato = { 
    weekday: 'long',
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: false
 };

const day = date.toLocaleDateString('pt-BR', opcoesDeFormato);
topHeader.innerHTML = day;

function setFocus(){
    const focus = document.getElementById('newTask');
    focus.focus();
}


function KeyPress(pressKey){
    if(pressKey.key === 'Enter'){
        saveTask();
    } else if(pressKey.key === 'Shift'){
        conclude();
    }
};

function saveTask(){
    const toDo = document.getElementById('todo');

    const task = document.getElementById('newTask').value;

    const divNewTask = document.createElement('div');
    divNewTask.className = 'divNewTask';

    const createTask = document.createElement('p');
    createTask.innerText = task;

    toDo.appendChild(divNewTask);
    divNewTask.appendChild(createTask);
    

    const clearInput = document.getElementById('newTask')
    clearInput.value = ' ';

};




//ao clicar sobre a div da tarefa setar a classe
function conclude(){
    let marked = document.getElementsByClassName('divNewTask');
    for (let index = 0; index < marked.length; index++) {
        
        marked[index].classList.add('marked')
        
    }
};