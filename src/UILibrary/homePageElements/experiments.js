import React from "react";
import { Card, HomeSection } from "..";

const Gallery = ({ bgColour }) => {
  const number = [
    { title: "Dots", desc: "Connecting Dots Experiment", link: "/dots" },
    { title: "Second Thing", desc: "Second Desc" },
  ];

  // for (let i = 0; i < 2; i++) {
  //   number.push("I am a number");
  // }

  return (
    <>
      <HomeSection className="bg-indigo-300">
        <h1 className="text-5xl text-center text-primary">Experiments</h1>

        <div className="flex flex-grow flex-row flex-wrap justify-around">
          {number.map((numbers) => {
            return (
              <Card
                title={numbers.title}
                desc={numbers.desc}
                link={numbers.link}
              />
            );
          })}
        </div>
      </HomeSection>
    </>
  );
};

export default Gallery;
