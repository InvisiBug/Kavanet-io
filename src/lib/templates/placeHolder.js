import React from "react";
import { NavBar } from "..";

const PlaceHolder = ({ imgSrc, children }) => {
  return (
    <>
      <NavBar />
      <div className="flex h-screen items-center content-center">
        <img
          className="absolute h-full w-full object-cover"
          src={imgSrc}
          alt="2"
        ></img>
        <div className="inset-0 bg-black opacity-20 absolute" />
        <h1 className="z-10 font-extrabold text-7xl text-center mx-auto sm:text-8xl text-white leading-tight text-shadow-lg">
          {children}
        </h1>
      </div>
    </>
  );
};

export default PlaceHolder;
