import React from "react";
import { Link } from "gatsby";

const NavButton = ({ to, children }) => {
  return (
    <>
      <Link to={to} className="text-nav mx-2">
        {children}
      </Link>
    </>
  );
};

export default NavButton;
