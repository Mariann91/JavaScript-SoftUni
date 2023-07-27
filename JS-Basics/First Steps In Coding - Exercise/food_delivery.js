function calculateFoodPrice(input) {
  let chickenMenu = 10.35;
  let fishMenu = 12.40;
  let vegetarianMenu = 8.15;
  
  let chickenMenuCount = Number(input[0]);
  let fishMenuCount = Number(input[1]);
  let vegetarianMenuCount = Number(input[2]);
  
  let foodPriceWithoutDesert = chickenMenu * chickenMenuCount + fishMenu * fishMenuCount + vegetarianMenu * vegetarianMenuCount;
  let desert = foodPriceWithoutDesert * 0.20;
  let delivery = 2.50;
  let total_price = foodPriceWithoutDesert + desert + delivery;
  
  console.log(total_price)
}
