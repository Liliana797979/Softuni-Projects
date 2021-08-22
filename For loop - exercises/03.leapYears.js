function leapYears(input) {
    let leap = Number(input[0]);
    let year = Number(input[1]);

    for (let start = leap; start <= year; start += 4) {
        console.log(start);
    }
}