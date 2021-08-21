function godzila(input) {
    let budget = Number(input[0]);
    let extraCount = Number(input[1]);
    let priceDressForOne = Number(input[2]);
    
    let priceForAllExtra = extraCount * priceDressForOne;
    let decorPrice = budget - (budget * 0.9);

    if (extraCount > 150) {
       priceForAllExtra = priceForAllExtra * 0.9;
    }

    let totalMoney = decorPrice + priceForAllExtra;

    if (totalMoney > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalMoney - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalMoney).toFixed(2)} leva left.`);
    }   
}