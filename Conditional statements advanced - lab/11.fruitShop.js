function solve(arg) {
    let fruit = arg[0];
    let day = arg[1];
    let quantity = Number(arg[2]);
    let price = 0;
    let total_price = 0;  
    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit) {
                case "banana":
                    price = 2.50;
                    break;
                case "apple":
                    price = 1.20;
                    break;
                case "orange":
                    price = 0.85;
                    break;
                case "grapefruit":
                    price = 1.45;
                    break;
                case "kiwi":
                    price = 2.70;
                    break;
                case "pineapple":
                    price = 5.50;
                    break;
                case "grapes":
                    price = 3.85;
                    break;
                default:  // 'default' for the 1st nested 'switch'
                    console.log("error");
                    break;                                        
            }
            break;                       
        case "Saturday":
        case "Sunday":
            switch(fruit) {
                case "banana":
                    price = 2.70;
                    break;
                case "apple":
                    price = 1.25;
                    break;
                case "orange":
                    price = 0.90;
                    break;
                case "grapefruit":
                    price = 1.60;
                    break;
                case "kiwi":
                    price = 3.00;
                    break;
                case "pineapple":
                    price = 5.60;
                    break;
                case "grapes":
                    price = 4.20;
                    break;
                default:    // 'default' for the 2nd nested 'switch'
                    console.log("error");
                    break;                                      
            }       
            break;
        default:    // 'default' for the outer 'switch'
            console.log("error");
            break; 
    }
    if (price != 0) {
        total_price = quantity * price;
        console.log(total_price.toFixed(2));
    }
}