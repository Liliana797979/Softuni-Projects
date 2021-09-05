function oddOccurrences(string) {
    let occurrences = {};
    let  listOfStrings = string.split(" ");
    //console.log(listOfStrings);

    for (let string of listOfStrings) {
        // set to lower case
        let stringToLower = string.toLowerCase();
        // check if string exists in occurrences
        if (!Object.keys(occurrences).includes(stringToLower)) {
        // if not exists -> create with count 0
            occurrences[stringToLower] = 0;
        }
        // increase count
        occurrences[stringToLower] += 1;
    }
   // console.log(occurrences);
   let resultString = "";
   for (let [key, value] of Object.entries(occurrences)) {
       if (value % 2 != 0) {
            resultString += `${key} `
       }
   }
   console.log(resultString);
}