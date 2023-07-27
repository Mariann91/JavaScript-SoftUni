function calculateShoolMaterialsPrice(input) {
  let packagePens = 5.80;
  let packageMarkers = 7.20;
  let Detergent = 1.20;
  let packagePensCount = Number(input[0]);
  let packageMarkersCount = Number(input[1]);
  let DetergentQuantity = Number(input[2]);
  let discountPercent = Number(input[3]) / 100;
  let totalPrice = packagePensCount * packagePens + packageMarkersCount * packageMarkers + Detergent * DetergentQuantity;
  let discount = totalPrice * discountPercent;
  let finalPrice = totalPrice - discount;
  console.log(finalPrice);
}
