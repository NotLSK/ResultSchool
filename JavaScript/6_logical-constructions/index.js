//Задание №1.
const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

const submitButton = document.querySelector('.auth-btn');

submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // отменяем автоматическую отправку формы, чтобы страница не перезагружалась и алерты срабатывали

    const userLogin = document.querySelector('#username').value.trim();
    const userPassword = document.querySelector('#password').value.trim();

    if (existingUserLogin === userLogin && existingUserPassword === userPassword) {
        alert('Добро пожаловать!');
    } else {
        alert('Логин и/или пароль введены неверно!');
    }
})

//Задание №2.
const rightAnswers = [4, 4, 1, 12, 6];
const checkButton = document.querySelector('.check-btn');

checkButton.addEventListener('click', (e) => {
    // e.preventDefault(); здесь этого делать не нужно, т.к. кнопка сделана через <button>

    const testResult = document.querySelector('.test-result');
    let userAnswer = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    for(let i = 0; i <= 4; i++) {
        correct = document.querySelector(`.correct${i + 1}`);
        correct.classList.remove('right', 'wrong');
        userAnswer = Number(document.querySelector(`#q${i + 1}`).value.trim());
        // (userAnswer === rightAnswers[i]) ? correctAnswers++ : incorrectAnswers++;
        if (userAnswer === rightAnswers[i]) {
            correct.classList.add('right');
            correct.textContent = "Правильно";
            correctAnswers++;
        } else {
            correct.classList.add('wrong');
            correct.textContent = "Неправильно";
            incorrectAnswers++;
        }
    }

    checkButton.textContent = 'Повторить';
    testResult.textContent = `Конец теста!
                                Количество правильных ответов: ${correctAnswers}
                                Количество неправильных ответов: ${incorrectAnswers}`;
    // console.log(userAnswer);
    // console.log(correctAnswers);
    // console.log(incorrectAnswers);
})

//Задание №3.
function task3() {
    confirm('JavaScript появился в 1995 году?') ? alert('Верно!') : alert('Неверно! JS появился в 1995 году');
    confirm('Спецификация JavaScript называется ECMAScript?') ? alert('Верно!') : alert('Неверно! Спецификация JS называется ECMAScript');
    confirm('JavaScript был создан за 1 месяц?') ? alert('Неверно! JS был разработан за 10 дней') : alert('Верно!');
}
// task3();

//Задание №4.
function task4() {
    for (let i = 0; i < 3; i += 1) {
        let newStudent = prompt('Введите имя нового студента! for');
        if (newStudent) {
            newStudent = newStudent.trim();
            alert(`Добро пожаловать, ${newStudent}!`)
        }
    }
  
    let j = 0;
    while(j < 3) {
        let newStudent = prompt('Введите имя нового студента! while');
        if (newStudent) {
            newStudent = newStudent.trim();
            alert(`Добро пожаловать, ${newStudent}!`)
        }
        j++;
    }

    let n = 0;
    do {
        let newStudent = prompt('Введите имя нового студента! do while');
        if (newStudent) {
            newStudent = newStudent.trim();
            alert(`Добро пожаловать, ${newStudent}!`)
        }
        n++;
    } while (n < 3);
}
// task4();

//Задание №5.
const counter = document.querySelector('.counter');
let sum = 0;
for(let i = 0; i <= 100; i++) {
    sum += i;
}
counter.textContent = `Результат сложения чисел от 0 до 100: ${sum}`;