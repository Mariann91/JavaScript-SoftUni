function sFigures(input) {
  let figure = input[0];
  
  if (figure === "square") {
    let squareSide = Number(input[1]);
    let figureFace = squareSide * squareSide;
    
    console.log(figureFace);
    
  } else if (figure === "rectangle") {
    let shortSide = Number(input[1]);
    let longSide = Number(input[2]);
    let figureFace = shortSide * longSide;
    
    console.log(figureFace);
    
  } else if (figure === "circle") {
    let radius = Number(input[1]);
    let figureFace = Math.PI * radius ** 2;
    
    console.log(figureFace);
    
  } else if (figure === "triangle") {
    let side = Number(input[1]);
    let height = Number(input[2]);
    let figureFace = side * height / 2;
    
    console.log(figureFace.toFixed(3));
  }
  
}
