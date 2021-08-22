function newHouse(input) {
    let typeFlour = input[0];
    let floursCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

    if (typeFlour === "Roses") {
        totalPrice = floursCount * 5;

        if (floursCount > 80) {
            totalPrice = totalPrice * 0.9;
        }

    } else if (typeFlour === "Dahlias") {
        totalPrice = floursCount * 3.80;

        if (floursCount > 90) {
            totalPrice = totalPrice * 0.85;
        }

    } else if (typeFlour === "Tulips") {
        totalPrice = floursCount * 2.80;

        if (floursCount > 80) {
            totalPrice = totalPrice * 0.85;
        }

    } else if (typeFlour === "Narcissus") {
        totalPrice = floursCount * 3.00;

        if (floursCount < 120) {
            totalPrice = totalPrice * 1.15;
        }

    } else if (typeFlour === "Gladiolus") {
        totalPrice = floursCount * 2.50;

        if (floursCount < 80) {
            totalPrice = totalPrice * 1.20;
        }
    }
        if (budget < totalPrice) {
            console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
           
        } else {
           console.log (`Hey, you have a great garden with ${floursCount} ${typeFlour} and ${(budget - totalPrice).toFixed(2)} leva left.`);
        }
    }