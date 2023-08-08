function printAndSum(start, end) {
   let sumNumbers = 0;
   let output = ""

   for (let num = start; num <= end; num++) {
      sumNumbers += num;
      output += num + " ";
   }

   console.log(output);
   console.log(`Sum: ${sumNumbers}`); 

}
