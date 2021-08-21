function informationForSpeed(input) {
    let num1 = Number(input[0]);

    if (num1 <= 10) {
        console.log("slow");
    } else if (num1 <= 50) {
        console.log("average");
    } else if (num1 <= 150) {
        console.log("fast");
    } else if (num1 <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}