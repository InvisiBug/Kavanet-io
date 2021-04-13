import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import {
  barImage,
  ballImage,
  wallImage,
} from "../../content/experiments/pixi/images";
import Game from "../../content/experiments/pixi";

const Pong = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const game = new Game(canvasRef.current);
    game.setup();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Pong;
