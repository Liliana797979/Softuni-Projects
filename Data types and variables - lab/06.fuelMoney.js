function fuelMoney(ditance, passengers, price) {
    let neededFuel = (ditance / 100) * 7;
    neededFuel += passengers * 0.100;
    let money = neededFuel * price;
    console.log(`Needed money for that trip is ${money} lv.`);
}