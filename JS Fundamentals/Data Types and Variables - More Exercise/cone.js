function cone(radius, height) {
   let l = Math.sqrt(height ** 2 + radius ** 2);

   let volumne = 1 / 3 * Math.PI * radius ** 2 * height;
   let surfaceArea = Math.PI * radius ** 2 + Math.PI * radius * l;
   
   console.log(`volume = ${volumne.toFixed(4)}`)
   console.log(`area = ${surfaceArea.toFixed(4)}`)

}
