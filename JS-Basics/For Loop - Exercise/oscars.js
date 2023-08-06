function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    let inputLength = input.length;
    let nominationPoints = 1250.5;
    let gotNomination = false;
    let actorPoints = startingPoints;

    for (let i = 3; i < inputLength; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);
        let currentJudgeTotalPoints = (judgeName.length * judgePoints) / 2;

        actorPoints += currentJudgeTotalPoints;

        if (actorPoints > nominationPoints) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
            gotNomination = true;
            break;
        }
    }

    if (! gotNomination) {
        let neededPoints = nominationPoints - actorPoints;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`)
    }

}
