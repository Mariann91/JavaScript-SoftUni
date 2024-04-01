function solve(array) {
  
  let sortedArray = array.sort();
  let counter = 1;
  
  for (let item of sortedArray) {
    console.log(`${counter}.${item}`)
    counter++;
  }
 }
