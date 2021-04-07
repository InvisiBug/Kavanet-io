import { sketch } from "./experiment";
export default class canvasInterface {
  containerSize;

  width;
  height;

  canvas;
  canvasRef;

  wrapper;
  wrapperRef;

  ctx;

  constructor(wrapperRef, canvasRef) {
    this.canvas = canvasRef.current;
    this.canvasRef = canvasRef;

    this.wrapper = wrapperRef.current;
    this.wrapperRef = wrapperRef;

    this.ctx = this.canvas.getContext("2d");

    [this.width, this.height] = [
      this.wrapper.clientWidth,
      this.wrapper.clientHeight,
    ];
  }

  init(test = false) {
    this.resizeCanvas();
    if (test) {
      this.ctx.fillStyle = "orange";
      this.ctx.fillRect(0, 0, this.width, this.height);
    } else {
      sketch(this.ctx, this.width, this.height);
    }
  }

  resizeCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
}
