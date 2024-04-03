function solve(data) {
  let wagons = data.splice(0, 1)[0].split(" ").map(x => Number(x));
  let maxCapacity = Number(data.splice(0, 1)[0]);
  
  
  for (let item of data) {
    let commandInfo = item.split(" ");
    
    if (commandInfo[0] == "Add") {
      wagons.push(Number(commandInfo[1]));
      
    } else {
      
      for (let index = 0; index < wagons.length; index++) {
        
        if (wagons[index] + Number(commandInfo[0]) <= maxCapacity) {
          wagons[index] += Number(commandInfo[0]);
          break;
        }
      }
      
    }
  }
  console.log(wagons.join(" "));
}
