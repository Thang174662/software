const bl = require('bl')
const http = require('http')
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (error, data) {
        if(error) console.log(error)
        else {
            console.log(data.length)
            console.log(data.toString())
        }
    }))
}).on('error', console.log)