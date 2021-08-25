function polindromeIntegers(arr) {
    let result = "";
    for (let num of arr) {
        let isPolindrome = `true`;
        let str = String(num);
        let reversedStr = str.split("").reverse().join("");
        isPolindrome = str === reversedStr ? `true` : `false`;
        
        result += isPolindrome + `\n`;
        }
        return result;
}