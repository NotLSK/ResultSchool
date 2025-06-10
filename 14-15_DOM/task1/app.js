// Задание №1.
function createFormInnetHTML() {
    document.body.innerHTML += `
    <form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form>
    `;
}

function createFormCreateElement() {
    const form = document.createElement('form');
    form.className = 'create-user-form';

    const userName = createFormElement('Имя', 'text', 'userName', 'Введите ваше имя');
    const password = createFormElement('Пароль', 'password', 'password', 'Придумайте пароль');

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Подтвердить';

    form.append(userName, password, submitBtn);
    document.body.append(form);


    function createFormElement(text, type, name, placeholder) {
        const userLabel = document.createElement('label');
        userLabel.textContent = text;

        const userInput = document.createElement('input');
        userInput.type = type;
        userInput.name = name;
        userInput.placeholder = placeholder;

        userLabel.append(userInput);

        return userLabel;
    }
}

createFormInnetHTML();
// createFormCreateElement();

const userForm = document.querySelectorAll('.create-user-form input');
const submitBtn = document.querySelector('.create-user-form button');

console.log(userForm);

submitBtn.addEventListener('click', handleSubmitClick);

function handleSubmitClick(e) {
    e.preventDefault();

    let infoDiv = document.createElement('div');
    infoDiv.className = 'user-info';
    infoDiv.innerHTML = `Имя: ${userForm[0].value} Пароль: ${userForm[1].value}`;

    document.body.append(infoDiv);
}


