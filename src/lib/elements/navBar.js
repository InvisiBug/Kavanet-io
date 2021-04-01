import React from "react";
import { NavButton } from "..";

const NavBar = () => {
  return (
    <>
      <div className="container absolute top-0 left-0 right-0 z-50 mx-auto p-10 ">
        <div className="container flex md:max-w-5xl  mx-auto justify-between bg-gray-800 rounded-2xl shadow-lg">
          <NavButton activeStyles={false} hoverStyles={false} to="/home">
            Kavanet.io
          </NavButton>

          <div className="flex justify-around mr-24">
            <NavButton to="/projects/projects">Projects</NavButton>
            <NavButton to="/experiments/experiments">Experiments</NavButton>
            {/* <NavButton to="/classDots">Dots</NavButton> */}
          </div>

          <div className="flex justify-around ">
            {/* <NavButton to="/me">Me</NavButton>
            <NavButton to="/me">Me</NavButton> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
