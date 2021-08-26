import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="email"
               value={this.state.value}
               onChange={this.handleChange} />
        <button type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsLetterForm />,
  document.querySelector('#root')
);
