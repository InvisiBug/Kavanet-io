import React from "react";
import Dots from "../experiments/classDots";
import { NavBar } from "../lib";

const dots = () => {
  return (
    <>
      <div className="flex bg-indigo-900 opacity-2 h-screen">
        <NavBar />
        <div className="h-full w-full mx-auto my-auto">
          <Dots />
        </div>
      </div>
    </>
  );
};

export default dots;
