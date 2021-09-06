function solve(text, word) {
    const tokens = text.split(word);
    console.log(tokens.join("*".repeat(word.length)));
}