function words(listOfStrings) {
    let wordsToSearch = listOfStrings.shift().split(" ");
    //console.log(wordsToSearch);
    let words = {};

    for (let word of wordsToSearch) {
        words[word] = 0;
        
    }
    //console.log(words);
    for (let word of listOfStrings) {
        if (Object.keys(words).includes(word)) {
            words[word] += 1;
        }
    }
    //console.log(words);
    //[this, 3];
    //[sentence, 2];
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);
    //console.log(sortedWords);
    for (let [key, value] of sortedWords) {
       // console.log(key);
       console.log(`${key} - ${value}`);
        //console.log(value);
    }
}