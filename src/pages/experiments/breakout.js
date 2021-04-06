import React from "react";
import { NavBar } from "../../lib";
import Breakout from "../../content/experiments/Breakout";

const breakout = () => {
  return (
    <>
      <div className="h-screen">
        <div className="inset-0 bg-black opacity-20 absolute border-2 border-white" />
        <NavBar />

        <div className="inset-0 absolute">
          <Breakout />
        </div>
      </div>
    </>
  );
};

export default breakout;
