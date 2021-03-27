export default class dots {
  containerSize;

  canvas;
  canvasRef;

  wrapper;
  wrapperRef;

  ctx;

  starColour = "white";
  lineColour = "white";

  lineLength = 100;
  lineWidth = 0.05;

  stars = [];

  constructor(wrapperRef, canvasRef, numberOfStars, speed) {
    this.canvas = canvasRef.current;
    this.canvasRef = canvasRef;

    this.wrapper = wrapperRef.current;
    this.wrapperRef = wrapperRef;

    this.ctx = this.canvas.getContext("2d");

    this.containerSize = [this.wrapper.clientWidth, this.wrapper.clientHeight];

    // Make array of stars
    for (var i = 0; i < this.containerSize[0] * 0.11; i++) {
      this.stars.push({
        x: Math.random() * this.containerSize[0], // Positions
        y: Math.random() * this.containerSize[1],

        radius: Math.random() * 1 + 1, // Star sizes

        vx: Math.floor(Math.random() * speed) - speed / 2, // Star velocities
        vy: Math.floor(Math.random() * speed) - speed / 2,
      });
    }
  }

  init() {
    this.resizeCanvas();
    this.run();
  }

  run = () => {
    this.draw();
    this.update();
    requestAnimationFrame(() => this.run());
  };

  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.globalCompositeOperation = "lighter";

    // Draw stars
    for (var i = 0; i < this.stars.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(
        this.stars[i].x,
        this.stars[i].y,
        this.stars[i].radius,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
      this.ctx.fillStyle = this.starColour;
      this.ctx.stroke();
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

  resizeCanvas() {
    this.canvas.width = this.containerSize[0];
    this.canvas.height = this.containerSize[1];
  }

  update() {
    for (var i = 0; i < this.stars.length; i++) {
      this.stars[i].x += this.stars[i].vx / 100;
      this.stars[i].y += this.stars[i].vy / 100;

      if (this.stars[i].x < 0 || this.stars[i].x > this.canvas.width)
        this.stars[i].vx = -this.stars[i].vx;
      if (this.stars[i].y < 0 || this.stars[i].y > this.canvas.height)
        this.stars[i].vy = -this.stars[i].vy;
    }
  }
}
