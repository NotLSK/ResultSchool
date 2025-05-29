const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

renderTasks(tasks);
createDeleteModal();
bindEvents();

function getDeleteModal() {
    const modal = document.querySelector('.modal-overlay');
    return modal;
}

function getTaskList() {
    const taskList = document.querySelector('.tasks-list');
    return taskList;
}

function getTaskForm() {
    const taskForm = document.querySelector('.create-task-block');
    return taskForm;
}

function getAllTasks() {
    const allTasks = document.querySelectorAll('.task-item');
    return allTasks;
}

function renderTasks(currentTasks) {
    const taskList = getTaskList();

    currentTasks.forEach(task => {
        taskList.append(createTaskElement(task));
    })
}

function bindEvents() {
    const taskForm = getTaskForm();
    const taskList = getTaskList();
    const modalCancelButton = document.querySelector('.delete-modal__cancel-button');
    const modalDeleteButton = document.querySelector('.delete-modal__confirm-button');

    modalDeleteButton.addEventListener('click', deleteTask);
    modalCancelButton.addEventListener('click', cancelDelete);
    taskForm.addEventListener('submit', handleTaskFormSubmit);
    taskList.addEventListener('click', handleDeleteTask);
}

function handleDeleteTask(e) {
    const isDeleteButton = e.target.classList.contains('task-item__delete-button');

    if (isDeleteButton) {
        const currentTask = e.target.closest('.task-item');
        const taskId = currentTask.dataset.taskId;

        const modal = getDeleteModal();
        modal.dataset.taskId = taskId;
        modal.classList.remove('modal-overlay_hidden');

    }
}

function deleteTask() {
    const taskId = getDeleteModal().dataset.taskId;
    tasks.splice(tasks.findIndex(task => task.id === taskId), 1);
    document.querySelector(`[data-task-id='${taskId}']`).remove();

    getDeleteModal().classList.add('modal-overlay_hidden');
}

function cancelDelete() {
    getDeleteModal().classList.add('modal-overlay_hidden');
}

function createDeleteModal() {
    const modal = `
    <div class="modal-overlay modal-overlay_hidden">
        <div class="delete-modal">
            <h3 class="delete-modal__question">
                Вы действительно хотите удалить эту задачу?
            </h3>
            <div class="delete-modal__buttons">
                <button class="delete-modal__button delete-modal__cancel-button">
                    Отмена
                </button>
                <button class="delete-modal__button delete-modal__confirm-button">
                    Удалить
                </button>
            </div>
        </div>
    </div>
    `

    document.body.innerHTML += modal;
}

function handleTaskFormSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const taskName = target.taskName.value.trim();

    const valid = isValid(tasks, taskName);

    if (valid) {
        const taskToAdd = createTaskObject(false, taskName);
        const taskList = getTaskList();

        tasks.push(taskToAdd);
        taskList.append(createTaskElement(taskToAdd));

        target.taskName.value = '';
    }
}

function isValid(arrayTasks, value) {
    const errorBlock = document.querySelector('.error-message-block');
    if (errorBlock) {
        errorBlock.remove();
    }

    if (!value) {
        const errorMessage = 'Название задачи не должно быть пустым';
        createErrorSpan(errorMessage);
        return false;

    } else if (arrayTasks.some(task => task.text === value)) {
        const errorMessage = 'Задача с таким названием уже существует.';
        createErrorSpan(errorMessage);
        return false;

    } else {
        return true;
    }
}

const createErrorSpan = (text) => {
    const taskForm = getTaskForm();
    const span = document.createElement('span');
    span.className = 'error-message-block';
    span.textContent = text;

    taskForm.append(span);
}

function createTaskObject(completed, text) {
    return { id: Date.now(), completed, text }
}

function createTaskElement(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = task.id;

    const taskItemContainer = document.createElement('div');
    taskItemContainer.className = 'task-item__main-container';
    taskItem.append(taskItemContainer);

    const taskItemContent = document.createElement('div');
    taskItemContent.className = 'task-item__main-content';
    taskItemContainer.append(taskItemContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';
    taskItemContent.append(checkboxForm);

    const inputCheckbox = document.createElement('input');
    inputCheckbox.className = 'checkbox-form__checkbox';
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = `task-${task.id}`;

    const label = document.createElement('label');
    label.htmlFor = `task-${task.id}`;
    checkboxForm.append(inputCheckbox, label);

    const span = document.createElement('span');
    span.className = 'task-item__text';
    span.textContent = task.text;
    taskItemContent.append(span);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.textContent = 'Удалить';
    taskItemContainer.append(deleteButton);

    return taskItem;
}

document.body.addEventListener('keyup', changeDarkTheme);

function changeDarkTheme(e) {
    if (e.key === 'Tab') {
        const body = document.body;
        body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            body.style.background = '#24292E';
            changeThemeTasks('#ffffff');
            changeThemeButton('1px solid #ffffff');
        } else {
            body.style.background = 'initial';
            changeThemeTasks('initial');
            changeThemeButton('none');
        }
    }
}

function changeThemeTasks(value) {
    const allTasks = getAllTasks();
    allTasks.forEach(task => {
        task.style.color = value;
    });
}

function changeThemeButton(value) {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.style.border = value;
    })
}