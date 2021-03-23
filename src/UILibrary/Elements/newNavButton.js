import React from "react";
import { Link } from "gatsby";

const NavButton = ({ to, children }) => {
  return (
    <>
      <Link
        to={to}
        className="text-lg uppercase font-medium mx-3 px-2 text-white cursor-pointer hover:text-black hover:bg-gray-200 rounded-lg my-2"
        activeClassName="bg-gray-500 shadow-md"
      >
        {children}
      </Link>
    </>
  );
};

export default NavButton;
