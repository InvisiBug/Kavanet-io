import { lerp } from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";

export const sketch = (ctx, width, height) => {
  // random.setSeed(316599);
  random.setSeed(random.getRandomSeed());
  console.log(random.getSeed());

  // const palette = random.pick(palettes).slice(0, 3);
  const palette = random.shuffle(random.pick(palettes)).slice(0, 4);
  // const

  const margin = 100;

  const createGrid = () => {
    const points = [];

    const xCount = 250;
    const yCount = 150;

    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        const u = xCount <= 1 ? 0.5 : x / (xCount - 1); // Deals with low count numbers
        const v = yCount <= 1 ? 0.5 : y / (yCount - 1);

        const radius = Math.abs(random.noise2D(u, v) * 0.005);
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

  const points = createGrid().filter(() => random.value() > 0);
  // const points = createGrid();

  // ctx.fillStyle = random.pick(palette);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  points.forEach(({ position: [u, v], radius, colour, rotation }) => {
    const x = lerp(margin, width - margin, u);
    const y = lerp(margin, height - margin, v);

    ctx.beginPath();

    ctx.arc(x, y, radius * width, 0, degs(360), false);
    ctx.fillStyle = colour;
    ctx.lineWidth = 5;
    ctx.fill();

    // ctx.save();
    // ctx.fillStyle = colour;
    // ctx.font = `${radius * width * 2}px "Helvetica"`;
    // ctx.translate(x, y);
    // ctx.rotate(rotation);
    // ctx.fillText("8====D~", 0, 0);
    // ctx.restore();
  });
};

const degs = (degs) => {
  return (degs * Math.PI) / 180;
};
