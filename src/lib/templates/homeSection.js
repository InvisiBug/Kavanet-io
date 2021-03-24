import React from "react";

const HomeSection = ({ children, className }) => {
  return (
    <>
      <div
        className={`flex flex-col ${className} my-5 mx-auto w-full rounded-lg shadow-xl`}
      >
        {children}
      </div>
    </>
  );
};

export default HomeSection;
