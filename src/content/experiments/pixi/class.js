import * as PIXI from "pixi.js";
import { barImage, ballImage, wallImage } from "./images";

export default class Game {
  loader = PIXI.Loader.shared;
  player;
  enemy;
  ball;
  playerScore;
  enemyScore;
  floors = [];
  walls = [];

  up;
  down;

  constructor(canvas) {
    this.app = new PIXI.Application({
      view: canvas,
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio,
      autoDensity: true,
    });
  }

  init() {
    this.loader
      .add("bar", "images/bar.png")
      .add("ball", "images/ball.png")
      .add("wall", "images/wall.png")
      .load(this.setup);
  }

  setup() {
    console.log(keyboard("w"));
    this.up = 2;

    console.log(this.up);

    // this.up = keyboard("w");
    // this.down = keyboard("s");

    this.bar_texture = this.loader.resources.bar.texture;
    this.ball_texture = this.loader.resources.ball.texture;
    this.wall_texture = this.loader.resources.wall.texture;

    this.stage = new PIXI.Container();
    this.app.stage.addChild(this.stage);

    this.stage.x = this.app.screen.width / 2;
    this.stage.y = this.app.screen.height / 2;

    // Adding Player and Enemy Sprites
    this.player = new PIXI.Sprite(this.bar_texture);
    this.stage.addChild(this.player);

    this.player.x = -300;
    this.player.anchor.set(0.5);

    this.enemy = new PIXI.Sprite(this.bar_texture);
    this.stage.addChild(this.enemy);

    this.enemy.x = 300;
    this.enemy.anchor.set(0.5);

    // Adding the ball
    this.ball = new PIXI.Sprite(this.ball_texture);
    this.stage.addChild(this.ball);

    this.ball.x = 0;
    this.ball.anchor.set(0.5);

    // Setting up the walls
    for (let i = 0; i < 75; i++) {
      this.new_wall = new PIXI.Sprite(this.wall_texture);
      this.new_floor = new PIXI.Sprite(this.wall_texture);

      this.walls.push(this.new_wall);
      this.stage.addChild(this.walls[i]);

      this.walls[i].y = -200;
      this.walls[i].x = -300 + i * 8;

      this.walls[i].anchor.set(0.5);

      this.floors.push(this.new_floor);
      this.stage.addChild(this.floors[i]);

      this.floors[i].y = 200;
      this.floors[i].x = -300 + i * 8;
      this.floors[i].anchor.set(0.5);
    }

    // Direction of ball and players
    this.ball.vx = 1;
    this.ball.vy = 1;

    this.player.vy = 0;
    this.enemy.vy = 0;

    // Setting Up Score

    // Size, Color, and Font of the text we are adding
    this.style = new PIXI.TextStyle({
      fontFamily: "Roboto",
      fill: ["#ffffff"],
      fontSize: 32,
    });

    // Adding Score to our Player and Enemy Object
    this.player.score = 0;
    this.enemy.score = 0;

    this.this.playerScore = new PIXI.Text(this.player.score, this.style); // Creating the actual Text for the scores.
    this.enemyScore = new PIXI.Text(this.enemy.score, this.style);

    this.stage.addChild(this.playerScore);
    this.stage.addChild(this.enemyScore);

    this.playerScore.x = -275;
    this.playerScore.y = -250;

    this.enemyScore.x = 250;
    this.enemyScore.y = -250;

    this.up.press = () => {
      this.player.vy = -1;
    };

    this.up.release = () => {
      this.player.vy = 0;
    };

    this.down.press = () => {
      this.player.vy = 1;
    };

    this.down.release = () => {
      this.player.vy = 0;
    };

    // app.ticker.add((delta) => game(delta));
  }

  static game = (delta) => {
    let speed = 3 * delta;
    let ball_speed = 5 * delta;

    if (this.ball.x > 325) {
      this.ball_reset();
      this.player.score++;
      this.playerScore.text = this.player.score;
    } else if (this.ball.x < -325) {
      this.ball_reset();
      this.enemy.score++;
      this.enemyScore.text = this.enemy.score;
    }

    if (this.ball.y > this.enemy.y) {
      this.enemy.vy = 1;
    } else if (this.ball.y < this.enemy.y) {
      this.enemy.vy = -1;
    } else {
      this.enemy.vy = 0;
    }

    // TODO Check Collision of Walls, may have issues here
    for (let wall of this.walls) {
      if (this.check_collid(this.player, wall)) {
        if (this.player.vy < 0) {
          this.player.vy = 0;
        }
      }

      if (this.check_collid(this.enemy, wall)) {
        if (this.enemy.vy < 0) {
          this.enemy.vy = 0;
        }
      }

      if (this.check_collid(this.ball, wall)) {
        this.ball.vy = 1;
      }
    }

    // TODO Check Collision of Walls, may have issues here
    for (let floor of this.floors) {
      if (this.check_collid(this.player, floor)) {
        if (this.player.vy > 0) {
          this.player.vy = 0;
        }
      }

      if (this.check_collid(this.enemy, floor)) {
        if (this.enemy.vy > 0) {
          this.enemy.vy = 0;
        }
      }

      if (this.check_collid(this.ball, floor)) {
        this.ball.vy = -1;
      }
    }

    // Check Collision of Ball with Player + Enemy
    if (
      this.check_collid(this.ball, this.enemy) ||
      this.check_collid(this.ball, this.player)
    ) {
      this.ball.vx *= -1;
    }

    // Movement for ball and players
    this.ball.x += this.ball.vx * this.ball_speed;
    this.ball.y += this.ball.vy * this.ball_speed;

    this.player.y += this.player.vy * this.speed;
    this.enemy.y += this.enemy.vy * this.speed;
  };

  static ball_reset = () => {
    this.ball.x = 0;
    this.ball.y = 0;
    this.ball.vy = this.ball.vy * -1;
    this.ball.vx = this.ball.vx * -1;
  };

  static check_collid = (r1, r2) => {
    // Define variables we'll use to calculate
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    // hit will determine whether there's a collision
    hit = false;

    // Find the center points of each sprite
    r1.centerX = r1.x;
    r1.centerY = r1.y;

    r2.centerX = r2.x;
    r2.centerY = r2.y;

    // Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    // Calculate the distance vectors between sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    // Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    // Check collision on x axis
    if (Math.abs(vx) < combinedHalfWidths) {
      // A collisoin might be occuring.  Check for it on y axis
      if (Math.abs(vy) < combinedHalfHeights) {
        // There's definitely a collision happening
        hit = true;
      } else {
        hit = false;
      }
    } else {
      hit = false;
    }

    return hit;
  };
}

function keyboard(value) {
  let key = {};
  key.value = value;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;

  key.downHandler = (event) => {
    if (event.key === key.value) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  };

  key.upHandler = (event) => {
    if (event.key === key.value) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  };

  // Attach Event listeners
  const downListener = key.downHandler.bind(key);
  const upListener = key.upHandler.bind(key);

  window.addEventListener("keydown", downListener, false);
  window.addEventListener("keyup", upListener, false);

  // Detach event listeners
  key.unsubscribe = () => {
    window.removeEventListener("keydown", downListener);
    window.removeEventListener("keyup", upListener);
  };

  return key;
}
