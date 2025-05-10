//Задание №1
function checkQuestionAnswer(question, correctAnswer) {
    const userAnswer = prompt(question).trim();
    if (userAnswer.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase()) {
        alert('Ответ верный')
    } else {
        alert('Ответ неверный')
    }
}

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

//Задание №2
const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

function showSuccessMessage(message) {
    console.log(message);
}

function showErrorMessage(message) {
    console.error(message);
}

function checkTextOnErrorSymbol(text, errorSymbol, succesCallback, errorCallback) {
    if (text.includes(errorSymbol)) {
        /* new RegExp() конструктор класса RegExp для создания регулярных выражений 
        indexArray нужен чтобы сохранить результат текущего совпадения и индекс этого совпадение
        метод exec() возвращает одно совпадение
        мы идём дальше по циклу, потому что у regex есть свойство lastIndex (regex.lastIndex), 
        которое запоминает с какой позиции делать следующий поиск*/
        let regex = new RegExp(errorSymbol, 'g');
        let indexArray = [];
        while ((indexArray = regex.exec(text)) !== null) {
            errorCallback(`Найден запрещенный символ ${indexArray[0]} под индексом ${indexArray.index}`);
        }

        // let index = text.indexOf(errorSymbol);
        // while (index !== -1) {
        //     errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${index}`);
        //     index = text.indexOf(errorSymbol, index + 1);
        // }
    } else {
        showSuccessMessage(`В данном тексте нет запрещенных символов`);
    }
}

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
checkTextOnErrorSymbol(text, 'D', showSuccessMessage, showErrorMessage);