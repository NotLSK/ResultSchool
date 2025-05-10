//Задание №1
console.log("Задание 1");
const goals = [8, 1, 1, 3, 2, -1, 5];

function mostEffective(arr) {
    const numberOfGoals = Math.max(...arr);
    console.log(`Самый результативный матч был под номером ${arr.indexOf(numberOfGoals) + 1}. В нем было забито ${numberOfGoals} гол(ов).`);
}

function mostIneffective(arr) {
    const matchesWitoutAutoLose = getMathesWithoutAutoLose(arr);
    const numberOfGoals = Math.min(...matchesWitoutAutoLose);
    let numbers = [];
    let index = arr.indexOf(numberOfGoals);
    while (index !== -1) {
        numbers.push(index + 1);
        index = arr.indexOf(numberOfGoals, index + 1);
    }
    console.log(`Самые нерезультативные матчи были под номерами ${numbers.join(', ')}. В каждом из них было забито по ${numberOfGoals} мячу(а).`);
}

function totalGoals(arr) {
    const matchesWitoutAutoLose = getMathesWithoutAutoLose(arr);
    const sum = matchesWitoutAutoLose.reduce((acc, goal) => {
        return acc += goal;
    }, 0)
    return sum;
}

function getMathesWithoutAutoLose(arr) {
    return arr.filter(goal => goal >= 0);
}

function checkAutoLoses(arr) {
    const matchesWitoutAutoLose = getMathesWithoutAutoLose(arr);
    if (matchesWitoutAutoLose.length === arr.length) {
        console.log('Были автоматические поражения: нет');
    } else {
        console.log('Были автоматические поражения: да')
    }
}

function getAverage(arr) {
    //Не совсем понятно по заданию должен ли идти в учёт матч с автолузом
    //Если не должен
    // const matchesWitoutAutoLose = getMathesWithoutAutoLose(arr);
    // return totalGoals(matchesWitoutAutoLose) / matchesWitoutAutoLose.length;
    //Если должен
    const tempGoals = arr.map((goal) => {
        if (goal < 0) {
            return 0;
        } else return goal;
    })
    return totalGoals(tempGoals) / tempGoals.length;
}

function sortArray(arr) {
    return [...arr].sort((a, b) => a -b);
}

mostEffective(goals);
mostIneffective(goals);
const sumOfGoals = totalGoals(goals);
console.log(sumOfGoals);
checkAutoLoses(goals);
const avgGoals = getAverage(goals);
console.log(avgGoals);
const sortGoals = sortArray(goals);
console.log(goals, sortGoals.join(','));

//Задание №2
console.log("Задание 2");
const regex = /^[><=+\-*/]$/;

function getMathResult(expression) {
    if (!Array.isArray(expression) ||
        expression.length < 3) {
        return console.log('Ошибка');
    } else if (expression.length > 3) {
        let normalizedExpression = expression.filter((item) => {
            return (!isNaN(Number(item)) || regex.test(item));
        });
        
        // на случай если чисел было переданно больше 2, например кейс '1','2','+','3','4' или '1','-','+','3','4'
        // проверка что у нас осталось чисел и операторов больше 3 в массиве И оператор есть только один
        if (normalizedExpression.length > 3 && normalizedExpression.filter(item => regex.test(item)).length === 1 ) {
            const operatorIndex = normalizedExpression.findIndex(item => regex.test(item));
            if (normalizedExpression[operatorIndex - 1] === undefined|| normalizedExpression[operatorIndex + 1] === undefined) {
                return console.log('Ошибка');
            } else {
                normalizedExpression = [normalizedExpression[operatorIndex - 1], normalizedExpression[operatorIndex], normalizedExpression[operatorIndex + 1]];
            }
        } else {
            return console.log('Ошибка');
        }
        console.log(calc(...normalizedExpression));
        return calc(...normalizedExpression);
    } else if(regex.test(expression[1])) {
        console.log(calc(...expression));
        return calc(...expression);
    } else {
        return console.log('Ошибка');
    }
}

function calc(a, operator, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case ">":
            return a > b;
        case "<":
            return a < b;
        case "=":
            return a === b;
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}


getMathResult( ['1','1','+','4','5']);
getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'

//Задание №3
console.log("Задание 3");

function createMatrix(n, m) {
    if (!Number.isInteger(n) || !Number.isInteger(m) || n < 1 || m < 1) {
        console.log('Неправильные размеры матрицы');
        return null;
    } else {
        let Matrix = [];
        for(let i = 0; i < n; i++) {
            let row = [];
            for(let j = 1; j <= m; j++) {
                row.push(j);
            }
            Matrix.push(row);
        }

        return Matrix;
    }
    
}

const someMatrix = createMatrix(3, 5);
console.log(someMatrix)

//Задание №4
console.log("Задание 4");

const matrix = [
   [ 1, 2, 3 ],
   [ 4, 5, 6 ],
   [ 7, 8, 9 ],
];

function MatrixToArray(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(...arr[i]);
    }
    return result;
}

const test = MatrixToArray(matrix);
console.log(test);