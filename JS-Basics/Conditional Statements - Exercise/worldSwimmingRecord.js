function worldSwimmingRecord(input) {
  let worldRecordSeconds = Number(input[0]);
  let distance = Number(input[1]);
  let secondsForOneMeter = Number(input[2]);
  
  let ivanTime = distance * secondsForOneMeter + Math.floor(distance / 15) * 12.50;

  if (ivanTime < worldRecordSeconds) {
    console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
  } else {
    let neededSeconds = ivanTime - worldRecordSeconds;
    console.log(`No, he failed! He was ${neededSeconds.toFixed(2)} seconds slower.`)
  }
}
