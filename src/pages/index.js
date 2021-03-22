import React from "react";
import { HomeScreenLayout, Experiments, Gallery } from "../UILibrary/";

const Site = () => {
  return (
    <>
      <HomeScreenLayout>
        <Experiments bgColour={"bg-indigo-500"} />
        <Gallery bgColour={"bg-green-300"} />
      </HomeScreenLayout>
    </>
  );
};

export default Site;
