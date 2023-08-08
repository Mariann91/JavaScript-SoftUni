function sumOfOddNumbers(oddNumbers) {

  let oddCounter = 0;
  let num = 0;
  let oddSum = 0;
  
  while (oddCounter < oddNumbers) {
    
    num++;
    
    if (num % 2 !== 0) {
      oddCounter++;
      oddSum += num;
      console.log(num);
    }
    
  }
  
  console.log(`Sum: ${oddSum}`);

}
