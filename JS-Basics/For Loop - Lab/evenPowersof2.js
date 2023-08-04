function evenPowersof2(input) {
  let n = Number(input[0]);
  
  for (let num = 0; num <= n; num += 2) {
    console.log(2 ** num);
  }
 
}
