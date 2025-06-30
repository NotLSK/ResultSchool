import { Dictionary } from './dictionary.js';

class HardWordsDictionary extends Dictionary {

    add(word, description) {
        if (!this.allWords[word]) {
            this._addNewWord(word, {
                word,
                description,
                isDifficult: true,
            });
        } else {
            console.log(`Слово ${word} уже существует в словаре!`)
        }
    }
}

console.log('\nЗадание 3');

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
console.log(dictionary);
dictionary.remove('JavaScript');
dictionary.showAllWords();

console.log('\nЗадание 4');

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();

console.log('\n Доп. задание №1');
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
