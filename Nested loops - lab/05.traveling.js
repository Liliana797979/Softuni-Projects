function solve(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "End") {
            return;
        }
        if (Number.isNaN(Number(input[i]))) {
            console.log(`Going to ${input[i]}!`);
        }
    }
}