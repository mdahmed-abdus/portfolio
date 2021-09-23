import React from 'react';
import './Button.scss';

let buttonText = 'work with me';
function Button(props) {
  return <span className="primaryButtonStyle">{buttonText}</span>;
}

export default Button;
