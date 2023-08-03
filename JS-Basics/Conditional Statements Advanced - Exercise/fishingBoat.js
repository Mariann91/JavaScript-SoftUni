function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);
  
  let boatRentPrices = {
    "Spring": 3000,
    "Summer": 4200,
    "Autumn": 4200,
    "Winter": 2600,
  }
  
  let boatRentCost = boatRentPrices[season];
  
  
  if (fishermen <= 6) {
    boatRentCost *= 0.90;
  } else if (fishermen <= 11) {
    boatRentCost *= 0.85;
  } else {
    boatRentCost *= 0.75;
  }
  
  if (fishermen % 2 === 0 && season !== "Autumn") {
    boatRentCost *= 0.95;
  }
  
  if (boatRentCost <= budget) {
    let leftMoney = budget - boatRentCost;
    console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
  } else {
    let neededMoney = boatRentCost - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`)
  }
  
}
