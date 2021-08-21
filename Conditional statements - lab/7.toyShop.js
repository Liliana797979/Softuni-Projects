function totalWinnings(tripPrice, jigsaw, dolls, bears, minions, trucks) {
    let jigsawPrice = 2.60;
    let dollsPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;
 
    let totalCount = Number(jigsaw) + Number(dolls) + Number(bears) + Number(minions) + Number(trucks);
    let priceMultiplier = 1;
    if (totalCount >= 50) {
        priceMultiplier = 0.75;
    }
 
    let total = jigsaw * Number(jigsawPrice) + dolls * Number(dollsPrice) + 
                bears * Number(bearPrice) + minions * Number(minionPrice) + 
                trucks * Number(truckPrice);
 
    total = total * priceMultiplier;
 
    let finalMoney = total - total * 0.10;
 
    tripPrice = Number(tripPrice);
    if (finalMoney >= tripPrice) {
        console.log(`Yes! ${(finalMoney - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - finalMoney).toFixed(2)} lv needed.`)
    }
}