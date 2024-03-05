function yardGreening(data){
  const pricePerSqM = 7.61;
  const discountPercent = 0.18;
 
  let SqM = Number(data[0]);
  
  let price = SqM * pricePerSqM;
  let discount = price * discountPercent;
  
  let finalPrice = price - discount;
  
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`)
  
}

