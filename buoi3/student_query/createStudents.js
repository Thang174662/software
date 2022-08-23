const Student = require('./Student')
const fs = require('fs')
function generateStudents(studentNum) {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let femaleNames = require('./data/female.json')
  let maleNames = require('./data/male.json')
  let surnames = require('./data/surnames.json')
  let students = []
  let name, gender, temp, temp1
  let temp2 = 0
  let count = 0
  console.log(femaleNames[0])
  for (let i = 0; i < studentNum; i++){
    temp = Math.floor(Math.random() * 2)
    if (temp == 1) {
      name = pickRandom(femaleNames.data) + ' ' + pickRandom(surnames.data)
      gender = 'F'
    }
    else {
      name = pickRandom(maleNames.data) + ' ' + pickRandom(surnames.data)
      gender = 'M'
    }
    temp1 = Math.floor(i / studentNum * 3)
    if (temp1 != temp2) {
      temp2++
      count = 0
    }
    students[i] = new Student(i, name, 16 + temp1, gender, randomDate(new Date(2006 - temp1, 0, 1), new Date(2006 - temp1, 11, 31)), Math.round(Math.random() * 100) / 10, Math.round(Math.random() * 100) / 10, Math.round(Math.random() * 100) / 10, Math.round(Math.random() * 100) / 10, 10 + temp1 + alphabet[Math.floor(count / 40)])
    console.log(students[i])
    count++
  }
  fs.writeFile('data/student.json', JSON.stringify(students), 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    })
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function processGrade(grade) {
  if (grade % 1 < 0.25) return Math.floor(grade)
  else if (0.25 <= grade % 1 && grade % 1 < 0.5) return Math.floor(grade) + 0.5
  else if (0.5 <= grade % 1 && grade % 1 < 0.75) return Math.floor(grade) + 0.5
  else return Math.floor(grade) + 1
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

generateStudents(3120)
