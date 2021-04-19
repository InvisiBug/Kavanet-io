import { Graphics } from "pixi.js";

export default class Ball {
  constructor(stage, options, pos = [options.width / 2, options.height / 2]) {
    this.options = options;
    this.stage = stage;
    this.size = 10;
    this.collision = false;

    this.init(this.size);
    this.setPos([
      Math.random() * options.width,
      Math.random() * options.height,
    ]);
    // this.vx = 0;
    // this.vy = this.options.speed;

    this.vx =
      Math.floor(Math.random() * this.options.speed) - this.options.speed / 2;
    this.vy =
      Math.floor(Math.random() * this.options.speed) - this.options.speed / 2;
  }

  init(size) {
    this.ball = new Graphics();
    this.ball.beginFill(0xffffff, 1);
    this.ball.drawCircle(0, 0, size); // TODO, not sure if the circle needs to be set in the top left
    this.stage.addChild(this.ball);
    this.colour = 0xffffff;
  }

  setPos = (pos) => {
    this.x = pos[0];
    this.y = pos[1];
  };

  getInfo = () => {
    return {
      x: this.x,
      y: this.y,
      width: this.size,
      height: this.size,
    };
  };

  tick = () => {
    // Check for collisions
    this.collisionDetection();

    // Record the last x,y coords of the location reference
    this.prevX = this.x;
    this.prevY = this.y;

    // Update location reference
    this.x += this.vx;
    this.y += this.vy;

    // Update ball location
    this.ball.x = this.x;
    this.ball.y = this.y;
  };

  setCollision = (val) => {
    this.collision = val;
  };

  collisionDetection = (direction) => {
    this.detectWalls();

    this.detectObjects();

    // Changing colour on collision works but i think its too fast to see the colour change
    // if (this.colour == 0xff0000) {
    //   console.log("here");
    //   this.colour = 0xffffff;
    //   this.ball.beginFill(0xffffff, 1);
    //   this.ball.drawCircle(0, 0, this.size);
    // }
  };

  detectWalls = () => {
    if (this.collision === "x") {
      this.vx = -this.vx;
    } else if (this.collision === "y") {
      this.vy = -this.vy;
    }
    this.setCollision(false);
  };

  detectObjects = () => {
    if (this.collision && this.collision !== "x" && this.collision !== "y") {
      // if (this.colour == 0xffffff) {
      //   console.log("red");
      //   this.colour = 0xff0000;
      //   this.ball.beginFill(0xff0000, 1);
      //   this.ball.drawCircle(0, 0, this.size);
      // }
      // if (this.prevX < this.ball.x || this.prevX > 0) {
      //   this.vx = -this.vx;
      // }
      // if (this.prevY < this.ball.y || this.prevY > 0) {
      //   this.vy = -this.vy;
      // }
      // Check collision with walls
      // if (this.x < 0 || this.x > this.options.width) {
      //   this.vx = -this.vx;
      // }
      // if (this.y < 0 || this.y > this.options.height) {
      //   this.vy = -this.vy;
      // }
      //   this.collision = false;
    }
  };
}
