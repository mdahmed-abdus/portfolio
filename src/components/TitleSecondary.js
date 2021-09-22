import React from 'react';

function TitleSecondary(props) {
  return (
    <div class="displayFlex">
      <div class="line mr10">&nbsp;</div>
      <div class="title-secondary">{props.secondaryTitle}</div>
      <div class="line ml10">&nbsp;</div>
    </div>
  );
}

export default TitleSecondary;
