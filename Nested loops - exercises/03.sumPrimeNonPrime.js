function sumPrimeNonPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let index = 0;

    let currentNumber = input[index++];

    while (currentNumber !== "stop") {
        currentNumber = Number(currentNumber);
        let isPrime = true;

        if (currentNumber < 0) {
            console.log(`Number is negative.`);
            currentNumber = input[index++];
            continue;
        }

        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += currentNumber;
        } else {
            nonPrimeSum += currentNumber;
        }

        currentNumber = input[index++];

    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}