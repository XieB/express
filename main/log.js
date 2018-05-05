const log4js=require('log4js');
const path = require('path');
const logPath = path.resolve(__dirname,'..','logs/log.log');    //日志路径
log4js.configure({
    appenders: {
        out: { type: 'stdout' },//设置是否在控制台打印日志
        info: { type: 'file', filename: logPath, maxLogSize: 102400000, backups:3, },  //最大100MB
    },
    categories: {
        default: { appenders: [ 'out', 'info' ], level: 'info' }//去掉'out'。控制台不打印日志
    }
});
const log = log4js.getLogger('info');

module.exports = log;
