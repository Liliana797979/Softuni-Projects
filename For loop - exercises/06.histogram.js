function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let p1Percentage = 0;
    let p2Percentage = 0;
    let p3Percentage = 0;
    let p4Percentage = 0;
    let p5Percentage = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);
        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++;
        } else if (currentNum < 600) {
            p3++;
        } else if (currentNum < 800) {
            p4++;
        } else {
            p5++;
        }
        p1Percentage = (p1 / n * 100).toFixed(2);
        p2Percentage = (p2 / n * 100).toFixed(2);
        p3Percentage = (p3 / n * 100).toFixed(2);
        p4Percentage = (p4 / n * 100).toFixed(2);
        p5Percentage = (p5 / n * 100).toFixed(2);
    }
    console.log(p1Percentage + "%");
    console.log(p2Percentage + "%");
    console.log(p3Percentage + "%");
    console.log(p4Percentage + "%");
    console.log(p5Percentage + "%");
}