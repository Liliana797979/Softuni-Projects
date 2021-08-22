function sum(input) {
    let n = input[0] + "";
    let numToText = n + "";
    let sum = 0;
    
    for (let i = 0; i < numToText.length; i++) {
        let num = Number(numToText[i]);
        sum += num; 
    }
    console.log(`The sum of the digits is:${sum}`);
}