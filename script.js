function saveTask(){
    const toDo = document.getElementById('todo');

    const task = document.getElementById('newTask').value;

    const divNewTask = document.createElement('div');
    divNewTask.className = 'divNewTask';
    divNewTask.id = 'marked';

    const createTask = document.createElement('p');
    createTask.innerText = task;

    toDo.appendChild(divNewTask)
    divNewTask.appendChild(createTask);
    
    

}




//ao clicar sobre a div da tarefa setar a classe
function conclude(){
    let marked = document.getElementsByClassName('divNewTask');
    console.log(marked)
    for (let index = 0; index < marked.length; index++) {
        
        marked[index].classList.add('marked')
        
    }
}