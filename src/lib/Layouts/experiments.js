import React from "react";

const ExperimentsLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <main className="bg-gray-200 flex-grow">{children}</main>
    </div>
  );
};

export default ExperimentsLayout;
