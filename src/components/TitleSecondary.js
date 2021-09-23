import React from 'react';

function TitleSecondary(props) {
  let isLeftLine = props.isLeftLine;
  let isRightLine = props.isRightLine;

  return (
    <div className="displayFlex">
      {isLeftLine && <div className="line mr20">&nbsp;</div>}
      <div className="title-secondary">{props.secondaryTitle}</div>
      {isRightLine && <div className="line ml20">&nbsp;</div>}
    </div>
  );
}

export default TitleSecondary;
