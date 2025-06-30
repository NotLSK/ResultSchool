let age = 23;
let row = 'sometext';
let bigNumber = 200n;
let someNull = null;
let unknown = undefined;
let man = {
    name: 'Egor',
    surname: 'Razzorenv',
    age: '23',
};
let someSymbol = Symbol('id');


const types = [age, row, bigNumber, someNull, unknown, man, Symbol('id')];
const essences = [console.log, { name: 'Maxim' }, Symbol('key'), Number, '', 0, -10, '-105'];


function typesLog(array) {
    array.forEach(element => {
        // Так как symbol мы не можем преобразовать в Number
        if(typeof element === 'symbol') {
            console.log(element, '________________', String(element), Boolean(element));
        } else {
            console.log(element, '________________', Number(element), String(element), Boolean(element));
        }
    });
};

console.log('Task 1');
typesLog(types);
console.log('Task 3');
typesLog(essences);



/* console.log('age ', Number(age), String(age), Boolean(age));
console.log('row ', Number(row), String(row), Boolean(row));
console.log('bigNumber ', Number(bigNumber), String(bigNumber), Boolean(bigNumber));
console.log('someNull ', Number(someNull), String(someNull), Boolean(someNull));
console.log('unknown ', Number(unknown), String(unknown), Boolean(unknown));
console.log('man ', Number(man), String(man), Boolean(man));
console.log('someSymbol ', String(someSymbol), Boolean(someSymbol)); */ // Number(someSymbol) - выдает ошибку TypeError
/* age  23 23 true
row  NaN sometext true
bigNumber  200 200 true
someNull  0 null false
unknown  NaN undefined false
man  NaN [object Object] true 
TypeError: Cannot convert a Symbol value to a number
    at Number (<anonymous> 
    someSymbol */