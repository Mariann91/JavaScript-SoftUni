function equalArrays(array1, array2) {
 let arraysIdentical = true;
 let firstIndexDiffer = 0;
 let firstArraySum = 0;
 
 for (let index = 0; index < array1.length; index++) {
   firstArraySum += Number(array1[index]);
   
   if (array1[index] !== array2[index]) {
     arraysIdentical = false;
     firstIndexDiffer = index;
     break;
   }
 }
 
 if (arraysIdentical) {
   console.log(`Arrays are identical. Sum: ${firstArraySum}`);
   
 } else {
   console.log(`Arrays are not identical. Found difference at ${firstIndexDiffer} index`);
 }
    
}
