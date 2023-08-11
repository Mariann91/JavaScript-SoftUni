function sumEvenNumbers(array) {
  let arrayEvenSum = 0;
  
  for (let index = 0; index < array.length; index++) {
    let currentNumber = Number(array[index]);
    
    if (currentNumber % 2 === 0) {
      arrayEvenSum += currentNumber;
    }
    
  }
  
  console.log(arrayEvenSum);
    
}
