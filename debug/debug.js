//Задание №1
function task1() {
    let health = Number(prompt('Введите число параметра "здоровье" для персонажа'));
    console.log(health);
    //promt возвращает строку и лучше явно преобразовать эту строку в число для дальнейших сравнений
    if (health < 0 || !health) { //условие не в том месте, отрицание написано неправильно
    alert('Параметр "здоровье" должен быть больше нуля!')
    } else { //лишние скобки для else
        console.log(health);
    alert(`Параметр "здоровье" равен ${health}`); // непоставлены ковычки, ошибка в названии переменой
    }
}
// task1();

//Задание №2
function task2() {
    const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));
    console.log(temperatureInCelsius);
    //Опять неучтено, prompt возвращает строку, а не число

    if (temperatureInCelsius === 0) {
        alert('0 градусов по Цельсию - это температура замерзания воды')
    } else if (temperatureInCelsius > 0) {
        alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
    }

    const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32; // ошибка в названии переменной
    console.log(temperatureInFahrenheit, temperatureInCelsius);
    alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`); // % вместо знака $
}
// task2();

// Задание №3
function task3() {
    const salaryOfJuniorDeveloper = 500;
    const numberOfJuniorDevelopers = 3;
    let taxPercentage = 13;
    let totalJuniorDevelopersSalary = 0; // изначальнео объявлена как undefiend, из-за чего в будущем получаем NaN
                    
    for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
        const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
        totalJuniorDevelopersSalary += salaryWithTax;
        console.log(totalJuniorDevelopersSalary)
    }
    console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
}
// task3();

// Задание №4
function task4() {
    /* Проблема была в том, что в первом цикле мы перезаписывали значения массива, из-за чего при повторной работе с этим массимов
     мы брали уже возведённые в 3 сепень числа. Чтобы избежать такой проблемы, достаточно убрать эту строчку и сразу прибавлять к sum наше число в 3 степени, 
     не перезаписывая значения в нашем начальном массиве */
    let numbers = [10, 4, 100, -5, 54, 2]
    let sum = 0;

    // Через цикл for
    for (let i = 0; i < numbers.length; i += 1) {
        console.log('i: ', i, '\nnumbers: ', numbers[i]);
        // numbers[i] = numbers[i] ** 3;
        // console.log('i: ', i, '\nnumbers: ', numbers[i]);
        sum += numbers[i] ** 3 ;
    } 
    console.log(sum); // 1158411

    // Через цикл for of
    sum = 0;
    for (let num of numbers){
        console.log('num: ', num);
        // num = num ** 3;
        sum += num ** 3 ;
    } 
    console.log(sum); // было 1003904306910622800 / должно быть 1158411
}
// task4();