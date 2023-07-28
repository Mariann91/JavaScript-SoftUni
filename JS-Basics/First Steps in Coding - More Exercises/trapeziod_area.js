function trapezoidArea(input) {
    let b1 = input[0];
    let b2 = input[1];
    let h = input[2];
    let area = (b1 + b2) * h / 2;
    console.log(area.toFixed(2));
}
