import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    const date = this.props.registredAt;
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    const datePrinted = date.toLocaleString('ru-RU', options);
    return (
      <div>
        <p>
          Привет, <b>{this.props.name.split(' ', 1)}!</b>
        </p>
        <span>Дата регистрации: {datePrinted}</span>
      </div>
    );
  }
}
