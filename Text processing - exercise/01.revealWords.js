function revealWord(words, text) {
    text = ` ${text} `;
    // parse target words
    words = words.split(", ");
    // for each word
    for (let word of words) {
    // - find asterisks line with matching length and replace it
    let match = ` ${"*".repeat(word.length)} `;
    word = ` ${word} `;
    text = text.replace(match, word);
}
    // print result
    console.log(text.trim());
}