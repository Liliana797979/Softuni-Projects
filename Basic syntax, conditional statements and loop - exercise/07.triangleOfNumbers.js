function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let numbers = "";
        for (let j = 1; j <= i; j++) {
            numbers += i + " ";
        }
       console.log(`${numbers}`);
    }
}