import React from 'react';
import './Card.scss';
import Icon from '../Icon/Icon';

function Card(props) {
  const cardTitle = props.cardTitle;
  const svgId = props.svgId;

  return (
    <div className="card flexVerticleCenter border-gradient border-gradient-purple">
      <Icon name={svgId} svgStyleClass="mr20" width="36px" height="36px" />
      <div className="title-secondary">{cardTitle}</div>
    </div>
  );
}

export default Card;
