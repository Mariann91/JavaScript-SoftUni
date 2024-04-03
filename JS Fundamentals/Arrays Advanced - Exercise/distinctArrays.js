function solve(array) {
  
  let newArray = [];
  
  for (let index = 0; index < array.length; index++) {
    
    if (!(newArray.includes(array[index]))) {
      
      newArray.push(array[index])
    }
  }
  console.log(newArray.join(" "))
}
