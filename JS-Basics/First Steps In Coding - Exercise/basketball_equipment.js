function calculateBasketballEquipment(input) {
  let yearlyPrice = Number(input[0]);
  let shoes = yearlyPrice - yearlyPrice * 0.40;
  let outfit = shoes - shoes * 0.20;
  let ball = outfit / 4;
  let аccessories = ball / 5;
  
  let total_price = yearlyPrice + shoes + outfit + ball + аccessories;
  
  console.log(total_price);
}
