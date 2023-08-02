function sleepyTomCat(input) {
  let freeDays = Number(input[0]);
  
  let workingDays = 365 - freeDays;
  let tomYearlyPlayingNorm = 30000;
  
  let freeDaysPlayingMinutes = freeDays * 127;
  let workingDaysPlayingMinutes = workingDays * 63;
  
  let totalMinutes = freeDaysPlayingMinutes + workingDaysPlayingMinutes;

  if (totalMinutes <= tomYearlyPlayingNorm) {
    console.log("Tom sleeps well");
    let lessTime = tomYearlyPlayingNorm - totalMinutes;
    let lessHours = Math.trunc(lessTime / 60);
    let lessMinutes = lessTime % 60;
    console.log(`${lessHours} hours and ${lessMinutes} minutes less for play`)
  } else {
    console.log("Tom will run away");
    let moreTime = totalMinutes - tomYearlyPlayingNorm;
    let moreHours = Math.trunc(moreTime / 60);
    let moreMinutes = moreTime % 60;
    console.log(`${moreHours} hours and ${moreMinutes} minutes more for play`)
  }
}
