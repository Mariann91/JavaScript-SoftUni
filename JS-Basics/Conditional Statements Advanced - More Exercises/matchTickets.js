function matchTickets(input) {
  let budget = Number(input[0]);
  let ticketType = input[1];
  let groupNumber = Number(input[2]);
  
  let ticketPrice = {
    "VIP": 499.99,
    "Normal": 249.99,
  }
  
  let totalTicketsPrice = groupNumber * ticketPrice[ticketType];
  let transportPrice = 0;
  
  if (groupNumber < 5) {
    transportPrice = budget * 0.75;
  } else if (groupNumber < 10) {
    transportPrice = budget * 0.60;
  } else if (groupNumber < 25) {
    transportPrice = budget * 0.50;
  }  else if (groupNumber < 50) {
    transportPrice = budget * 0.40;
  } else {
    transportPrice = budget * 0.25;
  } 
  
  let totalPrice = totalTicketsPrice + transportPrice;
  
  if (budget >= totalPrice) {
    let moneyLeft = budget - totalPrice;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
  } else {
    let neededMoney = totalPrice - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`)
  }
}
