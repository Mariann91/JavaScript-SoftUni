function addAndRemove(array) {
  
   let number = 0;
   let output = [];

   for (let i = 0; i < array.length; i++) {
      number++;

      let command = array[i];

      switch (command) {

         case "add":
            output.push(number);
            break;
            
         case "remove":
            output.pop();
            break;
      }

   }

   if (output.length > 0) {
      console.log(output.join(" "));

   } else {
      console.log("Empty")
   }

}
