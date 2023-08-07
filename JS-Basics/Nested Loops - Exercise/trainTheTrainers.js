function trainTheTrainers(input) {
  let judgesCount = Number(input[0]);
  
  let index = 1;
  let totalGrade = 0;
  let currentPresentation = input[index];
  let presentationCounter = 0;
  
  while (currentPresentation !== "Finish") {
    
    let currentPresentationGrades = 0;
    presentationCounter++;
    
    for (let i2 = 1; i2 <= judgesCount; i2++) {
      index++;
      currentPresentationGrades += Number(input[index]);
    }
    
    let averagePresentationGrade = currentPresentationGrades / judgesCount;
    
    console.log(`${currentPresentation} - ${averagePresentationGrade.toFixed(2)}.`)
    
    totalGrade += averagePresentationGrade;
    index++;
    
    currentPresentation = input[index];
  }
  
  let totalAverageGrade = totalGrade / presentationCounter;
  console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`)
} 
