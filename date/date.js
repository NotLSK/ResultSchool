// Задание №1 

function getDateFormat(date, separator = '.') {
    // const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    // const month = (date.getMonth() + 1) >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');;
    const year = date.getFullYear();
    
    const formattedDate =  `${day}${separator}${month}${separator}${year}`;
    return formattedDate;
}

const today = new Date(2000, 0, 1); 
console.log('today', today);

const stringToday = getDateFormat(today, '-');
console.log(`Отформатированная дата: ${stringToday}`);

// Задание №2

function getDaysBeforeBirthday(nextBirthdayDate) {
    const nowMs = new Date().getTime();
    const birthdayMs = nextBirthdayDate.getTime();
    const daysLeft = convertMsToDays(birthdayMs - nowMs);

    return Math.round(daysLeft);

}

function convertMsToDays(ms) {
    return ms / 1000 / 3600 / 24 ;
}

const birthday = new Date(2025, 11, 14);
const daysUntilBirthday = getDaysBeforeBirthday(birthday);
console.log(`Осталось дней до дня рождения: ${daysUntilBirthday}`);

// Задание №3

function addDays(date, days) {
    const result = new Date(date.getTime() + convertDaysToMs(days));
    return result;
}

function convertDaysToMs(days) {
    return days * 24 * 3600 * 1000;
}

const someDate = new Date();
const newDate = addDays(someDate, 10);
console.log(`Дата с прибавленными днями: ${newDate}`);
