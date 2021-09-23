import React from 'react';
import '../Desc/Desc.scss';

function Desc(props) {
  let styleObj = props.styleObj;
  let externalClass = props.externalClass;

  return (
    <div style={styleObj} className={`desc ${externalClass}`}>
      {props.desc}
    </div>
  );
}

export default Desc;
