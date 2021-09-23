import React from 'react';
import '../Button/Button.scss';

function Button(props) {
  let buttonText = 'work with me';
  return <span className="primaryButtonStyle">{buttonText}</span>;
}

export default Button;
