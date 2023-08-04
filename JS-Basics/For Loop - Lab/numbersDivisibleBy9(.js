function  numbersDivisibleBy9(input) {
  let startIndex = Number(input[0]);
  let endtIndex = Number(input[1]);
  
  let numbersArray = []
  let sumNumbersArray = 0;
  
  for (let num = startIndex; num <= endtIndex; num++) {
    if (num % 9 === 0) {
      sumNumbersArray += num;
      numbersArray.push(num);
    }
  }
  
  console.log(`The sum: ${sumNumbersArray}`);
  let numbersArrayLength = numbersArray.length
  
  for (let index = 0; index < numbersArrayLength; index++) {
    console.log(numbersArray[index]);
  }
}
