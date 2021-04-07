import React from "react";
import { Button } from "..";

const SmallCard = ({
  imgSrc,
  title = "Title",
  description = "Description",
  buttonText = "Open",
  to = "",
  readyToShow = "true",
}) => {
  return (
    <>
      <div className="container flex w-72 mx-auto h-96 overflow-hidden mt-10 justify-center items-center border-2  border-blue-600 shadow-lg rounded-3xl">
        <div className="flex flex-col w-full h-full  border-red-500">
          <img src={imgSrc} alt={imgSrc} className="object-cover h-1/2" />
          <div className="ml-5 flex flex-col h-full">
            <div className="text-4xl font-bebas-neue uppercase font-black  border-green-500">
              {title}
            </div>
            <div className="flex-grow border-yellow-500">{description}</div>
            <div className=" border-black">
              <Button to={to} clickable="false" className="ml-5 mb-5">
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
