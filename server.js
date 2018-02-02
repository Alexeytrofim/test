var http = require('http');
var util=require('util');
//var jsdom=require('jsdom')
var server = http.createServer();
// Настройка слушателя событий для запроса
server.on('request', function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end(util.inspect(http,true,3,true));
})
server.listen(3000);
console.log('Server running at http://localhost:3000/');
