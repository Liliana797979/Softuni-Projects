function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    
    let output = ' ';
    for (let num = start; num <= end; num++) {
        let oddSum = 0;
        let evenSum = 0;
        let numAsStr = num.toString(); 

        for (let index = 0; index < numAsStr.length; index++) {
            let digit = Number (numAsStr[index]);

            if (index % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        if (evenSum === oddSum) {
            output += num + ' ';
        }
    }
    console.log(output);
}