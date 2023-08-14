function tseamAccount(commands) {
  
   function checkIfGameExits(currentGame, gameCollection) {
     
     if (gameCollection.includes(currentGame)) {
       return true;
       
     } else {
       return false;
     }
     
   }
   
   let games = commands[0].split(" ");
   let commandIndex = 1;
   let line = commands[commandIndex];
   
   while (line !== "Play!") {
     
     commandLine = line.split(" ");
     
     command = commandLine[0];
     game = commandLine[1];
     
     if (command === "Install" && ! checkIfGameExits(game, games)) {
       
       games.push(game);
       
     } else if (command === "Uninstall" && checkIfGameExits(game, games)) {
       
       let gameIndex = games.indexOf(game);
       
       games.splice(gameIndex, 1);
       
     } else if (command === "Update" && checkIfGameExits(game, games)) {
       
       let gameIndex = games.indexOf(game);
       let removedItem = games.splice(gameIndex, 1);
       
       games.push(removedItem.toString());
       
     } else if (command === "Expansion") {
       
       let gameAndExanpsion = game.split("-");
       let expGame = gameAndExanpsion[0];
       let expansion = gameAndExanpsion[1];
       
       if  (checkIfGameExits(expGame, games)) {
         
         let gameIndex = games.indexOf(expGame) + 1;
         let gameAddedExpansion = `${expGame}:${expansion}`
       
         games.splice(gameIndex, 0, gameAddedExpansion);
       }
       
     }
     
     commandIndex++;
     line = commands[commandIndex];
   }
   
   console.log(games.join(" "));
   
 }
