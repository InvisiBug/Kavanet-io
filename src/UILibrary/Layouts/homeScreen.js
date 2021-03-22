import React from "react";
import { Header, Footer } from "../index";

const HomeScreenLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-grow overflow-y-auto content-center  bg-red-200">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default HomeScreenLayout;
