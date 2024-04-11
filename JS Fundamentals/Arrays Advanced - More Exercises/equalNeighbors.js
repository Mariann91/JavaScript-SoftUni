function solve(matrix) {
  let pairs = 0;
  
  function checkValidIndex(index) {
    if (index >=0 && index < matrix.length) {
      return true
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    
    for (let col = 0; col < matrix[row].length; col++) {
      
      if (checkValidIndex(col + 1)) {
        if (matrix[row][col] === matrix[row][col + 1]) {
          pairs += 1
        }
      }
      
      if (checkValidIndex(row - 1)) {
        if (matrix[row][col] === matrix[row - 1][col]) {
          pairs += 1
        }
      }
      
    }
  }
  console.log(pairs)
}
