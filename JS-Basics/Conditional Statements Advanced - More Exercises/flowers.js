function flowers(input) {
  let boughtHrizantemi = input[0];
  let boughtRoses = input[1];
  let boughtTulips = input[2];
  let season = input[3];
  let isHoliday = input[4];
  
  let flowersPrice = 0;
  let flowersCount = boughtHrizantemi + boughtRoses + boughtTulips;
  
  switch (season) {
    
    case "Spring":
    case "Summer":
      flowersPrice = boughtHrizantemi * 2 + boughtRoses * 4.1 + boughtTulips * 2.50;
      break;
      
    case "Autumn":
    case "Winter":
       flowersPrice = boughtHrizantemi * 3.75 + boughtRoses * 4.5 + boughtTulips * 4.15;
      break;
    
  }
  
  switch (isHoliday) {
    case "Y":
      flowersPrice *= 1.15;
  }
  
  if (boughtTulips > 7 && season === "Spring") {
    flowersPrice *= 0.95;
  }
  
  if (boughtRoses >= 10 && season === "Winter") {
    flowersPrice *= 0.90;
  }
  
  if (flowersCount > 20) {
    flowersPrice *= 0.80;
  }
  
  let finalPrice = flowersPrice + 2;
  
  console.log(finalPrice.toFixed(2));
}
