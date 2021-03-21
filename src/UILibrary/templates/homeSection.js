import React from "react";

const HomeSection = ({ children, className }) => {
  return (
    <>
      <div className={`flex flex-col ${className} my-5 mx-40 rounded-lg`}>
        {children}
      </div>
    </>
  );
};

export default HomeSection;
