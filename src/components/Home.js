import React from 'react';
import Title from './SharedComponents/Title/Title';
import Desc from './SharedComponents/Desc/Desc';
import TitleSecondary from './SharedComponents/Title/TitleSecondary';
import Card from './SharedComponents/Card/Card';
import Button from './SharedComponents/Button/Button';
import hehebot from '../assets/images/hehebot.jpg';
import laptopDark from '../assets/images/laptop-dark.png';
import laptopLight from '../assets/images/laptop-light.jpg';
import Roadmap from './SharedComponents/Roadmap/Roadmap';

// import "../assets/images/hehebot"
function Home(props) {
  let introTitle = 'Hi, I am a Software Engineer';
  let aboutMeDesc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
  const cardList = [
    { svgId: 'javascript', cardTitle: 'javascript' },
    { svgId: 'python', cardTitle: 'python' },
    { svgId: 'java', cardTitle: 'java' },
    { svgId: 'html', cardTitle: 'html' },
    { svgId: 'node', cardTitle: 'node' },
    { svgId: 'express', cardTitle: 'express' },
  ];

  const journeyList = [
    {
      title: 'Internship at Capriconics Infotech  company LLp',
      timeline: 'Jun 2022 - present',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    },
    {
      title: 'Be in computer science from mumbai university',
      timeline: 'Jun 2018 - may 2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    },
  ];

  let styles = {
    centerAlign: {
      textAlign: 'center',
    },
    rightAlign: {
      textAlign: 'right',
    },
  };

  return (
    <div>
      {/* intro-section */}
      <section className="grid-main-container pt80">
        <section className="grid-container ">
          <div className="row ">
            <div className="col-12 col-md-6 sm-order2">
              <TitleSecondary isLeftLine="true" secondaryTitle="about me" />
              <Desc externalClass={'pt60'} desc={aboutMeDesc} />
            </div>
            <div className="col-12 col-md-6 ">
              <Title
                externalClass={'pt90 sm-pt-0'}
                styleObj={styles.centerAlign}
                title={introTitle}
              />
            </div>
          </div>
        </section>
      </section>

      {/* skills-section */}
      <section className="darkBg skillsBg mt80 pt80 pb80">
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
                  <Card key={i} cardTitle={card.cardTitle} svgId={card.svgId} />
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>

      {/* my work section */}
      <section className="grid-main-container pt80">
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

            <div className="row md-positon-relative">
              <div className="col-12 col-md-7 pt60">
                <div className="img-wrap-main">
                  <img className="warp-img" alt="hehebot" src={hehebot} />
                </div>
              </div>
              <div className="col-12 col-md-5 pt60 md-positon-absolute">
                <Title isItallic="true" title={'HeheBot'} />

                <TitleSecondary
                  isRegular="true"
                  externalClass={'pt20'}
                  secondaryTitle="A personalized discord bot"
                />
                <Desc externalClass={'pt40'} desc={aboutMeDesc} />
              </div>
            </div>

            <div className="row md-positon-relative">
              <div className="col-12 col-md-3 pt40 md-positon-absolute md-text-left">
                <Title
                  styleObj={styles.rightAlign}
                  isItallic="true"
                  title={'Simple Auth'}
                />
                <Desc
                  externalClass={'pt40'}
                  styleObj={styles.rightAlign}
                  desc={aboutMeDesc}
                />
              </div>
              <div className="col-12 col-md-4 pt40">
                <div className="img-wrap-main">
                  <img className="warp-img" alt="laptopDark" src={laptopDark} />
                </div>
              </div>
              <div className="col-12 col-md-5 pt40 md-positon-relative">
                <div className="img-wrap-main">
                  <img
                    className="warp-img"
                    alt="laptopLight"
                    src={laptopLight}
                  />
                </div>
                <TitleSecondary
                  externalClass={'pt20 md-positon-absolute'}
                  isRegular="true"
                  secondaryTitle="A simple session based authentication and authorization web app"
                />
              </div>
            </div>

            <div className="flexCenter pt60">
              <Button buttonText="work with me" />
            </div>
          </div>
        </section>
      </section>

      {/* journey-section */}
      <section className="darkBg mt80 pt80 pb80">
        <section className="grid-main-container ">
          <section className="grid-container ">
            <div className="row ">
              <div className="col-12 col-md-6 ">
                <TitleSecondary isLeftLine="true" secondaryTitle="my journey" />
                <Title
                  externalClass={'pt40 pb60'}
                  title="Get to know more about me"
                />

                {journeyList.map((journey, i) => {
                  return (
                    <Roadmap
                      key={i}
                      roadmapTitle={journey.title}
                      roadmapTileLine={journey.timeline}
                      roadmapTileDesc={journey.desc}
                    />
                  );
                })}
              </div>
              <div className="col-12 col-md-6 ">
                <Desc externalClass={'pt60'} desc={aboutMeDesc} />
                <div className="flexCenter pt60">
                  <Button buttonText="connect" />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* contact section */}
      <section className="grid-main-container pt80">
        <section className="grid-container ">
          <div className="row">
            <div className="col-12">
              <div className="flexCenter">
                <TitleSecondary
                  isRightLine="true"
                  isLeftLine="true"
                  secondaryTitle="connect"
                />
              </div>
            </div>

            <div className="form-container pt60 flexCenter">
              <form className="form-main-style">
                <label>
                  <input type="text" placeholder="Enter Your Name" />
                </label>

                <label>
                  <input type="email" placeholder="Enter Your Email Id" />
                </label>
                {/* <input type="submit" value="Submit" /> */}
                <div className="flexCenter pt60">
                  <Button buttonText="submit" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
