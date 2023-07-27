function calculateProjects(input) {
  let name = input[0];
  let projectsCount = Number(input[1]);
  const timePerProject = 3;
  let timeNeeded = projectsCount * timePerProject;
  let resultLine = `The architect ${name} will need ${timeNeeded} hours to complete ${projectsCount} project/s.`;
  console.log(resultLine);
}
