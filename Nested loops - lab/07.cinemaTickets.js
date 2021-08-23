function solve(arg) {
    let idx = 0;
    let command = arg[idx++];  // idx++ (!?)
    let ticketsTotalSold = 0;
    let ticketsStudentSold = 0;
    let ticketsStandardSold = 0;
    let ticketsKidsSold = 0;
 
    while (command !== "Finish") {
        let movieName = command;
        let freeSeats = Number(arg[idx++]);  // idx++ (!?)
        let ticketType = arg[idx++];  // idx++ (!?)
        let ticketsCurrentSold = 0;
        while (ticketType !== "End") {
            switch (ticketType) {
                case "standard":
                    ticketsStandardSold++;
                    break;
                case "student":
                    ticketsStudentSold++;
                    break;
                case "kid":
                    ticketsKidsSold++;
                    break;
            }
            ticketsTotalSold++;  // OUTSIDE the SWITCH (!?)
            ticketsCurrentSold++;
            if (freeSeats <= ticketsCurrentSold) {  // 2nd condition to finish the inside cycle (!?)
                break;
            }
            ticketType = arg[idx++];
        }
        console.log(`${movieName} - ${(ticketsCurrentSold / freeSeats * 100).toFixed(2)}% full.`);
        command = arg[idx];
        idx++;
    }
    console.log(`Total tickets: ${ticketsTotalSold}`);
    console.log(`${(ticketsStudentSold / ticketsTotalSold * 100).toFixed(2)}% student tickets.`);
    console.log(`${(ticketsStandardSold / ticketsTotalSold * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(ticketsKidsSold / ticketsTotalSold * 100).toFixed(2)}% kids tickets.`);
}