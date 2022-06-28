import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.updateIndexDot = this.updateIndexDot.bind(this);
    this.stopAutoPlay = this.stopAutoPlay.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { currentIndex } = this.state;
      this.nextImg(currentIndex);
    }, 3000);
  }

  handleNext() {
    const { currentIndex } = this.state;
    this.nextImg(currentIndex);
    this.stopAutoPlay();
  }

  handlePrevious() {
    const { currentIndex } = this.state;
    this.previousImg(currentIndex);
    this.stopAutoPlay();
  }

  previousImg(targetIndex) {
    const imageList = this.props.images;
    if (targetIndex === 0) {
      this.setState({ currentIndex: imageList.length - 1 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  }

  stopAutoPlay() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      const { currentIndex } = this.state;
      this.nextImg(currentIndex);
    }, 3000);
  }

  nextImg(targetIndex) {
    const imageList = this.props.images;
    if (targetIndex < imageList.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }
  }

  updateIndexDot(event) {
    this.setState({ currentIndex: event });
  }

  render() {
    const images = this.props.images;
    const { url, alt } = this.props.images[this.state.currentIndex];
    return (
      <div>
        <div className="container">
          <div className="previous-arrow">
            <i className="fa-solid fa-angle-left fa-3x" onClick={this.handlePrevious}></i>
          </div>
          <div>
            <img src={url} alt={alt} className="image-size"/>
          </div>
          <div className="next-arrow">
            <i className="fa-solid fa-angle-right fa-3x" onClick={this.handleNext}></i>
          </div>
        </div>
        <div className="dot-container">
          <RenderDots images={images} currentIndex={this.state.currentIndex} onIndexChange={this.updateIndexDot} onStopAuto={this.stopAutoPlay}/>
        </div>
      </div>
    );
  }
}

class RenderDots extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const currentTarget = event.target.id;
    this.props.onIndexChange(parseInt(currentTarget));
    this.props.onStopAuto();
  }

  render() {
    let currentDot;
    const { currentIndex } = this.props;
    return (
      this.props.images.map((element, index) => {
        if (currentIndex === index) {
          currentDot = 'fas fa-circle';
        } else {
          currentDot = 'far fa-circle';
        }
        return (
          <i key={element.id} className={currentDot} id={index} onClick={this.handleClick}></i>
        );
      })
    );
  }
}

export default Carousel;
