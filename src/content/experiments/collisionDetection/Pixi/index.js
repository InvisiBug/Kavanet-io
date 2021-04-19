import * as PIXI from "pixi.js";
import Ball from "./components/ball.js";
import Collision from "./components/collision";

export default class Game {
  options = {
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 150,
    height: 150,
    speed: 10,
  };
  tickables = [];
  balls = [];

  constructor(canvas) {
    this.app = new PIXI.Application({
      view: canvas,
      width: this.options.width,
      height: this.options.height,
      backgroundColor: 0x272627,
    });

    this.setup();
  }

  setup = () => {
    // Initilize collision detection class
    this.collision = new Collision(this.options);

    // Create array of balls
    for (let i = 0; i < 2; i++) {
      this.balls.push(new Ball(this.app.stage, this.options));
    }

    // Start the sim
    this.app.ticker.add((delta) => this.sim(delta));
  };

  sim = (delta) => {
    // this.ball.x += 1;
    this.balls.forEach((ticker) => {
      ticker.tick();
    });

    this.collision.detect(this.balls);
  };
}
