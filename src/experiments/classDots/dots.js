export default class dots {
  canvasRef;
  wrapperRef;

  constructor(canvasRef, wrapperRef) {
    this.canvasRef = canvasRef;
    this.warapperRef = wrapperRef;
  }

  init() {
    console.log(this.canvasRef);
    console.log(this.wrapperRef);
  }
}
