import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const header = document.createElement('h2');
    header.className = 'donates-container__title';
    header.textContent = 'Список донатов';

    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';

    this.$rootElement.addEventListener('click', (e) => {
      this.props.onDelete(e, this.$listContainer);
    });

    this.$rootElement.append(header, this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.append(item.$rootElement);
  }
}