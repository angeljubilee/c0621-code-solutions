import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Password
          <div>
            <input type="password" onChange={this.handleChange}/>
            {this.state.password.length >= 8
              ? <FontAwesomeIcon icon={faCheck} color="green" />
              : <FontAwesomeIcon icon={faTimes} color="red" />
            }
          </div>
          { !this.state.password.length
            ? <p className="red-text">A password is required.</p>
            : this.state.password.length < 8 &&
            <p className="red-text">Your password is too short.</p>
          }
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <ValidatedInput />,
  document.querySelector('#root')
);
