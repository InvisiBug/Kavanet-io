import React from "react";
import { Page, ItemCard } from "../lib";
import bg2 from "../images/dots.png";
import Dots from "../experiments/dots";

const experimentList = [
  {
    title: "Dots",
    image: bg2,
    to: "/classDots",
    description:
      "A class based canvas experiment creating a random starfield with connecting lines",
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
