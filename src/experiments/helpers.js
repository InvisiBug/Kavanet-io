export const distance = (point1, point2) => {
  var xs = point2.x - point1.x;
  var ys = point2.y - point1.y;

  xs = xs * xs;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
};
