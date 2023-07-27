function calculateCost(input) {
  let dogFoodPrice = 2.50;
  let catFoodPrice = 4.00;
  let dogFoodCount = Number(input[0]);
  let catFoodCount = Number(input[1]);
  let result = dogFoodCount * dogFoodPrice + catFoodCount * catFoodPrice;
  console.log(`${result} lv.`);
}
