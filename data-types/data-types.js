const age = 23;
const row = 'sometext';
const bigNumber = 200n;
const someNull = null;
const unknown = undefined;
const man = {
    name: 'Egor',
    surname: 'Razzorenv',
    age: '23',
};
const someSymbol = Symbol('id');

console.log('age ', age, typeof age);
console.log('row ', row, typeof row);
console.log('bigNumber ', bigNumber, typeof bigNumber);
console.log('someNull ', someNull, typeof someNull);
console.log('unknown ', unknown, typeof unknown);
console.log('man ', man, typeof man);
console.log('someSymbol ', someSymbol, typeof someSymbol);