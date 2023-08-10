function englishNameOfTheLastDigit(num) {

  let englishNamesDigits = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
  }
  
  let numAsString = String(num);
  
  if (numAsString.length > 1) {
    let lastIndex = numAsString.length - 1;
    let englishName = numAsString[lastIndex];
    console.log(englishNamesDigits[englishName]);
    
  } else {
    console.log(englishNamesDigits[numAsString]);
  }
}
