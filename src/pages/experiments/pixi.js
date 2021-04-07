import React, { useEffect, useRef } from "react";
import { Application, Loader } from "pixi.js";

const Pixie = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let app = new Application({
      view: canvasRef.current,
      width: 256,
      height: 256,
    });

    app.renderer.backgroundColor = 0xccc;

    console.log(app.renderer.view.height);
    // app.renderer.resize(512, 512);

    /* 
      This is makes the app full screen
      is good for now but wont work wen fully integrated
      in to kavanet
    */
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Pixie;
