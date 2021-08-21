function charityCampany(input) {

    let daysCount = Number(input[0]);
    let confectionersCount = Number(input[1]);
    let cakeCount = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakesCount = Number(input[4]);

    let cakePrice = cakeCount * 45;
    let wafflesPrice = wafflesCount * 5.80;
    let pancakesPrice = pancakesCount * 3.2;

    let sumForDay = (cakePrice + wafflesPrice + pancakesPrice) * confectionersCount;
    let totalSum = sumForDay * daysCount;
    let sum = totalSum - (totalSum / 8);

    console.log(sum);

}