// Задание №1

const student = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        this.level++;
        switch (this.level) {
            case 2:
                this.stack.push("CSS");
                return this;
            case 3:
                this.stack.push("JavaScript");
                return this;
            case 4:
                this.stack.push("React");
                return this;
            case 5:
                this.stack.push("NodeJS");
                return this;
            default:
                console.log("Студент выучил все технологии");
                return this;
        }
    },
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();

// Задание №2
const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
        return "Гав-Гав";
    },
};

const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
        return "Чик-чирик";
    },
};

function makeDomestic(isDomestic) {
    // prettier-ignore
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    this.isDomestic = isDomestic;
    return this;
}

console.log(makeDomestic.call(bird, false));
console.log(makeDomestic.apply(bird, [true]));

const bindedMakeDomestic = makeDomestic.bind(dog, true)();
console.log(bindedMakeDomestic);

// Задание №3

const footballer = {
    fullName: "Cristiano Ronaldo",
    attack: function () {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log("scoregoal");
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log("celebrate");
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        // prettier-ignore
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    },
};

const attack = footballer.attack.bind(footballer);
attack();
footballer.scoreGoal.call(footballer, "Сиииии");
footballer.goToSubstitution.apply(footballer, ["Paulo Dibala"]);
