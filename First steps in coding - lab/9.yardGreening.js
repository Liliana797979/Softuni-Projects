function yardGreening(input) {

    let squareMetres = Number(input[0]);

    let price = squareMetres * 7.61;
    let discount = 0.18 * price;
    let totalPrice = price - discount;

    
    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}