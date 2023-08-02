function fruitOrVegetable(input) {
    let entry = input[0];

    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegetables = ["tomato", "cucumber", "pepper", "carrot"];
    
    if (fruits.includes(entry)) {
        console.log("fruit");
    } else if (vegetables.includes(entry)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
