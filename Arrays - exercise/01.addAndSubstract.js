function addOrSubstract(arr) {
    let firstSum = 0;
    for (const el of arr) {
        firstSum += el;
    }
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        
        if (element % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }
    let secondSum = 0;
    for (const el of arr) {
        secondSum += el;
    }
    console.log(arr);
    console.log(firstSum);
    console.log(secondSum);
}