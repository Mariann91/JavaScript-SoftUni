function   maxSequenceOfEqualElements(array) {

   let longestSequence = []

   for (let index1 = 0; index1 < array.length; index1++) {

      let currentNum = array[index1];
      let currentSequence = [currentNum];

      for (let index2 = index1 + 1; index2 < array.length; index2++) {

         if (array[index2] === currentNum) {
            currentSequence.push(array[index2]);

            if (currentSequence.length > longestSequence.length) {
               longestSequence = currentSequence;
            }

         } else {
            break;
         }
      }   
   }

   console.log(longestSequence.join(" "));
  
}
