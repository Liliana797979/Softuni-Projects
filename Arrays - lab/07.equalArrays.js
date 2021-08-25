function equalArrays(firstArray, secondArray) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {

        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;

        }
        sum += Number(firstArray[i]);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}