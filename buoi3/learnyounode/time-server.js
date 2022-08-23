const net = require('net')
const server = net.createServer(function (socket) {
    // socket handling logic
    let date = new Date();
    socket.end(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDay()).padStart(2, '0') + ' ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + '\n')
    })
server.listen(process.argv[2])