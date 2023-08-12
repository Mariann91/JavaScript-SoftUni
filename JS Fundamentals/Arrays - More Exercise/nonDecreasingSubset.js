function nonDecreasingSubset(array) {

   function biggestNumber(inputArray) {
     
      let output = []
      for (let i = 0; i <  inputArray.length; i++ ) {

         if (output.length < 1) {
            output.push(inputArray[i]);
           
         } else {
           
            if (Math.max.apply(null, output) <= inputArray[i]) {
               output.push(inputArray[i])
            }
         }
      }

      return output.join(" ");
   }

   console.log(biggestNumber(array));
}
