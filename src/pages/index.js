import React from "react";
import { Layout, Experiments, Gallery } from "../UILibrary/";

const Site = () => {
  return (
    <>
      <Layout>
        <Gallery />
        <Experiments bgColour={"bg-indigo-500"} />
      </Layout>
    </>
  );
};

export default Site;
