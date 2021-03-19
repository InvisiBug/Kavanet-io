import React from "react";
// import Header from "./header";
// import Footer from "./footer";
import { Header, Footer } from "./index";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />

        <main className="flex-grow overflow-y-auto  p-10 ">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
