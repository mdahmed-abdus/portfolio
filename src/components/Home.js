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

  return (
    <div>
      {/* banner */}

      {/* intro-section */}
      <section class="grid-main-container ">
        <section class="grid-container ">
          <div class="row ">
            <div class="col-12 col-md-6 ">
              <TitleSecondary showRightLine="false" secondaryTitle="about me" />
              <div class="pt60">
                <Desc desc={aboutMeDesc} />
              </div>

              <div class="flexCenter pt60">
                <Button />
              </div>
            </div>
            <div class="col-12 col-md-6 ">
              <div class="pt90">
                <Title title={introTitle} />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* skills-section */}
      <section class="darkBg mt80 pt80">
        <section class="grid-main-container">
          <section class="grid-container ">
            <div class="row">
              <div class="col-12">
                <div class="flexCenter">
                  <TitleSecondary secondaryTitle="my skills" />
                </div>

                <div class="pt60">
                  <div class="col-12 col-md-4">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Home;
