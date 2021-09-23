import React from 'react';
import '../Header/Header.scss';
import hehebot from '../../../assets/images/hehebot.jpg';

function Header(props) {
  //   let isItallic = props.isItallic;
  //   let styleObj = props.styleObj;
  //   let externalClass = props.externalClass;

  return (
    <div className="header-banner">
      <div className="glass"></div>
      <header className="header-style">header</header>
      <div className="banner-img img-wrap-main">
        <img className="warp-img" alt="hehebot" src={hehebot} />
      </div>
    </div>
  );
}

export default Header;
