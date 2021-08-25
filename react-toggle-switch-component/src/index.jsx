import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: false };
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    let switchClassName;
    let circleClassName;
    if (this.state.isOn) {
      switchClassName = 'switch on';
      circleClassName = 'circle';
    } else {
      switchClassName = 'switch off';
      circleClassName = 'circle right';
    }

    return (
      <div className={switchClassName} onClick={this.handleClick}>
        <div className={circleClassName}></div>
      </div>
    );
  }
}

ReactDOM.render(
  <ToggleSwitch />,
  document.querySelector('#root')
);
