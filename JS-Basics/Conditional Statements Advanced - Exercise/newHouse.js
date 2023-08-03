function newHouse(input) {
  let flowersType = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);
  
  let flowersPrice = {
    "Roses": 5,
    "Dahlias": 3.80,
    "Tulips": 2.80,
    "Narcissus": 3,
    "Gladiolus": 2.50,
  }
  
  let totalPrice = quantity * flowersPrice[flowersType];
  
  switch (flowersType) {
    case "Roses":
      if (quantity > 80) {
        totalPrice *= 0.90
      }
      break;
      
    case "Dahlias":
      if (quantity > 90) {
        totalPrice *= 0.85;
      }
      
      break;
    
    case "Tulips":
      if (quantity > 80) {
        totalPrice *= 0.85;
      }
      
      break;
    
    case "Narcissus":
      if (quantity < 120) {
        totalPrice *= 1.15;
      }
      
      break;
    
    case "Gladiolus":
      if (quantity < 80) {
        totalPrice *= 1.20;
      }
      
      break;
  }
  
  if (totalPrice > budget) {
    let neededMoney = totalPrice - budget;
    console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
  } else {
    let leftMoney = budget - totalPrice;
    console.log(`Hey, you have a great garden with ${quantity} ${flowersType} and ${leftMoney.toFixed(2)} leva left.`)
  }
}
