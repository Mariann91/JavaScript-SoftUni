function solve(array) {
  let result = [];
  
  
  for (let index = 1; index < array.length; index++) {
    
    if (index % 2 !== 0) {
      result.push(array[index] * 2)
    }
  
  }
  
  console.log(result.reverse().join(" "))
  
 }
