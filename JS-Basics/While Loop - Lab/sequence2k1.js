function sequence2k1(input) {
    let n = Number(input[0]);

    let startNumber = 0;

    while (true) {
        let currentNumber = startNumber * 2 + 1;

        if (currentNumber > n) {
            break
        }  
        
        console.log(currentNumber);
        startNumber = currentNumber;
    }
}
