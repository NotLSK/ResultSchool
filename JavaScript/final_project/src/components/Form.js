import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    };

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    // Создаём html формы
    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';
    this.$input.max = '100';
    this.$input.min = '1';

    this.$button = document.createElement('button');
    this.$button.className = 'donate-form__submit-button';
    this.$button.disabled = true;
    this.$button.type = 'submit';
    this.$button.textContent = 'Задонатить';

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));

    label.append(this.$input);
    this.$rootElement.append(label, this.$button);
  }

  get isValid() {
    return Number(this.state.amount) >= 1 && Number(this.state.amount) <= 100
  }

  handleInput(e) {
    this.state.amount = e.target.value;
    this.$button.disabled = this.isValid ? false : true;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.amount);
    this.state.amount = '';
    this.$input.value = '';
  }

}
