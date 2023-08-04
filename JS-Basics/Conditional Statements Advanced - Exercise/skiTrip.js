function skiTrip(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let grade = input[2];
  
  let pricesInfo = {
    "room for one person": 18,
    "apartment": 25,
    "president apartment": 35,
  }
  
  let nights = days - 1;
  let skiVacationPrice = pricesInfo[roomType] * nights;
  
  switch (roomType) {
    
    case "apartment":
      
      if (days < 10) {
        skiVacationPrice *= 0.70;
      } else if (days <= 15) {
        skiVacationPrice *= 0.65;
      } else {
        skiVacationPrice *= 0.50;
      }
      break;
    
    case "president apartment":
      
      if (days < 10) {
        skiVacationPrice *= 0.90;
      } else if (days <= 15) {
        skiVacationPrice *= 0.85;
      } else {
        skiVacationPrice *= 0.80;
      }
      break;
  }
  
  switch (grade) {
    case "positive":
      skiVacationPrice *= 1.25;
      break;
    case "negative":
      skiVacationPrice *= 0.90;
      break;
  }
  
  console.log(skiVacationPrice.toFixed(2));
}
