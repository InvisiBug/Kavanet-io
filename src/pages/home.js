import React from "react";
import { Page, LargeCard } from "../lib";
// import bg2 from "../images/bg2.png";
import bg2 from "../images/dots.png";

const Home = () => {
  return (
    <>
      <Page>
        <div className="container  border-black">
          <div>
            <h1 className="font-extrabold text-7xl text-center  sm:text-8xl text-gray-800 leading-tight mt-4 text-shadow-lg">
              Projects
            </h1>

            <LargeCard
              title="Orbit Poi"
              description="My home made led POV poi"
              imgSrc={bg2}
              to="/dots"
              readyToShow="false"
            />
            <LargeCard imgSrc={bg2} to="/" />
          </div>

          <div>
            <h1 className="font-extrabold text-7xl text-center  sm:text-8xl text-gray-800 leading-tight mt-4 text-shadow-lg">
              Experiments
            </h1>

            <LargeCard
              title="Dots "
              description="A class based canvas experiment creating a random starfield with connecting lines"
              imgSrc={bg2}
              to="/classDots"
            />
          </div>
        </div>
      </Page>
    </>
  );
};

export default Home;
