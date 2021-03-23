import React from "react";
import { NavButton } from "..";

const NavBar = () => {
  return (
    <>
      <div className="container absolute top-0 left-0 right-0 z-20 mx-auto p-10 ">
        <div className="container flex md:max-w-5xl  mx-auto justify-between bg-gray-800 rounded-2xl shadow-lg">
          <NavButton to="/">Kavanet.io</NavButton>

          <div className="flex justify-around ">
            <NavButton to="/projects">Projects</NavButton>
            <NavButton to="/experiments">Experiments</NavButton>
          </div>
          <div className="flex justify-around ">
            <NavButton to="/me">Me</NavButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
