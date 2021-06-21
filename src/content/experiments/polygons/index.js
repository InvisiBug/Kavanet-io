import Dots from "./components/dots";

export default class Sim {
  env = {
    width: window.innerWidth,
    height: window.innerHeight,
    marginX: (window.innerWidth - window.innerHeight) / 2,
    // marginX: window.innerHeight,
    // width: 350,
    // height: 350,
    bgColour: "rgba(25, 25, 25)",
    speed: 2,
    fps: 60,
    moveDistance: 1,
    margin: 5,
    gridSize: 25,
    // xDots: 10,
    get xDots() {
      return this.width / (this.height / this.yDots);
      // return 2;
    },
    // yDots: (this.width / this.xDots) * this.height,
    // yDots: 20,
    // yDots: this.xDots,
    // get yDots() {
    //   console.log((this.height / this.yDots) * window.innerWidth);
    //   return 2;
    //   // return 2;
    // },
    yDots: 5,
  };

  tickables = [];
  timestamp = 0;
  lastTimestamp = 0;
  sheep = [];

  constructor(canvasRef) {
    this.canvas = canvasRef;
    this.ctx = this.canvas.getContext("2d");

    this.dots = new Dots(this.ctx, this.env);

    this.tickables.push(this.dots);

    this.init();
  }

  init = () => {
    this.resizeCanvas();
    this.drawBackground();

    this.run();
  };

  run = () => {
    this.timestamp = Date.now();

    if (!(this.timestamp - this.lastTimestamp < 1000 / this.env.fps)) {
      this.drawBackground();

      // console.log(this.tickables);

      this.tickables.forEach((ticker) => {
        ticker.tick();
      });
      this.lastTimestamp = this.timestamp;
    }

    requestAnimationFrame(() => this.run());
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
