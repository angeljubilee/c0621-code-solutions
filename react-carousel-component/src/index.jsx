import React, { useState } from 'react';
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

function Caurosel(props) {

  const [view, setView] = useState(0);

  const handleLeftClick = event => {
    view
      ? setView(view - 1)
      : setView(props.images.length - 1);
  };

  const handleRightClick = event => {
    (view === props.images.length - 1)
      ? setView(0)
      : setView(view + 1);

  };

  const handleDotClick = event => {
    if (!event.target.matches('i')) {
      return;
    }
    setView(parseInt(event.target.getAttribute('data-view')));
  };

  return (
    <div className="container">
      <div className="row flex-center">
        <h1>
          <i className="fas fa-chevron-left" onClick={handleLeftClick}></i>
        </h1>
        <img src={props.images[view]}></img>
        <h1>
          <i className="fas fa-chevron-right" onClick={handleRightClick}></i>
        </h1>
      </div>
      <div className="dots row flex-center" onClick={handleDotClick}>
        { props.images.map((img, index) =>
            <Dot key={index} index={index} active={view === index} />
        )}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Caurosel images={imgList}/>,
  document.querySelector('#root')
);
