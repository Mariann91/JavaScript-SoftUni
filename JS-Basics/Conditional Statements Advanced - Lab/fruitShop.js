function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quanitity = Number(input[2]);
  
  let isValid = true;
  
  let workDaysPrices = {
    "banana": 2.50,
    "apple": 1.20,
    "orange": 0.85,
    "grapefruit": 1.45,
    "kiwi": 2.70,
    "pineapple": 5.50,
    "grapes": 3.85,
  }
  
  let weekendPrices =  {
    "banana": 2.70,
    "apple": 1.25,
    "orange": 0.90,
    "grapefruit": 1.60,
    "kiwi": 3.00,
    "pineapple": 5.60,
    "grapes": 4.20,
  }
  
  let price = 0;
  
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit in workDaysPrices) {
        price = workDaysPrices[fruit] * quanitity;
      } else {
        isValid = false;
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruit in weekendPrices) {
        price = weekendPrices[fruit] * quanitity;
      } else {
        isValid = false;
      }
      break;
    
    default:
      isValid = false;
      break;
  }
  
  if (isValid) {
    console.log(price.toFixed(2));
  } else {
    console.log("error");
  }
  
}
