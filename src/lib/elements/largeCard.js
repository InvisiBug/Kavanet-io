import React from "react";
import { Button } from "..";

const LargeCard = ({
  imgSrc,
  title = "Title",
  description = "Description",
  buttonText = "Open",
  to = "",
  readyToShow = "true",
}) => {
  return (
    <>
      <div className="container flex w-3/5 h-96 mt-10 mx-auto  items-center md:max-w-2xl dark:bg-gray-600 border border-gray-100 shadow-lg rounded-3xl">
        <div className="flex m-10 w-full items-center  border-pink-500">
          <div className="md:w-7/12 w-full  border-green-500">
            <h1 className="text-4xl mt-10 font-bebas-neue uppercase font-black border-black">
              {title}
            </h1>

            <p className=" border-yellow-700 my-5 w-full lg:w-3/4">
              {description}
            </p>

            <div className="lg:w-3/4 border-black ">
              <Button to={to} clickable="false" className="my-5 ">
                {buttonText}
              </Button>
            </div>
          </div>

          {/*
            Currently not happy with how the image looks
            cant make it scale to fit container          
          */}
          <div className="hidden md:block flex-grow h-full max-w-1/2  border-yellow-500 ">
            {/* <div className="w-full h-full"> */}
            <img
              src={imgSrc}
              alt={imgSrc}
              className="block max-h-64 mx-auto max-w-xs md:max-w-sm rounded-md border-black"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeCard;
