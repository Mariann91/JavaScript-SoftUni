function solve(n, k) {
  
  let result = [1];

  for (let index = 1; index < n; index++) {
    let currentIndex = index;
    let currentNumber = 0;
    
    for (let i = 0; i < k; i++) {
      
      if (currentIndex > 0) {
        currentIndex -= 1;
        currentNumber += result[currentIndex];
      }
    }
    result.push(currentNumber);
  }
  console.log(result.join(" "));
 }
