function ticketForCinema(input) {
    let day = input[0];
    let priceTicket = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            priceTicket = 12;
            console.log(priceTicket);
            break;
        case "Wednesday":
        case "Thursday":
            priceTicket = 14;
            console.log(priceTicket);
            break;
        case "Saturday":
        case "Sunday":
            priceTicket = 16;
            console.log(priceTicket);
            break;
        default:
            break;
    }
}