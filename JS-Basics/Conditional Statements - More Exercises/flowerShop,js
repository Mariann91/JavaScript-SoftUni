function flowerShop(input) {
  let magnoliaCount = input[0];
  let zombuilCount = input[1];
  let roseCount = input[2];
  let cactusCount = input[3];
  
  let giftPrice = input[4];
  
  let magnoliaPrice = 3.25;
  let zombuilPrice = 4;
  let rosePrice = 3.5;
  let cactusPrice = 8;
  
  let earnedMoney = magnoliaCount * magnoliaPrice + zombuilCount * zombuilPrice + roseCount * rosePrice + cactusCount * cactusPrice;
  let taxes = earnedMoney * 0.05;
  let finalMoney = earnedMoney - taxes;
  
  if (finalMoney >= giftPrice ){
    leftMoney = Math.floor(finalMoney - giftPrice);
    console.log(`She is left with ${leftMoney} leva.`)
  } else {
    neededMoney = Math.ceil(giftPrice - finalMoney);
    console.log(`She will have to borrow ${neededMoney} leva.`)
  }
  
}
