function rounding(num, decimals) {
  
  if (decimals > 15) {
    decimals = 15;
  }
  
  console.log(parseFloat(num.toFixed(decimals)))
  
}
