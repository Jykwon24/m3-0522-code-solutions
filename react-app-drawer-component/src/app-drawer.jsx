import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const clicked = this.state.clicked;
    let hidden = '';
    let menu;
    if (clicked) {
      menu = 'open';
    } else {
      menu = 'closed';
      hidden = 'hidden';
    }
    return (
      <div className="main">
        <div className= {`modal ${hidden}`} onClick={this.handleClick}></div>
        <div className="menu-bar" onClick={this.handleClick}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={`drawer ${menu}`} onClick={this.handleClick}>
          <h2>Menu</h2>
          <h4>Walkthrough</h4>
          <h4>Legacy Dungeons</h4>
          <h4>Items</h4>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
