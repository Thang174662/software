const http  = require('http')
const bl = require('bl')
const result = []
let count = 0
for(let i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], function (response) {
        response.pipe(bl(function (error, data) {
            if (error) return console.error(error)
            data = data.toString()
            result[i - 2] = data
            count++
            if (count === (process.argv.length - 2)) {
                for (let j = 0;  j< (process.argv.length - 2); j++){
                    console.log(result[j])
                }
            }
        }))
    }).on('error', console.log)
}