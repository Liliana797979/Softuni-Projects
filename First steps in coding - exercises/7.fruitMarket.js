function fruitMarket(input) {

    let strawberriesPrice = Number(input[0]);
    let bananasCountKg = Number(input[1]);
    let orangesCountKg = Number(input[2]);
    let raspberriesCountKg = Number(input[3]);
    let strawberriesCountKg = Number(input[4]);

    let raspberriesPriceKg = strawberriesPrice / 2;
    let orangesPriceKg = raspberriesPriceKg - (raspberriesPriceKg * 0.4); 
    let bananasPriceKg = raspberriesPriceKg - (raspberriesPriceKg * 0.8);

    let raspberriesSum = raspberriesCountKg * raspberriesPriceKg;
    let orangesSum = orangesCountKg * orangesPriceKg;
    let bananasSum = bananasCountKg * bananasPriceKg;
    let strawberriesSum = strawberriesCountKg * strawberriesPrice;

    let totalSum = raspberriesSum + orangesSum + bananasSum + strawberriesSum;

    console.log(totalSum);

}