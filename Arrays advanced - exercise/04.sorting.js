function sorting(numbers) {
    // create new array
    let sortedNumbers = [];
    let numbersLength = numbers.length;
// iterate i until length
    for (let i = 0; i < numbersLength; i++) {
             // if i % 2 === 0
             let number;
             if (i % 2 === 0) {
 // get biggest possible, add to new, delete from old
                number = Math.max(...numbers);
             } else {
            // else 
           // smallest possible

                number = Math.min(...numbers);
             }
             //add to new
             sortedNumbers.push(number);       
             // delete from old
             numbers.splice(numbers.indexOf(number), 1);
    }
    // print result
    console.log(sortedNumbers.join(" "));
}