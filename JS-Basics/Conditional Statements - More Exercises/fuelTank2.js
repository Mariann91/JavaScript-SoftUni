function fuelTank(input) {
  let fuelType = input[0];
  let fuelAmount = input[1];
  let card = input[2];
  
  let gasLitterPrice = 0.93;
  let dieselLitterPrice = 2.33;
  let gasolineLitterPrice = 2.22;
  
  if (card === "Yes") {
    gasLitterPrice -= 0.08;
    dieselLitterPrice -= 0.12;
    gasolineLitterPrice -= 0.18;
  }
  
  let fuelCost = 0
  
  switch (fuelType) {
    case 'Gas':
      fuelCost = fuelAmount * gasLitterPrice;
      break;
    
    case 'Diesel':
      fuelCost = fuelAmount * dieselLitterPrice;
      break;
    
    case 'Gasoline':
      fuelCost = fuelAmount * gasolineLitterPrice;
      break;
  }
  
  if (fuelAmount >= 20 && fuelAmount <= 25) {
    fuelCost -= fuelCost * 0.08;
  } else if (fuelAmount > 25) {
    fuelCost -= fuelCost * 0.1;
  }
  
  console.log(`${fuelCost.toFixed(2)} lv.`)
  
}
