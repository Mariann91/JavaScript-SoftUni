function trekkingMania(input) {
   let groups = Number(input[0]);

   let totalClimbers = 0;

   let musalaGroups = 0;
   let monblanGroups = 0;
   let kilimandjaroGroups = 0;
   let k2Groups = 0;
   let everestGroups = 0;
   
   for (let i = 1; i <= groups; i++) {
    let currentGroup = Number(input[i]);
    totalClimbers += currentGroup


    if (currentGroup < 6) {
        musalaGroups += currentGroup;
    } else if (currentGroup < 13) {
        monblanGroups += currentGroup;
    } else if (currentGroup < 26) {
        kilimandjaroGroups += currentGroup;
    } else if (currentGroup < 41) {
        k2Groups += currentGroup;
    } else {
        everestGroups += currentGroup;
    }
   }
   
   console.log(`${(musalaGroups / totalClimbers * 100).toFixed(2)}%`);
   console.log(`${(monblanGroups / totalClimbers * 100).toFixed(2)}%`);
   console.log(`${(kilimandjaroGroups / totalClimbers * 100).toFixed(2)}%`);
   console.log(`${(k2Groups / totalClimbers * 100).toFixed(2)}%`);
   console.log(`${(everestGroups / totalClimbers * 100).toFixed(2)}%`);
}
