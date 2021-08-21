function birthday(input) {

    let rent = Number(input[0]);
    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animatorPrice = rent / 3;

    let sum = rent + cakePrice + drinksPrice + animatorPrice;
    
    console.log(sum);

}