function specialNumbers(input) {
    let n = Number(input[0]);

    let output = "";
    for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++) {
        let currentNumberAsText = currentNumber.toString();
        let firstDigit = Number(currentNumberAsText[0]);
        let secondDigit = Number(currentNumberAsText[1]);
        let thirdDigit = Number(currentNumberAsText[2]);
        let fourthDigit = Number(currentNumberAsText[3]);

        let firstIsMagic = n % firstDigit === 0;
        let secondIsMagic = n % secondDigit === 0;
        let thirdIsMagic = n % thirdDigit === 0;
        let fourthIsMagic = n % fourthDigit === 0;

        if (firstIsMagic && secondIsMagic && thirdIsMagic && fourthIsMagic) {
            output += currentNumber + " ";
        }

    }
    console.log(output);
}