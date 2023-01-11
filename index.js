class Student {
    constructor(enrolee) {
        this.is = Student.ID++;
        this.isSelfPayment = true;
        Object.assign(this, enrolee);

        Student.listOfStudents.push(this);
        Student.filterBySelfPayment();       
    }

    static ID = 1;

    static listOfStudents = [];    

    static filterBySelfPayment() {
        const studentsList = Student.listOfStudents;
        const sortStudentsList = studentsList.sort((a, b) => a.ratingPoint > b.ratingPoint ? 1 : -1);        

        for (const index in sortStudentsList) {
            const student = sortStudentsList[index];
            if (student.ratingPoint >= 800 && index > 5 ) {
                student.isSelfPayment = false;
                console.log(index)
            }    
        }


        
    }   
}



for (const enrolee of studentArr) {
    new Student(enrolee)
}

console.log(Student.listOfStudents)




