let taskButton = document.querySelector('#add-task');

taskButton.addEventListener('click', ()=>{
    let taskInput = document.querySelector('#task-value');
    let taskValue = taskInput.value;
    
    taskInput.value = '';

    let taskItem = document.createElement('div');
    taskItem.innerText = taskValue;

    let taskArea = document.querySelector('#task-container');
    taskArea.appendChild(taskItem);
})
