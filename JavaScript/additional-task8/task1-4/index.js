// Задание 1
function task1() {
    let max = -1;

    const isValid = (number) => {
        return (number % 3 === 0) &&
            (number % 7 === 0) &&
            (number % 5 !== 0) &&
            (number % 2 !== 0);
    }

    for (let i = 1016; i <= 1937; i++) {

        if (isValid(i) && i > max) {
            max = i;
        }
    }

    return max;
}

// console.log(task1());

// Задание 2
function task2(str1, str2) {
    const uniqueStr1 = new Set(str1.toLowerCase());
    const uniqueStr2 = new Set(str2.toLowerCase());

    if (uniqueStr1.size !== uniqueStr2.size) {
        return false;
    }

    for (letter of uniqueStr1) {
        if (!uniqueStr2.has(letter)) {
            return false;
        }
    }

    return true;
}

// console.log(task2('адрес', 'среда'))
// console.log(task2('ноутбук', 'программист'))


//Задание 3
function task3(arr) {
    return [...new Set(arr)];
}

// console.log(task3([1, 1, 2, 2, 4, 2, 3, 7, 3]))

//Задание 4
function task4(str) {
    return str === str.split('').reverse().join('');
}

console.log(task4('racecar'))
console.log(task4('programmer')) 