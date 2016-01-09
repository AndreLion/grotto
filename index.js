/**
 * Created by andliu2 on 1/10/16.
 */

var http = require('http');
const PORT = process.env.PORT;

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("It's alive!");
    response.end();
}).listen(PORT);
