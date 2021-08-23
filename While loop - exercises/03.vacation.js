function vacantion(input) {
    let target = Number(input[0]);
    let startMoney = Number(input[1]);
    let index = 2;
    let days = 0;
    let spendDays = 0;

    while (true) {

        let operation = input[index++];
        let amount = Number(input[index]);

        if (operation === "spend") {
            spendDays++;
            days++;
            if (amount > startMoney) {
                startMoney = 0;
            } else {
                startMoney -= amount;
            }
        } else if (operation === "save") {
            spendDays = 0;
            days++;
            startMoney += amount;
        }
        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        } if (startMoney >= target) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }
}