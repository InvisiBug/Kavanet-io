import Ball from "./components/ball.js";
import Collision from "./components/collision";

export default class Sim {
  options = {
    width: window.innerWidth,
    height: window.innerHeight,
    // width: 350,
    // height: 350,
    bgColour: "rgba(25, 25, 25)",
    speed: 5,
  };

  tickables = [];
  balls = [];

  constructor(canvasRef) {
    this.canvas = canvasRef;
    this.ctx = this.canvas.getContext("2d");

    this.setup();
  }

  setup = () => {
    this.resizeCanvas();
    this.drawBackground();

    // Initilize collision detection class
    this.collision = new Collision(this.options);

    // Create array of balls
    // for (let i = 0; i < 2; i++) {
    // this.balls.push(
    //   new Ball(this.ctx, this.options, [
    //     this.options.width / 2,
    //     this.options.height / 2,
    //   ])
    // );

    // this.balls.push(
    //   new Ball(this.ctx, this.options, [
    //     this.options.width / 2 + 5,
    //     this.options.height / 2 + 5,
    //   ])
    // );

    for (let i = 0; i < 10; i++) {
      this.balls.push(new Ball(this.ctx, this.options));
    }

    // Start the sim
    this.sim();
  };

  sim = () => {
    // Draw the canvas background
    this.drawBackground();

    this.balls.forEach((ticker) => {
      ticker.tick();
    });

    this.collision.detect(this.balls);
    requestAnimationFrame(() => this.sim());
  };

  drawBackground = () => {
    this.ctx.fillStyle = this.options.bgColour;
    this.ctx.fillRect(0, 0, this.options.width, this.options.height);
  };

  resizeCanvas = () => {
    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;
  };
}
