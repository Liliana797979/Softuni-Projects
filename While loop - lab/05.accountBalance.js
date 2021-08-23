function accountBalance(input) {
    let total = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "NoMoreMoney") {
        let num = Number(command);

        if (num < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += num;
        console.log(`Increase: ${num.toFixed(2)}`);

        command = input[index];
        index++;

    }
    console.log(`Total: ${total.toFixed(2)}`);
}