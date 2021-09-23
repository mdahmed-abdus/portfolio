import React from 'react';

function Title(props) {
  let isItallic = props.isItallic;
  let styleObj = props.styleObj;
  let externalClass = props.externalClass;

  return (
    <div
      style={styleObj}
      className={`mainTitle ${isItallic ? 'is-itallic' : ''} ${externalClass}`}
    >
      {props.title}
    </div>
  );
}

export default Title;
