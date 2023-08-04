function  multiplicationTable(input) {
  let number = Number(input[0]);
  
  for (let num = 1; num <= 10; num++) {
    result = num * number;
    console.log(`${num} * ${number} = ${result}`);
  }
}
