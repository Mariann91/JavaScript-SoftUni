function bonusScore(input) {
  let points = Number(input[0]);
  let bonusPoints = 0;
  
  if (points <= 100) {
    bonusScore = 5;
  } else if (points <= 1000) {
    bonusScore = points * 0.20;
    
  } else {
    bonusScore = points * 0.10;
  }
  
  if (points % 2 === 0) {
    bonusScore += 1;
  }
  
  if (points % 10 === 5) {
    bonusScore += 2;
  }
  
  points += bonusScore;

  console.log(bonusScore);
  console.log(points);
}
