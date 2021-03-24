import React from "react";
import { Navbar, Footer } from "../index";

const HomeScreenLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <main className="flex-grow overflow-y-auto content-center">
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default HomeScreenLayout;
