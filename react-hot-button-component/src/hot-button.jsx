import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickCounter: 0 };

  }

  handleClick() {
    this.setState({ clickCounter: this.state.clickCounter + 1 });
  }

  render() {
    const clickCounter = this.state.clickCounter;
    let color;
    if (clickCounter < 2) {
      color = 'green';
    } else if (clickCounter < 5) {
      color = 'purple';
    } else if (clickCounter < 8) {
      color = 'violet';
    } else if (clickCounter < 11) {
      color = 'pink';
    } else if (clickCounter < 14) {
      color = 'orange';
    } else if (clickCounter < 17) {
      color = 'yellow';
    } else if (clickCounter >= 17) {
      color = 'white';
    }

    return (
      <button onClick={this.handleClick} className={`btn ${color}`}>Hot Button</button>
    );

  }

}
