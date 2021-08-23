function moving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let cubicM = w * l * h;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let box = Number(command);

        cubicM -= box;
        if (cubicM < 0) {
            console.log(`No more free space! You need ${Math.abs(cubicM)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (cubicM >= 0) {
        console.log(`${cubicM} Cubic meters left.`);
    }
}