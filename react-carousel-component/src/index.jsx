import React from 'react';
import ReactDOM from 'react-dom';

const imgList = [
  '../images/001.png',
  '../images/004.png',
  '../images/007.png',
  '../images/025.png',
  '../images/039.png'
];

function Dot(props) {
  return (
    props.active
      ? <i className="fas fa-circle" data-view={props.index}> </i>
      : <i className="far fa-circle" data-view={props.index}></i>

  );
}

class Caurosel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 0 };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  handleLeftClick(event) {
    this.state.view
      ? this.setState({ view: this.state.view - 1 })
      : this.setState({ view: this.props.images.length - 1 });
  }

  handleRightClick(event) {
    (this.state.view === this.props.images.length - 1)
      ? this.setState({ view: 0 })
      : this.setState({ view: this.state.view + 1 });

  }

  handleDotClick(event) {
    if (!event.target.matches('i')) {
      return;
    }
    this.setState({ view: parseInt(event.target.getAttribute('data-view')) });
  }

  render() {
    return (
      <div className="container">
        <div className="row flex-center">
          <h1>
            <i className="fas fa-chevron-left" onClick={this.handleLeftClick}></i>
          </h1>
          <img src={this.props.images[this.state.view]}></img>
          <h1>
            <i className="fas fa-chevron-right" onClick={this.handleRightClick}></i>
          </h1>
        </div>
        <div className="dots row flex-center" onClick={this.handleDotClick}>
          { this.props.images.map((img, index) =>
              <Dot key={index} index={index} active={this.state.view === index} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Caurosel images={imgList}/>,
  document.querySelector('#root')
);
