import React from 'react';
import Title from './SharedComponents/Title/Title';
import Desc from './SharedComponents/Desc/Desc';
import TitleSecondary from './SharedComponents/Title/TitleSecondary';
import Card from './SharedComponents/Card/Card';
import Button from './SharedComponents/Button/Button';
import hehebot from '../assets/images/hehebot.jpg';
import laptopDark from '../assets/images/laptop-dark.png';
import laptopLight from '../assets/images/laptop-light.jpg';

// import "../assets/images/hehebot"
function Home(props) {
  let introTitle = 'Hi, I am a Software Engineer';
  let aboutMeDesc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
  const cardList = [
    { cardTitle: 'python' },
    { cardTitle: 'java' },
    { cardTitle: 'nodejs' },
    { cardTitle: 'python' },
    { cardTitle: 'java' },
    { cardTitle: 'nodejs' },
  ];

  return (
    <div>
      {/* banner */}
      {/* intro-section */}
      <section className="grid-main-container ">
        <section className="grid-container ">
          <div className="row ">
            {/* <svg>
              <use href="../assets/svg/icons.svg#main-logo"></use>
            </svg> */}

            <div className="col-12 col-md-6 ">
              <TitleSecondary isLeftLine="true" secondaryTitle="about me" />
              <div className="pt60">
                <Desc desc={aboutMeDesc} />
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="pt90">
                <Title title={introTitle} />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* skills-section */}
      <section className="darkBg mt80 pt80">
        <section className="grid-main-container">
          <section className="grid-container ">
            <div className="row">
              <div className="col-12">
                <div className="flexCenter">
                  <TitleSecondary
                    isRightLine="true"
                    isLeftLine="true"
                    secondaryTitle="my skills"
                  />
                </div>
              </div>

              {cardList.map((card, i) => (
                <div className="col-12 col-md-4 pt60">
                  <Card key={i} cardTitle={card.cardTitle} />
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>

      {/* my work section */}
      <section className="darkBg mt80 pt80">
        <section className="grid-main-container">
          <section className="grid-container ">
            <div className="row">
              <div className="col-12">
                <div className="flexCenter">
                  <TitleSecondary
                    isRightLine="true"
                    isLeftLine="true"
                    secondaryTitle="my work"
                  />
                </div>
              </div>

              <div className="col-12 col-md-7 pt60">
                <img alt="hehebot" src={hehebot} />
              </div>
              <div className="col-12 col-md-5 pt60">
                <Title title={'HeheBot'} />
                <TitleSecondary secondaryTitle="my work" />
                <Desc desc={aboutMeDesc} />
              </div>

              <div className="col-12 col-md-3 pt60">
                <Title title={'HeheBot'} />
                <Desc desc={aboutMeDesc} />
              </div>
              <div className="col-12 col-md-4 pt60">
                <img alt="hehebot" src={laptopDark} />
              </div>
              <div className="col-12 col-md-5 pt60">
                <img alt="hehebot" src={laptopLight} />
              </div>

              <div className="flexCenter pt60">
                <Button />
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Home;
