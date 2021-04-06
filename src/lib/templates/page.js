import React from "react";
import { NavBar } from "..";

// currently making a page template

const Page = ({ imgSrc, children, className = "" }) => {
  return (
    <div className={className}>
      {/* <div className="flex h-screen items-center content-center"> */}
      <NavBar />
      <div className="flex flex-wrap container mx-auto h-full w-full pt-32  border-blue-200">
        {children}
      </div>
    </div>
  );
};

export default Page;
