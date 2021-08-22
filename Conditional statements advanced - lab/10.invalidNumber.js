function invalidNumber(input) {
    let num = Number(input[0]);
    let result =  (num >= 100 && num <= 200 || num === 0);
    
    if (!result) {
        console.log(`invalid`);
    }
} 