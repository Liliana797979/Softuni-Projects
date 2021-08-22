function skiTrip(input) {
    let days = Number(input[0]);
    let typeRoom = input[1];
    let grade = input[2];
    let nights = days - 1;
    let totalPrice = 0;
    let price = 0;

    if (nights < 10) {
        switch (typeRoom) {
            case "room for one person": price = 18 * nights; break;
            case "apartment": price = (nights * 25) * 0.70; break;
            case "president apartment": price = (nights * 35) * 0.90; break;
        }
    } else if (nights >= 10 && nights <= 15) {
        switch (typeRoom) {
            case "room for one person": price = 18 * nights; break;
            case "apartment": price = (nights * 25) * 0.65; break;
            case "president apartment": price = (nights * 35) * 0.85; break;
        }    
    
    } else {
        switch (typeRoom) {
            case "room for one person": price = 18 * nights; break;
            case "apartment": price = (nights * 25) * 0.50; break;
            case "president apartment": price = (nights * 35) * 0.80; break;
        }
    }
    if (grade === "positive") {
        price = price + (price * 0.25);
    } else if (grade === "negative") {
        price = price * 0.9;
        
    }
    console.log(price.toFixed(2));
}