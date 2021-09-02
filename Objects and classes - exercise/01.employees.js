function employees(listOfEmploees) {
    for (let employee of listOfEmploees) {
        let employeeData = {
            name: employee,
            personalNumber: employee.length,


        };
        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNumber}`);
    }
};