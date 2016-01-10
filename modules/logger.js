/**
 * Created by andliu2 on 1/10/16.
 */

var log;

if(process.env.ENV_TYPE === 'develop') {
    log = console;
} else {
    log = new require('le_node')({
        token:process.env.LOG_TOKEN
    });
}

module.exports = log;
