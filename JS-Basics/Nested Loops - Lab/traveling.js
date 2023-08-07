function traveling(input) {
  
  let index1 = 0;
  let destination = input[index1];
  
  while (destination !== "End") {
    let minBudget = Number(input[index1 + 1]);
    
    let index2 = index1 + 2;
    let savedMoney = 0;
    
    while (savedMoney < minBudget) {
      savedMoney += Number(input[index2]);
      index2++;
      
    }
    
    console.log(`Going to ${destination}!`)
    
    index1 += index2 - index1;
    destination = input[index1];
    
  }
}
