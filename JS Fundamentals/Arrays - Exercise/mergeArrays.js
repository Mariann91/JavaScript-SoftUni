function mergeArrays(array1, array2) {
   let mergedArray = []

   for (let index = 0; index < array1.length; index++) {
      let array1CurrentItem = array1[index];
      let array2CurrentItem = array2[index];
      let itemToPush

      if (index % 2 === 0) {
         itemToPush = Number(array1CurrentItem) + Number(array2CurrentItem);
      } else {
         itemToPush = array1CurrentItem + array2CurrentItem;
      }

      mergedArray.push(itemToPush);
   }

   console.log(mergedArray.join(" - "));
}
