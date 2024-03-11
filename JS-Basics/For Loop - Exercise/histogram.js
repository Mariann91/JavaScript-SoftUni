function histogram(data) {
  let interval = Number(data[0]);
  
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  
  for (let i=1; i < data.length; i++) {
    currentNumber = Number(data[i]);
    
    if (currentNumber  < 200) {
      p1 += 1;
    } else if (currentNumber < 400) {
      p2 += 1;
    } else if (currentNumber < 600){
      p3 += 1;
    } else if (currentNumber < 800){
      p4 += 1;
    } else {
      p5 += 1;
    }    
  }  
  console.log(`${(p1 / interval * 100).toFixed(2)}%`);
  console.log(`${(p2 / interval * 100).toFixed(2)}%`);
  console.log(`${(p3 / interval * 100).toFixed(2)}%`);
  console.log(`${(p4 / interval * 100).toFixed(2)}%`);
  console.log(`${(p5 / interval * 100).toFixed(2)}%`);
}
