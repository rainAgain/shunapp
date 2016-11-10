var node_static = require('node-static');
var file = new node_static.Server('./build');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(8000);
