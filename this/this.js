// Задание №1

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++;
        switch(this.level) {
            case 2:
                this.stack.push('CSS');
                return this;
            case 3:
                this.stack.push('JavaScript');
                return this;
            case 4:
                this.stack.push('React');
                return this;
            case 5:
                this.stack.push('NodeJS');
                return this;
            default:
                console.log("Студент выучил все технологии");
                return this;
        }
    }
}

student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()