import React from "react";
import { NavBar } from "..";

// currently making a page template

const Page = ({ children, className = "" }) => {
  return (
    <div className={className}>
      {/* <div className="flex h-screen items-center content-center"> */}
      <NavBar />
      <div className="container flex flex-wrap items-center mx-auto pt-32 w-full h-full dark:bg-gray-900 border-2 border-blue-200 md:max-w-7xl">
        {children}
      </div>
    </div>
  );
};

export default Page;
