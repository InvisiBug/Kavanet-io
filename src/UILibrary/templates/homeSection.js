import React from "react";

const HomeSection = ({ children, className }) => {
  return (
    <>
      <div
        className={`flex flex-col ${className} my-5 mx-auto w-4/5 rounded-lg`}
      >
        {children}
      </div>
    </>
  );
};

export default HomeSection;
