import React, { useEffect, useRef } from "react";
import Sim from "../../content/experiments/sheepsim";
import { ExperimentsLayout } from "../../lib";

const Pure = () => {
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

export default Pure;
