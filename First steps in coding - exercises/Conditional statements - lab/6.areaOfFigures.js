function figures(input) {
    let type = input[0];

    if (type === "square") {
        let num1 = Number(input[1]);
        let area = num1 * num1;
        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        let num1 = Number(input[1]);
        let num2 = Number(input[2]);
        let area = num1 * num2;
        console.log(area.toFixed(3));
    } else if (type === "circle") {
        let num1 = Number(input[1]);
        let area = Math.PI * num1 * num1;
        console.log(area.toFixed(3));
    } else {
        let num1 = Number(input[1]);
        let num2 = Number(input[2]);
        let area = num1 * num2 / 2;
        console.log(area.toFixed(3));
    }
}