function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let wonTournaments = 0;
    let tournamentsPoints = 0;

    for (let i = 2; i < input.length; i++) {
        let round = input[i];

        switch (round) {
            case "W":
                wonTournaments++;
                tournamentsPoints += 2000;
                break;
            case "F":
                tournamentsPoints += 1200;
                break;
            case "SF":
                tournamentsPoints += 720;
                break;
        }
    }

    let finalPoints = startingPoints + tournamentsPoints;
    let averagePoints = Math.floor(tournamentsPoints / tournamentsCount);
    let wonTournamentsPercent = wonTournaments / tournamentsCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${wonTournamentsPercent.toFixed(2)}%`)
}
