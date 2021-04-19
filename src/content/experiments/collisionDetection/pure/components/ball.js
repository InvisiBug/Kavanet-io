export default class Ball {
  constructor(
    ctx,
    options,
    pos = [Math.random() * options.width, Math.random() * options.height]
  ) {
    this.options = options;
    this.ctx = ctx;
    this.size = (Math.random() * options.width) / 10;

    this.width = this.size;
    this.height = this.size;
    this.mass = this.size;

    this.isColliding = false;

    this.colour = {
      standard: "white",
      collision: "red",
    };

    this.setPos(pos);

    this.vx =
      Math.floor(Math.random() * this.options.speed) - this.options.speed / 2;
    this.vy =
      Math.floor(Math.random() * this.options.speed) - this.options.speed / 2;

    // this.vx = 0;
    // this.vy = 0;

    this.draw();
  }

  setPos = (pos) => {
    console.log(pos);
    this.x = pos[0];
    this.y = pos[1];
    // this.x = 10;
    // this.y = 20;
  };

  setVelocities = (velocities) => {
    this.vx += velocities[0];
    this.vy += velocities[1];
  };

  getInfo = () => {
    return {
      x: this.x,
      y: this.y,
      vx: this.vx,
      vy: this.vy,
      mass: this.mass,
      heading: this.heading,
      width: this.size,
      height: this.size,
    };
  };

  tick = () => {
    // Check for collisions

    // Record the last x,y coords of the location reference
    this.prevX = this.x;
    this.prevY = this.y;

    // Update location
    this.x += this.vx;
    this.y += this.vy;
    this.heading = Math.atan2(this.vy, this.vx);

    this.collisionDetection();
    this.draw();

    this.setCollision(false); // Must reset as last draw action
  };

  draw = () => {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

    // Set colour based on collision event
    this.ctx.fillStyle = this.isColliding
      ? this.colour.collision
      : this.colour.standard;
    this.ctx.fill();
  };

  setCollision = (val) => {
    this.isColliding = val;
  };

  collisionDetection = (direction) => {
    // Set collisions to false ready for checking
    // this.setCollision(false);
    this.detectWalls();
    // this.detectObjects();
  };

  detectWalls = () => {
    // console.log(this.isColliding);
    // maybe move wall detection back in to here
    // if (this.isColliding === "x") {
    //   // if (this.x)
    //   this.vx = -this.vx;
    // } else if (this.isColliding === "y") {
    //   this.vy = -this.vy;
    // }
    // this.isColliding = false;

    if (this.x < this.width) {
      // Left Edge
      this.vx = -this.vx;
      this.x = this.width;
      this.isColliding = true;
    } else if (this.x + this.width > this.options.width) {
      // Right Edge
      this.vx = -this.vx;
      this.x = this.options.width - this.width;
      this.isColliding = true;
    } else if (this.y < this.height) {
      // Top Edge
      this.vy = -this.vy;
      this.y = this.height;
      this.isColliding = true;
    } else if (this.y + this.height > this.options.height) {
      // Bottom Edge
      this.vy = -this.vy;
      this.y = this.options.height - this.height;
      this.isColliding = true;
    }
  };

  detectObjects = () => {
    if (
      this.isColliding &&
      this.isColliding !== "x" &&
      this.isColliding !== "y"
    ) {
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
      //   this.isColliding = false;
    }
  };
}
