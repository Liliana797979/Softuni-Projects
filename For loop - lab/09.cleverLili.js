function smartLili(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let sum = 0;
    let toyCount = 0; 
    let moneyCount = 0;
    let birthdayCount = 10;

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyCount += birthdayCount;
            moneyCount = moneyCount - 1;
            birthdayCount += 10;
        } else {
            toyCount++;
        }
    }
    sum = toyCount * toyPrice + moneyCount;
    if (sum >= washingMachinePrice) {
        console.log(`Yes! ${(sum - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - sum).toFixed(2)}`);
    }
}