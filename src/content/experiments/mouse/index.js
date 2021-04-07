import { code, updateMouse } from "./code";
export default class canvasInterface {
  containerSize;

  width;
  height;

  canvas;
  canvasRef;

  wrapper;
  wrapperRef;

  ctx;
  mouse;

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
    // this.canvas.addEventListener("mousemove", this.onMouseMove());
  }

  init(test = false) {
    this.resizeCanvas();
    if (test) {
      this.ctx.fillStyle = "orange";
      this.ctx.fillRect(0, 0, this.width, this.height);
    } else {
      code(this.ctx, this.canvas, this.width, this.height, this.mouse);
    }
  }

  resizeCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  updateMouse(e) {
    updateMouse(e);
  }

  // onMouseMove(e) {
  //   this.mouse = {
  //     x: e.clientX,
  //     y: e.clientY,
  //   };
  //   console.log(this.ctx);
  //   // code(this.ctx, this.width, this.height, this.mouse);
  // }
}
