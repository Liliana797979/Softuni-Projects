function commonElements(arr1, arr2) {
    for (const el of arr1) {
        let isCommon = arr2.includes(el);
        if (isCommon) {
            console.log(el);
        }
    }
}