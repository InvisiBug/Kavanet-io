import { Graphics } from "@pixi/graphics";

export default class Wall {
  constructor(stage, options, location) {
    this.options = options;

    this.wall = new Graphics();
    this.wall.beginFill(0xffffff, 1);

    this.x = options.width / 2 - this.width / 2;
    this.y = (options.height * 5) / 6;

    this.width = (this.options.width * 4) / 6;
    this.height = 20;

    if (location === "top") {
      this.x = options.width / 2 - this.width / 2;
      this.y = options.height / 6;
    } else {
      this.x = options.width / 2 - this.width / 2;
      this.y = (options.height * 5) / 6;
    }

    this.wall.drawRect(this.x, this.y, this.width, this.height);
    stage.addChild(this.wall);
  }

  getInfo = () => {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  };

  setCollision = () => {};
}
