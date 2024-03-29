function solve(array1, array2) {
  
  for (let index = 0; index < array1.length; index++) {
    currentItem = array1[index];
    
    if (array2.includes(currentItem)) {
      console.log(currentItem);
    }
  }
}
