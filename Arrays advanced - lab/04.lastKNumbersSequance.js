function lastNumbersKSequence(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let elements = arr.slice(-k);
        //console.log(elements);
        let current = 0;
        for (let num of elements) {
            current += num;
        }
        arr.push(current);
    }
    console.log(arr.join(" "));
}