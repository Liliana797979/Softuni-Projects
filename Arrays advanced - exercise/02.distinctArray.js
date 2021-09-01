function distrinctArray(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        
        if (arr.includes(currentNumber) === false) {
            arr.push(currentNumber);
        }
    }
    console.log(arr.join(" "));
}