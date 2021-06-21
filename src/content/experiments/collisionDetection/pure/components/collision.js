export default class Collision {
  constructor(options) {
    this.options = options;
  }

  detect = (entities) => {
    entities.forEach((item1) => {
      entities.forEach((item2) => {
        if (item2 !== item1) {
          if (this.circlesColliding(item1.getInfo(), item2.getInfo())) {
            item1.setCollision(true);
            item2.setCollision(true);

            const collisionData = this.collisionBounceMassVect(item1.getInfo(), item2.getInfo());
            if (collisionData) {
              item1.setVelocities([-collisionData.vx, -collisionData.vy]);
              item2.setVelocities([+collisionData.vx, +collisionData.vy]);
            }
          }
        }
      });
    });
  };

  collisionBounceVect = (item1, item2) => {
    const relativeVelocity = {
      x: item1.vx - item2.vx,
      y: item1.vy - item2.vy,
    };

    const collisionNormVect = this.calcNormCollisionVector(item1, item2);

    const speed = relativeVelocity.x * collisionNormVect.x + relativeVelocity.y * collisionNormVect.y;

    // Speed is positive if items are moving towards each other
    if (speed > 0) {
      return {
        vx: speed * collisionNormVect.x,
        vy: speed * collisionNormVect.y,
      };
    }
  };

  collisionBounceMassVect = (item1, item2) => {
    const relativeVelocity = {
      x: item1.vx - item2.vx,
      y: item1.vy - item2.vy,
    };

    const collisionNormVect = this.calcNormCollisionVector(item1, item2);

    const speed = relativeVelocity.x * collisionNormVect.x + relativeVelocity.y * collisionNormVect.y;

    const impulse = (2 * speed) / (item1.mass + item2.mass);

    // Speed is positive if items are moving towards each other
    if (speed > 0) {
      return {
        vx: impulse * item2.mass * collisionNormVect.x,
        vy: impulse * item2.mass * collisionNormVect.y,
      };
    }
  };

  circlesColliding = (item1, item2) => {
    // Calculate the distance between the two circles
    const distance = (item1.x - item2.x) * (item1.x - item2.x) + (item1.y - item2.y) * (item1.y - item2.y);

    // When the distance is smaller or equal to the sum
    // of the two radius, the circles overlap
    return distance <= (item1.width + item2.width) * (item1.width + item2.width);
  };

  calcCollisionVector = (item1, item2) => {
    return {
      x: item2.x - item1.x,
      y: item2.y - item2.x,
    };
  };

  calcNormCollisionVector = (item1, item2) => {
    return {
      x: (item2.x - item1.x) / this.getDistance(item1, item2),
      y: (item2.y - item2.x) / this.getDistance(item1, item2),
    };
  };

  // getDistance(x1, y1, x2, y2) {
  //   return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  // }

  getDistance(entity1, entity2) {
    return Math.sqrt((entity2.x - entity1.x) * (entity2.x - entity1.x) + (entity2.y - entity2.x) * (entity2.y - entity2.x));
  }

  rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    // Check x and y for overlap
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
      return false;
    }

    return true;
  }
}
