import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return (
        <button>Clicked!</button>
      );
    }
    return (
          <button onClick={this.handleClick}>Button</button>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<CustomButton />);
