// import { lerp } from "canvas-sketch-util/math";
// import random from "canvas-sketch-util/random";
// import palettes from "nice-color-palettes";

let mouseX = 0;
let mouseY = 0;
let ctx;

let width;
// let height;

export const code = (ctx, canvas, width, height, mouse) => {
  // ctx = ctx;
  // console.log(ctx);
  // width = width;
  // height = height;
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseClick);
  draw(ctx, width, height);
};

const degs = (degs) => {
  return (degs * Math.PI) / 180;
};

const onMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const onMouseClick = () => {
  console.log(ctx);
  console.log(width);
  // ctx.fillStyle = "red";
  // ctx.fillRect(0, 0, width, height);
  // ctx.fill();
  // console.log("here");
};

const draw = (ctx, width, height) => {
  // console.log("draw");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.fill();

  ctx.moveTo(mouseX, mouseY);
  ctx.arc(mouseX, mouseY, 10, 0, degs(360), false);
  ctx.fillStyle = "black";
  ctx.lineWidth = 5;
  ctx.fill();
  requestAnimationFrame(() => draw(ctx, width, height));
};

// export const updateMouse = (e) => {
// mouseX = e.clientX;
// mouseY = e.clientY;
// };
