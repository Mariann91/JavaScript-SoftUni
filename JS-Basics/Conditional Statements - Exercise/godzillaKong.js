function godzillaKong(input) {
  let budget = Number(input[0]);
  let statistsCount = Number(input[1]);
  let statistOutfitPrice = Number(input[2]);
  
  let decor = budget * 0.10;
  let OutfitCost = statistsCount * statistOutfitPrice;
  
  if (statistsCount > 150) {
    OutfitCost -= OutfitCost * 0.10;
  }
  
  let totalCost = decor + OutfitCost;
  
  if (totalCost > budget) {
    let neededMoney = totalCost - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = budget - totalCost;
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
  }
  
}
