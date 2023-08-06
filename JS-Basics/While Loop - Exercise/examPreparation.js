function examPreparation(input) {
    let badGrades = Number(input[0]);

    let index = 1;
    let lastProblem = input[index];
    let sumGrades = 0;
    let taskCounter = 0;
    let breakFlag = false;
    let badGradesCounter = 0;
    let lastTask = "";

    while (lastProblem !== "Enough") {
        let currentGrade = Number(input[index + 1]);
        sumGrades += currentGrade;
        taskCounter++;

        if (currentGrade <= 4 ) {
            badGradesCounter++;

            if (badGradesCounter === badGrades){
                console.log(`"You need a break, ${badGrades} poor grades.`)
                breakFlag = true;
                break;
            }
                
        }

        index += 2;
        lastProblem = input[index];

        if (lastProblem !== "Enough") {
            lastTask = lastProblem;
        }

    }

    if (! breakFlag) {
        console.log(`Average score: ${(sumGrades / taskCounter).toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastTask}`)
    }
}
