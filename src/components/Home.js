import React from 'react';
import Title from './Title';
import Desc from './Desc';
import TitleSecondary from './TitleSecondary';
import Card from './Card/Card';
import Button from './Button/Button';

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
            <div className="col-12 col-md-6 ">
              <TitleSecondary isLeftLine="true" secondaryTitle="about me" />
              <div className="pt60">
                <Desc desc={aboutMeDesc} />
              </div>

              <div className="flexCenter pt60">
                <Button />
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
    </div>
  );
}

export default Home;
