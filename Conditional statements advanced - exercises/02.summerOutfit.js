     
function summerOutfit(input) {
    let degree = Number(input.shift());
    let partOfDay = input.shift();
 
    let outfit = "Shirt";
    let shoes = "Moccasins";
 
    switch (partOfDay) {
        case "Morning":
            if (degree >= 10 && degree <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degree >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (degree >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } else if (degree > 18) {
                outfit = "T-Shirt";
                shoes = "Sandals";          
            }
            break;
    }
 
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}