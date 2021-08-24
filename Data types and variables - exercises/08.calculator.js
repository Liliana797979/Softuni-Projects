function calc(firstNumber, oper, secondNumber) {
    let result = 0;
    if (oper === "+") {
        result =firstNumber + secondNumber;
    } else if (oper === "-") {
        result = firstNumber - secondNumber;
    } else if (oper === "*") {
        result = firstNumber * secondNumber;
    } else if (oper) {
        result = firstNumber / secondNumber;
    }
    console.log(result.toFixed(2));
}