function saveTask(){
    const toDo = document.getElementById('todo');

    const task = document.getElementById('newTask').value;

    const divNewTask = document.createElement('div');
    divNewTask.className = 'divNewTask';

    const mark = document.createElement('input');
    mark.type = 'checkbox';
    const createTask = document.createElement('p');
    createTask.innerText = task;

    toDo.appendChild(divNewTask)
    divNewTask.appendChild(mark);
    divNewTask.appendChild(createTask);
    
    

}

function exclude(){
    const remove = document.querySelector('.divNewTask')
    console.log(remove)

    const task = document.getElementsByTagName('p')
    const mark = document.getElementsByTagName('input')

    console.log(task)
    console.log(mark.checked)

    if (mark.checked === true){
        remove.removeChild((task[task.length - 1]))
        remove.removeChild((mark[mark.length - 1]))
    } else{
        console.log(mark)
    }
    

}

function conclude(){

}