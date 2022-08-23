const Student = require('./Student')
const fs = require('fs')
let students = require('./data/student.json')
const { mainModule } = require('process')
function averageScores() {
    let res = []
    for (let i = 0; i < students.length; i++){
        let student = new Student(students[i].ID, students[i].name, students[i].age, students[i].gender, students[i].dob, students[i].mathGrade, students[i].physicsGrade, students[i].chemistryGrade, students[i].englishGrade, students[i].className)
        res[i] = {'ID': student.ID, 'name': student.name, 'age': student.age, 'gender': student.gender, 'dob': student.dob, 'avarage score': student.averageScore(), 'class': student.className}
        console.log(res[i])
    }
    fs.writeFile('data/studentAverageScore.json', JSON.stringify(res), 'utf8', function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      })
}

averageScores()

function alphabetScores() {
    let res = []
    for (let i = 0; i < students.length; i++){
        let student = new Student(students[i].ID, students[i].name, students[i].age, students[i].gender, students[i].dob, students[i].mathGrade, students[i].physicsGrade, students[i].chemistryGrade, students[i].englishGrade, students[i].className)
        res[i] = {'ID': student.ID, 'name': student.name, 'age': student.age, 'gender': student.gender, 'dob': student.dob, 'math score': student.mathGrade + student.alphabetGrade(student.mathGrade), 'physics score': student.physicsGrade + student.alphabetGrade(student.physicsGrade), 'chemistry score': student.chemistryGrade + student.alphabetGrade(student.chemistryGrade), 'english score': student.englishGrade + student.alphabetGrade(student.englishGrade),'class': student.className}
        console.log(res[i])
    }
    fs.writeFile('data/studentAlphabetScore.json', JSON.stringify(res), 'utf8', function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      })
}

alphabetScores()

function passSubject() {
    let res = []
    for (let i = 0; i < students.length; i++){
        let student = new Student(students[i].ID, students[i].name, students[i].age, students[i].gender, students[i].dob, students[i].mathGrade, students[i].physicsGrade, students[i].chemistryGrade, students[i].englishGrade, students[i].className)
        res[i] = {'ID': student.ID, 'name': student.name, 'age': student.age, 'gender': student.gender, 'dob': student.dob, 'math score': student.mathGrade + student.passSubject(student.mathGrade), 'physics score': student.physicsGrade + student.passSubject(student.physicsGrade), 'chemistry score': student.chemistryGrade + student.passSubject(student.chemistryGrade), 'english score': student.englishGrade + student.passSubject(student.englishGrade),'class': student.className}
        console.log(res[i])
    }
    fs.writeFile('data/studentPassSubject.json', JSON.stringify(res), 'utf8', function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      })
}

passSubject()

function highlowScore() {
    let classes = new Set()
    let res = []
    let min, max
    for (let i = 0; i < students.length; i++){
        classes.add(students[i].className)
    }
    const myIterator = classes.values()
    for (const entry of myIterator) {
        min = 10
        max = 0
        temp = {'class': entry, 'highest': null, 'lowest': null}
        for (let i = 0; i < students.length; i++){
            if (students[i].className === entry){
                let student = new Student(students[i].ID, students[i].name, students[i].age, students[i].gender, students[i].dob, students[i].mathGrade, students[i].physicsGrade, students[i].chemistryGrade, students[i].englishGrade, students[i].className)
                if (student.averageScore() < min) {
                    temp.lowest = {'ID': student.ID, 'name': student.name, 'age': student.age, 'gender': student.gender, 'dob': student.dob, 'avarage score': student.averageScore(), 'class': student.className}
                    min = student.averageScore()
                }
                if (student.averageScore() > max) {
                    temp.highest = {'ID': student.ID, 'name': student.name, 'age': student.age, 'gender': student.gender, 'dob': student.dob, 'avarage score': student.averageScore(), 'class': student.className}
                    max = student.averageScore()
                }
            }
        }
        console.log(temp)
        res.push(temp)
    }
    fs.writeFile('data/studentHighLow.json', JSON.stringify(res), 'utf8', function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      })
}

highlowScore()