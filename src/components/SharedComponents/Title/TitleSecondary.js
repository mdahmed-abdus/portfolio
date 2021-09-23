import React from 'react';

function TitleSecondary(props) {
  let isLeftLine = props.isLeftLine;
  let isRightLine = props.isRightLine;
  let isRegular = props.isRegular;
  let styleObj = props.styleObj;
  let externalClass = props.externalClass;

  return (
    <div className="displayFlex">
      {isLeftLine && <div className="line mr20">&nbsp;</div>}
      <div
        style={styleObj}
        className={`title-secondary ${
          isRegular ? 'regular-style' : ''
        } ${externalClass}`}
      >
        {props.secondaryTitle}
      </div>
      {isRightLine && <div className="line ml20">&nbsp;</div>}
    </div>
  );
}

export default TitleSecondary;
