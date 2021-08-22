function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    if (town === "Sofia") {
            switch (product) {
                case "coffee":
                    price = 0.5;
                    break;
                case "water":
                    price = 0.8;
                    break;
                case "beer":
                    price =  1.2;
                    break;
                case "sweets":
                    price = 1.45;
                    break;
                case "peanuts":       
                    price = 1.6;
                    break;
                    default:
                        break;
            }
        
         } else if (town === "Plovdiv") {
            switch (product) {
                case "coffee":
                    price = 0.4;
                    break;
                case "water":
                    price = 0.7;
                    break;
                case "beer":
                    price =  1.15;
                    break;
                case "sweets":
                    price = 1.30;
                    break;
                case "peanuts":       
                    price = 1.5;
                    break;
                    default:
                        break;
         }
                       
            } else {
            switch (product) {
                case "coffee":
                    price = 0.45;
                    break;
                case "water":
                    price = 0.7;
                    break;
                case "beer":
                    price =  1.1;
                    break;
                case "sweets":
                    price = 1.35;
                    break;
                case "peanuts":       
                    price = 1.55;
                    break;
                    default:
                        break;
         } 
        }
        let totalPrice = price * quantity;
        console.log(totalPrice);      
        }