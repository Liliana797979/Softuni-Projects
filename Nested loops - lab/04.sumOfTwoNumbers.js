function solve(arg) {
    let startNum = Number(arg[0]);
    let endtNum = Number(arg[1]); 
    let magicNum = Number(arg[2]);
    let counter = 0;
    isFound = false;
    isBreaked = false;
    for (i = startNum; i <= endtNum; i++) {
        for (j = startNum; j <= endtNum; j++) {
            counter++;
            if (i + j === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                isBreaked = true;
                break;
            }
        }
        if (isBreaked) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}