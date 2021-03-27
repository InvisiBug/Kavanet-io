import React from "react";
import { NavBar } from "..";

// currently making a page template

const Page = ({ imgSrc, children }) => {
  return (
    <>
      {/* <div className="flex h-screen items-center content-center"> */}
      <NavBar />
      <div className="h-full w-full pt-32">{children}</div>
    </>
  );
};

export default Page;

{
  /* <img
          className="absolute h-full w-full object-cover"
          src={imgSrc}
          alt="2"
        ></img>
        <div className="inset-0 bg-black opacity-20 absolute" />
        <h1 className="z-10 font-extrabold text-7xl text-center mx-auto sm:text-8xl text-white leading-tight text-shadow-lg">
          {children}
        </h1> */
}
