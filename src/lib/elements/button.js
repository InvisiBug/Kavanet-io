import React from "react";
import { Link } from "gatsby";

const Button = ({ children, to = "", className = "", clickable = "true" }) => {
  return (
    <>
      <Link
        className={`${className} flex text-center justify-center w-20 h-10 bg-gray-800 text-white items-center rounded-lg`}
        to={to}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
