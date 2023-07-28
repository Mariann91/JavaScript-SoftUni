function vegetableMarket(input) {
    let pricePerKgVegetables = input[0];
    let pricePerKgFruits = input[1];
    let vegetableKgs = input[2];
    let fruitKgs = input[3];
    let euroBgn = 1.94;
    
    let bgnPrice = pricePerKgVegetables * vegetableKgs + pricePerKgFruits * fruitKgs;
    let euroPrice = bgnPrice / 1.94;
    
    console.log(euroPrice.toFixed(2));
    
}
