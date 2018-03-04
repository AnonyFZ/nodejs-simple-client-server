var net = require('net')
var HOST = '127.0.0.1'
var PORT = 1337
var server = net.createServer()
server.listen(PORT, HOST)

var result = 0
server.on('connection', function(sock) {
  var operand = '+'
  sock.on('data', function(data) {
    var d = data.toString()
    if (d == '+' || d == '-') {
      operand = d
      sock.write('ok')
    } else {
      var number = parseInt(d.toString())
      if (operand == '+') result += number
      else if (operand == '-') result -= number
      sock.write(result.toString())
      sock.destroy()
      sock.end()
    }
  })
})
