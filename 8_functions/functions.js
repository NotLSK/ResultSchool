//Задание №1
function getName1(name) {
    return `Hello ${name}`;
}

const getName2 = function(name) {
    return `Hello ${name}`;
}

const getName3 = name => {
    return `Hello ${name}`;
}

console.log(getName1('Egor'));
console.log(getName2('Maxim'));
console.log(getName3('Anna'));

//Задание №2
const getSumOfNumbers = (number, type = "odd") => {
    if (typeof number !== "number") return NaN;

    let sum = 0;
    if (type === "odd") {
        for(let i = 1; i <= number; i += 2) {
            sum += i;
        }
        return sum;
    } else if (type === "even") {
        for(let i = 0; i <= number; i += 2) {
            sum += i;
        }
        return sum;
    } else {
        for(let i = 0; i <= number; i++) {
            sum += i;
        }
        return sum;
    }
}

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55
console.log(getSumOfNumbers()); // NaN
console.log(getSumOfNumbers("10")) // NaN

// Задание №3
const getDivisorsCount = number => {
    if (typeof number !== "number") {
        return NaN;
    } else if (!Number.isInteger(number) || number < 0) {
        return alert(`${number} должен быть целым числом и больше нуля!`)
    } else {
        let sum = [];
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                sum.push(i);
            }
        }
        return sum;
    }
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
console.log(getDivisorsCount(-1)); //  undefined, что по идее правильно
console.log(getDivisorsCount('')); // NaN