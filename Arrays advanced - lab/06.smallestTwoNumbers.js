function smallestTwoNumber(input) {
    let sorted = input.sort((a, b) => {
        return a - b
    });
    //console.log(sorted);
    let result = sorted.slice(0, 2);
    return result.join(" ");
}