import React from "react";
import { Card, HomeSection } from "..";

const Gallery = () => {
  const number = [
    { title: "First Thing", desc: "First Desc" },
    { title: "Second Thing", desc: "Second Desc" },
  ];

  return (
    <>
      <HomeSection className="bg-green-300">
        <h1 className="text-5xl text-center text-primary">Gallery</h1>

        <div className="flex flex-grow flex-row flex-wrap justify-around">
          {number.map((numbers) => {
            return <Card title={numbers.title} desc={numbers.desc} />;
          })}
        </div>
      </HomeSection>
    </>
  );
};

export default Gallery;
