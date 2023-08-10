function sortNumbers(num1, num2, num3) {
  let numbersArray = [num1, num2, num3];
  
  numbersArray.sort();
  numbersArray.reverse();
  
  for (let index = 0; index < numbersArray.length; index++) {
    console.log(numbersArray[index]);
  }
  
}
