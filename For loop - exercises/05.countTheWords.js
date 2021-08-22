function countTheWords(input){
 
    let text = (input[0]);
    let words = 1;
 
 
    for (let i = 1; i <= text.length; i++){
 
        if (text.charAt(i) === " "){
 
            words += 1;
        }
    }
 
    if (words > 10){
 
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
 
        console.log(`The message was send successfully!`);
    }
}