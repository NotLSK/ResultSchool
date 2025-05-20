import {Dictionary} from './dictionary.js';

class HardWordsDictionary extends Dictionary {
    // constructor(name) {
    //     super(name);
    // }

    add(word, description) {
        if (!(word in this.words)) {
            this.words[word] = {
                word: word,
                description: description,
                isDifficult: true
            }
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