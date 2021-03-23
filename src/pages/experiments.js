import React from "react";

import { NavBar } from "../UILibrary";
import Dots from "../experiments/dots";

const Experiments = () => {
  return (
    <>
      <div className="bg-gray-700 overflow-hidden h-screen">
        {/* <img
          src="https://blendswap.com/static/blendImages/2016/10/12/Blend/86275/54a27662881ee2087381e8c6f19a9922.jpg"
          className="absolute h-full w-full object-cover"
        /> */}
        <NavBar />
        <Dots />
      </div>
    </>
  );
};

export default Experiments;
