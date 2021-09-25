import React from 'react';
import '../Roadmap/Roadmap.scss';
import TitleSecondary from '../Title/TitleSecondary';
import Desc from '../Desc/Desc';
import Icon from '../Icon/Icon';

function Roadmap(props) {
  let isItallic = props.isItallic;
  let styleObj = props.styleObj;
  let externalClass = props.externalClass;

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
        secondaryTitle="Internship at Capriconics Infotech  company LLp"
      />
      <TitleSecondary
        isRegular="true"
        isRightLine="true"
        externalClass={'pt20 pl20 roadmap-date'}
        secondaryTitle="Jun 2022 - present"
      />
      <Desc
        externalClass={'pt40 pl20'}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
      />
    </div>
  );
}

export default Roadmap;
