function specialNumbers(n) {
  
  for (let num = 1; num <= n; num++) {
    let stringNum = num.toString();
    
    let sumCurrentNum = 0
    
    for (let index = 0; index < stringNum.length; index++) {
      
      sumCurrentNum += Number(stringNum[index]);
    }
    
    if (sumCurrentNum === 5 || sumCurrentNum === 7 || sumCurrentNum === 11) {
      console.log(`${num} -> True`);
      
    } else {
      console.log(`${num} -> False`);
    }
  }
}
