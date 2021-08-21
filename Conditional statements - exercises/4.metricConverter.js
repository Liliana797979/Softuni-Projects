function metres(input) {
    let num = Number(input[0]);
    let inputMetric = input[1];
    let outputMetric = input[2];

    if (inputMetric === "mm") {
        num = num / 1000;
    } else if (inputMetric === "cm") {
        num = num / 100;
    } else {
        num = num;
    }
    if (outputMetric === "m") {
       console.log (num.toFixed(3));
    } else if (outputMetric === "cm") {
        console.log ((num * 100).toFixed(3));
    } else if (outputMetric === "mm") {
       console.log((num * 1000).toFixed(3));
    }
}