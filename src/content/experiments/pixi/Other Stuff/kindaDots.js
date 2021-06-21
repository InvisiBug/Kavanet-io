import { Sprite, Graphics } from "pixi.js";

export default class Ball {
  constructor(stage, options) {
    this.options = options;

    this.ball = new Graphics();
    this.ball.beginFill(0xffffff, 1);
    this.ball.drawCircle(0, 0, 1);

    stage.addChild(this.ball);

    // this.vx = Math.floor(Math.random() * options.speed) - options.speed / 2; // Star velocities
    // this.vy = Math.floor(Math.random() * options.speed) - options.speed / 2;

    this.vx = this.randBetween(-options.speed / 2, options.speed);
    this.vy = this.randBetween(-options.speed / 2, options.speed);

    console.log("Velocities", this.vx, this.vy);
    // Math.floor(Math.random() * (max - min)) + min;
  }

  setInitialPosition = (xPos, yPos) => {
    this.ball.x = xPos;
    this.ball.y = yPos;
  };

  // getLocation() {
  //   return {
  //     x: this.sprite.x,
  //     y: this.sprite.y,
  //     width: this.sprite.width,
  //     height: this.sprite.height,
  //   };
  // }

  tick = () => {
    this.collisionDetection();
    this.ball.x += this.vx;
    this.ball.y += this.vy;
  };

  randBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  collisionDetection = () => {
    if (
      this.ball.x + this.ball.width / 2 > this.options.width ||
      this.ball.x - this.ball.width / 2 < 0
    ) {
      this.vx = -this.vx;
    }
    if (
      this.ball.y + this.ball.height > this.options.height ||
      this.ball.y - this.ball.height < 0
    ) {
      this.vy = -this.vy;
    }
  };
}
