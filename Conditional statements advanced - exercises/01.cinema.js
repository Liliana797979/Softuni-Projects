function cinema(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;

    if (typeProjection === "Premiere") {
        price = rows * columns * 12.0;
    } else if (typeProjection === "Normal") {
        price = rows * columns * 7.50;
    } else if (typeProjection === "Discount") {
        price = rows * columns * 5.00;
    }
    console.log(`${price.toFixed(2)} leva`);
}