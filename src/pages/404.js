import React from "react";
import { Link } from "gatsby";
import { NavBar } from "../lib";
import bg1 from "../images/bg1.png";

const Index = () => {
  return (
    <>
      <div className="bg-gray-700 overflow-hidden h-screen">
        <img
          src={bg1}
          alt="1"
          className="absolute h-full w-full object-cover"
        />
        <div className="inset-0 bg-black opacity-20 absolute" />

        <NavBar />
        <div className="container mx-auto h-full relative z-10 flex items-center">
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center  sm:text-8xl text-white leading-tight mt-4 text-shadow-lg">
              Page not found
            </h1>
            <Link
              to="/"
              className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10 rounded-lg shadow"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
