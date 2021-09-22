import React from 'react';
import './Card.scss';

let cardTitle = 'python';
function Card(props) {
  return (
    <div class="card flexVerticleCenter">
      <div class="title-secondary">{cardTitle}</div>
    </div>
  );
}

export default Card;
