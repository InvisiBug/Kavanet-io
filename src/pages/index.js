import React from "react";
import { Link } from "gatsby";
import { NavBar } from "../lib";
import bg1 from "../images/bg1.png";

const Index = () => {
  return (
    <>
      <div className="h-screen bg-gray-700 overflow-hidden">
        <img src={bg1} alt="index" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-10" />
        <header>
          <NavBar />
        </header>
        <div className="container relative z-10 flex items-center mx-auto h-full">
          <div className="relative z-10 flex flex-col items-center w-full">
            <h1 className="text-shadow-lg mt-4 text-center text-white text-7xl font-extrabold leading-tight sm:text-8xl">Kavanet.io</h1>
            <Link to="/home" className="mt-10 px-4 py-3 text-white text-lg font-bold bg-gray-800 hover:bg-gray-900 rounded-lg shadow uppercase">
              Enter
            </Link>
            <Link
              to="grafana.kavanet.io"
              className="mt-10 px-4 py-3 text-white text-lg font-bold bg-gray-800 hover:bg-gray-900 rounded-lg shadow uppercase"
            >
              Grafana
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
