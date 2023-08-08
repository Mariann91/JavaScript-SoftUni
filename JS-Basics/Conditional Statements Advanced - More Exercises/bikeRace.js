function bikeRace(input) {
  let juniorsCount = input[0];
  let seniorsCount = input[1];
  let traiceType = input[2];
  
  let juniorsTaxes = 0;
  let seniorTaxes = 0
  
  switch (traiceType) {
    
    case "trail":
      juniorsTaxes = juniorsCount * 5.50;
      seniorTaxes = seniorsCount * 7;
      break;
      
    case "cross-country":
      juniorsTaxes = juniorsCount * 8;
      seniorTaxes = seniorsCount * 9.5;
      
      if (juniorsCount + seniorsCount >= 50) {
        juniorsTaxes *= 0.75;
        seniorTaxes *= 0.75;
      }
      
      break;
      
    case "downhill":
      juniorsTaxes = juniorsCount * 12.25;
      seniorTaxes = seniorsCount * 13.75;
      break;
      
    case "road":
      juniorsTaxes = juniorsCount * 20;
      seniorTaxes = seniorsCount * 21.50;
      break;
    
  }
  
  let totalAmount = juniorsTaxes + seniorTaxes;
  let organisationCost = totalAmount * 0.05;
  let giftedAmount = totalAmount - organisationCost;
  
  console.log(giftedAmount.toFixed(2));
  
}
