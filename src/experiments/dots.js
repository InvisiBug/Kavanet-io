import React, { useRef, useEffect } from "react";
// import { distance } from "./helpers";

const Dots = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const ctxRef = useRef(null);

  function draw() {
    const { current: canvas } = canvasRef;
    const { current: ctx } = ctxRef;
    canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);

    ctx.font = "28px serif";
    ctx.fillText("Hello world", 0, 0);
  }

  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");
    draw();
  }, [canvasRef]);

  useEffect(() => {
    console.log("Loading...");
    const handleResize = () => {
      draw();
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <>
    <div ref={wrapperRef} className=" h-full w-full">
      <canvas ref={canvasRef} />
    </div>
    // </>
  );
};

export default Dots;
