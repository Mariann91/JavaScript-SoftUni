function solve(array) {
  let k = array[0];
  let firstKstartIndex = 1;
  let arrayLength = array.length 
  let secondKstartIndex = arrayLength - k
  
  let firstK = array.slice(firstKstartIndex, firstKstartIndex + k);
  let secondK = array.slice(secondKstartIndex, arrayLength);
  
  console.log(firstK.join(" "));
  console.log(secondK.join(" "));

}
