import * as PIXI from "pixi.js";
import { barImage, ballImage, wallImage } from "./images";
import Ball from "./ball.js";
import Wall from "./wall.js";
import Paddle from "./paddle";

export default class Game {
  options = {
    width: window.innerWidth,
    height: window.innerHeight,
    speed: 5,
  };

  constructor(canvas) {
    this.app = new PIXI.Application({
      view: canvas,
      width: this.options.width,
      height: this.options.height,
      backgroundColor: 0x272627,
    });

    this.ball = new Ball(this.app.stage, this.options);
    this.topWall = new Wall(this.app.stage, this.options, "top");
    this.bottomWall = new Wall(this.app.stage, this.options, "bottom");

    this.player = new Paddle(this.app.stage, this.options, "player");

    this.setup();
  }

  setup = () => {
    this.app.ticker.add((delta) => this.game(delta));
  };

  game = (delta) => {
    // this.ball.x += 1;
    this.ball.tick();
    // this.ball.tick();
    // console.log(performance.now());

    this.collisionDetection(this.ball);
  };

  collisionDetection = (items) => {
    // // console.log(items);

    // items.forEach((item) => {
    //   console.log(item.getInfo());
    // });

    const item = items.getInfo();

    if (
      item.x + item.size / 2 > this.options.width ||
      item.x - item.size / 2 < 0
    ) {
      items.setCollision(true);
    }
    if (item.y + item.size > this.options.height || item.y - item.size < 0) {
      items.setCollision(true);
    }
  };
}
