function password(input) {
    let userName = input[0];
    let userPassword = input[1];

    let index = 2;
    let inputPassword = input[index];

    while (userPassword !== inputPassword) {
        index++;
        inputPassword = input[index];
    }
    
    console.log(`Welcome ${userName}!`);
}
