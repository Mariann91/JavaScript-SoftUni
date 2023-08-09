function amazingNumbers(num) {
  let numAsString = String(num);
  let sumDigits = 0;
  
  for (let index = 0; index < numAsString.length; index++) {
    sumDigits += Number(numAsString[index]);
  }
  
  let sumDigitsAsString = String(sumDigits);
  let isAmazing = false;
  
  for (let index = 0; index < sumDigitsAsString.length; index++) {
    
    if (Number(sumDigitsAsString[index]) === 9) {
      isAmazing = true;
      break;
      
    }
  }
  
  if (isAmazing) {
    console.log(`${num} Amazing? True`);
    
  } else {
    console.log(`${num} Amazing? False`);
  }
}
