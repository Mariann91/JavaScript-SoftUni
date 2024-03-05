function projectsCreation(data){
  let name = data[0];
  let projectsNumber = Number(data[1]);
  const timePerProject = 3;
  
  let timeNeeded = projectsNumber * timePerProject;
  
  let result = `The architect ${name} will need ${timeNeeded} hours to complete ${projectsNumber} project/s.`;
  
  console.log(result);
  
}
