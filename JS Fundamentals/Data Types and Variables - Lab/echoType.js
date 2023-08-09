function echoType(input) {
  
  let stringType = typeof("Random String");
  let numberType = typeof(4);
  
  console.log(typeof(input));
  
  if (typeof(input) === stringType || (typeof(input) === numberType) ) {
    console.log(input);
  } else {
    console.log("Parameter is not suitable for printing");
  }
  
}
