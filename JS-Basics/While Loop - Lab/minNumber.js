function  minNumber(input) {
    let minNumber = Number.MAX_VALUE;
    let index = 0;
    let currentNumber = input[index];

    while (currentNumber !== "Stop") {
        currentNumber = Number(currentNumber);
  

        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        index++;
        currentNumber = input[index];
    }
    console.log(minNumber);
    
}
