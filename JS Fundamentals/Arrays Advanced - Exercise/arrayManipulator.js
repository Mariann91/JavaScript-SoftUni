function solve(array, commands) {
 
  
  for (let item of commands) {
    let commandInfo = item.split(" ");
    
    let command = commandInfo[0];
    let index;
    let element;
    let numbers;
    let times;
    let sumArray= [];
    
    switch (command) {
      case 'add':
        index = Number(commandInfo[1]);
        element = Number(commandInfo[2]);
        
        array.splice(index, 0, element);
        break;
      
      case "addMany":
        
        numbers = commandInfo.slice(1, commandInfo.length).map(x=> Number(x));
        index = numbers.splice(0, 1)[0];
        
        for (let counter = 0; counter < numbers.length; counter++) {
          array.splice(index + counter, 0, numbers[counter]);
        }
        
        break;
      
      case "contains":
        
        console.log(array.indexOf(Number(commandInfo[1])));
        break;
      
      case "remove":
        index = Number(commandInfo[1]);
        
        array.splice(index, 1);
        
        break;
      
      case "shift":
        times = Number(commandInfo[1]);

        for (let i = 0; i < times; i++) {
          array.push(array.shift())
        }
        
        break;
      
      case "sumPairs":       

        for (let k = 0; k < array.length; k += 2) {
          
          if (k + 1 == array.length) {
            sumArray.push(array[k]);
          } else {
            sumArray.push(array[k] + array[k + 1]);
          }  
        }
          
        array = sumArray
        
        break;
      
      case "print":
        console.log(`[ ${array.join(", ")} ]`)
        break;

    }     
  }
}
