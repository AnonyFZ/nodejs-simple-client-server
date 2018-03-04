var net = require('net')
var sock = new net.Socket()
sock.connect(1337, '127.0.0.1', function () {
  sock.write('+')
})
sock.on('data', function (data) {
  var resp = data.toString()
  if (resp == 'ok') {
    sock.write('12')
  } else {
    console.log(resp)
    sock.destroy()
  }
})
