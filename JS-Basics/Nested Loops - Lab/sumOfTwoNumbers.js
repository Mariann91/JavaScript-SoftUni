function sumOfTwoNumbers(input) {
  let startInterval = Number(input[0]);
  let endInterval = Number(input[1]);
  let magicNumber = Number(input[2]);
  
  let foundMagicNumber = false;
  let combinationCounter = 0;
  
  for (let num1 = startInterval; num1 <= endInterval; num1++) {
    
     for (let num2 = startInterval; num2 <= endInterval; num2++) {
       combinationCounter++;
       
       if (num1 + num2 === magicNumber) {
         console.log(`Combination N:${combinationCounter} (${num1} + ${num2} = ${magicNumber})`);
         foundMagicNumber = true;
         break;
       }
     }
     
     if (foundMagicNumber) {
       break;
     }
  }
  
  if (! foundMagicNumber) {
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
  }
}
