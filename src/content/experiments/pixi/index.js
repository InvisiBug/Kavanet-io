import * as PIXI from "pixi.js";
import { barImage, ballImage, wallImage } from "./images";

export default class Game {
  constructor(canvas) {
    this.app = new PIXI.Application({
      view: canvas,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    this.loader = PIXI.Loader.shared;

    // this.setup = this.setup.bind(this);
    // this.loader
    //   .reset()
    //   .add("bar", "../images/barImage.png")
    //   .load(this.setup.bind(this));

    // this.texture = this.loader.resources.bar.texture;
    // this.bar = new PIXI.Sprite.from("images/bar.png");

    this.image = new PIXI.Graphics();
    this.image.beginFill(0xffffff, 1);
    this.image.drawCircle(0, 0, 10);
  }

  init() {
    // this.setup();
  }

  setup = () => {
    // console.log("hello");
    this.app.stage.addChild(this.image);

    this.image.x = this.app.screen.width / 2;
    this.image.y = this.app.screen.height / 2;

    console.log(this.image);

    this.app.ticker.add((delta) => this.game(delta));
  };

  game = (delta) => {
    this.image.x += 1;
    // console.log(performance.now());
  };
}
