const http = require('http')
const fs = require('fs')
const server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(process.argv[3])
    readStream.on('open', function() {
        readStream.pipe(res)
    })
    readStream.on('error', function() {
        res.end(err);
    })
})
server.listen(process.argv[2])