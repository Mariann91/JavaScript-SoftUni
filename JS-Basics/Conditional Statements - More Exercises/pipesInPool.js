function pipesInPool(input) {
  let poolVolume = Number(input[0]);
  let pipe1VolumePerHour = Number(input[1]);
  let pipe2VolumePerHour = Number(input[2]);
  let workerAbsenceHours = Number(input[3]);
  
  let pipe1TotalVolume = pipe1VolumePerHour * workerAbsenceHours;
  let pipe2TotalVolume = pipe2VolumePerHour * workerAbsenceHours;
  
  
  let pipesTotalFilling = pipe1TotalVolume + pipe2TotalVolume;
  

  if (pipesTotalFilling <= poolVolume) {
    let currentPoolPercent = pipesTotalFilling / poolVolume * 100;
    let pipe1FillingPercent = pipe1TotalVolume / pipesTotalFilling * 100;
    let pipe2FillingPercent = pipe2TotalVolume / pipesTotalFilling * 100;
    
    console.log(`The pool is ${currentPoolPercent.toFixed(2)}% full. Pipe 1: ${pipe1FillingPercent.toFixed(2)}%. Pipe 2: ${pipe2FillingPercent.toFixed(2)}%.`);
  } else {
    let overflow = pipesTotalFilling - poolVolume;
    console.log(`For ${workerAbsenceHours} hours the pool overflows with ${overflow.toFixed(2)} liters.`)
  }
}
