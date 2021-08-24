function int(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    if ((sum | 0) == sum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}