class CustomSelect {
    #id
    #options
    #currentSelectedOption

    constructor(id, options) {
        this.#id = id;
        this.#options = options;
    }

    get selectedValue() {
        return this.#currentSelectedOption;
    }

    render(container) {
        const list = this.#createList();
        container.append(list);
    }

    #createList() {
        const div = document.createElement('div');
        div.className = `select-dropdown select-dropdown--${this.#id}`;

        const button = document.createElement('button');
        button.className = `select-dropdown__button select-dropdown__button-${this.#id}`;
        div.append(button);

        const span = document.createElement('span');
        span.className = `select-dropdown__text select-dropdown__text--${this.#id}`;
        span.textContent = 'Выберите элемент';
        button.append(span);

        const ul = document.createElement('ul');
        ul.className = `select-dropdown__list select-dropdown__list--${this.#id}`;
        div.append(ul);

        for (const option of this.#options) {
            const li = document.createElement('li');
            li.className = 'select-dropdown__list-item';
            li.dataset.value = option.value;
            li.textContent = option.text;
            ul.append(li);
        }

        this.#bindListEvents(ul, button);

        return div;
    }

    #bindListEvents(ul, button) {
        button.addEventListener('click', this.#handleClickDropdownList);
        ul.addEventListener('click', this.#handleClickListElement.bind(this));
    }

    #handleClickDropdownList(e) {
        // не стал биндить this к обработчику, по этому получаю не через id, а через ближайший родительский элемент
        const div = e.target.closest('.select-dropdown');
        const ul = div.querySelector('.select-dropdown__list');
        ul.classList.toggle('active');
    }

    #handleClickListElement(e) {
        const { target } = e;
        const isListElement = target.classList.contains('select-dropdown__list-item');

        if (isListElement) {
            this.#selectElement(target);
            this.#currentSelectedOption = this.#findSelectedObject(target);

            const text = document.querySelector(`.select-dropdown__text--${this.#id}`);
            text.textContent = this.#currentSelectedOption.text;
        }
    }

    #findSelectedObject(target) {
        const dataValue = Number(target.dataset.value);
        return this.#options.find(option => option.value === dataValue);
    }

    #selectElement(target) {
        const div = target.closest('.select-dropdown');
        const allElements = div.querySelectorAll('.select-dropdown__list-item');
        allElements.forEach(element => {
            element.classList.remove('selected');
        })

        target.classList.add('selected');
    }

}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const options1 = [
    { value: 1, text: 'JS' },
    { value: 2, text: 'NJS' },
    { value: 3, text: 'Rct' },
    { value: 4, text: 'H' },
    { value: 5, text: 'C' }
];

const customSelect = new CustomSelect('123', options);
const customSelect1 = new CustomSelect('125', options1);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
customSelect1.render(mainContainer);