var net = require('net')
var HOST = '127.0.0.1'
var PORT = 1337
var server = net.createServer()
server.listen(PORT, HOST)

var result = 0
server.on('connection', function(sock) {
  var operand = '+'
  sock.on('data', function(data) {
    if (data == '+' || data == '-') {
      operand = data
      sock.send('ok')
    } else {
      var number = parseInt(data)
      if (operand == '+') result += number
      else if (operand == '-') result -= number
      sock.send(result)
      sock.destroy()
      sock.end()
    }
  })
})
