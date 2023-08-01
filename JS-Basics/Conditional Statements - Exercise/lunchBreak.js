function lunchBreak(input) {
  let seriesName = input[0];
  let seriesLenght = Number(input[1]);
  let lunchBreakLenght = Number(input[2]);

  let lunch = lunchBreakLenght / 8;
  let relaxTime = lunchBreakLenght / 4;
  
  let totalTimeNeeded = seriesLenght + lunch + relaxTime;
  
  if (lunchBreakLenght >= totalTimeNeeded) {
    let timeLeft = Math.ceil(lunchBreakLenght - totalTimeNeeded);
    console.log(`You have enough time to watch ${seriesName} and left with ${timeLeft} minutes free time.`)
  } else {
    let timeNeeded = Math.ceil(totalTimeNeeded - lunchBreakLenght);
    console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`)
  }
}
