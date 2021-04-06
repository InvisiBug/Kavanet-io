import React from "react";
import Dots from "../../content/experiments/dots";
import { NavBar, ExperimentsLayout } from "../../lib";

const dots = () => {
  return (
    <>
      <ExperimentsLayout
        darkLayer={true}
        background="bg-gradient-to-r from-blue-800 to-green-800"
      >
        <Dots />
      </ExperimentsLayout>
    </>
  );
};

export default dots;

{
  /* <div className="flex h-screen bg-gradient-to-r from-blue-800 to-green-800 ">
        <div className="inset-0 absolute bg-black opacity-20" />
        <NavBar />

        <div className="inset-0 absolute">
          <Dots />
        </div>
      </div> */
}
