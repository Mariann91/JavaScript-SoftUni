function numberPyramid(input) {
    let n = Number(input[0]);
    let counter = 0;
    let result = ""
    let endCycle = false;

    for (let rows = 1; rows <= n; rows++) {
        
        for (let cols = 1; cols <= rows; cols++) {

            counter++;

            if (rows === cols) {
                result += counter + "\n";
            } else {
                result += counter + " ";
            }

            if (counter === n) {
                endCycle = true;
                break
            }
        }

        if (endCycle) {
            break;
        }
    }

    console.log(result);

}
