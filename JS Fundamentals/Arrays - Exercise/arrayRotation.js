function  arrayRotation(array, n) {

   for (let rotation = 1; rotation <= n; rotation++) {
     
      let firstItem = array.shift();
      array.push(firstItem);    
     
   }
   
   console.log(array.join(" "));

}
