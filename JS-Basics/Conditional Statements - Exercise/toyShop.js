function toyShop(input) {
  let puzzlePrice = 2.60;
  let talkingDollPrice = 3.00;
  let TeddyBearPrice = 4.10;
  let MinionPrice = 8.20;
  let TruckPrice = 2;
  
  let tourPrice = Number(input[0]);
  
  let puzzleCount = Number(input[1]);
  let talkingDollCount = Number(input[2]);
  let TeddyBearCount = Number(input[3]);
  let MinionCount = Number(input[4]);
  let TruckCount = Number(input[5]);
  
  let earnedMoney = puzzlePrice  * puzzleCount + talkingDollPrice * talkingDollCount + TeddyBearPrice * TeddyBearCount + MinionPrice * MinionCount + TruckPrice * TruckCount;
  let soldItemsCount = puzzleCount + talkingDollCount + TeddyBearCount + MinionCount + TruckCount;
  
  if (soldItemsCount >= 50) {
    earnedMoney -= earnedMoney * 0.25;
  }
  
  let rent = earnedMoney * 0.10;
  let leftMoney = earnedMoney - rent;

  if (leftMoney >= tourPrice) {
    finalMoney = leftMoney - tourPrice;
    console.log(`Yes! ${finalMoney.toFixed(2)} lv left.`)
  } else {
    let finalMoney = tourPrice - leftMoney;
    console.log(`Not enough money! ${finalMoney.toFixed(2)} lv needed.`)
  }
  
}
