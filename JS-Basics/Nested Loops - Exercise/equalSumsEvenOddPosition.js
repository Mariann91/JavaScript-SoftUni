function equalSumsEvenOddPosition(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  
  let result = ""
  
  for (let num = startNumber; num <= endNumber; num++) {
    let checkedNumber = String(num);
    
    let evenSum = 0;
    let oddSum = 0;
    
    for (let index = 0; index < checkedNumber.length; index++) {
      
      if (index % 2 === 0) {
        evenSum += Number(checkedNumber[index]);
        
      } else {
        oddSum += Number(checkedNumber[index]);
      }
    }
    
    if (evenSum === oddSum) {
      result += checkedNumber + " "
    }
  }
  
  console.log(result);
     
}
