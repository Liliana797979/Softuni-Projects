function divisionWithoutRemainder(input) {
    let n = Number(input[0]);

    p1 = 0;
    p2 = 0;
    p3 = 0;

    p1percentage = 0;
    p2percentage = 0;
    p3percentage = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);
        if (currentNum % 2 === 0) {
            p1++;
        }
        if (currentNum % 3 === 0) {
            p2++;
        }
        if (currentNum % 4 === 0) {
            p3++;
        }
    }
        p1percentage = (p1 / n * 100).toFixed(2);
        p2percentage = (p2 / n * 100).toFixed(2);
        p3percentage = (p3 / n * 100).toFixed(2);

    

console.log(p1percentage + "%");
console.log(p2percentage + "%");
console.log(p3percentage + "%");
    }  