function reverseString(word) {
  let reversedWord = "";
  
  for (let index = word.length - 1; index >= 0; index--) {
    reversedWord += word[index];
  }
  
  console.log(reversedWord)
}
