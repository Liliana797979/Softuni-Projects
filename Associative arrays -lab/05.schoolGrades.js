
     
function solve(param) {
    let grades = {};
 
    for (let el of param) {
        let elements = el.split(' ');
        let name = elements.shift();
        let schoolGrades = elements.map(Number);
 
        if (!(grades.hasOwnProperty(name))) {
            grades[name] = schoolGrades
        } else {
            schoolGrades.forEach(el => {
                grades[name].push(el);
            })
        }
    }
    let output = Object.entries(grades).sort((a, b) => {
        return avg(a[1]) - avg(b[1]);
    })
    for (let [key, value] of output) {
        console.log(`${key}: ${value.join(', ')}`)
    }
 
    function avg(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
 
}