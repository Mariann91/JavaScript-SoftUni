function  graduation(input) {
  let studentName = input[0];
  let years = 12;

  let year = 1;
  let sumGrades = 0;
  let badGradesCount = 0;
  let graduated = true

  while (year <= years) {

    grade = Number(input[year]);

    if (grade < 4) {
        badGradesCount += 1;

        if (badGradesCount > 1) {
            console.log(`${studentName} has been excluded at ${year} grade`);
            graduated = false;
            break;
        }
    } else {
        year++;
    }
    sumGrades += grade;
  }
  
  if (graduated) {
    console.log(`${studentName} graduated. Average grade: ${(sumGrades / years).toFixed(2)}`);
  }
    
}
