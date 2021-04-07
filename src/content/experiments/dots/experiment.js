// import random from "canvas-sketch-util/random";
// import * as dat from "dat.gui";

// const gui = new dat.GUI();
// gui.domElement.id = "gui";

var system = {
  numStars: 50,
  speed: 40,
};
// var f_b = gui.addFolder("Variables");
// f_b.open();
// f_b.add(system, "numStars", 0, 100);
// f_b.add(system, "speed", 30, 100);

export default class Experiment {
  ctx;
  width;
  height;

  starColour = "white";
  lineColour = "white";

  lineLength = 100;
  lineWidth = 0.05;

  stars = [];

  // Number of stars now comes from the container size
  constructor(ctx, width, height, speed = 40) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    // Make array of stars
    for (var i = 0; i < width * 0.11; i++) {
      this.stars.push({
        x: Math.random() * width, // Positions
        y: Math.random() * height,
        // y: random.gaussian(),

        radius: 2, // Star sizes
        // radius: Math.abs(random.noise1D(i) * 5),

        vx: Math.floor(Math.random() * system.speed) - system.speed / 2, // Star velocities
        vy: Math.floor(Math.random() * system.speed) - system.speed / 2,
        // vx: random.noise1D(i) * 100, // Star velocities
        // vy: random.noise1D(i) * 100,
      });
    }

    this.run(); // Start the simulation
  }

  run = () => {
    this.draw();
    this.update();
    requestAnimationFrame(() => this.run());
  };

  draw = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.globalCompositeOperation = "lighter";

    // Draw stars
    for (var i = 0; i < this.stars.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(
        this.stars[i].x,
        this.stars[i].y,
        this.stars[i].radius,
        0,
        Math.PI * 2
      );
      this.ctx.fillStyle = this.starColour;
      this.ctx.fill();
      // this.ctx.stroke();
    }

    this.ctx.beginPath();
    for (var a = 0; a < this.stars.length; a++) {
      this.ctx.moveTo(this.stars[a].x, this.stars[a].y); // Move to a star

      for (var j = 0; j < this.stars.length; j++) {
        if (this.distance(this.stars[a], this.stars[j]) < this.lineLength) {
          this.ctx.lineTo(this.stars[j].x, this.stars[j].y);
        }
      }
    }

    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = this.lineColour;
    this.ctx.stroke();
  };

  distance = (point1, point2) => {
    var xs = point2.x - point1.x;
    var ys = point2.y - point1.y;

    xs = xs * xs;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
  };

  update() {
    for (var i = 0; i < this.stars.length; i++) {
      this.stars[i].x += this.stars[i].vx / 100;
      this.stars[i].y += this.stars[i].vy / 100;

      if (this.stars[i].x < 0 || this.stars[i].x > this.width) {
        this.stars[i].vx = -this.stars[i].vx;
      }
      if (this.stars[i].y < 0 || this.stars[i].y > this.height) {
        this.stars[i].vy = -this.stars[i].vy;
      }
    }

    // this.stars.forEach(({ x, y, radius, vx, vy }) => {

    //   // console.log(x);
    // });
    // console.log("Here");

    // console.log(system.speed);
  }
}
