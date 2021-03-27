import React from "react";
import { Link } from "gatsby";

const NavButton = ({
  to,
  children,
  activeStyles = true,
  hoverStyles = true,
}) => {
  return (
    <>
      <Link
        to={to}
        className={`text-lg uppercase font-medium mx-3 px-2 text-white cursor-pointer rounded-lg my-2 ${
          hoverStyles ? "hover:text-black hover:bg-gray-200" : null
        }`}
        activeClassName={activeStyles ? "bg-gray-500 shadow-md" : null}
      >
        {children}
      </Link>
    </>
  );
};

export default NavButton;
