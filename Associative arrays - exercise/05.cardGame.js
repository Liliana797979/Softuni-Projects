function cardGame(input) {
    let symbolToPoints = {"J" : 11, "Q" : 12, "K" : 13, "A" : 14, "S" : 4, "H" : 3, "D" : 2, "C" : 1};
    let players = {};
    let results = {};

    for (let command of input) {
        let tokens = command.split(": ");
        let playerName = tokens[0];
        let playerCard = tokens[1].split(", ");
    
        if (!Object.keys(players).includes(playerName)) {
            players[playerName] = [];

        }
        players[playerName] = players[playerName].concat(playerCard);
    }
    //console.log(players);
    // calculate points
    for (let [playerName, playerCard] of Object.entries(players)) {
        //console.log(playerName);
        //console.log(playerCard);
        results[playerName] = 0;

        for (let i = 0; i < playerCard.length; i++) {
            let card = playerCard[i];
            if (playerCard.indexOf(card) === i) {
            let cardAsArray = card.split("");
            let type = cardAsArray.pop();
            let power = cardAsArray.join("");
            //console.log(type + "" + power);
            let cardPoints = 0;

            if (Object.keys(symbolToPoints).includes(power)) {
                cardPoints = symbolToPoints[power] * symbolToPoints[type];
            } else {
                cardPoints = Number(power) * symbolToPoints[type];
            }
            results[playerName] += cardPoints;
        }
    }
}
    //console.log(results);
    //print
    for (let [key, value] of Object.entries(results)) {
        console.log(`${key}: ${value}`);
    }
}