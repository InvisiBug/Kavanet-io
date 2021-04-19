import * as PIXI from "pixi.js";
// import { barImage, ballImage, wallImage } from "../pixi/images";
import Ball from "./components/ball.js";
import Wall from "./components/wall.js";
import Paddle from "./components/paddle";
import { TilingSprite } from "pixi.js";

export default class Game {
  options = {
    width: window.innerWidth,
    height: window.innerHeight,
    speed: 5,
  };
  tickables = [];

  constructor(canvas) {
    this.app = new PIXI.Application({
      view: canvas,
      width: this.options.width,
      height: this.options.height,
      backgroundColor: 0x272627,
    });

    this.ball = new Ball(this.app.stage, this.options);
    this.topWall = new Wall(this.app.stage, this.options, "top");
    this.bottomWall = new Wall(this.app.stage, this.options, "bottom");

    this.player = new Paddle(this.app.stage, this.options, "player");

    this.setup();

    this.tickables.push(this.ball);
    this.tickables.push(this.topWall);
    this.tickables.push(this.bottomWall);
    this.tickables.push(this.player);
  }

  setup = () => {
    this.app.ticker.add((delta) => this.game(delta));
  };

  game = (delta) => {
    // this.ball.x += 1;
    this.ball.tick();
    // this.ball.tick();
    // console.log(performance.now());

    // this.collisionDetection(this.ball);
    // this.tickables.forEach((tickable) => {
    // this.collisionDetection(tickable);
    // });

    this.collisionDetection(this.tickables);
  };

  collisionDetection = (items) => {
    // // console.log(items);
    items.forEach((item1) => {
      items.forEach((item2) => {
        if (
          item1.constructor.name === "Ball" &&
          item2.constructor.name === "Wall"
        ) {
          if (hasCollided(item1.getInfo(), item2.getInfo())) {
            console.log("collision");
            item1.setCollision(true);
            item2.setCollision(true);
          }
        }
      });
    });

    // items.forEach((item) => {
    //   if (item.constructor.name === "Ball") {
    //     if (
    //       item.getInfo().x + item.getInfo().width / 2 > this.options.width ||
    //       item.getInfo().x - item.getInfo().width / 2 < 0
    //     ) {
    //       item.setCollision(true);
    //     }
    //     if (
    //       item.getInfo().y + item.getInfo().height > this.options.height ||
    //       item.getInfo().y - item.getInfo().height < 0
    //     ) {
    //       item.setCollision(true);
    //     }
    //   }
    // });

    function hasCollided(r1, r2) {
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

      return hit;
    }
    // const item = items.getInfo();
    // if (
    //   item.x + item.size / 2 > this.options.width ||
    //   item.x - item.size / 2 < 0
    // ) {
    //   items.setCollision(true);
    // }
    // if (item.y + item.size > this.options.height || item.y - item.size < 0) {
    //   items.setCollision(true);
    // }
  };
}
