import React, { useState } from 'react';
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

function Accordion(props) {
  const [view, setView] = useState('');

  const handleClick = event => {
    if (view === event.target.textContent) {
      setView('');
    } else {
      setView(event.target.textContent);
    }
  };

  const sectionList = props.topics.map((section, index) =>
    <section key={index}>
      <h1>{section.title}</h1>
      { section.title === view
        ? <p>{section.content}</p>
        : <p className="hidden">{section.content}</p>
      }
    </section>
  );

  return (
    <div className="container" onClick={handleClick}>{sectionList}</div>
  );
}

ReactDOM.render(
  <Accordion topics={subjects} />,
  document.querySelector('#root')
);
