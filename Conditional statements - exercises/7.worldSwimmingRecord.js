function recordSwimming(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let time = distanceInMetres * timeInSeconds;
    let delay = (Math.floor)(distanceInMetres / 15) * 12.5;
    let totalTime = time + delay;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else if (totalTime >= recordInSeconds) {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }
}