function solve(rows) {
  let result = ``;
  
  for (let row = 1; row  <= rows; row++) {
    
    for (let col = 0; col < row; col++) {
      result += `${row} `;
    }
    result += "\n"
  }

   console.log(result)

}
