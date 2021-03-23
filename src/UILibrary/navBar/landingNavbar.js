import React from "react";
import { NavButton, NavButton } from "..";

const NavBar = () => {
  return (
    <>
      <div className="container absolute top-0 left-0 right-0 z-20 mx-auto p-10 border-2 border-black">
        <div className="container flex bg-red-600">
          <NavButton to="/">Kavanet.io</NavButton>

          <div className="flex justify-around ">
            <NavButton to="/about">About</NavButton>
            <NavButton to="/dots">Dots</NavButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
