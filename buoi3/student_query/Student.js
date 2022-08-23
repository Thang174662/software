class Student {
    constructor(ID, name, age, gender, dob, mathGrade, physicsGrade, chemistryGrade, englishGrade, className) {
        this.ID = ID
        this.name = name
        this.age = age
        this.gender = gender
        this.dob = dob
        this.mathGrade = mathGrade
        this.physicsGrade = physicsGrade
        this.chemistryGrade = chemistryGrade
        this.englishGrade = englishGrade
        this.className = className
    }

    averageScore() {
        return (this.mathGrade + this.physicsGrade + this.chemistryGrade + this.englishGrade) / 4
    }

    alphabetGrade(grade) {
        if (grade < 4) return ' F'
        else if (4 <= grade && grade < 5) return ' D'
        else if (5 <= grade && grade < 5.5) return ' D+'
        else if (5.5 <= grade && grade < 7) return ' C'
        else if (7 <= grade && grade < 8.5) return ' A'
        else return 'A'
    }

    passSubject(grade) {
        if (grade >= 4) return '    :Passed'
        else return '   :Failed'
    }
}

module.exports = Student