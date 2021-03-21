import React from "react";
import { NavButton } from "../index";

const Header = () => {
  return (
    <>
      <header className="w-full bg-gradient-to-r from-blue-500  to-green-500 pl-10 pr-10 text-primary">
        <div className="flex justify-between max-w-4xl p-5 mx-auto text-xl">
          <NavButton to="/">Kavanet.io</NavButton>
          <div className="flex justify-around ">
            <NavButton to="/about">About</NavButton>
            <NavButton to="/dots">Dots</NavButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
