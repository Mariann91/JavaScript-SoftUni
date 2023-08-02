function harvest(input) {
  let field = input[0];
  let grapePerSqM = input[1];
  let neededWine = input[2];
  let workersCount = input[3];
  
  let totalGrape = field * grapePerSqM;
  let grapeForWine = totalGrape * 0.40;
  let producedWine = grapeForWine / 2.5;
  
  if (producedWine < neededWine) {
    let minusWine = Math.floor(neededWine - producedWine);
    console.log(`It will be a tough winter! More ${minusWine} liters wine needed.`)
  } else {
    console.log(`Good harvest this year! Total wine: ${Math.floor(producedWine)} liters.`)
    let wineLeft = Math.ceil(producedWine - neededWine);
    let winePerWorker = Math.ceil(wineLeft / workersCount);
    console.log(`${wineLeft} liters left -> ${winePerWorker} liters per person.`)
    
  }
}
