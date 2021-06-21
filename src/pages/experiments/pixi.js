import React, { useEffect, useRef } from "react";
import { ExperimentsLayout } from "../../lib";
import Sim from "../../content/experiments/collisionDetection/pure";

const Pong = () => {
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

export default Pong;
