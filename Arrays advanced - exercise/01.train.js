function train(input) {
    let wagons = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
    //console.log(wagons);
    let maxCapacity = Number(input.shift());
    //console.log(maxCapacity);
    for (let i = 0; i < input.length; i++) {
        let arrNew = input[i].split(" ");
        let command = arrNew[0];
        let firstValue = arrNew[1];
       // console.log(arrNew);
       // console.log(command);
       // console.log(firstValue);
       if (arrNew.length === 2 && command == "Add") {
           wagons.push(firstValue);
       } else {
           let passengers = Number(arrNew[0]);
           for (let j = 0; j < wagons.length; j++) {
               if (passengers + wagons[j] <= maxCapacity) {
                wagons[j] += passengers;
                break;
               }
           }
       }
       
    }
    console.log(wagons.join(" "));
}