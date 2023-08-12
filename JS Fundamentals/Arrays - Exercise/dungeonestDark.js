function dungeonestDark(array) {
   const maxHealth = 100;
   let health = 100;
   let coins = 0;
   let victory = true;
   let roomCounter = 0;

   let arrayString = array.join("")
   let splittedArray = arrayString.split("|")

   for (let index = 0; index < splittedArray.length; index++) {
     
      roomCounter++;

      let currentItem = splittedArray[index];
      let currentSplittedItem = currentItem.split(" ");
      let firstPart = currentSplittedItem[0];
      let secondPart = Number(currentSplittedItem[1]);
      
      switch (firstPart) {

         case "potion":

            let gainedHealth = 0;

            if (secondPart + health > maxHealth) {
               gainedHealth = maxHealth - health;

            } else {
               gainedHealth = secondPart;
            }

            health += gainedHealth;

            console.log(`You healed for ${gainedHealth} hp.`);
            console.log(`Current health: ${health} hp.`)
            break;
      
         case "chest":
            let foundCoins = secondPart;

            console.log(`You found ${foundCoins} coins.`)
            coins += foundCoins;
            break;
         
         default: 

         let monsterName = firstPart;
         let attackOfTheMonster = secondPart;
         
         health -= attackOfTheMonster;

            if (health > 0) {
               console.log(`You slayed ${monsterName}.`)

            } else {
               victory = false;
               console.log(`You died! Killed by ${monsterName}.`);
               console.log(`Best room: ${roomCounter}`);
            
         }
            break;
      }
      
      if (! victory) {
         break;
      }
   }

   if (victory) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
   }

}
