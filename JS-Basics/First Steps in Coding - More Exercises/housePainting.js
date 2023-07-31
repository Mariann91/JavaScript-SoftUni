function paintingHouse(input) {
  let x = input[0];
  let y = input[1];
  let h = input[2];
  
  let greenPaintSqmPerLitter = 3.4;
  let redPaintSqmPerLitter = 4.3;
  
  let frontSide = x * x - 1.2 * 2;
  let backSide = x * x;
  let sideSides = 2 * (x * y) - 2 * (1.5 * 1.5);
  let neededGreenPaint = (frontSide + backSide + sideSides) / greenPaintSqmPerLitter;
  
  let roofSideSides = 2 * (x * y);
  let roofBackFrontSides = 2 * (x * h / 2)
  let neededRedPaint = (roofBackFrontSides + roofSideSides) / redPaintSqmPerLitter;
  
  console.log(neededGreenPaint.toFixed(2));
  console.log(neededRedPaint.toFixed(2));
}
