import React from "react";
import { NavBar } from "..";

const ExperimentsLayout = ({
  children,
  background = "",
  darkLayer = false,
}) => {
  return (
    <div className={`flex h-screen ${background}`}>
      <NavBar />
      {darkLayer && <div className="inset-0 absolute bg-black opacity-20" />}

      <div className="inset-0 absolute border-black">{children}</div>
    </div>
  );
};

export default ExperimentsLayout;
