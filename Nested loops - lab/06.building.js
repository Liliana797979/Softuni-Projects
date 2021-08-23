function buildings(input) {
    for(let i = Number(input[0]); i > 0; i--) {
        let result = "";
        for (let j = 0; j < Number(input[1]) ; j++) {
            let letter;
            if (i == input[0]) {
                letter = "L";
            } else {
                if (i % 2 == 0) {
                    letter = "O";
                } else {
                    letter = "A";
                }
            }
            result += `${letter}${i}${j} `;
        }
        console.log(result);
        }
    }