import React from "react";
import { Page, SmallCard } from "../../lib";
import bg2 from "../../images/dots.png";
import genArt from "../../images/genArt.png";
import pixi from "../../images/bg3.png";
import squares from "../../images/squares.png";

const experimentList = [
  {
    title: "Dots",
    image: bg2,
    to: "/experiments/dots",
    description:
      "A class based canvas experiment creating a random starfield with connecting lines",
  },
  {
    title: "Genart",
    image: genArt,
    to: "/experiments/genart",
    description: "A placeholder for my first lot of genart",
  },
  {
    title: "Squares",
    image: squares,
    to: "/experiments/squares",
    description:
      "A generative artpiece based around squares, inspired by a reddit post",
  },
  {
    title: "Mouse",
    image:
      "https://cdn.branchcms.com/QOxXen0yEK-1009/images/blog/cute-mouse.jpg",
    to: "/experiments/mouse",
    description:
      "Currently a mess. An experiment using mouse move events with the canvas",
  },
  {
    title: "Breakout",
    image: pixi,
    to: "/experiments/breakout",
    description: "My breakout game I made a few years ago",
  },
  {
    title: "Pixi",
    image: pixi,
    to: "/experiments/pixi",
    description: "My pixi playground",
  },
];

const Experiments = () => {
  return (
    <>
      <Page>
        {experimentList.map((experiment) => (
          <SmallCard
            title={experiment.title}
            imgSrc={experiment.image}
            description={experiment.description}
            to={experiment.to}
            key={experiment.title}
          />
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
