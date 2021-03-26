import React from "react";
import Dots from "../experiments/classDots";
import { NavBar } from "../lib";

const dots = () => {
  return (
    <>
      <div className="bg-red-800 h-screen">
        <NavBar />
        <Dots />
      </div>
    </>
  );
};

export default dots;
