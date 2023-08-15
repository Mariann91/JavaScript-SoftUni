function orders(drink, quantity) {
  
  let drinkPricesInfo = {
    "coffee": 1.50,
    "water": 1.00,
    "coke": 1.40,
    "snacks": 2.00,
  }
  
  let bill = (drinkPricesInfo[drink] * quantity).toFixed(2);
  
  return bill

}
