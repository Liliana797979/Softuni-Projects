function arrayManipultions(commands) {
    let newArray = commands
    .shift()
    .split(" ")
    .map(Number);
    //console.log(newArray);  
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
             case "RemoveAt":
                 removeAt(firstNum);
                 break;
             case "Insert":
                 insert(firstNum, secondNum);
                 break;
        }
    }
        function add(el) {
            newArray.push(el);
        }
        function remove(num) {
            newArray = newArray.filter(el => el !== num);
        }
        function removeAt(index) {
            newArray.splice(index, 1);
        }
        function insert(num, index) {
            newArray.splice(index, 0, num);
        }
        console.log(newArray.join(" "));
    }