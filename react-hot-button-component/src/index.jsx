import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numClicks: 0, color: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let numClicks = this.state.numClicks;
    let color;
    numClicks++;
    switch (numClicks) {
      case 3:
        color = 'purple';
        break;
      case 6:
        color = 'light-purple';
        break;
      case 9:
        color = 'red';
        break;
      case 12:
        color = 'orange';
        break;
      case 15:
        color = 'yellow';
        break;
      case 18:
        color = 'white';
        break;
      default:
        color = null;
    }

    if (color) {
      this.setState({ color: color });
    }

    this.setState({ numClicks: numClicks });
  }

  render() {
    return <button onClick={this.handleClick}
      className={this.state.color}>Hot button</button>;
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
