import React from 'react';
import '../Button/Button.scss';

function Button(props) {
  let buttonText = props.buttonText;
  return <span className="primaryButtonStyle">{buttonText}</span>;
}

export default Button;
