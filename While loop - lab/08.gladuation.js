function graduation(input) {
 
    let name = input[0];
 
    let index = 0;
    
    
    
    let averageGrade = 0;
    let level = 1;
    let fails = 0;
    let isBadGradeReceived = false;
    while (level <= 12) {
        index++;
        grade = Number(input[index]);
       
        if (grade >= 4) {
            averageGrade += grade;
            level++;
            continue;
        } 
 
        fails++;
        averageGrade +=grade;
        if (fails>1){
            isBadGradeReceived = true;
            break;
        }
 
    }
    
    if (isBadGradeReceived) {
        console.log(`${name} has been excluded at ${level} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(averageGrade/12).toFixed(2)}`);
    }
}