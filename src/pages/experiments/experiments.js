import React from "react";
import { Page, ItemCard, ThinCard } from "../../lib";
import bg2 from "../../images/dots.png";
import pixi from "../../images/bg3.png";

const experimentList = [
  {
    title: "Dots",
    image: bg2,
    to: "/experiments/dots",
    description:
      "A class based canvas experiment creating a random starfield with connecting lines",
  },
  {
    title: "Breakout",
    image: pixi,
    to: "/experiments/breakout",
    description: "My breakout game I made a few years ago",
  },
  // {
  //   title: "Pixi",
  //   image: pixi,
  //   to: "/pixi",
  //   description: "My pixi playground",
  // },
];

const Experiments = () => {
  return (
    <>
      <Page>
        {experimentList.map((experiment, index) => (
          <>
            <ThinCard
              title={experiment.title}
              imgSrc={experiment.image}
              description={experiment.description}
              to={experiment.to}
              key={experiment.title}
            />
            {/* <ItemCard
              title={experiment.title}
              imgSrc={experiment.image}
              description={experiment.description}
              to={experiment.to}
              key={experiment.title}
            /> */}
          </>
        ))}
      </Page>
    </>
  );
};

export default Experiments;

// {experimentList.map((experiment, index) => (
//   <ItemCard
//     title={experiment.title}
//     imgSrc={experiment.image}
//     description={experiment.description}
//     to={experiment.to}
//     key={experiment.index}
//   />
// ))}
