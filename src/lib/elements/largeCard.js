import React from "react";
import { Button } from "..";

const LargeCard = ({ imgSrc, title = "Title", description = "Description", buttonText = "Open", to = "", readyToShow = "false" }) => {
  const point = 2;
  if (point === 1) {
    return (
      <>
        <div className="flex items-center mt-10 mx-auto p-10 w-3/5 h-96 dark:bg-gray-600 border border-gray-100 rounded-3xl shadow-lg md:max-w-5xl lg:max-w-2xl">
          <div className="grid gap-1 grid-flow-col grid-cols-2 grid-rows-3 w-full h-full border-pink-500 overflow-hidden">
            {/* <div class="col-start-1 bg-indigo-700">1</div> */}
            <h1 className="font-bebas-neue col-start-1 text-4xl font-black border-black uppercase">{title}</h1>

            {/* <div class="col-start-1 row-end-3 bg-indigo-700">2</div> */}
            <div className="flex col-start-1 row-end-3 items-end my-5 border-yellow-700 lg:w-3/4">
              <p>{description}</p>
            </div>

            {/* <div class="col-start-1 bg-indigo-700">3</div> */}
            <div className="flex col-start-1 items-end w-10 border-black lg:w-3/4">
              <Button to={to} clickable="false" className="my-5">
                {buttonText}
              </Button>
            </div>

            {/* <div class="col-start-2 row-end-4 row-start-1 bg-indigo-700">4</div> */}
            <img
              src={imgSrc}
              alt={imgSrc}
              // className="block mx-auto max-w-xs max-h-64 border-2 border-black rounded-md md:max-w-sm"
              className="col-start-2 row-end-4 row-start-1 m-auto rounded-md"
            />
          </div>
        </div>
      </>
    );
  } else if (point === 2) {
    return (
      <>
        <div className="flex items-center mt-10 mx-auto w-3/5 h-96 dark:bg-gray-600 border border-gray-200 rounded-3xl shadow-lg md:max-w-2xl">
          <div className="flex m-10 h-3/5">
            <div className="flex items-center w-full h-full border-pink-500">
              <div className="flex flex-col flex-grow justify-around h-full border-green-500">
                <h1 className="font-bebas-neue text-4xl font-black border-black uppercase">{title}</h1>

                <p className="flex-grow my-5 border-yellow-700 lg:w-3/4">{description}</p>

                <div className="border-black lg:w-3/4">
                  <Button to={to} clickable="false" className="my-5">
                    {buttonText}
                  </Button>
                </div>
              </div>

              {/* <div className="max-w-1/2 h-100 flex flex-grow border-2 border-yellow-500"> */}
              {/* <div className="w-1/2 h-full border-2 border-black"> */}
              <img
                src={imgSrc}
                alt={imgSrc}
                // className="block mx-auto max-w-xs max-h-64 border-2 border-black rounded-md md:max-w-sm"
                className="mx-auto w-6/12 rounded-md"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  } else if (point === 3) {
    return (
      <>
        <div className="flex items-center mt-10 mx-auto w-3/5 h-96 dark:bg-gray-600 border border-black rounded-3xl shadow-lg md:max-w-2xl">
          <div className="flex m-10 w-full h-4/5 bg-gray-400">
            <div className="flex items-center w-full h-full border border-pink-500">
              <div className="flex flex-col flex-grow justify-around h-full border border-green-500">
                <div className="h-10 border border-black">Title</div>
                <div className="h-1/2 border border-black">Desc</div>
                <div className="h-10 border border-black">Button</div>
              </div>

              {/* <div className="max-w-1/2 h-100 flex flex-grow border-2 border-yellow-500"> */}
              {/* <div className="w-1/2 h-full border-2 border-black"> */}
              <img
                src={imgSrc}
                alt={imgSrc}
                // className="block mx-auto max-w-xs max-h-64 border-2 border-black rounded-md md:max-w-sm"
                className="mx-auto w-5/12 rounded-md"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  } else if (point === 4) {
    return (
      <div className="container flex items-center mt-10 mx-auto w-3/5 h-96 dark:bg-gray-600 border border-gray-100 rounded-3xl shadow-lg md:max-w-5xl">
        <div className="flex items-center m-10 w-full border-2 border-pink-500">
          <div className="w-full border-2 border-green-500 md:w-7/12">
            <h1 className="font-bebas-neue mt-10 text-4xl font-black border-2 border-black uppercase">{title}</h1>

            <p className="my-5 w-full border-2 border-yellow-700 lg:w-3/4">{description}</p>

            <div className="border-2 border-black lg:w-3/4">
              <Button to={to} clickable="false" className="my-5">
                {buttonText}
              </Button>
            </div>
          </div>

          <div className="max-w-1/2 hidden flex-grow h-full border-2 border-yellow-500 md:block">
            <img src={imgSrc} alt={imgSrc} className="block mx-auto max-w-xs max-h-64 border-2 border-black rounded-md md:max-w-sm" />
          </div>
        </div>
      </div>
    );
  }
};

export default LargeCard;
