import React from "react";
import { Button } from "..";

const SmallCard = ({ imgSrc, title = "Title", description = "Description", buttonText = "Open", to = "", readyToShow = "true" }) => {
  return (
    <>
      <div className="container flex mt-10 mx-auto w-72 h-96 dark:bg-gray-600 border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
        <div className="flex flex-col w-full h-full border-red-500">
          {/* <div className="h-1/2 border-2 border-gray-500 object-contain"> */}
          <img src={imgSrc} alt={imgSrc} className="object-fit h-1/2" />
          {/* </div> */}
          <div className="flex flex-col ml-5 h-full">
            <div className="font-bebas-neue text-4xl font-black border-green-500 uppercase">{title}</div>
            <div className="flex-grow border-yellow-500">{description}</div>
            <div className="border-black">
              <Button to={to} clickable="false" className="mb-5">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
