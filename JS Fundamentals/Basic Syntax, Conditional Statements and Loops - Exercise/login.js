function  login(array) {
   let username = array[0];
   let password = username.split("").reverse().join("");
   let wrongPasswordCounter = 0;

   for (let index = 1; index < array.length; index++) {
      let currentString = array[index];

      if (currentString === password) {
         console.log(`User ${username} logged in.`);
         break;

      } else {
         wrongPasswordCounter++;

         if (wrongPasswordCounter <= 3) {
            console.log("Incorrect password. Try again.");

         } else {
            console.log(`User ${username} blocked!`);
            break;
         }
      }
   }
}
