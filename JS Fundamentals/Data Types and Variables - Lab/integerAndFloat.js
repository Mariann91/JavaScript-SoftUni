function integerAndFloat(num1, num2, num3) {
  let sumNums = num1 + num2 + num3;
  let stringSumNums = String(sumNums);
  let isFloat = false;
  
  for (let index = 0; index < stringSumNums.length; index++) {
    let digit = stringSumNums[index];
    
    if (digit === ".") {
      isFloat = true;
      break;
    }
  }
  
  if (isFloat) {
    console.log(`${sumNums} - Float`);
  } else {
    console.log(`${sumNums} - Integer`);
  }
  
}
