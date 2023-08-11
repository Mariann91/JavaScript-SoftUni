function reverseAnArrayOfNumbers(n, array) {
  let newArray = [];
  
  for (let index = 0; index < n; index++) {
    newArray.push(array[index]);
  }
  
  let stringArray = newArray.reverse().join(" ");
  
  console.log(stringArray);
  
}
