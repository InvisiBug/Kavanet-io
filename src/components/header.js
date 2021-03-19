import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <>
      <header className="w-full bg-gradient-to-r from-blue-500  to-green-500 pl-10 pr-10 text-primary">
        <div className="flex justify-between max-w-4xl p-2 mx-auto md:p">
          <Link to="/">
            <h1 className="text-white text-lg">Kavanet.io</h1>
          </Link>
          <div className="flex justify-around w-1/5">
            <Link to="/about" className="text-white">
              About
            </Link>
            <Link to="/dots">Dots</Link>
            <Link to="/about" className="text-white">
              Other Link
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
