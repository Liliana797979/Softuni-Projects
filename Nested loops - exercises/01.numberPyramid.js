function piramidOfNumbers(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++) {
        for (let col = 1; col <= rows; col++) {
           if (current > n) {
               isBigger = true;
               break;
           }
           printCurrentLine += current + " ";
           current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}