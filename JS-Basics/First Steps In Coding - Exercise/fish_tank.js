function calculateFilling(input) {
  let len = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percent = Number(input[3]) / 100;
  
  let volume = len * width * height;

  let volumeLiters = volume / 1000;
  let takenVolume = volumeLiters * percent;
  let finalVolume = volumeLiters - takenVolume;
  console.log(finalVolume)
}
