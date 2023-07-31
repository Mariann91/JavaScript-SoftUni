function weatherForecast2(input) {
  if (input[0] < 5.00 || input[0] > 35) {
    console.log("unknown");
    
  } else if (input[0] < 12) {
    console.log("Cold");
    
  } else if (input[0] < 15) {
    console.log("Cool");
    
  } else if (input[0] < 20.1) {
    console.log("Mild");
    
  } else if (input[0] < 26) {
    console.log("Warm");
  
  } else if (input[0] < 35.1) {
    console.log("Hot");
  } 
  
}
