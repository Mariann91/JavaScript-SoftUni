function rightPlace(first, char, second) {
  let replacedFirst = "";
  
  for (let index = 0; index < first.length; index++) {
    
    if (first[index] !== "_") {
      replacedFirst += first[index];
    } else {
      replacedFirst += char;
    }
  }
  
  if (replacedFirst === second) {
    console.log("Matched");
    
  } else {
    console.log("Not Matched");
  }
 
}
