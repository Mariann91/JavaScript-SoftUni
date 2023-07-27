function calculateCost(input) {
  let meterPrice = 7.61;
  let metersToGreen = Number(input[0]);
  let totalPrice = meterPrice * metersToGreen;
  let discount = totalPrice * 0.18;
  let finalPrice = totalPrice - discount;
  console.log(`The final price is: ${finalPrice} lv.`)
  console.log(`The discount is: ${discount} lv.`)
}
