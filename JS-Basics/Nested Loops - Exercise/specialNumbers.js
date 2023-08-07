function specialNumbers(input) {
  let n = Number(input[0]);
  
  let startNumber = 1111;
  let endNumber = 9999;
  let result = ""
  
  for (let num = startNumber; num <= endNumber; num++) {
    let currentNumber = String(num);
    let specialCounter = 0
    
    for (let index = 0; index < currentNumber.length; index++) {
      let digit = Number(currentNumber[index]);
      
      if (n % digit === 0) {
        specialCounter++;
      }
    }
    
    if (specialCounter === 4) {
      result += currentNumber + " "
    }
  }
  console.log(result)
} 
