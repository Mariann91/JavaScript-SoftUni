function sumDigits(inputNumber) {
  
  let inputNumberAsString = inputNumber.toString()
  let DigitsSum = 0;
  
  for (let index = 0; index < inputNumberAsString.length; index++) {
    let currentDigit = Number(inputNumberAsString[index]);
    
    DigitsSum += currentDigit;
    
  }
  
  console.log(DigitsSum);

}
