import Sheep from "./components/sheep.js";
import Collision from "./components/collision";
import Grass from "./components/grass.js";

export default class Sim {
  env = {
    width: window.innerWidth,
    height: window.innerHeight,
    // width: 350,
    // height: 350,
    bgColour: "rgba(25, 25, 25)",
    speed: 1,
    fps: 20,
    moveDistance: 1,
    gridSize: 25,
  };

  tickables = [];
  timestamp = 0;
  lastTimestamp = 0;
  sheep = [];

  constructor(canvasRef) {
    this.canvas = canvasRef;
    this.ctx = this.canvas.getContext("2d");

    this.setup();
  }

  setup = () => {
    this.resizeCanvas();
    this.drawBackground();

    // Initilize collision detection class
    this.collision = new Collision(this.env);

    this.grass = new Grass(this.ctx, this.env);
    this.tickables.push(this.grass);

    for (let i = 0; i < 10; i++) {
      const newSheep = new Sheep(this.ctx, this.env, this.grass);
      this.sheep.push(newSheep);
      this.tickables.push(newSheep);
    }

    // Start the sim
    this.sim();
  };

  sim = () => {
    this.timestamp = Date.now();

    if (!(this.timestamp - this.lastTimestamp < 1000 / this.env.fps)) {
      this.drawBackground();

      this.tickables.forEach((ticker) => {
        ticker.tick();
      });
      this.lastTimestamp = this.timestamp;
    }

    // this.collision.detect(this.sheep);
    requestAnimationFrame(() => this.sim());
  };

  drawBackground = () => {
    this.ctx.fillStyle = this.env.bgColour;
    this.ctx.fillRect(0, 0, this.env.width, this.env.height);
  };

  resizeCanvas = () => {
    this.canvas.width = this.env.width;
    this.canvas.height = this.env.height;
  };
}
