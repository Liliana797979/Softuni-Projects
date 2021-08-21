function petShop(input) {

    let dogsCount = Number(input[0]);
    let animalsCount = Number(input[1]);

    let dogsFood = dogsCount * 2.5;
    let animalsFood = animalsCount * 4;

    let totalSum = dogsFood + animalsFood;

    console.log(`${totalSum} lv`);
}