function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let ariveHour = Number(input[2]);
    let ariveMinute = Number(input[3]);
    let examTime = examHour * 60 + examMinute;
    let ariveTime = ariveHour * 60 + ariveMinute;
    let difference = examTime - ariveTime;
    if (difference < 0) {
        console.log('Late');
    } else if (difference <= 30) {
        console.log('On time');
    } else {
        console.log('Early');
    }
    if (difference <= -60) {
        if (Math.abs(difference) % 60 < 10 && difference < 0) {
            console.log(`${Math.floor(Math.abs(difference) / 60)}:0${Math.abs(difference) % 60} hours after the start`);
        } else if (difference < 0) {
            console.log(`${Math.floor(Math.abs(difference) / 60)}:${Math.abs(difference) % 60} hours after the start`);
        }
    } else if (difference > -60 && difference < 0) {
        console.log(`${Math.abs(difference)} minutes after the start`);
    } else if (difference < 60 && difference > 0) {
        console.log(`${difference} minutes before the start`);
    } else {
        if (difference % 60 < 10) {
            console.log(`${Math.floor(difference / 60)}:0${difference % 60} hours before the start`);
        } else if (difference > 0) {
            console.log(`${Math.floor(difference / 60)}:${difference % 60} hours before the start`);
        }
    }
}