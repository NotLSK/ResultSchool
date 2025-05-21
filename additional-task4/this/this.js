// Задание №1
const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,

    checkChancesToWin(defender) {
        let chanceToWin = 0;
        let maxChance = Object.keys(defender).length;
        Object.keys(this).forEach(item => {
            if (typeof this[item] !== 'function' && this[item] > defender[item]) {
                chanceToWin++;
            }
        })

        return [chanceToWin, maxChance];
    },

    improveArmy() {
        Object.keys(this).forEach(item => {
            if (typeof this[item] !== 'function') {
                this[item] += 5;
            }
        })
    },

    attack(defender) {
        const [chanceToWin, maxChance] = this.checkChancesToWin(defender);
        if (chanceToWin * 100 / maxChance < 70) {
            this.improveArmy();
            console.log(`Наши шансы равны ${chanceToWin}/${maxChance}. Необходимо укрепление!`);
        } else {
            console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
    },
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender);
attacker.attack(defender);
attacker.attack(defender);

