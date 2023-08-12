function printNthElement(array) {
  
   let n = Number(array[array.length - 1]);
   let output = [];

   for (let i = 0; i <= array.length - 2; i += n) {
      output.push(array[i]);
   }

   console.log(output.join(" "));
   
}
