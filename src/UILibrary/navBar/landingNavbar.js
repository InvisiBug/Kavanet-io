import React from "react";
import { NewNavButton, NavButton } from "..";

const NavBar = () => {
  return (
    <>
      <div className="container absolute top-0 left-0 right-0 z-20 mx-auto p-10 border-2 border-black">
        <div className="container flex bg-red-600">
          <NewNavButton to="/">Kavanet.io</NewNavButton>

          <div className="flex justify-around ">
            <NewNavButton to="/about">About</NewNavButton>
            <NewNavButton to="/dots">Dots</NewNavButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
