import random from "canvas-sketch-util/random";
import { lerp } from "canvas-sketch-util/math";

export default class Sheep {
  constructor(ctx, env, grass, pos = [random.rangeFloor(0, env.gridSize + 1), random.rangeFloor(0, env.gridSize + 1)]) {
    this.ctx = ctx;
    this.env = env;
    this.size = 10;
    this.grass = grass;
    this.life = 10;

    this.width = this.size;
    this.height = this.size;

    this.timestamp = 0;
    this.lastTimestamp = 0;

    this.setPos(pos);

    this.draw();
  }

  setPos = (pos) => {
    this.x = pos[0];
    this.y = pos[1];
  };

  getInfo = () => {
    return {
      x: this.x,
      y: this.y,
      heading: this.heading,
      width: this.size,
      height: this.size,
    };
  };

  tick = () => {
    // this.y += random.pick([-this.env.moveDistance, this.env.moveDistance]);
    // this.x += random.pick([-this.env.moveDistance, this.env.moveDistance]);

    this.setPos([
      this.x + random.pick([-this.env.moveDistance, this.env.moveDistance]),
      this.y + random.pick([-this.env.moveDistance, this.env.moveDistance]),
    ]);

    this.detectWalls();
    this.eatGrass();
    this.draw();
  };

  draw = () => {
    this.ctx.beginPath();

    const u = this.x / (this.env.gridSize - 1);
    const v = this.y / (this.env.gridSize - 1);

    // Dirty hack to make the canvas a square
    this.ctx.arc(this.env.marginX + lerp(0, this.env.height, u) - this.size / 2, lerp(0, this.env.height, v), this.size, 0, Math.PI * 2);

    this.ctx.fillStyle = this.life > 0 ? "black" : "rgba(255,255,255,0.2)";
    this.ctx.fill();
  };

  eatGrass = () => {
    if (this.life > 0) {
      if (this.grass.getGrass(this.x, this.y) === 0) {
        this.life = this.life - 1;
      }
      this.grass.eatGrass(this.x, this.y, 1);
    }
  };

  collisionDetection = () => {
    this.detectWalls();
  };

  detectWalls = () => {
    if (this.x < 0) {
      // Left Edge
      this.x = 0;
    } else if (this.x > this.env.gridSize - 1) {
      // Right Edge
      this.x = this.env.gridSize - 1;
    } else if (this.y < 0) {
      // Top Edge
      this.y = 0;
    } else if (this.y > this.env.gridSize - 1) {
      // Bottom Edge
      this.y = this.env.gridSize - 1;
    }
  };
}
