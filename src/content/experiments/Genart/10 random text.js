import canvasSketch from "canvas-sketch";
import { lerp } from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";

const settings = {
  dimensions: [2048, 2048],
};

random.setSeed(random.getRandomSeed());
console.log(random.getSeed());

const sketch = () => {
  // const colourCount = random.rangeFloor(1, 5 + 1); // max is exclusive
  // const palette = random.shuffle(random.pick(palettes)).slice(0, colourCount);
  const palette = random.pick(palettes).slice(0, 2);

  const createGrid = () => {
    const points = [];
    const count = 20;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1); // Deals with low count numbers
        const v = count <= 1 ? 0.5 : y / (count - 1);

        const radius = Math.abs(random.noise2D(u, v) * 0.025);
        const rotation = random.noise2D(u, v);

        points.push({
          position: [u, v],
          // radius: Math.abs(random.gaussian() * 0.01),
          radius,
          rotation,
          colour: random.pick(palette),
        });
      }
    }
    return points;
  };

  // const seed = (random.value() * 1000).toFixed(0);
  // // const seed = 512;
  // console.log(seed);

  // random.setSeed(seed);
  // const points = createGrid().filter(() => random.value() > 0.5);
  const points = createGrid();
  const margin = 100;

  return ({ context: ctx, width, height }) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    points.forEach(({ position: [u, v], radius, colour, rotation }) => {
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      // ctx.beginPath();
      // ctx.arc(x, y, radius * width, 0, degs(360), false);
      // ctx.strokeStyle = colour;
      // ctx.lineWidth = 5;
      // ctx.stroke();

      ctx.save();
      ctx.fillStyle = colour;
      ctx.font = `${radius * width}px "Helvetica"`;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillText("A", 0, 0);
      ctx.restore();
    });
  };
};

canvasSketch(sketch, settings);

// Functions
const degs = (degs) => {
  return (degs * Math.PI) / 180;
};
