import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickWatch = this.handleClickWatch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { play: false, ticks: 0 };
  }

  tick() {
    this.setState({ ticks: this.state.ticks + 1 });
  }

  handleClickWatch() {
    if (!this.state.play) {
      this.setState({ ticks: 0 });
    }
  }

  handleClick() {
    const play = !this.state.play;
    this.setState({ play: play });
    if (!play) {
      clearInterval(this.timerID);
    } else {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

  }

  render() {
    let iconClassName;
    if (this.state.play) {
      iconClassName = 'icon-pause';
    } else {
      iconClassName = 'icon-play';
    }
    return (
      <div className="align-center">
        <div className="stopwatch"
             onClick={this.handleClickWatch}>
          <h4>{this.state.ticks}</h4>
        </div>
        <i className={iconClassName}
           onClick={this.handleClick}>
        </i>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
