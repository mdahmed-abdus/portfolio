import React from 'react';
import './Card.scss';

function Card(props) {
  const cardTitle = props.cardTitle;

  return (
    <div className="card flexVerticleCenter">
      <div className="title-secondary">{cardTitle}</div>
    </div>
  );
}

export default Card;
