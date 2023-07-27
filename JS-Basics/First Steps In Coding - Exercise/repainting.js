function calculatePaintingPrice(input) {
  let nylonPrice = 1.50;
  let paintPrice = 14.50;
  let paintDiluentPrice = 5.00;

  let nylonAmount = Number(input[0]);
  let paintAmount = Number(input[1]);
  let paintDiluentAmount = Number(input[2]);
  let workHoursCount = Number(input[3]);
  
  let addedPaint = paintAmount * 0.10;
  let addedNylon = 2;
  let bagsPrice = 0.40;
  
  let totalCost = (nylonAmount + addedNylon) * nylonPrice + (paintAmount + addedPaint) * paintPrice + paintDiluentAmount * paintDiluentPrice + bagsPrice;
  let workersPrice = workHoursCount * (totalCost * 0.30);
  let finalPrice = totalCost + workersPrice;
  
  console.log(finalPrice);
}
