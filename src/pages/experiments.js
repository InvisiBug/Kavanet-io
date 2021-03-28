import React from "react";
import { Page, ItemCard } from "../lib";
import bg2 from "../images/dots.png";
import pixi from "../images/bg3.png";

const experimentList = [
  {
    title: "Dots",
    image: bg2,
    to: "/dots",
    description:
      "A class based canvas experiment creating a random starfield with connecting lines",
  },
  {
    title: "Pixi",
    image: pixi,
    to: "/pixi",
    description: "My pixi playground",
  },
];

const Experiments = () => {
  return (
    <>
      <Page>
        {experimentList.map((experiment, index) => (
          <ItemCard
            title={experiment.title}
            imgSrc={experiment.image}
            description={experiment.description}
            to={experiment.to}
            key={experiment.index}
          />
        ))}
      </Page>
    </>
  );
};

export default Experiments;
