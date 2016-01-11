/**
 * Created by andliu2 on 1/10/16.
 */

var http = require('http'),
    log = require('./modules/logger');

const PORT = process.env.PORT;

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("It's nginx!");
    response.end();
    log.log(request.url);
    log.log(request.headers);
}).listen(PORT, function(){
    log.info('Listening Port: ' + PORT);
});
