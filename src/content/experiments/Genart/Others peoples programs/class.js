import { lerp } from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";

export default class Genart {
  containerSize;

  width;
  height;

  canvas;
  canvasRef;

  wrapper;
  wrapperRef;

  ctx;

  constructor(wrapperRef, canvasRef) {
    this.canvas = canvasRef.current;
    this.canvasRef = canvasRef;

    this.wrapper = wrapperRef.current;
    this.wrapperRef = wrapperRef;

    this.ctx = this.canvas.getContext("2d");

    this.containerSize = [this.wrapper.clientWidth, this.wrapper.clientHeight];
    [this.width, this.height] = [
      this.wrapper.clientWidth,
      this.wrapper.clientHeight,
    ];

    random.setSeed(random.getRandomSeed());
    console.log(random.getSeed());
  }

  init(test = false) {
    this.resizeCanvas();
    if (test) {
      this.ctx.fillStyle = "orange";
      this.ctx.fillRect(0, 0, this.width, this.height);
    } else {
      this.run(this.ctx, this.width, this.height);
    }
  }

  palette = random.pick(palettes).slice(0, 3);
  points = this.createGrid().filter(() => random.value() > 0.5);
  margin = 100;

  createGrid() {
    const points = [];
    const count = 50;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1); // Deals with low count numbers
        const v = count <= 1 ? 0.5 : y / (count - 1);

        const radius = Math.abs(random.noise2D(u, v) * 0.025);
        // const rotation = random.noise2D(u, v);

        points.push({
          position: [u, v],
          // radius: Math.abs(random.gaussian() * 0.01),
          radius,
          // rotation,
          colour: random.pick(this.palette),
        });
      }
    }
    return points;
  }

  resizeCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  run(ctx, width, height) {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    this.points.forEach(({ position: [u, v], radius, colour, rotation }) => {
      const x = lerp(this.margin, width - this.margin, u);
      const y = lerp(this.margin, height - this.margin, v);

      ctx.beginPath();
      ctx.arc(x, y, radius * width, 0, this.degs(360), false);
      ctx.fillStyle = colour;
      ctx.lineWidth = 5;
      ctx.fill();
    });
  }

  degs(degs) {
    return (degs * Math.PI) / 180;
  }
}
