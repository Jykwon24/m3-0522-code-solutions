import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    // this.state.isClicked ? this.setState({ isClicked: false }) : this.setState({ isClicked: true });
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const isClicked = this.state.isClicked;
    const backOff = 'back-off';
    const backOn = 'back-on';
    const toggleOn = 'on';
    const toggleOff = 'off';
    return (
      <div className="container">
        <div className={`switch-container ${isClicked ? backOff : backOn}`}>
         <div onClick={this.handleClick} className={`switch ${isClicked ? toggleOff : toggleOn}`}>
         </div>
        </div>
        <h2 className="word">{isClicked ? toggleOff.toUpperCase() : toggleOn.toUpperCase()}</h2>
      </div>
    );
  }
}
