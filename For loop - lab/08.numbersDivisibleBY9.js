function numbersDivibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
 
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let j = start; j <= end; j++) {
        if (j % 9 === 0) {
            console.log(j);
        }
    }
}