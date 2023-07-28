function calculateWorkPlaces (input) {
  let hallWidth = input[1] * 100 - 100;
  let hallHeight = input[0] * 100;
  
  let widthPlaces = Math.trunc(hallWidth / 70);
  let heightPlaces = Math.trunc(hallHeight / 120);
  let totalPlaces = widthPlaces * heightPlaces - 3;
  console.log(totalPlaces);
}
