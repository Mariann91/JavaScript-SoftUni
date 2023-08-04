function  sumOfNumbers(input) {
  let number = input[0];
  let numberLength = number.length;
  
  let digitSum = 0;
  
  for (let index = 0; index < numberLength; index++) {
    digitSum += Number(number[index]);
  }
  console.log(`The sum of the digits is:${digitSum}`);
}
