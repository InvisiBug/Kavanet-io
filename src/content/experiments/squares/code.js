import { lerp } from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";

export const code = (ctx, width, height) => {
  // random.setSeed(316599);
  // 960143
  // random.setSeed(526491);
  random.setSeed(random.getRandomSeed());
  console.log(random.getSeed());

  // const palette = random.pick(palettes).slice(0, 3);
  // const palette = random.shuffle(random.pick(palettes)).slice(0, 4);

  const margin = 0;

  const createGrid = () => {
    const points = [];
    const count = 40;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1); // Deals with low count numbers
        const v = count <= 1 ? 0.5 : y / (count - 1);

        const radius = Math.abs(random.noise2D(u, v) * 0.02);
        const rotation = random.noise2D(u, v);
        const size = Math.abs(random.noise2D(u, v) * 100);
        // const size = 20;

        points.push({
          position: [u, v],
          // radius: Math.abs(random.gaussian() * 0.01),
          radius,
          rotation,
          size,
          // colour: random.pick(palette),
          colour: random.pick(palettes),
        });
      }
    }
    return points;
  };

  const points = createGrid().filter(() => random.value() > 0);
  // const points = createGrid();

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);

  points.forEach(({ position: [u, v], radius, colour, rotation, size }) => {
    const x = lerp(margin, width - margin, u);
    const y = lerp(margin, height - margin, v);

    ctx.globalCompositeOperation = "source-over";

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    ctx.fillStyle = random.pick(colour);
    ctx.fillRect(x - size / 2, y - size / 2, size, size);

    ctx.fillStyle = random.pick(colour);
    const layer2 = (2 * size) / 3;
    ctx.fillRect(x - layer2 / 2, y - layer2 / 2, layer2, layer2);

    ctx.fillStyle = random.pick(colour);
    const layer3 = (1 * size) / 3;
    ctx.fillRect(x - layer3 / 2, y - layer3 / 2, layer3, layer3);

    ctx.restore();
  });
};

// const degs = (degs) => {
//   return (degs * Math.PI) / 180;
// };
