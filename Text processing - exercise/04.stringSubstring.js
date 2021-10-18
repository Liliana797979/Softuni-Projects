function stringSubstring(word, text) {
    // split text into tokens
    let tokens = text.split(" ");
    // for each token
    for (let token of tokens) {
        // - if token equal word (case-insensitive) -> print and end
        if (word.toLocaleLowerCase() == token.toLocaleLowerCase()) {
            return console.log(word);
        }
    }
    
    // print failure
    console.log(`${word} not found!`);
}