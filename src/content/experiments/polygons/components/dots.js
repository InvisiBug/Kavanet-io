// https://stackoverflow.com/questions/43906267/generating-triangles-from-a-random-set-of-points
// https://dev.to/vincenius/websites-for-creative-backgrounds-1mao
// https://codepen.io/alexandrix/pen/oQOvYp
// Decent example of triangles around line 187 https://github.com/dcartist/Thpace/blob/master/src/index.ts
// https://github.com/Bathlamos/delaunay-triangulation

import { test } from "../../helpers/index";
import { lerp } from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";

const velocityArray = [-1, 1];

export default class Dots {
  dots = [];
  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;

    this.createDots(this.env.xDots, this.env.yDots);
    test();
  }

  // create grid of dots (based on grid size in env)

  createDots = (xDots, yDots) => {
    for (let y = 0; y < yDots; y++) {
      for (let x = 0; x < xDots; x++) {
        const u = x / (this.env.xDots - 1);
        const v = y / (this.env.yDots - 1);

        const xpos = lerp(this.env.margin, this.env.width - this.env.margin, u);
        const ypos = lerp(this.env.margin, this.env.height - this.env.margin, v);

        this.dots.push({
          position: [xpos, ypos],
          origin: [xpos, ypos],

          // velocity: [random.pick(velocityArray), random.pick(velocityArray)],
          velocity: [1 - Math.random(), 1 - Math.random()],
          // velocity: [
          //   Math.floor(Math.random() * this.env.speed) - this.env.speed / 2,
          //   Math.floor(Math.random() * this.env.speed) - this.env.speed / 2,
          // ],

          size: 2,
        });

        // const xpos = this.env.width / (this.env.xDots - 1);
        // const ypos = this.env.height / (this.env.yDots - 1);

        // this.dots.push({
        //   // position: [lerp(0, this.env.width, u), lerp(0, this.env.width, v)],

        //   position: [x * xpos, y * ypos - Math.random() * 100],
        //   origin: [x * xpos, y * ypos],
        //   vels: [random.pick([-1, 0, 1]), random.pick([-1, 0, 1])],
        //   size: 2,
        // });
      }
    }

    this.tick();
  };

  tick = () => {
    // this.nudgeDotsV2();
    this.drawDotsV2();
  };

  nudgeDotsV2 = () => {
    this.dots.forEach(({ position, origin, velocity }, index) => {
      // const test1 = position[0] + 1;
      // const test2 = position[1] + 1;
      // const test1 = position[0] + random.pick([-1, 0, 1]);
      // const test2 = position[1] + random.pick([-1, 0, 1]);
      const rebound = 10;

      if (position[0] < origin[0] - rebound || position[0] > origin[0] + rebound) {
        // this.dots[index].position[0] = origin[0];
        this.dots[index].velocity[0] = -velocity[0];
      }
      if (position[1] < origin[1] - rebound || position[1] > origin[1] + rebound) {
        // this.dots[index].position[1] = origin[1];
        this.dots[index].velocity[1] = -velocity[1];
      } //else {
      this.dots[index].position[0] = position[0] + velocity[0];
      this.dots[index].position[1] = position[1] + velocity[1];
      //}
    });
  };

  nudgeDots = () => {
    this.dots.forEach(({ position, origin }, index) => {
      // const test1 = position[0] + 1;
      // const test2 = position[1] + 1;

      const test1 = position[0] + random.pick([-1, 0, 1]);
      const test2 = position[1] + random.pick([-1, 0, 1]);

      this.dots[index].position[0] = test1;
      this.dots[index].position[1] = test2;
    });
  };

  drawDots = () => {
    this.dots.forEach(({ position: [u, v], size }) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.arc(lerp(0, this.env.width, u) + Math.random() * 10, lerp(0, this.env.height, v) + Math.random() * 10, size, 0, degs(360), false);
      this.ctx.lineWidth = 1;
      this.ctx.fill();
    });
  };

  drawDotsV2 = () => {
    this.dots.forEach(({ position: [x, y], size }) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.arc(x, y, size, 0, degs(360), false);
      this.ctx.lineWidth = 1;
      this.ctx.fill();
    });
  };
}

const degs = (degs) => {
  return (degs * Math.PI) / 180;
};

// createDots = (xDots, yDots) => {
//   for (let y = 0; y < yDots; y++) {
//     this.dots[y] = new Array();
//     for (let x = 0; x < xDots; x++) {
//       this.dots[y].push(0);
//     }
//   }

//   this.tick();
// };

// tick = () => {
//   for (let y = 0; y < this.env.yDots; y++) {
//     for (let x = 0; x < this.env.xDots; x++) {
//       const u = x / (this.env.xDots - 1);
//       const v = y / (this.env.yDots - 1);

//       this.ctx.beginPath();

//       this.ctx.fillStyle = "white";

//       this.ctx.arc(lerp(0, this.env.width, u), lerp(0, this.env.height, v), 1, 0, degs(360), false);

//       this.ctx.lineWidth = 1;
//       this.ctx.fill();
//     }
//   }
// };
