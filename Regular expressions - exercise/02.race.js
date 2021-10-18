function race(input = []) {
    let racers = input
        .shift()
        .split(', ')
        .reduce((acc, currEl) => {
            acc[currEl] = 0;
            return acc
        }, {});

    const namePattern = /[a-zA-Z]/gm;
    const distPattern = /\d/gm;


    let inputData = input
        .slice(0, input.indexOf('end of race'))
        .forEach(line => {
            let name = line
                .match(namePattern).join('');
            let distance = line
                .match(distPattern)
                .map(Number)
                .reduce((a, c) => a + c);

            if (racers.hasOwnProperty(name)) {
                racers[name] += distance
            }
        })
    let final = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${final[0][0]}`);
    console.log(`2nd place: ${final[1][0]}`);
    console.log(`3rd place: ${final[2][0]}`);
}