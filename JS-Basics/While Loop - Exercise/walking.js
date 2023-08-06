function walking(input) {

    let targetSteps = 10_000;
    let index = 0;
    let walkedSteps = 0;
    
    while (true) {
        let currentSteps = input[index];

        if (currentSteps === "Going home") {
            let stepsToHome = Number(input[index + 1]);
            walkedSteps += stepsToHome;
            let difference = Math.abs(walkedSteps - targetSteps);
            
            if (walkedSteps >= targetSteps) {
                console.log("Goal reached! Good job!");
                console.log(`${difference} steps over the goal!`);
                break;

            } else {
                console.log(`${difference} more steps to reach goal.`);
                break;
            }
            
        }

        currentSteps = Number(currentSteps);
        walkedSteps += currentSteps;
        
        if (walkedSteps >= targetSteps) {
            let difference = Math.abs(walkedSteps - targetSteps);
            console.log("Goal reached! Good job!");
            console.log(`${difference} steps over the goal!`);
            break;
        }

        index++;

    }
}
