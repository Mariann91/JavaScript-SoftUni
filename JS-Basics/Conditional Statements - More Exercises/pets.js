function pets(input) {
 let tourDays = input[0];
 let leftFoodKgs = input[1];
 let dogFoodKgs = input[2];
 let catFoodKgs = input[3];
 let turtleFoodKgs = input[4] / 1000;
 
 let foodNeeded = tourDays * (dogFoodKgs + catFoodKgs + turtleFoodKgs);
 
 if (leftFoodKgs >= foodNeeded) {
   let foodLeft = leftFoodKgs - foodNeeded
   console.log(`${Math.floor(foodLeft)} kilos of food left.`);
 } else {
   let deficitFood = foodNeeded - leftFoodKgs;
   console.log(`${Math.ceil(deficitFood)} more kilos of food are needed.`)
 }
}
