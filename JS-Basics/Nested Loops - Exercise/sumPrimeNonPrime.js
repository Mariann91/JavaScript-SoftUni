function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
   
    let sumPrimeNumbers = 0;
    let sumNotPrimeNumbers = 0;

    while (command !== "stop") {
        let currentNumber = Number(command);

        let isPrime = true;

        if (currentNumber < 0) {
            console.log("Number is negative.")
        } else {

            if (currentNumber == 1) {
                isPrime = false;
    
            } else {
                for (let i = currentNumber; i >= 2; i--) {
                    if (currentNumber % i == 0 && i != currentNumber) {
                        isPrime = false;
                        break;
                    }
                } 
            }
    
            if (isPrime) {
                sumPrimeNumbers+= currentNumber;
            } else {
                sumNotPrimeNumbers += currentNumber;
            }

        }
 
        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrimeNumbers}`);

}
