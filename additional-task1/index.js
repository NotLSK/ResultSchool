//Задание №1. Работа со строками
const javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.`

const halfLength = Math.floor(javaScriptDescription.length / 2);
let sliced = javaScriptDescription.slice(0, halfLength);
sliced = sliced.replaceAll('a', 'A');
// sliced = sliced.replaceAll(' ', '');
sliced = sliced.trim();
sliced = sliced.repeat(3);

console.log(javaScriptDescription[halfLength]);
console.log(sliced);


//Задание №1 и №2. Введение в основы JavaScript
const billButton = document.querySelector('.bill-btn');
// Доп проверки на валидность данных делать не нужно, т.к пользователь просто не сможет ввести что-то кроме цифр > 0

billButton.addEventListener('click', () => {
    const clientName = document.querySelector('#name').value.trim();
    let clientSpentForAllTime = Number(document.querySelector('#spentAll').value);
    let clientSpentToday = Number(document.querySelector('#spent').value);
    let discount = 0;

    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 0.1;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 0.2;
    } else if (clientSpentForAllTime >= 500) {
        discount = 0.3;
    }

    console.log(`Вам предоставляется скидка в ${discount * 100}%!`);
    clientSpentToday = clientSpentToday - (clientSpentToday * discount);
    clientSpentForAllTime += clientSpentToday;

    console.log(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
})

//Задание №3.

const userPassword = prompt('Введите пароль').trim();

// userPassword.match(/[A-Z]/) && userPassword.match(/\d/)
if ((userPassword.length > 3 || userPassword.length < 30) && /[A-Z]/.test(userPassword) && /\d/.test(userPassword)) {
    console.log('Пароль валидный.  Добро пожаловать в аккаунт!');
} else {
    console.log('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}
