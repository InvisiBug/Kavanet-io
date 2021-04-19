import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import {
  barImage,
  ballImage,
  wallImage,
} from "../../content/experiments/pixi/images";
import Sim from "../../content/experiments/collisionDetection/pure";

const Pong = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sim = new Sim(canvasRef.current);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Pong;
