import React from "react";
import { NewNavButton, NavButton } from ".";

const NavBar = () => {
  return (
    <>
      <div className="container absolute top-0 left-0 right-0 z-20 mx-auto p-10 ">
        <div className="container flex justify-between bg-gray-800 rounded-2xl">
          <NewNavButton to="/">Kavanet.io</NewNavButton>

          <div className="flex justify-around ">
            <NewNavButton to="/projects">Projects</NewNavButton>
            <NewNavButton to="/experiments">Experiments</NewNavButton>
          </div>
          <div className="flex justify-around ">
            <NewNavButton to="/me">Me</NewNavButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
