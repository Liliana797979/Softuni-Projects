function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum = 0;

    while (sum < num) {
        let currentNumber = Number(input[index]);
        index++;
        sum += currentNumber;
    }
    console.log(sum);
}