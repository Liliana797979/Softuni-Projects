function cake(input) {
    let lenght = Number(input[0]);
    let weigth = Number(input[1]);
    let index = 2;
    let pieceCake = input[index];
    let area = lenght * weigth;
    index++;
 
    while (pieceCake !== "STOP") {
        let numberOfPieces = Number(pieceCake);
        area -= numberOfPieces;
        if (area < 0) {
            console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`)
            break;
        }
        pieceCake = input[index];
        index++;
    }
    if (area > 0) {
        console.log(`${area} pieces are left.`)
    }
 
}