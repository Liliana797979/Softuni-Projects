function piccolo(commands) {
    let cars = [];
    for (let command of commands) {
        let [direction, carNumber] = command.split(", ");

        if (direction == "IN") {
            if (!cars.includes(carNumber)) {
                cars.push(carNumber);
            }
           
        } else {
            if (cars.includes(carNumber)) {
                cars.splice(cars.indexOf(carNumber), 1);
            } 
        }
    }
    //console.log(cars);
    let sortedCars = cars.sort((a, b) => a.localeCompare(b));
    if (sortedCars.length > 0) {
        console.log(sortedCars.join("\n"));
    } else {
        console.log(`Parking Lot is Empty`);
    }   
}