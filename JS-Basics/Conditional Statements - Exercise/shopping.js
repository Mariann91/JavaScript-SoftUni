function shopping(input) {
  let budget = Number(input[0]);
  let videocardCount = Number(input[1]);
  let ProcessorsCount = Number(input[2]);
  let ramCount = Number(input[3]);
  
  let videocardPricePerPc = 250;
  let videocardTotalPrice = videocardCount * videocardPricePerPc;
  
  let processorPricePerPc = videocardTotalPrice * 0.35;
  let processorTotalPrice = processorPricePerPc * ProcessorsCount;
  
  let ramPricePerPc = videocardTotalPrice * 0.10;
  let ramTotalPrice = ramPricePerPc * ramCount;
  
  let totalPrice = videocardTotalPrice + processorTotalPrice + ramTotalPrice;
  
  if (videocardCount > ProcessorsCount) {
    totalPrice -= totalPrice * 0.15;
  }
  
  if (budget < totalPrice) {
    let neededMoney = totalPrice - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`)
  } else {
    let moneyLeft = budget - totalPrice;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
  }
}
