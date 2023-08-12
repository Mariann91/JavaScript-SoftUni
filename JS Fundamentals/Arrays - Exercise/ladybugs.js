function ladybugs(array) {
  
   let fieldSize = array[0];
   let ladybugsStartPoistions = array[1];
   let field = [];

   for (let i = 1; i <= fieldSize; i++) {
      field.push(0);
   }

   let splitedLadybugsStartPoistions = ladybugsStartPoistions.split(" ");
  
   for (let i = 0; i < splitedLadybugsStartPoistions.length; i++) {
     
      let ladyBugIndex = Number(splitedLadybugsStartPoistions[i]);

      if (ladyBugIndex >= 0 && ladyBugIndex < field.length){
         field[ladyBugIndex] = 1;
      }
         
   }

   for (let i = 2; i < array.length; i++) {
      
      let command = array[i].split(" ");

      let currentInsectPosition = Number(command[0])

      if (currentInsectPosition < 0 || currentInsectPosition >= field.length) {
         continue;
      }

      if (field[currentInsectPosition] !== 1) {
         continue;
      }

      field[currentInsectPosition] = 0;

      let direction = command[1];
      let stepSize = Number(command[2]);
      let goIndex;

      switch (direction) {
         
         case "right":

            goIndex = currentInsectPosition + stepSize;
         
           while (field[goIndex] === 1) {
            goIndex += stepSize;

           }
           
           if (goIndex < field.length) {
            field[goIndex] = 1;          
           } 
           
           break;
         
         case "left":
            goIndex = currentInsectPosition - stepSize;

           while (field[goIndex] === 1) {
               goIndex -= stepSize;
   
            }
              
            if (goIndex >= 0) {
               field[goIndex] = 1;          
            } 

            break;
      }
   }

   console.log(field.join(" "));
}
