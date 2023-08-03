function cinema(input) {
  let projectionType = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);
  
  let totalSeats = rows * cols;
  
  let ticketPriseInfo = {
    "Premiere": 12.00,
    "Normal": 7.50,
    "Discount": 5.00,
  }
  
  let earnedMoney = ticketPriseInfo[projectionType] * totalSeats;
  console.log(earnedMoney.toFixed(2) + " leva");
  
}
