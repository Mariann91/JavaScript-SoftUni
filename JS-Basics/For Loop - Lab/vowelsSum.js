function vowelsSum(input) {
  let word = input[0];
  let wordLength = word.length
  
  let vowelsPoints = {
    "a": 1,
    "e": 2,
    "i": 3,
    "o": 4,
    "u": 5,
  }
  
  let vowelsPower = 0;
  
  for (let index = 0; index < wordLength; index++){
    if (word[index] in vowelsPoints) {
      
      vowelsPower += vowelsPoints[word[index]]
    }
  }
  
  console.log(vowelsPower);
}
