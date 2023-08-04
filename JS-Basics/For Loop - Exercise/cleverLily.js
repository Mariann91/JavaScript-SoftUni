function  cleverLily(input) {
  let age = Number(input[0]);
  let washingMashinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  
  let evenYearsMoney = 10;
  let savedMoney = 0;
  
  for (let year = 1; year <= age; year++) {
    
    if (year % 2 !== 0) {
      savedMoney += toyPrice;
      
    } else {
      savedMoney += evenYearsMoney - 1;
      evenYearsMoney += 10;
    }
  }
  
  if (savedMoney >= washingMashinePrice) {
    let moneyLeft = savedMoney - washingMashinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}` )
  } else {
    let neededMoney = washingMashinePrice - savedMoney;
    console.log(`No! ${neededMoney.toFixed(2)}`)
  }
  
}
