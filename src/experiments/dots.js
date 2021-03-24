import React, { useRef, useLayoutEffect } from "react";
// import { distance } from "./helpers";

const Dots = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  const active = true;

  useLayoutEffect(() => {
    if (active) {
      const { current: wrapper } = wrapperRef; // wrapperRef object has a current property, this extracts is and saves result to "wrapper"
      const { current: canvas } = canvasRef;

      const ctx = canvas.getContext("2d");
      canvas.width = wrapper.clientWidth;
      canvas.height = wrapper.clientHeight;

      var stars = []; // Array that contains the stars
      // var total = (canvas.width * canvas.height) / 20000; // Number of stars
      var total = 75;
      var speed = 50; // Speed of start

      var starColour = "white";
      var lineColour = "white";
      var lineLength = 100;
      var lineWidth = 0.05;

      // Create array of stars
      for (var i = 0; i < total; i++) {
        stars.push({
          x: Math.random() * canvas.width, // Positions
          y: Math.random() * canvas.height,

          radius: Math.random() * 1 + 1, // Star sizes

          vx: Math.floor(Math.random() * speed) - speed / 2, // Star velocities
          vy: Math.floor(Math.random() * speed) - speed / 2,
        });
      }

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "lighter";

        // Draw stars
        for (var i = 0; i < total; i++) {
          ctx.beginPath();
          ctx.arc(stars[i].x, stars[i].y, stars[i].radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = starColour;
          ctx.stroke();
        }

        ctx.beginPath();
        for (var a = 0; a < total; a++) {
          ctx.moveTo(stars[a].x, stars[a].y); // Move to a star

          for (var j = 0; j < total; j++) {
            if (distance(stars[a], stars[j]) < lineLength) {
              ctx.lineTo(stars[j].x, stars[j].y);
            }
          }
        }

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColour;
        ctx.stroke();
      };

      function update() {
        for (var i = 0; i < total; i++) {
          stars[i].x += stars[i].vx / 100;
          stars[i].y += stars[i].vy / 100;

          if (stars[i].x < 0 || stars[i].x > canvas.width)
            stars[i].vx = -stars[i].vx;
          if (stars[i].y < 0 || stars[i].y > canvas.height)
            stars[i].vy = -stars[i].vy;
        }
      }

      function start() {
        draw();
        update();
        requestAnimationFrame(start);
      }
      start();
    }
  });

  return (
    <>
      <div className="flex h-full">
        {/* <div className="bg-green-400 hidden sm:flex md:w-10">hello</div> */}
        <div ref={wrapperRef} className=" flex-grow bg-gray-700 no-scrollbar">
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default Dots;

const distance = (point1, point2) => {
  var xs = point2.x - point1.x;
  var ys = point2.y - point1.y;

  xs = xs * xs;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
};

// const canvasRef = useRef(null);
// const wrapperRef = useRef(null);
// const ctxRef = useRef(null);

// function draw() {
// const { current: canvas } = canvasRef;
// const { current: ctx } = ctxRef;

// canvas.width = wrapper.clientWidth;
// canvas.height = wrapper.clientHeight;
