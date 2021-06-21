import { Graphics } from "@pixi/graphics";

export default class Paddle {
  constructor(stage, options, location) {
    this.options = options;
    this.stage = stage;

    // this.x = this.options.width / 6;
    this.x = 19;
    this.y = this.options.height / 2;
    this.height = 20;
    this.width = 10;

    this.init();
  }

  init = () => {
    this.paddle = new Graphics();
    this.paddle.beginFill(0xffffff);
    // this.paddle.drawRect(
    //   this.x - this.width / 2,
    //   this.y - this.height / 2,
    //   this.width / 2,
    //   this.height / 2
    // );

    this.paddle.drawRect(
      this.x - this.width / 2,
      this.options.height / 2 - this.height / 2,
      this.width,
      this.height
    );

    this.stage.addChild(this.paddle);
  };
}
