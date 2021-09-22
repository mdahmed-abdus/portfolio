import React from 'react';
import './Card.scss';

function Card(props) {
  const cardTitle = props.cardTitle;

  return (
    <div class="card flexVerticleCenter">
      <div class="title-secondary">{cardTitle}</div>
    </div>
  );
}

export default Card;
