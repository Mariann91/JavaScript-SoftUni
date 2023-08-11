function getCommonElements(array1, array2) {
   let commonElements = [];

   for (let index = 0; index < array1.length; index++) {

      if (array2.includes(array1[index])) {
         commonElements.push(array1[index]);
      }
   }

   console.log(commonElements.join("\n"));
}
