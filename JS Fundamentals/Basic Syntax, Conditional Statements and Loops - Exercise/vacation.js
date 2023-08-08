function vacation(groupNumber, groupType, day) {
  let totalPrice = 0;
  
  switch (groupType) {
    case "Students":
      
      switch (day) {
        
        case "Friday":
          totalPrice = groupNumber * 8.45;
          break;
        
        case "Saturday":
          totalPrice = groupNumber * 9.80;
          break;
        
        case "Sunday":
          totalPrice = groupNumber * 10.46;
          break;
      }
      
      if (groupNumber >= 30) {
        totalPrice *= 0.85;
      }
      
      break;
    
    case "Business":
      
      switch (day) {
        
        case "Friday":
          totalPrice = groupNumber * 10.90;
          break;
        
        case "Saturday":
          totalPrice = groupNumber * 15.60;
          break;
        
        case "Sunday":
          totalPrice = groupNumber * 16;
          break;
      }
      
      if (groupNumber >= 100) {
        
        let priceTenPeople = (totalPrice / groupNumber) * 10;
        
        totalPrice -= priceTenPeople;
      }
      
      break;
      
    case "Regular":
      
      switch (day) {
        
        case "Friday":
          totalPrice = groupNumber * 15;
          break;
        
        case "Saturday":
          totalPrice = groupNumber * 20;
          break;
        
        case "Sunday":
          totalPrice = groupNumber * 22.50;
          break;
      }
      
      if (groupNumber >= 10 && groupNumber <= 20) {
        totalPrice *= 0.95;
      }
      
      break;
    
  }
  
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
  
}
