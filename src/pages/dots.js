import React from "react";
import Dots from "../experiments/dots";
import { NavBar } from "../lib";

const dots = () => {
  return (
    <>
      <div className="flex bg-gradient-to-r from-blue-800 to-green-800 h-screen">
        <div className="inset-0 bg-black opacity-20 absolute" />
        <NavBar />

        <div className="inset-0 absolute">
          <Dots />
        </div>
      </div>
    </>
  );
};

export default dots;
