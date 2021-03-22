import React from "react";
import { Card, HomeSection } from "..";

const Gallery = ({ bgColour }) => {
  const pages = [
    { title: "Dots", desc: "Connecting Dots Experiment", link: "/dots" },
    { title: "Second Thing", desc: "Second Desc" },
  ];

  // for (let i = 0; i < 2; i++) {
  //   number.push("I am a number");
  // }

  return (
    <>
      <HomeSection className="bg-gradient-to-tr from-yellow-500  to-yellow-400">
        <h1 className="text-5xl text-center text-primary">Experiments</h1>

        <div className="flex flex-grow flex-row flex-wrap justify-around">
          {pages.map((numbers) => {
            return (
              <Card
                title={numbers.title}
                desc={numbers.desc}
                link={numbers.link}
                key={numbers.title}
              />
            );
          })}
        </div>
      </HomeSection>
    </>
  );
};

export default Gallery;
