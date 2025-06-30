import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }

    // const formatDate = () => {
    //   const day = String(this.state.date.getDate());
    //   const month = String(this.state.date.getMonth() + 1);
    //   const year = String(this.state.date.getFullYear());

    //   const hours = this.state.date.getHours();
    //   const minutes = this.state.date.getMinutes();
    //   const seconds = this.state.date.getSeconds();

    //   return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`
    // }



    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.id = this.state.id;
    const formatDate = this.state.date.toLocaleString("ru-RU").replaceAll('.', '/');

    this.$deleteButton = document.createElement('div');
    this.$deleteButton.className = 'delete-button';
    this.$deleteButton.textContent = 'Удалить';

    this.$rootElement.innerHTML = `<div>${formatDate} - <b>$${this.state.amount}</b></div>`;
    this.$rootElement.append(this.$deleteButton);
  }
}
