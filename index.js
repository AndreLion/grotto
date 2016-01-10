/**
 * Created by andliu2 on 1/10/16.
 */

var http = require('http'),
    Logger = require('le_node'),
    log;

const PORT = process.env.PORT;

log = new Logger({
    token:'c63ea773-e436-4faf-a5d9-da09789c42c3'
});


http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("It's alive!");
    response.end();
}).listen(PORT, function(){
    log.info('Listening Port: ' + PORT);
    log.info('Server listening on: http://localhost:%s', PORT);
});
