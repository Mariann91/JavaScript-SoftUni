function  maxNumber(input) {
    let maxNumber = Number.NEGATIVE_INFINITY;
    let index = 0;
    let currentNumber = input[index];

    while (currentNumber !== "Stop") {
        currentNumber = Number(currentNumber);
  

        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
        index++;
        currentNumber = input[index];
    }
    console.log(maxNumber);
    
}
