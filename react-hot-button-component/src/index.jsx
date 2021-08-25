import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let numClicks = this.state.numClicks;
    numClicks++;
    this.setState({ numClicks: numClicks });
  }

  render() {
    const numClicks = this.state.numClicks;
    let color;
    if (numClicks >= 3 && numClicks < 6) {
      color = 'purple';
    } else if (numClicks >= 6 && numClicks < 9) {
      color = 'light-purple';
    } else if (numClicks >= 9 && numClicks < 12) {
      color = 'red';
    } else if (numClicks >= 12 && numClicks < 15) {
      color = 'orange';
    } else if (numClicks >= 15 && numClicks < 18) {
      color = 'yellow';
    } else if (numClicks >= 18) {
      color = 'white';
    } else {
      color = '';
    }

    return <button onClick={this.handleClick}
      className={color}>Hot button</button>;
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
