function solve(array) {
  let result = [];
  
  while (result.length < 2) {
    let smallestNumber = Number.MAX_VALUE;
    
    for (let item of array) {
      
      if (item < smallestNumber && !result.includes(item)) {
        smallestNumber = item;
      }
      
    }
    result.push(smallestNumber)
  }
  console.log(result.join(" "))
 }
