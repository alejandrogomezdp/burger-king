import './CardsContainer.css';
import React from 'react';

function CardsContainer(props) {
  return (
    <div className="card-container">{props.children}</div>
  );
}

export default CardsContainer;