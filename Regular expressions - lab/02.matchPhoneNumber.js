function solve(input) {

    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    let validNumbers = [];

    let validNumber = null;

    while ((validNumber = pattern.exec(input)) !== null) {

        validNumbers.push(validNumber[0]);

    }

    console.log(validNumbers.join(', '));

}