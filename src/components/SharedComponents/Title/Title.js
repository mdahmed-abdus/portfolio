import React from 'react';

function Title(props) {
  let isItallic = props.isItallic;
  let styleObj = props.styleObj;

  return (
    <div
      style={styleObj}
      className={`mainTitle ${isItallic ? 'is-itallic' : ''}`}
    >
      {props.title}
    </div>
  );
}

export default Title;
