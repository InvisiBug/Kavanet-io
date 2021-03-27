import React from "react";
import { Button } from "../";

const ItemCard = ({
  imgSrc,
  title = "Title",
  description = "Description",
  buttonText = "Open",
  to = "",
}) => {
  return (
    <>
      <div className="flex w-3/5 mx-auto my-10 justify-center items-center md:max-w-5xl  border-blue-600 shadow-lg rounded-3xl">
        <div className="m-10 w-full flex  items-center  border-pink-500">
          <div className="w-full md:w-7/12  border-green-500">
            <h1 className="text-6xl font-bebas-neue uppercase font-black  border-black">
              {title}
            </h1>

            <p className=" border-yellow-700 my-5 w-full lg:w-3/4">
              {description}
            </p>

            <div className="lg:w-3/4 border-black ">
              <Button to={to} className="my-5 ">
                {buttonText}
              </Button>
            </div>
          </div>

          {/*
            Currently not happy with how the image looks
            cant make it scale to fit container          
          */}
          <div className="hidden md:block flex-grow h-full  border-yellow-500 ">
            <div className="w-full h-full">
              <img
                src={imgSrc}
                className="block max-h-64 mx-auto max-w-xs md:max-w-sm rounded-md border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
