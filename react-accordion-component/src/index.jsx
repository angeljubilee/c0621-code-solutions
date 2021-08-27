import React from 'react';
import ReactDOM from 'react-dom';

const subjects = [
  {
    title: 'JSX',
    content: 'React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.'
  },
  {
    title: 'Components',
    content: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.'
  },
  {
    title: 'Props',
    content: 'When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.'
  }
];

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { view: '', topics: this.props.topics };
  }

  handleClick(event) {
    if (this.state.view === event.target.textContent) {
      this.setState({ view: '' });
    } else {
      this.setState({ view: event.target.textContent });
    }
  }

  render() {
    const sectionList = this.state.topics.map((section, index) =>
      <section key={index}>
        <h1>{section.title}</h1>
        { section.title === this.state.view
          ? <p>{section.content}</p>
          : <p className="hidden">{section.content}</p>
        }
      </section>
    );
    return (
     <div className="container" onClick={this.handleClick}>{sectionList}</div>
    );
  }
}

ReactDOM.render(
  <Accordian topics={subjects} />,
  document.querySelector('#root')
);
