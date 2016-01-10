/**
 * Created by andliu2 on 1/10/16.
 */

var http = require('http'),
    Logger = require('le_node'),
    log;

const PORT = process.env.NODE_PORT;

if(process.env.ENV_TYPE === 'develop') {
    log = console;
} else {
    log = new Logger({
        token:process.env.LOG_TOKEN
    });
}

log.info("I'm a Lumberjack and I'm OK");
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("It's alive!");
    response.end();
    log.log(request.url);
    log.log(request.headers);
}).listen(PORT, function(){
    log.info('Listening Port: ' + PORT);
    log.info('Server listening on: http://localhost:%s', PORT);
});
