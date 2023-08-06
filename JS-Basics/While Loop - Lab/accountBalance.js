function  accountBalance(input) {
    let balance = 0;

    let index = 0;
    let currentDeposit = input[index];

    while (currentDeposit !== "NoMoreMoney") {
        currentDeposit = Number(input[index]);
        if (currentDeposit < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${currentDeposit.toFixed(2)}`);
        
        balance += currentDeposit;
        index++;
        currentDeposit = input[index];
    }

    console.log(`Total: ${balance.toFixed(2)}`)
}
