function smallestNumber(input) {
    let smallest = Number(input[0]);
    let index = 1;
        while(input[index] != "Stop") {
        input[index] = Number(input[index]);
        if (smallest > input[index]) {
        smallest = input[index];
    }
        index++;
    }
        console.log(smallest);
    }