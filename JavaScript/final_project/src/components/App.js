import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const header = document.createElement('h1');
    header.className = 'total-amount';
    header.textContent = 'Итого: $'
    this.$total = document.createElement('span');
    this.$total.textContent = this.state.total;
    header.append(this.$total);

    this.$rootElement.append(header);


    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);

    this.$donateList = new List({ onDelete: this.onItemDelete.bind(this) });
    this.$rootElement.appendChild(this.$donateList.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount });
    this.state.donates.push(item);
    this.$donateList.addItem(item);
    this.state.total += Number(amount);
    this.$total.textContent = this.state.total;
  }

  onItemDelete(e, container) {
    if (e.target.className === 'delete-button') {
      const item = e.target.closest('.donate-item');

      const index = this.state.donates.findIndex(listItem => {
        return listItem.state.id === Number(item.id);
      })

      this.state.total -= Number(this.state.donates[index].state.amount);
      this.$total.textContent = this.state.total;

      item.remove();
    }
  }
}
