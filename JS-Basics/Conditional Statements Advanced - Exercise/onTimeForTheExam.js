function onTimeForTheExam(input) {
  
  function returnOutput(minutes) {
    if (minutes < 10) {
      return `0${minutes}`;
    } else {
      return `${minutes}`;
    } 
  }
  
  let examHour = Number(input[0]);
  let examMinutes = Number(input[1]);
  let arivalHour = Number(input[2]);
  let arivalMinutes = Number(input[3]);
  
  let examTimeMinutes = examHour * 60 + examMinutes;
  let arivalTimeMinutes = arivalHour * 60 + arivalMinutes;
  
  let difference = Math.abs(examTimeMinutes - arivalTimeMinutes);
  
  if (arivalTimeMinutes > examTimeMinutes) {
    console.log("Late")
    
    if (difference < 60) {
      let lateMinutes = difference;
      console.log(`${lateMinutes} minutes after the start`);
    } else {
      let lateHours = Math.floor(difference / 60);
      let lateMinutes = difference % 60;
      console.log(`${lateHours}:${returnOutput(lateMinutes)} hours after the start`);
    }
  }
  
  if (arivalTimeMinutes === examTimeMinutes) {
    console.log("On time")
  }
  
  if (arivalTimeMinutes < examTimeMinutes && difference <= 30) {
    console.log("On time")
    let yearlyMinets = difference;
    console.log(`${yearlyMinets} minutes before the start`)
  } else if (arivalTimeMinutes < examTimeMinutes && difference < 60) {
    console.log("Early");
    let yearlyMinets = difference;
    console.log(`${yearlyMinets} minutes before the start`)
  } else if (arivalTimeMinutes < examTimeMinutes && difference >= 60) {
    console.log("Early");
    let yearlyMinets = difference % 60;
    let yearlyHours = Math.floor(difference / 60);
    console.log(`${yearlyHours}:${returnOutput(yearlyMinets)} hours before the start`)
  }

}
