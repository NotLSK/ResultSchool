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

function firstVariant() {
    const taskList = document.createElement('div');
    taskList.className = 'tasks-list';
    let html = '';

    tasks.forEach(task => {
        html += createTaskElement(task);
    })

    taskList.innerHTML += html;
    document.body.append(taskList);

    function createTaskElement(task) {
        const element = `
    <div class="task-item" data-task-id="${task.id}">
        <div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
                    <label for="task-${task.id}"></label>
                </form>
                <span class="task-item__text">
                    ${task.text}
                </span>
            </div>
            <button class="task-item__delete-button default-button delete-button">
                Удалить
            </button>
        </div>
    </div>
    `;

        return element;
    }
}

function secondVariant() {
    const taskList = document.createElement('div');
    taskList.className = 'tasks-list';

    tasks.forEach(task => {
        taskList.append(createTaskElement(task));
    })

    document.body.append(taskList);

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
}

secondVariant();