import React from "react";
import { NavBar } from "..";

// currently making a page template

const Page = ({ imgSrc, children, className = "" }) => {
  return (
    <div className={className}>
      {/* <div className="flex h-screen items-center content-center"> */}
      <NavBar />
      <div className="container flex md:max-w-7xl items-center dark:bg-gray-900 flex-wrap mx-auto h-full w-full pt-32 border-2 border-blue-200">
        {children}
      </div>
    </div>
  );
};

export default Page;
