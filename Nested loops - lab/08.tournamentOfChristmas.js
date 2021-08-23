function solve(arg) {
    let daysAll = Number(arg[0]);
    let idx = 1;
    let sport = "";
    let text = "";
    let moneyTotal = 0;
    let winsTotal = 0;
    for (let i = 1; i <= daysAll; i++) {
        let winsPerDay = 0;
        let moneyPerDay = 0;
        while (true) {
            command = arg[idx++];
            if (command === "Finish") {
                break;
            } else {
                sport = command;
                // console.log(`sport: ${sport}`);
                text = arg[idx++];
                // console.log(`text: ${text}`);
            }
            if (text === "win") {
                moneyPerDay += 20;
                winsPerDay++;
            } else {
                winsPerDay--;
            }
            // console.log(`moneyPerDay now = ${moneyPerDay}`);
        }
        if (winsPerDay > 0) {
            moneyPerDay *= 1.1;
            winsTotal++;
        } else {
            winsTotal--;
        }
        moneyTotal += moneyPerDay;
        // console.log(`Money after day ${i}: ${moneyPerDay}; winsPerDay = ${winsPerDay}`);
        // console.log(`Money Total after day ${i}: ${moneyTotal}`);
    }
    if (winsTotal > 0) {
        moneyTotal *= 1.2;
        console.log(`You won the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    }
    // console.log(`Money Total at the end}: ${moneyTotal}`);
}