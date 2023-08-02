function fuelTank(input) {
  let fuelType = input[0];
  let fuelAmount = input[1];
  
  switch (fuelType) {
    case 'Diesel':
      if (fuelAmount < 25 ){
        console.log("Fill your tank with diesel!")
      } else {
        console.log("You have enough diesel.")
      }
      break;
    case 'Gasoline':
      if (fuelAmount < 25 ){
        console.log("Fill your tank with gasoline!")
      } else {
        console.log("You have enough gasoline.")
      }
      break;
    
    case 'Gas':
      if (fuelAmount < 25 ){
        console.log("Fill your tank with gas!")
      } else {
        console.log("You have enough gas.")
      }
      break;
    
    default:
      console.log("Invalid fuel!")
  }
}
