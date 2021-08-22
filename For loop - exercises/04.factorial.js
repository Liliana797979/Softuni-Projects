function facturial(input) {

    let number = Number(input[0]);

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log(factorial);
}