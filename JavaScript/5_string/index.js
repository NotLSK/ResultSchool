// Задание №1.
const myName = 'Раззоренов Егор';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'это интересно и способно приносить хороший доход';
const numberOfMonth = 'несколько';

const result = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
                Я хочу стать веб-разработчиком, потому что ${reasonText}. 
                До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

// console.log(result);

// Задание №2.
let myInfoText = result;
myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');
myInfoText = myInfoText.replaceAll('курс', 'КУРС');
// console.log(myInfoText);

myInfoTextLength = myInfoText.length;
console.log(`Длинна строки: ${myInfoTextLength}`);
console.log('Первый символ строки: ', myInfoText[0]);
console.log('Последний символ строки: ', myInfoText[myInfoTextLength - 1]);

//Задание №3 и №4.
const userName = prompt('Как вас зовут?').toUpperCase().trim();
const userAge = Number(prompt('Сколько вам лет?').trim());
// alert(userName);

//Задание №5
const userString = prompt('Введите текст для обрезки').trim();
const startSliceIndex = Number(prompt('Введите индекс, с которого нужно начать обрезку строки').trim());
const endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки').trim());
const slicedString = userString.slice(startSliceIndex, endSliceIndex);
// console.log(slicedString);

//Задание №6
const userText = prompt('Введите текст').trim();
const fragmentOfText = prompt('Введите слово из текста').trim();
let slicedUserText = '';
if (userText.includes(fragmentOfText)) {
    const indexOfFragment = userText.indexOf(fragmentOfText);
    slicedUserText = userText.slice(0, indexOfFragment);
} else alert('Такое слово не найдено!');

//Отобржание строк на странице
const firstTask = document.querySelector('.task-first');
const secondTask = document.querySelector('.task-second');
const thirdTask = document.querySelector('.task-third');
const fifthTask = document.querySelector('.task-fifth');
const sixthTask = document.querySelector('.task-sixth');

textChange(firstTask, result);
textChange(secondTask, myInfoText);
textChange(thirdTask, ` Вас зовут ${userName}\n Ваш возраст: ${userAge}`);
textChange(fifthTask, `Результат: ${slicedString}`);
textChange(sixthTask, `Результат: ${slicedUserText}`);
// console.log(typeof userAge);


function textChange(block, info) {
    block.textContent = info;
};
