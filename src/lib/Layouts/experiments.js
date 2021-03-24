import React from "react";
import { Header, Footer } from "../index";

const ExperimentsLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="bg-gray-200 flex-grow">{children}</main>
    </div>
  );
};

export default ExperimentsLayout;
