function NumbersDivisibleBy9(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
   
    let sumNumbers = 0;
    let result = "";

    for (let i = startNumber; i <= endNumber; i++) {        
        if (i % 9 === 0) {
            sumNumbers+= i;
            result += i + "\n";
        }
    }

    console.log(`The sum: ${sumNumbers}`);
    console.log(result);
}

