export default class Collision {
  constructor(options) {
    this.options = options;
  }

  detect = (items) => {
    items.forEach((item1) => {
      items.forEach((item2) => {
        {
          if (
            item1 != item2 &&
            this.hasCollided(item1.getInfo(), item2.getInfo())
          ) {
            // item1.setCollision(true);
            // item2.setCollision(true);
          }
        }
      });

      // Screen edge detection
      if (
        item1.getInfo().x + item1.getInfo().width > this.options.width ||
        item1.getInfo().x - item1.getInfo().width < 0
      ) {
        item1.setCollision("x");
      }
      if (
        item1.getInfo().y + item1.getInfo().height > this.options.height ||
        item1.getInfo().y - item1.getInfo().height < 0
      ) {
        item1.setCollision("y");
      }
    });
  };

  circleIntersect(item1, item2) {
    let x1 = item1.x;
    let y1 = item1.y;
    let r1 = item1.width;

    let x2 = item2.x;
    let y2 = item2.y;
    let r2 = item2.width;

    // Calculate the distance between the two circles
    let squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

    // When the distance is smaller or equal to the sum
    // of the two radius, the circles touch or overlap
    return squareDistance <= (r1 + r2) * (r1 + r2);
  }

  hasCollided(r1, r2) {
    // Define variables we'll use to calculate
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    // hit will determine whether there's a collision
    hit = false;

    // Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    // Calculate the distance vectors between sprites
    vx = r1.x - r2.x;
    vy = r1.y - r2.y;

    // Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;
    // console.log(combinedHalfHeights);

    // Check collision on x axis
    if (Math.abs(vx) < combinedHalfWidths) {
      // A collision might be occuring.  Check for it on y axis
      if (Math.abs(vy) < combinedHalfHeights) {
        // There's definitely a collision happening
        hit = true;
      }
    } else {
      hit = false;
    }
    console.log(hit);

    return hit;
  }
}
