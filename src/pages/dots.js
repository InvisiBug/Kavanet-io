import React from "react";
import Dots from "../experiments/dots";
import { NavBar } from "../lib";
// import { ExperimentsLayout } from "../lib";

const dots = () => {
  return (
    <>
      <div className="bg-gray-800 h-screen">
        <NavBar />
        <Dots />
      </div>
    </>
  );
};

export default dots;

// <div className="bg-gray-700 inset-0 absolute">
//         <div className="bg-white mx-10 my-10 w-full h-10"></div>
//         {/* <Dots /> */}
//       </div>
