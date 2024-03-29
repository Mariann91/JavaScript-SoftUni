function solve(array) {

  let newArray = [];
  
  for (let item of array) {
    
    if (Number(item) >= 0) {
      newArray.push(item);
      
    } else {
      newArray.unshift(item);
    }
  }
 console.log(newArray.join("\n"))
}
