import React, { useEffect, useRef } from "react";
import Sim from "../../content/experiments/collisionDetection/pure";

const Pong = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    new Sim(canvasRef.current);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Pong;
