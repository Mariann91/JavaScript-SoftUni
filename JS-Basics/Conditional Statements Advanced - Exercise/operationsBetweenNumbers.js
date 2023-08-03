function operationsBetweenNumbers(input) {
  
  function checkNumber(checkedResult) {
    if (checkedResult % 2 === 0) {
      return "even"
    } else {
      return "odd"
    }
  }
  
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let operation = input[2];
  
  switch (operation) {
    
    case "+":
      result = num1 + num2;
      console.log(`${num1} ${operation} ${num2} = ${result} - ${checkNumber(result)}`)
      break;
    case "-":
      result = num1 - num2;
      console.log(`${num1} ${operation} ${num2} = ${result} - ${checkNumber(result)}`)
      break;
    
    case "*":
      result = num1 * num2;
      console.log(`${num1} ${operation} ${num2} = ${result} - ${checkNumber(result)}`)
      break;
    
    case "/":
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`)
      } else {
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
      }
      break;
    
    case "%":
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`)
      } else {
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`)
      }
      break;   
  }
}
