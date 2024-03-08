function tennisRanklist(data) {
  let tournaments = Number(data[0]);
  let startingPoints = Number(data[1]);
  let wonPoints = 0;
  let wins = 0;
  
  let points = {
    'W': 2000,
    'F': 1200,
    'SF': 720,
  }
  
  for (i=2; i <= data.length - 1; i++) {
    let currentTournamentPoints = points[data[i]]
    
    wonPoints += currentTournamentPoints;
    
    if (currentTournamentPoints === 2000) {
      wins += 1;
    }  
  }
  
  let finalPoints = startingPoints + wonPoints;
  
  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${Math.floor(wonPoints / tournaments)}`)
  console.log(`${((wins / tournaments) * 100).toFixed(2)}%`)
}
