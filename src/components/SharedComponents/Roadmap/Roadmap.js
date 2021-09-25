import React from 'react';
import '../Roadmap/Roadmap.scss';
import TitleSecondary from '../Title/TitleSecondary';
import Desc from '../Desc/Desc';
import Icon from '../Icon/Icon';

function Roadmap(props) {
  let roadmapTitle = props.roadmapTitle;
  let roadmapTileLine = props.roadmapTileLine;
  let roadmapTileDesc = props.roadmapTileDesc;

  return (
    <div className="roadmap-main">
      <Icon
        name="circle"
        svgStyleClass="roadmap-bullet"
        width="6px"
        height="6px"
      />
      <TitleSecondary
        isRegular="true"
        externalClass={'pl20'}
        secondaryTitle={roadmapTitle}
      />
      <TitleSecondary
        isRegular="true"
        isRightLine="true"
        externalClass={'pt20 pl20 roadmap-date'}
        secondaryTitle={roadmapTileLine}
      />
      <Desc externalClass={'pt40 pl20'} desc={roadmapTileDesc} />
    </div>
  );
}

export default Roadmap;
