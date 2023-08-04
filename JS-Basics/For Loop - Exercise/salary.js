function  salary(input) {
  let tabs = Number(input[0]);
  let monthlySalary = Number(input[1]);
  
  let websitesPenalties = {
    "Facebook": 150,
    "Instagram": 100,
    "Reddit": 50,
  }
  
  let moneyLeft = true;
  
  for (let index = 2; index < (2 + tabs); index++) {
    let currentTab = input[index];
    
    if (currentTab in websitesPenalties) {
      monthlySalary -= websitesPenalties[currentTab];
      
      if (monthlySalary <= 0) {
        console.log("You have lost your salary.");
        moneyLeft = false;
        break;
      }
    }
  }
  
  if (moneyLeft) {
    console.log(monthlySalary);
  }
}
