// Задание №3
class Dictionary { 
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!(word in this.words)) {
            this.words[word] = {
                word: word,
                description: description
            }
        }
    }

    remove(word) {
        delete this.words[word];
    }

    getWord(word) {
        return this.words[word];
    }

    showAllWords() {
        Object.keys(this.words).forEach((item) => {
            console.log(`${this.words[item].word} - ${this.words[item].description}`)
        })
    }
}

export {Dictionary};