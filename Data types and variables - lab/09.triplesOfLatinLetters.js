function trippleLetters(n) {
    for(let i = 0; i < n; i++){
        let firstLetter = String.fromCharCode(i + 97);
        for(let j = 0; j < n; j++){
            let secondLetter = String.fromCharCode(j + 97);
            for(let k = 0; k < n; k++){
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }

    //   for (let i = 97; i < 97 + n; i++) {
    //       let firstLetter = String.fromCharCode(i);
    //     for (let j = 97; j < 97 + n; j++) {
    //         let secondLetter = String.fromCharCode(j);
    //       for (let k = 97; k < 97 + n; k++) {
    //         let thirdLetter = String.fromCharCode(k);
    //         console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
    //       }
    //     }
    //   }
}