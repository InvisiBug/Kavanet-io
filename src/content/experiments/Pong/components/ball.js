import { Graphics } from "pixi.js";

export default class Ball {
  constructor(stage, options, pos = [options.width / 2, options.height / 2]) {
    this.options = options;
    this.stage = stage;
    this.size = 10;
    this.collision = false;

    this.init(this.size);
    this.setPos(pos);
    this.vx = 0;
    this.vy = this.options.speed;
  }

  init(size) {
    this.ball = new Graphics();
    this.ball.beginFill(0xffffff, 1);
    this.ball.drawCircle(0, 0, size); // TODO, not sure if the circle needs to be set in the top left
    this.stage.addChild(this.ball);
  }

  setPos = (pos) => {
    this.ball.x = pos[0];
    this.ball.y = pos[1];
  };

  getInfo = () => {
    return {
      x: this.ball.x,
      y: this.ball.y,
      width: this.size,
      height: this.size,
    };
  };

  tick = () => {
    // Check for collisions
    this.collisionDetection();

    // Record the last x,y coords of the ball
    this.prevX = this.ball.x;
    this.prevY = this.ball.y;

    // Update ball location
    this.ball.x += this.vx;
    this.ball.y += this.vy;
  };

  setCollision = (val) => {
    this.collision = val;
  };

  collisionDetection = () => {
    if (this.collision) {
      // if (this.prevX < this.ball.x || this.prevX > 0) {
      this.vx = -this.vx;
      // }
      // if (this.prevY < this.ball.y || this.prevY > 0) {
      this.vy = -this.vy;
      // }

      this.collision = false;
    }
  };
}
