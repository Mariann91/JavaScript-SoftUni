function smallShop(data) {
  let product = data[0];
  let city = data[1];
  let quantity = Number(data[2]);
  
  let finalPrice;
  
  
  let productPrices = {
    "coffee": [0.50, 0.40, 0.45],
    "water": [0.80, 0.70, 0.70],
    "beer": [1.20, 1.15, 1.10],
    "sweets": [1.45, 1.30, 1.35],
    "peanuts": [1.60, 1.50, 1.55],
  }

  switch (city) {
    case 'Sofia':
      finalPrice = productPrices[product][0] * quantity;
      break;
    case 'Plovdiv':
      finalPrice = productPrices[product][1] * quantity;
      break
    
    default:
      finalPrice = productPrices[product][2] * quantity;
      break;
      // code
  }
  
  console.log(finalPrice);

}
