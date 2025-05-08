//Задание №1
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function getParcel(arr, peopleCount = 1) {
    for (let i = 1; i <= peopleCount; i++) {
        let man = arr.shift();
        console.log(`${man} получил(а) посылку. В очереди осталось ${arr.length} человек`);
    }
}

// всё таки пришёл к тому, что объявлять как default значение arr.length плохая идея, решил пока что остановиться на таком варианте
function leaveQueueWithoutParcel(arr, peopleCount) {
    peopleCount ??= arr.length;
    for (let i = 1; i <= peopleCount; i++) {
        let man = arr.pop();
        console.log(`${man} не получил(а) посылку и ушёл(а) из очереди. В очереди осталось ${arr.length} человек`);
    }
}

getParcel(peopleWaiting, 2); // Криситина и Олег получили
getParcel(peopleWaiting); // Кирилл получил
console.log(`_______________________`);
leaveQueueWithoutParcel(peopleWaiting); // Все остальные

//Задание №2
function getSumOfSequence(number) {
    let arr = [];
    for(let i = 1; i <= number; i++) {
        arr.push(i);
    } 

    return arr[0] + arr[arr.length - 1];
}


console.log(getSumOfSequence(5));
console.log(getSumOfSequence(10));

//Задание №3
const coffees = ['Latte', 'Cappuccino', 'Americano'];
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', handleSearchClick);

function handleSearchClick(e) {
    const coffeeName = document.querySelector('#coffeeName').value.trim();
    const {availability, number} = checkProductAvailability(coffees, coffeeName);
    showSearchResult(availability, number, coffeeName);   

}

function checkProductAvailability(arr, productName) {
    const productContains = arr.some((product) => {
        return product.toLowerCase() === productName.toLowerCase();
    })

    const productIndex = arr.findIndex((product) => {
        return product.toLowerCase() === productName.toLowerCase();
    })

    return {availability: productContains, number: productIndex};
}

function showSearchResult(availability, number, productName) {
    const result = document.querySelector('.search-result');
    result.style.display = 'inline-block';
    if (availability) {
        result.textContent = `Держите ваш любимый кофе ${productName.toLowerCase()}. Он ${number} по популярности в нашей кофейне.`;
    } else {
        result.textContent = `К сожалению, такого вида кофе нет в наличии`;
    }
}

//Задание №4
const prices = [1.5, 1, 2];

function recalcPrice(arr, priceIncrease) {
    const newPrices = arr.map((price) => {
        return price + priceIncrease;
    })

    return newPrices;
}

function showChangedPrice(arrProcutName, arrProductPrice) {
    const priceList = document.querySelector('.price-list');
    arrProcutName.forEach((coffee, indexCofee) => {
        const coffePrice = document.createElement('li');
        coffePrice.textContent = `Кофе ${coffee} сейчас стоит ${arrProductPrice[indexCofee]} евро`;
        priceList.appendChild(coffePrice);
    });
}

const increasedPrices = recalcPrice(prices, 0.5);
showChangedPrice(coffees, increasedPrices);

//Задание №5.
const clientsEstimations = [];
const ratingButton = document.querySelector('.rating-btn')

ratingButton.addEventListener('click', handleRateClick);

function handleRateClick(e) {
    showResultOfEstimation(clientsEstimations);
}

function showResultOfEstimation(arr) {
    const rate = Number(document.querySelector('#rate').value);
    if (rate && rate <= 10 && rate >= 1) {
        const ratingResult = document.querySelector('.rating-result');
        arr.push(rate);
        const {positive, negative} = countRatings(arr);
        ratingResult.textContent = `Положительных оценок: ${positive} Отрицательных оценок: ${negative}`;
    }
}

function countRatings(arr) {
    const positiveRatings = arr.filter((rating) => {
        return rating > 5;
    })

    const negativeRatings = arr.filter((rating) => {
        return rating <= 5;
    })

    const positive = positiveRatings.length;
    const negative = negativeRatings.length;
    return {positive, negative};
}

//Задание №6
const numbers = [10, 4, 100, -5, 54, 2];
console.log('Задание №6');
let resultFor = 0;
let resultForOF = 0;
let resultForEach = 0;

for(let i = 0; i < numbers.length; i++) {
    resultFor += numbers[i] ** 3;
}

for (const number of numbers) {
    resultForOF += number ** 3;
}

numbers.forEach((number) => {
    resultForEach += number ** 3;
})

const resultReduce = numbers.reduce((acc, number) => {
    return acc += number ** 3; 
}, 0)

console.log(resultFor, resultForOF, resultForEach, resultReduce);