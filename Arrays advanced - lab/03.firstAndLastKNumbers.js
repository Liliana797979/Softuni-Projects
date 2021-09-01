function firstAndLastKNumbers(input) {
    let k = input[0];
    //console.log(k);
    let first = input.slice(1, k + 1); 
    //console.log(first);
    let second = input.slice(input.length - k);
    //console.log(second);
    console.log(first.join(" "));
    console.log(second.join(" "));
}