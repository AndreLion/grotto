/**
 * Created by andliu2 on 1/10/16.
 */

var log;
var Logger = require('le_node');

if(process.env.ENV_TYPE === 'develop') {
    log = console;
} else {
    log = new Logger({
        token:process.env.LOG_TOKEN
    });
}

module.exports = log;
