function getMagicSum(array, magicNumber) {
   let magicSum = [];

   for (let index1 = 0; index1 < array.length; index1++) {
      let currentNum = array[index1];

      for (let index2 = index1 + 1; index2 < array.length; index2++) {
         let nextNum = array[index2];

         if (currentNum + nextNum === magicNumber) {
            magicSum.push([currentNum, nextNum]);
         }
      }
   }

   for (let index = 0; index < magicSum.length; index++) {
      console.log(magicSum[index].join(" "));
   }
}
