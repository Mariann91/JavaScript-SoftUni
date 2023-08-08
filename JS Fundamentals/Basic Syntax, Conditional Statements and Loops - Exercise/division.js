function division(num) {
  
  let biggestDivision = 0;
  let divisable = true;
  
  if (num % 10 === 0) {
    biggestDivision = 10;
    
  } else if (num % 7 === 0) {
    biggestDivision = 7;
    
  } else if (num % 6 === 0) {
    biggestDivision = 6;
    
  } else if (num % 3 === 0) {
    biggestDivision = 3;
    
  } else if (num % 2 === 0) {
    biggestDivision = 2;
    
  } else {
    divisable = false;
    console.log("Not divisible");
  }
  
  if (divisable) {
    console.log(`The number is divisible by ${biggestDivision}`)
  }
  
}
