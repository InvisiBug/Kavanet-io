// import random from "canvas-sketch-util/random";
import { lerp } from "canvas-sketch-util/math";

export default class Grass {
  grass = [];

  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;

    this.size = 50;

    this.createGrass();
    this.draw();
  }

  createGrass = () => {
    for (let y = 0; y < this.env.gridSize; y++) {
      this.grass[y] = new Array();
      for (let x = 0; x < this.env.gridSize; x++) {
        // this.grass[y].push(this.getRandomInt(0, 4));
        this.grass[y].push(4);
      }
    }
  };

  tick = () => {
    this.regenGrass();
    this.draw();
  };

  regenGrass = () => {
    for (let y = 0; y < this.env.gridSize; y++) {
      for (let x = 0; x < this.env.gridSize; x++) {
        if (Math.random() < 0.1 && this.grass[x][y] < 4) {
          this.grass[x][y] = this.grass[x][y] + 1;
        }
      }
    }
  };

  draw = () => {
    for (let y = 0; y < this.env.gridSize; y++) {
      for (let x = 0; x < this.env.gridSize; x++) {
        const u = x / (this.env.gridSize - 1);
        const v = y / (this.env.gridSize - 1);

        this.ctx.fillStyle = this.getColour(this.grass[x][y]);
        this.ctx.fillRect(
          this.env.marginX + lerp(0, this.env.height, u) - this.size / 2,
          lerp(0, this.env.height, v) - this.size / 2,
          this.size,
          this.size
        );
      }
    }
  };

  getGrass = (x, y) => {
    return this.grass[x][y];
  };

  eatGrass = (x, y, amount) => {
    this.grass[x][y] -= amount;
  };

  getColour = (health) => {
    const colours = ["#543B23", "#846954", "#cccc00", "#A5D74D", "#81BE1C"];
    return colours[health];
  };

  between(x, min, max) {
    return x >= min && x <= max;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
