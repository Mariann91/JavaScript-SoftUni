function vacation(input) {
    let tourPrice = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let spendCounter = 0;
    let dayCount = 0;
    
    while (true) {
        let action = input[index];
        let amount = Number(input[index + 1]);
        dayCount++;

        if (action === "spend") {
            spendCounter++;

            if (spendCounter === 5) {
                console.log("You can't save the money.");
                console.log(`${dayCount}`);
                break;
            }

            if (amount > availableMoney) {
                amount = availableMoney;
            }

            availableMoney -= amount;
       
        } else {
            spendCounter = 0;
            availableMoney += amount;

            if (availableMoney >= tourPrice) {
                console.log(`You saved the money for ${dayCount} days.`);
                break;
            }
        }

        index += 2;
      
    }
}
