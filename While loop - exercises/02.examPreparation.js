function examPreparation(input){
    let index = 0;
    let badGrades = Number(input[index]);
    index++;
    let taskName = input[index];
    index++;
    let grade = Number(input[index]);
    let badGradesCounter = 0;
    let total = 0;
    
    while(taskName !== "Enough"){
        index++;
        taskName = input[index];
        if(grade<=4){
            badGradesCounter++;
            if(badGradesCounter===badGrades){
                console.log(`You need a break, ${badGradesCounter} poor grades.`);
                break;
            }
        }
        total+=grade;
        index++;
        grade = Number(input[index]);
        
    }
    if(taskName === "Enough"){
        console.log(`Average score: ${(total/(Number(index-2)/2)).toFixed(2)}`);
        console.log(`Number of problems: ${(index-2)/2}`);
        console.log(`Last problem: ${input[index-3]}`);
    }
 
}