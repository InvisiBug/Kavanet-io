import React from "react";
import { Card } from "../UILibrary";

const Gallery = () => {
  const number = [];

  for (let i = 0; i < 10; i++) {
    number.push("I am a number");
  }

  return (
    <>
      <div className="h-full">
        <div className="flex flex-col bg-yellow-800 ">
          <div className="border-2 border-black">
            <h1 className="text-2xl text-center">Gallery</h1>
          </div>

          <div className="flex flex-grow flex-row flex-wrap justify-around">
            {number.map((numbers) => {
              return <Card title="Card Title" desc="Card Description" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
