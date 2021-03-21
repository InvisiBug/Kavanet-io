import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <>
      <header className="w-full bg-gradient-to-r from-blue-500  to-green-500 pl-10 pr-10 text-primary">
        <div className="flex justify-between max-w-4xl p-5 mx-auto text-xl">
          <Link to="/">
            <h1 className=" text-lg">Kavanet.io</h1>
          </Link>
          <div className="flex justify-around ">
            <Link to="/about" className="text-white ">
              About
            </Link>
            <Link to="/dots" className="ml-5">
              Dots
            </Link>
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
