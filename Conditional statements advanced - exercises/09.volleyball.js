function volleyball(input) {
    let year = input[0];
    let holidays = Number(input[1]);
    let travelWeekends = Number(input[2]);

    let weekendsInSofia = 48 - travelWeekends;

    let playsInSofia = weekendsInSofia * 0.75;
    let playsInHolidays = holidays * 2.0 / 3;

    let totalPlays = playsInHolidays + playsInSofia + travelWeekends;
 
    if (year === "leap") {
        totalPlays = totalPlays * 1.15;
    }
    console.log(Math.floor(totalPlays));
}