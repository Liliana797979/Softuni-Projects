function amazingNumbers(num) {
    let numAsString = num.toString();
    let sum = 0;
    let hasNine = false;
    for (let i = 0; i < numAsString.length; i++) {
        let currentDigit = Number(numAsString[i]);
        sum += currentDigit;
    }
    let sumAsString =  sum.toString();
    for (let i = 0; i <= sumAsString.length; i++) {
        if (sumAsString[i] == "9") {
            hasNine = true;
            break;
        }
    }
    console.log(`${num} Amazing? ${hasNine ? "True" : "False"}`);
}