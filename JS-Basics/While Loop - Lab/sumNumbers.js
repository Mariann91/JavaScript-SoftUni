function sumNumbers(input) {
    let num = Number(input[0]);

    let sumNums = 0;
    let index = 1;

    while (num > sumNums) {
        let currentNum = Number(input[index]);
        sumNums += currentNum;
        index++;
    }

    console.log(sumNums);
    
}
