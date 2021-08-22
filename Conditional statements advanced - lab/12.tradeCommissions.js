     
function tradeCommissions(input) {
 
    let city = input[0];
    let turnover = Number(input[1]);
 
    if (turnover >= 0 && turnover <= 500) {
        switch (city) {
            case "Sofia": console.log((turnover * 0.05).toFixed(2)); break;
            case "Varna": console.log((turnover * 0.045).toFixed(2)); break;
            case "Plovdiv": console.log((turnover * 0.055).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
    else if(turnover > 500 && turnover <= 1000){
        switch (city) {
            case "Sofia": console.log((turnover * 0.07).toFixed(2)); break;
            case "Varna": console.log((turnover * 0.075).toFixed(2)); break;
            case "Plovdiv": console.log((turnover * 0.08).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
    else if(turnover > 1000 && turnover <= 10000){
        switch (city) {
            case "Sofia": console.log((turnover * 0.08).toFixed(2)); break;
            case "Varna": console.log((turnover * 0.10).toFixed(2)); break;
            case "Plovdiv": console.log((turnover * 0.12).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
    else if(turnover > 10000){
        switch (city) {
            case "Sofia": console.log((turnover * 0.12).toFixed(2)); break;
            case "Varna": console.log((turnover * 0.13).toFixed(2)); break;
            case "Plovdiv": console.log((turnover * 0.145).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
    else{
        console.log("error");
    }
}