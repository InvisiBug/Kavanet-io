import React from "react";
import { Card } from "..";

const Gallery = () => {
  const number = [];

  for (let i = 0; i < 2; i++) {
    number.push("I am a number");
  }

  return (
    <>
      <div className="flex flex-col bg-indigo-400 my-5 mx-40 rounded-lg">
        <h1 className="text-5xl text-center text-primary">Experiments</h1>

        {/* <div className="grid grid-cols-3"> */}
        <div className="flex flex-grow flex-row flex-wrap justify-around">
          {number.map((numbers) => {
            return <Card title="Card Title" desc="Card Description" />;
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
