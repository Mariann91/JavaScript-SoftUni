function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);
  
  for (let floor = floors; floor >= 1; floor--) {
    let currentFloor = ""
    for (let room = 0; room < rooms; room++) {
      let roomNumber = `${floor}${room}`;
      
      if (floor === floors) {
        currentFloor += `L${roomNumber} `;
        
      } else if (floor % 2 !== 0) {
        currentFloor += `A${roomNumber} `;
        
      } else {
        currentFloor += `O${roomNumber} `;
      }
      
    }
    
    console.log(currentFloor);
  }
}
