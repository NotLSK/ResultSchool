// Задание №3 // Доп. задание №1
class Dictionary {
    #name;
    #words;

    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    set mainName(name) {
        this.#name = name;
    }

    get allWords() {
        return this.#words;
    }

    _addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj;
    }

    add(word, description) {
        if (!this.#words[word]) {
            this._addNewWord(word, {
                word,
                description,
            });
        } else {
            console.log(`Слово ${word} уже существует в словаре!`)
        }
    }

    remove(word) {
        delete this.#words[word];
    }

    getWord(word) {
        return this.#words[word];
    }

    showAllWords() {
        Object.keys(this.#words).forEach((item) => {
            console.log(`${this.#words[item].word} - ${this.#words[item].description}`)
        })
    }
}

export { Dictionary };