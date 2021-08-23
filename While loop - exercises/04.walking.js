function step(input) {
    let steps = 0;
    let goingHome = input[input.length - 2];
    let stepsGoal = 10000;

    if (goingHome === "Going home") {

        for (let i = 0; i < input.length - 2; i++) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
        }
        steps += Number(input[input.length - 1]);
    } else {
        let i = 0;

        for (let i = 0; i < input.length; i++) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
        }
    }
    if (steps >= stepsGoal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - stepsGoal} steps over the goal!`);
    } else {
        console.log(`${stepsGoal - steps} more steps to reach goal.`);
    }
}