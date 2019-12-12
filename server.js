var http = require('http')
var url = require('url')

function start(route, handle) {
  function onRequest(request, response) {
    pathname = url.parse(request.url).pathname

    route(handle, pathname)

    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World2')
    response.end()
  }
  http.createServer(onRequest).listen(8888)
}
exports.start = start
