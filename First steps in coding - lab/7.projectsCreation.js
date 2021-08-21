function project(input) {
    let nameArchitect = input[0];
    let projectsCount = Number(input[1]);
    let hours = projectsCount * 3;

    console.log(`The architect ${nameArchitect} will need ${hours} hours to complete ${projectsCount} project/s.`);
}