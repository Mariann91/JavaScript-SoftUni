function triangleArea(side1, side2, side3) {
   let semiPerimeter = 0.5 * (side1 + side2 + side3);
   let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3))
   
   console.log(area);

}
