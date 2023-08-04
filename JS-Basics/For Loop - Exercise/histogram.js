function  histogram(input) {
  let range = Number(input[0]);
  
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  
  for (let index = 1; index <= range; index++) {
    
    if (input[index] < 200) {
      ++p1;
      
    } else if (input[index] < 400) {
      ++p2;
      
    } else if (input[index] < 600) {
      ++p3;
      
    } else if (input[index] < 800) {
      ++p4;
      
    } else {
      ++p5;
    }
  }
  
  let percentP1 = p1 / input[0] * 100;
  let percentP2 = p2 / input[0] * 100;
  let percentP3 = p3 / input[0] * 100;
  let percentP4 = p4 / input[0] * 100;
  let percentP5 = p5 / input[0] * 100;
  
  console.log(`${percentP1.toFixed(2)}%`);
  console.log(`${percentP2.toFixed(2)}%`);
  console.log(`${percentP3.toFixed(2)}%`);
  console.log(`${percentP4.toFixed(2)}%`);
  console.log(`${percentP5.toFixed(2)}%`);
}
