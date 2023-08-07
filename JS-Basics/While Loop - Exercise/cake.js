function cake(input) {
  let cakeLength = Number(input[0]);
  let cakeWidth = Number(input[1]);
  
  let totalCakePieces = cakeLength * cakeWidth;
  let index = 2;
  let leftCakePieces = true;
  
  let currentPieces = input[index];
  
  while (currentPieces !== "STOP") {
    currentPieces = Number(currentPieces);
    
    if (totalCakePieces - currentPieces <= 0) {
      console.log(`No more cake left! You need ${currentPieces - totalCakePieces} pieces more.`);
      leftCakePieces = false;
      break;
    }
    
    totalCakePieces -= currentPieces;
    index++;
    currentPieces = input[index];
    
  }
  
  if (leftCakePieces) {
    console.log(`${totalCakePieces} pieces are left.`);
  }
  
}
