import { code } from "./code";
export default class canvasInterface {
  containerSize;

  width;
  height;

  canvas;
  canvasRef;

  wrapper;
  wrapperRef;

  ctx;
  mouse = [];

  constructor(wrapperRef, canvasRef) {
    this.canvas = canvasRef.current;
    this.canvasRef = canvasRef;

    this.wrapper = wrapperRef.current;
    this.wrapperRef = wrapperRef;

    this.ctx = this.canvas.getContext("2d");

    // [this.width, this.height] = [
    //   this.wrapper.clientWidth,
    //   this.wrapper.clientHeight,
    // ];
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.addEventListener("mouseMove", this.updateMouse());
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

  // updateMouse(e) {
  //   console.log(e);
  //   // thouse[1] = e.clientY;
  //   // consolis.mouse[0] = e.clientX;
  //   // this.me.log(this.mouse[0], this.mouse[1]);
  // }

  // onMouseMove(e) {
  //   this.mouse = {
  //     x: e.clientX,
  //     y: e.clientY,
  //   };
  //   console.log(this.ctx);
  //   // code(this.ctx, this.width, this.height, this.mouse);
  // }
}

// * Tim says use move too to stop the line from the top left
