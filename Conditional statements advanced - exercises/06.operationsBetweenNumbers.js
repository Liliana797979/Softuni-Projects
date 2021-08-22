function solve(arg) {
    let firstNum = Number(arg[0]);
    let secondNum = Number(arg[1]);
    let operator = arg[2];
 
    switch(operator) {
        case "+":
            if ((firstNum + secondNum) % 2 === 0) {
                console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum + secondNum} - even`);
            } else {
                console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum + secondNum} - odd`);
            }
            break;
        case "-":
            if ((firstNum - secondNum) % 2 === 0) {
                console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum - secondNum} - even`);
            } else {
                console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum - secondNum} - odd`);
            }
            break;
        case "*":
            if ((firstNum * secondNum) % 2 === 0) {
                console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum * secondNum} - even`);
            } else {
                console.log(`${firstNum} ${operator} ${secondNum} = ${firstNum * secondNum} - odd`);
            }
            break;
        case "/":
            if (secondNum === 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            } else {
                console.log(`${firstNum} / ${secondNum} = ${(firstNum / secondNum).toFixed(2)}`);
            }
            break;
        case "%":
            if (secondNum === 0) {
                console.log(`Cannot divide ${firstNum} by zero`);
            } else {
                console.log(`${firstNum} % ${secondNum} = ${(firstNum % secondNum)}`);
            }
            break;
    }
}