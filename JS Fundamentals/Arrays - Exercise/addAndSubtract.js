function addAndSubtract(array) {
  let startArraySum = 0;
  let endArraySum = 0;
  
  for (let index = 0; index < array.length; index++) {
    startArraySum += array[index];
    
    if (array[index] % 2 === 0) {
      array[index] += index;
      
    } else {
      array[index] -= index;
    }
    
    endArraySum += array[index];
  }
  
  console.log(array);
  console.log(startArraySum);
  console.log(endArraySum);
  
}
