function mergeArrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            let sum = Number(arr1[i]) + Number(arr2[i]);
            result.push(sum);
        } else {
            result.push(arr1[i] + arr2[i]);
        }
    }
   console.log(result.join(" - "));
}