function  maxNumber(array) {
   let topIntegers = [];

   for (let index1 = 0; index1 < array.length; index1++) {
      let currentNumber = array[index1];
      let topInteger = true

      for (let index2 = index1 + 1; index2 < array.length; index2++) {
         let currentRightNumber = array[index2];

         if (currentNumber <= currentRightNumber ) {
            topInteger = false;
         }
      }

      if (topInteger) {
         topIntegers.push(currentNumber);
      }
    
   }

   console.log(topIntegers.join(" "));
  
}
