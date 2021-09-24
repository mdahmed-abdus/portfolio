import React from 'react';
import '../Header/Header.scss';
import hehebot from '../../../assets/images/hehebot.jpg';

function Header(props) {
  //   let isItallic = props.isItallic;
  //   let styleObj = props.styleObj;
  //   let externalClass = props.externalClass;

  const navList = [
    {
      title: 'about',
      link: 'about',
    },
    {
      title: 'skills',
      link: 'about',
    },
    {
      title: 'work',
      link: 'about',
    },
    {
      title: 'journey',
      link: 'about',
    },
    {
      title: 'contact',
      link: 'about',
    },
  ];

  function showMobileHeader() {
    document.querySelector('#nav-list').classList.toggle('mobile-nav-style');
  }

  return (
    <div className="header-banner">
      <div className="glass"></div>
      <header className="header-style ">
        <nav className="navbar flexAlignCenter">
          <div
            className="hamburgerLogo pointer-cursor "
            onClick={showMobileHeader}
          >
            hamburgerLogo
          </div>
          <ul id="nav-list" className="displayFlex nav-list">
            {navList.map((nav, i) => (
              <li key={i} className="li-style">
                <a key={i + 1} className="nav-a" href="">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          {/* </nav> */}
        </nav>
      </header>
      <div className="banner-img img-wrap-main">
        <img className="warp-img" alt="hehebot" src={hehebot} />
      </div>
    </div>
  );
}

export default Header;
