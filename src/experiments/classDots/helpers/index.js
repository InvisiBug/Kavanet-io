export const getRefs = (wrapperRef, canvasRef) => {
  const { current: wrapper } = wrapperRef; // wrapperRef object has a current property, this extracts is and saves result to "wrapper"
  const { current: canvas } = canvasRef;
  return [wrapper, canvas];
};
