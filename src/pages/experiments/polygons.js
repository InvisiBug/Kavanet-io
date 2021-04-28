import React, { useEffect, useRef } from "react";
import Sim from "../../content/experiments/polygons";
import { ExperimentsLayout } from "../../lib";

const Polygons = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    new Sim(canvasRef.current);
  }, []);

  return (
    <>
      <ExperimentsLayout>
        <canvas ref={canvasRef} />
      </ExperimentsLayout>
    </>
  );
};

export default Polygons;
