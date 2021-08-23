function book(input) {
    let favouriteBook = input[0];
    let index = 1;
    let bookIsFound = false;

    let bookNextName = input[index];
    while (bookNextName !== "No More Books") {
        if (bookNextName === favouriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        bookNextName = input[index];
    }
    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}