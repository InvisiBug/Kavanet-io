import React from "react";
import { Header, Footer } from "../index";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-full">
        <Header />

        <main className="flex-grow overflow-y-auto  bg-red-200">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

{
  /* <div className="flex flex-col h-screen">
        <Header />

        <main className="flex-grow overflow-y-auto content-center  bg-red-200">
          {children}
        </main>

        <Footer />
      </div> */
}
