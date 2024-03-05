function petShop(data){
  const dogFoodPrice = 2.50;
  const catFoodPrice = 4;
  let dogFoodPackages = Number(data[0]);
  let catFoodPackages = Number(data[1]);
  
  let finalPrice = dogFoodPrice * dogFoodPackages + catFoodPackages * catFoodPrice;
  
  console.log(`${finalPrice} lv.`);
  
}
