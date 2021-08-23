function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index++]);
    let presentationsCount = 0;
    let averagesSum = 0;

    let presentation = input[index++];

    while (presentation !== "Finish") {
        let presentationSum = 0;

        for (let i = 0; i < juryCount; i++) {
            let currentGrade = Number(input[index++]);
            presentationSum += currentGrade;

        }

        let presentationAverage = presentationSum / juryCount;

        console.log(`${presentation} - ${presentationAverage.toFixed(2)}.`);

        averagesSum += presentationAverage;

        presentationsCount++;

        presentation = input[index++];

    }
    console.log(`Student's final assessment is ${(averagesSum / presentationsCount).toFixed(2)}.`);
}