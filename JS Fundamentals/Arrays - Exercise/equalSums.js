function solve(array) {
  let index = 1;
  
  if (array.length == 1) {
    console.log(0);
  } else {
    
    while (true) {
    if (index == array.length) {
      console.log("no");
      break
    }
    
    let leftSum = 0;
    let rightSum = 0;
    
    for (let i1 = index; i1 >= 0; i1--) {
      leftSum += array[i1];
    }
    
    for (let i2 = index; i2 < array.length; i2++) {
      rightSum += array[i2];
    }
    
    if (leftSum === rightSum) {
      console.log(index);
      break;
    }
    index++;
   }
 }
}
  
