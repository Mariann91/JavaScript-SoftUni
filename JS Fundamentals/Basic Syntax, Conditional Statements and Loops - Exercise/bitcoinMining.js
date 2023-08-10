function bitcoinMining(array) {
  
  let bitCoinPrice = 11949.16;
  let gramGold = 67.51;
  let day = 0;
  let bgn = 0;
  let bitCoinCounter = 0;
  let dayOfFirstBitcoinBought = 0;
  
  for (let index = 0; index < array.length; index++) {
    day++;
    
    let dailyMinedGold = array[index];
    
    if (day % 3 === 0) {
      dailyMinedGold *= 0.70;
    }
    
    bgn += dailyMinedGold * gramGold;
    
    while (bgn >= bitCoinPrice) {
      bgn -= bitCoinPrice;
      bitCoinCounter++;
      
      if (bitCoinCounter === 1) {
        dayOfFirstBitcoinBought = day;
      }
    }    
  }
  
  console.log(`Bought bitcoins: ${bitCoinCounter}`);
  
  if (dayOfFirstBitcoinBought) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoinBought}`)
  }
  
  console.log(`Left money: ${bgn.toFixed(2)} lv.`);
}
