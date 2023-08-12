function  rotateArray(array) {
  
   let rotations = Number(array.pop());

   for (let i = 1; i <= rotations; i++) {
     
      let removedElement = array.pop();

      array.unshift(removedElement);
   }

   console.log(array.join(" "));

}
