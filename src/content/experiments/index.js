import bg2 from "../../images/dots.png";
import genArt from "../../images/genArt.png";
import pixi from "../../images/bg3.png";
import squares from "../../images/squares.png";

export const cards = [
  {
    title: "Star field",
    type: "large",
    image: bg2,
    to: "/experiments/dots",
    description:
      "A class based canvas experiment creating randomly changing constellations.",
  },
  {
    title: "Pixi",
    type: "small",
    image: pixi,
    to: "/experiments/pixi",
    description: "My pixi playground",
  },
  {
    title: "Squares",
    type: "large",
    image: squares,
    to: "/experiments/squares",
    description:
      "A creative coding style image based around squares, inspired by a reddit post. Reload the page to generate a new pattern.",
  },
  {
    title: "Animated Genart",
    type: "small",
    image: genArt,
    to: "/experiments/genart",
    description: "A placeholder for my first lot of genart",
  },
  {
    title: "Genart",
    type: "large",
    image: genArt,
    to: "/experiments/genart",
    description: "A Super simple static gen art example.",
  },
  {
    title: "Mouse",
    type: "large",
    image:
      "https://cdn.branchcms.com/QOxXen0yEK-1009/images/blog/cute-mouse.jpg",
    to: "/experiments/mouse",
    description:
      "Currently a mess. An experiment using mouse move events with the canvas",
  },

  {
    title: "Breakout",
    type: "small",
    image: pixi,
    to: "/experiments/breakout",
    description:
      "My breakout game I made a few years ago. Soon to be ported to this new site.",
  },
];