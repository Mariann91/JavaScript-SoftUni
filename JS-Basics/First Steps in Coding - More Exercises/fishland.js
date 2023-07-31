function calculateFishPrice(input) {
  let skumriaKgPrice = input[0];
  let cacaKgPrice = input[1];
  let palamudKilograms = input[2];
  let safridKilograms = input[3];
  let midiKilograms = input[4];
  
  let palamudKgPrice = skumriaKgPrice + skumriaKgPrice * 0.60;
  let safridKgPrice = cacaKgPrice + cacaKgPrice * 0.80;
  let midiKgPrice = 7.50;
  
  let totalPrice = palamudKilograms * palamudKgPrice + safridKilograms * safridKgPrice + midiKgPrice * midiKilograms;
  
  console.log(totalPrice.toFixed(2))
}
