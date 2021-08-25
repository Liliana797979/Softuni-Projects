function reverseArrayNumbers(n, array) {
    let result = "";
    for (let i = n - 1; i >= 0; i--) {
        result += array[i];
        result += " ";
    }
    console.log(result);
}