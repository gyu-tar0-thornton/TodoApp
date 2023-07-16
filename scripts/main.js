let taskButton = document.querySelector('#add-task');

taskButton.addEventListener('click', createTask);

function createTask() {
    const taskDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const closeDiv = document.createElement('div');
    const editDiv = document.createElement('div');
    const dateDiv = document.createElement('div');

    const taskInput = document.querySelector('#task-value');
    const taskValue = taskInput.value;
    taskInput.value = '';

    nameDiv.innerText = taskValue;
    closeDiv.innerText = 'x';
    editDiv.innerText = 'edit';
    dateDiv.innerText = (new Date()).toString();

    closeDiv.addEventListener('click', removeTask)
    editDiv.addEventListener('click', (e) => {
        if(editDiv.innerText === 'edit') {
            editTask(e);
            editDiv.innerText = 'save';
        }
        else {
            saveEdit(e);
            editDiv.innerText = 'edit';
        }
    })

    editDiv.classList.add('editDiv')
    closeDiv.classList.add('closeDiv');
    dateDiv.classList.add('dateDiv');

    taskDiv.appendChild(nameDiv);
    taskDiv.appendChild(editDiv);
    taskDiv.appendChild(closeDiv);
    taskDiv.appendChild(dateDiv);

    taskDiv.classList.add('task');

    const taskContainer = document.querySelector('#task-container');
    taskContainer.appendChild(taskDiv);
}

function removeTask(evt) {
    evt.target.parentElement.remove();
}

function editTask(evt) {
    evt.target.previousElementSibling.setAttribute('contenteditable', 'true');
}

function saveEdit(evt) {
    evt.target.previousElementSibling.setAttribute('contenteditable', 'false');
}