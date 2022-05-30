import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = {
      isClicked: false,
      seconds: 0
    };
  }

  handleClick() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      this.setState({ isClicked: false });
      clearInterval(this.interval);
    } else {
      this.setState({ isClicked: true });
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }

  resetTimer() {
    if (!this.state.isClicked) {
      this.setState({ seconds: 0 });
    }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    const isClicked = this.state.isClicked;
    const counter = this.state.seconds;
    const start = 'start';
    const stop = 'stop';
    return (
    <div className='container'>
      <div className='watch'>
        <h2 onClick={this.resetTimer} className='counter'>{counter}</h2>
      </div>
        <i onClick={this.handleClick} className={`fa-solid fa-play ${isClicked ? stop : start}`}></i>
        <i onClick={this.handleClick} className={`fa-solid fa-pause ${isClicked ? start : stop}`}></i>
    </div>
    );
  }
}
