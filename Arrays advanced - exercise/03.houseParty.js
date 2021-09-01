function house(input) {
    let array = [];
    let nameGuest = "";
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(" ");
        let name = line[0];
        let command = line[2];

        if (command !== "not") {
            if (array.includes(name) === true) {
                console.log(`${name} is already in the list!`);
                continue;
            }
            array.push(name);
        } else {
            if (array.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            array = array.filter(x => x !== name);
        }
    }
    console.log(array.join('\n'));
}