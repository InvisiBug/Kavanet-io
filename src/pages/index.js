import React from "react";
import { Layout, Experiments, Gallery } from "../UILibrary/";

const Site = () => {
  return (
    <>
      <Layout>
        <Experiments bgColour={"bg-indigo-500"} />
        <Gallery bgColour={"bg-green-300"} />
      </Layout>
    </>
  );
};

export default Site;
