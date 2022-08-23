const fs = require('fs')
const { argv } = require('process')
fs.readdir(process.argv[2], function(error, data){
    if (error) console.log(error)
    else {
        data.forEach(function (file){
            if (filterFile(file)) console.log(file)
        })
    }
})

function filterFile(file) {
    return file.endsWith('.' + process.argv[3])
}


// cach2
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})