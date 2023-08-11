function condenseArrayToNumber(array) {

   while (array.length > 1) {
      let newArray = [];

      for (let index = 0; index < array.length - 1; index++) {
         newArray[index] = array[index] + array[index + 1]
      }

      array = newArray;
   }

   console.log(array.join(""));

}
