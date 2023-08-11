function dayOfWeek(day) {

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let dayIndex = day - 1;
  
  if (dayIndex >= 0 && dayIndex <= 6) {
    console.log(days[dayIndex]);
    
  } else {
    console.log("Invalid day!");
  }
  
}
