// Задание №1
const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0
  }
};

function getTotalPriceOfShoppingBag(shoppingBagArray ) {
    const productPrices = getPricesWithDiscount(shoppingBagArray);
    const totalPrice = productPrices.reduce((price, acc) => price + acc , 0);

    return totalPrice.toFixed(2);
}

function getPricesWithDiscount(shoppingBagArray) {
    const productPrices = shoppingBagArray.map((product) => {
        const allProductInfo = groceries[product.productId];
        const result = allProductInfo.price * product.count;

        if (allProductInfo.discount === 0) {
            return result;
        } else {
            return result  - (result * allProductInfo.discount / 100);
        }
    }) 

    return productPrices;
}

const shoppingBag = [
  { productId: "73Wakv", count: 3 },
  { productId: "5L3db9", count: 23 }
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05

// Задание №2
function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        if (getRandomNumberInRange(0, 1) === 0) {
            heroPlayer.hitEnemy(enemyPlayer);
        } else {
            enemyPlayer.hitHero(heroPlayer);
        }
        // console.log('hero: ', heroPlayer.health, 'enemy: ', enemyPlayer.health)
    }

    if (heroPlayer.health <= 0) {
        return console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здроровья`);
    } else {
        return console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здроровья`);
    }
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
    name: 'Batman',
    health: 100,
    hitEnemy(enemy) {
        enemy.health -= 10;
    },
}

const enemy = {
    name: 'Joker',
    health: 100,
    hitHero(hero) {
        hero.health -= 10;
    },
}

startGame(hero, enemy);

// Задание №3
function getKiller(suspectInfo, deadPeopleArray) {
    const result = [];
    Object.keys(suspectInfo).forEach(suspect => {
        const checkSuspcet = deadPeopleArray.every(man => {
            return suspectInfo[suspect].includes(man);
        })

        if (checkSuspcet) {
            result.push(suspect);
        }
    })
    return result;
}



const suspects = {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: [],
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"]
}
const deadPoeple = ["Lucas", "Bill"];

const killers = getKiller(suspects, deadPoeple);
console.log(`Престуник(и): ${killers}`);

// Задание №4
function getWinner(applicants, winnerObject) {
    const keys = Object.keys(applicants);
    const winnerNumber = keys[getRandomNumberInRange(0, keys.length - 1)];

    const winner = {
        ...winnerObject,
        ...applicants[winnerNumber]
    };

    return winner;
}

const todaysWinner = {
    prize: '10 000$',
}
 
const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 

// Задание №5
function getAdultUsers(users) {
    let result = Array.isArray(users) ? [] : {};

    Object.keys(users).forEach(user => {
        if (users[user].age >= 18) {
            if (Array.isArray(result)) {
                result.push(users[user]);
            } else {
                result[user] = users[user];
            }
        }
    })

    return result;
}

const usersArray = [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
    { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
];

const usersObject = {
    '34rdca3eeb7f6fgeed471198': { 
        id: '34rdca3eeb7f6fgeed471198', 
        name: 'Andrew', 
        age: 25 
    },
    '76rdca3eeb7f6fgeed471100': { 
        id: '76rdca3eeb7f6fgeed471100', 
        name: 'Alexey', 
        age: 15 
    }, 
    '12rdca3eeb7f6fgeed4711012': { 
        id: '12rdca3eeb7f6fgeed4711012', 
        name: 'Egor', 
        age: 13 
    },
    '32rdca3eeb7f6fgeed471101': { 
        id: '32rdca3eeb7f6fgeed471101', 
        name: 'Kate', 
        age: 31 
    },
    '98rdca3eeb7f6fgeed471102': { 
        id: '98rdca3eeb7f6fgeed471102', 
        name: 'Elena', 
        age: 18 
    }
};

const resultArray = getAdultUsers(usersArray);
const resultObject = getAdultUsers(usersObject);
console.log('Array', resultArray);
console.log('Object', resultObject);


