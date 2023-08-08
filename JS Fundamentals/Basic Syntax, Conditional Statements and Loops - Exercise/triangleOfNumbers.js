function triangleOfNumbers(n) {
   let counter = 0;

   for (let rows = 1; rows <= n; rows++) {

      for (let cols = 1; cols <= rows; cols++) {
         
         
         if (rows === cols) {
            counter++;
            let repeatedNumber = String(counter) + " ";
            console.log(repeatedNumber.repeat(rows));
         }
      }
   }
}
