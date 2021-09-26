import React, { useEffect, useRef } from "react";
// import Sim from "../../content/experiments/batsim";
import Sim from "../../Simulations/src/batsim/index";
import { ExperimentsLayout } from "../../lib";

const BatSim = () => {
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

export default BatSim;
