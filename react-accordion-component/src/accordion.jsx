import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicId: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element) {
    const currentTopic = this.state.topicId;
    if (currentTopic === element.number) {
      this.setState({ topicId: '' });
    } else {
      this.setState({ topicId: element.number });
    }
  }

  render() {
    const data = this.props.data;
    const currentTopic = this.state.topicId;
    let display;
    return (
    <ul>
      {
      data.map(element => {
        if (currentTopic === element.number) {
          display = '';
        } else {
          display = 'hidden';
        }
        return (
            <li key={element.number}className="list-style">
              <div id={element.number} className="topic-style" onClick={() => this.handleClick(element)}>{element.title}</div>
              <div className={`content-style ${display}`}>{ element.content }</div>
            </li>
        );
      })
      }
    </ul>
    );
  }
}

export default Accordion;
