function workingHours(data) {
  let hour = Number(data[0]);
  let day = data[1];
  
  let open = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ]
  if (open.includes(day) && hour >= 10 && hour <= 18) {
    
    console.log('open');
  } else {
    console.log("closed");
  }
  
}
