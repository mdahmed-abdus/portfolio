import React from 'react';
import '../Header/Header.scss';
import TitleSecondary from '../../SharedComponents/Title/TitleSecondary';
import Icon from '../Icon/Icon';

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
  let introText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.';

  function showMobileHeader() {
    document.querySelector('#nav-list').classList.toggle('mobile-nav-style');
  }

  return (
    <div className="header-banner">
      {/* <div className="main-text">mohd ahmed</div> */}
      <div className="glass pb60">
        <Icon
          name="main-logo"
          svgStyleClass="header-logo-style"
          width="44px"
          height="44px"
        />
        <div className="intro-section">
          <TitleSecondary
            isRegular="true"
            externalClass={'pb40'}
            secondaryTitle={introText}
          />
          <div className="logo">
            <Icon
              name="linkdin"
              svgStyleClass="mr20"
              width="36px"
              height="36px"
            />
            <Icon
              name="github"
              svgStyleClass="mr20"
              width="36px"
              height="36px"
            />
            <Icon name="facebook" width="36px" height="36px" />
          </div>
        </div>
      </div>
      <header className="header-style ">
        <nav className="navbar flexAlignCenter">
          <div
            className="hamburgerLogo pointer-cursor "
            onClick={showMobileHeader}
          >
            <Icon
              name="hamburger"
              svgStyleClass="m20"
              width="36px"
              height="36px"
            />
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
      <div className="banner-img img-wrap-main"></div>
    </div>
  );
}

export default Header;
