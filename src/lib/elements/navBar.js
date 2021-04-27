import React from "react";
import { NavButton } from "..";

const NavBar = () => {
  return (
    <>
      <div className="container absolute z-50 left-0 right-0 top-0 mx-auto p-10">
        <div className="container flex justify-center mx-auto bg-gray-800 bg-opacity-90 rounded-2xl shadow-lg sm:justify-between md:max-w-5xl">
          <NavButton activeStyles={false} hoverStyles={false} to="/home">
            Kavanet.io
          </NavButton>

          <div className="hidden justify-around mr-24 sm:flex">
            <NavButton to="/projects/projects">Projects</NavButton>
            <NavButton to="/experiments/experiments">Experiments</NavButton>
            {/* <NavButton to="/classDots">Dots</NavButton> */}
          </div>

          <div className="flex justify-around">{/* <NavButton to="/me">Me</NavButton>
            <NavButton to="/me">Me</NavButton> */}</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
